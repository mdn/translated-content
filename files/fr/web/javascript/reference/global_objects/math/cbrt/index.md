---
title: "Math : méthode statique cbrt()"
short-title: cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`Math.cbrt()`** retourne la racine cubique d'un nombre. C'est-à-dire,

<math display="block">
  <semantics><mrow><mrow><mo lspace="0em" rspace="0.16666666666666666em">𝙼𝚊𝚝𝚑.𝚌𝚋𝚛𝚝</mo><mo stretchy="false">(</mo><mi>𝚡</mi><mo stretchy="false">)</mo></mrow><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>l'unique&nbsp;</mtext><mi>y</mi><mtext>&nbsp;telle que&nbsp;</mtext><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.cbrt}(x)} = \sqrt[3]{x} = \text{l'unique } y \text{ telle que } y^3 = x</annotation></semantics>
</math>

{{InteractiveExample("Démonstration JavaScript&nbsp;: Math.cbrt()")}}

```js interactive-example
console.log(Math.cbrt(-1));
// Sortie attendue : -1

console.log(Math.cbrt(1));
// Sortie attendue : 1

console.log(Math.cbrt(Infinity));
// Sortie attendue : Infinity

console.log(Math.cbrt(64));
// Sortie attendue : 4
```

## Syntaxe

```js-nolint
Math.cbrt(x)
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La racine cubique de `x`.

## Description

Parce que `cbrt()` est une méthode statique de `Math`, vous l'utilisez toujours comme `Math.cbrt()`, et non comme méthode d'un objet `Math` que vous auriez créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser la méthode `Math.cbrt()`

```js
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(2); // 1.2599210498948732
Math.cbrt(Infinity); // Infinity
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Math.cbrt` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-math)
- [Prothèse d'émulation es-shims de `Math.cbrt` <sup>(angl.)</sup>](https://www.npmjs.com/package/math.cbrt)
- La méthode statique {{JSxRef("Math.pow()")}}
- La méthode statique {{JSxRef("Math.sqrt()")}}
