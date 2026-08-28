---
title: "Math : méthode statique exp()"
short-title: exp()
slug: Web/JavaScript/Reference/Global_Objects/Math/exp
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.exp()`** retourne {{JSxRef("Math/E","e")}} élevé à la puissance d'un nombre. C'est-à-dire

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.exp}(x)} = \mathrm{e}^x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.exp()")}}

```js interactive-example
console.log(Math.exp(0));
// Résultat attendu : 1

console.log(Math.exp(1));
// Résultat attendu : 2.718281828459 (approximativement)

console.log(Math.exp(-1));
// Résultat attendu : 0.36787944117144233

console.log(Math.exp(2));
// Résultat attendu : 7.38905609893065
```

## Syntaxe

```js-nolint
Math.exp(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Un nombre positif représentant e<sup>x</sup>, où e est [la base des logarithmes naturels](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/E).

## Description

Puisque `exp()` est une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.exp()`, et non pas comme méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

Faites attention au fait que `e` à la puissance d'un nombre très proche de 0 est très proche de 1 et souffre d'une perte de précision. Dans ce cas, vous pouvez utiliser {{JSxRef("Math.expm1")}} à la place, et obtenir une partie fractionnaire de la réponse avec une précision beaucoup plus élevée.

## Exemples

### Utiliser `Math.exp()`

```js
Math.exp(-Infinity); // 0
Math.exp(-1); // 0.36787944117144233
Math.exp(0); // 1
Math.exp(1); // 2.718281828459045
Math.exp(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété statique {{JSxRef("Math.E")}}
- La méthode statique {{JSxRef("Math.expm1()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.log10()")}}
- La méthode statique {{JSxRef("Math.log1p()")}}
- La méthode statique {{JSxRef("Math.log2()")}}
- La méthode statique {{JSxRef("Math.pow()")}}
