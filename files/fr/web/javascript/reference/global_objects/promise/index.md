---
title: Promise
slug: Web/JavaScript/Reference/Global_Objects/Promise
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

L'objet **`Promise`** représente un objet qui incarne la complétion éventuelle (ou l'échec) d'une opération asynchrone et sa valeur résultante.

Pour comprendre le fonctionnement des promesses et comment les utiliser, nous vous conseillons de commencer par l'article du guide [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises) JavaScript.

## Description

Une promesse (`Promise`) est un mandataire pour une valeur qui n'est pas nécessairement connue au moment de la création de la promesse. Cela permet d'associer des gestionnaires au succès éventuel d'une action asynchrone et à la raison d'une erreur. Ainsi, les méthodes asynchrones peuvent retourner des valeurs de manière similaire aux méthodes synchrones&nbsp;: au lieu de retourner immédiatement la valeur finale, la méthode asynchrone retourne une _promesse_ pour fournir la valeur à un moment donné dans le futur.

Une promesse (`Promise`) est dans l'un de ces états&nbsp;:

- <i lang="en">pending</i> (en attente)&nbsp;: état initial, la promesse n'est ni complétée, ni rompue.
- <i lang="en">fulfilled</i> (complétée)&nbsp;: signifiant que l'opération a été complétée avec succès.
- <i lang="en">rejected</i> (rompue)&nbsp;: signifiant que l'opération a échoué.

_L'état éventuel_ d'une promesse en attente peut être soit _complétée_ avec une valeur, soit _rompue_ avec une raison (erreur).
Lorsque l'une de ces options se produit, les gestionnaires associés mis en file d'attente par la méthode `then` d'une promesse sont appelés. Si la promesse a déjà été _complétée_ ou _rompue_ lorsqu'un gestionnaire correspondant est attaché, le gestionnaire est appelé, de sorte qu'il n'y a pas de condition de concurrence entre l'achèvement d'une opération asynchrone et l'attachement de ses gestionnaires.

Une promesse est dite _acquittée_ (<i lang="en">settled</i> en anglais) si elle est soit complétée, soit rompue, mais pas en attente.

![Schéma illustrant comment l'état d'une promesse passe de en attente, à complétée ou rompue par les gestionnaires `then`/`catch`. Une promesse en attente peut devenir soit complétée, soit rompue. Si elle est complétée, le gestionnaire « en complétion », ou premier paramètre de la méthode `then()`, est exécuté et effectue d'autres actions asynchrones. Si elle est rompue, le gestionnaire d'erreur, soit passé comme second paramètre de la méthode `then()`, soit comme seul paramètre de la méthode `catch()`, est exécuté.](promises.png)

Vous entendez également le terme _résolue_ utilisé avec les promesses — cela signifie que la promesse est acquittée ou «&nbsp;verrouillée&nbsp;» pour correspondre à l'état éventuel d'une autre promesse, et que toute tentative de la résoudre ou de la rompre ultérieurement n'a aucun effet. Le document [États et destins des promesses <sup>(angl.)</sup>](https://github.com/domenic/promises-unwrapping/blob/master/docs/states-and-fates.md) de la proposition originale de `Promise` contient plus de détails sur la terminologie des promesses. De manière informelle, les promesses «&nbsp;résolues&nbsp;» sont souvent équivalentes aux promesses «&nbsp;complétées&nbsp;», mais comme illustré dans «&nbsp;États et destins des promesses&nbsp;», les promesses résolues peuvent également être en attente ou rompues. Par exemple&nbsp;:

```js
new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});
```

Cette promesse est déjà _résolue_ au moment où elle est créée (parce que le `resolveOuter` est appelé de manière synchrone), mais elle est résolue avec une autre promesse, et n'est donc pas _complétée_ avant 1 seconde plus tard, lorsque la promesse interne est complétée. En pratique, la «&nbsp;résolution&nbsp;» se fait souvent en coulisses et n'est pas observable, et seules sa complétion ou sa rupture le sont.

> [!NOTE]
> D'autres langages ont des mécanismes pour l'évaluation à la volée (<i lang="en">lazy evaluation</i> en anglais) et le report d'un calcul (<i lang="en">deferring computation</i> en anglais), qu'ils appellent également «&nbsp;promesses&nbsp;», par exemple Scheme. Les promesses en JavaScript représentent des processus qui sont déjà en cours, et qui peuvent être enchaînés avec des fonctions de rappel. Si vous souhaitez évaluer à la volée une expression, envisagez d'utiliser une fonction sans arguments, par exemple `f = () => expression` pour créer l'expression évaluée à la volée, et `f()` pour évaluer l'expression immédiatement.

