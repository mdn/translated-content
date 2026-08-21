---
title: "Math : méthode statique log2()"
short-title: log2()
slug: Web/JavaScript/Reference/Global_Objects/Math/log2
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.log2()`** retourne le logarithme en base 2 d'un nombre. Autrement dit

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟸</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;tel que&nbsp;</mtext><msup><mn>2</mn><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log2}(x)} = \log_2(x) = \text{l'unique } y \text{ tel que } 2^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.log2()")}}

```js interactive-example
console.log(Math.log2(3));
// Sortie attendue : 1.584962500721156

console.log(Math.log2(2));
// Sortie attendue : 1

console.log(Math.log2(1));
// Sortie attendue : 0

console.log(Math.log2(0));
// Sortie attendue : -Infinity
```

## Syntaxe

```js-nolint
Math.log2(x)
```

### Paramètres

- `x`
  - : Un nombre supérieur ou égal à 0.

### Valeur de retour

Le logarithme en base 2 de `x`. Si `x < 0`, retourne {{JSxRef("NaN")}}.

## Description

Puisque `log2()` est une méthode statique de `Math`, vous l'utilisez toujours sous la forme `Math.log2()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

Cette fonction est l'équivalent de `Math.log(x) / Math.log(2)`. Pour `log2(e)`, utilisez la constante {{JSxRef("Math.LOG2E")}}, qui est 1 / {{JSxRef("Math.LN2")}}.

## Exemples

### Utiliser `Math.log2()`

```js
Math.log2(-2); // NaN
Math.log2(-0); // -Infinity
Math.log2(0); // -Infinity
Math.log2(1); // 0
Math.log2(2); // 1
Math.log2(3); // 1.584962500721156
Math.log2(1024); // 10
Math.log2(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.log2` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.log10()")}}
- La méthode statique {{JSxRef("Math.log1p()")}}
- La méthode statique {{JSxRef("Math.pow()")}}
