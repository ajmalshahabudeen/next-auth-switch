<template>
  <div class="flex min-h-screen flex-col items-center justify-center">
    <h1>
      Register an Account
    </h1>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
    navigateUnauthenticatedTo: '/auth/signin'
  }
})
</script>

<style>

</style>