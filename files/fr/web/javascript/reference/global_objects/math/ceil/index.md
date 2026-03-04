---
title: "Math : méthode statique ceil()"
short-title: ceil()
slug: Web/JavaScript/Reference/Global_Objects/Math/ceil
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.ceil()`** arrondit toujours vers le haut et retourne le plus petit entier supérieur ou égal à un nombre donné.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.ceil()")}}

```js interactive-example
console.log(Math.ceil(0.95));
// Sortie attendue : 1

console.log(Math.ceil(4));
// Sortie attendue : 4

console.log(Math.ceil(7.004));
// Sortie attendue : 8

console.log(Math.ceil(-7.004));
// Sortie attendue : -7
```

## Syntaxe

```js-nolint
Math.ceil(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le plus petit entier supérieur ou égal à `x`. C'est la même valeur que [`-Math.floor(-x)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor).

## Description

Parce que `ceil()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.ceil()`, et non comme méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser la méthode `Math.ceil()`

```js
Math.ceil(-Infinity); // -Infinity
Math.ceil(-7.004); // -7
Math.ceil(-4); // -4
Math.ceil(-0.95); // -0
Math.ceil(-0); // -0
Math.ceil(0); // 0
Math.ceil(0.95); // 1
Math.ceil(4); // 4
Math.ceil(7.004); // 8
Math.ceil(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.abs()")}}
- La méthode statique {{JSxRef("Math.floor()")}}
- La méthode statique {{JSxRef("Math.round()")}}
- La méthode statique {{JSxRef("Math.sign()")}}
- La méthode statique {{JSxRef("Math.trunc()")}}
