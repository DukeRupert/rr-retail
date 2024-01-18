<script lang="ts">
  import { company } from "$lib/constants";
</script>

<main class="lg:flex lg:min-h-full lg:flex-row-reverse">
  <section
    class="flex-auto px-4 pb-16 pt-12 sm:px-6 sm:pt-16 lg:px-8 lg:pb-4 lg:pt-0"
  >
    <div class="mx-auto max-w-3xl">
      <div class="max-w-xl flex flex-col items-center justify-center gap-y-4">
        <div class="pb-4">
          <span class="sr-only">{company.name}</span>
          <a href="/"
            ><img
              src={company.logo.src}
              alt={company.logo.alt}
              class="h-24 w-auto"
            /></a
          >
        </div>
        <h1 class="text-base font-medium text-thunderbird-500">Thank you!</h1>
        <p class="mt-2 text-4xl font-bold tracking-tight">It's on the way!</p>
        <a href="/" class="btn">&larr; Return home</a>
      </div>
    </div>
  </section>
</main>
