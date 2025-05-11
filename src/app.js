const express = require("express");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/auth");
const spotifyRoutes = require("./routes/spotify");

const app = express();
app.use(cookieParser());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/api/user", spotifyRoutes);

module.exports = app;
