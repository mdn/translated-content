---
title: Égalité stricte (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
---

{{jsSidebar("Operators")}}

L'opérateur d'égalité stricte (`===`) vérifie si ses deux opérandes sont égaux et renvoie un booléen correspondant au résultat. À la différence de [l'opérateur d'égalité](/fr/docs/Web/JavaScript/Reference/Operators/Equality), l'opérateur d'égalité stricte considère toujours des opérandes de types différents comme étant différents.

{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}

## Syntaxe

```js
x === y;
```

## Description

Les opérateurs d'égalité stricte (`===` et `!==`) utilisent [l'algorithme de comparaison d'égalité stricte](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6) pour comparer deux opérandes.

- Si les opérandes sont de types différents, on renvoie `false`.
- Si les deux opérandes sont des objets, on renvoie `true` uniquement s'ils réfèrent au même objet.
- Si les deux opérandes valent `null` ou si les deux opérandes valent `undefined`, on renvoie `true`.
- Si au moins l'un des opérandes vaut `NaN`, on renvoie `false`.
- Sinon, on compare la valeur des deux opérandes :

  - Les nombres doivent avoir la même valeur. `+0` and `-0` sont considérés comme égaux.
  - Les chaînes de caractères doivent avoir les mêmes caractères, dans le même ordre.
  - Les booléens doivent avoir la même valeur (tous les deux `true` ou tous les deux `false`).

La différence fondamentale avec [l'opérateur d'égalité](/fr/docs/Web/JavaScript/Reference/Operators/Equality) (`==`) est que, lorsque les opérandes sont de types différents, `==` tentera une conversion vers un type commun avant la comparaison.

## Exemples

### Comparaison d'opérandes de même type

```js
console.log("hello" === "hello"); // true
console.log("hello" === "hola"); // false

console.log(3 === 3); // true
console.log(3 === 4); // false

console.log(true === true); // true
console.log(true === false); // false

console.log(null === null); // true
```

### Comparaison d'opérandes de types différents

```js
console.log("3" === 3); // false

console.log(true === 1); // false

console.log(null === undefined); // false
```

### Comparaison d'objets

```js
const objet1 = {
  name: "coucou",
};

const objet2 = {
  name: "coucou",
};

console.log(objet1 === objet2); // false
console.log(objet1 === objet1); // true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur d'inégalité](/fr/docs/Web/JavaScript/Reference/Operators/Inequality)
- [L'opérateur d'égalité](/fr/docs/Web/JavaScript/Reference/Operators/Equality)
- [L'opérateur d'inégalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
