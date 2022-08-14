---
title: Number.NEGATIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/NEGATIVE_INFINITY
---
{{JSRef}}

Die **`Number.NEGATIVE_INFINITY`** Eigenschaft repräsentiert den Wert der negativen Unendlichkeit.

{{EmbedInteractiveExample("pages/js/number-negative-infinity.html")}}

Man muss kein Objekt vom Typ {{jsxref("Number")}} erzeugen, um Zugriff zu haben, weil diese Eigenschaft statisch ist (nutze `Number.NEGATIVE_INFINITY`).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der Wert von `Number.NEGATIVE_INFINITY` ist der gleiche wie der negative Wert der Eigenschaft {{jsxref("Infinity")}} des _globalen Objektes_.

Der Wert verhält sich leicht unterschiedlich zu der mathematischen Unendlichkeit:

- Jeder positive Wert, auch {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, multipliziert mit `NEGATIVE_INFINITY` ergibt `NEGATIVE_INFINITY`.
- Jeder negative Wert, auch `NEGATIVE_INFINITY`, multipliziert mit `NEGATIVE_INFINITY` ergibt {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- Jeder positive Wert dividiert durch `NEGATIVE_INFINITY` ergibt 0.
- Jeder negative Wert dividiert durch `NEGATIVE_INFINITY` ergibt 0.
- 0 multipliziert mit `NEGATIVE_INFINITY` ergibt {{jsxref("NaN", "NaN")}}.
- {{jsxref("NaN")}} multipliziert mit `NEGATIVE_INFINITY` ergibt {{jsxref("NaN")}}.
- `NEGATIVE_INFINITY` dividiert durch jeden negativen Wert, mit Ausnahme `von NEGATIVE_INFINITY`, ergibt {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}.
- `NEGATIVE_INFINITY` dividiert durch jeden positiven Wert, mit Ausnahme von {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}}, ergibt `NEGATIVE_INFINITY`.
- `NEGATIVE_INFINITY` dividiert durch `NEGATIVE_INFINITY` oder {{jsxref("Number.POSITIVE_INFINITY", "POSITIVE_INFINITY")}} ergibt {{jsxref("NaN")}}.

Man kann `Number.NEGATIVE_INFINITY` nutzen, um einen Fehlerfall zu signalisieren, wenn im Normalfall ein endliches Ergebnis erwartet werden kann. Zudem kann ein Wert mit {{jsxref("isFinite")}} auf seine Endlichkeit geprüft werden.

## Beispiele

### Einsatz von `NEGATIVE_INFINITY`

Im folgenden Beispiel wird der Variablen` smallNumber` ein kleinerer Wert als der minimale Wert zugewiesen. Wenn das {{jsxref("Statements/if...else", "if")}}-Statement ausgeführt wird, hat `smallNumber` den Wert `-Infinity`. In diesem Fall wird der Variablen ein endlicher Wert zugewiesen, um mit dem Wert besser umgehen zu können.

```js
var smallNumber = (-Number.MAX_VALUE) * 2;

if (smallNumber === Number.NEGATIVE_INFINITY) {
  smallNumber = returnFinite();
}
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.5', 'Number.NEGATIVE_INFINITY')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.negative_infinity', 'Number.NEGATIVE_INFINITY')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.negative_infinity', 'Number.NEGATIVE_INFINITY')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.NEGATIVE_INFINITY")}}

## Siehe auch

- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity", "Infinity")}}
- {{jsxref("isFinite", "isFinite()")}}
