import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch(
    `https://prueba-backend-linktic-production.up.railway.app/products/${params.product}`
  );
  const product = await res.json();

  return {
    product,
  };
};
