---
title: Function.displayName
slug: Web/JavaScript/Reference/Global_Objects/Function/displayName
tags:
  - Function
  - JavaScript
  - Non Standard
  - Non-standard
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/displayName
---
{{JSRef}} {{non-standard_header}}

Die `function.` Eigenschaft gibt den sichtbaren Namen der Funktion zurück.

## Beschreibung

Wenn definiert, gibt dit `displayName` Eigenschaft den sichtbaren Namen der Funktion zurück:

```js
function doSomething() {}

console.log(doSomething.displayName); // "undefined"

var popup = function(content) { console.log(content); };

popup.displayName = 'Show Popup';

console.log(popup.displayName); // "Show Popup"
```

Man kann eine Funktion mit sichtbaren Namen mit einem {{jsxref("Functions", "Funktionsausdruck", "", 1)}} definieren:

```js
var object = {
  someMethod: function() {}
};

object.someMethod.displayName = 'someMethod';

console.log(object.someMethod.displayName); // logs "someMethod"

try { someMethod } catch(e) { console.log(e); }
// ReferenceError: someMethod is not defined
```

Man kann den `displayName` einer Funktion dynamisch ändern:

```js
var object = {
  // anonymous
  someMethod: function(value) {
    arguments.callee.displayName = 'someMethod (' + value + ')';
  }
};

console.log(object.someMethod.displayName); // "undefined"

object.someMethod('123')
console.log(object.someMethod.displayName); // "someMethod (123)"
```

## Beispiele

Konsolen und Profiler präferieren die {{jsxref("Function.name", "func.name")}} zum anzeigen des Namens einer Funktion.

Beim eingeben des Folgenden Quelltextes in der Konsole, wird etwas wie "`function My Function()`" ausgegeben:

```js
var a = function() {};
a.displayName = 'My Function';

a; // "function My Function()"
```

## Spezifikationen

In keiner Spezifikation enthalten.

## Browserkompatibilität

{{Compat("javascript.builtins.Function.displayName")}}
