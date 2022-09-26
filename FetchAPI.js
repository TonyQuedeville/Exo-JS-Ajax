/*
    jsonplaceholder.com est une API de données fictives à but pédagogique. 
*/

/* exemple de base requete de lecture GET */
const requeteGet = fetch('https://jsonplaceholder.typicode.com/users');

requeteGet
    .then((reponse) => {
        console.log(reponse);
        const PromesseJson = reponse.json();
        
        PromesseJson.then((donnees) => {
            console.log(donnees)
        })
    })
    .catch((error) => {
        console.error(error);
    });
/*---*/

/* exemple de requete d'écriture POST */
const newPost = {
    titre: 'titre',
    body: 'du contenu, encore du contenu, toujours du contenu',
    userId: 1
};

const requetePost = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
        "Content-type": "application/json; charset-UTF-8"
    }
});

requetePost
    .then((reponse) => {
        console.log(reponse);
    })
    .catch((error) => {
        console.error(error);
    });
/*---*/

