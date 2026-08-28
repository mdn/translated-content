---
title: "Math : propriété statique PI"
short-title: PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Math.PI`** représente le ratio entre le périmètre d'un cercle et son diamètre, environ 3,14159.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.PI")}}

```js interactive-example
function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

console.log(Math.PI);
// Résultat attendu : 3.141592653589793

console.log(calculateCircumference(10));
// Résultat attendu : 62.83185307179586
```

## Valeur

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝙿𝙸</mi><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{Math.PI} = \pi \approx 3.14159</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

Puisque `PI` est une propriété statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.PI` plutôt que d'être appelée comme la propriété d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.PI`

La fonction suivante utilise `Math.PI` afin de calculer le périmètre d'un cercle à partir du rayon passé en argument.

```js
function calculPérimètre(rayon) {
  return 2 * Math.PI * rayon;
}

calculPérimètre(1); // 6.283185307179586
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Math")}}