Une promesse (`Promise`) ne dispose pas en soi d'un protocole de premier niveau pour l'annulation, mais vous pouvez éventuellement annuler directement l'opération asynchrone sous-jacente, généralement à l'aide de {{DOMxRef("AbortController")}}.

### Enchaînement de promesses

Les méthodes de promesse {{JSxRef("Promise/then", "then()")}}, {{JSxRef("Promise/catch", "catch()")}} et {{JSxRef("Promise/finally", "finally()")}} sont utilisées pour associer une action ultérieure à une promesse lorsqu'elle devient acquittée. La méthode `then()` prend jusqu'à deux arguments&nbsp;; le premier argument est une fonction de rappel pour le cas de réussite de la promesse, et le second argument est une fonction de rappel pour le cas de rejet. Les méthodes `catch()` et `finally()` appellent `then()` en interne et rendent la gestion des erreurs moins verbeuse. Par exemple, un `catch()` n'est en réalité qu'un `then()` sans passer le gestionnaire de réussite. Comme ces méthodes retournent des promesses, elles peuvent être chaînées. Par exemple&nbsp;:

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

Nous utilisons la terminologie suivante&nbsp;: _promesse initiale_ est la promesse sur laquelle `then` est appelé&nbsp;; _nouvelle promesse_ est la promesse retournée par `then`. Les deux fonctions de rappel passées à `then` sont appelées _gestionnaire de réussite_ et _gestionnaire de rejet_, respectivement.

L'état d'acquittement de la promesse initiale détermine quel gestionnaire exécuter.

- Si la promesse initiale est complétée, le gestionnaire de réussite est appelé avec la valeur de réussite.
- Si la promesse initiale est rompue, le gestionnaire de rejet est appelé avec la raison de l'échec.

La terminaison du gestionnaire détermine l'état d'acquittement de la nouvelle promesse.

- Si le gestionnaire retourne une valeur de [semi-promesse](#semi-promesse), la nouvelle promesse s'acquitte dans le même état que la valeur retournée.
- Si le gestionnaire retourne une valeur qui n'est pas une semi-promesse, la nouvelle promesse est complétée avec la valeur retournée.
- Si le gestionnaire lève une erreur, la nouvelle promesse est rompue avec l'erreur levée.
- Si la promesse initiale n'a pas de gestionnaire correspondant attaché, la nouvelle promesse s'acquitte dans le même état que la promesse initiale — c'est-à-dire que, sans gestionnaire de rejet, une promesse rompue reste rompue avec la même raison.

Par exemple, dans le code ci-dessus, si `maPromesse` est rompue, `gestionnaireEchecA` est appelée, et si `gestionnaireEchecA` s'exécute normalement (sans lever d'exception ni retourner une promesse rompue), la promesse retournée par le premier `then` est complétée au lieu de rester rompue. Par conséquent, si une erreur doit être gérée immédiatement, mais que l'on souhaite conserver l'état d'erreur tout au long de la chaîne, il faut lever une erreur d'un certain type dans le gestionnaire de rejet. En revanche, en l'absence de nécessité immédiate, on peut omettre la gestion des erreurs jusqu'au gestionnaire `catch()` final.

```js
maPromesse
  .then(gestionnaireSuccesA)
  .then(gestionnaireSuccesB)
  .then(gestionnaireSuccesC)
  .catch(gestionnaireToutEchec);
```

Utilisez les [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) pour les fonctions de rappel, l'implémentation de la chaîne de promesses peut ressembler à ceci&nbsp;:

```js
maPromesse
  .then((valeur) => `${valeur} et truc`)
  .then((valeur) => `${valeur} et truc blabla`)
  .then((valeur) => `${valeur} et blabla`)
  .then((valeur) => `${valeur} et blabla`)
  .then((valeur) => {
    console.log(valeur);
  })
  .catch((err) => {
    console.error(err);
  });
```

> [!NOTE]
> Pour une exécution plus rapide, toutes les actions synchrones doivent de préférence être effectuées dans un seul gestionnaire, sinon il faut plusieurs battements d'horloge (<i lang="en">ticks</i> en anglais) pour exécuter tous les gestionnaires en séquence.

