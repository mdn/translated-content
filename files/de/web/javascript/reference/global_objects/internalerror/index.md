---
title: InternalError
slug: Web/JavaScript/Reference/Global_Objects/InternalError
tags:
  - Error
  - InternalError
  - JavaScript
translation_of: Web/JavaScript/Reference/Global_Objects/InternalError
---
{{JSRef}} {{non-standard_header}}

Das **`InternalError` Objekt** zeigt einen Fehler an, der in der JavaScript-Umgebung auftritt. Zum Beispiel: **"InternalError**: too much recursion".

## Syntax

    new InternalError([message[, fileName[, lineNumber]]])

### Parameter

- `message`
  - : Optional. Für Menschen lesbare Fehlerbeschreibung.
- `fileName` {{non-standard_inline}}
  - : Optional. Der Name der Datei, in der der Fehler auftritt.
- `lineNumber` {{non-standard_inline}}
  - : Optional. Die Zeilennummer in der Datei, in der der Fehler auftritt.

## Beschreibung

Ein `InternalError` wird immer erzeugt, wenn ein Fehler in der JavaScript-Umgebung auftritt.

Beispielfälle die oft eintreten, wenn manchmal etwas zu ang ist:

- "too many switch cases",
- "too many parentheses in regular expression",
- "array initializer too large",
- "too much recursion".

## Eigenschaften

- {{jsxref("InternalError.prototype")}}
  - : Erlaubt das Hinzufügen von Eigenschaften zu einem `InternalError` Objekt.

## Methoden

Die globale `InternalError` Klasse enthält keine eigenen Methoden, jedoch erbt sie einige Methoden durch die Prototypenkette.

## `InternalError` Instanzen

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype', 'Eigenschaften')}}

### Methods

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/InternalError/prototype', 'Methoden')}}

## Spezifikationen

In keiner Spezifikation enthalten.

## Browserkompatibilität

{{Compat("javascript.builtins.InternalError")}}

## Siehe auch

- {{jsxref("Error")}}
- {{jsxref("InternalError.prototype")}}
