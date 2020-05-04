//complexité de lalgorithme O(log(n))//
//meilleure cas o(1)//
// pire cas O(log(n))//
function searchVal(tab, val) {

    //premier index du tableau 0
    const indexDebut = 0;

    // dernier index du tableau 
    const indexFin = tab.length - 1;


    //tableau vide
    if (indexFin == -1) {

        console.log(`le tableau est vide`);
    } else
    // pour l'affichage le tableau commence à 1 sinon on enleve +1
    {
        const indexVal = serachR(val, indexDebut, indexFin) + 1;
        if (indexVal == 0) {
            console.log(`l'element n'existe pas dans le tableau`);
        } else {
            console.log(`l'element ${val} est à la position: ${indexVal}`)
        }
    }
}

function serachR(val, i, j) {
    if (val < tab[i] || val > tab[j]) {
        return -1;
    }
    if (val === tab[i]) {
        return i;
    }
    if (val == tab[j]) {
        return j;
    }
    var middle = (i + j) / 2 | 0;
    if (tab[middle] == val) {
        return middle;
    }
    if (val > tab[middle]) {
        return serachR(val, middle + 1, j);
    }
    if (val < tab[middle]) {
        return serachR(val, i, middle - 1);
    }
    return -1;
}
//exemple ou le tableau est trié
var tab = [1, 4, 6, 12, 16, 18, 59];
//pour le tableau non trié on utilise une boucle for avec complexité O(n)

const searchValue = 18;

//resultat
searchVal(tab, searchValue);