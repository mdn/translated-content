---
title: Anweisungen und Deklarationen
slug: Web/JavaScript/Reference/Statements
tags:
  - JavaScript
  - Reference
  - statements
translation_of: Web/JavaScript/Reference/Statements
---
{{jsSidebar("Statements")}}

JavaScript Anwendungen bestehen aus Anweisungen mit bestimmter Syntax. Eine Anweisung kann mehrere Zeilen umfassen und mehrere Anweisungen können in einer einzigen Zeile stehen, wenn sie mittels Semikolon voneinander getrennt sind.

## Anweisungen und Deklarationen nach Kategorie

Für eine alphabetische Auflistung, siehe Sidebar auf der linken Seite.

### Kontrollfluss

- {{jsxref("Statements/block", "Block")}}
  - : Anweisungsblöcke werden genutzt um ein oder mehrere Anweisungen zu gruppieren. Der Block wird von geschweiften Klammern umfasst.
- {{jsxref("Statements/break", "break")}}
  - : Beendet die aktuelle Schleifen-, Switch-, oder mit Label versehene Anweisung und das Programm wird hinter dieser fortgesetzt.
- {{jsxref("Statements/continue", "continue")}}
  - : Beendet den Durchlauf der aktuellen, bzw. der mittels Label angesprochenen Schleife und fährt mit dem nächsten Schleifendurchlauf fort.
- {{jsxref("Statements/Empty", "Empty")}}
  - : Man verwendet _empty_ anstatt einer echten Anweisung, um keine Anweisung zu geben, an stellen an denen nach JavaScript-Syntax eine erwartet wird.
- {{jsxref("Statements/if...else", "if...else")}}
  - : Führt eine Anweisung aus wenn eine zuvor festgelegte Bedingung erfüllt (als _true_ gewertet) wird. Ist die Bedingung _false,_ kann eine andere Anweisung ausgeführt werden.
- {{jsxref("Statements/switch", "switch")}}
  - : Nach Auswertung eines Ausdrucks, wird anhand des Ergebnisses eine Fallunterscheidung durchgeführt und die entsprechende durch ein case-Label markierte Anweisung ausgeführt.
- {{jsxref("Statements/throw", "throw")}}
  - : Leitet das Auswerfen eines Fehlerausdrucks ein.
- {{jsxref("Statements/try...catch", "try...catch")}}
  - : Ein Anweisungsblock wird "ausprobiert" (try) und ein eventuell auftretender Fehler abgefangen (catch) und gegebenenfalls behandelt.

### Deklarationen

- {{jsxref("Statements/var", "var")}}
  - : Deklariert eine Variable und initialisiert sie optional mit einem Wert.
- {{experimental_inline()}} {{jsxref("Statements/let", "let")}}
  - : Deklariert eine Blocklokale variable und initialisiert sie optional mit einem Wert.
- {{experimental_inline()}} {{jsxref("Statements/const", "const")}}
  - : Deklariert eine Konstante auf welche nur lesend zugegriffen werden kann.

### Funktionen und Klassen

- {{jsxref("Statements/function", "function")}}
  - : Deklariert eine Funktion mit festgelegten Parametern.
- {{experimental_inline()}} {{jsxref("Statements/function*", "function*")}}
  - : Erzeugt Funktionen mit denen Schleifen leichter zu schreiben sind.
- {{jsxref("Statements/async_function", "async function")}}
  - : Deklariert eine asynchrone Funktion mit festgelegten Parametern.
- {{jsxref("Statements/return", "return")}}
  - : Legt den Rückgabewert einer Funktion fest.
- {{jsxref("Statements/class", "class")}}
  - : Deklariert eine Klasse.

### Schleifen

- {{jsxref("Statements/do...while", "do...while")}}
  - : Eine Schleife die solange ausgeführt wird bis die Bedingung false ist. Die Bedingung wird erst am Ende eines Durchgangs überprüft.
- {{jsxref("Statements/for", "for")}}
  - : Erstellt eine von drei unerforderlichen, zwischen Parenthesen geklammerten, durch Semikola getrennten Ausdrücken geregelte Schleife, gefolgt von einem Anweisungsblock innerhalb der Schleife.
