---
title: "Math : méthode statique log()"
short-title: log()
slug: Web/JavaScript/Reference/Global_Objects/Math/log
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.log()`** retourne le logarithme naturel (base {{JSxRef("Math/E","e")}}) d'un nombre. C'est-à-dire

<!-- prettier-ignore-start -->
<math display="block">
  <semantics><mrow><mo>∀</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width="0.2777777777777778em"></mspace><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚕𝚘𝚐</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;tel que&nbsp;</mtext><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x > 0,\;\mathtt{\operatorname{Math.log}(x)} = \ln(x) = \text{the unique } y \text{ such that } e^y = x</annotation></semantics>
</math>
<!-- prettier-ignore-end -->

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.log()")}}

```js interactive-example
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

// 2 x 2 x 2 = 8
console.log(getBaseLog(2, 8));
// Résultat attendu : 3

// 5 x 5 x 5 x 5 = 625
console.log(getBaseLog(5, 625));
// Résultat attendu : 4
```

## Syntaxe

```js-nolint
Math.log(x)
```

### Paramètres

- `x`
  - : Un nombre supérieur ou égal à 0.

### Valeur de retour

Le logarithme naturel (base {{JSxRef("Math/E","e")}}) de `x`. Si `x` est ±0, retourne [`-Infinity`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY). Si `x < 0`, retourne {{JSxRef("NaN")}}.

## Description

Parce que `log()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.log()`, plutôt que comme une méthode d'un objet `Math` que vous avez créé (`Math` n'est pas un constructeur).

Si vous avez besoin du logarithme naturel de 2 ou 10, utilisez les constantes {{JSxRef("Math.LN2")}} ou {{JSxRef("Math.LN10")}}. Si vous avez besoin d'un logarithme en base 2 ou 10, utilisez {{JSxRef("Math.log2()")}} ou {{JSxRef("Math.log10()")}}. Si vous avez besoin d'un logarithme dans d'autres bases, utilisez `Math.log(x) / Math.log(otherBase)` comme dans l'exemple ci-dessous&nbsp;; vous pouvez vouloir pré-calculer `1 / Math.log(otherBase)` puisque la multiplication dans `Math.log(x) * constant` est beaucoup plus rapide.

Attention aux nombres positifs très proches de 1 qui peuvent subir une perte de précision et rendre leur logarithme naturel moins précis. Dans ce cas, vous pouvez utiliser {{JSxRef("Math.log1p")}} à la place.

## Exemples

### Utiliser `Math.log()`

```js
Math.log(-1); // NaN
Math.log(-0); // -Infinity
Math.log(0); // -Infinity
Math.log(1); // 0
Math.log(10); // 2.302585092994046
Math.log(Infinity); // Infinity
```

### Utiliser `Math.log()` pour construire un logarithme sur une autre base

La fonction suivante retourne le logarithme de `y` de base `x` (c'est-à-dire <math><semantics><mrow><msub><mo>log</mo><mi>x</mi></msub><mi>y</mi></mrow><annotation encoding="TeX">\log_x y</annotation></semantics></math>)&nbsp;:

```js
function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}
```

Si vous exécutez `getBaseLog(10, 1000)`, la fonction retourne `2.9999999999999996` en raison de l'arrondi en virgule flottante, mais ce résultat reste très proche de la réponse réelle, qui est 3.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode statique {{JSxRef("Math.exp()")}}
- La méthode statique {{JSxRef("Math.log1p()")}}
- La méthode statique {{JSxRef("Math.log10()")}}
- La méthode statique {{JSxRef("Math.log2()")}}
- La méthode statique {{JSxRef("Math.pow()")}}
