import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
  let result;
  try {
    const response = await fetch(
      "https://prueba-backend-linktic-production.up.railway.app/products"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    result = await response.json();
  } catch (error) {
    console.log(error);
  }

  return {
    products: result.products,
  };
};
