import Navbar from "../components/Navbar";
import Providers from "../providers";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative min-h-screen bg-white text-black">
      <Navbar />
      <Providers>{children}</Providers>
    </main>
  );
}
