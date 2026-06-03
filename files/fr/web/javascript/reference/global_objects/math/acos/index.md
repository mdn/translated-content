---
title: "Math : méthode statique acos()"
short-title: acos()
slug: Web/JavaScript/Reference/Global_Objects/Math/acos
l10n:
  sourceCommit: 0fb5a7e4cc045ba0b1dc453624f196309d9bea10
---

La méthode statique **`Math.acos()`** retourne le cosinus inverse (en radians) d'un nombre. C'est-à-dire,

<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>−</mo><mn>1</mn></mrow><mo>,</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚊𝚌𝚘𝚜</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">arccos</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mo>∊</mo><mo stretchy="false">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy="false">]</mo><mtext>&nbsp;tel que&nbsp;</mtext><mo lspace="0em" rspace="0em">cos</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1}, 1],\;\mathtt{\operatorname{Math.acos}(x)} = \arccos(x) = \text{l'unique } y \in [0, \pi] \text{ tel que } \cos(y) = x</annotation></semantics>
</math>

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.acos()")}}

```js interactive-example
// Calculer l'angle d'un triangle rectangle en radians
function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
}

console.log(calcAngle(8, 10));
// Sortie attendue : 0.6435011087932843

console.log(calcAngle(5, 3));
// Sortie attendue : NaN
```

## Syntaxe

```js-nolint
Math.acos(x)
```

### Paramètres

- `x`
  - : Un nombre compris entre -1 et 1 inclus, représentant la valeur du cosinus de l'angle.

### Valeur de retour

Le cosinus inverse (angle en radians entre 0 et π inclus) de `x`. Si `x` est inférieur à -1 ou supérieur à 1, retourne {{JSxRef("NaN")}}.

## Description

Parce que `acos()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.acos()`, plutôt qu'en tant que méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemples

### Utiliser la méthode `Math.acos()`

```js
Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793 (π)
Math.acos(0); // 1.5707963267948966 (π/2)
Math.acos(0.5); // 1.0471975511965979 (π/3)
Math.acos(1); // 0
Math.acos(2); // NaN
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.asin()")}}
- La méthode statique {{JSxRef("Math.atan()")}}
- La méthode statique {{JSxRef("Math.atan2()")}}
- La méthode statique {{JSxRef("Math.cos()")}}
- La méthode statique {{JSxRef("Math.sin()")}}
- La méthode statique {{JSxRef("Math.tan()")}}
- La fonction CSS {{CSSxRef("acos()")}}
