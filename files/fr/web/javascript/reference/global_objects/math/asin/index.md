---
title: "Math : méthode statique asin()"
short-title: asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

La méthode statique **`Math.asin()`** retourne le sinus inverse (en radians) d'un nombre. C'est-à-dire,

<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>−</mo><mn>1</mn></mrow><mo>,</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚜𝚒𝚗</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">arcsin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>−</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mtext>&nbsp;tel que&nbsp;</mtext><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1}, 1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{l'unique } y \in \left[-\frac{\pi}{2}, \frac{\pi}{2}\right] \text{ tel que } \sin(y) = x</annotation></semantics>
</math>

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.asin()")}}

```js interactive-example
// Calculer l'angle d'un triangle rectangle en radians
function calcAngle(opposite, hypotenuse) {
  return Math.asin(opposite / hypotenuse);
}

console.log(calcAngle(6, 10));
// Sortie attendue : 0.6435011087932844

console.log(calcAngle(5, 3));
// Sortie attendue : NaN
```

## Syntaxe

```js-nolint
Math.asin(x)
```

### Paramètres

- `x`
  - : Un nombre compris entre -1 et 1, représentant la valeur du sinus de l'angle.

### Valeur de retour

L'arc sinus (angle en radians compris entre <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> et <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math>, inclus) de `x`. Si `x` est inférieur à -1 ou supérieur à 1, retourne {{JSxRef("NaN")}}.

## Description

Parce que `asin()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.asin()`, plutôt qu'en tant que méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser la méthode `Math.asin()`

```js
Math.asin(-2); // NaN
Math.asin(-1); // -1.5707963267948966 (-π/2)
Math.asin(-0); // -0
Math.asin(0); // 0
Math.asin(0.5); // 0.5235987755982989 (π/6)
Math.asin(1); // 1.5707963267948966 (π/2)
Math.asin(2); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.acos()")}}
- La méthode statique {{JSxRef("Math.atan()")}}
- La méthode statique {{JSxRef("Math.atan2()")}}
- La méthode statique {{JSxRef("Math.cos()")}}
- La méthode statique {{JSxRef("Math.sin()")}}
- La méthode statique {{JSxRef("Math.tan()")}}
- La fonction CSS {{CSSxRef("asin()")}}
