import { createAuth0 } from '@auth0/auth0-vue'
import { useAuthStore }  from '@/stores/auth'

export default defineNuxtPlugin((nuxtApp) => {
  
  const runtimeConfig = useRuntimeConfig()
  interface Auth0Object {
    domain: string;
    clientId: string;
    authorizationParams: {
      redirect_uri: string;
    };
  }
  const auth0: Auth0Object = {
    domain: runtimeConfig.public.auth0Domain as string,
    clientId: runtimeConfig.public.auth0ClientId as string,
    authorizationParams:{
        redirect_uri: runtimeConfig.public.auth0RedirectUri as string,
    } ,
  }

  if (process.client) {
    const auth0Plugin = createAuth0(auth0);
    nuxtApp.vueApp.use(auth0Plugin);
    inject('auth0', auth0Plugin);
  }


})

