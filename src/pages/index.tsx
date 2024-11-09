import Image from "next/image";
import TableSection from "@/components/table/table-section";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-bold">Restaurant Manager</h1>
      <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
      <TableSection />
    </main>
  );
}
