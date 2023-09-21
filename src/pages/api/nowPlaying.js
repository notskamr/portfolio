export const config = {
  runtime: "serverless",
};

import spotifyWebApi from "spotify-web-api-node";

var spotifyApi = new spotifyWebApi({
  clientId: import.meta.env.CLIENT_ID,
  clientSecret: import.meta.env.CLIENT_SECRET,
  refreshToken: import.meta.env.REFRESH_TOKEN,
  redirectUri: "http://localhost/",
});

const pick = (obj, arr) =>
  arr.reduce(
    (acc, record) => (record in obj && (acc[record] = obj[record]), acc),
    {}
  );

async function getRefreshedToken() {
  const result = await spotifyApi.refreshAccessToken();
  return result.body.access_token;
}

spotifyApi.setAccessToken(await getRefreshedToken());

export async function GET({ params, request }) {
  await spotifyApi.setAccessToken(await getRefreshedToken());
  let data = await spotifyApi.getMyCurrentPlayingTrack();

  let track = data.body.item;
  let statusCode = data.statusCode;

  return new Response(JSON.stringify({ track, statusCode }));
}
