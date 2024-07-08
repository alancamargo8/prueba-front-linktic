<script lang="ts">
  import DetailProduct from "../../../components/DetailProduct.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div
  class="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8"
>
  <DetailProduct {data} />
</div>
