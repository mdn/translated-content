---
title: Date.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
original_slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
---

{{JSRef}}

La méthode **`[@@toPrimitive]()`** permet de convertir un objet `Date` en une valeur primitive.

## Syntaxe

```js
Date()[Symbol.toPrimitive](hint);
```

### Valeur de retour

La valeur primitive de l'objet {{jsxref("Date")}}. Selon la valeur de l'argument, la méthode peut renvoyer une chaîne de caractères ou un nombre.

## Description

La méthode `[@@toPrimitive]()` de {{jsxref("Date")}} renvoie une valeur primitive qui est un nombre ou une chaîne de caractère.

Si le paramètre `hint` vaut `"string"` ou `"default"`, `[@@toPrimitive]()` tentera d'appeler la méthode {{jsxref("Object.prototype.toString()", "toString")}}, si la propriété `toString()` n'existe pas, elle tentera alors d'appeler la méthode {{jsxref("Object.prototype.valueOf()", "valueOf")}}, si cette dernière n'existe pas non plus, `[@@toPrimitive]()` lèvera une exception {{jsxref("TypeError")}}.

Si le paramètre `hint` vaut `"number"`, `[@@toPrimitive]()` tentera d'abord un appel à `valueOf()` puis ensuite un appel à `toString()`.

Le moteur JavaScript appelle la méthode `[@@toPrimitive]()` afin de convertir un objet en une valeur primitive. Il est rarement nécessaire d'appeler `[@@toPrimitive]()` explicitement dans son propre code, le moteur JavaScript l'utilisera automatiquement lorsqu'il détectera un objet là où une valeur primitive est attendue.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Symbol.toPrimitive")}}
