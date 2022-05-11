<script>
  import Logo from './Logo.svelte'
  import Icon from './Icon.svelte'
  import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
</script>

<nav class="flex items-center justify-between h-4 text-important">
  <a style="height:100%" href="/">
    <Logo />
  </a>

  <div class="text-center text-gray-300 grid gap-x-0 grid-cols-4">
    <!-- Instagram -->
    <a
      class="hover:text-orange-400"
      href="https://instagram.com/rcauquil"
      title="Instagram account - @rcauquil"
      target="_blank"
    >
      <Icon icon={faInstagram} />
    </a>
    <!-- Linkedin -->
    <a
      class="hover:text-blue-400"
      href="https://www.linkedin.com/in/rcauquil/"
      title="Linkedin account - Romain Cauquil"
      target="_blank"
    >
      <Icon icon={faLinkedin} />
    </a>
    <!-- Github -->
    <a
      class="hover:text-white"
      href="https://github.com/rcauquil"
      title="Github account - rcauquil"
      target="_blank"
    >
      <Icon icon={faGithub} />
    </a>
    <!-- Blog -->
    <a class="hover:text-yellow-400" rel="prefetch" href="/blog" title="Blog posts about code">
      <small><b>BLOG</b></small>
    </a>
  </div>
</nav>
