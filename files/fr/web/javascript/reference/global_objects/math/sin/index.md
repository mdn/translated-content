---
title: "Math : méthode statique sin()"
short-title: sin()
slug: Web/JavaScript/Reference/Global_Objects/Math/sin
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

La méthode statique **`Math.sin()`** retourne le sinus d'un nombre en radians.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.sin()")}}

```js interactive-example
function getCircleY(radians, radius) {
  return Math.sin(radians) * radius;
}

console.log(getCircleY(1, 10));
// Résultat attendu : 8.414709848078965

console.log(getCircleY(2, 10));
// Résultat attendu : 9.092974268256818

console.log(getCircleY(Math.PI, 10));
// Résultat attendu : 1.2246467991473533e-15
```

## Syntaxe

```js-nolint
Math.sin(x)
```

### Paramètres

- `x`
  - : Un nombre qui exprime un angle en radians.

### Valeur de retour

Le sinus de `x`, compris entre -1 et 1 inclus. Si `x` est {{JSxRef("Infinity")}}, `-Infinity` ou {{JSxRef("NaN")}}, retourne {{JSxRef("NaN")}}.

## Description

Puisque `sin()` est une méthode statique de `Math`, elle doit être utilisée avec la syntaxe `Math.sin()`, elle ne doit pas être utilisée comme une méthode d'un objet qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.sin()`

```js
Math.sin(-Infinity); // NaN
Math.sin(-0); // -0
Math.sin(0); // 0
Math.sin(1); // 0.8414709848078965
Math.sin(Math.PI / 2); // 1
Math.sin(Infinity); // NaN
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
- La méthode statique {{JSxRef("Math.tan()")}}
- La fonction CSS {{CSSxRef("sin()")}}
