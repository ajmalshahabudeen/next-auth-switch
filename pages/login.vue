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
        <p v-if="error" class="text-red-500">Invalid credentials</p>
      </form>
    </section>
    <UButton
      to="/register"
      icon="pixelarticons:user-plus"
      label="Register"
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

const email = ref("");
const password = ref("");

const account = useMyAccountsStore();

const error = ref(false);

const { signIn } = useAuth();

const submit = async () => {
  await signIn("credentials", {
    email: email.value,
    password: password.value,
    redirect: false,
  }).then(async (res: any) => {
    console.log(res);
    if (res.error) {
      error.value = true;
      setTimeout(() => {
        error.value = false;
      }, 3000);
    } else {
      await $fetch("/api/account-encryption/add-new", {
        method: "POST",
        body: {
          email: email.value,
          password: password.value,
        },
      }).then(async (res) => {
        console.log(res);
        await checkAndUpdateEncryptedData(res).then(() => {
          navigateTo("/home");
        });
      });
    }
    setTimeout(() => {
      error.value = false;
    }, 3000);
  });
};

const checkAndUpdateEncryptedData = async (encryptedData: string) => {
  if (account.myAccounts.length === 0) {
    account.accountNames =  [...account.accountNames, email.value];
    account.addAccount(encryptedData);
  } else {
    let emailFound = false;
    for (const value of account.myAccounts) {
      const res: any = await $fetch(
        "/api/account-encryption/get-account-details?encryptedData=" + value,
        {
          method: "GET",
        }
      );

      console.log(res);
      if (res.ok) {
        console.log("res.data", res.data);
        if (res.data.email === email.value) {
          console.log("Account found");
          emailFound = true;
          break; // Exit the loop since we found an account
        }
      }
    }

    if (!emailFound) {
      console.log("Email not found in any saved account.");
      account.accountNames = [...account.accountNames, email.value];
      account.addAccount(encryptedData);
    }
  }
};
</script>

<style></style>
