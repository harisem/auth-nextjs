import { AUTH_COOKIE_NAME } from "@/app/lib/constants";
import { cookies } from "next/headers";

export async function POST() {
  cookies().delete(AUTH_COOKIE_NAME);

  const response = { message: "Logout success." };
  return new Response(JSON.stringify(response), { status: 200 });
}
