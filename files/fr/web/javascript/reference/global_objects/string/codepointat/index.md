---
title: String.prototype.codePointAt()
slug: Web/JavaScript/Reference/Global_Objects/String/codePointAt
---

{{JSRef}}

La méthode **`codePointAt()`** renvoie un entier positif qui correspond au code Unicode (_code point_) du caractère de la chaîne à la position donnée.

{{EmbedInteractiveExample("pages/js/string-codepointat.html")}}

## Syntaxe

```js
str.codePointAt(pos);
```

### Paramètres

- `pos`
  - : La position de l'élément dans la chaîne de caractères dont on souhaite obtenir la valeur du codet.

### Valeur de retour

Un nombre qui représente la valeur du point de code du caractère à la position indiqué. C'est la valeur {{jsxref("undefined")}} qui est renvoyée s'il n'y aucun élément à `pos`.

## Description

S'il n'y a pas d'élément à la position donnée, la valeur renvoyée sera {{jsxref("undefined")}}. Si ce n'est pas un élément représenté sur deux demi-codets (_surrogate pair_) UTF-16 et qui commence à `pos`, le codet de l'élément à l'indice `pos` est renvoyé.

## Exemples

```js
"ABC".codePointAt(1); // 66
"\uD800\uDC00".codePointAt(0); // 65536

"XYZ".codePointAt(42); // undefined
```

## Prothèse d'émulation (_polyfill_)

Le fragment de code suivant permet d'ajouter la méthode `codePointAt()` pour les chaînes de caractères (`String`). En effet, cette méthode fait partie de ECMAScript 2015 et certains navigateurs peuvent ne pas proposer cette fonction nativement.

```js
/*! https://mths.be/codepointat v0.2.0 by @mathias */
if (!String.prototype.codePointAt) {
  (function () {
    "use strict"; // needed to support `apply`/`call` with `undefined`/`null`
    var defineProperty = (function () {
      // IE 8 only supports `Object.defineProperty` on DOM elements
      try {
        var object = {};
        var $defineProperty = Object.defineProperty;
        var result = $defineProperty(object, object, object) && $defineProperty;
      } catch (error) {}
      return result;
    })();
    var codePointAt = function (position) {
      if (this == null) {
        throw TypeError();
      }
      var string = String(this);
      var size = string.length;
      // `ToInteger`
      var index = position ? Number(position) : 0;
      if (index != index) {
        // better `isNaN`
        index = 0;
      }
      // Account for out-of-bounds indices:
      if (index < 0 || index >= size) {
        return undefined;
      }
      // Get the first code unit
      var first = string.charCodeAt(index);
      var second;
      if (
        // check if it’s the start of a surrogate pair
        first >= 0xd800 &&
        first <= 0xdbff && // high surrogate
        size > index + 1 // there is a next code unit
      ) {
        second = string.charCodeAt(index + 1);
        if (second >= 0xdc00 && second <= 0xdfff) {
          // low surrogate
          // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
          return (first - 0xd800) * 0x400 + second - 0xdc00 + 0x10000;
        }
      }
      return first;
    };
    if (defineProperty) {
      defineProperty(String.prototype, "codePointAt", {
        value: codePointAt,
        configurable: true,
        writable: true,
      });
    } else {
      String.prototype.codePointAt = codePointAt;
    }
  })();
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.charAt()")}}
