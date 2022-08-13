---
title: GeneratorFunction
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
tags:
  - Constructor
  - ECMAScript 2015
  - GeneratorFunction
  - Iterator
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/GeneratorFunction
---
{{JSRef}}

Der **`GeneratorFunction` Konstruktor** erstellt eine neues {{jsxref("Statements/function*", "Generator Funktion")}} Objekt. aktuell ist in JavaScript jede Generatorfunktion ein `GeneratorFunction` Objekt.

Zu beachten ist, dass `GeneratorFunction` kein globales Objekt ist. Es kann mit folgendem Quelltext erhalten werden.

```js
Object.getPrototypeOf(function*(){}).constructor
```

## Syntax

    new GeneratorFunction ([arg1[, arg2[, ...argN]],] functionBody)

### Parameters

- `arg1, arg2, ... argN`
  - : Namen für Formale Argumente der Funktion. Jeder muss ein String sein, der mit einem validen JavaScript-Bezeichner korrespondiert oder eine liste von solchen String, welche mit einem Komma getrennt sind; zum Beispiel "`x`", "`theValue`", oder "`a,b`"
- `functionBody`
  - : Ein String, welcher die Statements für die Funktionsdefinition enthält.

## Beschreibung

{{jsxref("Statements/function*", "Generator Funktion")}} Objekte, die mit dem `GeneratorFunction` Konstruktor erstellt werden übersetzt, wenn die Funktion erstellt wird. Das ist weniger effizient als die Erstellung mit einer {{jsxref("Statements/function*", "function* Ausdruck")}} und Aufrufe im Quelltext, weil solche Funktionen dem dem Rest des Quelltextes übersetzt werden.

Alle Argumente, die der Funktion übergeben werden, werden als Namen der Bezeichner behandelt und werden als Parameter der Funktion übergen. Die Reihenfolge ist die angegebene Reihenfolge.

> **Hinweis:** {{jsxref("Statements/function*", "Generator Function")}}, die mit dem `GeneratorFunction` Konstruktor erstellt werden erstellen keine Closures im Erstellungskontext. Sie werden immer im globalen Sichtbarkeitsbereich erstellt. Wenn diese ausgeführt werden, haben sie nur Zugriff auf eigene lokale Variablen und globale Variablen, jedoch nicht auf Variablen des Scopes, in der `GeneratorFunction` Konstruktor aufgerufen wird. Dieses unterscheidet diese Methode von {{jsxref("Global_Objects/eval", "eval")}} mit dem Quelltext einer Generatorfunktion.

Das Aufrufen des `GeneratorFunction` Konstruktors als Funktion (ohne Einsatz des `new` Operator) hat den selben Effekt wie beim Aufruf als Konstruktor.

## Eigenschaften

- **`GeneratorFunction.length`**
  - : Die Länge des `GeneratorFunction` Konstruktor Eigenschaft, welche 1 ist.
- {{jsxref("GeneratorFunction.prototype")}}
  - : Erlaubt das Hinzufügen von Eingenschaften für alle Generatorfunktionsobjekte.

## `GeneratorFunction` Prototyp Objekt

### Eigenschaften

{{page('/de/docs/Web/JavaScript/Reference/Global_Objects/GeneratorFunction/prototype', 'Eigenschaften')}}

## `GeneratorFunction` Instanzen

`GeneratorFunction` Instanzen erben Methoden und Eigenschaften von {{jsxref("GeneratorFunction.prototype")}}. Wie bei allen Konstruktoren, kann man das Konstruktor Prototyp Objekt ändern, um diese für alle`GeneratorFunction` Instanzen zu übernehmen.

## Beispiele

### Erstellen einer Generatorfunktion mit einem `GeneratorFunction` Konstruktor

```js
var GeneratorFunction = Object.getPrototypeOf(function*(){}).constructor
var g = new GeneratorFunction('a', 'yield a * 2');
var iterator = g(10);
console.log(iterator.next().value); // 20
```

## Spezifikationen

| Spezifikation                                                                                            | Status                       | Kommentar            |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2015', '#sec-generatorfunction-objects', 'GeneratorFunction')}} | {{Spec2('ES2015')}}     | Initiale Definition. |
| {{SpecName('ESDraft', '#sec-generatorfunction-objects', 'GeneratorFunction')}} | {{Spec2('ESDraft')}} |                      |

## Browserkompatibilität

{{Compat("javascript.builtins.GeneratorFunction")}}

## Siehe auch

- {{jsxref("Statements/function*", "function* function")}}
- {{jsxref("Operators/function*", "function* Ausdruck")}}
- {{jsxref("Global_Objects/Function", "Function")}}
- {{jsxref("Statements/function", "function Statement")}}
- {{jsxref("Operators/function", "function Ausdruck")}}
- {{jsxref("Functions_and_function_scope", "Funktionen und Sichtbarkeiten", "", 1)}}
