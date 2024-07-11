<script lang="ts">
  import CardProducts from "../../components/CardProducts.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<h2 class="text-3xl font-semibold mb-10 text-center">Productos</h2>

<div class="bg-white">
  <div
    class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
  >
    {#if data && data.products.length > 0}
      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
      >
        {#each data.products as product}
          <CardProducts data={product} />
        {/each}
      </div>
    {:else}
      <p class="text-2xl text-center">Añada productos...</p>
    {/if}
  </div>
</div>
