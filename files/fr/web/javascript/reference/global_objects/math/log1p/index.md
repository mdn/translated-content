---
title: "Math : méthode statique log1p()"
short-title: log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La fonction **`Math.log1p()`** retourne le logarithme népérien (en base {{JSxRef("Math/E","e")}}) d'un nombre +1, donné par la formule&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1,\;\mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.log1p()")}}

```js interactive-example
console.log(Math.log1p(1));
// Sortie attendue : 0.6931471805599453

console.log(Math.log1p(0));
// Sortie attendue : 0

console.log(Math.log1p(-1));
// Sortie attendue : -Infinity

console.log(Math.log1p(-2));
// Sortie attendue : NaN
```

## Syntaxe

```js-nolint
Math.log1p(x)
```

### Paramètres

- `x`
  - : Un nombre supérieur ou égal à -1.

### Valeur de retour

La valeur du logarithme naturel (en base [e](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) de `x + 1`. Si `x` est égal à `-1`, [`-Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY) est retourné. Si `x` est inférieur à `-1`, {{JSxRef("NaN")}} est retourné.

## Description

Pour des très petites valeurs de _x_, l'ajout de 1 peut réduire, voire éliminer, la précision. Les nombres à virgule flottante de type double utilisés en JS offrent une précision d'environ 15 chiffres. 1 + 1e-15 = 1,000000000000001, mais 1 + 1e-16 = 1,000000000000000 et donc exactement 1,0 dans ce calcul, car les chiffres au-delà du 15e sont arrondis.

<!-- prettier-ignore-start -->
Lorsque vous calculez log(1 + _x_), où _x_ est un petit nombre positif, vous devez obtenir un résultat très proche de _x_ car&nbsp;: <math><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow ><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\log(1+x)}{x} = 1</annotation></semantics></math>. Si vous calculez `Math.log(1 + 1.1111111111e-15)`, vous obtenez une réponse proche de `1.1111111111e-15`. Au lieu de cela, vous finissez par calculer le logarithme de `1.00000000000000111022` (l'arrondi se fait en binaire, ce qui donne parfois des résultats peu esthétiques), et obtenez le résultat 1,11022…e-15, avec seulement 3 chiffres corrects. Si vous calculez plutôt `Math.log1p(1.1111111111e-15)`, vous obtenez une réponse bien plus précise, `1.1111111110999995e-15`, avec 15 chiffres corrects de précision (en réalité 16 dans ce cas).
<!-- prettier-ignore-end -->

Si la valeur de `x` est inférieure à -1, la valeur retournée est toujours {{JSxRef("NaN")}}.

Puisque `log1p()` est une méthode statique de `Math`, vous l'utilisez toujours sous la forme `Math.log1p()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.log1p()`

```js
Math.log1p(-2); // NaN
Math.log1p(-1); // -Infinity
Math.log1p(-0); // -0
Math.log1p(0); // 0
Math.log1p(1); // 0.6931471805599453
Math.log1p(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.log1p` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [La prothèse d'émulation es-shims de `Math.log1p` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.log1p)
- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.expm1()")}}
- La méthode statique {{JSxRef("Math.log10()")}}
- La méthode statique {{JSxRef("Math.log2()")}}
- La méthode statique {{JSxRef("Math.pow()")}}
