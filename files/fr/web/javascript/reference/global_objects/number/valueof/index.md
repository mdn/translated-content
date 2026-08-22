---
title: "Number : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Number/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`valueOf()`** de {{JSxRef("Number")}} retourne la valeur de ce nombre.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Number.prototype.valueOf()")}}

```js interactive-example
const numObj = new Number(42);
console.log(typeof numObj);
// Sortie attendue : "object"

const num = numObj.valueOf();
console.log(num);
// Sortie attendue : 42

console.log(typeof num);
// Sortie attendue : "number"
```

## Syntaxe

```js-nolint
valueOf()
```

### Paramètre

Aucun.

### Valeur de retour

Un nombre représentant la valeur primitive de l'objet {{JSxRef("Number")}} défini.

## Description

Cette méthode est généralement appelée en interne par JavaScript et non explicitement dans le code web.

## Exemples

### Utiliser `valueOf()`

```js
const numObj = new Number(10);
console.log(typeof numObj); // object

const num = numObj.valueOf();
console.log(num); // 10
console.log(typeof num); // number
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.valueOf()")}}
