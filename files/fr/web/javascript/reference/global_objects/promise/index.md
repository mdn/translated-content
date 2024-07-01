---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
---

{{JSRef}}

L'objet **`Promise`** (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.

{{AvailableInWorkers}}

Pour apprendre comment fonctionnent les promesses et comment les utiliser, nous vous conseillons de commencer par l'article [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises) du guide JavaScript.

## Description

L'interface **`Promise`** représente un intermédiaire (_proxy_) vers une valeur qui n'est pas nécessairement connue au moment de la création de la promesse. Cela permet d'associer des gestionnaires au succès éventuel d'une action asynchrone et à la raison d'une erreur. Ainsi, les méthodes asynchrones peuvent renvoyer des valeurs de manière similaire aux méthodes synchrones, la seule différence est que la valeur retournée par la méthode asynchrone est une promesse (d'avoir une valeur plus tard).

Une `Promise` est dans un de ces états :

- _pending (en attente)_ : état initial, la promesse n'est ni tenue, ni rompue ;
- _fulfilled (tenue_) : l'opération a réussi ;
- _rejected (rompue)_ : l'opération a échoué.

Une promesse en attente peut être _tenue_ avec une valeur ou _rompue_ avec une raison (erreur). Quand on arrive à l'une des deux situations, les gestionnaires associés lors de l'appel de la méthode `then` sont alors appelés. Si la promesse a déjà été tenue ou rompue lorsque le gestionnaire est attaché à la promesse, le gestionnaire est appelé. Cela permet qu'il n'y ait pas de situation de compétition entre une opération asynchrone en cours et les gestionnaires ajoutés.

Les méthodes [`Promise.prototype.then()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then) et [`Promise.prototype.catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch) renvoient des promesses et peuvent ainsi être chaînées. C'est ce qu'on appelle une _composition_.

![Schéma illustrant l'enchaînement des différents états possibles d'une promesse et les méthodes associées](promises.png)

> **Note :** D'autres langages utilisent des mécanismes d'évaluation à la volée (<i lang="en">lazy evaluation</i>) et de déport des calculs (<i lang="en">deferring computations</i>). Ces mécanismes sont également intitulés promesses (<i lang="en">promises</i>). En JavaScript, les promesses correspondent à des processus déjà lancés et qui peuvent être chaînés avec des fonctions de retour. Si vous cherchez à retarder l'évaluation, vous pouvez utiliser les fonctions fléchées sans arguments (ex. `f = () => expression`) afin de créer une expression à évaluer plus tard et utiliser `f()` pour l'évaluer au moment voulu.

> **Note :** On dit qu'une promesse est dans l'état <i lang="en">settled</i> (acquittée) qu'elle soit tenue ou rompue mais plus en attente. Le terme <i lang="en">resolved</i> (résolue) est aussi utilisé concernant les promesses — cela signifie que la promesse est acquittée ou bien enfermée dans une chaine de promesse. Le billet de Domenic Denicola, [<i lang="en">States and fates</i> (en anglais)](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md), contient de plus amples détails sur la terminologie utilisée.

### Enchaînement de promesses

Les méthodes `promise.then()`, `promise.catch()`, et `promise.finally()` sont utilisées pour associer une action ultérieure à une promesse lorsque celle-ci devient acquittée.

La méthode `.then()` prend deux arguments&nbsp;: le premier est une fonction de rappel (<i lang="en">callback</i>) pour le cas de résolution de la promesse et le second argument est une fonction de rappel pour le cas d'échec. Chaque invocation de `.then()` renvoie une nouvelle promesse qui peut éventuellement être utilisée chaînée à une autre promesse&nbsp;:

```js
const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("toto");
  }, 300);
});

maPromesse
  .then(gestionnaireSuccesA, gestionnaireEchecA)
  .then(gestionnaireSuccesB, gestionnaireEchecB)
  .then(gestionnaireSuccesC, gestionnaireEchecC);
```

