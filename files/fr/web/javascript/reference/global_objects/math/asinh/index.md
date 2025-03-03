---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
---

{{JSRef}}

La fonction **`Math.asinh()`** renvoie l'arc sinus hyperbolique d'un nombre :

<math><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> le seul </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>tel que</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x</annotation></semantics></math>

{{InteractiveExample("JavaScript Demo: Math.asinh()")}}

```js interactive-example
console.log(Math.asinh(1));
// Expected output: 0.881373587019543

console.log(Math.asinh(0));
// Expected output: 0

console.log(Math.asinh(-1));
// Expected output: -0.881373587019543

console.log(Math.asinh(2));
// Expected output: 1.4436354751788103
```

## Syntaxe

```js
Math.asinh(x);
```

### Paramètres

- `x`
  - : Un nombre.

### Valeur de retour

L'arc sinus hyperbolique du nombre passé en argument.

## Description

`asinh()` étant une méthode statique de `Math`, elle doit toujours être utilisée avec la syntaxe `Math.asinh()` et ne doit pas être appelée depuis un autre objet qui aurait été créé (Math n'est pas un constructeur).

## Exemple

### Utiliser `Math.asinh()`

```js
Math.asinh =
  Math.asinh ||
  function (x) {
    if (x === -Infinity) {
      return x;
    } else {
      return Math.log(x + Math.sqrt(x * x + 1));
    }
  };
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
