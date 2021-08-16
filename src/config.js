import { config } from "dotenv";
config();

export default {
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER || "sa",
  dbPassword: process.env.DB_PASSWORD || "R0bertStrife",
  dbServer: process.env.DB_SERVER || "66.175.236.212",
  dbDatabase: process.env.DB_DATABASE || "DanielDominguezDB",
};
