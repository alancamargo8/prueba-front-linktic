<script>
  export let data;
</script>

<div class="group relative">
  <div
    class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80"
  >
    <img
      src={data.image
        ? data.image
        : "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg"}
      alt="Front of men&#039;s Basic Tee in black."
      class="h-full w-full object-cover object-center lg:h-full lg:w-full"
    />
  </div>
  <div class="mt-4 flex justify-between">
    <div>
      <h3 class="text-sm text-gray-700">
        <a href="/products/{data._id}">
          <span aria-hidden="true" class="absolute inset-0"></span>
          {data.name}
        </a>
      </h3>
      <p class="mt-1 text-sm text-gray-500">{data.category}</p>
    </div>
    <p class="text-sm font-medium text-gray-900">$ {data.price}</p>
  </div>
</div>
