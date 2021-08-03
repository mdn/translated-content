---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
tags:
  - ECMAScript 2015
  - JavaScript
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise
---
{{JSRef}}

L'objet **`Promise`** (pour « promesse ») est utilisé pour réaliser des traitements de façon asynchrone. Une promesse représente une valeur qui peut être disponible maintenant, dans le futur voire jamais.

> **Note :** Cet article décrit le constructeur `Promise`. Pour en savoir plus sur les promesses en général, nous vous conseillons de lire l'article [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses). Le constructeur `Promise` est principalement utilisé pour envelopper des fonctions qui ne prennent pas en charge les promesses.

{{EmbedInteractiveExample("pages/js/promise-constructor.html")}}

## Syntaxe

    new Promise( /* exécuteur */ function(resolve, reject) { ... } );

### Paramètres

- `exécuteur`
  - : Une fonction à laquelle on passera deux arguments : `resolve` et `reject`. Cette fonction est exécutée immédiatement par l'implémentation de **`Promise`** qui fournit les fonctions `resolve` et `reject` (elle est exécutée avant que le constructeur **`Promise`** ait renvoyé l'objet créé). Les fonctions `resolve` et `reject`, lorsqu'elles sont appelées, permettent respectivement de tenir ou de rompre la promesse. On attend de l'exécuteur qu'il démarre un travail asynchrone puis, une fois le travail terminé, appelle la fonction `resolve` (si tout s'est bien passé) ou la fonction `reject` (lorsqu'il y a eu un problème) pour définir l'état final de la promesse.
    Si une erreur est générée par l'exécuteur, la promesse est rompue et la valeur de retour de l'exécuteur est ignorée.

## Description

L'interface **`Promise`** représente un intermédiaire (_proxy_) vers une valeur qui n'est pas nécessairement connue au moment de sa création. Cela permet d'associer des gestionnaires au succès éventuel d'une action asynchrone et à la raison d'une erreur. Ainsi, des méthodes asynchrones renvoient des valeurs comme les méthodes synchrones, la seule différence est que la valeur retournée par la méthode asynchrone est une promesse (d'avoir une valeur plus tard).

Une `Promise` est dans un de ces états :

- _pending (en attente)_ : état initial, la promesse n'est ni remplie, ni rompue ;
- _fulfilled (tenue_) : l'opération a réussi ;
- _rejected (rompue)_ : l'opération a échoué ;
- _settled (acquittée)_ : la promesse est tenue ou rompue mais elle n'est plus en attente.

Une promesse en attente peut être _tenue_ avec une valeur ou _rompue_ avec une raison (erreur). Quand on arrive à l'une des deux situations, les gestionnaires associés lors de l'appel de la méthode `then` sont alors appelés. (Si la promesse a déjà été tenue ou rompue lorsque le gestionnaire est attaché à la promesse, le gestionnaire est appelé. Cela permet qu'il n'y ait pas de situation de compétition entre une opération asynchrone en cours et les gestionnaires ajoutés).

Les méthodes {{jsxref("Promise.then","Promise.prototype.then()")}} et {{jsxref("Promise.catch","Promise.prototype.catch()")}} renvoient des promesses et peuvent ainsi être chaînées. C'est ce qu'on appelle une _composition_.

