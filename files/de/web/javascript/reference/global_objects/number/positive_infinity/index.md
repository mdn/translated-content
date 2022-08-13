---
title: Number.POSITIVE_INFINITY
slug: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
tags:
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/POSITIVE_INFINITY
---
{{JSRef}}

Die Eigenschaft **`Number.POSITIVE_INFINITY`** repräsentiert den Wert positiv unendlich.

{{EmbedInteractiveExample("pages/js/number-positive-infinity.html")}}

Man muss kein Objekt vom Typ {{jsxref("Number")}} erzeugen, um Zugriff auf diese Eigenschaft zu bekommen, weil diese eine statische Eigeschaft ist (nutze `POSITIVE_INFINITY`).

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Der Wert `Number.POSITIVE_INFINITY` ist der gleich wie der der Eigenschaft {{jsxref("Infinity")}} des globalen Objektes.

Der Wert verhält sich leicht unterschiedlich zu der mathematischen Unendlichkeit:

- Jeder positive Wert, auch `POSITIVE_INFINITY`, multipliziert mit `POSITIVE_INFINITY` ergibt `POSITIVE_INFINITY`.
- Jeder negative Wert, auch {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, multipliziert mit `POSITIVE_INFINITY` ergibt {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- Jede positive Zahl dividiert durch `POSITIVE_INFINITY` ergibt positiv 0.
- Jede negative Zahl dividiert durch `POSITIVE_INFINITY` ergibt negativ 0.
- 0 multipliziert mit `POSITIVE_INFINITY` ergibt {{jsxref("NaN")}}.
- {{jsxref("NaN")}} multipliziert mit `POSITIVE_INFINITY` ergibt {{jsxref("NaN")}}.
- `POSITIVE_INFINITY` dividiert durch jede negative Zahl, mit Ausnahme von {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}, ergibt {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}}.
- `POSITIVE_INFINITY` dividiert durch jede positive Zahl, mit Ausnahme `von POSITIVE_INFINITY`, ergibt `POSITIVE_INFINITY`.
- `POSITIVE_INFINITY` dividiert durch {{jsxref("Number.NEGATIVE_INFINITY", "NEGATIVE_INFINITY")}} oder `POSITIVE_INFINITY` ergibt {{jsxref("NaN")}}.

Man kann `Number.POSITIVE_INFINITY` nutzen, um einen Fehlerfall zu signalisieren, wenn im Normalfall ein endliches Ergebnis erwartet werden kann. Zudem kann ein Wert mit {{jsxref("isFinite")}} auf seine Endlichkeit geprüft werden.

## Beispiele

### Einsatz von `POSITIVE_INFINITY`

Im folgenden Beispiel wird der Variablen`bigNumber` ein kleinerer Wert als der minimale Wert zugewiesen. Wenn das {{jsxref("Statements/if...else", "if")}}-Statement ausgeführt wird, hat `bigNumber` den Wert `Infinity`. In diesem Fall wird der Variablen ein endlicher Wert zugewiesen, um mit dem Wert besser umgehen zu können.

```js
var bigNumber = Number.MAX_VALUE * 2;

if (bigNumber == Number.POSITIVE_INFINITY) {
  bigNumber = returnFinite();
}
```

## Spezifikationen

| Spezifikation                                                                                                    | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.7.3.6', 'Number.POSITIVE_INFINITY')}}                         | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-number.positive_infinity', 'Number.POSITIVE_INFINITY')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-number.positive_infinity', 'Number.POSITIVE_INFINITY')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.POSITIVE_INFINITY")}}

## Siehe auch

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.isFinite()")}}
- {{jsxref("Infinity")}}
- {{jsxref("isFinite", "isFinite()")}}