Le traitement continue pour chaque étape de la chaîne, même lorsque `.then()` ne possède pas de fonction de rappel renvoyant une promesse. Ainsi, une chaîne d'appels peut très bien omettre les différentes fonctions de rappel pour les cas d'échec jusqu'au `.catch()` final.

La gestion d'une promesse rompue dans chaque `.then()` a des conséquences plus loin dans la chaîne de promesses. Il n'y a parfois pas le choix, car il faut gérer l'erreur immédiatement. Dans de tels cas, on peut lever une erreur d'un certain type et maintenir cet état d'erreur le long de la chaîne. Autrement, s'il n'est pas nécessaire d'avoir un traitement immédiat, mieux vaut laisser la gestion de l'erreur jusq'au `.catch()` final. Un appel à `.catch()` peut être vu comme un `.then()` qui n'a qu'une fonction de rappel pour gérer les cas d'échec.

```js
maPromesse
  .then(gestionnaireSuccesA)
  .then(gestionnaireSuccesB)
  .then(gestionnaireSuccesC)
  .catch(gestionnaireToutEchec);
```

On peut utiliser les [expressions de fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) pour les fonctions de rappel. Un enchaînement avec cette forme pourra alors ressembler à&nbsp;:

```js
promesse1
  .then((valeur) => {
    return valeur + " et truc";
  })
  .then((valeur) => {
    return valeur + " et truc bla";
  })
  .then((valeur) => {
    return valeur + " et blabla";
  })
  .then((valeur) => {
    return valeur + " et blabla";
  })
  .then((valeur) => {
    console.log(valeur);
  })
  .catch((err) => {
    console.log(err);
  });
```

La condition de terminaison d'une promesse détermine son état d'acquittement pour la prochaine promesse de la chaîne. Une promesse tenue indique un succès tandis qu'une promesse rompue indique un échec. La valeur de retour pour chaque promesse résolue de la chaîne est passée à la suivante avec `.then()`, alors que la raison de l'échec est passée au prochain gestionnaire d'échec dans la chaîne.

Les promesses d'une chaîne sont imbriquées comme des poupées russes, mais le démarrage se fait au niveau le plus imbriqué.

```plain
(promesse D, (promesse C, (promesse B, (promesse A) ) ) )
```

Lorsque la valeur qui suit une promesse est une autre promesse, on a un effet de remplacement dynamique. L'instruction `return` entraîne le «&nbsp;dépilement&nbsp;» de la promesse courante et c'est la promesse suivante qui prend sa place. Pour l'exemple d'imbrication illustré avant, si l'appel `.then()` associé à "promesse B" renvoie "promesse X", on aurait alors une situation comme celle-ci&nbsp;:

```plain
(promesse D, (promesse C, (promesse X) ) )
```

Une promesse peut être imbriquée à plusieurs endroits. Dans le code qui suit, la résolution de `promesseA` entraînera l'appel de deux méthodes `.then()`.

```js
const promesseA = new Promise(uneFonction);
const promesseB = promesseA.then(gestionSucces1, gestionEchec1);
const promesseC = promesseA.then(gestionSucces2, gestionEchec2);
```

Il est possible d'affecter une action à une promesse qui est déjà acquittée. Dans ce cas, l'action (le cas échéant), sera réalisé à la première opportunité asynchrone, c'est-à-dire lorsque la pile d'appel aura été nettoyée et qu'un battement d'horloge se sera écoulé. On aura autrement dit un effet similaire à celui d'un `setTimeout(action,10)`.

```js
const promesseA = new Promise((resolutionFunc, rejectionFunc) => {
  resolutionFunc(777);
});
// Ici, "promesseA" est déjà acquittée.
promesseA.then((val) =>
  console.log("journalisation asynchrone / val vaut :", val),
);
console.log("journalisation immédiate");

// On aura alors, dans la console, la suite de messages suivante :
// journalisation immédiate
// journalisation asynchrone / val vaut : 777
```

## Constructeur

- [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise)
  - : Crée un nouvel objet `Promise`. Le constructeur est principalement utilisé pour envelopper des fonctions qui ne prennent pas en charge les promesses.

## Méthodes statiques

