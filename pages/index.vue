<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h1 class="text-3xl font-bold">
      Account Switching App with Nuxt 3 and Nuxt Auth
    </h1>
    <div v-if="isLoggedIn" class="text-3xl font-bold">
      looged in
    </div>
    <div v-else class="text-xl font-extralight pt-5">
      <p>
        Create multile accounts and switch between them, test em all.
      </p>
      <div class="pt-5 items-center inline-flex gap-5 justify-end w-full">
        <UButton to="/login" label="Login" size="xl" variant="soft" />
        <UButton to="/register" label="Register" size="xl" variant="soft" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: false
})

const { status } = useAuth()
const isLoggedIn = computed(() => status.value === 'authenticated')

</script>

<style>

</style>