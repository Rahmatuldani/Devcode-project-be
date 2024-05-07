import app from "./src/app";
import db from "./src/config/db";

db.authenticate()
    .then(() => console.log('[database] Database connection success'))
    .catch((err) => console.error('[database] Database connection error : ', err));

app.listen(3030, () => console.log('[server] Server run on port 3030'))