---
title: break
slug: Web/JavaScript/Reference/Statements/break
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/break
---
{{jsSidebar("Statements")}}

Die **break** Anweisung beendet die aktuelle Schleife, {{jsxref("Statements/switch", "switch")}}-Anweisung oder Anweisungen die mit einem {{jsxref("Statements/label", "label")}} versehen sind und sorgt dafür, dass das Programm mit der Anweisung weiterläuft, die auf die beendete Anweisung folgt.

## Syntax

    break [Label];

- `Label`
  - : Optional. Ein Bezeichner, der mit einem {{jsxref("Statements/label", "Label")}} einer Anweisung in Verbindung gebracht werden kann. Es wird vorausgesetzt, dass die Anweisung, die beendet wird, eine Schleife oder ein {{jsxref("Statements/switch", "switch")}}-Statement ist.

## Beschreibung

Die `break` Anweisung enthält ein optionales {{jsxref("Statements/label", "Label")}}, mit dem es möglich ist, eine mit einem {{jsxref("Statements/label", "Label")}} versehene Anweisung zu beenden. Dabei muss sich die `break` Anweisung innerhalb der Anweisung, die mit einem {{jsxref("Statements/label", "Label")}} versehen ist, befinden. Die Anweisung, die mit einem Label versehen ist, kann jede {{jsxref("Statements/block", "Block")}}-Anweisung sein und muss nicht zwingend eine Schleife sein.

## Beispiele

Die folgende Funktion nutzt eine `break` Anweisung die die {{jsxref("Statements/while", "while")}} Schleife beendet, wenn `i` gleich `3` ist. Danach gibt die Funktion `3 * x` zurück.

```js
function testBreak(x) {
   var i = 0;

   while (i < 6) {
      if (i == 3) {
         break;
      }
      i += 1;
   }
   return i * x;
}
```

Der folgende Quelltext benutzt die `break` Anweisungen mit einem {{jsxref("Statements/label", "Label")}} auf einem {{jsxref("Statements/block", "Block")}}. Weil `inner_block` innerhalb vom {{jsxref("Statements/block", "Block")}} mit dem `outer_block` {{jsxref("Statements/label", "Label")}} ist, funktioniert `break` fehlerfrei.

```js
outer_block:{
  inner_block:{
    console.log ('1');
    break outer_block;      // breaks out of both inner_block and outer_block
    console.log (':-(');    // skipped
  }

  console.log ('2');        // skipped
}
```

Der folgende Quelltext benutzt eine `break` Anweisung, die nicht auf ein {{jsxref("Statements/label", "Label")}} verweist, in dem sich das `break` befindet. Dieses ist nicht möglich, weshalb ein {{jsxref("Global_Objects/SyntaxError", "SyntaxError")}} erzeugt wird.

```js
block_1:{
  console.log ('1');
  break block_2;            // SyntaxError: Label nicht gefunden
}

block_2:{
  console.log ('2');
}
```

## Spezifikationen

| Spezifikation                                                                            | Status                       | Kommentar                                                     |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                                 | {{Spec2('ES1')}}         | Initiale Definition. nur die Version ohne Labels hinzugefügt. |
| {{SpecName('ES3')}}                                                                 | {{Spec2('ES3')}}         | Version mit Labels hinzugefügt.                               |
| {{SpecName('ES5.1', '#sec-12.8', 'Break statement')}}                 | {{Spec2('ES5.1')}}     |                                                               |
| {{SpecName('ES6', '#sec-break-statement', 'Break statement')}}     | {{Spec2('ES6')}}         |                                                               |
| {{SpecName('ESDraft', '#sec-break-statement', 'Break statement')}} | {{Spec2('ESDraft')}} |                                                               |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Statements/continue", "continue")}}
- {{jsxref("Statements/label", "Label")}}
- {{jsxref("Statements/switch", "switch")}}
