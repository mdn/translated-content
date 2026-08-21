---
title: "Math : méthode statique tan()"
short-title: tan()
slug: Web/JavaScript/Reference/Global_Objects/Math/tan
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

La méthode statique **`Math.tan()`** retourne la tangente d'un nombre exprimé en radians.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.tan()")}}

```js interactive-example
function getTanFromDegrees(degrees) {
  return Math.tan((degrees * Math.PI) / 180);
}

console.log(getTanFromDegrees(0));
// Sortie attendue : 0

console.log(getTanFromDegrees(45));
// Sortie attendue : 0.9999999999999999

console.log(getTanFromDegrees(90));
// Sortie attendue : 16331239353195370
```

## Syntaxe

```js-nolint
Math.tan(x)
```

### Paramètres

- `x`
  - : Un nombre qui représente un angle en radians.

### Valeur de retour

La tangente de `x`. Si `x` est {{JSxRef("Infinity")}}, `-Infinity` ou {{JSxRef("NaN")}}, retourne {{JSxRef("NaN")}}.

> [!NOTE]
> En raison de la précision des nombres à virgule flottante, il n'est pas possible d'obtenir la valeur exacte π/2, donc le résultat est toujours fini s'il n'est pas `NaN`.

## Description

Puisque `tan()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.tan()`, elle ne doit pas être utilisée comme méthode d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.tan()`

```js
Math.tan(-Infinity); // NaN
Math.tan(-0); // -0
Math.tan(0); // 0
Math.tan(1); // 1.5574077246549023
Math.tan(Math.PI / 4); // 0.9999999999999999 (Erreur de point flottant)
Math.tan(Infinity); // NaN
```

### `Math.tan()` et π/2

Il n'est pas possible de calculer `tan(π/2)` exactement.

```js
Math.tan(Math.PI / 2); // 16331239353195370
Math.tan(Math.PI / 2 + Number.EPSILON); // -6218431163823738
```

### Utiliser `Math.tan()` avec une valeur en degrés

Comme la fonction `Math.tan()` accepte des radians, mais qu'il est souvent plus facile de travailler avec des degrés, la fonction suivante accepte une valeur en degrés, la convertit en radians et retourne la tangente.

```js
function getTanDeg(deg) {
  const rad = (deg * Math.PI) / 180;
  return Math.tan(rad);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.acos()")}}
- La méthode statique {{JSxRef("Math.asin()")}}
- La méthode statique {{JSxRef("Math.atan()")}}
- La méthode statique {{JSxRef("Math.atan2()")}}
- La méthode statique {{JSxRef("Math.cos()")}}
- La méthode statique {{JSxRef("Math.sin()")}}
- La fonction CSS {{CSSxRef("tan()")}}
