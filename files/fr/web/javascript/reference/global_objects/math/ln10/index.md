---
title: "Math : propriété statique LN10"
short-title: LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Math.LN10`** représente le logarithme naturel de 10, environ 2.303.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.LN10", "shorter")}}

```js interactive-example
function getNatLog10() {
  return Math.LN10;
}

console.log(getNatLog10());
// Sortie attendue : 2.302585092994046
```

## Valeur

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟷𝟶</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2.303</mn></mrow><annotation encoding="TeX">\mathtt{Math.LN10} = \ln(10) \approx 2.303</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

`LN10` est une propriété statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.LN10`, et ne pas être appelée comme propriété d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.LN10`

La fonction suivante retourne le logarithme naturel de 10&nbsp;:

```js
function getNatLog10() {
  return Math.LN10;
}

getNatLog10(); // 2.302585092994046
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.log10()")}}
