---
title: "Array : propriété length"
short-title: length
slug: Web/JavaScript/Reference/Global_Objects/Array/length
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété de données **`length`** d'une instance de {{JSxRef("Array")}} représente le nombre d'éléments dans ce tableau. Sa valeur est un entier non signé sur 32 bits qui est toujours numériquement supérieur au plus grand indice du tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.length", "shorter")}}

```js interactive-example
const clothing = ["chaussures", "chemises", "chaussettes", "pulls"];

console.log(clothing.length);
// Résultat attendu : 4
```

## Valeur

Un entier positif inférieur à 2<sup>32</sup>.

{{js_property_attributes(1, 0, 0)}}

## Description

La valeur de la propriété `length` est un entier positif dont la valeur est inférieure à 2<sup>32</sup>.

```js
const listeA = [1, 2, 3];
const listeB = new Array(6);

console.log(listeA.length);
// Résultat attendu : 3

console.log(listeB.length);
// Résultat attendu : 6

listeB.length = 2 ** 32; // 4294967296
// RangeError : Invalid array length

const listeC = new Array(-100); // Les nombres négatifs ne sont pas autorisés
// RangeError : Invalid array length
```

L'objet tableau observe la propriété `length` et synchronise automatiquement la valeur de `length` avec le contenu du tableau. Cela signifie&nbsp;:

- Définir la propriété `length` à une valeur inférieure à la longueur actuelle tronque le tableau — les éléments au-delà de la nouvelle valeur de `length` sont supprimés.
- Définir un indice de tableau (un entier positif inférieur à 2<sup>32</sup>) au-delà de la valeur actuelle de `length` étend le tableau — la propriété `length` est augmentée pour refléter le nouvel indice le plus élevé.
- Définir la propriété `length` à une valeur invalide (par exemple, un nombre négatif ou un nombre non entier) lève une exception `RangeError`.

Lorsque la propriété `length` est définie à une valeur supérieure à la longueur actuelle, le tableau est étendu en ajoutant des [emplacements vides](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux), et non des valeurs `undefined` réelles. Les emplacements vides ont des interactions particulières avec les méthodes de tableau&nbsp;: voir [méthodes de tableau et emplacements vides](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_et_emplacements_vides).

```js
const tableau = [1, 2];
console.log(tableau);
// [ 1, 2 ]

tableau.length = 5; // On définit la longueur du tableau à 5 alors qu'elle vaut 2.
console.log(tableau);
// [ 1, 2, <3 éléments vides> ]

tableau.forEach((élément) => console.log(élément));
// 1
// 2
```

Voir aussi [la relation entre longueur et propriétés numériques](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#relation_entre_length_et_les_propriétés_numériques).

## Exemples

### Parcourir un tableau

Dans l'exemple suivant, on itère sur le tableau `nombres` en utilisant la propriété `length` afin de connaître son nombre d'éléments. La valeur de chaque élément est ensuite multipliée par deux&nbsp;:

```js
const nombres = [1, 2, 3, 4, 5];
const longueur = nombres.length;
for (let i = 0; i < longueur; i++) {
  nombres[i] *= 2;
}
// nombres vaut maintenant [2, 4, 6, 8, 10]
```

### Tronquer un tableau

L'exemple suivant raccourcit le tableau `nombres` à une longueur de 3 si sa longueur actuelle est supérieure à 3.

```js
const nombres = [1, 2, 3, 4, 5];

if (nombres.length > 3) {
  nombres.length = 3;
}

console.log(nombres); // [1, 2, 3]
console.log(nombres.length); // 3
console.log(nombres[3]); // undefined ; les éléments supplémentaires sont supprimés
```

### Créer un tableau vide de longueur fixe

Définir la propriété `length` à une valeur supérieure à la longueur actuelle crée un [tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

```js
const nombres = [];
nombres.length = 3;
console.log(nombres); // [vide x 3]
```

### Tableau avec une propriété `length` non modifiable

La propriété `length` est automatiquement mise à jour par le tableau lorsque des éléments sont ajoutés au-delà de la longueur actuelle. Si la propriété `length` est rendue non modifiable, le tableau ne pourra pas la mettre à jour. Cela provoque une erreur en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode).

```js
"use strict";

const nombres = [1, 2, 3, 4, 5];
Object.defineProperty(nombres, "length", { writable: false });
nombres[5] = 6; // TypeError : Cannot assign to read only property 'length' of object '[object Array]'
nombres.push(5); // TypeError : Cannot assign to read only property 'length' of object '[object Array]'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La propriété {{JSxRef("TypedArray.prototype.length")}}
- La propriété {{JSxRef("String.length")}}
- [RangeError&nbsp;: longueur de tableau invalide](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_array_length)
