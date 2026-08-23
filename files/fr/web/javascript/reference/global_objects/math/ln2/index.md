---
title: "Math : propriété statique LN2"
short-title: LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Math.LN2`** représente le logarithme naturel de 2, environ 0,693&nbsp;:

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.LN2", "shorter")}}

```js interactive-example
function getNatLog2() {
  return Math.LN2;
}

console.log(getNatLog2());
// Sortie attendue : 0.6931471805599453
```

## Valeur

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙽𝟸</mi><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0.693</mn></mrow><annotation encoding="TeX">\mathtt{Math.LN2} = \ln(2) \approx 0.693</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

`LN2` est une propriété statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.LN2`, et non pas être utilisée comme la propriété d'un objet qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.LN2`

La fonction suivante retourne le logarithme naturel de 2&nbsp;:

```js
function getNatLog2() {
  return Math.LN2;
}

getNatLog2(); // 0.6931471805599453
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.log2()")}}
