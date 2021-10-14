---
title: Array.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/Array/fill
tags:
  - Array
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Array/fill
original_slug: Web/JavaScript/Reference/Objets_globaux/Array/fill
---
{{JSRef}}

La méthode **`fill()`** remplit tous les éléments d'un tableau entre deux index avec une valeur statique. La valeur de l'index de fin n'est pas incluse. Cette méthode renvoie le tableau modifié.

{{EmbedInteractiveExample("pages/js/array-fill.html")}}

## Syntaxe

    arr.fill(valeur)
    arr.fill(valeur, début)
    arr.fill(valeur, début, fin)

### Paramètres

- `valeur`
  - : Valeur avec laquelle remplir le tableau.
- `début` {{optional_inline}}
  - : Index de début, la valeur par défaut est 0.
- `fin` {{optional_inline}}
  - : Index de fin, la valeur par défaut est `this.length`.

### Valeur de retour

Le tableau modifié par la méthode.

## Description

Les éléments pour lesquels on utilisera la valeur sont ceux contenus dans l'intervalle de positions \[`début`, `fin`].

La méthode `fill()` prend jusqu'à trois arguments : `valeur`, `début` et `fin`. Les arguments `début` et `fin` sont optionnels. Leurs valeurs par défaut sont respectivement `0` et la taille `length` de l'objet `this`.

Si `début` est négatif, il sera traité comme `length+début` où `length` est la taille du tableau. Si `fin` est négatif, il est traité comme `length+fin`.

La fonction `fill()` est intentionnellement générique, il n'est pas nécessaire que sa valeur `this` soit un objet `Array`.

La méthode `fill()` est une méthode de modification, elle changera l'objet `this` lui-même, et renverra l'objet modifié. Elle ne crée pas de copie. Lorsque cette méthode reçoit un objet comme valeur, elle copiera l'objet passé et remplira le tableau avec une référence vers cette copie.

## Exemples

```js
[1, 2, 3].fill(4);            // [4, 4, 4]
[1, 2, 3].fill(4, 1);         // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);      // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);      // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);    // [4, 2, 3]
[1, 2, 3].fill(4, 3, 3);      // [1, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);  // [1, 2, 3]
Array(3).fill(4);             // [4, 4, 4]
[].fill.call({length: 3}, 4); // {0: 4, 1: 4, 2: 4, length: 3}

// Les objets sont copiés via une référence
var arr = Array(3).fill({}); // [{}, {}, {}];
arr[0].yop = "yop"; // [{yop: "yop"}, {yop: "yop"}, {yop: "yop"}]
```

## Prothèse d'émulation (_polyfill_)

```js
if (!Array.prototype.fill) {
  Object.defineProperty(Array.prototype, 'fill', {
    value: function(value) {

      // Steps 1-2.
      if (this == null) {
        throw new TypeError('this is null or not defined');
      }

      var O = Object(this);

      // Steps 3-5.
      var len = O.length >>> 0;

      // Steps 6-7.
      var start = arguments[1];
      var relativeStart = start >> 0;

      // Step 8.
      var k = relativeStart < 0 ?
        Math.max(len + relativeStart, 0) :
        Math.min(relativeStart, len);

      // Steps 9-10.
      var end = arguments[2];
      var relativeEnd = end === undefined ?
        len : end >> 0;

      // Step 11.
      var final = relativeEnd < 0 ?
        Math.max(len + relativeEnd, 0) :
        Math.min(relativeEnd, len);

      // Step 12.
      while (k < final) {
        O[k] = value;
        k++;
      }

      // Step 13.
      return O;
    }
  });
}
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-array.prototype.fill', 'Array.prototype.fill')}} | {{Spec2('ES2015')}}     | Définition initiale. |
| {{SpecName('ESDraft', '#sec-array.prototype.fill', 'Array.prototype.fill')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Array.fill")}}

## Voir aussi

- {{jsxref("Array")}}
- {{jsxref("TypedArray.prototype.fill()")}}
