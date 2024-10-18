<template>
  <div class="flex min-h-screen flex-col gap-5 items-center justify-center">
    <p class="text-3xl font-bold text-teal-500 dark:text-teal-400">
      Select Account to Switch
    </p>
    <div class="inline-flex items-center gap-5">
      <UButton label="back" to="/home" icon="pixelarticons:arrow-left" size="xl" variant="link" />
      <UButton
        label="Clear Saved Accounts"
        size="xl"
        variant="soft"
        @click="accounts.$reset()"
      />
    </div>
    <div class="flex flex-wrap items-center justify-center gap-5">
      <div v-for="(account, index) in accounts.accountNames">
        <UCard>
          <div class="inline-flex items-center gap-3">
            <Icon name="pixelarticons:user" size="24" />
            <p>{{ account }}</p>
            <UButton icon="pixelarticons:arrow-right-box" variant="link" />
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const accounts = useMyAccountsStore();

console.log(accounts.accountNames);
</script>

<style></style>
