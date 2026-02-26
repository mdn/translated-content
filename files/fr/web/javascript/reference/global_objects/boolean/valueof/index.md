---
title: "Boolean : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`valueOf()`** des valeurs {{JSxRef("Boolean")}} retourne la valeur primitive d'un objet {{JSxRef("Boolean")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Boolean.prototype.valueOf()")}}

```js interactive-example
const x = new Boolean();

console.log(x.valueOf());
// Sortie attendue : false

const y = new Boolean("Mozilla");

console.log(y.valueOf());
// Sortie attendue : true
```

## Syntaxe

```js-nolint
valueOf()
```

### Paramètres

Aucun.

### Valeur de retour

La valeur primitive associée à l'objet {{JSxRef("Boolean")}}.

## Description

La méthode `valueOf()` de {{JSxRef("Boolean")}} retourne la valeur primitive d'un objet `Boolean`, ou d'un littéral booléen.

Cette méthode est généralement utilisée de façon interne pas le moteur JavaScript et n'est pas utilisée explicitement dans les scripts.

## Exemples

### Utiliser `valueOf()`

```js
const x = new Boolean();
const myVar = x.valueOf(); // assigne false à myVar
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Object.prototype.valueOf()")}}
