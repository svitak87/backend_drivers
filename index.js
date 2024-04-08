const axios = require("axios");
require("dotenv").config();
const os = require('os')
const server = require("./src/server");
const { sequelize } = require("../server/src/db");
const PORT = process.env.PORT || 3000;


const main = async () => {
  try {
    await sequelize.sync({ force: false });
    server.listen(PORT, () => {
      console.log(`Running on port: ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

main();
