---
title: Promise.any()
slug: Web/JavaScript/Reference/Global_Objects/Promise/any
---

{{JSRef}}

La méthode **`Promise.any()`** prend comme argument un itérable contenant des objets {{JSxRef("Promise")}} et, dès qu'une des promesses de cet itérable est tenue, renvoie une unique promesse résolue avec la valeur de la promesse résolue. Si aucune promesse de l'itérable n'est tenue (c'est-à-dire si toutes les promesses sont rejetées), la promesse renvoyée est rompue avec un objet {{JSxRef("Objets_globaux/AggregateError", "AggregateError")}} (une nouvelle sous-classe de {{JSxRef("Error")}} qui regroupe un ensemble d'erreurs). Cette méthode fait essentiellement le _contraire_ de {{JSxRef("Promise.all()")}} (qui renvoie une promesse tenue uniquement si toutes les promesses de l'itérable passé en argument ont été tenues).

{{EmbedInteractiveExample("pages/js/promise-any.html")}}

## Syntaxe

```js
Promise.any(iterable);
```

### Paramètres

- `iterable`
  - : Un objet [itérable](/fr/docs/Web/JavaScript/Reference/Les_protocoles_iteration) tel qu'un tableau ({{JSxRef("Array")}}) contenant des promesses ({{jsxref("Promise")}}).

### Valeur de retour

- Une promesse ({{jsxref("Promise")}}) **déjà résolue** si l'itérable passé en argument est vide.
- Une promesse ({{jsxref("Promise")}}) **résolue en asynchrone** si l'itérable passé en argument ne contient pas de promesses.
- Une promesse ({{jsxref("Promise")}}) **en attente** dans tous les autres cas. La promesse renvoyée est résolue (qu'elle soit tenue ou rompue) **de façon asynchrone** lorsqu'au moins une des promesses de l'itérable est tenue ou si toutes les promesses ont été rompues.

## Description

Cette méthode est utile afin de renvoyer la première promesse tenue d'un ensemble de promesse. Elle permet de court-circuiter dès qu'une promesse est tenue, sans attendre que les autres promesses soient résolues. Contrairement à {{JSxRef("Promise.all()")}} qui renvoie un tableau avec les valeurs de résolution des promesses, on a ici une seule valeur de résolution (celle de la première promesse tenue). Ce peut être bénéfique lorsqu'on a un ensemble de promesses et qu'on ne souhaite en résoudre qu'une sans se soucier de savoir laquelle des promesses a été tenue en premier.

À la différence de {{JSxRef("Promise.race()")}} qui renvoie la valeur de la première promesse résolue (qu'elle ait été tenue ou rompue), `Promise.any()` renvoie une promesse avec la valeur de la première promesse _tenue_. Cette méthode ignore les promesses qui sont rompues jusqu'à obtenir une promesse tenue.

### Une des promesses est tenue

La promesse renvoyée par `Promise.any()` est résolue avec la première valeur résolue de l'itérable, qu'il s'agisse d'une promesse ou non, et que les autres promesses de l'itérable aient échoué ou non.

- Si une des promesses de l'itérable (non vide) est tenue ou que les valeurs fournies dans l'itérable ne sont pas des promesses, alors la promesse renvoyée par `Promise.any()` est résolue de façon asynchrone.

### Toutes les promesses sont rompues

Si toutes les promesses de l'itérable échouent, `Promise.any()` échoue de asynchrone avec pour valeur d'échec un objet {{JSxRef("Objets_globaux/AggregateError", "AggregateError")}}, qui étend {{JSxRef("Error")}}, et contient une propriété `errors` qui est un tableau contenant l'ensemble des valeurs d'échec des différentes promesses de l'itérable.

- Si l'itérable reçu était vide, alors la promesse retournée par cette méthode est rejetée de manière synchrone et la propriété `errors` de l'objet `AggregateError` est un tableau vide.

## Exemples

### Première résolue

`Promise.any()` prend pour valeur de résolution celle de la première promesse résolue, et ce même si une des promesses de l'itérable a échoué avant. Ce comportement est différent de ce {{JSxRef("Promise.race()")}}, qui s'arrête à la première promesse qui se termine avec sa valeur de résolution ou d'échec.

```js
const pErr = new Promise((resolve, reject) => {
  reject("J'échoue toujours");
});

const pLente = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, "Éventuellement résolue");
});

const pRapide = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Rapidement résolue");
});

Promise.any([pErr, pLente, pRapide]).then((valeur) => {
  console.log(valeur);
  // pRapide s'est résolue en premier
});
// résultat attendu : "Rapidement résolue"
```

### Échec avec AggregateError

`Promise.any()` échoue avec un objet {{JSxRef("AggregateError")}} si aucun des promesses n'est résolue.

```js
const pErr = new Promise((resolve, reject) => {
  reject("J'échoue toujours");
});

Promise.any([pErr]).catch((err) => {
  console.log(err);
});
// résultat attendu : "AggregateError: No Promise in Promise.any was resolved"
```

### Afficher la première image chargée

Dans cet exemple, nous avons une fonction qui requête une image et retourne un Blob. Nous utilisons `Promise.any()` pour requêter plusieurs images et afficher la première qui nous sera disponible (c'est-à-dire dont la promesse sera résolue).

```js
function fetchAndDecode(url) {
  return fetch(url).then((réponse) => {
    if (!réponse.ok) throw new Error(`Erreur HTTP ! état : ${response.status}`);
    else return réponse.blob();
  });
}

let café = fetchAndDecode("coffee.jpg");
let thé = fetchAndDecode("tea.jpg");

Promise.any([café, thé])
  .then((valeur) => {
    let URLobjet = URL.createObjectURL(valeur);
    let image = document.createElement("img");
    image.src = URLobjet;
    document.body.appendChild(image);
  })
  .catch((e) => {
    console.log(e.message);
  });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{JSxRef("Promise")}}
- {{JSxRef("Promise.all()")}}
- {{JSxRef("Promise.race()")}}
