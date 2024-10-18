import { defineStore } from "pinia";

export const useMyAccountsStore = defineStore({
  id: "myAccountsStore",
  state: () => ({
    myAccounts: [] as string[],
    accountNames: [] as string[],
  }),
  actions: {
    addAccount(account: string) {
      // this.myAccounts.push(account);
      this.myAccounts = [...this.myAccounts, account];
    },
    removeAccount(account: string) {
      this.myAccounts = this.myAccounts.filter((a) => a !== account);
    }
  },
  persist: true,
});
