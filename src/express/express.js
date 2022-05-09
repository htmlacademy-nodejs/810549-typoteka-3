"use strict";

const express = require(`express`);
const mainRoutes = require(`./routes/main-routes`);
const articlesRoutes = require(`./routes/main-routes`);
const myRoutes = require(`./routes/main-routes`);

const DEFAULT_PORT = 8081;

const app = express();
app.use(`/`, mainRoutes);
app.use(`/`, articlesRoutes);
app.use(`/`, myRoutes);

app.listen(DEFAULT_PORT);

