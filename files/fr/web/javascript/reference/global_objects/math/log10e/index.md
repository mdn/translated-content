---
title: "Math : propriété statique LOG10E"
short-title: LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Math.LOG10E`** représente le logarithme en base 10 de {{JSxRef("Math/E","e")}}, environ 0,434.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.LOG10E", "shorter")}}

```js interactive-example
function getLog10e() {
  return Math.LOG10E;
}

console.log(getLog10e());
// Sortie attendue : 0.4342944819032518
```

## Valeur

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙻𝙾𝙶𝟷𝟶𝙴</mi><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi mathvariant="normal">e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{Math.LOG10E} = \log_{10}(\mathrm{e}) \approx 0.434</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

Puisque `LOG10E` est une propriété statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.LOG10E` et ne pas être appelée comme propriété d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.LOG10E`

La fonction suivante retourne le logarithme en base 10 de e&nbsp;:

```js
function getLog10e() {
  return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log()")}}
- La méthode statique {{JSxRef("Math.log10()")}}