JavaScript maintient une [file de tâches](/fr/docs/Web/JavaScript/Reference/Execution_model). À chaque fois, JavaScript choisit une tâche dans la file et l'exécute jusqu'à son terme. Les tâches sont définies par l'exécuteur du constructeur `Promise()`, les gestionnaires passés à `then`, ou toute API de la plateforme qui retourne une promesse. Les promesses dans une chaîne représentent la relation de dépendance entre ces tâches. Lorsqu'une promesse est acquittée, les gestionnaires respectifs qui y sont associés sont ajoutés à l'arrière de la file de tâches.

Une promesse peut participer à plus d'une chaîne. Pour le code suivant, l'acquittement de `promesseA` entraîne l'ajout de `gestionSucces1` et `gestionSucces2` à la file de tâches. Comme `gestionSucces1` est enregistré en premier, il est invoqué en premier.

```js
const promesseA = new Promise(uneFonction);
const promesseB = promesseA.then(gestionSucces1, gestionEchec1);
const promesseC = promesseA.then(gestionSucces2, gestionEchec2);
```

Une action peut être affectée à une promesse déjà acquittée. Dans ce cas, l'action est ajoutée immédiatement à l'arrière de la file de tâches et est exécutée lorsque toutes les tâches existantes sont terminées. Par conséquent, une action pour une promesse déjà «&nbsp;acquittée&nbsp;» ne se produit qu'après l'exécution du code synchrone actuel et après qu'au moins un battement d'horloge se soit écoulé. Cela garantit que les actions des promesses sont asynchrones.

```js
const promesseA = new Promise((resolutionFunc, rejectionFunc) => {
  resolutionFunc(777);
});
// Ici, « promesseA » est déjà acquittée.
promesseA.then((val) =>
  console.log("journalisation asynchrone / val vaut :", val),
);
console.log("journalisation immédiate");

// produit les résultats dans cet ordre :
// journalisation immédiate
// journalisation asynchrone / val vaut : 777
```

### Semi-promesse

L'écosystème JavaScript a créé plusieurs implémentations de promesse bien avant qu'elles ne fassent partie du langage. Bien qu'elles soient représentées différemment en interne, au minimum, tous les objets de type promesse implémentent l'interface _Thenable_. Une semi-promesse implémente la méthode [`.then()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then), qui est appelée avec deux fonctions de rappel&nbsp;: un pour lorsque la promesse est complétée, un pour lorsqu'elle est rompue. Les promesses sont également des semi-promesses.

Pour interagir avec les implémentations existantes, le langage permet d'utiliser des semi-promesses à la place des promesses. Par exemple, [`Promise.resolve`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve) ne résout pas seulement les promesses, mais suit également les semi-promesses.

```js
// Cet objet n'est pas un semi-promesse conforme à Promises/A+ ! Il appelle
// enCompletion de manière synchrone. À des fins de démonstration uniquement.
const semiPromesse = {
  then(enCompletion, auRejet) {
    enCompletion({
      // La semi-promesse est complétée avec un autre semi-promesse
      then(enCompletion, auRejet) {
        enCompletion(42);
      },
    });
  },
};

Promise.resolve(semiPromesse); // Une promesse complétée avec 42
```

La méthode `then()` est responsable de la planification de l'exécution des fonctions de rappel `enCompletion` et `auRejet` fournies. Sa sémantique, y compris la gestion des erreurs et l'asynchronicité, est définie avec précision dans la [spécification Promises/A+ <sup>(angl.)</sup>](https://promisesaplus.com/), et nous ne la répétons pas ici. Il est très rare que vous ayez besoin d'implémenter vous-même une semi-promesse&nbsp;; même si vous n'utilisez pas les promesses natives, vous utilisez probablement une bibliothèque de promesses telle que [Bluebird <sup>(angl.)</sup>](https://www.npmjs.com/package/bluebird).

### Concurrence des promesses

La classe `Promise` offre quatre principales méthodes statiques pour faciliter la [concurrence <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Concurrent_computing) des tâches asynchrones&nbsp;:

- {{JSxRef("Promise.all()")}}
  - : Se complète lorsque **toutes** les promesses sont complétées&nbsp;; se rompt lorsque **l'une** des promesses se rompt.
- {{JSxRef("Promise.allSettled()")}}
  - : Se complète lorsque **toutes** les promesses sont acquittées.
- {{JSxRef("Promise.any()")}}
  - : Se complète lorsque **l'une** des promesses est complétée&nbsp;; se rompt lorsque **toutes** les promesses se rompent.
- {{JSxRef("Promise.race()")}}
  - : S'acquitte lorsque **l'une** des promesses est acquittée. En d'autres termes, se complète lorsque l'une des promesses est complétée&nbsp;; se rompt lorsque l'une des promesses se rompt.

Toutes ces méthodes prennent un [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_») de promesses ([semi-promesses](#semi-promesse), pour être exact) et retournent une nouvelle promesse. Elles prennent toutes en charge la sous-classification, ce qui signifie qu'elles peuvent être appelées sur des sous-classes de `Promise`, et le résultat est une promesse du type de la sous-classe. Pour ce faire, le constructeur de la sous-classe doit implémenter la même signature que le constructeur [`Promise()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise) — acceptant une seule fonction `executor` qui peut être appelée avec les rappels `resolve` et `reject` comme paramètres. La sous-classe doit également avoir une méthode statique `resolve` qui peut être appelée comme {{JSxRef("Promise.resolve()")}} pour résoudre des valeurs en promesses.