- [`Promise.all(iterable)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
  - : Renvoie une promesse tenue lorsque toutes les promesses de l'argument itérable sont tenues ou une promesse rompue dès qu'une promesse de l'argument itérable est rompue. Si la promesse est tenue, elle est résolue avec un tableau contenant les valeurs de résolution des différentes promesses contenues dans l'itérable (dans le même ordre que celui-ci). Si la promesse est rompue, elle contient la raison de la rupture de la part de la promesse en cause, contenue dans l'itérable. Cette méthode est utile pour agréger les résultats de plusieurs promesses tous ensemble.
- [`Promise.allSettled(iterable)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled)
  - : Attend que l'ensemble des promesses aient été acquittées (tenues ou rompues) et renvoie une promesse qui est résolue après que chaque promesse ait été tenue ou rompue. La valeur de résolution de la promesse renvoyée est un tableau dont chaque élément est le résultat des promesses initiales.
- [`Promise.any(iterable)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/any)
  - : Renvoie une seule promesse dont la valeur de résolution est celle de la première promesse résolue de l'itérable passé en argument.
- [`Promise.race(iterable)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
  - : Renvoie une promesse qui est tenue ou rompue dès que l'une des promesses de l'itérable est tenue ou rompue avec la valeur ou la raison correspondante.
- [`Promise.reject(raison)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject)
  - : Renvoie un objet `Promise` qui est rompue avec la raison donnée.
- [`Promise.resolve(valeur)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve)
  - : Renvoie un objet `Promise` qui est tenue (résolue) avec la valeur donnée. Si la valeur possède une méthode `then`, la promesse renvoyée « suivra » cette méthode pour arriver dans son état, sinon la promesse renvoyée sera tenue avec la valeur fournie. Généralement, quand on veut savoir si une valeur est une promesse, on utilisera [`Promise.resolve(valeur)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) et on travaillera avec la valeur de retour en tant que promesse.

### Méthodes d'instance

- [`Promise.prototype.catch()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch)
  - : Ajoute une fonction de rappel comme gestionnaire d'échec à la promesse et renvoie une nouvelle promesse dont la valeur de résolution est la valeur de retour de la fonction de rappel si cette dernière est appelée ou sinon la valeur de résolution originale de la promesse si celle-ci a réussi.
- [`Promise.prototype.then()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
  - : Ajoute un gestionnaire de succès et un gestionnaire d'échec à la promesse et renvoie une nouvelle promesse qui se résout avec la valeur de retour du gestionnaire appelé ou avec la valeur de résolution originale si la promesse n'a pas été gérée (dans le cas où `onFulfilled` ou `onRejected` n'est pas une fonction).
- [`Promise.prototype.finally()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)
  - : Ajoute un gestionnaire à la promesse et renvoie une nouvelle promesse qui est résolue lors de la résolution de la première promesse. Le gestionnaire est appelé quand la première promesse est acquittée, qu'elle ait réussi ou non.

> **Note :** Voir [le guide sur les micro-tâches](/fr/docs/Web/API/HTML_DOM_API/Microtask_guide) pour en savoir plus sur la façon dont ces méthodes utilisent la queue et les services de micro-tâches.

## Exemples

### Exemple simple

```js
let maPremierePromesse = new Promise((resolve, reject) => {
  // On appelle resolve(...) lorsque notre action asynchrone
  // a réussi et reject(...) lorsqu'elle a échoué.
  // Dans cet exemple, on utilise setTimeout(...) pour simuler
  // du code asynchrone. En situation réelle, on utiliserait
  // plutôt XHR ou une API Web asynchrone.
  setTimeout(function () {
    resolve("Succès !"); // Tout s'est bien passé !
  }, 250);
});

maPremierePromesse.then((messageReussite) => {
  // messageReussite correspond à ce qui a été passé à
  // la fonction resolve(...) ci-avant.
  console.log("Youpi ! " + messageReussite);
});
```

### Exemple avec plusieurs situations

Cet exemple illustre différentes techniques d'utilisation des promesses et différentes situations qui peuvent se produire.

En bas de l'exemple, on a une chaîne de promesses. Dans cet exemple, on utilise `new Promise()` pour la première promesse, mais en pratique, cela proviendrait vraisemblablement d'une fonction d'une API qui renvoie une promesse.

La fonction `tetheredGetNumber()` illustre un générateur de promesse qui utilise `reject()` lors d'un appel asynchrone ou dans la fonction de rappel (ou dans les deux). La fonction `promiseGetWord()` illustre comment une fonction d'API peut générer et renvoyer une promesse de façon autonome.

On notera que la fonction `troubleWithGetNumber()` finit avec `throw()`. En effet, l'exécution d'une chaîne de promesse se poursuit au travers des `.then()`, même après une erreur, sans "throw()", l'erreur pourrait sembler traitée. C'est pourquoi on voit parfois l'omission de la fonction de rappel des rejets dans les différents `.then()` et une seule fonction de rappel pour gérer les échecs dans le `catch()` final. Ici, on lève une exception avec une valeur spéciale par simplicité, mais une erreur spécialisée serait plus appropriée.

Le code qui suit peut être exécuté dans NodeJS. N'hésitez pas à le manipuler et à tester pour mieux comprendre comment les erreurs surviennent. Pour forcer les erreurs, vous pouvez changer la valeur de `SEUIL_A`.

```js
"use strict";

// Pour tester la gestion d'erreur, on a un seuil
// qui provoquera des erreurs aléatoirement
const SEUIL_A = 8; // Abaissez ce seuil à 0 pour forcer les erreurs

function tetheredGetNumber(resolve, reject) {
  try {
    setTimeout(function () {
      const randomInt = Date.now();
      const value = randomInt % 10;
      try {
        if (value >= SEUIL_A) {
          throw new Error(`Trop grand : ${value}`);
        }
      } catch (msg) {
        reject(`Erreur dans le callback ${msg}`);
      }
      resolve(value);
      return;
    }, 500);
    // Vous pouvez expérimenter en décommentant le 'throw'
    // qui suit
  } catch (err) {
    reject(`Erreur à l'initialisation : ${err}`);
  }
  return;
}

