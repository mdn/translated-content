---
title: Math.SQRT2
slug: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/SQRT2
---
{{JSRef}}

Die **`Math.SQRT2`** Eigenschaft repräsentiert die Quadratwurzel aus 2, welche gerundet 1,414 ist:

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.SQRT2</mi></mstyle><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>≈</mo><mn>1,414</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.SQRT2}} = \sqrt{2} \approx 1,414</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-sqrt2.html")}}{{js_property_attributes(0,0,0)}}

## Beschreibung

Weil `SQRT2` eine statische Eigenschaft von `Math` ist, muss immer `Math.SQRT2` genutzt werden, ohne dass ein `Math`-Objekt erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.SQRT2`

Die folgende Funktion gibt die Quadratwurzel aus 2 zurück:

```js
function getRoot2() {
   return Math.SQRT2
}

getRoot2() // 1.4142135623730951
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.8', 'Math.SQRT2')}}         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.sqrt2', 'Math.SQRT2')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.sqrt2', 'Math.SQRT2')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.SQRT2")}}

## Siehe auch

- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
