---
title: Introduction au JavaScript asynchrone
slug: Learn/JavaScript/Asynchronous/Introducing
translation_of: Learn/JavaScript/Asynchronous/Introducing
---
{{LearnSidebar}}{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

Dans cet article, nous expliquerons ce qu'est la programmation asynchrone, en quoi elle est nécessaire et nous aborderons brièvement certaines des façons dont les fonctions asynchrones ont été implémentées en JavaScript au fil temps.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Notions informatiques de base, compréhension raisonnable des fondamentaux de JavaScript, notamment des fonctions et des gestionnaires d'évènements.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>Acquérir une familiarité avec la notion de JavaScript asynchrone, de ses différences avec le JavaScript synchrone et des raisons de sa nécessité.</td>
    </tr>
  </tbody>
</table>

La programmation asynchrone est une technique qui permet à un programme de démarrer une tâche à l'exécution potentiellement longue et, au lieu d'avoir à attendre la fin de la tâche, de pouvoir continuer à réagir aux autres évènements pendant l'exécution de cette tâche. Une fois la tâche terminée, le programme en reçoit le résultat.

De nombreuses fonctions fournies par les navigateurs, dont les plus intéressantes, peuvent prendre un certain temps et sont donc asynchrone. On y trouve par exemple&nbsp;:

- L'envoi de requêtes [`fetch()`](/fr/docs/Web/API/fetch)
- L'accès à la caméra ou au micro de la personne avec [`getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia)
- La sélection de fichiers avec [`showOpenFilePicker()`](/fr/docs/Web/API/Window/showOpenFilePicker)

Ainsi, même s'il n'est pas souvent nécessaire d'_implémenter_ ses propres fonctions asynchrones, il est nécessaire de savoir comment les _utiliser_ correctement.

Dans cet article, nous commencerons par aborder les problèmes liés aux fonctions synchrones dont l'exécution est longue, et qui montrent pourquoi la programmation asynchrone est nécessaire.

## Programmation synchrone

Prenons le code qui suit&nbsp;:

```js
const nom = 'Miriam';
const salutation = `Bonjour, je m'appelle ${nom} !`;
console.log(salutation);
// "Bonjour, je m'appelle Miriam !"
```

Ce fragment de code&nbsp;:

1. Déclare une variable intitulée `nom` qui contient une chaîne de caractères
2. Déclare une autre variable intitulée `salutation` et qui utilise `nom`
3. Affiche la salutation ainsi construite dans la console JavaScript

Il faut ici noter que le navigateur exécute le programme ligne par ligne, selon l'ordre dans lequel elles ont été écrites. Pour chaque ligne, le moteur attend que la ligne ait été exécutée avant de passer à la prochaine. En effet, chaque ligne dépend du travail exécuté dans les lignes précédentes.

Ce caractère séquentiel fait que nous avons un **programme synchrone**. Quand bien même on appellerait une fonction séparée, le programme serait toujours synchrone&nbsp;:

```js
function creerSalutation(nom) {
  return `Bonjour, je m'appelle ${nom} !`;
}

const nom = 'Miriam';
const salutation = creerSalutation(nom);
console.log(salutation);
// "Bonjour, je m'appelle Miriam !"
```

Ici, `creerSalutation()` est une **fonction synchrone**, car l'instruction qui l'appelle doit attendre que la fonction ait renvoyé sa valeur de retour avant de pouvoir finir.

### Une fonction synchrone longue

Et si la fonction synchrone mettait beaucoup de temps à s'exécuter&nbsp;?

Lorsqu'une personne clique sur le bouton «&nbsp;Générer des nombres premiers&nbsp;» dans l'exemple qui suit, le programme génère plusieurs grands nombres premiers, en utilisant un algorithme très inefficace. On peut contrôler la quantité de nombres premiers à générer, ce qui aura bien entendu un impact sur la durée de l'opération.

```html
<label for="quota">Quantité de nombres premiers :</label>
<input type="text" id="quota" name="quota" value="1000000">

<button id="generer">Générer des nombres premiers</button>
<button id="recharger">Recharger</button>

<div id="output"></div>
```

```js
function genererNbPremiers(quota) {

  function estPremier(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }

  const nbPremiers = [];
  const maximum = 1000000;

  while (nbPremiers.length < quota) {
    const candidat = Math.floor(Math.random() * (maximum + 1));
    if (estPremier(candidat)) {
      nbPremiers.push(candidat);
    }
  }

  return nbPremiers;
}

document.querySelector('#generer').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const nbPremiers = genererNbPremiers(quota);
  document.querySelector('#output').textContent = `Génération de ${quota} nombres premiers terminée !`;
});

