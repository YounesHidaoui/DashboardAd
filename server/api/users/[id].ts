import axios from "axios";
import { accessToken } from "../../utils/token";

export default defineEventHandler(async (event: any) => {
  try {
    const headers = getHeaders(event);
    const user_id = getRouterParam(event, "id");
    const access_token = await accessToken();
    const user = await axios.get(
      `https://${process.env.NUXT_PUBLIC_AUTH0_DOMAIN}/api/v2/users/${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        timeout: 10000, // Increase timeout to 5000ms or more
      }
    );
    const user_role = await axios.get(
      `https://${process.env.NUXT_PUBLIC_AUTH0_DOMAIN}/api/v2/users/${user_id}`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
        timeout: 10000, // Increase timeout to 5000ms or more
      }
    );
    const user_info = {
      ...user.data,
      role: user_role.data,
    };
    return user_info;
  } catch (error: any) {
    console.log(error);
    return error;
  }
});
