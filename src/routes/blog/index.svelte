<script context="module">
  export async function load({ page, fetch }) {
    const url = '/blog.json'
    const res = await fetch(url)

    return res.ok
      ? { props: await res.json() }
      : {
          status: res.status,
          error: new Error(`Could not load ${url}`)
        }
  }
</script>

<script>
  import Icon from '../../components/Icon.svelte'
  import { faCode, faChevronRight } from '@fortawesome/free-solid-svg-icons'

  export let posts
</script>

<svelte:head>
  <title>Blog - rcauquil : design, code, electronic, food and diy</title>
  <meta
    name="description"
    content="Here I share thoughts, tutorials about design, code, electronic, food and everything you can make yourself !"
  />

  <meta property="og:url" content="{import.meta.env.VITE_URL}/blog" />
  <meta property="og:title" content="Blog - @rcauquil : design, code, electronic, food and diy" />
  <meta
    property="og:description"
    content="Here I share thoughts, tutorials about design, code, electronic, food and everything you can make yourself !"
  />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="ogimage.jpg" />
</svelte:head>

<main>
  <!-- Posts -->
  <section>
    {#each posts.code as post}
      <a
        href="/blog/code/{post.fileName}"
        class="block md:flex group bg items-center shadow hover:shadow-2xl bg-gray-200 rounded rounded-lg mb-4 last:mb-0 px-6 py-2"
      >
        <div class="md:grow">
          <!-- Date -->
          <div class="text-sm font-medium text-gray-400">
            {new Date(post.attributes.date).toLocaleDateString()}
          </div>

          <!-- Title -->
          <h2 class="text-xl font-medium text-gray-200">
            {post.attributes.title}
          </h2>

          <!-- Tags -->
          {#if post.attributes.tags}
            <pre
              class="text-ellipsis overflow-hidden whitespace-no-wrap text-sm text-gray-300">{post
                .attributes.tags}</pre>
          {/if}
        </div>

        <div
          class="hidden md:block ease-in-out duration-300 text-transparent group-hover:text-white pr-4 group-hover:pr-0"
        >
          <Icon class="text-xl" icon={faChevronRight} />
        </div>
      </a>
    {/each}
  </section>
</main>
