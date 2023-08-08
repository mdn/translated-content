---
title: Valeurs par défaut des arguments
slug: Web/JavaScript/Reference/Functions/Default_parameters
---

{{jsSidebar("Functions")}}

Cette syntaxe permet d'initialiser des paramètres lors de l'appel de la fonction si aucune valeur n'est passée ou si c'est la valeur {{jsxref("undefined")}} qui est passée.

{{EmbedInteractiveExample("pages/js/functions-default.html")}}

## Syntaxe

```js
function [nom]([param1[ = valeurParDéfaut1 ][, ..., paramN[ = valeurParDéfautN ]]]) {
   instructions
}
```

## Description

En JavaScript, par défaut, la valeur des paramètres d'une fonction sera `undefined`. Malgré tout, il peut être assez utile de pouvoir définir d'autres valeurs par défaut.

Auparavant, pour définir une valeur par défaut pour un paramètre, il fallait tester s'il valait `undefined` et lui affecter une valeur choisie le cas échéant. Dans l'exemple qui suit, le paramètre `b` n'a pas de valeur fournie lors de l'appel, aussi si on avait utilisé `undefined` dans la multiplication, la valeur retournée aurait été `NaN`. Aussi, dans la deuxième ligne du code, on prévoit ce cas :

```js
function multiplier(a, b) {
  var b = typeof b !== "undefined" ? b : 1;

  return a * b;
}

multiplier(5, 2); // 10
multiplier(5, 1); // 5
multiplier(5); // 5
```

Grâce aux paramètres par défaut qui existent depuis ECMAScript 2015 (ES6), on peut se passer de cette vérification et alléger le code de la fonction :

```js
function multiplier(a, b = 1) {
  return a * b;
}

multiplier(5, 2); // 10
multiplier(5, 1); // 5
multiplier(5, undefined); // 5
multiplier(5); // 5
```

## Exemples

### Passer `undefined` en paramètre

Dans l'exemple qui suit, le deuxième appel à la fonction fait explicitement appel à `undefined`. La valeur par défaut sera utilisée, y compris dans ce cas (en revanche, ce ne serait pas vrai pour `null` ou les autres valeurs équivalentes à `false` dans un contexte booléen).

```js
function test(num = 1) {
  console.log(typeof num);
}

test(); // number (num vaut 1)
test(undefined); // number (num vaut 1 également)
test(""); // string (num vaut "")
test(null); // object (num vaut null)
```

### Évaluation à l'appel

L'argument par défaut est évalué à l'instant de l'appel. Ainsi, à la différence d'autres langages comme Python, un nouvel objet est créé à chaque appel de la fonction.

```js
function append(valeur, tableau = []) {
  tableau.push(valeur);
  return tableau;
}

append(1); //[1]
append(2); //[2], et non [1, 2]
```

Cela est également valable pour les fonctions et les variables

```js
function appelQqc(truc = qqc()) {
  return truc;
}

appelQqc(); //lève une ReferenceError

let qqc = () => "machin";

appelQqc(); // "machin"
```

### Les paramètres par défaut sont disponibles à la suite

Les paramètres déjà rencontrés dans la définition peuvent être utilisés comme paramètres par défaut dans la suite de la définition :

```js
function salutation(nom, salut, message = salut + " " + nom) {
  return [nom, salut, message];
}

salutation("David", "Coucou");
// ["David", "Coucou", "Coucou David"]

salutation("David", "Coucou", "Bon anniversaire !");
// ["David", "Coucou", "Bon anniversaire !"]
```

On peut utiliser cette fonctionnalité afin de gérer beaucoup de cas aux limites :

```js
function go() {
  return ":P";
}

function avecDéfaut(
  a,
  b = 5,
  c = b,
  d = go(),
  e = this,
  f = arguments,
  g = this.value,
) {
  return [a, b, c, d, e, f, g];
}
function sansDéfaut(a, b, c, d, e, f, g) {
  switch (arguments.length) {
    case 0:
      a;
    case 1:
      b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    case 4:
      e = this;
    case 5:
      f = arguments;
    case 6:
      g = this.value;
    default:
  }
  return [a, b, c, d, e, f, g];
}

avecDéfaut.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]

sansDéfaut.call({ value: "=^_^=" });
// [undefined, 5, 5, ":P", {value:"=^_^="}, arguments, "=^_^="]
```

### Les fonctions définies dans le corps d'une fonction

À partir de Gecko 33, les fonctions déclarées dans le corps de la fonction ne peuvent pas servir comme valeurs par défaut, cela lèvera une exception {{jsxref("ReferenceError")}} (plus précisément une {{jsxref("TypeError")}} avec SpiderMonkey, voir le [bug Firefox 1022967](https://bugzil.la/1022967)). Les paramètres par défaut sont exécutés en premier, les déclarations de fonctions présentes dans le corps de la fonction sont évaluées ensuite.

```js
// Ne fonctionnera pas, entraîne une ReferenceError.
function f(a = go()) {
  function go() {
    return ":P";
  }
}
```

### Utilisation de paramètres sans valeur par défaut après les paramètres par défaut

Avant Gecko 26, le code suivant aurait entraîné une exception {{jsxref("SyntaxError")}}. Cela a été corrigé avec le [bug Firefox 777060](https://bugzil.la/777060). Les paramètres sont toujours ordonnés de gauche à droite et les valeurs par défaut sont surchargées s'ils viennent avant les autres paramètres :

```js
function f(x = 1, y) {
  return [x, y];
}

f(); // [1, undefined]
f(2); // [2, undefined]
```

### Paramètre par défaut et décomposition des paramètres

Il est possible d'utiliser les valeurs par défaut avec [la syntaxe de décomposition](/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition) :

```js
function f([x, y] = [1, 2], { z: z } = { z: 3 }) {
  return x + y + z;
}

f(); // 6
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La proposition originale sur ecmascript.org](https://wiki.ecmascript.org/doku.php?id=harmony:parameter_default_values)
