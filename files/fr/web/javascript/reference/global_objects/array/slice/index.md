---
title: "Array : méthode slice()"
short-title: slice()
slug: Web/JavaScript/Reference/Global_Objects/Array/slice
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`slice()`** des instances {{JSxRef("Array")}} retourne un {{Glossary("Shallow_copy", "copie superficielle")}} d'une portion d'un tableau sous la forme d'un nouvel objet tableau sélectionné de `start` à `end` (`end` non incluse), où `start` et `end` représentent l'indice des éléments dans ce tableau. Le tableau d'origine ne sera pas modifié.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Array.prototype.slice()", "taller")}}

```js interactive-example
const animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(2));
// Résultat attendu : Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Résultat attendu : Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Résultat attendu : Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Résultat attendu : Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Résultat attendu : Array ["camel", "duck"]

console.log(animals.slice());
// Résultat attendu : Array ["ant", "bison", "camel", "duck", "elephant"]
```

## Syntaxe

```js-nolint
slice()
slice(start)
slice(start, end)
```

### Paramètres

- `start` {{Optional_Inline}}
  - : L'indice (compté à partir de zéro) à partir duquel commencer l'extraction, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière).
    - Un indice négatif compte depuis la fin du tableau — si `-array.length <= start < 0`, on utilise `start + array.length`.
    - Si `start < -array.length` ou si `start` est omis, `0` est utilisé.
    - Si `start >= array.length`, un tableau vide est retourné.
