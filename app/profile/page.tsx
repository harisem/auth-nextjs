import { getUser } from "@/services";
import getQueryClient from "../lib/getQueryClients";
import { dehydrate } from "@tanstack/react-query";
import Hydrate from "../lib/_components/Hydrate";
import Content from "./_components/Content";

export default async function Profile() {
  async function dehydratedState() {
    "use server";

    const queryClient = getQueryClient();
    await queryClient.prefetchQuery(["users"], getUser);
    const dehydratedState = dehydrate(queryClient);

    return dehydratedState;
  }

  return (
    <Hydrate state={dehydratedState}>
      <section className="flex w-full min-h-screen justify-center items-center">
        <Content />
      </section>
    </Hydrate>
  );
}
