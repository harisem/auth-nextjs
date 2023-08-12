"use client";

import { getUser } from "@/services";
import { useQuery } from "@tanstack/react-query";

export default function Content() {
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUser,
  });

  return isLoading ? (
    <p className="text-5xl">Loading...</p>
  ) : (
    <div>
      <p className="text-7xl">Hello there, {data?.data?.name}.</p>
      <p className="text-5xl">U&apos;d just login, congrats!</p>
    </div>
  );
}
