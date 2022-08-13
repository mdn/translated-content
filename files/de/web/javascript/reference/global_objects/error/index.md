---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
tags:
  - Error
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error
---
{{JSRef}}

Der **`Error`** Konstruktor erstellt ein Fehler (Error) Objekt. Instanzen von `Error` Objekten werden geworfen (thrown), wenn zur Laufzeit ein Fehler auftritt. Das `Error` Objekt kann zudem als Basis für benutzerdefinierte Fehler benutzt werden. Weiter unten werden schon eingebaute Fehlertypen beschrieben.

## Syntax

    new Error([message[, fileName[, lineNumber]]])

### Parameter

- `message`
  - : Optional. Für Menschen lesbare Beschreibung des Errors.
- `fileName` {{non-standard_inline}}
  - : Optional. Der Wert für die `fileName` Eigenschaft eines erstellten `Error` Objekts. Der Standardwert ist der Name der Datei, in dem der Quelltext `Error()` aufgerufen wird.
- `lineNumber` {{non-standard_inline}}
  - : Optional. Der Wert für die `lineNumber` Eigenschaft eines erstellten `Error` Objekts. Der Standardwert ist die Zeilennummer, in dem der Quelltext `Error()` aufgerufen wird.

## Beschreibung

Laufzeitfehler resultieren in einem neu erstellten und geworfenen `Error` Objekt.

Diese Seite Dokumentiert den Einsatz des `Error` Objektes und den Einsatz als Konstruktorfunktion. Für eine Liste der Eigenschaften und Methoden, die eine `Error` Instanz erbt, siehe auf der Seite {{jsxref("Error.prototype")}}.

### Einsatz als Funktion

Wenn `Error` als Funktion genutzt wird -- ohne `new`, wird diese ein `Error` Objekt zurückgeben. Daher wird der Aufruf der Funktion das gleiche zurückgeben wie der Aufruf des `Error` Konstruktors (mit `new` Schlüsselwort).

```js
// dieser Aufruf:
const x = Error('Ich wurde mit einem Funktionsaufruf erstellt!');
​​​​// hat die gleiche Funktion wie folgender:
const y = new Error('Ich wurde mit dem "new" Schlüsselwort erstellt!');
```

### Fehlertypen

