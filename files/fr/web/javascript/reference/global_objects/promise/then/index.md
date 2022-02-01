---
title: Promise.prototype.then()
slug: Web/JavaScript/Reference/Global_Objects/Promise/then
tags:
  - ECMAScript6
  - JavaScript
  - Méthode
  - Promise
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/then
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/then
---
{{JSRef}}

La méthode **`then()`** renvoie un objet {{jsxref("Promise")}}. Elle peut prendre jusqu'à deux arguments qui sont deux fonctions _callback_ à utiliser en cas de complétion ou d'échec de la `Promise`.

{{EmbedInteractiveExample("pages/js/promise-then.html")}}

> **Note :** Si aucun des deux arguments n'est utilisé ou que les objets fournis ne sont pas des fonctions, une nouvelle promesse est créée sans autre gestionnaire supplémentaire. Si le premier argument est absent ou qu'un objet qui n'est pas une fonction est passé, la nouvelle promesse utilisera la fonction de réussite de la promesse originelle. De même, si le deuxième argument n'est pas passé ou que ce n'est pas une fonction, la nouvelle promesse créée utilisera la fonction de rejet de la promesse appelante.

## Syntaxe

    p.then(siTenue);
    p.then(siTenue, siRejetée);

    p.then((valeur) => {
        // Promesse tenue
      }, (raison) => {
        // Rejet de la promesse
    });

### Paramètres

<!---->

- `siTenue`
  - : Une {{jsxref("Function","fonction","",1)}} appelée lorsque la `Promise` est tenue. Cette fonction a un seul argument, la `valeur` qui a permis de résoudre la promesse. Si `siTenue` n'est pas une fonction, elle est implicitement remplacée par une fonction « identité » qui renvoie l'argument tel quel.
- `siRejetée` {{optional_inline}}
  - : Une {{jsxref("Function","fonction","",1)}} appelée lorsque la `Promise` est rejetée. Cette fonction a un seul argument, la `raison` pour laquelle la promesse a été rejetée. Si `siRejetée` n'est pas une fonction, elle est implicitement remplacée par une fonction qui lève une erreur avec la `raison` passée en argument.

### Valeur de retour

La méthode `then()` renvoie une promesse ({{jsxref("Promise")}}) en attente de résolution et dont la valeur est déterminée selon les deux fonctions passées en arguments et qui seront appelées de façon asynchrone :

- Si `siRejetée` ou `siTenue` lève une exception ou renvoie une promesse rompue, la promesse renvoyée par `then()` est rompue et la valeur fournie est l'exception ou l'explication de la promesse rompue.
- Si `siRejetée` ou `siTenue` renvoie une promesse tenue ou n'importe quelle autre valeur, la promesse renvoyée est tenue et la valeur de résolution est la même que celle de la promesse tenue.
- Si `siRejetée` ou `siTenue` renvoie une promesse en attente de résolution, la promesse renvoyée par `then()` sera résolue de la même façon que la promesse renvoyée par le gestionnaire. En fait, dans ce cas, la promesse renvoyée par `then()` est la même que la promesse renvoyée par le gestionnaire (`siTenue` ou `siRejetée`).

## Description

