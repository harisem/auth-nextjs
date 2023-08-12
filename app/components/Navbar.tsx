"use client";

import { logout } from "@/services";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const { push } = useRouter();

  const handleLogout = async () => {
    try {
      const { message } = await logout();
      alert(message);

      push("auth/login");
    } catch (e) {
      const error = e as AxiosError;
      alert(error.message);

      return;
    }
  };
  return (
    <nav className="absolute top-0 p-4 w-full border-b-2 border-black bg-black">
      <ul className="flex justify-end space-x-2">
        <button
          onClick={handleLogout}
          className="p-[.5rem] rounded-md border-2 border-white font-semibold text-white hover:bg-white hover:text-black"
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}
