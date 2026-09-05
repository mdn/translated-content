---
title: "Math : méthode statique log10()"
short-title: log10()
slug: Web/JavaScript/Reference/Global_Objects/Math/log10
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.log10()`** retourne le logarithme de base 10 d'un nombre. C'est-à-dire

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝟶</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;tel que&nbsp;</mtext><msup><mn>10</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log10}(x)} = \log_{10}(x) = \text{l'unique } y \text{ tel que } 10^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.log10()")}}

```js interactive-example
console.log(Math.log10(100000));
// Résultat attendu : 5

console.log(Math.log10(2));
// Résultat attendu : 0.3010299956639812

console.log(Math.log10(1));
// Résultat attendu : 0

console.log(Math.log10(0));
// Résultat attendu : -Infinity
```

## Syntaxe

```js-nolint
Math.log10(x)
```

### Paramètres

- `x`
  - : Un nombre supérieur ou égal à 0.

### Valeur de retour

Le logarithme en base 10 de `x`. Si `x < 0`, retourne {{JSxRef("NaN")}}.

## Description

Puisque `log10()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.log10()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

Cette fonction est équivalente à `Math.log(x) / Math.log(10)`. Pour `log10(e)`, utilisez la constante {{JSxRef("Math.LOG10E")}}, qui est 1 / {{JSxRef("Math.LN10")}}.

## Exemples

### Utiliser `Math.log10()`

```js
Math.log10(-2); // NaN
Math.log10(-0); // -Infinity
Math.log10(0); // -Infinity
Math.log10(1); // 0
Math.log10(2); // 0.3010299956639812
Math.log10(100000); // 5
Math.log10(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.log10` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [La prothèse d'émulation es-shims de `Math.log10` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.log10)
- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.log1p()")}}
- La méthode statique {{JSxRef("Math.log2()")}}
- La méthode statique {{JSxRef("Math.pow()")}}