- {{deprecated_inline()}} {{non-standard_inline()}} {{jsxref("Statements/for_each...in", "for_each...in")}}
  - : Iterates a specified variable over all values of object's properties. For each distinct property, a specified statement is executed.
- {{jsxref("Statements/for...in", "for...in")}}
  - : Stellt die aufzählbaren Eigenschaften eines Objektes in einer unbestimmten Reihenfolge zur Verfügung. Jede Eigenschaft kann durch Anweisungen in der Schleife ausgewertet werden.
- {{experimental_inline()}} {{jsxref("Statements/for...of", "for...of")}}
  - : Durchläuft die Werte eines [iterationsfähigen](/de/docs/Web/JavaScript/Reference/Iteration_protocols) Objektes, wie zum Beispiel eines [`arrays`](/de/docs/Glossary/array), eines Array-ähnlichen Objektes, oder eines [Iterators oder Generators](/de/docs/Web/JavaScript/Guide/Iteratoren_und_Generatoren). Für jeden Wert des Objektes können Anweisungen ausgewertet werden.
- {{jsxref("Statements/while", "while")}}

  - : Erstellt eine Schleife, die solange durchlaufen wird, wie die Schleifenbedingung wahr ist. Die Schleifenbedingung wird am Anfang der Schleife (vor dem ersten Durchlauf des inneren Befehlsblocks) ausgewertet.

### Weiteres

- {{jsxref("Statements/debugger", "debugger")}}
  - : Ruft irgendwelches verfügbare Fehlerentdeckungsvermögen auf. Steht keines zur Verfügung, hat dieser Befehl keine Wirkung.
- {{experimental_inline()}} {{jsxref("Statements/export", "export")}}
  - : Stellt eine Funktion zur Anwendung in anderen Modulen bereit. Dieser Ausdruck wird in dem Quellenmodul verwendet. Steht in Zusammenhang mit [`import`](/de/docs/Web/JavaScript/Reference/Statements/import) auf der anderen Seite des Wechsels.
- {{experimental_inline()}} {{jsxref("Statements/import", "import")}}
  - : Importiert eine aus einem anderen Modul stammende Funktion, oder den gesamten Modul. Dieser Ausdruck wird in dem Entleihermodul verwendet, und arbeitet in Zusammenhang mit [`export`](/de/docs/Web/JavaScript/Reference/Statements/export).
- {{jsxref("Statements/label", "label")}}
  - : Hängt ein Etikett an eine Anweisung an. Auf dieses Etikett können [`break`](/de/docs/Web/JavaScript/Reference/Statements/break) (aussteigen) oder [`continue`](/de/docs/Web/JavaScript/Reference/Statements/continue) (fortsetzen) hinweisen, um den Kontrollfluss mit einer größeren Genauigkeit zu steuern.

- {{deprecated_inline()}} {{jsxref("Statements/with", "with")}}
  - : Extends the scope chain for a statement.

## Specifications

| Specification                                                                                                                                                                    | Status                       | Comment                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------- |
| {{SpecName('ES1', '#sec-12', 'Statements')}}                                                                                                                     | {{Spec2('ES1')}}         | Initial Definition                           |
| {{SpecName('ES3', '#sec-12', 'Statements')}}                                                                                                                     | {{Spec2('ES3')}}         |                                              |
| {{SpecName('ES5.1', '#sec-12', 'Statements')}}                                                                                                                     | {{Spec2('ES5.1')}}     |                                              |
| {{SpecName('ES6', '#sec-ecmascript-language-statements-and-declarations', 'ECMAScript Language: Statements and Declarations')}}         | {{Spec2('ES6')}}         | Neu: function\*, let, for...of, yield, class |
| {{SpecName('ESDraft', '#sec-ecmascript-language-statements-and-declarations', 'ECMAScript Language: Statements and Declarations')}} | {{Spec2('ESDraft')}} |                                              |

## Browserkompatibilität

{{Compat("javascript.statements")}}

## See also

- [Operators](/de/docs/Web/JavaScript/Reference/Operators)
