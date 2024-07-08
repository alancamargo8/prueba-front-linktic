<script>
  import {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  } from "../routes/cart/cart";
  export let data;
  const { name, _id, description, price, stock, image } = data.product;
</script>

<div
  class="aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 sm:overflow-hidden sm:rounded-lg"
>
  <img
    src={image
      ? image
      : "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg"}
    alt="Model wearing plain white basic tee."
    class="h-full w-full object-cover object-center"
  />
</div>

<div
  class="px-4 pb-16 pt-10 sm:px-6 flex flex-col gap-y-5 lg:max-w-7xl lg:px-8 lg:pb-24 lg:pt-16"
>
  <h2 class="text-4xl">{name}</h2>
  <span>Sku: {_id}</span>
  <div>
    <h3 class="sr-only">Description</h3>

    <div class="space-y-6">
      <p class="text-base text-gray-900">
        {description}
      </p>
    </div>
  </div>
  <p class="text-2xl tracking-tight text-gray-900">
    Cantidad disponible: {stock}
  </p>
  <p class="text-2xl tracking-tight text-gray-900">Precio: $ {price}</p>
  <button
    class="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    on:click={() =>
      addToCart({
        id: _id,
        name: name,
        price: price,
        image: image,
      })}>Add to cart</button
  >
</div>
