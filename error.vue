<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError
})
</script>

<template>
  <div class="flex min-h-screen flex-col gap-4 items-center justify-center">
    <h1 class="text-5xl font-extralight">{{ (error as NuxtError).statusCode }}</h1>
    <UButton label="Go Home" size="xl" class="px-10" variant="soft" to="/" />
  </div>
</template>