document.querySelector('#recharger').addEventListener('click', () => {
  document.location.reload();
});
```

{{EmbedLiveSample("", 600, 120)}}

Essayez de cliquer sur le bouton «&nbsp;Générer des nombres premiers&nbsp;». Selon les performances de votre ordinateur, vous devrez probablement attendre quelques secondes avant de voir apparaître le message sur l'opération terminée.

### Le problème des fonctions synchrones longues

L'exemple qui suit est identique au précédent, à la différence près qu'un champ texte est présent dans le formulaire. Cette fois, essayez de cliquer sur «&nbsp;Générer des nombres premiers&nbsp;» puis de saisir quelque chose dans le champ texte.

Vous pourrez alors observer que, pendant l'exécution de la fonction `genererNbPremiers()`, la page ne répond plus et on ne peut plus saisir de texte, cliquer ou faire autre chose.

```html hidden
<label for="quota">Quantité de nombres premiers :</label>
<input type="text" id="quota" name="quota" value="1000000">

<button id="generer">Générer des nombres premiers</button>
<button id="recharger">Recharger</button>

<textarea id="user-input" rows="5" cols="62">
Essayez de saisir du texte ici juste après avoir appuyé sur « Générer des nombres premiers »
</textarea>

<div id="output"></div>
```

```css hidden
textarea {
  display: block;
  margin: 1rem 0;
}
```

```js hidden
function genererNbPremiers(quota) {

  function estPremier(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
          return false;
       }
    }
    return true;
  }

  const nbPremiers = [];
  const maximum = 1000000;

  while (nbPremiers.length < quota) {
    const candidat = Math.floor(Math.random() * (maximum + 1));
    if (estPremier(candidat)) {
      nbPremiers.push(candidat);
    }
  }

  return nbPremiers;
}

document.querySelector('#generer').addEventListener('click', () => {
  const quota = document.querySelector('#quota').value;
  const nbPremiers = genererNbPremiers(quota);
  document.querySelector('#output').textContent = `Génération de ${quota} nombres premiers terminée !`;
});

document.querySelector('#recharger').addEventListener('click', () => {
  document.querySelector('#user-input').value = 'Essayez de saisir du texte ici juste après avoir appuyé sur « Générer des nombres premiers »';
  document.location.reload();
});
```

{{EmbedLiveSample("", 600, 210)}}

Voici donc le problème qui se pose avec les fonctions synchrones dont l'exécution est longue. On voudrait une méthode pour que notre programme puisse&nbsp;:

- Démarrer une opération longue en appelant une fonction
- Avoir une fonction pour démarrer l'opération et rendre la main immédiatement, afin que le programme puisse continuer de réagir aux autres évènements
- Recevoir une notification du résultat de l'opération, lorsqu'elle termine.

C'est ce que permettent les fonctions asynchrones. Dans la suite de ce module, nous allons voir comment elles sont implémentées en JavaScript.

## Gestionnaires d'évènements

La description des fonctions asynchrones que nous venons de faire peut vous rappeler les gestionnaires d'évènements, et vous auriez raison d'y penser. Les gestionnaires d'évènement sont une forme de programmation asynchrone&nbsp;: on fournit une fonction (le gestionnaire d'évènement) qui sera appelée, pas immédiatement mais au moment où l'évènement se produit. Si on remplace «&nbsp;l'évènement&nbsp;» par «&nbsp;l'opération asynchrone est terminée&nbsp;», on peut alors voir comment un évènement pourrait être utilisé comme notification à l'appelant à propos du résultat d'un appel de fonction asynchrone.

Certaines des premières API asynchrones utilisaient les évènements de cette façon. L'API [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) permet d'envoyer des requêtes HTTP à un serveur distant en JavaScript. Étant donné qu'une requête peut prendre beaucoup de temps, il s'agit d'une API asynchrone, et on reçoit une notification sur l'avancement (voire la complétion) de la requête en attachant des gestionnaires d'évènements à l'objet `XMLHttpRequest`.

L'exemple qui suit permet de voir ça concrètement. Cliquez sur le bouton «&nbsp;Cliquez pour envoyer une requête&nbsp;» afin d'envoyer une requête. Le programme crée alors un nouvel objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) et écoute les évènements [`loadend`](/fr/docs/Web/API/XMLHttpRequest/loadend_event) associés. Le gestionnaire affiche un message «&nbsp;Terminé&nbsp;» dans la console avec le code de statut HTTP.

Après avoir ajouté le gestionnaire d'évènement, on envoie la requête. Une fois ceci effectué, on peut afficher «&nbsp;Requête XHR initiée&nbsp;» dans la console, notre programme répond et continue son exécution pendant que la requête est en cours. Le gestionnaire d'évènement sera appelé une fois la requête terminée.

```html
<button id="xhr">Cliquez pour envoyer une requête</button>
<button id="recharger">Recharger</button>

<pre readonly class="event-log"></pre>
```

```css hidden
pre {
  display: block;
  margin: 1rem 0;
}
```

```js
const log = document.querySelector('.event-log');

document.querySelector('#xhr').addEventListener('click', () => {
  log.textContent = '';

  const xhr = new XMLHttpRequest();

  xhr.addEventListener('loadend', () => {
    log.textContent = `${log.textContent}Terminé avec le statut : ${xhr.status}`;
  });

  xhr.open('GET', 'https://raw.githubusercontent.com/mdn/translated-content/main/files/fr/_wikihistory.json');
  xhr.send();
  log.textContent = `${log.textContent}Requête XHR initiée\n`;
});

