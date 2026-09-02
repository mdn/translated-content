---
title: "Math : propriété statique SQRT1_2"
short-title: SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

La propriété statique **`Math.SQRT1_2`** représente la racine carrée de 1/2, qui vaut environ 0,707.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.SQRT1_2", "shorter")}}

```js interactive-example
function getRoot1Over2() {
  return Math.SQRT1_2;
}

console.log(getRoot1Over2());
// Résultat attendu : 0.7071067811865476
```

## Valeur

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mi>𝙼𝚊𝚝𝚑.𝚂𝚀𝚁𝚃𝟷_𝟸</mi><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>0.707</mn></mrow><annotation encoding="TeX">\mathtt{Math.SQRT1_2} = \sqrt{\frac{1}{2}} \approx 0.707</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{js_property_attributes(0, 0, 0)}}

## Description

`Math.SQRT1_2` est une constante et un équivalent à {{JSxRef("Math/sqrt", "Math.sqrt(0.5)")}}, qui est plus performant.

Puisque `SQRT1_2` est une propriété statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.SQRT1_2`. Elle ne doit pas être obtenue à partir d'un autre objet qui a été créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser `Math.SQRT1_2`

La fonction suivante calcule la longueur du côté d'un carré à partir de la longueur de sa diagonale&nbsp;:

```js
function getSquareSideLength(diagonalLength) {
  return diagonalLength * Math.SQRT1_2;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.pow()")}}
- La méthode statique {{JSxRef("Math.sqrt()")}}
