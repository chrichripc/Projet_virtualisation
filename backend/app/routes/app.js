const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());  
app.use(cors(
{
    origin: 'http://localhost:3000',
    mehods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));


// utilisation de get pour recuperer les donneés

app.get('/users', (req, res) =>{
    db.query('SELECT * FROM users', (err,results) => {
        if(err)
        {
            res.status(500).send('Erreur de récupération des utilisateurs');
        
        }else{
            res.json(results);
        }
    });
});

// utilisation de post  pour ajouter un utilisateur

app.post('/users', (req,res)=>
{
    const {name,email} = req.body;

    if (!name || !email) {
        return res.status(400).send('Le nom et l\'email sont obligatoires');
    }

    db.query('INSERT INTO users (name, email) VALUES(? ,?)',[name, email], (err,result) =>
    {
        if (err) 
        {
            res.status(500).send('Erreur d ajout de l utilisateur');
        }else{
            res.status(201).send('Utilisateur ajouté');
        }
    });
});


// une route por supprimer un utilisateur 
app.delete('/users/:id', (req, res) =>
    {
        const {id} = req.params;
    db.query('DELETE FROM users WHERE id = ?', [id], (err, result) => {
        if ( err)
        {
            res.status(500).send('Erreur de suppression de l utilisateur');
        }else{
            res.send('Utilisateur suppr');
        }
    });
});



// lancement du serveur


const PORT = 5000; //test port 5000
app.listen(PORT, () =>
{
    console.log('Serveur en cours d execution sur le port ${PORT}');

});