---
title: "Math : méthode statique cos()"
short-title: cos()
slug: Web/JavaScript/Reference/Global_Objects/Math/cos
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

La méthode statique **`Math.cos()`** retourne le cosinus d'un nombre exprimé en radians.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.cos()")}}

```js interactive-example
function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

console.log(getCircleX(1, 10));
// Sortie attendue : 5.403023058681398

console.log(getCircleX(2, 10));
// Sortie attendue : -4.161468365471424

console.log(getCircleX(Math.PI, 10));
// Sortie attendue : -10
```

## Syntaxe

```js-nolint
Math.cos(x)
```

### Paramètres

- `x`
  - : Un nombre représentant un angle en radians.

### Valeur de retour

Le cosinus de `x`, compris entre -1 et 1, inclus. Si `x` est {{JSxRef("Infinity")}}, `-Infinity` ou {{JSxRef("NaN")}}, retourne {{JSxRef("NaN")}}.

## Description

Parce que `cos()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.cos()`, plutôt que comme une méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser la méthode `Math.cos()`

```js
Math.cos(-Infinity); // NaN
Math.cos(-0); // 1
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398
Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1
Math.cos(Infinity); // NaN
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
- La méthode statique {{JSxRef("Math.sin()")}}
- La méthode statique {{JSxRef("Math.tan()")}}
- La fonction CSS {{CSSxRef("cos()")}}
