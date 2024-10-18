<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <p class="text-3xl font-bold text-teal-500 dark:text-teal-400">
      This is the home page.
    </p>
    <div v-if="data" class="text-3xl flex flex-col gap-5 p-6">
      <p>
        Name: {{ data.user?.name }}
      </p>
      <p>
        Email: {{ data.user?.email }}
      </p>
    </div>
    <div v-else>You are not logged in.</div>
    <div class="inline-flex items-center gap-5 p-5">
      <UButton
        icon="pixelarticons:home"
        to="/"
        label="/"
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
  </div>
</template>

<script lang="ts" setup>
const { data, signOut } = useAuth();
</script>

<style></style>
