"use strict";
const axios = require(`axios`);

const axiosInstance = axios.create({
  baseURL: `http://localhost:3000`,
  timeout: 3000
});

module.exports = axiosInstance;