Comme les méthodes `then()` et {{jsxref("Promise.prototype.catch()")}} renvoient des promesses, on peut enchaîner ces opérations (c'est ce qu'on appelle la _composition_ de promesses, voir l'exemple ci-après).

## Exemples

### Utilisation de la méthode `then()`

```js
var p1 = new Promise(function(resolve, reject) {
  resolve("Succès !");
  // ou
  // reject("Erreur !");
});

p1.then((valeur) => {
  console.log(valeur); // Succès !
  }, (raison) => {
  console.log(raison); // Erreur !
});
```

### Composition - Chaînage

La méthode `then()` renvoie un objet `Promise`, ce qui permet d'enchaîner les opération. On peut passer une fonction lambda à then puis utiliser la promesse obtenue pour la passer à la méthode suivante. Dans l'exemple ci-après, on simule un code asynchrone avec la fonction `setTimeout`.

```js
Promise.resolve("toto")
  // 1. Première étape, on reçoit "toto" et on le concatène avec
  //    "truc", ce qui résoud la première étape puis on passe au
  //    deuxième then
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += 'truc';
        resolve(string);
      }, 1);
    });
  })
  // 2. Deuxième étape, on reçoit "tototruc" et on enregistre une
  //    fonction de rappel pour manipuler cette chaîne puis l'imprimer
  //    dans la console. Avant cela, on passe la chaîne intacte au
  //    prochain then
  .then(function(string) {
    setTimeout(function() {
      string += 'baz';
      console.log(string);
    }, 1)
    return string;
  })
  // 3. On affiche un message sur le code, celui-ci sera affiché
  //    avant que la chaîne soit traitée dans le bloc précédent
  //    qui agit comme un bloc asynchrone.
  .then(function(string) {
    console.log("Et voilà la dernière, qui risque d'arriver avant la 2e");

    // Ici, la chaîne n'aura pas le morceau 'baz' car la fonction
    // setTimeout retarde l'exécution du code.
    console.log(string);
});
```

Lorsqu'une valeur est simplement renvoyée depuis une fonction lambda `then`, celle-ci renverra `Promise.resolve(<la valeur renvoyée par le gestionnaire appelé>)`.

```js
var p2 = new Promise(function(resolve, reject) {
  resolve(1);
});

p2.then(function(valeur) {
  console.log(valeur); // 1
  return valeur + 1;
  }).then(function(valeur) {
  console.log(valeur + "- cette utilisation synchrone est un peu inutile");
  // 2- cette utilisation synchrone est un peu inutile
});

p2.then(function(valeur) {
  console.log(valeur); // 1
});
```

Appeler `then()` renverra une promesse rompue si la fonction lève une exception ou si elle renvoie une promesse rompue.

```js
Promise.resolve()
  .then( () => {
    // Ici .then() lève une exception
    throw 'Oh zut :( !';
  })
  .then( () => {
    console.log( "Ceci n'est pas appelé." );
  }, raison => {
    console.error( 'la fonction siRompue est appelée : ' + raison );
});
```

Dans tous les autres cas, un promesse de résolution est renvoyée. Dans l'exemple qui suit, le premier `then()` renvoie `42` même si la promesse précédente a été rompue :

```js
Promise.reject()
  .then( () => 99, () => 42 ) // la valeur 42 est renvoyée dans une promesse
  .then( solution => console.log( 'Résolue avec ' + solution ) ); // Résolue avec 42
```

En pratique, il est souvent préférable d'attraper les promesses rompues plutôt que d'utiliser la syntaxe de `then()` avec deux fonctions :

```js
Promise.resolve()
  .then( () => {
    // .then() renvoie une promesse rompue
    throw 'Oh zut !';
  })
  .catch( raison => {
    console.error( 'fonction siRompue appelée : ' + raison );
  })
  .then( () => {
    console.log("Je suis toujours appelée, même si il y a un souci avant");
  });
```

Le chaînage peut également être utilisé pour implémenter une fonction utilisant une API basée sur les promesses et encapsuler une autre fonction :

```js
function fetch_current_data() {
  // L'API fetch renvoie une promesse. Cette fonction
  // expose une API similaire mais lorsque la promesse
  // est tenue, on effectue plus de tâches
  return fetch("current-data.json").then((response) => {
    if (response.headers.get("content-type") != "application/json") {
      throw new TypeError();
    }
    var j = response.json();
    // on peut ici manipuler j si besoin
    return j; // la valeur fournie à l'utilisateur de
              // fetch_current_data().then()
  });
}
```

Si le gestionnaire `siTenue` renvoie une promesse, la valeur de retour de `then()` sera alors résolue/rompue par cette promesse.

```js
function resoudrePlusTard(resolve, reject) {
  setTimeout(function () {
    resolve(10);
  }, 1000);
}
function romprePlusTard(resolve, reject) {
  setTimeout(function () {
    reject(20);
  }, 1000);
}

var p1 = Promise.resolve("toto");
var p2 = p1.then(function() {
  // On renvoie une nouvelle promesse
  // qui sera résolue avec la valeur 10
  // au bout d'une seconde
  return new Promise(resoudrePlusTard);
});
p2.then(function(v) {
  console.log("tenue", v);
  // "tenue", 10
}, function(e) {
  // ceci n'est pas appelé
  console.log("rompue", e);
});

var p3 = p1.then(function() {
  // Ici, on renvoie une promesse
  // qui sera rompue avec la valeur
  // 20 au bout d'une seconde
  return new Promise(romprePlusTard);
});
p3.then(function(v) {
  // ceci n'est pas appelé
  console.log("tenue", v);
}, function(e) {
  console.log("rompue", e);
  // "rompue", 20
});
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                    |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------- |
| {{SpecName('ES2015', '#sec-promise.prototype.then', 'Promise.prototype.then')}}     | {{Spec2('ES2015')}}     | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-promise.prototype.then', 'Promise.prototype.then')}} | {{Spec2('ESDraft')}} |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Promise.then")}}

## Voir aussi

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.catch()")}}
