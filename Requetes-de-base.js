
const xhr = new XMLHttpRequest();
let reponse;

console.group('Requete CRUD')

console.log(xhr.readyState); // état initiale de la requète
// étape 0: requète créée non lancée
xhr.addEventListener('readystatechange', function(){
    console.log(xhr.readyState); // étapes de la requète.
    // étape 1 : requète ouverte
    // étape 2 : entête reçue 
    // étape 3 : chargement de la réponse
    // étape 4 : Réponse reçue
    
    if (xhr.readyState === 4){
        // GET, PUT : Réponse ok si Status http = 200 "OK" ou 304 "non modifié"
        if (xhr.status === 200){
            console.log("réponse : " + xhr.response);
        } else{
            alert("erreur réponse !")
        }
    }

    if (xhr.readyState === 4 && xhr.status === 201){
        // POST : Réponse ok si Status http = 201 
        console.log("Création : " + xhr.response);
    }
})

xhr.addEventListener('error', function(){
    /* Gestion des erreurs */
        /*
        erreur 400... coté client
        erreur 500... coté serveur
        404 : Requète incorrecte
        403 : Requète correcte mais nécéssite un droit d'accés
        /*-*/
        alert("erreur réponse !")    
});

xhr.open('GET', 'https://reqres.in/api/users?delay=2'); // Requète de lecture
xhr.send();

/* CRUD */
/*---------------------------------------------------------------------------------------------*/
/* méthode de lecture */
/*
xhr.open('GET', 'https://reqres.in/api/users'); // Requète retournant tous les utilisateurs
xhr.send();
/*-*/
/*
xhr.open('HEAD', 'https://reqres.in/api/users'); // Requète retournant que les entêtes (meta données)
xhr.send();
console.log("Entête : " + xhr.HEADERS_RECEIVED);
/*-*/
/*
xhr.open('GET', 'https://reqres.in/api/users/1'); // Requète retournant l'utilisateur 1 uniquement
xhr.send();
console.log("réponse user 1 : " + xhr.response);
/*-*/

/*---------------------------------------------------------------------------------------------*/
/* méthode de suppression */
/*xhr.open('DELETE', 'https://reqres.in/api/users/1'); // Requète supprimer
xhr.send();
/*-*/

/*---------------------------------------------------------------------------------------------*/
/* méthode de création */
/*xhr.open('POST', 'https://reqres.in/api/users'); // Requète créer un utilisateur
xhr.send(encodeURIComponent('first_name=John&last_name=Doe'));
/*-*/

/*---------------------------------------------------------------------------------------------*/
/* méthode de modification */
/*xhr.open('PUT', 'https://reqres.in/api/users/101'); // Requète modifier l'utilisateur 101 
xhr.send(encodeURIComponent('first_name=Robert'));
/*-*/


/*---------------------------------------------------------------------------------------------*/
/* Autre syntaxe send() */
/*xhr.open('POST', 'https://reqres.in/api/users');
let form = new FormData();
form.append('first_name', 'Robert')
form.append('last_name', 'Fripp')
xhr.send(form);
/*-*/

/*---------------------------------------------------------------------------------------------*/

console.groupEnd();