document.querySelector('#recharger').addEventListener('click', () => {
  log.textContent = '';
  document.location.reload();
});
```

{{EmbedLiveSample("", 600, 120)}}

On retrouve ici le même comportement que celui des [gestionnaires d'évènements vus dans le précédent module](/fr/docs/Learn/JavaScript/Building_blocks/Events), sauf qu'au lieu que l'évènement soit une action de l'utilisatrice ou de l'utilisateur (comme un clic sur un bouton), c'est le changement d'état d'un objet.

## Fonctions de rappel (<i lang="en">callbacks</i> en anglais)

Un gestionnaire d'évènement est une fonction de rappel d'un type particulier. Une fonction de rappel (ou <i lang="en">callback</i> en anglais) est simplement une fonction qui est passée en argument à une autre fonction, avec l'hypothèse que la fonction de rappel sera appelée à un moment adéquat. Nous venons de le voir, les fonctions de rappel ont été la première implémentation des fonctions asynchrones en JavaScript.

Toutefois, le code qui utilise les <i lang="en">callbacks</i> peut être difficilement compréhensible lorsque la fonction de rappel doit elle-même appeler une fonction qui prend en argument une fonction de rappel. Ce type de situation est pourtant courant quand on doit réaliser une opération qui se décompose en l'exécution de plusieurs fonctions asynchrones. Prenons le programme qui suit&nbsp;:

```js
function faireEtape1(init) {
  return init + 1;
}

function faireEtape2(init) {
  return init + 2;
}

function faireEtape3(init) {
  return init + 3;
}

function faireOperation() {
  let resultat = 0;
  resultat = faireEtape1(resultat);
  resultat = faireEtape2(resultat);
  resultat = faireEtape3(resultat);
  console.log(`Résultat : ${resultat}`);
}

faireOperation();
```

On a ici une opération qui est divisée en trois étapes, chacune dépend de la précédente. Dans cet exemple, la première étape ajoute 1 à la valeur d'entrée, la seconde ajoute 2, et la troisième ajoute 3. En démarrant avec une valeur d'entrée à 0, le résultat final vaut 6 (0 + 1 + 2 + 3). Un code synchrone comme celui-ci est plutôt compréhensible. Mais qu'est-ce que ça donne en implémentant les étapes à l'aide de <i lang="en">callbacks</i>&nbsp;?

```js
function faireEtape1(init, callback) {
  const resultat = init + 1;
  callback(resultat);
}

function faireEtape2(init, callback) {
  const resultat = init + 2;
  callback(resultat);
}

function faireEtape3(init, callback) {
  const resultat = init + 3;
  callback(resultat);
}

function faireOperation() {
  faireEtape1(0, resultat1 => {
    faireEtape2(resultat1, resultat2 => {
      faireEtape3(resultat2, resultat3 => {
        console.log(`Résultat : ${resultat3}`);
      });
    });
  });

}

faireOperation();
```

Comme on doit appeler les fonctions de rappel à l'intérieur des fonctions de rappel, on obtient une fonction `faireOperation()` avec de nombreux niveaux d'imbrication, ce qui la rend moins lisible et moins compréhensible et donc plus difficile à déboguer. C'est ce qu'on appelle parfois un «&nbsp;<i lang="en">callback hell</i>&nbsp;» (généralement utilisé en anglais, cela signifie «&nbsp;l'enfer des fonctions de rappel&nbsp;») ou encore «&nbsp;la pyramide du malheur&nbsp;» (du fait de l'indentation qui forme un triangle comme le côté d'une pyramide).

Lorsqu'on imbrique les fonctions de rappel ainsi, il devient très difficile de gérer les erreurs&nbsp;: il faut souvent les gérer à chaque niveau de la «&nbsp;pyramide&nbsp;» plutôt que d'avoir à gérer uniquement les erreurs au niveau le plus haut.

C'est pour ces raisons que la plupart des API asynchrones modernes n'utilisent plus les <i lang="en">callbacks</i>. À la place, la programmation asynchrone en JavaScript utilise [les promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise), et c'est ce que nous verrons dans le prochain article.

{{NextMenu("Learn/JavaScript/Asynchronous/Promises", "Learn/JavaScript/Asynchronous")}}

## Dans ce module

- **Introduction au JavaScript asynchrone**
- [Comment utiliser les promesses](/fr/docs/Learn/JavaScript/Asynchronous/Promises)
- [Implémenter une API utilisant les promesses](/fr/docs/Learn/JavaScript/Asynchronous/Implementing_a_promise-based_API)
- [Introduction aux <i lang="en">workers</i>](/fr/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
- [Évaluation&nbsp;: ordonnancer des animations](/fr/docs/Learn/JavaScript/Asynchronous/Sequencing_animations)
