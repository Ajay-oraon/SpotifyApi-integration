const axios = require("axios");
const { getAccessToken } = require("../utils/tokenManager");

function getSpotifyData(endpoint) {
  return async (req, res) => {
    try {
      const token = await getAccessToken();
      const headers = { Authorization: `Bearer ${token}` };

      const url = `https://api.spotify.com/v1/${endpoint}`;
      const response = await axios.get(url, { headers });

      let data;

      // Clean minimal responses
      switch (endpoint) {
        case "me/top/tracks":
          data = response.data.items.slice(0, 10).map((track) => ({
            id: track.id,
            name: track.name,
            artists: track.artists.map((a) => a.name).join(", "),
          }));
          break;

        case "me/player/currently-playing":
          if (response.data && response.data.item) {
            data = {
              name: response.data.item.name,
              artists: response.data.item.artists.map((a) => a.name).join(", "),
              is_playing: response.data.is_playing,
            };
          } else {
            data = { message: "Nothing is currently playing" };
          }
          break;

        case "me/following?type=artist":
          data = response.data.artists.items.map((a) => a.name);
          break;

        default:
          data = response.data;
      }

      res.json(data);
    } catch (error) {
      const status = error.response?.status || 500;
      const message = error.response?.data || error.message;
      res.status(status).json({ error: message });
    }
  };
}

module.exports = { getSpotifyData };
