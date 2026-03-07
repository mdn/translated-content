---
title: "Math : méthode statique cosh()"
short-title: cosh()
slug: Web/JavaScript/Reference/Global_Objects/Math/cosh
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.cosh()`** retourne le cosinus hyperbolique d'un nombre. C'est-à-dire,

<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚘𝚜𝚑</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mo lspace="0em" rspace="0em">cosh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant="normal">e</mi><mi>x</mi></msup><mo>+</mo><msup><mi mathvariant="normal">e</mi><mrow><mo>−</mo><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cosh}(x)} = \cosh(x) = \frac{\mathrm{e}^x + \mathrm{e}^{-x}}{2}</annotation></semantics>
</math>

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.cosh()")}}

```js interactive-example
console.log(Math.cosh(0));
// Sortie attendue : 1

console.log(Math.cosh(1));
// Sortie attendue : 1.543080634815244 (approximativement)

console.log(Math.cosh(-1));
// Sortie attendue : 1.543080634815244 (approximativement)

console.log(Math.cosh(2));
// Sortie attendue : 3.7621956910836314
```

## Syntaxe

```js-nolint
Math.cosh(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

Le cosinus hyperbolique de `x`.

## Description

Parce que `cosh()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.cosh()`, plutôt que comme une méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser la méthode `Math.cosh()`

```js
Math.cosh(-Infinity); // Infinity
Math.cosh(-1); // 1.5430806348152437
Math.cosh(-0); // 1
Math.cosh(0); // 1
Math.cosh(1); // 1.5430806348152437
Math.cosh(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Math.cosh` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [Prothèse d'émulation es-shims de `Math.cosh` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.cosh)
- La méthode statique {{JSxRef("Math.acosh()")}}
- La méthode statique {{JSxRef("Math.asinh()")}}
- La méthode statique {{JSxRef("Math.atanh()")}}
- La méthode statique {{JSxRef("Math.sinh()")}}
- La méthode statique {{JSxRef("Math.tanh()")}}
