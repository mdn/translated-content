---
title: "Math : propriété statique SQRT2"
short-title: SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La propriété statique **`Math.SQRT2`** représente la racine carrée de 2, qui vaut environ 1,414.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.SQRT2", "shorter")}}

```js interactive-example
function getRoot2() {
  return Math.SQRT2;
}

console.log(getRoot2());
// Résultat attendu : 1.4142135623730951
```

## Valeur

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟸</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1.414</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT2} = \sqrt{2} \approx 1.414</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

`Math.SQRT2` est une constante et un équivalent de {{JSxRef("Math/sqrt", "Math.sqrt(2)")}}, qui est plus performant.

Puisque `SQRT2` est une propriété statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.SQRT2`. Elle ne doit pas être obtenue à partir d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.SQRT2`

La fonction suivante retourne la racine carrée de 2&nbsp;:

```js
function getRoot2() {
  return Math.SQRT2;
}

getRoot2(); // 1.4142135623730951
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.pow()")}}
- La méthode statique {{JSxRef("Math.sqrt()")}}
