---
title: Boolean.prototype.valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
---

{{JSRef}}

La méthode **`valueOf()`** renvoie la valeur primitive de l'objet {{jsxref("Boolean")}}.

{{EmbedInteractiveExample("pages/js/boolean-valueof.html")}}

## Syntaxe

```js
bool.valueOf();
```

### Valeur de retour

La valeur primitive associée à l'objet {{jsxref("Boolean")}}.

## Description

La méthode `valueOf()` de {{jsxref("Boolean")}} renvoie la valeur primitive d'un objet `Boolean`, ou d'un littéral booléen.

Cette méthode est généralement utilisée de façon interne pas le moteur JavaScript et n'est pas utilisée explicitement dans les scripts.

## Exemples

### Utiliser `valueOf()`

```js
var x = new Boolean();
var maVar = x.valueOf(); // assigne false à maVar
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.valueOf()")}}
