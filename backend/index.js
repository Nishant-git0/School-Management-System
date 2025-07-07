import app from "./app.js";
import { config } from "dotenv";

// Load .env if not already done in app.js
config({ path: "./config/config.env" });

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
});
