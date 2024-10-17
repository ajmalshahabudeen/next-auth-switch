<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <section>
      <form @submit.prevent class="flex flex-col gap-5">
        <div
          class="flex flex-col md:flex-row gap-5 items-center justify-center"
        >
          <UInput
            icon="pixelarticons:user"
            size="xl"
            color="white"
            :trailing="false"
            placeholder="useremail@mail.com"
            v-model="email"
            type="email"
            required
            autocomplete="off"
          />
          <UInput
            icon="pixelarticons:lock"
            size="xl"
            color="white"
            :trailing="false"
            placeholder="********"
            v-model="password"
            type="password"
            required
            autocomplete="off"
          />
        </div>
        <UButton
          label="Login"
          size="xl"
          variant="soft"
          type="submit"
          icon="pixelarticons:arrow-right-box"
        />
      </form>
    </section>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: "/auth/signin",
  },
});

const email = ref("");
const password = ref("");
</script>

<style></style>
