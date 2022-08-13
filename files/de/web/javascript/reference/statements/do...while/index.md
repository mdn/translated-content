---
title: do...while
slug: Web/JavaScript/Reference/Statements/do...while
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/do...while
---
{{jsSidebar("Statements")}}

Das **`do...while` statement** erstellt eine Schleife, die einen bestimmten Ausdruck ausführt, bis die zu überprüfende Aussage falsch wird. Die Aussage wird überprüft, nachdem der Ausdruck ausgeführt wurde, sodass der Ausdruck mindenstens einmal ausgeführt wird.

## Syntax

    do
       statement
    while (condition);

- `statement`
  - : Ein Ausdruck, welcher mindestens einmal ausgeführt wird und jedes Mal, wenn die Aussage wahr ist, wieder ausgeführt wird. Um mehrere Ausdrücke in der Schleife auszuführen, nutzen Sie eine {{jsxref("Statements/block", "block")}} - Aussage (`{ ... }`) um diese Aussagen zu gruppieren.

- `condition`
  - : Eine Aussage, die nach jedem Durchgang durch die Schleife überprüft wird. Falls `condition` wahr ist, wird das `statement` wieder ausgeführt. Wenn `condition` falsch wird, geht das Programm zu dem Ausdruck nach dem `do...while` über.

## Beispiele

### `do...while`benutzen

In dem folgendem Beispiel wird die `do...while` - Schleife mindestens einmal ausgeführt und wird wieder ausgeführt, bis `i` nicht länger weniger als 5 ist.

```js
var i = 0;
do {
   i += 1;
   console.log(i);
} while (i < 5);
```

## Spezialisierungen

| Spezialisierung                                                                                  | Status                       | Kommentar                                            |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                         | {{Spec2('ES3')}}         | Initiale Definition. Implementiert in JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-12.6.1', 'do-while statement')}}                     | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-do-while-statement', 'do-while statement')}}     | {{Spec2('ES6')}}         | Trailing ; ist jetzt optional.                       |
| {{SpecName('ESDraft', '#sec-do-while-statement', 'do-while statement')}} | {{Spec2('ESDraft')}} |                                                      |

## Browser compatibility

{{Compat}}

## Siehe auch

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/for", "for")}}
