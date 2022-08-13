---
title: label
slug: Web/JavaScript/Reference/Statements/label
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/label
---
{{jsSidebar("Statements")}}

Ein Statement kann ein Label erhalten und zusammen mit dem {{jsxref("Statements/break", "break")}} oder {{jsxref("Statements/continue", "continue")}} Statements verwendet werden. Das Label ist das Präfix von einem Statement mit einer Bezeichner zum referenzieren.

## Syntax

    label : statement

- `label`
  - : Jeder JavaScript Bezeichner, welches kein reserviertes Wort ist.
- `statement`
  - : Statements. `break` kann mit jedem gelabelten Statement und `continue` kann mit Schleifen-Statements verwendet werden.

## Beschreibung

Sie können ein Label verwenden, um eine Schleife zu identifizieren und danach einen `break `oder `continue `Statement verwenden, um anzugeben ob ein Programm die Schleife abbrechen oder weiter abarbeiten soll.

> **Note:** **Hinweis:** JavaScript hat **KEINE** `goto `Statements. Sie können die Labels nur mit `break` oder `continue `verwenden.

## Beispiele

### Verwenden eines `continue` mit Labels in `for`-Schleifen

```js
var i, j;

loop1:
for (i = 0; i < 3; i++) {      // Das erste for Statement hat den Label "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   // Das zweite for Statement hat den Label "loop2"
      if (i === 1 && j === 1) {
         continue loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}

// Ausgabe ist:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
//   "i = 2, j = 0"
//   "i = 2, j = 1"
//   "i = 2, j = 2"
// Schau, wie "i = 1, j = 1" und"i = 1, j = 2" übersprungen werden
```

### Verwenden eines `continue` Statements mit Label

Gegeben sei ein Array von Elementen und ein Array von Tests. Dieses Beispiel zählt die Anzahl von Elemente, die alle Tests bestehen.

```js
var itemsPassed = 0;
var i, j;

top:
for (i = 0; i < items.length; i++){
  for (j = 0; j < tests.length; j++) {
    if (!tests[j].pass(items[i])) {
      continue top;
    }
  }

  itemsPassed++;
}
```

### Verwenden eines `breaks` mit Labels für `for`-Schleifen

```js
var i, j;

loop1:
for (i = 0; i < 3; i++) {      // Das erste for Statement hat den Label "loop1"
   loop2:
   for (j = 0; j < 3; j++) {   // Das zweite for Statement hat den Label "loop2"
      if (i === 1 && j === 1) {
         break loop1;
      }
      console.log("i = " + i + ", j = " + j);
   }
}

// Ausgabe ist:
//   "i = 0, j = 0"
//   "i = 0, j = 1"
//   "i = 0, j = 2"
//   "i = 1, j = 0"
// Schau den Unterschied zu dem vorigen continue Beispiel an
```

### Verwenden eines Labels im `break` Statement

Gegeben ist ein Array von Items und ein Array von Tests. Dieses Beispiel bestimmt, ob alle Items alle Tests bestehen.

```js
var allPass = true;
var i, j;

top:
for (i = 0; items.length; i++)
  for (j = 0; j < tests.length; i++)
    if (!tests[j].pass(items[i])){
      allPass = false;
      break top;
    }
```

## Spezifikationen

| Spezifikation                                                                                    | Status                       | Kommentar                                            |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                         | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-12.12', 'Labelled statement')}}                     | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-labelled-statements', 'Labelled statement')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-labelled-statements', 'Labelled statement')}} | {{Spec2('ESDraft')}} |                                                      |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/break", "break")}}
- {{jsxref("Statements/continue", "continue")}}
