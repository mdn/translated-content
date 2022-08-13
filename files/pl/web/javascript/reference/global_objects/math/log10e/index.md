---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
tags:
  - JavaScript
  - Math
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
original_slug: Web/JavaScript/Referencje/Obiekty/Math/LOG10E
---
{{JSRef}}

## Podsumowanie

Logarytm o podstawie 10 z E, w przybliżeniu 0.434.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0.434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0.434</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

##  

### Opis

Ponieważ `LOG10E` jest statyczną własnością obiektu `Math`, zawsze odwołujemy się do niej poprzez `Math.LOG10E`, a nie jak do własności instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

### Przykład: Zastosowanie `Math.LOG10E`

Poniższa funkcja zwraca logarytm o podstawie 10 z E:

```js
function getLog10e() {
   return Math.LOG10E;
}

getLog10e(); // 0.4342944819032518
```

## Zobacz także

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}} {{experimental_inline}}
