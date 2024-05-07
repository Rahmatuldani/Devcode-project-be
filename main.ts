import app from "./src/app";
import config from "./src/config/config";

app.listen(5000, () => console.log(`[server] Server ${config.name} run on port 5000`))