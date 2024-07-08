<script lang="ts">
  import CardFeaturedProducts from "../components/CardFeaturedProducts.svelte";
  import Hero from "../components/Hero.svelte";

  const clothes = ["Sueter Azul M", "Bermuda verde M", "Pantalon marron M"];
</script>

<Hero />

<div class="p-6 bg-white shadow-lg rounded-lg">
  <h2 class="text-2xl font-bold mb-4">Productos Destacados</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    {#each clothes as clothe}
      <CardFeaturedProducts data={clothe} />
    {/each}
  </div>
</div>
