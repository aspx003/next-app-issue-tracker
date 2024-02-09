import Link from "next/link";
import ProductCard from "./components/ProductCArd";

export default function Home() {
  return (
    <main>
      Hekki!
      <Link href="/users">Go to users.</Link>
      <ProductCard />
    </main>
  );
}
