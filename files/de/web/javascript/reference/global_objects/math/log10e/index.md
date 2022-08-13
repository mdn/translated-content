---
title: Math.LOG10E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG10E
---
{{JSRef}}

Die **`Math.LOG10E`** Eigenschaft repräsentiert den Logarithmus zur Basis 10 von e, was gerundet 0,434 ist:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG10E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>10</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>0,434</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG10E}} = \log_10(e) \approx 0,434</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log10e.html")}}

{{js_property_attributes(0,0,0)}}

## Beschreibung

Weil `LOG10E` eine statische Eigenschaft von `Math` ist, kann diese immer über `Math.LOG10E` erreicht werden, ohne dass ein Objekt erstellt werden muss (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.LOG10E`

Die folgende Funktion gibt den Logarithmus zur Basis 10 von _e_ zurück.

```js
function getLog10e() {
   return Math.LOG10E
}

getLog10e() // 0.4342944819032518
```

## Spezifikationen

{{Spec2('ES1')}}

| Spezifikation                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.5', 'Math.LOG10E')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.log10e', 'Math.LOG10E')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.log10e', 'Math.LOG10E')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.LOG10E")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
