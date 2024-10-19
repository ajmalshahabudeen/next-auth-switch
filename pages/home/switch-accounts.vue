<template>
  <div class="flex min-h-screen flex-col gap-5 items-center justify-center p-5">
    <p class="text-2xl md:text-3xl font-bold text-teal-500 dark:text-teal-400">
      Select Account to Switch
    </p>
    <div class="inline-flex items-center gap-5">
      <UButton
        label="back"
        to="/home"
        icon="pixelarticons:arrow-left"
        size="xl"
        variant="link"
      />
      <UButton
        label="Clear Saved Accounts"
        size="xl"
        variant="soft"
        @click="accounts.$reset()"
      />
    </div>
    <div
      class="flex flex-wrap w-full items-center justify-center gap-5"
    >
      <div v-for="(account, index) in accounts.accountNames" class="w-full md:w-auto">
        <UCard>
          <div class="inline-flex items-center gap-3">
            <Icon name="pixelarticons:user" size="24" />
            <p>{{ account }}</p>
            <UButton @click="getData(index)" icon="pixelarticons:arrow-right-box" variant="link" />
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const accounts = useMyAccountsStore();

const { signIn } = useAuth();

const getData = async (index: number) => {
  const res: any = await $fetch(
    "/api/account-encryption/get-account-details?encryptedData=" +
      accounts.myAccounts[index],
    {
      method: "GET",
    }
  );
  // console.log(res);
  const { email, password } = res.data;
  await signIn("credentials", {
    email: email,
    password: password,
    redirect: true,
    callbackUrl: "/home",
  })
};

// console.log(accounts.accountNames);
</script>

<style></style>
