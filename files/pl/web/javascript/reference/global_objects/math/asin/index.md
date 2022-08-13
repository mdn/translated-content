---
title: Math.asin()
slug: Web/JavaScript/Reference/Global_Objects/Math/asin
tags:
  - JavaScript
  - Math
translation_of: Web/JavaScript/Reference/Global_Objects/Math/asin
original_slug: Web/JavaScript/Referencje/Obiekty/Math/asin
---
{{jsref}}

## Podsumowanie

Zwraca arcus sinus (w radianach) danej liczby.

<math display="block"><semantics><mrow><mo>∀</mo><mi>x</mi><mo>∊</mo><mo stretchy="false">[</mo><mrow><mo>-</mo><mn>1</mn></mrow><mo>;</mo><mn>1</mn><mo stretchy="false">]</mo><mo>,</mo><mspace width="thickmathspace"></mspace><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.asin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">arcsin</mo><mo stretchy="false">(</mo><mi>x</mi><mo stretchy="false">)</mo><mo>=</mo><mtext> the unique </mtext><mspace width="thickmathspace"></mspace><mi>y</mi><mo>∊</mo><mrow><mo>[</mo><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>;</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mo>]</mo></mrow><mspace width="thinmathspace"></mspace><mtext>such that</mtext><mspace width="thickmathspace"></mspace><mo lspace="0em" rspace="0em">sin</mo><mo stretchy="false">(</mo><mi>y</mi><mo stretchy="false">)</mo><mo>=</mo><mi>x</mi></mrow><annotation encoding="TeX">\forall x \in [{-1};1],\;\mathtt{\operatorname{Math.asin}(x)} = \arcsin(x) = \text{ the unique } \; y \in \left[-\frac{\pi}{2}; \frac{\pi}{2}\right] \, \text{such that} \; \sin(y) = x</annotation></semantics></math>

## Składnia

    Math.asin(x)

### Parametry

- `x`
  - : liczba.

## Opis

Metoda `Math.asin()` zwraca wartość liczbową pomiędzy <math><semantics><mrow><mo>-</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><annotation encoding="TeX">-\frac{\pi}{2}</annotation></semantics></math> i <math><semantics><mfrac><mi>π</mi><mn>2</mn></mfrac><annotation encoding="TeX">\frac{\pi}{2}</annotation></semantics></math> radianów dla `x` z przedziału \[-1, 1]. Jeśli `x` jest poza tym zakresem, zwracany jest `NaN`.

Ponieważ `asin` jest statyczną metodą obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.asin()`, a nie jak do metody instancji obiektu {{jsxref("Math")}} utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.asin()`

Poniższa funkcja zwraca arcus sinus zmiennej `x`:

```js
Math.asin(-2);  // NaN
Math.asin(-1);  // -1.5707963267948966 (-pi/2)
Math.asin(0);   // 0
Math.asin(0.5); // 0.5235987755982989
Math.asin(1);   // 1.570796326794897 (pi/2)
Math.asin(2);   // NaN
```

Jeśli do funkcji `getAsin` przekazana zostanie wartość 1, funkcja ta zwróci 1.570796326794897 (pi/2); jeśli przekazana zostanie wartość 2, funkcja zwróci {{jsxref("<code>NaN</code>")}}, ponieważ 2 jest poza dziedziną funkcji arcus sinus.

## Zobacz także

- {{jsxref("Math.acos()")}}
- {{jsxref("Math.atan()")}}
- {{jsxref("Math.atan2()")}}
- {{jsxref("Math.cos()")}}
- {{jsxref("Math.sin()")}}
- {{jsxref("Math.tan()")}}