Notez que JavaScript est [processus unique](/fr/docs/Glossary/Thread) par nature, donc à un instant donné, une seule tâche est en cours d'exécution, bien que le contrôle puisse passer entre différentes promesses, donnant l'impression que l'exécution des promesses est concurrente. [L'exécution parallèle](<https://fr.wikipedia.org/wiki/Parallélisme_(informatique)>) en JavaScript ne peut être réalisée que par le biais de [processus de travail](/fr/docs/Web/API/Web_Workers_API).

Il existe deux autres méthodes statiques pratiques&nbsp;: {{JSxRef("Promise.allKeyed()")}} et {{JSxRef("Promise.allSettledKeyed()")}}, qui se comportent comme `Promise.all()` et `Promise.allSettled()`, mais prennent des _objets_ de promesses et retournent des promesses qui se complètent avec des _objets_ de la même forme. En travaillant avec des objets au lieu de tableaux, vous pouvez associer les résultats à des clés sémantiquement significatives, au lieu d'un ordre de tableau arbitraire qui peut être difficile à maintenir.

## Constructeur

- {{JSxRef("Promise/Promise", "Promise()")}}
  - : Crée un nouvel objet `Promise`. Le constructeur est principalement utilisé pour envelopper des fonctions qui ne prennent pas en charge les promesses.

## Propriétés statiques

- [`Promise[Symbol.species]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/Symbol.species)
  - : Retourne le constructeur utilisé pour construire les valeurs de retour des méthodes de promesse.

## Méthodes statiques

- {{JSxRef("Promise.all()")}}
  - : Prend un itérable de promesses en entrée et retourne une seule `Promise`. Cette promesse retournée est acquittée lorsque toutes les promesses de l'entrée sont acquittées (y compris lorsqu'un itérable vide est passé), avec un tableau des valeurs d'acquittement. Elle est rompue lorsque l'une des promesses de l'entrée est rompue, avec cette première raison de rejet.
- {{JSxRef("Promise.allKeyed()")}} {{Experimental_Inline}}
  - : Comme `Promise.all()`, sauf qu'elle prend un objet de promesses et retourne une promesse qui se complète avec un objet de la même forme, vous permettant d'associer les résultats à des clés sémantiquement significatives.
- {{JSxRef("Promise.allSettled()")}}
  - : Prend un itérable de promesses en entrée et retourne une seule promesse (`Promise`). Cette promesse retournée est acquittée lorsque toutes les promesses de l'entrée sont acquittées (y compris lorsqu'un itérable vide est passé), avec un tableau d'objets qui décrivent le résultat de chaque promesse.
- {{JSxRef("Promise.allSettledKeyed()")}} {{Experimental_Inline}}
  - : Comme `Promise.allSettled()`, sauf qu'elle prend un objet de promesses et retourne une promesse qui se complète avec un objet de la même forme, vous permettant d'associer les résultats à des clés sémantiquement significatives.
- {{JSxRef("Promise.any()")}}
  - : Prend un itérable de promesses en entrée et retourne une seule `Promise`. Cette promesse retournée est acquittée lorsque l'une des promesses de l'entrée est acquittée, avec cette première valeur d'acquittement. Elle est rompue lorsque toutes les promesses de l'entrée sont rompues (y compris lorsqu'un itérable vide est passé), avec un {{JSxRef("AggregateError")}} contenant un tableau de raisons de rejet.
- {{JSxRef("Promise.race()")}}
  - : Prend un itérable de promesses en entrée et retourne une seule `Promise`. Cette promesse retournée est acquittée avec l'état final de la première promesse qui s'acquitte.
- {{JSxRef("Promise.reject()")}}
  - : Retourne un nouvel objet `Promise` qui est rompu avec la raison donnée.
- {{JSxRef("Promise.resolve()")}}
  - : Retourne un objet `Promise` qui est résolu avec la valeur donnée. Si la valeur est une semi-promesse (c'est-à-dire qu'elle possède une méthode `then`), la promesse retournée «&nbsp;suit&nbsp;» cette semi-promesse, adoptant son état final&nbsp;; sinon, la promesse retournée est acquittée avec la valeur.
- {{JSxRef("Promise.try()")}}
  - : Prend une fonction de rappel de n'importe quel type (qui retourne ou lève une exception, de manière synchrone ou asynchrone) et encapsule son résultat dans une promesse (`Promise`).
- {{JSxRef("Promise.withResolvers()")}}
  - : Retourne un objet contenant un nouvel objet `Promise` et deux fonctions permettant de le résoudre ou de le rompre, correspondant aux deux paramètres transmis à l'exécuteur du constructeur {{JSxRef("Promise/Promise", "Promise()")}}.

## Propriétés d'instance

Ces propriétés sont définies sur `Promise.prototype` et partagées par toutes les instances de `Promise`.

- {{JSxRef("Object/constructor", "Promise.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet instance. Pour les instances de `Promise`, la valeur initiale est le constructeur {{JSxRef("Promise/Promise", "Promise")}}.
- `Promise.prototype[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne de caractères `"Promise"`. Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

### Méthodes d'instance

- {{JSxRef("Promise.prototype.catch()")}}
  - : Ajoute une fonction de rappel comme gestionnaire d'échec à la promesse et retourne une nouvelle promesse dont la valeur de résolution est la valeur de retour de la fonction de rappel si cette dernière est appelée ou sinon la valeur de résolution originale de la promesse si celle-ci a réussi.
- {{JSxRef("Promise.prototype.finally()")}}
  - : Ajoute un gestionnaire à la promesse et retourne une nouvelle promesse qui est résolue lorsque la promesse originale est résolue. Le gestionnaire est appelé lorsque la promesse est réglée, qu'elle soit complétée ou rompue.
- {{JSxRef("Promise.prototype.then()")}}
  - : Ajoute des gestionnaires de succès et d'échec à la promesse, et retourne une nouvelle promesse qui se résout avec la valeur de retour du gestionnaire appelé, ou avec sa valeur initiale si la promesse n'a pas été traitée (c'est-à-dire si le gestionnaire pertinent `onFulfilled` ou `onRejected` n'est pas une fonction).

## Exemples

### Exemple simple

Dans cet exemple, nous utilisons `setTimeout(...)` pour simuler du code asynchrone.
En réalité, vous allez utiliser probablement quelque chose comme XHR ou une API HTML.

```js
const maPremierePromesse = new Promise((resolve, reject) => {
  // Nous appelons resolve(...) lorsque ce que nous faisions de manière
  // asynchrone a réussi, et reject(...) lorsqu'il a échoué.
  setTimeout(() => {
    resolve("Succès !"); // Super ! Tout s'est bien passé !
  }, 250);
});

maPremierePromesse.then((messageReussite) => {
  // messageReussite correspond à ce qui a été passé à la fonction resolve(...) ci-dessus.
  // Cela n'a pas besoin d'être une chaîne de caractères, mais si c'est uniquement un message de succès, c'est probablement le cas.
  console.log(`Youpi ! ${messageReussite}`);
});
```

### Exemple avec plusieurs situations

Cet exemple illustre différentes techniques d'utilisation des promesses et différentes situations qui peuvent se produire. Pour comprendre cela, commencez par faire défiler jusqu'en bas du bloc de code et examinez la chaîne de promesses. Lorsqu'une promesse initiale est fournie, une chaîne de promesses peut suivre. La chaîne est composée d'appels `.then()`, et comporte généralement (mais pas nécessairement) un seul `.catch()` à la fin, éventuellement suivi d'un `.finally()`. Dans cet exemple, la chaîne de promesses est initiée par une construction `new Promise()` écrite sur mesure&nbsp;; mais en pratique, les chaînes de promesses commencent plus typiquement par une fonction d'API (écrite par quelqu'un d'autre) qui retourne une promesse.

L'exemple de fonction `tetheredGetNumber()` montre qu'un générateur de promesses utilise `reject()` lors de la configuration d'un appel asynchrone, ou dans le rappel, ou les deux. La fonction `promiseGetWord()` illustre comment une fonction d'API peut générer et retourner une promesse de manière autonome.

Notez que la fonction `problemePourObtenirNombre()` se termine par un `throw`. Cela est nécessaire, car une chaîne de promesses passe par toutes les promesses `.then()`, même après une erreur, et sans le `throw`, l'erreur semble «&nbsp;corrigée&nbsp;». C'est gênant, et pour cette raison, il est courant d'omettre `onRejected` tout au long de la chaîne de promesses `.then()`, et d'avoir simplement un seul `onRejected` dans le `catch()` final.

Ce code peut être exécuté sous Node.js. La compréhension est améliorée en voyant les erreurs se produire réellement. Pour forcer davantage d'erreurs, modifiez les valeurs de `SEUIL_A`.

```js
// Pour expérimenter la gestion des erreurs, les valeurs de « seuil » provoquent des erreurs de manière aléatoire
const SEUIL_A = 8; // Abaissez ce seuil à 0 pour forcer les erreurs

function tetheredGetNumber(resolve, reject) {
  setTimeout(() => {
    const entierAleatoire = Date.now();
    const valeur = entierAleatoire % 10;
    if (valeur < SEUIL_A) {
      resolve(valeur);
    } else {
      reject(new RangeError(`Trop grand : ${valeur}`));
    }
  }, 500);
}

function determinerParite(valeur) {
  const estImpair = valeur % 2 === 1;
  return { valeur, estImpair };
}

function problemePourObtenirNombre(raison) {
  const err = new Error("Problème pour obtenir le nombre", { cause: raison });
  console.error(err);
  throw err;
}

function promesseObtenirMot(infoParite) {
  return new Promise((resolve, reject) => {
    const { valeur, estImpair } = infoParite;
    if (valeur >= SEUIL_A - 1) {
      reject(new RangeError(`Toujours trop grand : ${valeur}`));
    } else {
      infoParite.motPairImpair = estImpair ? "impair" : "pair";
      resolve(infoParite);
    }
  });
}

new Promise(tetheredGetNumber)
  .then(determinerParite, problemePourObtenirNombre)
  .then(promesseObtenirMot)
  .then((info) => {
    console.log(`A obtenu : ${info.valeur}, ${info.motPairImpair}`);
    return info;
  })
  .catch((raison) => {
    if (raison.cause) {
      console.error("Erreur précédemment gérée");
    } else {
      console.error(`Problème avec promiseGetWord(): ${raison}`);
    }
  })
  .finally((info) => console.log("Tout est fini"));
```

### Exemple avancé

Ce court exemple illustre le mécanisme d'une promesse (`Promise`). La méthode `testPromesse()` est appelée chaque fois qu'on clique sur l'élément {{HTMLElement("button")}}. Cette méthode crée une promesse qui est complétée grâce à la fonction {{DOMxRef("Window.setTimeout", "setTimeout()")}}, et avec la valeur comptePromesse (nombre commençant à 1) après `1s` à `3s` (aléatoire). Le constructeur `Promise()` est utilisé pour créer la promesse.

La complétion de la promesse est enregistrée, par une _fonction de rappel_ de réussite définie avec {{JSxRef("Promise/then", "p1.then()")}}. Quelques indicateurs montrent comment la partie synchrone de la méthode est découplée de l'achèvement asynchrone de la promesse.

En cliquant sur le bouton plusieurs fois en peu de temps, vous voyez même les différentes promesses être complétées les unes après les autres.

#### HTML

```html
<button id="faire-promesse">Créer un objet Promise !</button>
<div id="journal"></div>
```

#### JavaScript

```js
"use strict";

let comptePromesse = 0;

function testPromesse() {
  const ceComptePromesse = ++comptePromesse;
  const journal = document.getElementById("journal");
  // début
  journal.insertAdjacentHTML("beforeend", `${ceComptePromesse}) Démarrage<br>`);
  // Nous créons une nouvelle promesse : nous promettons un compte numérique de cette promesse,
  // en commençant à 1 (après avoir attendu 3s)
  const p1 = new Promise((resolve, reject) => {
    // La fonction de résolution est appelée avec la capacité de
    // tenir ou de rompre la promesse
    journal.insertAdjacentHTML(
      "beforeend",
      `${ceComptePromesse}) Construction de la promesse<br>`,
    );
    // Ceci n'est qu'un exemple pour créer de l'asynchronisme
    setTimeout(
      () => {
        // Nous tenons la promesse
        resolve(ceComptePromesse);
      },
      Math.random() * 2000 + 1000,
    );
  });

  // Nous définissons ce qu'il faut faire lorsque la promesse est complétée avec l'appel then(),
  // et ce qu'il faut faire lorsque la promesse est rompue avec l'appel catch()
  p1.then((val) => {
    // Nous affichons la valeur de la promesse complétée
    journal.insertAdjacentHTML("beforeend", `${val}) Promesse complétée<br>`);
  }).catch((reason) => {
    // Journalisation de la raison du rejet
    console.log(`Gérer la promesse rompue (${reason}) ici.`);
  });
  // fin
  journal.insertAdjacentHTML(
    "beforeend",
    `${ceComptePromesse}) Promesse créée<br>`,
  );
}

const btn = document.getElementById("faire-promesse");
btn.addEventListener("click", testPromesse);
```

