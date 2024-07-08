<script lang="ts">
  import "../app.css";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<Header />

<main class="flex-1 container mx-auto py-8">
  <slot />
</main>

<Footer />
