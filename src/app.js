const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const spotifyRoutes = require("./routes/spotify");

const app = express();
app.use(cookieParser());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("This is the Home Page of the Website");
});
app.use("/auth", authRoutes);
app.use("/api/user", spotifyRoutes);

module.exports = app;
