---
title: NaN
slug: Web/JavaScript/Reference/Global_Objects/NaN
tags:
  - JavaScript
  - Property
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/NaN
---
{{jsSidebar("Objects")}}

Die globale **`NaN`** Eigenschaft ist ein Wert, der Not-A-Number (keine Zahl) repräsentiert.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-nan.html")}}

## Syntax

    NaN

## Beschreibung

`NaN` ist eine Eigenschaft des _globalen Objektes._

Der initiale Wert von `NaN` ist Not-A-Number — der gleiche Wert wie {{jsxref("Number.NaN")}}. In modernen Browsern ist `NaN` eine nicht konfigurierbare und nicht überschreibbare Eigenschaft. Immer wenn dieses nicht der Fall ist, sollte es vermieden werden, diese zu überschreiben.

Der Einsatz von `NaN` in Programmen ist selten. Es wird als Rückgabewert genutzt, wenn {{jsxref("Math")}} Funktionen fehlschlagen (`Math.sqrt(-1)`) oder wenn der Versuch, eine Zeichenkette in eine Nummer zu konvertieren, fehlschlägt (`parseInt("blabla")`).

### Tests mit `NaN`

Gleichheitsoperatoren (`==`, `!=`, `===` und `!==`) können nicht genutzt werden, um auf `NaN` zu prüfen. Stattdessen können die Methoden {{jsxref("Number.isNaN()")}} oder {{jsxref("Global_Objects/isNaN", "isNaN()")}} eingesetzt werden. Alternativ kann ein Vergleich auf sich selbst durchgeführt werden, weil nur `NaN` mit sich selbst verglichen ungleich ist.

```js
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true
```

Die Unterschiede zwischen `isNaN()` and `Number.isNaN()` sind zu beachten: ersteres wird `true` zurückgeben, wenn der übergebene Wert `NaN` ist, oder wenn er `NaN` wird, nachdem er zu einer Zahl umgewandelt wurde, während letzteres nur dann `true` zurückgibt, wenn der aktuelle Wert `NaN` ist:

```js
isNaN('hello world'); // returns 'true'.
Number.isNaN('Hello world'); // returns 'false'.
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar                                            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3 |
| {{SpecName('ES5.1', '#sec-15.1.1.1', 'NaN')}}                                                 | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-value-properties-of-the-global-object-nan', 'NaN')}}         | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-value-properties-of-the-global-object-nan', 'NaN')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.builtins.NaN")}}

## Siehe auch

- {{jsxref("Number.NaN")}}
- {{jsxref("Number.isNaN()")}}
- {{jsxref("isNaN", "isNaN()")}}
