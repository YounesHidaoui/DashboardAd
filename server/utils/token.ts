import axios from "axios";

export const accessToken = async function(){

    const response = await axios.post('https://' + process.env.NUXT_PUBLIC_AUTH0_DOMAIN + '/oauth/token',
      {
        client_id: process.env.NUXT_AUTH_MACHINE_TO_MACHINE_CLIENT_ID,
        client_secret: process.env.NUXT_AUTH_MACHINE_TO_MACHINE_CLIENT_SECRET,
        audience: process.env.NUXT_AUTH_MACHINE_TO_MACHINE_AUDIENCE,
        grant_type: process.env.NUXT_AUTH_MACHINE_TO_MACHINE_GRANT_TYPE
      },
      {
        headers: { 'content-type': 'application/json' },
      }
    );
    console.log(response);
    
    return response.data.access_token;
}