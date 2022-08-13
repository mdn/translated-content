---
title: Math.PI
slug: Web/JavaScript/Reference/Global_Objects/Math/PI
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/PI
---
{{JSRef}}

Die **`Math.PI`** Eigenschaft repräsentiert die Kreiszahl Pi, welche als Verhältnis zwischen Kreisumfang und Durchmesser definiert ist und gerundet die Zahl 3,14159 ist.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.PI</mi></mstyle><mo>=</mo><mi>π</mi><mo>≈</mo><mn>3,14159</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.PI}} = \pi \approx 3,14159</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-pi.html")}}{{js_property_attributes(0,0,0)}}

## Beschreibung

Weil `PI` eine statische Eigenschaft von `Math` ist, muss immer `Math.PI` genutzt werden, ohne dass ein `Math` Objekt erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.PI`

Die folgende Funktion benutzt `Math.PI`, um aus einem Radius den Umfrang eines Kreises zu berechnen:

```js
function calculateCircumference(radius) {
  return Math.PI * (radius + radius);
}

calculateCircumference(1);  // 6.283185307179586
```

## Spezifikationen

| Spezifikation                                                        | Status                       | Kommentar                                             |
| -------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                             | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0. |
| {{SpecName('ES5.1', '#sec-15.8.1.6', 'Math.PI')}}     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-math.pi', 'Math.PI')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-math.pi', 'Math.PI')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.PI")}}

## Siehe auch

- {{jsxref("Math")}}
