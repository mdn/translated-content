---
title: Math.asinh()
slug: Web/JavaScript/Reference/Global_Objects/Math/asinh
tags:
  - JavaScript
  - Math
  - Method
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/asinh
---
{{JSRef}}

Die Funktion **`Math.asinh()`** gibt den hyperbolische Arkussinus (im Radiantenmaß) einer Zahl zurück:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="thinmathspace">arcsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> das Ergebnis </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mspace width="thickmathspace"></mspace><mtext>so </mtext><mtext></mtext><mtext>dass</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sinh</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.asinh}(x)} = \operatorname{arsinh}(x) = \text{ the unique } \; y \; \text{such that} \; \sinh(y) = x</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-asinh.html")}}

## Syntax

    Math.asinh(x)

### Parameter

- `x`
  - : Eine Zahl.

### Rückgabewert

Der hyperbolische Arkussinus der übergebenen Zahl.

## Beschreibung

`Weil asinh()` eine statische Methode von `Math` ist, muss diese immer mit `Math.asinh()` genutzt werden, ohne dass ein Objekt von `Math` erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### Verwendung von `Math.asinh()`

```js
Math.asinh(1);  // 0.881373587019543
Math.asinh(0);  // 0
```

## Polyfill

Es gilt: <math><semantics><mrow><mo lspace="0em" rspace="thinmathspace">arsinh</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mrow><mo>(</mo><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></msqrt></mrow><mo>)</mo></mrow></mrow><annotation encoding="TeX"></annotation></semantics></math>. Daher kann asinh mit der folgenden Funktion emuliert werden:

```js
Math.asinh = Math.asinh || function(x) {
  if (x === -Infinity) {
    return x;
  } else {
    return Math.log(x + Math.sqrt(x * x + 1));
  }
};
```

Die formale Korrektheit hängt von einer Reihe von Problemen mit Floating-Point-Berechnungen ab. Genaue Ergebnisse erfordern die Behandlung von positiven/negativen, kleinen/großen Argumenten, wie es in [glibc](https://sourceware.org/git/?p=glibc.git;a=blob;f=sysdeps/ieee754/dbl-64/s_asinh.c) oder [GNU Scientific Library](http://git.savannah.gnu.org/cgit/gsl.git/tree/sys/invhyp.c) vorhanden ist.

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-math.asinh', 'Math.asinh')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-math.asinh', 'Math.asinh')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.asinh")}}

## Siehe auch

- {{jsxref("Math.acosh()")}}
- {{jsxref("Math.atanh()")}}
- {{jsxref("Math.cosh()")}}
- {{jsxref("Math.sinh()")}}
- {{jsxref("Math.tanh()")}}