#### Résultat

{{EmbedLiveSample("Exemple avancé", 500, 200)}}

### Charger une image en XHR

Un autre exemple utilisant `Promise` et {{DOMxRef("XMLHttpRequest")}} pour charger une image est présenté ci-dessous.
Chaque étape est commentée afin de vous permettre de suivre l'état de la promesse et l'architecture utilisée avec XHR.

```html hidden live-sample___promises
<h1>Exemple de promesse</h1>
```

```js live-sample___promises
function chargerImage(url) {
  // Crée une nouvelle promesse avec le constructeur Promise();
  // Cela a pour argument une fonction avec deux paramètres, resolve et reject
  return new Promise((resolve, reject) => {
    // XHR pour charger une image
    const requete = new XMLHttpRequest();
    requete.open("GET", url);
    requete.responseType = "blob";
    // Lorsque la requête se charge, vérifiez si elle a réussi
    requete.onload = () => {
      if (requete.status === 200) {
        // Si elle réussit, résolvez la promesse en renvoyant la réponse de la requête
        resolve(requete.response);
      } else {
        // Si elle échoue, rompez la promesse avec un message d'erreur
        reject(
          Error(
            `L'image n'a pas été chargée avec succès ; code d'erreur : + ${requete.statusText}`,
          ),
        );
      }
    };
    // Gère les erreurs réseau
    requete.onerror = () => reject(new Error("Il y a eu une erreur réseau."));
    // Envoie la requête
    requete.send();
  });
}

