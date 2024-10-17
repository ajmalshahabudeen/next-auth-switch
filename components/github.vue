<template>
  <div>
    <UButton
      icon="pixelarticons:github"
      color="gray"
      variant="ghost"
      aria-label="Github"
      @click="onClickHandler"
    />
  </div>
</template>

<script lang="ts" setup>
const onClickHandler = async () => {
  await navigateTo("https://nuxt.com", {
    external: true,
    open: {
    target: '_blank',
    windowFeatures: {
      width: 1000,
      height: 1000
    }
  }
  });
};
</script>

<style></style>