Neben dem generischen `Error` Konstruktor sind in JavaScript noch sieben weitere Error-Konstruktoren eingebaut. Für benutzerdefinierte Fehler siehe [Statements zur Fehler- und Ausnahmebehandlung](/de/docs/Web/JavaScript/Guide/Statements#Statements_zur_Fehler-_bzw._Ausnahmebehandlung).

- {{jsxref("EvalError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der bei der globalen {{jsxref("Global_Objects/eval", "eval()")}} Funktion auftritt.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn ein interner Fehler in JavaScript auftaucht (z. B. zu viel Rekursion).
- {{jsxref("RangeError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn eine nummerische Variable oder ein nummerischer Parameter außerhalb seiner validen Grenzen ist.
- {{jsxref("ReferenceError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn eine nicht valide Referenz referenziert werden soll.
- {{jsxref("SyntaxError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn die Syntax von Quellcode, der in der {{jsxref("Global_Objects/eval", "eval()")}} Funktion übergeben wird, nicht richtig ist.
- {{jsxref("TypeError")}}
  - : Erstellt eine Instanz, die einen Fehler repräsentiert, der auftritt, wenn eine Variable oder ein Parameter einen nicht validen Typen enthält.
- {{jsxref("URIError")}}
  - : Erstellt ein Instanz, die einen Fehler repräsentiert, der auftritt, wenn die Methode {{jsxref("Global_Objects/encodeURI", "encodeURI()")}} oder {{jsxref("Global_Objects/decodeURI", "decodeURI()")}} nicht valide Parameter übergeben bekommt.

## Eigenschaften

- {{jsxref("Error.prototype")}}
  - : Erlaubt es die Eigenschaften aller `Error` Instanzen zu verändern.

## Methoden

Das globale `Error` Objekt besitzt keine eigenen Methoden. Stattdessen erbt es einige Methoden durch die Prototypenkette.

## Error Instanzen

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype', 'Beschreibung')}}

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype', 'Eigenschaften')}}

### Methoden

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/Error/prototype', 'Methoden')}}

## Beispiele

### Werfen eines generischen Errors

Typischerweise erstellt man ein `Error` Objekt mit der Intention es mit dem {{jsxref("Statements/throw", "throw")}} Schlüsselwort zu werfen. Man kann den Fehler auffangen, indem man ein {{jsxref("Statements/try...catch", "try...catch")}} Konstrukt benutzt.

```js
try {
  throw new Error('Whoops!');
} catch (e) {
  console.log(e.name + ': ' + e.message);
}
```

### Einen Spezifischen Error behandeln

Man kann sich aussuchen, welche spezifischen Fehlertypen behandelt werden sollen, indem man die {{jsxref("Object.prototype.constructor", "constructor")}} Eigenschaft des Errors abfragt. In modernen JavaScript-Umgebungen kann stattdessen das {{jsxref("Operators/instanceof", "instanceof")}} Schlüsselwort verwendet werden:

```js
try {
  foo.bar();
} catch (e) {
  if (e instanceof EvalError) {
    console.log(e.name + ': ' + e.message);
  } else if (e instanceof RangeError) {
    console.log(e.name + ': ' + e.message);
  }
  // ... etc
}
```

### Benutzerdefinierte Fehlertypen

Manchmal möchte man aber einen eigenen Error erstellen, der von `Error` abgeleitet ist, durch den Aufruf `throw new CustomError()` geworfen werden kann und durch `instanceof CustomError` abgefragt werden kann. Eigene Fehlertypen führen zu einer besseren und konsistenten Fehlerbehandlung. Für eine tiefer gehende Diskussion schaue bitte auf [Stack Overflow](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) nach.

#### ES6 benutzerdefinierte Error Klasse

> **Warning:** Babel und andere Transpiler werden den folgenden Quelltext nicht ohne [zusätzliche Konfigurationen](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) verarbeiten können.

> **Note:** Einige Browser enthalten den CustomError Konstruktor im Stack Trace, wenn ES2015 Klassen eingesetzt werden

```js
class CustomError extends Error {
  constructor(foo = 'bar', ...params) {
    // Übergibt die verbleibenden Parameter (einschließlich Vendor spezifischer Parameter) dem Error Konstruktor
    super(...params);

    // Behält den richtigen Stack-Trace für die Stelle bei, an der unser Fehler ausgelöst wurde (nur bei V8 verfügbar)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }

    // Benutzerdefinierte Debugging Informationen
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError('buz', 'buzMessage');
} catch(e){
  console.log(e.foo);     // baz
  console.log(e.message); // bazMessage
  console.log(e.stack);   // stacktrace
}
```

#### ES5 benutzerdefiniertes Error Objekt

> **Warning:** **Alle** Browser enthalten den CustomError Konstruktor im Stack Trace, wenn eine Prototypische Deklaration verwendet wird.

```js
function CustomError(foo, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.foo = foo;
  Object.setPropertyOf(instance, Object.getPrototypeOf(this));
  if(Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if(typeof Object.setPropertyOf != 'undefined') {
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}


try {
  throw new CustomError('baz', 'bazMessage');
} catch (e) {
  console.log(e.foo);      // 'baz'
  console.log(e.message);  // 'bazMessage'
}
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar                                             |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.1. |
| {{SpecName('ES5.1', '#sec-15.11', 'Error')}}             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES2015', '#sec-error-objects', 'Error')}} | {{Spec2('ES2015')}}     |                                                       |
| {{SpecName('ESDraft', '#sec-error-objects', 'Error')}} | {{Spec2('ESDraft')}} |                                                       |

## Browserkompatibilität

{{Compat("javascript.builtins.Error")}}

## Siehe auch

- {{jsxref("Error.prototype")}}
- {{jsxref("Statements/throw", "throw")}}
- {{jsxref("Statements/try...catch", "try...catch")}}
