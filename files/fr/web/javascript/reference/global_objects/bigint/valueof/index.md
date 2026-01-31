---
title: "BigInt : méthode valueOf()"
short-title: valueOf()
slug: Web/JavaScript/Reference/Global_Objects/BigInt/valueOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`valueOf()`** des valeurs {{JSxRef("BigInt")}} retourne la valeur primitive encapsulée dans un objet {{JSxRef("BigInt")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: BigInt.prototype.valueOf()", "shorter")}}

```js interactive-example
console.log(typeof Object(1n));
// Sortie attendue : "object"

console.log(typeof Object(1n).valueOf());
// Sortie attendue : "bigint"
```

## Syntaxe

```js-nolint
valueOf()
```

### Paramètres

Aucun.

### Valeur de retour

Un `BigInt` représentant la valeur primitive de l'objet {{JSxRef("BigInt")}} défini.

## Exemples

### Utiliser `valueOf()`

```js
typeof Object(1n); // object
typeof Object(1n).valueOf(); // bigint
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("BigInt.prototype.toString()")}}
