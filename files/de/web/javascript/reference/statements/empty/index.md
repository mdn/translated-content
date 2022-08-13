---
title: empty
slug: Web/JavaScript/Reference/Statements/Empty
tags:
  - Anweisung
  - JavaScript
translation_of: Web/JavaScript/Reference/Statements/Empty
---
{{jsSidebar("Statements")}}

Eine **leere Anweisung** dient der Angabe keiner Anweisung, obwohl die JavaScript Syntax eine erwarten würde.

## Syntax

    ;

## Beschreibung

Die leere Anweisung ist ein Semikolon (;) und zeigt an, dass keine Anweisung ausgeführt wird, selbst wenn die JavaScript Syntax eine erfordert. Das gegenteilige Verhalten, bei dem man mehrere Anweisungen haben will, aber JavaScript nur eine einzelne erlaubt, ist die Verwendung einer [Blockanweisung](/de/docs/Web/JavaScript/Reference/Statements/block); sie kombiniert mehrere Anweisungen in einer einzelnen.

## Beispiele

Die leere Anweisung wird manchmal in Schleifenanweisungen verwendet. Siehe dazu das folgende Beispiel mit einem leeren Schleifenkörper:

```js
var arr = [1, 2, 3];

// Alle Arraywerte auf 0 setzen
for (i = 0; i < arr.length; arr[i++] = 0) /* leere Anweisung */ ;

console.log(arr)
// [0, 0, 0]
```

**Hinweis:** Es ist gute Praxis, die beabsichtigte Verwendung der leeren Anweisung durch einen Kommentar zu erklären, da der Unterschied zu einem normalen Semikolon nicht offensichtlich ist. In dem folgenden Beispiel ist die Verwendung möglicherweise nicht beabsichtigt:

```js
if (condition);       // Achtung, der "if" Zweig tut nichts!
   killTheUniverse()  // Daher wird dies hier immer ausgeführt!!!
```

Ein anderes Beispiel: Eine [`if...else`](/de/docs/Web/JavaScript/Reference/Statements/if...else) Anweisung ohne geschweifte Klammern (`{}`). Falls `three` `wahr` ist, geschieht nichts, `four` trifft nicht zu und auch die `launchRocket()` Funktion im `else` Zweig wird nicht ausgeführt.

```js
if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();
```

## Spezifikationen

| Spezifikation                                                                            | Status                       | Kommentar            |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-empty-statement', 'Empty statement')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES6', '#sec-empty-statement', 'Empty statement')}}     | {{Spec2('ES6')}}         |                      |
| {{SpecName('ES5.1', '#sec-12.3', 'Empty statement')}}                 | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES3', '#sec-12.3', 'Empty statement')}}                     | {{Spec2('ES3')}}         |                      |
| {{SpecName('ES1', '#sec-12.3', 'Empty statement')}}                     | {{Spec2('ES1')}}         | Initiale Definition. |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/block", "Blockanweisung")}}
