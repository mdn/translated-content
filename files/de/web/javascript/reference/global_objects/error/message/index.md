---
title: Error.prototype.message
slug: Web/JavaScript/Reference/Global_Objects/Error/message
tags:
  - Error
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/message
---
{{JSRef}}

Die **`message`** Eigenschaft ist eine für Menschen lesbare Beschreibung von Errors.

## Beschreibung

Diese Eigenschaft enthält eine knappe Beschreibung des Errors, wenn eine verfügbar ist oder gesetzt wird. Zum Beispiel setzt [SpiderMonkey](/de/docs/Mozilla/Projects/SpiderMonkey) diese Eigenschaft sehr oft ein. Die `message` Eigenschaft kombiniert mit der {{jsxref("Error.prototype.name", "name")}} Eigenschaft werden in der {{jsxref("Error.prototype.toString()")}} Methode eingesetzt, um eine String-Repräsentation des Errors zu erstellen.

Der Standardwert für die `message` Eigenschaft ist ein leerer String, jedoch kann diese von einer Instanz überschrieben werden, indem der erste Parameter des {{jsxref("Error", "Error Konstruktors")}} gesetzt wird.

## Beispiele

### Einen benutzerdefinierten Fehler erzeugen

```js
var e = new Error('Falsches Eingabeformat');
// e.message ist 'Falsches Eingabeformat'
throw e;
```

## Spezifikationen

| Spezifikation                                                                                                | Status                       | Kommentar            |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.11.4.3', 'Error.prototype.message')}}                     | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-error.prototype.message', 'Error.prototype.message')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-error.prototype.message', 'Error.prototype.message')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Error.message")}}

## Siehe auch

- {{jsxref("Error.prototype.name")}}
- {{jsxref("Error.prototype.toString()")}}
