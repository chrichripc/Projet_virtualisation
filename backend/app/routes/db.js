const mysql = require('mysql2');

const maxRetry = 10; // Nombre maximum de tentatives de connexion si la tentative echoue
let retryCount = 0;

const connectWithRetry = () => {
    const db = mysql.createConnection({
        host: 'db',
        user: 'root',
        password: 'root',
        database: 'mydb',
    });

    db.connect((err) => {
        if (err) {
            console.error('Erreur de connexion à la base de données:', err);
            retryCount++;
            if (retryCount < maxRetry) {
                console.log(`Nouvelle tentative de connexion dans 5 secondes (Tentative ${retryCount}/${maxRetry})`);
                setTimeout(connectWithRetry, 5000); // Réessaye après 5 secondes
            } else {
                console.error('Impossible de se connecter à la base de données après plusieurs tentatives.');
                process.exit(1); // Quitte l'application après plusieurs échecs
            }
        } else {
            console.log('Connexion à la base de données réussie!');
        }
    });

    return db;
};

const db = connectWithRetry();
module.exports = db;
