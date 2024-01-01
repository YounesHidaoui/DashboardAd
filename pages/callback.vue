<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col justify-center items-center">
      <h2 class="text-lg font-semibold mb-2 text-accent">Loading...</h2>
      <p class="mb-4 text-accent">
        Please wait while we process your request
      </p>
      <div
        class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"
      ></div>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { useAuthStore } from "@/stores/auth";



export default {
  setup() {
    const auth0 = useAuth0();
    const auth = useAuthStore();

    onMounted(async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const param1 = urlParams.get("route");
      await auth0?.checkSession();

      if (auth0.isAuthenticated.value) {
        const user_id = auth0.user.value.sub;
       
        if (user_id) {
          const user = await auth.fetchUserDetails(user_id);
          auth.setUser(user);
        }
        alert(user)
        navigateTo(`/${param1}`);
      } else {  
        navigateTo("/");
      }
    });
    return {};
  },
  
};
definePageMeta({
  layout: "auth-layout",
});
</script>

<style scoped>
.loader {
  border-top-color: #3498db;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
