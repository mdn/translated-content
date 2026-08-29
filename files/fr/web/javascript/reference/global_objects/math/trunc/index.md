---
title: "Math : méthode statique trunc()"
short-title: trunc()
slug: Web/JavaScript/Reference/Global_Objects/Math/trunc
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.trunc()`** retourne la partie entière d'un nombre en retirant toute partie fractionnaire.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.trunc()")}}

```js interactive-example
console.log(Math.trunc(13.37));
// Résultat attendu : 13

console.log(Math.trunc(42.84));
// Résultat attendu : 42

console.log(Math.trunc(0.123));
// Résultat attendu : 0

console.log(Math.trunc(-0.123));
// Résultat attendu : -0
```

## Syntaxe

```js-nolint
Math.trunc(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La partie entière de `x`.

## Description

La façon dont `Math.trunc()` fonctionne est plus simple que les trois autres méthodes de `Math`&nbsp;: {{JSxRef("Math.floor()")}}, {{JSxRef("Math.ceil()")}} et {{JSxRef("Math.round()")}}&nbsp;; elle _tronque_ (supprime) le point et les chiffres à sa droite, que l'argument soit un nombre positif ou négatif.

Puisque `trunc()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.trunc()`, elle ne doit pas être utilisée comme méthode d'un autre objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.trunc()`

```js
Math.trunc(-Infinity); // -Infinity
Math.trunc("-1.123"); // -1
Math.trunc(-0.123); // -0
Math.trunc(-0); // -0
Math.trunc(0); // 0
Math.trunc(0.123); // 0
Math.trunc(13.37); // 13
Math.trunc(42.84); // 42
Math.trunc(Infinity); // Infinity
```

### Utiliser des opérations bit à bit pour tronquer les nombres

> [!WARNING]
> Ce n'est pas une prothèse d'émulation pour `Math.trunc()` en raison de cas limites non négligeables.

Les opérations bit à bit convertissent leurs opérandes en entiers 32 bits, ce dont les gens ont historiquement profité pour tronquer les nombres à virgule flottante. Les techniques courantes incluent&nbsp;:

```js
const original = 3.14;
const truncated1 = ~~original; // Double négation
const truncated2 = original & -1; // Bit à bit AND avec -1
const truncated3 = original | 0; // Bit à bit OR avec 0
const truncated4 = original ^ 0; // Bit à bit XOR avec 0
const truncated5 = original >> 0; // Bit à bit décalé à droite avec 0
```

Attention au fait que c'est essentiellement `toInt32`, ce qui n'est pas la même chose que `Math.trunc`. Lorsque la valeur ne satisfait pas -2<sup>31</sup> - 1 < `value` < 2<sup>31</sup> (-2147483649 < `value` < 2147483648), la conversion provoque un dépassement.

```js
const a = ~~2147483648; // -2147483648
const b = ~~-2147483649; // 2147483647
const c = ~~4294967296; // 0
```

Utilisez uniquement `~~` comme substitution de `Math.trunc()` lorsque vous êtes sûr que la plage d'entrée se situe dans la plage des entiers 32 bits.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.trunc` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- La méthode statique {{JSxRef("Math.abs()")}}
- La méthode statique {{JSxRef("Math.ceil()")}}
- La méthode statique {{JSxRef("Math.floor()")}}
- La méthode statique {{JSxRef("Math.round()")}}
- La méthode statique {{JSxRef("Math.sign()")}}
