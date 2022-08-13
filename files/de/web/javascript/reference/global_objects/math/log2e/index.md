---
title: Math.LOG2E
slug: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LOG2E
---
{{JSRef}}

Die **`Math.LOG2E`** Eigenschaft repräsentiert den Logarithmus zur Basis 2 von e, was gerundet 1,443 ist:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LOG2E</mi></mstyle><mo>=</mo><msub><mo lspace="0em" rspace="0em">log</mo><mn>2</mn></msub><mo stretchy="false">(</mo><mi>e</mi><mo stretchy="false">)</mo><mo>≈</mo><mn>1,442</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LOG2E}} = \log_2(e) \approx 1,442</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-log2e.html")}}{{js_property_attributes(0,0,0)}}

## Beschreibung

Weil `LOG2E` eine statische Eigenschaft von `Math` ist, kann diese immer über `Math.LOG2E` erreicht werden, ohne dass ein Objekt erstellt werden muss (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.LOG2E`

Die folgende Funktion gibt den Logarithmus zur Basis 2 von _e_ zurück.

```js
function getLog2e() {
   return Math.LOG2E
}

getLog2e() // 1.4426950408889634
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.4', 'Math.LOG2E')}}         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.log2e', 'Math.LOG2E')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.log2e', 'Math.LOG2E')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.LOG2E")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
