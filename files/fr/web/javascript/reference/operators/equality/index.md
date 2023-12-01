---
title: Égalité (==)
slug: Web/JavaScript/Reference/Operators/Equality
---

{{jsSidebar("Operators")}}

L'opérateur d'égalité (`==`) vérifie si ses deux opérandes sont égaux et renvoie un booléen indiquant le résultat de la comparaison. À la différence de l'opérateur [d'égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality), l'opérateur d'égalité tente de convertir ses opérandes avant la comparaison si ceux-ci sont de types différents.

{{EmbedInteractiveExample("pages/js/expressions-equality.html")}}

## Syntaxe

```js
x == y;
```

## Description

Les opérateurs d'égalité (`==` et `!=`) utilisent [l'algorithme de comparaison d'égalité abstraite](https://www.ecma-international.org/ecma-262/5.1/#sec-11.9.3) pour comparer deux opérandes. On peut le résumer ainsi :

- Si les opérandes sont deux objets, on renvoie `true` uniquement si les deux opérandes référencent le même objet.
- Si un opérande vaut `null` et que l'autre vaut `undefined`, on renvoie `true`.
- Si les opérandes sont de types différents, on tente une conversion pour avoir le même type de part et d'autre avant la comparaison :

  - Si on compare un nombre à une chaîne de caractères, on tentera de convertir la chaîne en une valeur numérique.
  - Si l'un des opérandes est un booléen, on le convertira en 1 s'il vaut `true` et en +0 s'il vaut `false`.
  - Si l'un des opérandes est un objet et que l'autre est un nombre ou une chaîne de caractères, on tentera de convertir l'objet en une valeur primitive grâce aux méthodes `valueOf()` et `toString()` de l'objet.

- Si les opérandes sont du même types, on les compare comme suit :

  - `String` : on renvoie `true` uniquement si les deux opérandes ont les mêmes caractères dans le même ordre.
  - `Number` : on renvoie `true` uniquement si les deux opérandes ont la même valeur. `+0` et `-0` sont considérés comme la même valeur. Si au moins un des opérandes vaut `NaN`, on renvoie `false`.
  - `Boolean` : on renvoie `true` uniquement si les deux opérandes valent tous les deux `true` ou s'ils valent tous les deux `false`.

La différence fondamentale entre cet opérateur et [l'opérateur d'égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) (`===`) est que ce dernier n'opère pas de conversion de type. L'opérateur d'égalité stricte considère toujours que deux valeurs de types différents sont différentes.

## Exemples

### Comparaison sans conversion de types

```js
1 == 1; // true
"coucou" == "coucou"; // true
```

### Comparaison avec conversion de types

```js
"1" == 1; // true
1 == "1"; // true
0 == false; // true
0 == null; // false
0 == undefined; // false
0 == !!null; // true, voir la documentation pour !!
0 == !!undefined; // true, voir la documentation pour !!
null == undefined; // true

const nombre1 = new Number(3);
const nombre2 = new Number(3);
nombre1 == 3; // true
nombre1 == nombre2; // false
```

### Comparaison d'objets

```js
const objet1 = { clé: "valeur" };
const objet2 = { clé: "valeur" };

objet1 == objet2; // false
objet2 == objet2; // true
```

### Comparaison entre des chaînes de caractères et des objets String

On notera que les chaînes de caractères construites avec `new String()` sont des objets. Si on compare une telle valeur avec une chaîne de caractères "primitives", l'objet `String` sera converti en une chaîne de caractères et les contenus de ces chaînes seront comparés. Toutefois, si les deux opérandes sont des objets `String`, ils seront comparés comme tels et devront référencer le même objet pour être considérés égaux :

```js
const string1 = "coucou";
const string2 = String("coucou");
const string3 = new String("coucou");
const string4 = new String("coucou");

console.log(string1 == string2); // true
console.log(string1 == string3); // true
console.log(string2 == string3); // true
console.log(string3 == string4); // false
console.log(string4 == string4); // true
```

### Comparaison entre les dates et les chaînes de caractères

```js
const d = new Date("December 17, 1995 03:24:00");
const s = d.toString(); // par exemple : "Sun Dec 17 1995 03:24:00 GMT-0800 (Pacific Standard Time)"
console.log(d == s); //true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'opérateur d'inégalité](/fr/docs/Web/JavaScript/Reference/Operators/Inequality)
- [L'opérateur d'égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality)
- [L'opérateur d'inégalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
