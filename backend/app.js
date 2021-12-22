/* Import des modules necessaires */
const express = require("express");
const sauceRoutes = require("./routes/sauce");
const userRoutes = require("./routes/user");
const path = require("path");

/* Initialisation de l'API */
const app = express();

app.use(express.json());

/* Mise en place autorisation headers */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

/* Mise en place du routage */
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
// app.get("*", (req, res) => res.status(501).send(`Nothing is hidden here!`));

module.exports = app;
