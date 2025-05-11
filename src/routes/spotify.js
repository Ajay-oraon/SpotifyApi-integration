const express = require("express");
const { getSpotifyData } = require("../services/spotifyService");
const { playTrack, pausePlayback } = require("../services/playerService");

const router = express.Router();

router.get("/profile", getSpotifyData("me"));
router.get("/top-tracks", getSpotifyData("me/top/tracks"));
router.get("/top-artists", getSpotifyData("me/top/artists"));
router.get("/followed-artists", getSpotifyData("me/following?type=artist"));
router.get("/now-playing", getSpotifyData("me/player/currently-playing"));

router.put("/play/:id", async (req, res) => {
  try {
    await playTrack(req.params.id);
    res.json({ status: "Playing track" });
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
});

router.put("/pause", async (req, res) => {
  try {
    await pausePlayback();
    res.json({ status: "Playback paused" });
  } catch (error) {
    const status = error.response?.status || 500;
    res.status(status).json({ error: error.message });
  }
});

module.exports = router;