function determineParity(value) {
  const isOdd = value % 2 ? true : false;
  const parityInfo = { theNumber: value, isOdd: isOdd };
  return parityInfo;
}

function troubleWithGetNumber(reason) {
  console.error(`Problème pour avoir le nombre : ${reason}`);
  throw -999; // on doit utiliser throw pour maintenir l'état d'erreur
}

function promiseGetWord(parityInfo) {
  const tetheredGetWord = function (resolve, reject) {
    const theNumber = parityInfo.theNumber;
    const seuil_B = SEUIL_A - 1;
    if (theNumber >= seuil_B) {
      reject(`Toujours trop grand : ${theNumber}`);
    } else {
      parityInfo.wordEvenOdd = parityInfo.isOdd ? "impair" : "pair";
      resolve(parityInfo);
    }
    return;
  };
  return new Promise(tetheredGetWord);
}

new Promise(tetheredGetNumber)
  .then(determineParity, troubleWithGetNumber)
  .then(promiseGetWord)
  .then((info) => {
    console.log("On a eu : ", info.theNumber, " , ", info.wordEvenOdd);
    return info;
  })
  .catch((reason) => {
    if (reason === -999) {
      console.error("Erreur précédemment gérée");
    } else {
      console.error(`Problème avec promiseGetWord(): ${reason}`);
    }
  })
  .finally((info) => console.log("C'est fini."));
```

### Exemple interactif

Dans le court exemple qui suit, on illustre le mécanisme d'une `Promise`. La méthode `testPromise()` est appelée chaque fois qu'on clique sur l'élément [`<button>`](/fr/docs/Web/HTML/Element/Button). Cette méthode crée une promesse qui sera tenue grâce à la fonction [`setTimeout()`](/fr/docs/Web/API/setTimeout), et avec la valeur comptePromesse (nombre commençant à 1) après `1s` à `3s` (aléatoire). Le constructeur Promise() est utilisé pour créer la promesse.

Le fait que la promesse soit tenue est simplement enregistré via un _callback_ sur `p1.then()`. Quelques indicateurs illustrent la manière dont la partie synchrone est découplée de la partie asynchrone.

#### HTML

```html
<button id="btn" type="button">Créer un objet Promise !</button>
<div id="log"></div>
```

#### JavaScript

```js
"use strict";
let comptePromesse = 0;

