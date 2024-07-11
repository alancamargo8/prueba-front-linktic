import { writable, get } from "svelte/store";

// Definimos el tipo para los productos
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Definimos el tipo para los ítems del carrito
interface CartItem extends Product {
  quantity: number;
}

export interface IOrder {
  products: Array<{
    productId: string;
    quantity: number;
  }>;
  totalAmount: number;
  status: string;
}

// Creamos el store con un tipo específico
const cart = writable<CartItem[]>([]);

function addToCart(product: Product) {
  cart.update((items) => {
    const itemIndex = items.findIndex((item) => item.id === product.id);

    if (itemIndex !== -1) {
      items[itemIndex].quantity += 1;
    } else {
      items.push({ ...product, quantity: 1 });
    }
    alert("Añadido con exito");
    console.log(items);
    return items;
  });
}

function getTotal(cartItems: CartItem[]): number {
  return cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
}

async function placeOrder() {
  const items = get(cart);

  const order: IOrder = {
    products: items.map((item) => ({
      productId: item.id.toString(),
      quantity: item.quantity,
    })),
    totalAmount: getTotal(items),
    status: "Pagado",
  };

  try {
    const response = await fetch(
      "https://prueba-backend-linktic-production.up.railway.app/order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log("Orden:", data);
    alert("Orden procesada con exito...");
    clearCart(); // Vaciar el carrito después de realizar la compra
  } catch (error) {
    console.error(error);
  }
}

function removeFromCart(productId: number) {
  cart.update((items) => {
    return items.filter((item) => item.id !== productId);
  });
}

function clearCart() {
  cart.set([]);
}

export { cart, addToCart, getTotal, placeOrder, removeFromCart, clearCart };
export type { Product, CartItem };
