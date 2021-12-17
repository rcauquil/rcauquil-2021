<script>
  import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
  import Icon from '../components/Icon.svelte'

  let user = {
    name: 'Romain Cauquil',
    role: 'Senior FullStack Developer',
    location: 'world'
  }
</script>

<section aria-labelledby="profile-overview-title">
  <div class="flex sm:space-x-5">
    <!-- Colour Bar -->
    <div class="h-40 w-1 rounded bg-gradient-to-b from-yellow-500 to-orange-500 flex-shrink-0" />
    <!-- Description -->
    <div class="pt-2 pl-4 sm:pl-0">
      <p class="font-serif text-6xl font-bold text-gray-200 mb-4 sm:mb-2">
        {user.name}
      </p>
      <p class="text-lg font-medium text-gray-300 mb-2 sm:mb-0">
        {user.role}
      </p>
      <p class="text-md text-gray-400">
        <Icon icon={faMapMarkerAlt} /> <i>{user.location}</i>
      </p>
    </div>
  </div>
</section>
