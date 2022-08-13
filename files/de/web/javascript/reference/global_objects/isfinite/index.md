---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/isFinite
---
{{jsSidebar("Objects")}}

Die globale Funktion **`isFinite()`** prüft, ob eine Zahl endlich ist oder nicht. Wenn der übergeben Wert keine Nummer ist, wird dieser zuerst konvertiert.

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## Syntax

    isFinite(testWert)

### Parameter

- `test`Wert
  - : Wert, der auf Endlichkeit geprüft wird.

### Rückgabewert

**`false`** wenn der Wert positiv {{jsxref("Infinity")}}, negativ {{jsxref("Infinity")}} or {{jsxref("NaN")}} ist, andernfalls **`true`**.

## Beschreibung

`isFinite` ist eine Toplevel-Funktion und ist nicht mit einem Objekt verbunden.

Man kann die Funktion nutzen, um eine Nummer auf Endlichkeit zu prüfen. Die `isFinite` Funktion prüft die Zahl, die ihr als Parameter mit übergeben wird. Wenn der Wert der Zahl {{jsxref("Global_Objects/NaN", "NaN")}}, positiv {{jsxref("Global_Objects/Infinity", "infinity")}} oder negativ {{jsxref("Global_Objects/Infinity", "infinity")}} ist, so ist der Rückgabewert `false`; andernfalls `true`.

## Beispiele

```js
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(0);         // true
isFinite(2e64);      // true
isFinite(null);      // true

isFinite(null)       // true, würde false sein, wenn die robustere
                     // Methode Number.isFinite(null) eingesetzt wird.

isFinite('0');       // true, würde false sein, wenn die robustere
                     // Methode Number.isFinite('0') eingesetzt wird.
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar            |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES3')}}                                                         | {{Spec2('ES3')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.1.2.5', 'isFinite')}}             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-isfinite-number', 'isFinite')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-isfinite-number', 'isFinite')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.isFinite")}}

## Siehe auch

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
