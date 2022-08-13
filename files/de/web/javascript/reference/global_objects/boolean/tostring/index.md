---
title: Boolean.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Boolean/toString
tags:
  - Boolean
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Boolean/toString
---
{{JSRef}}

Die **`toString()`** gibt einen String, der eine {{jsxref("Boolean")}} Objekt repräsentiert, zurück.

{{EmbedInteractiveExample("pages/js/boolean-tostring.html")}}

## Syntax

    bool.toString()

### Rückgabewert

Eine String-Repräsentation des {{jsxref("Boolean")}} Objektes.

## Beschreibung

Das {{jsxref("Boolean")}} Objekt überschreibt die `toString` Methode des {{jsxref("Object")}} Objektes. Es erbt nicht von {{jsxref("Object.prototype.toString()")}}. Für {{jsxref("Boolean")}} Objekte gibt die `toString` Methode einen String, der das Objekt repräsentiert, zurück.

JavaScript ruft die `toString` Methode automatisch auf, wenn ein {{jsxref("Boolean")}} Objekt als Text dargestellt wird oder wenn ein {{jsxref("Boolean")}} mit einem String konkatiniert wird.

Für {{jsxref("Boolean")}} Objekte und Werte gibt die eingebaute `toString` Methode die Strings "`true`" oder "`false`", abhängig vom Wert des Boolean, zurück.

## Beispiele

### Einsatz von `toString`

Im folgenden Beispiel gibt der Aufruf `flag.toString()` den Wert "`true`" zurück:

```js
var flag = new Boolean(true);
var myVar = flag.toString();
```

## Spezifikationen

| Spezifikation                                                                                                        | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES1')}}                                                                                             | {{Spec2('ES1')}}         | Initiale Definition. |
| {{SpecName('ES5.1', '#sec-15.6.4.2', 'Boolean.prototype.toString')}}                         | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-boolean.prototype.tostring', 'Boolean.prototype.toString')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.Boolean.toString")}}

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
