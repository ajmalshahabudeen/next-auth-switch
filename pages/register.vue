<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <section>
      <form @submit.prevent="submit" class="flex flex-col gap-5">
        <div
          class="flex flex-col md:flex-row gap-5 items-center justify-center"
        >
          <UInput
            icon="pixelarticons:user"
            size="xl"
            color="white"
            :trailing="false"
            placeholder="Full Name"
            v-model="name"
            type="text"
            required
            autocomplete="off"
          />
          <UInput
            icon="pixelarticons:mail"
            size="xl"
            color="white"
            :trailing="false"
            placeholder="Email"
            v-model="email"
            type="email"
            required
            autocomplete="off"
          />
        </div>
        <div
          class="flex flex-col md:flex-row gap-5 items-center justify-center"
        >
          <UInput
            icon="pixelarticons:lock-open"
            size="xl"
            color="white"
            :trailing="false"
            placeholder="Password"
            v-model="password"
            type="password"
            required
            autocomplete="off"
          />
          <UInput
            icon="pixelarticons:lock"
            size="xl"
            color="white"
            :trailing="false"
            placeholder="Confirm Password"
            v-model="confirmPassword"
            type="password"
            required
            autocomplete="off"
          />
        </div>
        <p v-if="confirmPasswordError" class="text-red-500">
          passwords do not match
        </p>
        <p v-if="error" class="text-red-500">{{ errorMessage }}</p>
        <p v-if="success" class="text-green-500">Account created</p>
        <UButton
          block
          :loading="loading"
          label="Register"
          size="xl"
          variant="soft"
          type="submit"
          icon="pixelarticons:user-plus"
          :disabled="loading"
        />
      </form>
    </section>
    <UButton
      to="/login"
      icon="pixelarticons:arrow-right"
      trailing
      label="Login"
      class="absolute bottom-16"
      size="xl"
      variant="link"
    />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateUnauthenticatedTo: "/auth/signin",
  },
});
const loading = ref(false);
const success = ref(false);
const error = ref(false);
const errorMessage = ref("");
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const confirmPasswordError = ref(false);

const submit = async () => {
  loading.value = true;
  if (password.value !== confirmPassword.value) {
    confirmPasswordError.value = true;
    const interval = setInterval(() => {
      confirmPasswordError.value = false;
      clearInterval(interval);
    }, 3000);
    return;
  }
  confirmPasswordError.value = false;
  // register
  await $fetch("/api/register_user", {
    method: "POST",
    body: {
      name: name.value,
      email: email.value,
      password: password.value,
    },
  })
    .then((res) => {
      loading.value = false;
      if (res.ok) {
        success.value = true;
        setTimeout(() => {
          success.value = false;
        }, 3000);
      } else {
        error.value = true;
        errorMessage.value = res.message;
        const interval = setInterval(() => {
          error.value = false;
          errorMessage.value = "";
          clearInterval(interval);
        }, 3000);
      }
    })
    .catch((err) => {
      loading.value = false;
      console.log(err);
      error.value = true;
      errorMessage.value = err.message;
      const interval = setInterval(() => {
          error.value = false;
          errorMessage.value = "";
          clearInterval(interval);
        }, 3000);
    });
};
</script>

<style></style>
