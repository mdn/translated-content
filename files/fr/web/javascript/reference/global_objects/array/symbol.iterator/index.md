---
title: "Array : méthode [Symbol.iterator]()"
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`[Symbol.iterator]()`** des instances de {{JSxRef("Array")}} implémente le [protocole itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) et permet aux tableaux d'être parcourus par la plupart des syntaxes qui attendent un itérable, comme la [syntaxe de l'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) et les boucles {{JSxRef("Statements/for...of", "for...of")}}. Elle retourne un [objet itérateur de tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator) qui fournit la valeur de chaque indice du tableau.

La valeur initiale de cette propriété est la même fonction que la valeur initiale de la propriété {{JSxRef("Array.prototype.values")}}.

{{InteractiveExample("JavaScript Demo: Array.prototype[Symbol.iterator]()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array[Symbol.iterator]();

for (const value of iterator) {
  console.log(value);
}

// Résultat attendu : "a"
// Résultat attendu : "b"
// Résultat attendu : "c"
```

## Syntaxe

```js-nolint
array[Symbol.iterator]()
```

### Paramètres

Aucun.

### Valeur de retour

La même valeur de retour que {{JSxRef("Array.prototype.values()")}}&nbsp;: un nouvel [objet d'itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator) qui fournit la valeur de chaque indice du tableau.

## Exemples

### Itération avec une boucle `for...of`

Notez qu'il est rare d'avoir à appeler cette méthode directement. La présence de la méthode `[Symbol.iterator]()` rend les tableaux [itérables](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_itérable), et les syntaxes d'itération comme la boucle `for...of` appellent automatiquement cette méthode pour obtenir l'itérateur à parcourir.

#### HTML

```html
<ul id="letterResult"></ul>
```

#### JavaScript

```js
const arr = ["a", "b", "c"];
const letterResult = document.getElementById("letterResult");
for (const letter of arr) {
  const li = document.createElement("li");
  li.textContent = letter;
  letterResult.appendChild(li);
}
```

#### Résultat

{{EmbedLiveSample("Itération avec une boucle `for...of`")}}

### Utiliser manuellement l'itérateur

Vous pouvez toujours appeler manuellement la méthode `next()` de l'objet itérateur retourné pour avoir un contrôle maximal sur le processus d'itération.

```js
const arr = ["a", "b", "c", "d", "e"];
const arrIter = arr[Symbol.iterator]();
console.log(arrIter.next().value); // a
console.log(arrIter.next().value); // b
console.log(arrIter.next().value); // c
console.log(arrIter.next().value); // d
console.log(arrIter.next().value); // e
```

### Gérer les chaînes de caractères et les tableaux de chaînes avec la même fonction

Puisque les [chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator) et les tableaux implémentent le protocole itérable, il est possible de concevoir une fonction générique pour traiter les deux types d'entrée de la même manière. Cela est préférable à l'appel direct de {{JSxRef("Array.prototype.values()")}}, qui nécessite que l'entrée soit un tableau ou au moins un objet possédant cette méthode.

```js
function logIterable(it) {
  if (typeof it[Symbol.iterator] !== "function") {
    console.log(it, "n'est pas itérable.");
    return;
  }
  for (const letter of it) {
    console.log(letter);
  }
}

// Tableau
logIterable(["a", "b", "c"]);
// a
// b
// c

// Chaîne de caractères
logIterable("abc");
// a
// b
// c

// Nombre
logIterable(123);
// 123 n'est pas itérable.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.keys()")}}
- La méthode {{JSxRef("Array.prototype.entries()")}}
- La méthode {{JSxRef("Array.prototype.values()")}}
- La méthode [`TypedArray.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray/Symbol.iterator)
- La méthode [`String.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator)
- La propriété {{JSxRef("Symbol.iterator")}}
- [Protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Prothèse d'émulation de `Array.prototype[Symbol.iterator]` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