// Obtient une référence à l'élément body et crée un nouvel objet image
const body = document.querySelector("body");
const monImage = new Image();
const imgUrl =
  "https://mdn.github.io/shared-assets/images/examples/round-balloon.png";

// Appelle la fonction avec l'URL que nous voulons charger, puis enchaîne
// la méthode then() de la promesse avec deux fonctions de rappel
chargerImage(imgUrl).then(
  (reponse) => {
    // La première s'exécute lorsque la promesse est résolue, avec la
    // response de la requête définie dans la méthode resolve().
    const imageURL = URL.createObjectURL(reponse);
    monImage.src = imageURL;
    body.appendChild(monImage);
  },
  (erreur) => {
    // La seconde s'exécute lorsque la promesse est rompue,
    // et affiche l'erreur définie avec la méthode reject().
    console.log(erreur);
  },
);
```

{{EmbedLiveSample("promises", "", 240)}}

### Suivre l'objet de paramètres actuel

Un objet de paramètres est un [environnement <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/webappapis.html#environment-settings-object) qui fournit des informations supplémentaires lors de l'exécution du code JavaScript. Cela inclut la carte des domaines et des modules, ainsi que des informations spécifiques au HTML telles que l'origine. L'objet de paramètres actuel est suivi afin de garantir que le navigateur sache lequel utiliser pour un morceau de code utilisateur·ice donné.

Pour mieux comprendre cela, nous pouvons examiner de plus près comment le domaine peut poser problème. Un **domaine** peut être grossièrement considéré comme l'objet global. Ce qui est unique avec les domaines, c'est qu'ils contiennent toutes les informations nécessaires pour exécuter du code JavaScript. Cela inclut des objets comme [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) et [`Error`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error). Chaque objet de paramètres a sa propre «&nbsp;copie&nbsp;» de ces objets et ils ne sont pas partagés. Cela peut provoquer un comportement inattendu en relation avec les promesses. Pour contourner ce problème, nous suivons quelque chose appelé **objet de paramètres actuel**. Cela représente des informations spécifiques au contexte du code utilisateur·ice responsable d'un certain appel de fonction.

Pour illustrer cela un peu plus en détail, nous pouvons examiner comment un [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe) intégré dans un document communique avec son hôte. Comme toutes les API web sont conscientes de l'objet de paramètres actuel, ce qui suit fonctionne dans tous les navigateurs&nbsp;:

```html
<!doctype html>
<iframe></iframe>
<!-- nous avons un domaine ici -->
<script>
  // nous avons un domaine ici aussi
  const liaison = frames[0].postMessage.bind(frames[0], "des données", "*");
  // liaison est une fonction native — il n'y a pas de code
  // utilisateur·ice sur la pile, alors quel domaine utilisons-nous ?
  setTimeout(liaison);
  // cela fonctionne toujours, car nous utilisons le plus jeune
  // domaine (l'objet de paramètres actuel) sur la pile
