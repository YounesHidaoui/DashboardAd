<template>
  <div>
    <button @click="auth0.logout">Logout</button>
  </div>
</template>

<script>
import { useAuth0 } from "@auth0/auth0-vue";
import { useAuthStore } from "@/stores/auth";

export default {
  name: 'ButtonLogOut',
  setup() {
    const auth0 = useAuth0();
    const auth = useAuthStore();
    
    const logout = () => {
      auth0.logout();
    };
    
    return {
      logout
    };
  }
}
</script>

<style scoped>
/* Your styles go here */
</style>
