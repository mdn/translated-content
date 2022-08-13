---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
tags:
  - JavaScript
  - Math
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
original_slug: Web/JavaScript/Referencje/Obiekty/Math/LOG2E
---
{{JSRef}}

## Podsumowanie

Logarytm o podstawie 2 z E, w przybliżeniu 1.442.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1.442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1.442</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Opis

Ponieważ `LOG2E` jest statyczną własnością obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.LOG2E`, a nie jak do własności instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.LOG2E`

Poniższa funkcja zwraca logarytm o podstawie 2 z E:

```js
function getLog2e() {
   return Math.LOG2E;
}

getLog2e(); // 1.4426950408889634
```

## Zobacz także

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}} {{experimental_inline}}
