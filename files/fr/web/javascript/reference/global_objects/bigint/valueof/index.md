---
title: BigInt.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
tags:
  - BigInt
  - JavaScript
  - Method
  - Prototype
  - Reference
  - valueOf()
translation_of: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
original_slug: Web/JavaScript/Reference/Objets_globaux/BigInt/valueOf
---
{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive encapsulée dans un objet {{jsxref("BigInt")}}.

{{EmbedInteractiveExample("pages/js/bigint-valueof.html")}}

## Syntaxe

```js
bigIntObj.valueOf()
```

### Valeur de retour

Un grand entier (_big int_) représentant la valeur primitive de l'objet {{jsxref("BigInt")}} courant.

## Exemples

### Utiliser `valueOf()`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Spécifications

| Spécification                                                                                     | État                    |
| ------------------------------------------------------------------------------------------------- | ----------------------- |
| [Proposition pour `BigInt`](https://tc39.github.io/proposal-bigint/#sec-bigint.prototype.valueof) | Proposition de niveau 3 |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.BigInt.valueOf")}}

## Voir aussi

- {{jsxref("BigInt.prototype.toString()")}}
