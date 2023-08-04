---
title: Math.cbrt()
slug: Web/JavaScript/Reference/Global_Objects/Math/cbrt
---

{{JSRef}}

La fonction **`Math.cbrt()`** renvoie la racine cubique (le nom anglais étant _cubic root_) d'un nombre :

<math><semantics><mrow><mstyle mathvariant="monospace"><mrow><mi>M</mi><mi>a</mi><mi>t</mi><mi>h</mi><mo>.</mo><mi>c</mi><mi>b</mi><mi>r</mi><mi>t</mi><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mroot><mi>x</mi><mn>3</mn></mroot><mo>=</mo><mtext>le seul</mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{Math.cbrt(x)} = \sqrt[3]{x} = \text{the unique} \; y \; \text{such that} \; y^3 = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-cbrt.html")}}

## Syntaxe

```js
Math.cbrt(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

La racine cubique du nombre passé en argument.

## Description

`cbrt()` étant une méthode statique de `Math`, il faut utiliser `Math.cbrt()`, et non pas la méthode d'un autre objet créé (`Math` n'est pas un constructeur).

## Exemple

### Utiliser `Math.cbrt()`

```js
Math.cbrt(NaN); // NaN
Math.cbrt(-1); // -1
Math.cbrt(-0); // -0
Math.cbrt(-Infinity); // -Infinity
Math.cbrt(0); // 0
Math.cbrt(1); // 1
Math.cbrt(Infinity); // Infinity
Math.cbrt(null); // 0
Math.cbrt(2); // 1.2599210498948732
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
