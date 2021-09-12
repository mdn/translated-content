---
title: Promise.resolve()
slug: Web/JavaScript/Reference/Global_Objects/Promise/resolve
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Promise
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Promise/resolve
original_slug: Web/JavaScript/Reference/Objets_globaux/Promise/resolve
---
{{JSRef}}

La méthode **`Promise.resolve(valeur)`** renvoie un objet {{jsxref("Promise")}} qui est résolu avec la valeur donnée. Si cette valeur est une promesse, la promesse est renvoyée, si la valeur possède une méthode {{jsxref("Promise.then","then")}}, la promesse renvoyée « suivra » cette méthode et prendra son état ; sinon, la promesse renvoyée sera tenue avec la valeur.

{{EmbedInteractiveExample("pages/js/promise-resolve.html")}}

> **Attention :** `Promise.resolve()` ne doit pas être appelée sur un objet _thenable_ qui se résout en lui-même. Cela provoquera une récursion infinie et `resolve()` tentera d'aplatir ce qui ressemble à une promesse imbriquée à l'infini.

## Syntaxe

    Promise.resolve(valeur);
    Promise.resolve(promesse);
    Promise.resolve(suivant);

### Paramètres

- `valeur`
  - : L'argument qu'on souhaite résoudre avec cette promesse (`Promise`). Cet argument peut être un objet `Promise` ou un objet avec une méthode `then` à résoudre à la suite.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}) qui est résolue avec la valeur indiquée en argument ou la promesse passée en argument si celui-ci est une promesse.

## Description

La fonction statique `Promise.resolve` renvoie un objet `Promise` qui est résolu.

## Exemples

### Utilisation de la méthode statique `Promise.resolve`

```js
Promise.resolve("Succès").then(function(valeur) {
  console.log(valeur); // "Succès"
}, function(valeur) {
  // n'est pas appelée
});
```

### Résoudre un tableau

```js
var p = Promise.resolve([1,2,3]);
p.then(function(v) {
  console.log(v[0]); // 1
});
```

### Résoudre une autre `Promise`

```js
var original = Promise.resolve(33);
var cast = Promise.resolve(original);
cast.then(function(value) {
  console.log("value: " + value);
});
console.log("original === cast ? " + (original === cast));

// affiche ceci dans la console (dans cet ordre) :
// original === cast ? true
// value: 33
```

L'ordre des traces dans la console est dû au fait que les gestionnaires `then()` sont appelés de façon asynchrone (plus de détails sur `then` [dans cet article](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Promise/then#Valeur_de_retour)).

### Résoudre des objets avec `then` et renvoyer des erreurs

```js
// Résoudre un objet avec then
var p1 = Promise.resolve({
  then: function(onFulfill, onReject) { onFulfill("tenue !"); }
});
console.log(p1 instanceof Promise) // true, l'objet est transformée en une Promise

p1.then(function(v) {
    console.log(v); // "tenue !"
  }, function(e) {
    // n'est pas appelée
});

// L'objet avec then renvoie une erreur avant le callback
// La promesse n'est pas tenue
var thenable = { then: function(resolve) {
  throw new TypeError("Renvoi d'erreur");
  resolve("Résolution ");
}};

var p2 = Promise.resolve(thenable);
p2.then(function(v) {
  // n'est pas appelée
}, function(e) {
  console.log(e); // TypeError : Renvoi d'erreur
});

// L'objet avec then renvoie une erreur après le callback
// La promesse est tenue
var thenable = { then: function(resolve) {
  resolve("Résolue");
  throw new TypeError("Erreur");
}};

var p3 = Promise.resolve(thenable);
p3.then(function(v) {
  console.log(v); // "Résolue"
}, function(e) {
  // n'est pas appelée
});
```

## Spécifications

| Spécification                                                                            | État                         | Commentaires                                    |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------- |
| {{SpecName('ES2015', '#sec-promise.reject', 'Promise.reject')}}     | {{Spec2('ES2015')}}     | Définition initiale au sein d'un standard ECMA. |
| {{SpecName('ESDraft', '#sec-promise.resolve', 'Promise.resolve')}} | {{Spec2('ESDraft')}} |                                                 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Promise.resolve")}}

## Voir aussi

- {{jsxref("Promise")}}
