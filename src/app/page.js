import Landing from "@/component/Landing/Landing";
import { handleFetch } from "@/hooks/useRequest";

export default async function Home() {
  const products = await handleFetch("shop/products");

  return (
    <div>
      <Landing products={products || []} />
    </div>
  );
}
