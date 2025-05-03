<script lang="ts">
  import { navigating, updated } from "$app/state";
  let { children } = $props();
  import "../app.css";
  import MyFile from "$lib/assets/Jan_Sobolewski_Resume.pdf";
</script>

export const prerender = true;
<header class="sticky top-0 z-50 bg-white shadow-md">
  <nav class="container mx-auto flex items-center justify-between px-6 py-4">
    <a href="/" class="text-2xl font-bold text-indigo-600 hover:text-indigo-800"
      >Jan Sobolewski</a
    >
    <div class="hidden items-center space-x-6 md:flex">
      <a
        href="#about"
        class="text-gray-600 transition duration-300 hover:text-indigo-600"
        >About</a
      >
      <a
        href="#projects"
        class="text-gray-600 transition duration-300 hover:text-indigo-600"
        >Projects</a
      >
      <a
        href="#contact"
        class="text-gray-600 transition duration-300 hover:text-indigo-600"
        >Contact</a
      >
      <a
        href={MyFile}
        target="_blank"
        class="rounded-md bg-indigo-600 px-4 py-2 text-white transition duration-300 hover:bg-indigo-700"
        >Resume</a
      >
    </div>
  </nav>
</header>
{@render children()}

{#if navigating.to}
  navigating to {navigating.to.url.pathname}
{/if}

{#if updated.current}
  <div class="toast">
    <p>
      A new version of the app is available

      <button onclick={() => location.reload()}> reload the page </button>
    </p>
  </div>
{/if}

<style>
  .toast {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  .toast p {
    display: flex;
    align-items: center;
    gap: 1rem;
    background: var(--bg-2);
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-radius: 4px;
  }
</style>
