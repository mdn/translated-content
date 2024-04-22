---
title: Constructeur Array()
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
---

{{JSRef}}

Le constructeur **`Array()`** permet de créer des objets {{jsxref("Array")}}.

## Syntaxe

```js
[element0, element1, ..., elementN]

new Array(element0, element1[, ...[, elementN]])
new Array(longueurTableau)
```

### Paramètres

- `elementN`
  - : Un tableau JavaScript est initialisé avec les éléments indiqués à moins qu'un seul argument ne soit passé (cf. `longueurTableau` ci-après). On notera que ce cas au limite ne s'applique qu'avec le constructeur `Array`. Si on utilise la forme littérale (avec les crochets), on peut initialiser un tableau avec un seul élément.
- `longueurTableau`
  - : Si le seul argument passé au constructeur `Array` est un entier entre 0 et 2^32-1 (inclus), le constructeur renverra un tableau dont la propriété `length` vaut ce nombre. **Note :** le tableau contiendra des éléments vides (à ne pas confondre avec des éléments qui vaudraient `undefined`). Si l'argument est un autre nombre, une exception {{jsxref("RangeError")}} sera levée.

## Exemples

### Utilisation de la notation littérale

Les tableaux peuvent être créés avec une notation [littérale](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Littéraux_de_tableaux) :

```js
let fruits = ["Pomme", "Banane"];

console.log(fruits.length); // 2
console.log(fruits[0]); // "Pomme"
```

### Utilisation du constructeur avec un seul paramètre

On peut créer des tableaux grâce au constructeur avec un seul paramètre numérique. On crée alors un tableau dont la propriété `length` vaut le nombre passé en argument et dont les éléments sont vides.

```js
let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]); // undefined
```

### Utilisation du constructeur avec plusieurs paramètres

Si on utilise plus d'un argument, un nouveau tableau ({{jsxref("Array")}}) sera construit avec les éléments passés en arguments.

```js
let fruits = new Array("Pomme", "Banane");

console.log(fruits.length); // 2
console.log(fruits[0]); // "Pomme"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La classe {{jsxref("Array")}}