![](https://mdn.mozillademos.org/files/15911/promises.png)

> **Note :** Une promesse est dans l'état _settled_ (acquittée) qu'elle soit tenue ou rompue mais plus en attente. Le terme _resolved_ (résolue) est aussi utilisé concernant les promesses — cela signifie que la promesse est acquittée ou bien enfermée dans une chaine de promesse. Le billet de Domenic Denicola, [_States and fates_ (en anglais)](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md), contient de plus amples détails sur la terminologie utilisée.

> **Attention :** D'autres langages utilisent des mécanismes d'évaluation à la volée (_lazy evaluation_) et de déport des calculs (_deferring computations_). Ces mécanismes sont également intitulés promesses (_promises_). En JavaScript, les promesses correspondent à des processus déjà lancés et qui peuvent être chaînés avec des fonctions de retour. Si vous cherchez à retarder l'évaluation, vous pouvez utiliser les fonctions fléchées sans arguments (ex. `f = () => expression`) afin de créer une expression à évaluer plus tard et utiliser `f()` pour l'évaluer au moment voulu.

## Propriétés

- `Promise.length`
  - : Une propriété de longueur qui vaut 1 (le nombre d'arguments pour le constructeur).
- {{jsxref("Promise.prototype")}}
  - : Cette propriété représente le prototype du constructeur `Promise`.

## Méthodes

- {{jsxref("Promise.all", "Promise.all(iterable)")}}
  - : Renvoie une promesse tenue lorsque toutes les promesses de l'argument itérable sont tenues ou une promesse rompue dès qu'une promesse de l'argument itérable est rompue. Si la promesse est tenue, elle est résolue avec un tableau contenant les valeurs de résolution des différentes promesses contenues dans l'itérable (dans le même ordre que celui-ci). Si la promesse est rompue, elle contient la raison de la rupture de la part de la promesse en cause, contenue dans l'itérable. Cette méthode est utile pour agréger les résultats de plusieurs promesses tous ensemble.
- {{jsxref("Promise.allSettled", "Promise.allSettled(iterable)")}}
  - : Attend que l'ensemble des promesses aient été acquittées (tenues ou rompues) et renvoie une promesse qui est résolue après que chaque promesse ait été tenue ou rompue. La valeur de résolution de la promesse renvoyée est un tableau dont chaque élément est le résultat des promesses initiales.
- {{jsxref("Promise.race", "Promise.race(iterable)")}}
  - : Renvoie une promesse qui est tenue ou rompue dès que l'une des promesses de l'itérable est tenue ou rompue avec la valeur ou la raison correspondante.
- {{jsxref("Promise.reject", "Promise.reject(raison)")}}
  - : Renvoie un objet `Promise` qui est rompue avec la raison donnée.
- {{jsxref("Promise.resolve", "Promise.resolve(valeur)")}}
  - : Renvoie un objet `Promise` qui est tenue (résolue) avec la valeur donnée. Si la valeur possède une méthode `then`, la promesse renvoyée « suivra » cette méthode pour arriver dans son état, sinon la promesse renvoyée sera tenue avec la valeur fournie. Généralement, quand on veut savoir si une valeur est une promesse, on utilisera {{jsxref("Promise.resolve","Promise.resolve(valeur)")}} et on travaillera avec la valeur de retour en tant que promesse.

## Prototype pour `Promise`

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/prototype','Propriétés')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/prototype','Méthodes')}}

## Exemples

### Créer une promesse

Pour créer une promesse, on utilise l'opérateur `new` et le constructeur. Celui-ci prend en argument une fonction qui prend deux fonctions en paramètres. La première est appelée quand la tâche asynchrone est correctement terminée et la seconde est appelée quand la tâche échoue :

```js
const maPremierePromesse = new Promise((resolve, reject) => {
  // réaliser une tâche asynchrone et appeler :

  // resolve(uneValeur); // si la promesse est tenue
  // ou
  // reject("raison d'echec"); // si elle est rompue
});
```

On peut ainsi obtenir des fonctions asynchrones en renvoyant une promesse :

```js
function maFonctionAsynchrone(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}
```

### Exemple interactif

```html
<button id="btn" type="button">Créer un objet Promise !</button>
<div id="log"></div>
```

Dans le court exemple qui suit, on illustre le mécanisme d'une `Promise`. La méthode `testPromise()` est appelée chaque fois qu'on clique sur l'élément {{HTMLElement("button")}}. Cette méthode crée une promesse qui sera tenue grâce à la fonction {{domxref("window.setTimeout()")}}, et avec la valeur comptePromesse (nombre commançant à 1) après `1s` à `3s` (aléatoire). Le constructeur Promise() est utilisé pour créer la promesse.

Le fait que la promesse soit tenue est simplement enregistré via un _callback_ sur `p1.then()`. Quelques indicateurs illustrent la manière dont la partie synchrone est découplée de la partie asynchrone.

