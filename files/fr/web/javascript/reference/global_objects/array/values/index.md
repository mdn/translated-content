---
title: "Array : méthode values()"
short-title: values()
slug: Web/JavaScript/Reference/Global_Objects/Array/values
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`values()`** des instances de {{JSxRef("Array")}} retourne un nouvel objet _[itérateur de tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ qui itère sur la valeur de chaque élément du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.values()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array.values();

for (const value of iterator) {
  console.log(value);
}

// Résultat attendu : "a"
// Résultat attendu : "b"
// Résultat attendu : "c"
```

## Syntaxe

```js-nolint
values()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel [objet d'itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Description

`Array.prototype.values()` est l'implémentation par défaut de [`Array.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator).

```js
Array.prototype.values === Array.prototype[Symbol.iterator]; // true
```

Lorsqu'elle est utilisée sur un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), la méthode `values()` itère sur les cases vides comme si elles avaient la valeur indéfinie (`undefined`).

La méthode `values()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend seulement que la valeur de `this` possède une propriété `length` et des propriétés à indices entiers.

## Exemples

### Itérer avec une boucle `for...of`

Comme `values()` retourne un itérateur itérable, vous pouvez utiliser une boucle [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) pour l'itérer.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();

for (const letter of iterator) {
  console.log(letter);
} // "a" "b" "c" "d" "e"
```

### Itérer avec `next()`

Comme la valeur de retour est aussi un itérateur, vous pouvez appeler directement sa méthode `next()`.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
iterator.next(); // { value: "a", done: false }
iterator.next(); // { value: "b", done: false }
iterator.next(); // { value: "c", done: false }
iterator.next(); // { value: "d", done: false }
iterator.next(); // { value: "e", done: false }
iterator.next(); // { value: undefined, done: true }
console.log(iterator.next().value); // undefined
```

### Réutilisation de l'itérable

> [!WARNING]
> L'objet itérateur de tableau doit être utilisé une seule fois. Ne le réutilisez pas.

L'itérable retourné par `values()` n'est pas réutilisable. Lorsque `next().done = true` ou que `currentIndex > length`, [la boucle `for...of` se termine](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#éléments_de_syntaxe_utilisant_des_itérables) et toute itération supplémentaire n'a aucun effet.

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
}
// "a" "b" "c" "d" "e"
for (const letter of values) {
  console.log(letter);
}
// undefined
```

Si vous utilisez une instruction {{JSxRef("Statements/break", "break")}} pour arrêter l'itération prématurément, l'itérateur peut reprendre à la position courante lors de la prochaine itération.

```js
const arr = ["a", "b", "c", "d", "e"];
const values = arr.values();
for (const letter of values) {
  console.log(letter);
  if (letter === "b") {
    break;
  }
}
// "a" "b"

for (const letter of values) {
  console.log(letter);
}
// "c" "d" "e"
```

### Mutations pendant l'itération

Aucune valeur n'est stockée dans l'objet itérateur de tableau retourné par `values()`&nbsp;: il stocke l'adresse du tableau utilisé lors de sa création et lit l'indice courant à chaque itération. Ainsi, la valeur retournée dépend de la valeur stockée à cet indice au moment de l'itération. Si les valeurs du tableau changent, celles de l'itérateur changent aussi.

```js
const arr = ["a", "b", "c", "d", "e"];
const iterator = arr.values();
console.log(iterator); // Array Iterator { }
console.log(iterator.next().value); // "a"
arr[1] = "n";
console.log(iterator.next().value); // "n"
```

Contrairement aux [méthodes itératives](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_itératives), l'itérateur de tableau ne mémorise pas la longueur du tableau à sa création, mais la lit à chaque itération. Ainsi, si le tableau grandit pendant l'itération, l'itérateur visitera aussi les nouveaux éléments. Cela peut entraîner des boucles infinies.

```js
const arr = [1, 2, 3];
for (const e of arr) {
  arr.push(e * 10);
}
// RangeError : longueur de tableau non valide
```

### Itération sur les tableaux creux

`values()` visitera les cases vides comme si elles valaient `undefined`.

```js
for (const element of [, "a"].values()) {
  console.log(element);
}
// undefined
// 'a'
```

### Appeler `values()` sur des objets qui ne sont pas des tableaux

La méthode `values()` lit la propriété `length` de `this` puis accède à chaque propriété dont la clé est un entier non négatif inférieur à `length`.

```js
const objetSimilaireTableau = {
  length: 3,
  0: "a",
  1: "b",
  2: "c",
  3: "d", // ignoré par values() car length vaut 3
};
for (const entry of Array.prototype.values.call(objetSimilaireTableau)) {
  console.log(entry);
}
// a
// b
// c
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.entries()")}}
- La méthode {{JSxRef("Array.prototype.keys()")}}
- La méthode [`Array.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- La méthode {{JSxRef("TypedArray.prototype.values()")}}
- [Protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Prothèse d'émulation de `Array.prototype.values` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.values` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.values)
