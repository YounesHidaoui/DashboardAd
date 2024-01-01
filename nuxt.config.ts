export default defineNuxtConfig({

    runtimeConfig :{

        machineToMachineClientId: process.env.NUXT_AUTH_MACHINE_TO_MACHINE_CLIENT_ID,
        machineToMachineClientSecret: process.env.NUXT_AUTH_MACHINE_TO_MACHINE_CLIENT_SECRET,
        machineToMachineAudience: process.env.NUXT_AUTH_MACHINE_TO_MACHINE_AUDIENCE,
        machineToMachineGrantType: process.env.NUXT_AUTH_MACHINE_TO_MACHINE_GRANT_TYPE,

        
        public :{
           
            auth0Domain : process.env.NUXT_PUBLIC_AUTH0_DOMAIN || 'dev-lo2vttvxzoajo0b2.us.auth0.com',
            auth0ClientId : process.env.NUXT_PUBLIC_AUTH0_CLIENT_ID || 'oMzhTpEfGxdgmlzldMdWfp4J0z5eccZj',
            auth0RedirectUri : process.env.NUXT_PUBLIC_AUTH0_REDIRECT_URI || 'http://localhost:3000/callback',
            auth0_machine_to_machine : process.env.NUXT_AUTH_MACHINE_TO_MACHINE_AUDIENCE || 'https://dev-lo2vttvxzoajo0b2.us.auth0.com/api/v2/'
        }


    },
    app: {
        head: {
            title: 'Blog',
            titleTemplate: 'Blog',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, shrink-to-fit=no',
                },
                { hid: 'description', name: 'description', content: '' },
                { name: 'format-detection', content: 'telephone=no' },
            ],
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap',
                },
            ],
        },  
    },
    css: ['~/assets/css/app.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    plugins :[
           '~/plugins/auth0',
        ],
    modules: [ '@pinia/nuxt', '@nuxtjs/i18n'],

    i18n: {
        locales: [
            { code: 'da', file: 'da.json' },
            { code: 'de', file: 'de.json' },
            { code: 'el', file: 'fr.json' },
            { code: 'en', file: 'en.json' },
            { code: 'es', file: 'es.json' },
            { code: 'fr', file: 'fr.json' },
            { code: 'hu', file: 'hu.json' },
            { code: 'it', file: 'it.json' },
            { code: 'ja', file: 'ja.json' },
            { code: 'pl', file: 'pl.json' },
            { code: 'pt', file: 'pt.json' },
            { code: 'ru', file: 'ru.json' },
            { code: 'sv', file: 'sv.json' },
            { code: 'tr', file: 'tr.json' },
            { code: 'zh', file: 'zh.json' },
            { code: 'ae', file: 'ae.json' },
        ],
        lazy: true,
        defaultLocale: 'en',
        strategy: 'no_prefix',
        langDir: 'locales/',
    },
    vite: {
        optimizeDeps: { include: ['quill'] },
    },
    router: {
        options: { linkExactActiveClass: 'active' },
    },

    
});
