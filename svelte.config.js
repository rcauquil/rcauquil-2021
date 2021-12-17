import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import adapter from '@sveltejs/adapter-static'

const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    mdsvex({
      layout: {
        code: './src/components/layouts/CodeLayout.svelte',
        _: './src/components/layouts/CodeLayout.svelte'
      }
    }),
    preprocess({
      postcss: true
    })
  ],
  kit: {
    adapter: adapter(),
    target: '#svelte'
  }
}

export default config
