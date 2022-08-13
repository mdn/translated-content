---
title: Number.EPSILON
slug: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
tags:
  - ECMAScript 2015
  - JavaScript
  - Number
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Number/EPSILON
---
{{JSRef}}

Die Eigenschaft **`Number.EPSILON`** beschreibt den Unterschied zwischen 1 und der kleinsten Gleitpunktzahl größer als 1.

Man muss kein Objekt von Typ {{jsxref("Number")}} erzeugen, um auf diese statische Eigenschaft zuzugreifen. Man muss nur `Number.EPSILON` aufrufen.

{{EmbedInteractiveExample("pages/js/number-epsilon.html")}}{{js_property_attributes(0,0,0)}}

## Beschreibung

Die `EPSILON` Eigenschaft hat einen ungefähren Wert von `2.2204460492503130808472633361816E-16` order `2-52`.

## Beispiele

### Testgleichung

```js
x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);
```

## Polyfill

```js
if (Number.EPSILON === undefined) {
    Number.EPSILON = Math.pow(2, -52);
}
```

## Spezifikationen

| Spezifikation                                                                        | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-number.epsilon', 'Number.EPSILON')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-number.epsilon', 'Number.EPSILON')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Number.EPSILON")}}

## Siehe auch

- Das {{jsxref("Number")}} Objekt.
