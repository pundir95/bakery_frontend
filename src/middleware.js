// middleware.js
import { NextResponse } from "next/server";

const PRIVATE_ROUTES = ["/"];
const PUBLIC_ROUTES = ["/login", "/sign-up"];

export function middleware(req) {
  const token = req.cookies.get("authToken");
  const { pathname } = req.nextUrl;

  if (!token && PRIVATE_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL("/", req.url));
  }
  return NextResponse.next();
}

// Define the paths where middleware should run
export const config = {
  matcher: ["/", "/index", "/login", "/sign-up"],
};
