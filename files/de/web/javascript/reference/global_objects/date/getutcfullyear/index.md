---
title: Date.prototype.getUTCFullYear()
slug: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
tags:
  - Date
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear
---
{{JSRef}}

Die **`getUTCFullYear()`** Methode gibt das Jahr eines Datums bezüglich der Weltzeit zurück.

{{EmbedInteractiveExample("pages/js/date-getutcfullyear.html")}}

## Syntax

    dateObj.getUTCFullYear()

### Rückgabewert

Eine Zahl, die das Jahr des gegebenen Datums bezüglich der Weltzeit (UTC) angibt.

## Beschreibung

Der von `getUTCFullYear()` zurückgegebene Wert ist eine absolute Zahl, die das Jahr (4-stellig) repräsentiert (z. B. 1995).

## Beispiele

### Einsatz von `getUTCFullYear()`

Im folgenden Beispiel wird die Variable `year` mit dem aktuellen Jahr (4-stellig) bezüglich der Weltzeit beschrieben.

```js
var today = new Date();
var year = today.getUTCFullYear();
```

## Spezifikationen

| Spezifikation                                                                                                                | Status                       | Kommentar                                             |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                     | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.3. |
| {{SpecName('ES5.1', '#sec-15.9.5.11', 'Date.prototype.getUTCFullYear')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-date.prototype.getutcfullyear', 'Date.prototype.getUTCFullYear')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Date.getUTCFullYear")}}

## Siehe auch

- {{jsxref("Date.prototype.getFullYear()")}}
- {{jsxref("Date.prototype.setFullYear()")}}
