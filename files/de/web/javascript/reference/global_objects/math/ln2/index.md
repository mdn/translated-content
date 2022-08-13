---
title: Math.LN2
slug: Web/JavaScript/Reference/Global_Objects/Math/LN2
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LN2
---
{{JSRef}}

Die **`Math.LN2`** Eigenschaft repräsentiert den natürlichen Logarithmus von 2, was gerundet 0,693 ist:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN2</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>2</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>0,693</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN2}} = \ln(2) \approx 0,693</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-ln2.html")}}{{js_property_attributes(0,0,0)}}

## Beschreibung

Weil `LN2` eine statische Eigenschaft von Math ist, kann diese immer mit `Math.LN2` erreicht werden, ohne dass ein Objekt von Math erstellt werden muss (`Math`ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.LN2`

Die folgende Funktion gibt den Logarithmus zur Basis 2 von einer Zahl zurück. Dabei wird `Math.LN2` benutzt:

```js
function getLog2(x) {
  return Math.log(x) / Math.LN2;
}

getLog2(256) // 8
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                            |
| -------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0 |
| {{SpecName('ES5.1', '#sec-15.8.1.3', 'Math.LN2')}} | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-math.ln2', 'Math.LN2')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-math.ln2', 'Math.LN2')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.LN2")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log2()")}}
