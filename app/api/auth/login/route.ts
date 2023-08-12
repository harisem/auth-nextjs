import { AUTH_COOKIE_NAME, JWT_EXPIRE, JWT_SECRET } from "@/app/lib/constants";
import { serialize } from "cookie";
import { sign } from "jsonwebtoken";
import { NextResponse } from "next/server";
import userData from "@/app/user.json";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  const user = userData.filter((el) => {
    const isUsername = username === el.username;
    const isPassword = password === el.password;

    if (isUsername && isPassword) return el;
  });

  if (user.length < 1) {
    return NextResponse.json(
      { message: "Unauthorized", data: null },
      { status: 401 }
    );
  }

  const token = sign(
    { name: user[0].name, username: user[0].username },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRE }
  );

  const serialized = serialize(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: JWT_EXPIRE,
    path: "/",
  });

  const response = {
    message: "Authenticated!",
    data: { token: token },
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": serialized },
  });
}
