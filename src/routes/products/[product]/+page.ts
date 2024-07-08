import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch(`http://localhost:3000/products/${params.product}`);
  const product = await res.json();

  return {
    product,
  };
};
