---
title: "Array : méthode keys()"
short-title: keys()
slug: Web/JavaScript/Reference/Global_Objects/Array/keys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`keys()`** des instances de {{JSxRef("Array")}} retourne un nouvel objet _[itérateur de tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator)_ qui contient les clés pour chaque indice du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.keys()")}}

```js interactive-example
const array = ["a", "b", "c"];
const iterator = array.keys();

for (const key of iterator) {
  console.log(key);
}

// Résultat attendu : 0
// Résultat attendu : 1
// Résultat attendu : 2
```

## Syntaxe

```js-nolint
keys()
```

### Paramètres

Aucun.

### Valeur de retour

Un nouvel [objet itérateur itérable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator).

## Description

Lorsqu'elle est utilisée sur un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), la méthode `keys()` itère sur les emplacements vides comme s'ils avaient la valeur `undefined`.

La méthode `keys()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle attend uniquement que la valeur de `this` possède une propriété `length` et des propriétés à clés entières.

## Exemples

### Utiliser `keys()` sur un tableau creux

Contrairement à {{JSxRef("Object.keys()")}}, qui n'inclut que les clés effectivement présentes dans le tableau, l'itérateur `keys()` ne saute pas les trous représentant des propriétés manquantes.

```js
const arr = ["a", , "c"];
const sparseKeys = Object.keys(arr);
const denseKeys = [...arr.keys()];
console.log(sparseKeys); // ['0', '2']
console.log(denseKeys); // [0, 1, 2]
```

### Appeler `keys()` sur des objets qui ne sont pas des tableaux

La méthode `keys()` lit la propriété `length` de `this` puis génère tous les indices entiers de 0 à `length - 1`. Aucun accès aux indices n'est réellement effectué.

```js
const objetSimilaireTableau = {
  length: 3,
};
for (const entry of Array.prototype.keys.call(objetSimilaireTableau)) {
  console.log(entry);
}
// 0
// 1
// 2
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.entries()")}}
- La méthode {{JSxRef("Array.prototype.values()")}}
- [`Array.prototype[Symbol.iterator]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/Symbol.iterator)
- La méthode {{JSxRef("TypedArray.prototype.keys()")}}
- [Les protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Prothèse d'émulation de `Array.prototype.keys` dans core-js <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.keys` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.keys)
