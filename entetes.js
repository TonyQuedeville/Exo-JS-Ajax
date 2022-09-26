const xhr = new XMLHttpRequest();
let reponse;

console.group('Entete')

xhr.addEventListener('readystatechange', function(){
    if (xhr.readyState === 4){
        if (xhr.status === 200){
            console.log("réponse : " + xhr.response);
        } else{
            alert("erreur réponse !")
        }
    }
})

xhr.open('GET', 'https://reqres.in/api/user/1'); 
xhr.setRequestHeader('Accept-langage', 'fr-FR');
xhr.send();

console.groupEnd();