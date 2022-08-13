---
title: Math.LN10
slug: Web/JavaScript/Reference/Global_Objects/Math/LN10
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/LN10
---
{{JSRef}}

Die **`Math.LN10`** Eigenschaft repräsentiert den natürlichen Logarithmus von 10, was gerundet 2,302 ist:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.LN10</mi></mstyle><mo>=</mo><mo lspace="0em" rspace="0em">ln</mo><mo stretchy="false">(</mo><mn>10</mn><mo stretchy="false">)</mo><mo>≈</mo><mn>2,302</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.LN10}} = \ln(10) \approx 2,302</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-ln10.html")}}{{js_property_attributes(0,0,0)}}

## Beschreibung

Weil `LN10` eine statische Eigenschaft von `Math` ist, kann diese immer über `Math.LN10` erreicht werden, ohne dass ein Objekt von `Math` erstellt werden muss (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.LN10`

Die folgende Funktion gibt das Ergebnis des natürlichen Logarithmus von 10 zurück:

```js
function getNatLog10() {
   return Math.LN10
}

getNatLog10() // 2.302585092994046
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar                                            |
| ------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0 |
| {{SpecName('ES5.1', '#sec-15.8.1.2', 'Math.LN10')}}     | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-math.ln10', 'Math.LN10')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-math.ln10', 'Math.LN10')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.LN10")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log10()")}}
