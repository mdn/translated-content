---
title: "Array : méthode at()"
short-title: at()
slug: Web/JavaScript/Reference/Global_Objects/Array/at
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`at()`** des instances de {{JSxRef("Array")}} prend une valeur entière et retourne l'élément à cet indice, en acceptant des entiers positifs ou négatifs. Les entiers négatifs comptent à rebours depuis le dernier élément du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.at()")}}

```js interactive-example
const array = [5, 12, 8, 130, 44];

let index = 2;

console.log(`Un indice de ${index} retourne ${array.at(index)}`);
// Résultat attendu : "Un indice de 2 retourne 8"

index = -2;

console.log(`Un indice de ${index} retourne ${array.at(index)}`);
// Résultat attendu : "Un indice de -2 retourne 130"
```

## Syntaxe

```js-nolint
at(index)
```

### Paramètres

- `index`
  - : Indice (commençant à zéro) de l'élément du tableau à retourner, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière). Un indice négatif compte à rebours depuis la fin du tableau — si `index < 0`, c'est `index + array.length` qui est utilisé.

### Valeur de retour

L'élément du tableau correspondant à l'indice donné. Retourne toujours {{JSxRef("undefined")}} si `index < -array.length` ou `index >= array.length`, sans tenter d'accéder à la propriété correspondante.

## Description

La méthode `at()` est équivalente à la notation avec crochets lorsque `index` est un entier positif ou nul. Par exemple, `array[0]` et `array.at(0)` retournent tous deux le premier élément. Cependant, pour compter à partir de la fin du tableau, on ne peut pas utiliser `array[-1]` comme en Python ou R, car toutes les valeurs entre crochets sont traitées littéralement comme des propriétés de chaîne de caractères, on lit donc `array["-1"]`, qui est simplement une propriété de chaîne de caractères ordinaire et non un indice de tableau.

La pratique courante consiste à accéder à {{JSxRef("Array/length", "length")}} et à calculer l'indice à partir de là — par exemple, `array[array.length - 1]`. La méthode `at()` permet un indexage relatif, ce qui permet de simplifier en écrivant `array.at(-1)`.

En combinant `at()` avec {{JSxRef("Array/with", "with()")}}, on peut lire et écrire (respectivement) dans un tableau en utilisant des indices négatifs.

La méthode `at()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à clé entière.

## Exemples

### Retourner la dernière valeur d'un tableau

L'exemple qui suit fournit une fonction qui retourne le dernier élément trouvé dans un tableau.

```js
// Le tableau avec des éléments
const panier = ["pomme", "banane", "poire"];

// Une fonction qui retourne le dernier
// élément d'un tableau
function dernierElem(arr) {
  return arr.at(-1);
}

// On récupère le dernier élément du
// tableau 'panier'
const item1 = dernierElem(panier);
console.log(item1);
// Affiche 'poire' dans la console

// On ajoute un élément au tableau
// 'panier'
panier.push("orange");
const item2 = dernierElem(panier);
console.log(item2);
// Affiche 'orange' dans la console
```

### Comparaison de méthodes

On compare ici différentes façons d'accéder à l'avant-dernier élément d'un tableau ({{JSxRef("Array")}}). Bien que toutes les méthodes présentées ici soient valides et équivalentes, on pourra noter la concision et la lisibilité de la méthode `at()`.

```js
// Un tableau de valeurs
const couleurs = ["rouge", "vert", "bleu"];

// En utilisant la propriété length
const avecLength = couleurs[couleurs.length - 2];
console.log(avecLength);
// Affiche 'vert' dans la console

// En utilisant la méthode slice()
// qui renvoie un tableau
const avecSlice = couleurs.slice(-2, -1);
console.log(avecSlice[0]);
// Affiche 'vert' dans la console

// En utilisant la méthode at()
const avecAt = couleurs.at(-2);
console.log(avecAt);
// Affiche 'vert' dans la console
```

### Utiliser `at()` sur des objets ressemblant à des tableaux

La méthode `at()` lit la propriété `length` de `this` et calcule l'indice à accéder.

```js
const objetSimilaireTableau = {
  length: 2,
  0: "a",
  1: "b",
  2: "c", // ignoré par at() car length vaut 2
};
console.log(Array.prototype.at.call(objetSimilaireTableau, 0)); // "a"
console.log(Array.prototype.at.call(objetSimilaireTableau, 2)); // undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.findIndex()")}}
- La méthode {{JSxRef("Array.prototype.indexOf()")}}
- La méthode {{JSxRef("Array.prototype.with()")}}
- La méthode {{JSxRef("TypedArray.prototype.at()")}}
- La méthode {{JSxRef("String.prototype.at()")}}
- [Prothèse d'émulation pour `Array.prototype.at` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#relative-indexing-method)
- [Prothèse d'émulation es-shims pour `Array.prototype.at` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.at)
