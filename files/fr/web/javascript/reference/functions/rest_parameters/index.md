---
title: Paramètres du reste (Rest parameters)
slug: Web/JavaScript/Reference/Functions/rest_parameters
tags:
  - ECMAScript 2015
  - Functions
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/rest_parameters
original_slug: Web/JavaScript/Reference/Fonctions/paramètres_du_reste
---
{{jsSidebar("Functions")}}

Cette syntaxe permet de représenter un nombre indéfini d'arguments sous forme d'un tableau.

{{EmbedInteractiveExample("pages/js/functions-restparameters.html")}}

## Syntaxe

```js
function f(a, b, ...lesArguments) {
  // ...
}
```

## Description

Si le dernier paramètre nommé fourni à la fonction est préfixé de `...` (trois points), il devient un tableau dont les éléments entre `0` (inclus) et `lesArguments.length` (exclus) sont fournis comme autres arguments à la fonction.

```js
function maFonction(a, b, ...plusDArguments) {
  console.log("a", a);
  console.log("b", b);
  console.log("plusDArguments", plusDArguments);
}

maFonction("un", "deux", "trois", "quatre", "cinq");
// affichera ceci dans la console :
// a, "un"
// b, "deux"
// plusDArguments, ["trois", "quatre", "cinq"]
```

### Les différences entre les paramètres du reste et l'objet `arguments`

Il y a trois principales différences entre les paramètres du reste et l'objet {{jsxref("Fonctions/arguments","arguments")}} :

- les paramètres du reste sont uniquement ceux qui ne possèdent pas de noms à part entière (autrement dit ceux qui ne sont pas formellement définis dans l'expression de fonction), l'objet `arguments` contient chaque argument passé à la fonction
- l'objet `arguments` n'est pas, à strictement parler, un tableau. Le paramètre représentant les arguments restant est une instance d'{{jsxref("Array","Array")}} à laquelle on peut appliquer directement des méthodes comme {{jsxref("Array/sort","sort")}}, {{jsxref("Array/map","map")}}, {{jsxref("Array/forEach","forEach")}} ou {{jsxref("Array/pop","pop")}}
- l'objet `arguments` possède des fonctionnalités spécifiques (comme, par exemple, la propriété `callee`)

### Convertir `arguments` en un tableau

Ces paramètres ont été introduits afin de réduire le code passe-partout souvent induit par les arguments.

```js
// Avant les paramètres du reste, on observait souvent ce style de code :
function f(a, b){
  var args = Array.prototype.slice.call(arguments, f.length);
  // ou encore
  var args = [].slice.call(arguments);
  // ou encore
  var args = Array.from(arguments);

  // et on pouvait alors écrire
  var premier = args.shift(); // OK
  // mais pas
  var premier = arguments.shift(); // erreur car arguments n'est pas un tableau
}

// ce qui est l'équivalent de
function f(...args) {
  var tabNormal = args;
  var premier = tabNormal.shift();
}
```

### La décomposition sur les paramètres du reste

On peut également décomposer les paramètres du reste en variables distinctes :

```js
function f(...[a, b, c]) {
  return a + b + c;
}

f(1);          // NaN (b et c valent undefined)
f(1, 2, 3);    // 6
f(1, 2, 3, 4); // 6, le dernier paramètre n'est pas décomposé
```

Vous pouvez également accéder aux éléments des paramètres du reste :

```js
function fun1(...lesArguments) {
    console.log("valeur", lesArguments[0][0]);
}

fun1([5, 2], [5, 4]); // 5
fun1([8, 2]); // 8
fun1([9, 6, 7]); // 9
```

## Exemples

S'il n'y a qu'un seul argument qui est décomposé par la syntaxe, la valeur sera toujours un tableau :

```js
function maFonction(a, b, ...autres);
  console.log(a);
  console.log(b);
  console.log(autres);
}

maFonction("un", "deux", "trois");
// affichera ceci dans la console
// "un"
// "deux"
// ["trois"]
```

De même, s'il n'y a pas suffisamment d'arguments, ce sera un tableau vide :

```js
function maFonction(a, b, ...autres);
  console.log(a);
  console.log(b);
  console.log(autres);
}

maFonction("un", "deux");
// affichera ceci dans la console
// "un"
// "deux"
// []
```

`lesArguments` est un tableau et dispose donc d'une propriété `length` permettant de compter ses éléments :

```js
function fun1(...lesArguments) {
  console.log(lesArguments.length);
}

fun1();  // 0
fun1(5); // 1
fun1(5, 6, 7); // 3
```

Dans l'exemple qui suit, on utilise le paramètre Rest pour collecter les arguments après le premier pour les multiplier par le premier :

```js
function multiplier(facteur, ...lesArguments) {
  return lesArguments.map(function (element) {
    return facteur * element;
  });
}

var arr = multiplier(2, 1, 2, 3);
console.log(arr); // [2, 4, 6]
```

L'exemple qui suit illustre comment on peut utiliser des méthodes de `Array` sur le paramètre Rest mais pas sur l'objet `arguments` :

```js
function trierParamRest(...lesArguments) {
  var argumentsTriés = lesArguments.sort();
  return argumentsTriés;
}

console.log(trierParamRest(5,3,7,1)); // shows 1,3,5,7

function trierArguments() {
  var argumentsTriés = arguments.sort();
  return argumentsTriés; // cela ne sera jamais appelé
}

// renvoie une exception TypeError: arguments.sort n'est pas une function
console.log(trierArguments(5,3,7,1));
```

Pour utiliser les méthodes propres aux instances d'`Array` sur l'objet `arguments`, il est nécessaire de le convertir.

```js
function trierAguments() {
  var args = Array.from(arguments);
  var argumentsTriés = args.sort();
  return argumentsTriés;
}
console.log(trierArguments(5, 3, 7, 1)); // [1, 3, 5, 7]
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-function-definitions', 'Function Definitions')}}     | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-function-definitions', 'Function Definitions')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.functions.rest_parameters")}}

## Voir aussi

- L'objet {{jsxref("Fonctions/arguments","arguments")}}
- {{jsxref("Array","Array")}}
- {{jsxref("Fonctions","Les fonctions et leurs portées","",1)}}
- {{jsxref("Opérateurs/Syntaxe_décomposition","L'opérateur de décomposition","",1)}}
- [Proposition originale sur ecmascript.org](https://wiki.ecmascript.org/doku.php?id=harmony:rest_parameters) (en anglais)
- [JavaScript arguments object and beyond](https://javascriptweblog.wordpress.com/2011/01/18/javascripts-arguments-object-and-beyond/) (article en anglais)
