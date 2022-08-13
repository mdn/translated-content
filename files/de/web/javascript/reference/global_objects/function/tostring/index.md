---
title: Function.prototype.toString()
slug: Web/JavaScript/Reference/Global_Objects/Function/toString
tags:
  - Function
  - JavaScript
  - Method
  - Prototype
translation_of: Web/JavaScript/Reference/Global_Objects/Function/toString
---
{{JSRef}}

Die **`toString()`** Methode gibt eine Stringrepräsentation des Quelltextes einer Funktion zurück.

{{EmbedInteractiveExample("pages/js/function-tostring.html")}}

## Syntax

    function.toString()

### Rückgabewert

Eine Stringrepräsentation des Quelltextes der Funktion.

## Beschreibung

Das {{jsxref("Function")}} Objekt überschreibt die von {{jsxref("Object")}} geerbte Methode {{jsxref("Object.prototype.toString", "toString")}}; sie erbt nicht von {{jsxref("Object.prototype.toString")}}. Für benutzerdefinierte {{jsxref("Function")}} Objekte gibt die `toString` Methode einen String zurück, welcher den Quelltext, der die Funktion definiert, enthält.

JavaScript ruft die `toString` Methode automatisch auf, wenn einen {{jsxref("Function")}} als Text repräsentiert werden muss, z. B. wenn eine Funktion mit einem String konkateniert wird.

Die `toString()` Methode erzeugt eine {{jsxref("TypeError")}} Fehler("Function.prototype.toString called on incompatible object"), wenn das Objekt von `this` Objekt kein `Function` Objekt ist. Dieser wird auch bei einem {{jsxref("Proxy")}} Objekte erzeugt, zum Beispiel:

```js example-bad
Function.prototype.toString.call('foo'); // TypeError

var proxy = new Proxy(function() {}, {});
Function.prototype.toString.call(proxy); // TypeError
```

Wenn die `toString()` Methode auf eingebauten Objekten oder einer von `Function.prototype.bind` erstellten Methode aufgerufen wird, gibt `toString()`_native function string_ zurück, was wie folgt aussiet:

```js
"function () {\n    [native code]\n}"
```

Wenn die `toString()` Methode auf einer Funktion aufgerufen wird, die mit dem `Function` Konstruktor erstellt wurde, gibt diese den Quelltext der syntetischen Funktionsdeklerations mit dem Namen "anonymous" zurück, welche die Parameter und den Funktionrumpf enthält.

## Beispiele

| Funktion                                                 | Ergebnis von Function.prototype.toString |
| -------------------------------------------------------- | ---------------------------------------- |
| function f(){}                                           | "function f(){}"                         |
| class A { a(){} }                                        | "class A { a(){} }"                      |
| function\* g(){}                                         | "function\* g(){}"                       |
| a => a                                                   | "a => a"                                 |
| ({ a(){} }.a)                                            | "a(){}"                                  |
| ({ \*a(){} }.a)                                          | "\*a(){}"                                |
| ({ [0](){} }[0])                                         | "[0](){}"                                |
| Object.getOwnPropertyDescriptor({ get a(){} }, "a").get  | "get a(){}"                              |
| Object.getOwnPropertyDescriptor({ set a(x){} }, "a").set | "set a(x){}"                             |
| Function.prototype.toString                              | "function toString() { [native code] }"  |
| (function f(){}.bind(0))                                 | "function () { [native code] }"          |
| Function("a", "b")                                       | "function anonymous(a\n) {\nb\n}"        |

## Spezifikationen

| Spezifikation                                                                                                            | Status                       | Kommentar                                                                   |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1.                       |
| {{SpecName('ES6', '#sec-function.prototype.tostring', 'Function.prototype.toString')}}     | {{Spec2('ES6')}}         | Spezifischere Anforderungen wurden an die Stringrepräsentation hinzugefügt. |
| [Function.prototype.toString revision](http://tc39.github.io/Function-prototype-toString-revision/)                      | Draft                        | Standardisierung nativer Funktionsstrings am Zeilenende.                    |
| {{SpecName('ESDraft', '#sec-function.prototype.tostring', 'Function.prototype.toString')}} | {{Spec2('ESDraft')}} |                                                                             |

## Browserkompatibilität

{{Compat("javascript.builtins.Function.toString")}}

## Firefox spezifische Hinweise

- Seit Firefox 17, ist `Function.prototype.toString()` implementiert zum Speichern von Funktionsquelltexten. Der Decompiler wurde entfernt, so das der `indentation` Parameter nicht mehr gebraucht wird. Für mehr Details siehe {{bug("761723")}}.
- Seit Firefox 38, erzeugt `Function.prototype.toString()` einen Fehler für {{jsxref("Proxy")}} Objekts ({{bug(1100936)}}).

## Siehe auch

- {{jsxref("Object.prototype.toString()")}}
