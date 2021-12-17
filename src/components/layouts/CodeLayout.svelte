<script>
  import Icon from '../Icon.svelte'
  import { faCode } from '@fortawesome/free-solid-svg-icons'

  export let title
  export let description
  export let date
  export let tags
  export let slug
  export let ogImage = '/ogimage.jpg'
  const url = import.meta.env.VITE_URL
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <meta property="og:url" content={`${url}/blog/${slug}`} />
  <meta property="og:description" content={description} />
  <meta property="og:title" content={title} />
  <meta property="og:type" content="website" />
  <meta property="og:image" content={`${url}/${ogImage}`} />
  <link rel="stylesheet" href="/styles/prism-night-owl.min.css" />
</svelte:head>

<header class="text-gray-100 py-10">
  <!-- Title -->
  <h1 class="text-gray-100 text-5xl font-light leading-snug">
    {title}
  </h1>

  <!-- Baseline -->
  <div class="py-2">
    <!-- Date -->
    <div class="text-xl font-medium text-gray-300">
      {new Date(date).toLocaleDateString()}
    </div>
    <!-- Tags -->
    <div>
      {#if tags}
        <pre class="text-md">{tags}</pre>
      {/if}
    </div>
  </div>
</header>

<main class="bg shadow shadow-2xl px-4 py-8 sm:p-20 text-gray-300">
  <div class="text-center mb-12">
    <Icon class="text-important text-3xl" icon={faCode} />
  </div>
  <slot />
</main>

<style>
  main :global(a) {
    @apply font-bold text-yellow-500 underline;
  }

  main :global(a:hover) {
    @apply text-yellow-400;
  }

  main :global(h2) {
    @apply text-5xl font-medium pt-16 pb-4;
  }

  main :global(h3) {
    @apply text-3xl font-medium pt-8 pb-4;
  }

  main :global(h4) {
    @apply text-2xl font-light py-4 text-red-500;
  }

  main :global(p) {
    @apply text-xl font-serif font-light pb-4 leading-relaxed;
  }

  main :global(pre) {
    @apply mb-4;
  }

  main :global(code:not([class])) {
    @apply bg-gray-200 text-gray-700 px-2 py-1 text-sm;
    border-radius: 0.3em;
  }

  main :global(blockquote) {
    @apply border-l-4 border-indigo-900 px-6 pt-4 pb-6 my-12 text-indigo-300 italic;
  }

  main :global(blockquote p) {
    @apply p-0;
  }

  main :global(ul) {
    @apply text-base font-light pb-6 list-disc list-inside pl-4;
  }
  main :global(ul ul) {
    @apply pb-0;
  }
  main :global(li) {
    @apply py-1;
  }

  main :global(img) {
    @apply max-w-lg w-full m-auto p-2;
  }
</style>
