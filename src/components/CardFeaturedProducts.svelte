<script lang="ts">
  export let data;
</script>

<div class="bg-gray-200 rounded-lg overflow-hidden shadow-md">
  <img
    src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"
    alt="Producto ropa"
    class="w-full h-auto"
  />
  <div class="p-4">
    <h3 class="text-lg font-semibold mb-2">{data}</h3>
    <p class="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis
      ducimus inventore enim non nam aliquam sint placeat eligendi ut ad est
      alias porro, in incidunt neque itaque optio magnam velit.
    </p>
    <a
      href="/products"
      class="block mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >Ver Producto</a
    >
  </div>
</div>