</script>
```

Le même concept s'applique aux promesses. Si nous modifions un peu l'exemple ci-dessus, nous obtenons ceci&nbsp;:

```html
<!doctype html>
<iframe></iframe>
<!-- nous avons un domaine ici -->
<script>
  // nous avons un domaine ici aussi
  const liaison = frames[0].postMessage.bind(frames[0], "des données", "*");
  // liaison est une fonction native — il n'y a pas de code
  // utilisateur·ice sur la pile — alors quel domaine utilisons-nous ?
  Promise.resolve(undefined).then(liaison);
  // cela fonctionne toujours, car nous utilisons le plus jeune
  // domaine (l'objet de paramètres actuel) sur la pile
</script>
```

Si nous modifions cela de sorte qu'un `<iframe>` dans le document écoute les messages postés, nous pouvons observer l'effet de l'objet de paramètres actuel&nbsp;:

```html
<!-- y.html -->
<!doctype html>
<iframe src="x.html"></iframe>
<script>
  const liaison = frames[0].postMessage.bind(frames[0], "des données", "*");
  Promise.resolve(undefined).then(liaison);
</script>
```

```html
<!-- x.html -->
<!doctype html>
<script>
  window.addEventListener("message", (event) => {
    document.querySelector("#text").textContent = "hello";
    // ce code ne s'exécute que dans les navigateurs qui suivent l'objet de paramètres actuel
    console.log(event);
  });
</script>
```

Dans l'exemple ci-dessus, le texte interne d'un `<iframe>` n'est mis à jour que si l'objet de paramètres actuel est suivi. En effet, sans suivi de l'objet de paramètres actuel, nous pourrions finir par utiliser le mauvais environnement pour envoyer le message.

> [!NOTE]
> Actuellement, le suivi de l'objet de paramètres actuel est entièrement implémenté dans Firefox, et partiellement dans Chrome et Safari.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Promise` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-promise)
- Le guide [Utiliser les promesses](/fr/docs/Web/JavaScript/Guide/Using_promises)
- [Promesses/Spécification A+ <sup>(angl.)</sup>](https://promisesaplus.com/)
- [Promesses JavaScript&nbsp;: une introduction <sup>(angl.)</sup>](https://web.dev/articles/promises) sur web.dev (2013)
- [Fonctions de rappel, Promesses et Coroutines&nbsp;: Modèles de programmation asynchrone en JavaScript <sup>(angl.)</sup>](https://www.slideshare.net/slideshow/callbacks-promises-and-coroutines-oh-my-the-evolution-of-asynchronicity-in-javascript/9953720) un diaporama par Domenic Denicola (2011)
