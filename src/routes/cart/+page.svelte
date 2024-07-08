<script>
  import {
    cart,
    getTotal,
    placeOrder,
    removeFromCart,
    clearCart,
  } from "./cart";
  $: total = getTotal($cart);
</script>

<div class="bg-white shadow-lg rounded-lg overflow-hidden">
  <h2 class="text-2xl font-bold p-4 border-b border-gray-200">
    Carrito de Compra
  </h2>
  <div class="p-4">
    <!-- lista de productos en el carrito -->
    {#each $cart as item}
      <div class="flex items-center justify-between mb-4">
        <div class="flex items-center space-x-4">
          <img
            src={item.image
              ? item.image
              : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"}
            alt="Producto 1"
            class="w-16 h-auto"
          />
          <div>
            <h3 class="font-semibold">{item.name}</h3>
            <p class="text-gray-600">Precio: ${item.price}</p>
          </div>
        </div>
        <div>
          <input
            type="number"
            min="1"
            max="10"
            value={item.quantity}
            class="w-16 border-gray-300 border text-center"
          />
          <button
            class="ml-2 text-red-500"
            on:click={() => removeFromCart(item.id)}>Eliminar</button
          >
        </div>
      </div>
    {/each}

    <!-- Resumen del carrito -->
    <div class="mt-8">
      <h3 class="text-lg font-semibold mb-2">Resumen del Carrito</h3>
      <div class="flex justify-between mb-2">
        <span class="text-gray-600">Subtotal:</span>
        <span class="font-bold">${total}</span>
      </div>
      <div class="flex justify-between mb-2">
        <span class="text-gray-600">Envío:</span>
        <span class="font-bold">$5.00</span>
      </div>
      <div class="flex justify-between">
        <span class="text-lg font-bold">Total:</span>
        <span class="text-lg font-bold">${total == 0 ? 0 : total + 5}</span>
      </div>
      <div class="flex justify-end gap-5">
        <button
          class="mt-4 block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-center"
          on:click={placeOrder}>Proceder al Pago</button
        >
        <button
          class="bg-red-500 text-white p-2 rounded mt-4"
          on:click={clearCart}>Vaciar carrito</button
        >
      </div>
    </div>
  </div>
</div>
