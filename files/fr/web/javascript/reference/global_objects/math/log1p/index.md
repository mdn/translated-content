---
title: Math.log1p()
slug: Web/JavaScript/Reference/Global_Objects/Math/log1p
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La fonction **`Math.log1p()`** renvoie le logarithme népérien (en base {{jsxref("Math/E","e")}}) d'un nombre +1, donné par la formule&nbsp;:

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mo>−</mo><mn>1</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐𝟷𝚙</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><annotation encoding="TeX">\forall x > -1,\;\mathtt{\operatorname{Math.log1p}(x)} = \ln(1 + x)</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.log1p()")}}

```js interactive-example
console.log(Math.log1p(1));
// Résultat attendu : 0.6931471805599453

console.log(Math.log1p(0));
// Résultat attendu : 0

console.log(Math.log1p(-1));
// Résultat attendu : -Infinity

console.log(Math.log1p(-2));
// Résultat attendu : NaN
```

## Syntaxe

```js-nolint
Math.log1p(x)
```

### Paramètres

- `x`
  - : Un nombre supérieur ou égal à -1.

### Valeur de retour

La valeur du logarithme naturel (en base [e](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/E)) de `x + 1`. Si `x` est égal à `-1`, [`-Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY) est renvoyée. Si `x` est inférieur à `-1`, {{jsxref("NaN")}} est renvoyée.

## Description

Pour une très petite valeur de _x_, ajouter 1 peut réduire ou éliminer la precision. Les nombre flottants à double précision utilisés en JS une précision d'environ 15 décimales. 1 + 1e-15 \= 1.000000000000001, mais 1 + 1e-16 = 1.000000000000000 et donc exactement 1.0 dans cette arithmétique, car les chiffres au-delà de 15 sont arrondis.

<!-- prettier-ignore-start -->
Quand on calcule log(1 + _x_), où _x_ est un petit nombre positif, on devrait obtenir une réponse très proche de _x_ car: <math><semantics><mrow><munder><mo movablelimits="true" form="prefix">lim</mo><mrow ><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>log</mi><mo>⁡</mo><mo stretchy="false">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy="false">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\log(1+x)}{x} = 1</annotation></semantics></math>.
<!-- prettier-ignore-end -->

Si on calcule `Math.log(1 + 1.1111111111e-15)`, on devrait obtenir une réponse proche de `1.11111111e-15`. Au lieu de cela, on obtient le logarithme de `1.00000000000000111022` (l'arrondi se fait en binaire, ce qui donne parfois de piètres résultats), et on obtient la réponse 1.11022...e-15, avec seulement 3 chiffres corrects. Si on calcule plutôt `Math.log1p(1.1111111111e-15)`, on obtient une réponse beaucoup plus précise, `1.11111110999995e-15`, avec une précision de 15 chiffres (en fait 16 dans ce cas).

Si `x` est strictement inférieur à -1, la valeur renvoyée est {{jsxref("NaN")}}.

`log1p` étant une méthode statique de `Math`, il faut utiliser `Math.log1p()` et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

## Exemple

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

- Prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `Math.log1p()`:
  - [dans _core-js_ <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
  - [de _es-shims_ <sup>(angl.)</sup>](https://www.npmjs.com/package/math.log1p)
- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.expm1()")}}
- {{jsxref("Math.log10()")}}
- {{jsxref("Math.log2()")}}
- {{jsxref("Math.pow()")}}
