<script lang="ts">
  import "../app.postcss";
  import type { PageData } from "./$types";
  import { page } from "$app/stores";
  import NavBar from "$lib/components/NavBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  export let data: PageData;
  const nakedPaths = ["/auth", "/checkout", "/sitemap.xml"];
  $: naked = nakedPaths.includes($page.url.pathname);
  $: user = data?.user;
  $: cart = data?.cart;
  $: count = cart?.items?.length || null;
</script>

{#if naked}
  <slot />
{:else}
  <NavBar bind:user bind:cart bind:count />
  <slot />
  <Footer />
{/if}
