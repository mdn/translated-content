---
title: Math.E
slug: Web/JavaScript/Reference/Global_Objects/Math/E
tags:
  - JavaScript
  - Math
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Math/E
---
{{JSRef}}

Die **`Math.E`** Eigenschaft repräsentiert die Basis des natürlichen Logarithmus, was gerundet 2,718 ist.

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mi>Math.E</mi></mstyle><mo>=</mo><mi>e</mi><mo>≈</mo><mn>2,718</mn></mrow><annotation encoding="TeX">\mathtt{\mi{Math.E}} = e \approx 2,718</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-e.html")}}{{js_property_attributes(0,0,0)}}

## Beschreibung

Weil `E` eine statische Eigenschaft von `Math` ist, muss immer `Math.E` genutzt werden, ohne dass ein `Math` Objekt erstellt wird (`Math` ist kein Konstruktor).

## Beispiele

### Einsatz von `Math.E`

Die folgende Funktion gibt _e_ zurück:

```js
function getNapier() {
   return Math.E
}

getNapier() // 2.718281828459045
```

## Spezifikationen

| Spezifikation                                                    | Status                       | Kommentar            |
| ---------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                         | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.8.1.1', 'Math.E')}} | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-math.e', 'Math.E')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-math.e', 'Math.E')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Math.E")}}

## Siehe auch

- {{jsxref("Math.exp()")}}
- {{jsxref("Math.log()")}}
- {{jsxref("Math.log1p()")}}