function testPromise() {
  let thisComptePromesse = ++comptePromesse;

  let log = document.getElementById("log");
  log.insertAdjacentHTML(
    "beforeend",
    thisComptePromesse +
      ") Started (<small>Début du code synchrone</small>)<br/>",
  );

  // on crée une nouvelle promesse :
  let p1 = new Promise(
    // La fonction de résolution est appelée avec la capacité de
    // tenir ou de rompre la promesse
    function (resolve, reject) {
      log.insertAdjacentHTML(
        "beforeend",
        thisComptePromesse +
          ") Promise started (<small>Début du code asynchrone</small>)<br/>",
      );

      // Voici un exemple simple pour créer un code asynchrone
      window.setTimeout(
        function () {
          // On tient la promesse !
          resolve(thisComptePromesse);
        },
        Math.random() * 2000 + 1000,
      );
    },
  );

  // On définit ce qui se passe quand la promesse est tenue
  // et ce qu'on appelle (uniquement) dans ce cas
  // La méthode catch() définit le traitement à effectuer
  // quand la promesse est rompue.
  p1.then(
    // On affiche un message avec la valeur
    function (val) {
      log.insertAdjacentHTML(
        "beforeend",
        val +
          ") Promise fulfilled (<small>Fin du code asynchrone</small>)<br/>",
      );
    },
  ).catch(
    // Promesse rejetée
    function () {
      console.log("promesse rompue");
    },
  );

  log.insertAdjacentHTML(
    "beforeend",
    thisComptePromesse +
      ") Promise made (<small>Fin du code synchrone</small>)<br/>",
  );
}

if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
} else {
  log = document.getElementById("log");
  log.innerHTML =
    "L'exemple live n'est pas disponible pour votre navigateur car celui-ci ne supporte pas l'interface <code>Promise<code>.";
}
```

L'exemple s'exécute lorsqu'on clique sur le bouton. Pour tester cet exemple, il est nécessaire d'utiliser un navigateur qui supporte les objets `Promise`. En cliquant plusieurs fois sur le bouton en peu de temps, on verra qu'il y a plusieurs promesses tenues les une après les autres.

{{EmbedLiveSample('', '500', '200')}}

### Charger une image en XHR

Un autre exemple simple utilisant `Promise` et [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) afin de charger une image est disponible sur le dépôt GitHub MDN [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test). Vous pouvez également [voir le résultat](https://mdn.github.io/js-examples/promises-test/). Chaque étape est commentée afin de vous permettre de suivre l'état de la promesse et l'architecture utilisée avec XHR.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- [Promises/A+ specification](https://promisesaplus.com/)
- [Venkatraman.R - JS Promise (Part 1, Basics)](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53) (en anglais)
- [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js)](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski) (en anglais)
- [Venkatraman.R - Tools for Promises Unit Testing](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction) (en anglais)
- [Jake Archibald : _JavaScript Promises : There and Back Again_](https://www.html5rocks.com/en/tutorials/es6/promises/) (tutoriel en anglais)
- [Domenic Denicola : _Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript_](https://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript) (présentation en anglais sur l'asynchronisme en JavaScript)
- [Matt Greer : _JavaScript Promises ... In Wicked Detail_](https://www.mattgreer.org/articles/promises-in-wicked-detail/) (en anglais)
- [Forbes Lindesay : promisejs.org](https://www.promisejs.org/) (en anglais)
- [Prothèse pour les promesses par Jake Archibald](https://github.com/jakearchibald/es6-promise/)
- [Les promesses JavaScript sur Udacity](https://www.udacity.com/course/javascript-promises--ud898) (en anglais)
