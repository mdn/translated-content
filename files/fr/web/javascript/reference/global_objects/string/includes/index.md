---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
---

{{JSRef}}

La méthode **`includes()`** détermine si une chaîne de caractères est contenue dans une autre et renvoie `true` ou `false` selon le cas de figure.

{{EmbedInteractiveExample("pages/js/string-includes.html")}}

## Syntaxe

```js
str.includes(chaîneRecherchée);
str.includes(chaîneRecherchée, position);
```

### Paramètres

- `chaîneRecherchée`
  - : Une chaîne à rechercher dans la chaîne courante.
- `position` {{optional_inline}}
  - : La position dans la chaîne à partir de laquelle commencera la recherche. La valeur par défaut de `position` est 0.

### Valeur de retour

`true` si la chaîne de caractères contient la sous-chaîne recherchée, `false` sinon.

## Description

Cette méthode détermine si une chaîne de caractères est contenue dans une autre.

### Sensibilité à la case

`includes()` est sensible à la casse. Par exemple, l'expression suivante nous retournera `false` :

```js
"Baleine bleue".includes("baleine"); // false
```

## Exemples

### Utiliser `includes()`

```js
const str = "Être ou ne pas être, telle est la question.";

console.log(str.includes("Être")); // true
console.log(str.includes("question")); // true
console.log(str.includes("pléonasme")); // false
console.log(str.includes("Être", 1)); // false
console.log(str.includes("ÊTRE")); // false
console.log(str.includes("")); // true
```

## Prothèse d'émulation (_polyfill_)

Cette méthode a été ajoutée à la spécification ECMAScript 2015 et n'est peut-être pas encore disponible dans toutes les implémentations JavaScript.

Cependant, vous pouvez facilement {{Glossary('polyfill')}} cette méthode pour de vieux navigateurs :

```js
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";

    if (search instanceof RegExp) {
      throw TypeError("first argument must not be a RegExp");
    }
    if (start === undefined) {
      start = 0;
    }
    return this.indexOf(search, start) !== -1;
  };
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
