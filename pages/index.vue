<template>
  <div class="flex min-h-screen p-5 flex-col items-center justify-center">
    <h1 class="text-5xl md:text-3xl font-bold">
      Account Switching App with Nuxt 3 and Nuxt Auth
    </h1>
    <div
      v-if="isLoggedIn"
      class="text-3xl font-bold flex flex-col md:flex-row w-full md:w-auto items-start md:items-center gap-5 py-5"
    >
      <UButton
        icon="pixelarticons:home"
        to="/home"
        label="Home"
        size="xl"
        variant="soft"
      />
      <UButton
        icon="pixelarticons:chevrons-horizontal"
        to="/home/switch-accounts"
        label="Switch Accounts"
        size="xl"
        variant="soft"
      />
      <UButton
        icon="pixelarticons:arrow-bar-right"
        trailing
        label="Sign Out"
        size="xl"
        variant="outline"
        @click="signOut"
      />
    </div>
    <div v-else class="text-xl font-extralight pt-5">
      <p>Create multile accounts and switch between them, test em all.</p>
      <div class="pt-5 items-center inline-flex gap-5 justify-end w-full">
        <UButton to="/login" label="Login" size="xl" variant="soft" />
        <UButton to="/register" label="Register" size="xl" variant="soft" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: false,
});

const { status, signOut } = useAuth();
const isLoggedIn = computed(() => status.value === "authenticated");
</script>

<style></style>
