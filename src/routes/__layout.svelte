<script>
  import '../app.css'
  import Nav from '../components/Nav.svelte'
</script>

<div class="max-w-6xl container mx-auto max-w-6xl px-4">
  <div class="py-6">
    <Nav />
  </div>

  <div class="sm:mt-20 py-12">
    <slot />
  </div>
</div>
