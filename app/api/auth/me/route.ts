import { AUTH_COOKIE_NAME, JWT_SECRET } from "@/app/lib/constants";
import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookieStore = cookies();
  const token = cookieStore.get(AUTH_COOKIE_NAME);

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const { value } = token;

  try {
    const data = verify(value, JWT_SECRET) as { [key: string]: any };

    const response = {
      message: "Success",
      data: {
        name: data.name,
        username: data.username,
      },
    };

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { message: "Something went wrong." },
      { status: 500 }
    );
  }
}
