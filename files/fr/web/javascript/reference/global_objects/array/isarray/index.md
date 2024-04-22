---
title: Array.isArray()
slug: Web/JavaScript/Reference/Global_Objects/Array/isArray
---

{{JSRef}}

La méthode **`Array.isArray()`** permet de déterminer si l'objet passé en argument est un objet {{jsxref("Array")}}, elle renvoie `true` si le paramètre passé à la fonction est de type `Array` et `false` dans le cas contraire.

```js
Array.isArray([1, 2, 3]); // true
Array.isArray({ toto: 123 }); // false
Array.isArray("tototruc"); // false
Array.isArray(undefined); // false
```

## Syntaxe

```js
Array.isArray(value);
```

### Paramètres

- `value`
  - : La valeur dont on veut vérifier le type

### Valeur de retour

`true` si la valeur est un tableau (une instance de {{jsxref("Array")}}), `false` sinon.

## Description

Si l'objet indiqué en paramètre est un {{jsxref("Array")}}, la méthode renvoie `true`, sinon, elle renvoie `false`.

Voir aussi : « [Determining with absolute accuracy whether or not a JavaScript object is an array](http://web.mit.edu/jwalden/www/isArray.html) » (en anglais) pour avoir plus de détails. Si on passe un objet {{jsxref("TypedArray")}} en argument, ce sera toujours la valeur `false` qui sera renvoyée.

## Exemples

```js
// Tous les appels suivant renvoient true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array("a", "b", "c"));
Array.isArray(new Array(3));
// Une petite anecdote: Array.prototype lui même est un Array
Array.isArray(Array.prototype);

// Tous les appels suivant renvoient false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32));
Array.isArray({ __proto__: Array.prototype });
```

## Prothèse d'émulation (_polyfill_)

Exécuter ce code avant tout les autres aboutira à la création de la méthode `Array.isArray()`si elle n'est pas nativement prise en charge par le navigateur.

```js
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array")}}
