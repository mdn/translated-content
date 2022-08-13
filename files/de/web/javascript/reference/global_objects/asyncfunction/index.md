---
title: AsyncFunction
slug: Web/JavaScript/Reference/Global_Objects/AsyncFunction
tags:
  - Constructor
  - Experimental
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/AsyncFunction
---
{{JSRef}}

Der **`AsyncFunction` Konstruktor** erstellt ein neues {{jsxref("Statements/async_function", "AsyncFunction")}} Objekt. In JavaScript ist jede asynchrone Funktion ein `AsyncFunction` Objekt.

> **Hinweis:** `AsyncFunction` ist kein globales Objekt. Durch die ausführung des folgenden Quelltextes kann das Objekte erhalten werden.```js
> Object.getPrototypeOf(async function(){}).constructor
>
> ```
>
> ```

## Syntax

    new AsyncFunction([arg1[, arg2[, ...argN]],] functionBody)

### Parameter

- `arg1, arg2, ... argN`
  - : Namen, die für die Namen der formalen Parameter der Funktion verwendet werden. Jeder muss ein String mit einem validen JavaScript-Bezeichner sein oder eine Liste von Strings, welche mit einem Komma getrennt sind; zum Beispiel "`x`", "`theValue`", oder "`a,b`".
- `functionBody`
  - : Ein String, welcher die JavaScript-Anweisungen enthält, welche die Funktion definieren.

## Beschreibung

{{jsxref("Statements/async_function", "asyncFunction")}} Objekte, die mit dem `AsyncFunction` Konstruktor erstellt werden, werden analysieren, wenn sie erstellt werden. Dieses ist weniger effizient als die Deklaration einer asynchronen Funktion mit einem {{jsxref("Statements/async_function", "asyncFunction Ausdruck")}} und dem Aufruf in dem Code, weil solche Funktion mit dem Rest des Quelltextes analysieren werden.

Alle an die Funktion übergebenen Argumente werden als die Namen der Bezeichner der Parameter in der zu erstellenden Funktion in der Reihenfolge behandelt, in der sie übergeben werden.

> **Hinweis:** Mit dem `AsyncFunction` Konstruktor erstellte {{jsxref("Statements/async_function", "asyncFunctions")}} erstellen keine Closures in ihrem Erstellungskontext; Sie werden immer im globalen Scope erstellt. Wenn sie ausgeführt werden, haben sie nur Zugriff auf eigene lokale Variablen und globale Variablen, jedoch nicht auf Variablen aus dem Scope, indem der `AsyncFunction` Konstruktor aufgerufen wurde. Dies ist der Unterschied zum Einsatz von {{jsxref("Global_Objects/eval", "eval")}} mit Quelltext für eine asynchrone Funktionsanweisung.

Das Aufrufen des `AsyncFunction` Konstruktors als Funktion (ohne Einsatz des `new` Operators) hat den gleichen Effekt wie das Aufrufen als Konstruktor.

## Eigenschaften

- **`AsyncFunction.length`**
  - : Die `AsyncFunction` Konstruktor Längeneigenschaft, welche den Wert 1 hat.
- {{jsxref("AsyncFunction.prototype")}}
  - : Erlaubt das Hinzufügen von Eigenschaften zu allen `AsyncFunction` Objekten.

## `AsyncFunction` Prototype Objekt

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/AsyncFunction/prototype', 'Eigenschaften')}}

## `AsyncFunction` Instanzen

`AsyncFunction` Instanzen erben Methoden und Eigenschaften von {{jsxref("AsyncFunction.prototype")}}. Wie bei allen Konstruktoren ist es möglich die Eigenschaften des Konstruktor Objektes zu ändern, um Änderungen an allen `AsyncFunction` Instanzen vorzunehmen.

## Beispiele

### Erstellen einer asynchronen Funktion mit einem `AsyncFunction` Konstruktor

```js
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

var AsyncFunction = Object.getPrototypeOf(async function(){}).constructor

var a = new AsyncFunction('a',
                          'b',
                          'return await resolveAfter2Seconds(a) + await resolveAfter2Seconds(b);');

a(10, 20).then(v => {
  console.log(v); // prints 30 after 4 seconds
});
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Kommentar                      |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------ |
| {{SpecName('ESDraft', '#sec-async-function-objects', 'AsyncFunction object')}} | {{Spec2('ESDraft')}} | Initiale Definition in ES2017. |

## Browserkompatibilität

{{Compat("javascript.builtins.AsyncFunction")}}

## Siehe auch

- {{jsxref("Statements/async_function", "async function function")}}
- {{jsxref("Operators/async_function", "async function expression")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function statement")}}
- {{jsxref("Operators/function", "function expression")}}
- {{jsxref("Functions_and_function_scope", "Functions and function scope", "", 1)}}
