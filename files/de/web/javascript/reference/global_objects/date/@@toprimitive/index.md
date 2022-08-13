---
title: Date.prototype[@@toPrimitive]
slug: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/@@toPrimitive
---
{{JSRef}}Die **`[@@toPrimitive]()`** Methode konvertiert ein {{jsxref("date")}} Objekt in einen primitiven Wert.

## Syntax

    Date()[Symbol.toPrimitive](hint);

### Rückgabewert

Der primitive Wert des gegebenen {{jsxref("Date")}} Objektes. Abhängig vom übergebenen Parameter kann die Methode einen String oder eine Zahl zurückgeben.

## Beschreibung

`[@@toPrimitive]()` ist eine Methode des {{jsxref("date")}} Objektes, welche einen primitiven Wert zurück gibt, was vom Typ number oder String sein kann.

Wenn der Parameter `hint` die Wert `"string"` oder `"default"` enthält, wird versucht die {{jsxref("Object.prototype.toString()", "toString")}} Methode aufzurufen. Wenn diese Methode nicht existiert, wird versucht die {{jsxref("Object.prototype.valueOf()", "valueOf")}} Methode aufzurufen. Wenn diese wiederum nicht existiert wirft `[@@toPrimitive]()` einen {{jsxref("TypeError")}}.

Wenn der Parameter `hint` den Wert `"number"` hat, wird als erstes versucht die `valueOf` Methode aufzurufen. Wenn diese nicht existiert, wird die `toString` Methode aufgerufen.

JavaScript ruft die `[@@toPrimitive]()` auf, um ein Objekt in einen primitiven Wert zu konvertieren. Explizit muss man diese Methode extrem selten aufrufen. JavaScript ruft diese Methode automatisch auf, wenn ein Objekt an Stellen verwendet wird, an denen ein primitiver Wert erwartet wird.

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-date.prototype-@@toprimitive', 'Date.prototype.@@toPrimitive')}}         | {{Spec2('ES6')}}         | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-date.prototype-@@toprimitive', 'Date.prototype.@@toPrimitive')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.@@toPrimitive")}}

## Siehe auch

- {{jsxref("Symbol.toPrimitive")}}