```js
'use strict';
var comptePromesse = 0;

function testPromise() {
  var thisComptePromesse = ++comptePromesse;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisComptePromesse +
      ') Started (<small>Début du code synchrone</small>)<br/>');

  // on crée une nouvelle promesse :
  var p1 = new Promise(
    // La fonction de résolution est appelée avec la capacité de
    // tenir ou de rompre la promesse
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisComptePromesse +
          ') Promise started (<small>Début du code asynchrone</small>)<br/>');

      // Voici un exemple simple pour créer un code asynchrone
      window.setTimeout(
        function() {
          // On tient la promesse !
          resolve(thisComptePromesse);
        }, Math.random() * 2000 + 1000);
    });

  // On définit ce qui se passe quand la promesse est tenue
  // et ce qu'on appelle (uniquement) dans ce cas
  // La méthode catch() définit le traitement à effectuer
  // quand la promesse est rompue.
  p1.then(
    // On affiche un message avec la valeur
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Promise fulfilled (<small>Fin du code asynchrone</small>)<br/>');
    }).catch(
      // Promesse rejetée
      function() {
        console.log("promesse rompue");
      });

  log.insertAdjacentHTML('beforeend', thisComptePromesse +
      ') Promise made (<small>Fin du code synchrone</small>)<br/>');
}
```

```js
if ("Promise" in window) {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", testPromise);
 } else {
  log = document.getElementById('log');
  log.innerHTML = "L'exemple live n'est pas disponible pour votre navigateur car celui-ci ne supporte pas l'interface <code>Promise<code>.";
}
```

L'exemple s'exécute lorsqu'on clique sur le bouton. Pour tester cet exemple, il est nécessaire d'utiliser un navigateur qui supporte les objets `Promise`. En cliquant plusieurs fois sur le bouton en peu de temps, on verra qu'il y a plusieurs promesses tenues les une après les autres.

{{EmbedLiveSample('Exemple_interactif', '500', '200')}}

## Charger une image en XHR

Un autre exemple simple utilisant `Promise` et {{domxref("XMLHttpRequest")}} afin de charger une image est disponible sur le dépôt GitHub MDN [js-examples](https://github.com/mdn/js-examples/tree/master/promises-test). Vous pouvez également [voir le résultat](https://mdn.github.io/js-examples/promises-test/). Chaque étape est commentée afin de vous permettre de suivre l'état de la promesse et l'architecture utilisée avec XHR.

## Spécifications

| Spécification                                                                | État                         | Commentaires                                    |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------- |
| {{SpecName('ES2015', '#sec-promise-objects', 'Promise')}} | {{Spec2('ES2015')}}     | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-promise-objects', 'Promise')}} | {{Spec2('ESDraft')}} |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Promise")}}

## Voir aussi

- [Manipuler les promesses](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses)
- [Promises/A+ specification](https://promisesaplus.com/)
- [Venkatraman.R - JS Promise (Part 1, Basics) ](https://medium.com/@ramsunvtech/promises-of-promise-part-1-53f769245a53)(en anglais)
- [Venkatraman.R - JS Promise (Part 2 - Using Q.js, When.js and RSVP.js) ](https://medium.com/@ramsunvtech/js-promise-part-2-q-js-when-js-and-rsvp-js-af596232525c#.dzlqh6ski)(en anglais)
- [Venkatraman.R - Tools for Promises Unit Testing ](https://tech.io/playgrounds/11107/tools-for-promises-unittesting/introduction)(en anglais)
- [Jake Archibald : _JavaScript Promises : There and Back Again_](https://www.html5rocks.com/en/tutorials/es6/promises/) (tutoriel en anglais)
- [Domenic Denicola : _Callbacks, Promises, and Coroutines – Asynchronous Programming Patterns in JavaScript_](https://de.slideshare.net/domenicdenicola/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript) (présentation en anglais sur l'asynchronisme en JavaScript)
- [Matt Greer : _JavaScript Promises ... In Wicked Detail_](https://www.mattgreer.org/articles/promises-in-wicked-detail/) (en anglais)
- [Forbes Lindesay : promisejs.org](https://www.promisejs.org/) (en anglais)
- [Prothèse pour les promesses par Jake Archibald](https://github.com/jakearchibald/es6-promise/)
- [Les promesses JavaScript sur Udacity](https://www.udacity.com/course/javascript-promises--ud898) (en anglais)
