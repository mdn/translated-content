---
title: Error.prototype.name
slug: Web/JavaScript/Reference/Global_Objects/Error/name
tags:
  - Error
  - JavaScript
  - Property
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Error/name
---
{{JSRef}}

Die **`name`** Eigenschaft repräsentiert einen Namen für die Art des Errors. Der Initialwert ist "Error".

## Beschreibung

Als Standard wird für einer {{jsxref("Error")}} Instanz der Name "Error" gegeben. Die `name` Eigenschaft und die {{jsxref("Error.prototype.message", "message")}} Eigenschaft werden eingesetzt, um in der {{jsxref("Error.prototype.toString()")}} Methode eine Repräsentation des Fehlers als String zu erstellen.

## Beispiele

### Einen benutzerdefinierten Fehler erzeugen

```js
var e = new Error('Malformed input'); // e.name ist 'Error'

e.name = 'ParseError';
throw e;
// e.toString() wird 'ParseError: Malformed input' zurückgeben.
```

## Spezifikationen

| Spezifikation                                                                                        |
| ---------------------------------------------------------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-error.prototype.name', 'Error.prototype.name')}} |

## Browserkompatibilität

{{Compat("javascript.builtins.Error.name")}}

## Siehe auch

- {{jsxref("Error.prototype.message")}}
- {{jsxref("Error.prototype.toString()")}}
