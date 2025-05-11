const axios = require("axios");
const { getAccessToken } = require("../utils/tokenManager");

async function playTrack(trackId) {
  const token = await getAccessToken();
  await axios.put(
    "https://api.spotify.com/v1/me/player/play",
    { uris: [`spotify:track:${trackId}`] },
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
}

async function pausePlayback() {
  const token = await getAccessToken();
  await axios.put(
    "https://api.spotify.com/v1/me/player/pause",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
}

module.exports = { playTrack, pausePlayback };
