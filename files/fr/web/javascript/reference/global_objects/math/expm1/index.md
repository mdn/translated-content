---
title: "Math : méthode statique expm1()"
short-title: expm1()
slug: Web/JavaScript/Reference/Global_Objects/Math/expm1
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.expm1()`** retourne {{JSxRef("Math/E","e")}} élevé à la puissance d'un nombre, moins 1. C'est-à-dire

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚎𝚡𝚙𝚖𝟷</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.expm1}(x)} = \mathrm{e}^x - 1</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.expm1()")}}

```js interactive-example
console.log(Math.expm1(0));
// Résultat attendu : 0

console.log(Math.expm1(1));
// Résultat attendu : 1.718281828459045

console.log(Math.expm1(-1));
// Résultat attendu : -0.6321205588285577

console.log(Math.expm1(2));
// Résultat attendu : 6.38905609893065
```

## Syntaxe

```js-nolint
Math.expm1(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Un nombre représentant e<sup>x</sup> - 1, où e est [la base du logarithme naturel](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/E).

## Description

Pour des très petites valeurs de _x_, l'ajout de 1 peut réduire ou éliminer la précision. Les nombres à virgule flottante de type double utilisés en JavaScript offrent une précision d'environ 15 chiffres. 1 + 1e-15 \= 1.000000000000001, mais 1 + 1e-16 = 1.000000000000000 et donc exactement 1,0 dans ce calcul, car les chiffres au-delà du 15e sont arrondis.

<!-- prettier-ignore-start -->
Lorsque vous calculez <math><semantics><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><annotation encoding="TeX">\mathrm{e}^x</annotation></semantics></math>, où x est un nombre très proche de 0, vous devez obtenir un résultat très proche de 1 + x car&nbsp;: <math><semantics><mrow><munder><mo lspace="0em" rspace="0em">lim</mo><mrow><mi>x</mi><mo stretchy="false">→</mo><mn>0</mn></mrow></munder><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mo>=</mo><mn>1</mn></mrow><annotation encoding="TeX">\lim_{x \to 0} \frac{\mathrm{e}^x - 1}{x} = 1</annotation></semantics></math>. Si vous calculez `Math.exp(1.1111111111e-15) - 1`, vous obtenez une réponse proche de `1.1111111111e-15`. Or, comme le chiffre significatif le plus élevé du résultat de `Math.exp` est le chiffre des unités `1`, la valeur finale s'établit à `1.1102230246251565e-15`, avec seulement 3 chiffres corrects. Si vous calculez plutôt `Math.expm1(1.1111111111e-15)`, vous obtenez une réponse bien plus précise, `1.1111111111000007e-15`, avec 11 chiffres corrects de précision.
<!-- prettier-ignore-end -->

Comme `expm1()` est une méthode statique de `Math`, vous l'utilisez toujours sous la forme `Math.expm1()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.expm1()`

```js
Math.expm1(-Infinity); // -1
Math.expm1(-1); // -0.6321205588285577
Math.expm1(-0); // -0
Math.expm1(0); // 0
Math.expm1(1); // 1.718281828459045
Math.expm1(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Math.expm1` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- La propriété statique {{JSxRef("Math.E")}}
- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.log10()")}}
- La méthode statique {{JSxRef("Math.log1p()")}}
- La méthode statique {{JSxRef("Math.log2()")}}
- La méthode statique {{JSxRef("Math.pow()")}}
