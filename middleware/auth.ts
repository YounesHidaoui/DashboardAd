import { useAuth0 } from '@auth0/auth0-vue';
import { useAuthStore } from '@/stores/auth';


export default defineNuxtRouteMiddleware (async(route) =>{
  const auth0 =  useAuth0()
  const auth = useAuthStore()
  if (!auth0){
    console.error('Auth0 client is not initialized.')
    return navigateTo(`/callback?route=${route.path}`);
  }

  if (auth0.isAuthenticated.value){
    const user =auth.user
    
    if (!user) {
      console.error('User is not authenticated.')
      return navigateTo(`/login`);
    }

    
  } else {
    alert('hel')
    auth0.loginWithRedirect();
  }
})