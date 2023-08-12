import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME } from "./app/lib/constants";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.has(AUTH_COOKIE_NAME);
  if (cookie) return NextResponse.next();
  return NextResponse.redirect(new URL("/auth/login", req.url));
}

export const config = {
  matcher: "/profile/:path*",
};
