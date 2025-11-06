---
title: Constructeur Array()
short-title: Array()
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`Array()`** permet de créer des objets {{JSxRef("Array")}}.

## Syntaxe

```js-nolint
new Array()
new Array(element1)
new Array(element1, element2)
new Array(element1, element2, /* …, */ elementN)
new Array(arrayLength)

Array()
Array(element1)
Array(element1, element2)
Array(element1, element2, /* …, */ elementN)
Array(arrayLength)
```

> [!NOTE]
> `Array()` peut être appelé avec ou sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new)&nbsp;: les deux créent une nouvelle instance de `Array`.

### Paramètres

- `element1`, …, `elementN`
  - : Un tableau JavaScript est initialisé avec les éléments indiqués, sauf dans le cas où un seul argument est passé au constructeur `Array` et que cet argument est un nombre (voir le paramètre `arrayLength` ci-dessous). On notera que ce cas particulier ne s'applique qu'aux tableaux créés avec le constructeur `Array`, et non aux littéraux de tableau créés avec la syntaxe des crochets.
- `arrayLength`
  - : Si le seul argument passé au constructeur `Array` est un entier entre 0 et 2<sup>32</sup> — 1 (inclus), cela retourne un nouveau tableau JavaScript dont la propriété `length` vaut ce nombre.

    > [!NOTE]
    > Cela implique un tableau avec `arrayLength` d'emplacements vides, et non des emplacements contenant réellement la valeur `undefined` — voir [tableaux creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux).

### Exceptions

- {{JSxRef("RangeError")}}
  - : Levée s'il n'y a qu'un seul argument (`arrayLength`) qui est un nombre, mais que sa valeur n'est pas un entier ou n'est pas comprise entre 0 et 2<sup>32</sup> — 1 (inclus).

## Exemples

### Utilisation de la notation littérale

Les tableaux peuvent être créés avec une notation [littérale](/fr/docs/Web/JavaScript/Guide/Grammar_and_types#les_littéraux_de_tableaux)&nbsp;:

```js
const fruits = ["Pomme", "Banane"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Pomme"
```

### Utilisation du constructeur avec un seul paramètre

On peut créer des tableaux grâce au constructeur avec un seul paramètre numérique. On crée alors un tableau dont la propriété `length` vaut le nombre passé en argument et dont les éléments sont vides.

```js
const tableauVide = new Array(2);

console.log(tableauVide.length); // 2
console.log(tableauVide[0]); // undefined ; en réalité, c'est un emplacement vide
console.log(0 in tableauVide); // false
console.log(1 in tableauVide); // false
```

```js
const tableauDeUn = new Array("2"); // Ce n'est pas le nombre 2 mais la chaîne de caractères « 2 »

console.log(tableauDeUn.length); // 1
console.log(tableauDeUn[0]); // "2"
```

### Utilisation du constructeur avec plusieurs paramètres

Si on utilise plus d'un argument, un nouveau tableau ({{JSxRef("Array")}}) sera construit avec les éléments passés en arguments.

```js
const fruits = new Array("Pomme", "Banane");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Pomme"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
