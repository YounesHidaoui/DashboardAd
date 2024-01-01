import { useAuthStore } from "../stores/auth";

export default defineNuxtRouteMiddleware ((redirect) =>{
 
    const authStore = useAuthStore()

    if(!authStore.isAuthenticated){
        return navigateTo('/login')
    }else{
        return abortNavigation()
    }

});