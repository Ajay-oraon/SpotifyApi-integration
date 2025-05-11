# Spotify API Integration

A backend integration of Spotify Web API, designed to fetch personalized Spotify data like Top Tracks, Followed Artists, Now Playing song, and control playback. This backend is built using Node.js and Express.js and is intended to be deployed alongside your portfolio website at `/spotify`.

---

## Features

* ✅ Fetch Top 10 Tracks (track name, artists)
* ✅ Show Current Playing Track (track name, artists, is\_playing status)
* ✅ List Followed Artists
* ✅ Start Playing a Selected Track
* ✅ Pause Current Playback
* ✅ Auto-refresh Spotify Access Token

---

## Tech Stack

* Node.js
* Express.js
* Axios
* Spotify Web API

---

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Environment Variables**

   Create a `.env` file in the root with the following:

   ```bash
   SPOTIFY_CLIENT_ID=your_spotify_client_id
   SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
   SPOTIFY_REDIRECT_URI=your_redirect_uri (e.g., https://yourdomain.com/callback)
   SPOTIFY_REFRESH_TOKEN=your_saved_refresh_token
   ```

4. **Start the Server**

   ```bash
   npm run dev
   ```

5. **Deploy to Production**

   Deploy it to your portfolio website (e.g., Vercel, Render, etc.). Ensure environment variables are correctly configured in production.

---

## API Endpoints

### GET `/spotify/top-tracks`

* Returns Top 10 Tracks
* Example Response:

```json
[
  {
    "id": "track_id",
    "name": "Track Name",
    "artists": "Artist1, Artist2"
  },
  ...
]
```

### GET `/spotify/now-playing`

* Shows the current playing song
* Example Response:

```json
{
  "name": "Track Name",
  "artists": "Artist1, Artist2",
  "is_playing": true
}
```

### GET `/spotify/followed-artists`

* Lists followed artists
* Example Response:

```json
[
  "Artist 1",
  "Artist 2",
  "Artist 3"
]
```

### PUT `/spotify/play/:id`

* Start playing a track by ID (from Top 10)
* No body required

### PUT `/spotify/pause`

* Pause current playback
* No body required

---

## Project Structure

```
├── routes/
│   ├── auth.js
│   ├── spotify.js
├── services/
│   ├── spotifyService.js
│   ├── playerService.js
├── utils/
│   ├── tokenManager.js
├── app.js
├── package.json
├── .env
```

---

## Key Implementation Details

* ✨ Access Token is auto-generated using a saved Refresh Token.
* ✨ All API responses are formatted to remove unnecessary data.
* ✨ Error handling for expired tokens and API errors.
* ✨ No UI needed — direct JSON output for easy frontend integration if needed later.

---

## Deployment

* You can deploy it directly to platforms like Vercel, Render, Railway, etc.
* Ensure your redirect URIs and environment variables are updated accordingly.

---

## License

This project is licensed under the MIT License.

---

## Author

Made with ❤️ by Ajay Kumar Oraon

Connect on [LinkedIn](https://linkedin.com) | GitHub: [@your-username](https://github.com/your-username)

---

> Note: This project is built strictly for educational and portfolio demonstration purposes.
