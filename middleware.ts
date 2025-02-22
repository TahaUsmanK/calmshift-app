import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
const res = NextResponse.next();
const supabase = createMiddlewareClient({ req, res });
const {
data: { session },
} = await supabase.auth.getSession();

// Define public and protected routes
const publicRoutes = ["/", "/auth/login", "/auth/register", "/auth/callback"];
const authRoutes = ["/auth/login", "/auth/register", "/auth/callback"];
const isPublicRoute = publicRoutes.includes(req.nextUrl.pathname);
const isAuthRoute = authRoutes.includes(req.nextUrl.pathname);

// Allow unrestricted access for development
if (process.env.NODE_ENV === "development") {
return res;
}

// Redirect unauthenticated users away from protected routes
if (!session && !isPublicRoute) {
return NextResponse.redirect(new URL("/auth/login", req.url));
}

// Prevent authenticated users from accessing auth routes
if (session && isAuthRoute) {
return NextResponse.redirect(new URL("/dashboard", req.url));
}

// Redirect authenticated users from the landing page to dashboard
if (session && req.nextUrl.pathname === "/") {
return NextResponse.redirect(new URL("/dashboard", req.url));
}

return res;
}

// Update matcher to exclude public assets and API routes
export const config = {
matcher: [
"/((?!_next/static|_next/image|favicon.ico|.\.(?:svg|png|jpg|jpeg|gif|webp)$).)",
],
};