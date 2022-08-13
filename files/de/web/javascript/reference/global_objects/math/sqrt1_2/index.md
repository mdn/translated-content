---
title: Math.SQRT1_2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/SQRT1_2
---
{{JSRef}}

Die **`Math.SQRT1_2`** Eigenschaft repräsentiert die Quadratwurzel aus 1/2, welche gerundet 0,707 ist:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT1_2</mi></mstyle><mo>=</mo><msqrt><mfrac><mn>1</mn><mn>2</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mo>≈</mo><mn>0,707</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT1_2}} = \sqrt{\frac{1}{2}} = \frac{1}{\sqrt{2}} \approx 0,707</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt1_2.html")}}{{js_property_attributes(0,0,0)}}

## Beschreibung

Weil `SQRT1_2` eine statische Eigenschaft von `Math` ist, muss immer `Math.SQRT1_2` genutzt werden, ohne dass ein `Math` Objekt erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.SQRT1_2`

Die folgende Funktion gibt die Quadratwurzel aus 1/2 zurück:

```js
function getRoot1_2() {
   return Math.SQRT1_2
}

getRoot1_2() // 0.7071067811865476
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar                                             |
| -------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.7', 'Math.SQRT1_2')}}         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.sqrt1_2', 'Math.SQRT1_2')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.sqrt1_2', 'Math.SQRT1_2')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.SQRT1_2")}}

## Siehe auch

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
