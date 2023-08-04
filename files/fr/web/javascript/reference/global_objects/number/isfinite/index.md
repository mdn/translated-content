---
title: Number.isFinite()
slug: Web/JavaScript/Reference/Global_Objects/Number/isFinite
---

{{JSRef}}

La méthode **`Number.isFinite()`** permet de déterminer si la valeur fournie est un nombre fini.

{{EmbedInteractiveExample("pages/js/number-isfinite.html")}}

## Syntaxe

```js
Number.isFinite(valeurÀTester);
```

### Paramètres

- `valeurÀTester`
  - : La valeur dont on souhaite savoir si elle est finie.

### Valeur de retour

Un booléen indiquant si la valeur passée en argument est un nombre fini.

## Description

Par rapport à la fonction de l'objet global {{jsxref("isFinite","isFinite()")}} qui convertit l'argument donné en un nombre, la fonction `Number.isFinite` ne convertit pas l'argument et ne renvoie pas `true`.

## Exemples

```js
Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite("0"); // false, ce qui aurait
// renvoyé true avec isFinite("0")

Number.isFinite(null); // false, ce qui aurait
// renvoyé true avc isFinite(null)
```

## Prothèse d'émulation (_polyfill_)

```js
// Number.isFinite polyfill
// http://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isfinite
if (typeof Number.isFinite !== "function") {
  Number.isFinite = function isFinite(value) {
    // 1. Si Type(number) n'est pas Number, on renvoie false.
    if (typeof value !== "number") {
      return false;
    }
    // 2. Si le nombre est NaN, +∞, ou −∞, on renvoie false.
    if (value !== value || value === Infinity || value === -Infinity) {
      return false;
    }
    // 3. Sinon on renvoie true.
    return true;
  };
}
```

Deuxième version plus concise qui utilise la méthode globale `isFinite`

```js
if (Number.isFinite === undefined)
  Number.isFinite = function (value) {
    return typeof value === "number" && isFinite(value);
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{jsxref("Number")}} auquel appartient cette méthode
- La méthode {{jsxref("isFinite", "isFinite()")}} de l'objet global
