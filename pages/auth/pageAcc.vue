<template>  
    <div class="grid grid-cols-1 md:grid-cols-2    bg-slate-900">

        <div class="flex-col mt-48">

            <div class="flex justify-center items-center">
                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">Sign in to your account</h2>
            </div>
        <div class= "flex sm:mx-auto sm:w-full sm:max-w-md items-center justify-center">


            
            <div class="  flex py-8 px-4   justify-center mt-10 sm:px-10">
                
              <div class=" mr-2">
                <button @click="auth.login(auth0)" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark hover:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-500">Login</button>
              </div>
              <div class="">
                <button @click="auth.register(auth0)" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark hover:bg-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-500">Register</button>
              </div>
            </div>



          </div>
        </div>





          <div class="m-0 p-0">
            <img class="w-full h-auto" style="object-fit: cover; height: 631px; min-height: fit-content;" src="https://images.unsplash.com/photo-1595327656903-2f54e37ce09b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Your Company" />
          </div>
         
       
        </div>
</template>

<script setup>

definePageMeta({
    layout:'false'
})


import { useAuthStore } from "../../stores/auth/";
import { useAuth0 } from "@auth0/auth0-vue";


const auth = useAuthStore();
const auth0 = useAuth0();


console.log(auth0);

</script>