- `end` {{Optional_Inline}}
  - : L'indice (compté à partir de zéro) jusqu'auquel extraire le fragment, [converti en entier](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#conversion_entière). `slice()` extrait jusqu'à, mais sans inclure, `end`.
    - Un indice négatif compte depuis la fin du tableau — si `-array.length <= end < 0`, on utilise `end + array.length`.
    - Si `end < -array.length`, `0` est utilisé.
    - Si `end >= array.length` ou si `end` est omis ou vaut `undefined`, `array.length` est utilisé, ce qui entraîne l'extraction de tous les éléments jusqu'à la fin.
    - Si `end` implique une position antérieure ou égale à celle que `start` implique, un tableau vide est retourné.

### Valeur de retour

Un nouveau tableau contenant les éléments extraits.

## Description

La méthode `slice()` est une [méthode de copie](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_copie_et_méthodes_de_mutation). Elle n'altère pas `this` mais retourne plutôt une [copie superficielle](/fr/docs/Glossary/Shallow_copy) contenant certains des mêmes éléments que le tableau d'origine.

La méthode `slice()` préserve les emplacements vides. Si la portion découpée constitue un tableau creux ([tableau creux](/fr/docs/Web/JavaScript/Guide/Indexed_collections#tableaux_creux)), le tableau retourné est également creux.

La méthode `slice()` est [générique](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array#méthodes_de_tableau_génériques). Elle suppose uniquement que la valeur de `this` possède une propriété `length` et des propriétés dont les clés sont des entiers.

## Exemples

### Retourner un fragment d'un tableau existant

```js
var fruits = ["Banane", "Orange", "Citron", "Pomme", "Mangue"];
var agrumes = fruits.slice(1, 3);

// fruits vaut --> ["Banane", "Orange", "Citron", "Pomme", "Mangue"]
// agrumes vaut --> ["Orange", "Citron"]
```

Dans cet exemple, `slice(1, 3)` extrait les éléments à partir de l'indice `1` jusqu'à, mais sans inclure, l'indice `3`, ce qui donne un nouveau tableau `['Orange', 'Citron']`.

### Omettre le paramètre `end`

```js
const fruits = ["Pomme", "Banane", "Orange", "Mangue", "Ananas"];

const tropical = fruits.slice(2);
console.log(tropical); // ['Orange', 'Mangue', 'Ananas']
```

Dans cet exemple, `slice(2)` extrait les éléments à partir de l'indice `2` jusqu'à la fin du tableau.

### Utiliser des indices négatifs

```js
const fruits = ["Pomme", "Banane", "Orange", "Mangue", "Ananas"];

const lastTwo = fruits.slice(-2);
console.log(lastTwo); // ['Mangue', 'Ananas']
```

Dans cet exemple, `slice(-2)` extrait les deux derniers éléments du tableau. Lorsqu'on utilise un indice négatif avec la méthode `slice`, les indices négatifs sont comptés depuis la fin du tableau&nbsp;: `-1` désigne le dernier élément, `-2` le précédent, etc. L'indice négatif `-2` est inclus car il représente le point de départ de l'extraction.

```plain
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- lecture depuis la fin
```

### Utiliser un indice de départ positif et un indice de fin négatif

```js
const fruits = ["Pomme", "Banane", "Orange", "Mangue", "Ananas"];

// Utiliser un indice de départ positif et un indice de fin négatif
const sliceExample = fruits.slice(1, -1);
console.log(sliceExample); // ['Banane', 'Orange', 'Mangue']
```

Dans cet exemple, `slice(1, -1)` commence l'extraction à l'indice `1` et s'arrête avant l'élément situé à l'indice `-1` (le dernier élément). Cela donne un nouveau tableau `['Banana', 'Orange', 'Mango']`. La méthode `slice` exclut toujours l'élément situé à l'indice final spécifié, qu'il soit positif ou négatif.

```plain
lecture depuis le début --->

   0     1     2     3     4
|     |     |     |     |     |
|  S  |  L  |  I  |  C  |  E  |
|     |     |     |     |     |
  -5    -4    -3    -2    -1

<--- lecture depuis la fin
```

### Utiliser `slice()` avec des tableaux d'objets

Dans l'exemple suivant, `slice` crée un nouveau tableau, `newCar`, à partir de `myCar`. Les deux contiennent une référence à l'objet `myHonda`. Lorsque la couleur de `myHonda` est changée en "purple", les deux tableaux reflètent cette modification.

```js
// Avec slice, créer newCar depuis myCar
const myHonda = {
  color: "rouge",
  wheels: 4,
  engine: { cylinders: 4, size: 2.2 },
};
const myCar = [myHonda, 2, "excellente condition", "achetée en 1997"];
const newCar = myCar.slice(0, 2);

console.log("myCar =", myCar);
console.log("newCar =", newCar);
console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);

// Changer la couleur de myHonda.
myHonda.color = "bordeaux";
console.log("La nouvelle couleur de ma Honda est", myHonda.color);

console.log("myCar[0].color =", myCar[0].color);
console.log("newCar[0].color =", newCar[0].color);
```

Ce script affichera&nbsp;:

```plain
myCar = [
  { color: 'rouge', wheels: 4, engine: { cylinders: 4, size: 2.2 } },
  2,
  'excellente condition',
  'achetée en 1997'
]
newCar = [ { color: 'rouge', wheels: 4, engine: { cylinders: 4, size: 2.2 } }, 2 ]
myCar[0].color = rouge
newCar[0].color = rouge
La nouvelle couleur de ma Honda est bordeaux
myCar[0].color = bordeaux
newCar[0].color = bordeaux
```

### Appeler `slice()` sur des objets qui ne sont pas des tableaux

La méthode `slice()` lit la propriété `length` de `this`. Elle lit ensuite les propriétés dont les clés sont des entiers de `start` à `end` et les définit sur un nouveau tableau créé.

```js
const objetSimilaireTableau = {
  length: 3,
  0: 2,
  1: 3,
  2: 4,
  3: 33, // ignoré par slice() car length vaut 3
};
console.log(Array.prototype.slice.call(objetSimilaireTableau, 1, 3));
// [ 3, 4 ]
```

### Utiliser `slice()` pour convertir des objets semblables à des tableaux en tableaux

La méthode `slice()` est souvent utilisée avec {{JSxRef("Function/bind", "bind()")}} et {{JSxRef("Function/call", "call()")}} pour créer une méthode utilitaire qui convertit un objet semblable à un tableau en un tableau.

```js
// slice() est appelé en passant `this` comme premier argument
const slice = Function.prototype.call.bind(Array.prototype.slice);

function list() {
  return slice(arguments);
}

const listResult = list(1, 2, 3); // [1, 2, 3]
```

### Utiliser `slice()` sur des tableaux creux

Le tableau retourné par `slice()` peut être creux si le tableau source est creux.

```js
console.log([1, 2, , 4, 5].slice(1, 4)); // [2, vide, 4]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections)
- L'objet global {{JSxRef("Array")}}
- La méthode {{JSxRef("Array.prototype.pop()")}}
- La méthode {{JSxRef("Array.prototype.shift()")}}
- La méthode {{JSxRef("Array.prototype.concat()")}}
- La méthode {{JSxRef("Array.prototype.splice()")}}
- La méthode {{JSxRef("TypedArray.prototype.slice()")}}
- La méthode {{JSxRef("String.prototype.slice()")}}
- [Prothèse d'émulation de `Array.prototype.slice` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-array)
- [Prothèse d'émulation es-shims de `Array.prototype.slice` <sup>(angl.)</sup>](https://www.npmjs.com/package/array.prototype.slice)
