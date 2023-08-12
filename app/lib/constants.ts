export const COOKIE_NAME = process.env.COOKIE || "my-cookie";
export const AUTH_COOKIE_NAME = process.env.COOKIE || "auth";
export const JWT_SECRET = process.env.JWT_SECRET_KEY || "";
export const JWT_EXPIRE = parseInt(process.env.JWT_EXPIRES_IN || "60");
