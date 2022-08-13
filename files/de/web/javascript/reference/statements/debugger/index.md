---
title: debugger
slug: Web/JavaScript/Reference/Statements/debugger
translation_of: Web/JavaScript/Reference/Statements/debugger
---
{{jsSidebar("Statements")}}

Die Anweisung **debugger** ruft eine nicht näher bestimmte Debugging-Funktionalität des Interpreters auf. Naheliegend, jedoch nicht vorgeschrieben, ist das Pausieren des Programmablaufs und Öffnen des Debuggers an dieser Stelle.
Stellt der Interpreter keine Debugging-Möglichkeiten zur Verfügung, hat die Anweisung keine Auswirkungen.

## Syntax

    debugger;

## Beispiel

Dieses Beispiel zeigt eine Funktion, die mit der debugger-Anweisung beginnt.

```js
function potentiallyBuggyCode() {
    debugger;
    // do potentially buggy stuff to examine, step through, etc.
}
```

Bei Aufruf der Funktion wird das Skript pausiert und der Debugger öffnet sich, um den weiteren Ablauf gezielt kontrollieren zu können.

[![Paused at a debugger statement.](https://mdn.mozillademos.org/files/6963/Screen%20Shot%202014-02-07%20at%209.14.35%20AM.png)](<https://mdn.mozillademos.org/files/6963/Screen Shot 2014-02-07 at 9.14.35 AM.png>)

## Spezifikation

| Spezifikation                                                                        |
| ------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-debugger-statement', 'debugger')}} |

## Browserkompatibilität

{{Compat("javascript.statements.debugger")}}

## Siehe auch

- [Debugging JavaScript](/de/docs/Debugging_JavaScript)
- [The Debugger in the Firefox Developer Tools](/de/docs/Tools/Debugger)
