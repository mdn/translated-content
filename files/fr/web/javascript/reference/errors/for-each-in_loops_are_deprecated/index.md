---
title: 'Warning: JavaScript 1.6''s for-each-in loops are deprecated'
slug: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
tags:
  - Avertissement
  - JavaScript
translation_of: Web/JavaScript/Reference/Errors/For-each-in_loops_are_deprecated
original_slug: Web/JavaScript/Reference/Erreurs/For-each-in_loops_are_deprecated
---
{{jsSidebar("Errors")}}

## Message

    Warning: JavaScript 1.6's for-each-in loops are deprecated; consider using ES6 for-of instead

## Type d'erreur

Avertissement.

## Quel est le problème ?

L'instruction {{jsxref("Instructions/for_each...in", "for each (variable in obj)")}} présente à partir de JavaScript 1.6 est une instruction dépréciée et est amenée à disparaître dans un avenir proche.

## Exemples

### Itérer sur un objet

{{jsxref("Instructions/for_each...in", "for each...in")}} pouvait être utilisé pour parcourir les valeurs contenues dans un objet.

#### Syntaxe dépréciée

```js example-bad
var objet = { a: 10, b: 20 };

for each (var x in objet) {
  console.log(x);        // 10
                         // 20
}
```

#### Syntaxe alternative, standard

On peut désormais utilisé l'instruction de boucle standard {{jsxref("Instructions/for...in", "for...in")}} afin d'itérer sur les clés d'un objet et de récupérer les valeurs des propriétés :

```js example-good
var objet = { a: 10, b: 20 };

for (var key in objet) {
  var x = objet[key];
  console.log(x);        // 10
                         // 20
}
```

Ou alors, on peut utiliser {{jsxref("Instructions/for...of", "for...of")}} (ES2015) et {{jsxref("Object.values")}} (ES2017) afin d'obtenir un tableau des valeurs associées à un objet pour ensuite le parcourir :

```js example-good
var objet = { a: 10, b: 20 };

for (var x of Object.values(objet)) {
  console.log(x);        // 10
                         // 20
}
```

### Itérer sur un tableau

{{jsxref("Instructions/for_each...in", "for each...in")}} pouvait être utilisée afin de parcourir les éléments d'un tableau.

#### Syntaxe dépréciée

```js example-bad
var array = [10, 20, 30];

for each (var x in array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

#### Syntaxe alternative, standard

On peut obtenir le même effet avec les boucles {{jsxref("Instructions/for...of", "for...of")}} (ES2015).

```js example-good
var array = [10, 20, 30];

for (var x of array) {
  console.log(x);        // 10
                         // 20
                         // 30
}
```

### Parcourir un tableau qui vaille `null` ou `undefined`

{{jsxref("Instructions/for_each...in", "for each...in")}} ne fera rien si la valeur fournie est `null` ou `undefined`. En revanche, {{jsxref("Instructions/for...of", "for...of")}} lèvera une exception dans ces cas.

#### Syntaxe dépréciée

```js example-bad
function func(array) {
  for each (var x in array) {
    console.log(x);
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // rien ne s'affiche
func(undefined);       // rien ne s'affiche
```

#### Syntaxe alternative, standard

Pour réécrire les instructions {{jsxref("Instructions/for_each...in", "for each...in")}} afin que les valeurs `null` ou `undefined` puissent être gérées avec {{jsxref("Instructions/for...of", "for...of")}}, il faudra rajouter une protection :

```js example-good
function func(array) {
  if (array) {
    for (var x of array) {
      console.log(x);
    }
  }
}
func([10, 20]);        // 10
                       // 20
func(null);            // rien ne s'affiche
func(undefined);       // rien ne s'affiche
```

### Itérer sur les tuples clé-valeur d'un objet

#### Syntaxe dépréciée

On pouvait utiliser une forme syntaxique particulière, désormais dépréciée, qui combine {{jsxref("Instructions/for_each...in", "for each...in")}} et l'objet déprécié {{jsxref("Iterator")}}.

```js example-bad
var object = { a: 10, b: 20 };

for each (var [key, value] in Iterator(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

#### Syntaxe alternative, standard

On peut désormais utiliser la boucle {{jsxref("Instructions/for...in", "for...in")}} afin de parcourir les différentes clés d'un objet pour ensuite récupérer les valeurs associées :

```js example-good
var object = { a: 10, b: 20 };

for (var key in object) {
  var value = object[key];
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

Ou encore, on peut utiliser {{jsxref("Instructions/for...of", "for...of")}} (ES2015) et {{jsxref("Object.entries")}} (ES2017) pour récupérer un tableau contenant les clés et les valeurs d'un objet qu'on pourra ensuite parcourir :

```js example-good
var object = { a: 10, b: 20 };

for (var [key, value] of Object.entries(object)) {
  console.log(key, value);  // "a", 10
                            // "b", 20
}
```

## Voir aussi

- {{jsxref("Instructions/for...of", "for...of")}}
- {{jsxref("Object.values")}}
- {{jsxref("Object.entries")}}
