<script context="module">
  /** @type {import('@sveltejs/kit').ErrorLoad} */
  export function load({ error, status }) {
    return {
      props: {
        error,
        status
      }
    }
  }
</script>

<script>
  export let error
  export let status
</script>

<h1 class="font-serif text-6xl font-bold text-gray-200 mb-4 sm:mb-2">
  {status}
</h1>

{#if import.meta.env.DEV && error}
  <pre>{error.stack}</pre>
{/if}
