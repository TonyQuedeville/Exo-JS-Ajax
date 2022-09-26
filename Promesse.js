const someAsyncStuff = new Promise((resolve, reject) => {
    setTimeout(() => {
        const random = Math.floor(Math.random() * 100) // retourne un nb entre 0 et 100

        if (random > 50) {
            resolve({status: 'succes', random});
        }

        reject({status: 'error', random});
    }, 1000);
});

/* syntaxe ES6 */
/*someAsyncStuff
    .then((reponse) => {
        console.log(reponse);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('finally');
    });

    /* Cas ou il y a plusieurs promesse lancées en même temps */
    /*.all([promesse1, promesse2]) // previent quand toutes les promesses sont revenues 
    .then((reponse) => {
        console.log('Toutes les promesses sont revenues !');
    })
    .race([promesse1, promesse2]) // previent quand une promesses est revenue. 
    .then((reponse) => {
        console.log('Au moins une promesse est revenue !');
    })
/*---*/

/* Syntaxe ES7 */
const maFonctionAnonyme = async () => {
    try {
        const maPromesse = await someAsyncStuff;
        console.log(maPromesse);
    }
    catch (error) {
        console.error(error);
    }
};

maFonctionAnonyme();
/*---*/
