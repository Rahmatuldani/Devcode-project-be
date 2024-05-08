import app from "./src/app";
import db, { database } from "./src/config/db";

database().then(() => {
    db.authenticate()
        .then(() => {
            db.sync()
            console.log('[database] Database connection success')
            app.listen(3030, () => console.log('[server] Server run on port 3030'))
        })
        .catch((err) => console.error('[database] Database connection error : ', err));
})


