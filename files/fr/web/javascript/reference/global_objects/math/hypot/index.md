---
title: "Math : méthode statique hypot()"
short-title: hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.hypot()`** retourne la racine carrée de la somme des carrés de ses arguments. Autrement dit,

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mstyle mathvariant="monospace"><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚑𝚢𝚙𝚘𝚝</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v_1, v_2, \dots, v_n)} = \sqrt{\sum_{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.hypot()")}}

```js interactive-example
console.log(Math.hypot(3, 4));
// Résultat attendu : 5

console.log(Math.hypot(5, 12));
// Résultat attendu : 13

console.log(Math.hypot(3, 4, 5));
// Résultat attendu : 7.0710678118654755

console.log(Math.hypot(-5));
// Résultat attendu : 5
```

## Syntaxe

```js-nolint
Math.hypot()
Math.hypot(value1)
Math.hypot(value1, value2)
Math.hypot(value1, value2, /* …, */ valueN)
```

### Paramètres

- `value1`, …, `valueN`
  - : Des nombres.

### Valeur de retour

La racine carrée de la somme des carrés des arguments fournis. Retourne {{JSxRef("Infinity")}} si l'un des arguments est égal à ±infini. Sinon, si au moins un des arguments est ou est converti en {{JSxRef("NaN")}}, retourne {{JSxRef("NaN")}}. Retourne `0` si aucun argument n'est fourni ou si tous les arguments sont ±0.

## Description

Calculer l'hypoténuse d'un triangle rectangle, ou la grandeur d'un nombre complexe, utilise la formule `Math.sqrt(v1*v1 + v2*v2)`, où v1 et v2 sont les longueurs des jambes du triangle, ou les composantes complexes d'un nombre complexe réel. La distance correspondante dans 2 dimensions ou plus peut être calculée en ajoutant plus de carrés sous la racine carrée&nbsp;: `Math.sqrt(v1*v1 + v2*v2 + v3*v3 + v4*v4)`.

Cette fonction facilite et accélère ce calcul&nbsp;; vous pouvez appeler `Math.hypot(v1, v2)` ou `Math.hypot(v1, /* …, */, vN)`.

`Math.hypot` permet également d'éviter les problèmes de dépassement/sous-dépassement lorsque la valeur absolue de vos nombres est très élevée. Le plus grand nombre que vous pouvez représenter en JS est {{JSxRef("Number.MAX_VALUE")}}, soit environ 10<sup>308</sup>. Si vos nombres sont supérieurs à environ 10<sup>154</sup>, leur carré donne l'infini. Par exemple, `Math.sqrt(1e200*1e200 + 1e200*1e200) = Infinity`. Si vous utilisez `hypot()` à la place, vous obtenez une meilleure réponse&nbsp;: `Math.hypot(1e200, 1e200) = 1.4142...e+200`. Cela vaut également pour les très petits nombres. `Math.sqrt(1e-200*1e-200 + 1e-200*1e-200) = 0`, mais `Math.hypot(1e-200, 1e-200) = 1.4142...e-200`.

Avec un seul argument, `Math.hypot()` est équivalent à {{JSxRef("Math.abs()")}}. [`Math.hypot.length`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/length) est égal à 2, ce qui indique de manière indirecte qu'elle est conçue pour gérer au moins deux paramètres.

Puisque `hypot()` est une méthode statique de `Math`, vous l'utilisez toujours sous la forme `Math.hypot()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.hypot()`

```js
Math.hypot(3, 4); // 5
Math.hypot(3, 4, 5); // 7.0710678118654755
Math.hypot(); // 0
Math.hypot(NaN); // NaN
Math.hypot(NaN, Infinity); // Infinity
Math.hypot(3, 4, "toto"); // NaN, puisque +'toto' => NaN
Math.hypot(3, 4, "5"); // 7.0710678118654755, puisque +'5' => 5
Math.hypot(-3); // 3, de la même manière que Math.abs(-3)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.hypot` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- La méthode statique {{JSxRef("Math.abs()")}}
- La méthode statique {{JSxRef("Math.pow()")}}
- La méthode statique {{JSxRef("Math.sqrt()")}}
