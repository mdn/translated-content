---
title: Symbol.prototype.description
slug: Web/JavaScript/Reference/Global_Objects/Symbol/description
tags:
  - JavaScript
  - Propriété
  - Prototype
  - Reference
  - Symbol
translation_of: Web/JavaScript/Reference/Global_Objects/Symbol/description
original_slug: Web/JavaScript/Reference/Objets_globaux/Symbol/description
---
{{JSRef}}

La propriété en lecture seule **`description`** est une chaîne de caractères qui renvoie la description optionnelle de l'objet {{jsxref("Symbol")}}.

{{EmbedInteractiveExample("pages/js/symbol-prototype-description.html")}}

## Syntaxe

```js
Symbol('maDescription').description;
Symbol.iterator.description;
Symbol.for('toto').description;
```

## Description

Les objets {{jsxref("Symbol")}} peuvent être créés avec une description facultative qui peut être utilisée pour du débogage mais sans accéder au symbole. La propriété `Symbol.prototype.description` peut être utilisée afin de lire cette description. Cette propriété est différente de `Symbol.prototype.toString()` car elle ne contient pas la chaîne de caractères "`Symbol()`" autour de la description (voir les exemples qui suivent).

## Exemples

```js
Symbol('desc').toString();   // "Symbol(desc)"
Symbol('desc').description;  // "desc"
Symbol('').description;      // ""
Symbol().description;        // undefined

// symboles connus
Symbol.iterator.toString();  // "Symbol(Symbol.iterator)"
Symbol.iterator.description; // "Symbol.iterator"

// symboles globaux
Symbol.for('toto').toString();  // "Symbol(toto)"
Symbol.for('toto').description; // "toto"
```

## Spécifications

| Spécification                                                                                                                           | État                    |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| [Proposition pour `Symbol.prototype.description`](https://tc39.github.io/proposal-Symbol-description/#sec-symbol.prototype.description) | Proposition de niveau 4 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Symbol.description")}}

## Voir aussi

- {{jsxref("Symbol.prototype.toString()")}}
- Prothèse d'émulation / _Polyfill_ : <https://npmjs.com/symbol.prototype.description>
