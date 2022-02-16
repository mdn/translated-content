---
title: Array.prototype.push()
slug: Web/JavaScript/Reference/Global_Objects/Array/push
tags:
  - Array
  - JavaScript
  - Méthode
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/push
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/push
---
{{JSRef}}

La méthode **`push()`** ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau.

{{EmbedInteractiveExample("pages/js/array-push.html")}}

## Syntaxe

    arr.push(élément1, ..., élémentN)

### Paramètres

- `élément1, ...,élémentN`
  - : Les éléments à ajouter à la fin du tableau.

### Valeur de retour

La nouvelle valeur de la propriété {{jsxref("Array.length", "length")}} de l'objet sur lequel la méthode a été appelée.

## Description

La méthode `push` permet d'ajouter des valeurs à un tableau.

`push` est une méthode générique. Cette méthode peut ainsi être utilisée avec les méthodes {{jsxref("Function.call()")}} ou {{jsxref("Function.apply()")}} sur des objets similaires aux tableaux.

La méthode `push` se base sur la propriété `length` pour déterminer à partir de quel index les valeurs données doivent être insérées. Si la propriété `length` ne peut pas être convertie en nombre, l'index utilisé est 0. Si la propriété `length` n'est pas définie, elle est alors créée.

Bien que `push` soit une méthode générique, elle ne peut pas être utilisée sur les chaînes de caractères ou sur l'objet `arguments` car ils sont immuables.

## Exemples

### Ajouter des éléments à un tableau

Le code suivant crée un tableau `sports` contenant à sa création deux éléments, auxquels sont ajoutés deux nouveaux éléments. La variable `total` contient la nouvelle taille du tableau.

```js
var sports = ["plongée", "baseball"];
var total = sports.push("football", "tennis");

console.log(sports); // ["plongée", "baseball", "football", "tennis"]
console.log(total);  // 4
```

### Fusionner deux tableaux

Dans l'exemple qui suit, on utilise la méthode {{jsxref("Function.apply()")}} pour ajouter les différents éléments d'un second tableau

```js
var legumes = ['navet', 'pomme de terre'];
var autresLegumes = ['céleri', 'radis'];

// On fusionne les deux tableaux
// Équivalent à legumes.push('céleri', 'radis');
Array.prototype.push.apply(legumes, autresLegumes);

console.log(legumes); // ['navet', 'pomme de terre', 'céleri', 'radis']
```

> **Note :** Attention à ne pas utiliser cette méthode lorsque les tableaux sont très grands car une fonction n'accepte qu'un nombre limité d'arguments. Voir {{jsxref("Function.apply","apply()")}} pour plus d'informations sur ces limites.

### Utiliser un objet comme on utiliserait un tableau

Comme nous l'avons vu auparavant, `push` est une méthode générique et nous pouvons donc utiliser `Array.prototype.push` sur les objets. On notera qu'il n'est pas nécessaire de stocker un ensemble d'objets. En fait, on enregistre l'ensemble dans l'objet et on utilise `call` sur `Array.prototype.push` :

```js
var obj = {
    length: 0,

    ajoutElem: function ajoutElem (elem) {
        // obj.length est automatiquement incrémenté
        // quand on ajoute un élément
        [].push.call(this, elem);
    }
};

// Ajoutons quelques objets vides pour illustrer
// l'exemple.
obj.ajoutElem({});
obj.ajoutElem({});
console.log(obj.length);
// → 2
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                             | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.4.4.7', 'Array.prototype.push')}}                 | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-array.prototype.push', 'Array.prototype.push')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-array.prototype.push', 'Array.prototype.push')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.push")}}

## Voir aussi

- {{jsxref("Array.prototype.pop()")}}
- {{jsxref("Array.prototype.shift()")}}
- {{jsxref("Array.prototype.unshift()")}}
- {{jsxref("Array.prototype.concat()")}}
