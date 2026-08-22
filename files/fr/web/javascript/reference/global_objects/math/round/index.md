---
title: "Math : méthode statique round()"
short-title: round()
slug: Web/JavaScript/Reference/Global_Objects/Math/round
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.round()`** retourne la valeur d'un nombre arrondi à l'entier le plus proche.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.round()")}}

```js interactive-example
console.log(Math.round(0.9));
// Sortie attendue : 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
// Sortie attendue : 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
// Sortie attendue : -5 -5 -6
```

## Syntaxe

```js-nolint
Math.round(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La valeur de `x` arrondie à l'entier le plus proche.

## Description

Si la partie fractionnaire de l'argument est supérieure à 0,5, l'argument est arrondi à l'entier dont la valeur absolue est la plus proche. Si elle est inférieure à 0,5, l'argument est arrondi à l'entier dont la valeur absolue est la plus petite. Si la partie fractionnaire est exactement 0,5, l'argument est arrondi à l'entier suivant dans la direction de +∞.

> [!NOTE]
> Cela diffère de la fonction `round()` de nombreux langages, qui arrondissent souvent les demi-incréments _loin de zéro_, donnant un résultat différent dans le cas des nombres négatifs dont la partie fractionnaire est exactement 0,5.

`Math.round(x)` n'est pas exactement la même chose que [`Math.floor(x + 0.5)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor). Lorsque `x` est -0, ou -0,5 ≤ x < 0, `Math.round(x)` retourne -0, tandis que `Math.floor(x + 0.5)` retourne 0. Cependant, en négligeant cette différence et les erreurs de précision potentielles, `Math.round(x)` et `Math.floor(x + 0.5)` sont généralement équivalents.

Puisque `round()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.round()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'a pas de constructeur).

## Exemples

### Utiliser `Math.round()`

```js
Math.round(-Infinity); // -Infinity
Math.round(-20.51); // -21
Math.round(-20.5); // -20
Math.round(-0.1); // -0
Math.round(0); // 0
Math.round(20.49); // 20
Math.round(20.5); // 21
Math.round(42); // 42
Math.round(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{JSxRef("Number.prototype.toPrecision()")}}
- La méthode {{JSxRef("Number.prototype.toFixed()")}}
- La méthode statique {{JSxRef("Math.abs()")}}
- La méthode statique {{JSxRef("Math.ceil()")}}
- La méthode statique {{JSxRef("Math.floor()")}}
- La méthode statique {{JSxRef("Math.sign()")}}
- La méthode statique {{JSxRef("Math.trunc()")}}
