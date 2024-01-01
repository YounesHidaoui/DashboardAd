import PerfectScrollbar from 'vue3-perfect-scrollbar';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PerfectScrollbar);
});
