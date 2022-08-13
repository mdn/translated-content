---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
tags:
  - JavaScript
  - Math
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Math/PI
original_slug: Web/JavaScript/Referencje/Obiekty/Math/PI
---
{{JSRef}}

## Podsumowanie

Stosunek obwodu okręgu do jego średnicy, w przybliżeniu 3.14159.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3.14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3.14159</annotation></semantics></math>

{{js_property_attributes(0, 0, 0)}}

## Opis

Ponieważ `PI` jest statyczną własnością obiektu {{jsxref("Math")}}, zawsze odwołujemy się do niej poprzez `Math.PI`, a nie jak do własności instancji obiektu Math utworzonej przez użytkownika.

## Przykłady

#### Przykład: Zastosowanie `Math.PI`

Poniższa funkcja zwraca wartość pi:

```js
function getPi() {
   return Math.PI;
}

calculateCircumference(1);  // 6.283185307179586
```

## Zobacz także

- {{jsxref("Global_Objects/Math", "Math")}}
