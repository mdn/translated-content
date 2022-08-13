---
title: Infinity
slug: Web/JavaScript/Reference/Global_Objects/Infinity
tags:
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/Infinity
---
{{jsSidebar("Objects")}}

Die globale Eigenschaft **`Infinity`** ist ein numerischer Wert, der die Unendlichkeit repräsentiert.

{{js_property_attributes(0,0,0)}}

{{EmbedInteractiveExample("pages/js/globalprops-infinity.html")}}

## Syntax

    Infinity

## Beschreibung

`Infinity` ist eine Eigenschaft des _globalen Objekts_, was bedeutet, dass es eine Variable im globalen Gültigkeitsbereich ist.

Der initiale Wert von `Infinity` entspricht {{jsxref("Number.POSITIVE_INFINITY")}}. Der Wert von `Infinity` (positiv unendlich) ist größer als alle anderen Nummern. Mathematisch entspricht der Wert der Unendlichkeit. Zum Beispiel ist das Produkt einer positiven Zahl mit `Infinity` immer `Infinity`. Jede Division einer Zahl durch `Infinity` ergibt 0.

In der ECMAScript 5 Spezifikation wurde `Infinity` als read only Eigenschaft (nur lesender Zugriff) eingestuft. (Dieses wurde in JavaScript 1.8.5 / Firefox 4 implementiert.)

## Beispiele

```js
console.log(Infinity);           /* Infinity */
console.log(Infinity + 1);       /* Infinity */
console.log(Math.pow(10, 1000)); /* Infinity */
console.log(Math.log(0));        /* -Infinity */
console.log(1 / Infinity);       /* 0 */
```

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar                                            |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3 |
| {{SpecName('ES5.1', '#sec-15.1.1.2', 'Infinity')}}                                                     | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-value-properties-of-the-global-object-infinity', 'Infinity')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-value-properties-of-the-global-object-infinity', 'Infinity')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Infinity")}}

## Siehe auch

- {{jsxref("Number.NEGATIVE_INFINITY")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.isFinite")}}
