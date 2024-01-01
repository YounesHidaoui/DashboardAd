import axios, { AxiosError } from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "user",
  state: () => ({
    isAuthenticated: false,
    user: {},
    jwt: "",
  }),
  getters: {},
  actions: {
    async setUser(user: object) {
      this.user = user;
    },
    async logout(auth0: any) {
      console.log(auth0);
      await auth0?.logout();
    },

    login(auth0: any) {
      
      auth0?.loginWithRedirect({
        appState: {
          target: useRoute().path,
        },
      }
      
      );
  
    },

    async isAuth(auth0: any) {
      await auth0?.checkSession();
      if (!auth0?.isAuthenticated.value) {
        console.log(auth0);
        this.login(auth0);
      } else {
        console.log(auth0?.user);
        const user = await this.fetchUserDetails(auth0?.user.value.sub);
        this.isAuthenticated = true;
        this.user = user;
        this.jwt = auth0?.idTokenClaims.value;
        console.log(this.user);
        return true;
      }
    },

    async isAuthStatus(auth0: any) {
      console.log(auth0);
      await auth0?.checkSession();
      if (!auth0?.isAuthenticated.value) {
        this.isAuthenticated = false;
        return false;
      } else {
        this.isAuthenticated = true;
        return true;
      }
    },

    async fetchUserDetails(user_id: string) {
      try {
        const response = await axios.get(`/api/users/${user_id}`);

        return response.data;
      } catch (error: any) {
        console.error("Error fetching user details:", error);
        console.error("Request config:", error.config);
      }
    },
  },
});