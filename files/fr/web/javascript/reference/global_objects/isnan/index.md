---
title: isNaN()
slug: Web/JavaScript/Reference/Global_Objects/isNaN
---

{{jsSidebar("Objects")}}

La fonction **`isNaN()`** permet de déterminer si une valeur est {{jsxref("NaN")}}. On notera que cette fonction utilise des règles de conversion différentes de {{jsxref("Number.isNaN()")}}, définie avec ECMAScript 2015 (ES6).

{{EmbedInteractiveExample("pages/js/globalprops-isnan.html")}}

## Syntaxe

```js
isNaN(valeurÀTester);
```

### Paramètres

- `valeurÀTester`
  - : La valeur dont on souhaite déterminer si elle est {{jsxref("NaN")}}.

### Valeur de retour

`true` si la valeur fournie vaut {{jsxref("NaN")}}, sinon, la méthode renverra `false`.

## Description

### La nécessité d'avoir `isNaN()`

À la différence des autres valeurs JavaScript, il est impossible d'utiliser les opérateurs d'égalité faible et stricte ({{jsxref("Opérateurs/Opérateurs_de_comparaison","==","#.C3.89galit.C3.A9_simple_(.3D.3D)")}} et {{jsxref("Opérateurs/Opérateurs_de_comparaison","===","#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)")}}) afin de déterminer si une valeur _est_ ou _n'est pas_ réellement {{jsxref("NaN")}}. En effet `NaN == NaN` et `NaN === NaN` renvoient `false` tous les deux. C'est pour cela qu'il est nécessaire d'avoir la fonction `isNaN()`.

### Les origines de `NaN`

La valeur `NaN` est générée lorsqu'une opération arithmétique résulte en une valeur indéfinie ou non représentable. De telles valeurs ne représentent pas nécessairement des dépassements de condition. `NaN` peut également être le résultat d'une conversion numérique pour les valeurs qui n'ont pas de valeurs numériques correspondantes (par exemple lorsqu'on souhaite convertir la chaîne `"toto"` en un nombre).

Par exemple, lorsqu'on divise zéro par zéro, on obtient `NaN`. En revanche, lorsqu'on divise d'autres nombres par zéro, on n'obtient pas ce résultat.

### Comportement étrange de `isNaN()`

Depuis les premières spécifications pour `isNaN()`, son comportement sur les arguments non-numériques a toujours été source de confusion. Lorsque l'argument passé à la fonction n'est pas du type [Number](https://es5.github.com/#x8.5), la valeur est d'abord convertie en une valeur du type Number. La valeur résultante est ensuite utilisée lors du test afin de déterminer si c'est {{jsxref("NaN")}}. Ainsi pour valeurs non numériques qui sont converties en une valeur non-NaN numérique (notamment la chaîne vide, les valeurs booléennes qui donnent zéro ou un), la fonction renverra `false`, ce qui pourrait être inattendu (en effet, la chaîne vide _n'est pas un nombre_). Ici, la confusion provient du fait que « not a number » a un sens particulier pour les valeurs numériques représentées selon IEEE-754. Cette fonction doit plutôt être vue comme la réponse à la question « est-ce que cette valeur, lorsqu'elle est convertie en une valeur numérique, correspond à la valeur IEEE-754 "Not A Number" ? ».

La version ECMAScript ES2015 ajoute la méthode {{jsxref("Number.isNaN()")}}. `Number.isNaN(x)` permettra de tester de façon plus fiable si `x` vaut `NaN` ou non. Si on ne dispose pas de cette méthode, on peut également utiliser l'expression `(x != x)` afin de tester de façon plus certaine si `x` vaut `NaN` ou non (en effet le résultat de cette expression n'aura pas les faux positifs de `isNaN`). Sous cet angle, `isNaN()` peut être vu comme :

```js
var isNaN = function (valeur) {
  return Number.isNaN(Number(valeur));
};
```

Ou encore, en utilisant le fait que `NaN` est la seule valeur différente d'elle-même :

```js
var isNaN = function (valeur) {
  var n = Number(valeur);
  return n !== n;
};
```

### `NaN` est « empoisonné »

Cette fonction peut être utilisée afin de déterminer si la valeur courante peut faire partie d'une expression arithmétique. En effet, si un des composants d'une expression arithmétique vaut `NaN`, le résultat de l'expression sera `NaN` également (on dit alors que `NaN` « empoisonne » l'expression). La méthode `isNaN()` permet alors de vérifier, avant de construire une expression, que les valeurs utilisées n'empoisonneront pas l'expression.

On peut par exemple construire une fonction dont on souhaite qu'elle incrémente l'argument et que la valeur qu'elle renvoie ne puisse pas être `NaN`. Le code de cette fonction pourrait être :

```js
function incrément(x) {
  if (isNaN(x)) {
    x = 0;
  }
  return x + 1;
}

// En utilisant des notations raccourcies,
// on pourrait écrire une fonction équivalente
function incrémentCourt(x) {
  isNaN(x) ? 1 : x + 1;
}

incrément("blabla"); // 1
incrément(1); // 2
incrément(NaN); // 1
```

## Exemples

```js
isNaN(NaN); // true
isNaN(undefined); // true
isNaN({}); // true

isNaN(true); // false
isNaN(null); // false
isNaN(37); // false

// strings
isNaN("37"); // false : "37" est converti vers le nombre 37 qui n'est pas NaN
isNaN("37.37"); // false : "37.37" est converti vers le nombre 37.37 qui n'est pas NaN
isNaN("37,25"); // true  : la virgule n'est pas considérée comme un séparateur décimal
isNaN("123ABC"); // true  : "123ABC" converti en 123 par parseInt mais en NaN par Number
isNaN(""); // false : la chaîne vide est convertie en 0 qui n'est pas NaN
isNaN(" "); // false : une chaîne de blancs est convertie en 0 qui n'est pas NaN

// dates
isNaN(new Date()); // false
isNaN(new Date().toString()); // true

// Voici le résultat « faux-positif » qui fait que isNaN n'est pas entièrement fiable
isNaN("blabla"); // true : "blabla" est converti en un nombre
// Si on souhaite convertir cette valeur en nombre, cela échoue
// et on obtient NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("NaN")}}
- {{jsxref("Number.isNaN()")}}
