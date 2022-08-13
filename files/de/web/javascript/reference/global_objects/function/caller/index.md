---
title: Function.caller
slug: Web/JavaScript/Reference/Global_Objects/Function/caller
tags:
  - Function
  - JavaScript
  - Property
translation_of: Web/JavaScript/Reference/Global_Objects/Function/caller
---
{{JSRef}} {{non-standard_header}}

Die `function.` Eigenschaft gibt die Funktion zurück, die eine spezifizierte Funktion aufgerufen hat. Diese Eigenschaft ist im Strict-Modus wegen [tail call Optimierungen](http://www.ecma-international.org/ecma-262/6.0/#sec-addrestrictedfunctionproperties) verboten.

## Beschreibung

Wenn die Funktion `f` durch einen Quelltext auf höchster Ebene aufgerufen wird, ist der Wert von `f.caller` {{jsxref("null")}}, anderfalls die Funktion, die `f` aufgerufen hat.

Diese Eigenschaft ersetzt die veraltete Eigenschaft {{jsxref("Functions/arguments/caller", "arguments.caller")}} des {{jsxref("Functions/arguments", "arguments")}} Objektes.

Die spezielle Eigenschaft `__caller__`, welches das Objekt des Aufrufers zurück gab, erlaubt es den Stack zu rekonstruieren und wurde aus Sicherheitsgründen entfernt.

### Hinweise

Im Fall von Rekursion, kann der Stack nicht mit dieser Eigenschaft reproduziert werden. Gegeben:

```js
function f(n) { g(n - 1); }
function g(n) { if (n > 0) { f(n); } else { stop(); } }
f(2);
```

Im Moment, indem `stop()` aufgerufen wird, ist der Aufruferstack:

```js
f(2) -> g(1) -> f(1) -> g(0) -> stop()
```

Das folgende ergibt `true`:

```js
stop.caller === g && f.caller === g && g.caller === f
```

Wenn man versucht den Stacktrace in der `stop()` Funktion zu bekommen, wie hier:

```js
var f = stop;
var stack = 'Stack trace:';
while (f) {
  stack += '\n' + f.name;
  f = f.caller;
}
```

wird die Schleife nie beendet.

## Beispiele

### Prüfen des Wertes der Funktionseigenschaft `caller`

Der folgende Quelltext prüft den Wert der Funktionseigenschaft `caller`.

```js
function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}
```

## Spezifikationen

In keiner Spezifikation enthalten. Implementiert in JavaScript 1.5.

## Browserkompatibilität

{{Compat("javascript.builtins.Function.caller")}}

## Siehe auch

- Implementation bug for SpiderMonkey {{bug(65683)}}
