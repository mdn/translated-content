---
title: var
slug: Web/JavaScript/Reference/Statements/var
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/var
---
{{jsSidebar("Statements")}}

Mit dem Schlüsselwort **`var` **deklariert man Variablen und initialisiert diese optional.

## Syntax

    var varname1 [= wert1] [, varname2 [= wert2] ... [, varnameN [=wertN]]];

- `varnameN`
  - : Variablenname. Jeder legale Bezeichner ist erlaubt.

<!---->

- `wertN`
  - : Initialwert der Variablen. Jeder legale Ausdruck ist erlaubt.

## Beschreibung

Variablendeklarationen werden immer ausgeführt bevor Programmcode ausgeführt wird, egal wo sie im Programmcode vorkommen. Der Gültigkeitsbereich einer Variablendeklaration mit `var` ist der aktuelle Kontext. Dieser ist der Kontext der umschließenden Funktion oder für Deklarationen außerhalb von Funktionen der globale Kontext.

Das Zuweisen eines Wertes zu einer nicht deklarierten Variablen führt immer dazu, dass eine globale Variable erstellt wird (die Variable wird auf dem globalen Objekt erstellt). Die Unterschiede zwischen deklarierten und nicht deklarierten Variablen sind:

1\. Deklarierte Variablen sind immer in dem Kontext gültig, in dem sie deklariert wurden. Undeklarierte Variablen sind immer globale Variablen.

```js
function x() {
  y = 1;   // erzeugt einen ReferenceError im strict mode
  var z = 2;
}

x();

console.log(y); // gibt "1" aus
console.log(z); // erzeugt einen ReferenceError: z ist nur in x verfügbar.
```

2\. Deklarierte Variablen werden erstellt bevor Programmcode ausgeführt wird. Undeklarierte Variablen existieren nicht bevor die Zuweisung ausgeführt wurde.

```js
console.log(a);                // erzeugt einen ReferenceError.
console.log('still going...'); // wird nie ausgeführt
```

```js
var a;
console.log(a);                // gibt "undefined" oder "" aus, abhängig vom Browser.
console.log('still going...'); // gibt "still going..." aus.
```

3\. Deklarierte Variablen sind nicht konfigurierbare Attribute des ausführenden Kontexts (Funktion oder globaler Kontext). Undeklarierte Variablen sind konfigurierbar (z. B. sie können gelöscht werden).

```js
var a = 1;
b = 2;

delete this.a; // erzeugt einen TypeError im strict mode. Andernfalls wird es ignoriert
delete this.b;

console.log(a, b); // erzeugt einen ReferenceError.
// Das 'b' Attribut wurde gelöscht und existiert nicht länger.
```

Wegen dieser drei Unterschiede führt das Fehlen der Variablendeklaration zu unerwarteten Ergebnissen. **Deswegen ist es empfohlen immer Variablen zu deklarieren, unabhängig davon, ob sie sich in einer Funktion oder im globalen Kontext befinden.** Zudem wird im ECMAScript 5 `{{jsxref("</code>Functions_and_function_scope/Strict_mode<code>", "strict mode")}} `ein Fehler erzeugt, wenn einer nicht deklarierten Variablen ein Wert zugewiesen wird.

### var hoisting

Weil Variablendeklarationen (und Deklarationen im Allgemeinen) vor dem Ausführen von Programmcode geschieht, ist das Deklarieren einer Variable irgendwo im Programmcode das gleiche, als würde sie am Anfang deklariert werden. Das bedeutet, dass eine Variable benutzt werden kann bevor sie im Programmcode deklariert wurde. Dieser Umstand wird "hoisting" genannt und wird möglich, weil die Deklaration der Variablen an den Anfang der Funktion oder den Anfang des globalen Programmcodes verschoben wird.

```js
bla = 2
var bla;
// ...

// Implizit wird Folgendes gemacht:

var bla;
bla = 2;
```

Aus diesem Grund ist es empfohlen Variablen immer am Anfang ihres Gültigkeitsbereiches zu definieren. Dadurch wird klarer, welche Variable vom lokalen Gültigkeitsbereich stammt und welche über die Gültigkeitsbereichekette gefunden werden muss.

## Beispiele

### Deklarieren und initialisieren zweier Variablen

    var a = 0, b = 0;

### Zuweisung zweier Variablen mit einer Zeichenkette

```js
var a = "A";
var b = a;

// Das gleiche wie:

var a, b = a = "A";
```

Sei aufmerksam mit der Reihenfolge:

```js
var x = y, y = 'A';
console.log(x + y); // undefinedA
```

`x `und `y `werden deklariert bevor Programmcode ausgeführt wird. Die Zuweisungen geschehen später. Wenn "`x = y`" ausgeführt wird, existiert `y `schon mit dem Wert `undefined`, weshalb kein Fehler erzeugt wird. `x `wird der Wert `undefined` zugewiesen. Dann wird `y `der Wert 'A' zugewiesen. Nach dieser einen Zeile ist demnach das Resultat `x === undefined && y === 'A'`.

### Initialisierung mehrerer Variablen

```js
var x = 0;

function f(){
  var x = y = 1; // x ist lokal Deklariert. y nicht!
}
f();

console.log(x, y); // 0, 1
// Nicht im strict-mode:
// x ist die erwartetete globale Variable und nicht die lokale.
// y wird global angelegt und der Wert 1 zugewiesen!
```

### Implizierte globale Variablen und Gültigkeitsbereiche äußerer Funktionen

Variablen die scheinbar global verfügbar sind, stammen manchmal aus dem Gültigkeitsbereich einer äußeren Funktion:

```js
var x = 0;  // x ist global deklariert und mit dem Wert 0 initialisiert.

console.log(typeof z); // undefined, solange z noch nicht existiert

function a() { // Wenn a aufgerufen wird,
  var y = 2;   // wird y in der Funktion a deklariert und der Wert 2 wird zugewiesen

  console.log(x, y);   // 0 2

  function b() {       // Wenn b aufgerufen wird,
    x = 3;  // wird 3 der globalen Variablen x zugewiesen
            // (es wird keine neue globale Variable erstellt)
    y = 4;  // wird 4 der Variablen y (äußere Funktion) zugewiesen
            // (es wird keine neue globale Variable erstellt)
    z = 5;  // wird eine globale Variable z erstellt und der Wert 5 wird zugewiesen.
  }         // (erzeugt einen ReferenceError im strict mode.)

  b();     // Aufruf von b (erstellt z als globale Variable)
  console.log(x, y, z);  // 3 4 5
}

a();                   // Aufruf von a und somit auch von b
console.log(x, z);     // 3 5
console.log(typeof y); // undefined weil y local in der Funktion a deklariert wurde.
```

## Spezifikationen

| Spezifikation                                                                                    | Status                       | Kommentar                                            |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES1')}}                                                                         | {{Spec2('ES1')}}         | Initiale Definition. Implementiert in JavaScript 1.0 |
| {{SpecName('ES5.1', '#sec-12.2', 'var statement')}}                             | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-variable-statement', 'variable statement')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-variable-statement', 'variable statement')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- `{{jsxref("Anweisungen/let", "let")}}`
- `{{jsxref("Anweisungen/const", "const")}}`
