"use client";

import { login } from "@/services";
import { Login } from "@/types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function Login() {
  const { push } = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const payload: Login = {
      username: event.currentTarget.username.value,
      password: event.currentTarget.password.value,
    };

    try {
      const { data, message } = await login(payload);
      if (!data) return;
      push("/profile");
    } catch (e) {
      const error = e as AxiosError;
      push("/auth/login");
    }
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex w-[20rem] h-[15rem] items-center justify-center rounded-xl text-[#0D1B2A]">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center space-y-4 p-4"
        >
          <div className="flex space-x-4 items-center">
            <label className="text-md font-semibold" htmlFor="username">Username</label>
            <input
              className="rounded-full border-[#0D1B2A] border-2 px-2 text-black"
              type="text"
              id="username"
              name="username"
              required
            />
          </div>
          <div className="flex space-x-4 items-center">
            <label className="text-md font-semibold" htmlFor="password">Password</label>
            <input
              className="rounded-full border-[#0D1B2A] border-2 px-2 text-black"
              type="password"
              id="password"
              name="password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 rounded-full bg-[#0D1B2A] text-white text-md font-bold"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
