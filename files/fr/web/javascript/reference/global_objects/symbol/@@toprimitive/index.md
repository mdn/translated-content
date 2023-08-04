---
title: Symbol.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Symbol/@@toPrimitive
---

{{JSRef}}

La méthode **`[@@toPrimitive]()`** permet de convertir un objet symbole en une valeur primitive.

## Syntaxe

```js
Symbol()[Symbol.toPrimitive](hint);
```

### Valeur de retour

La valeur primitive de l'objet {{jsxref("Symbol")}} indiqué.

## Description

La méthode `[@@toPrimitive]()` de {{jsxref("Symbol")}} renvoie la valeur primitive d'un objet `Symbol` (le résultat sera donc un symbole au sens primitif). L'argument `hint` n'est pas utilisé.

Le moteur JavaScript appelle la méthode `[@@toPrimitive]()` afin de convertir un objet en une valeur primitive. Généralement, il n'est pas nécessaire d'appeler `[@@toPrimitive]()` car le moteur JavaScript l'appelle automatiquement lorsqu'il détecte un objet là où une valeur primitive est attendue.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Symbol.toPrimitive")}}
