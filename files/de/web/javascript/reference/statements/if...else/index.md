---
title: if...else
slug: Web/JavaScript/Reference/Statements/if...else
tags:
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/if...else
---
{{jsSidebar("Statements")}}

Die **if-Anweisung** führt Anweisungen aus, wenn eine bestimmte Bedingung zu `true` ausgewertet wird. Wird die Bedingung zu `false` ausgewertet, können andere Anweisungen ausgeführt werden.

{{EmbedInteractiveExample("pages/js/statement-ifelse.html")}}

## Syntax

    if (bedingung) anweisung1 [else anweisung2]

- `bedingung`
  - : Ein [Ausdruck](/de/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions), der zu `true` oder `false` ausgewertet wird.

<!---->

- `anweisung1`
  - : Eine Anweisung, die ausgeführt wird, wenn `bedingung` zu `true` ausgewertet wird. Diese Anweisung kann jede gültige Anweisung sein, auch eine if-Anweisung. Um mehrere Anweisungen auszuführen, muss eine {{jsxref("Statements/block", "block")}}-Anweisung (`{...}`) genutzt werden, um die Anweisungen zu gruppieren. Wenn keine Anweisung ausgeführt werden soll, muss die {{jsxref("Statements/empty", "empty")}}-Anweisung genutzt werden.

<!---->

- `anweisung2`
  - : Eine Anweisung, die ausgeführt wird, wenn `bedingung` zu false ausgewertet wird und die `else` Klausel existiert. Auch hier können alle Anweisungen, egal ob {{jsxref("Statements/block", "block")}}-Anweisung (`{...}`) oder weitere if-Anweisungen genutzt werden.

## Beschreibung

Mehrere `if...else`-Anweisungen können verschachtelt werden, wenn eine `else if`-Klausel erstellt wird. Zu beachten ist, dass es in JavaScript kein Schlüsselwort `elseif` (in einem Wort) gibt.

    if (bedingung1)
       anweisung1
    else if (bedingung2)
       anweisung2
    else if (bedingung3)
       anweisung3
    ...
    else
       anweisungN

Um zu sehen wie das funktioniert, ist es hilfreich, die verschachtelten Anweisungen einzurücken:

    if (bedingung1)
       anweisung1
    else
       if (bedingung2)
          anweisung2
       else
          if (bedingung3)
    ...

Um mehrere Anweisungen in einer Klausel auszuführen, muss eine {{jsxref("Statements/block", "block")}}-Anweisung genutzt werden. Allgemein ist es immer gute Praxis (best practice) eine {{jsxref("Statements/block", "block")}}-Anweisung zu nutzen, besonders bei verschachtelten `if`-Anweisungen.

    if (bedingung) {
      anweisung1
    } else {
      anweisung2
    }

Man sollte den primitiven boolean-Datentyp nicht mit dem {{jsxref("Global_Objects/Boolean", "Boolean")}}-Objekt verwechseln. Jeder Wert, der nicht `undefined`, `null`, `0`, `NaN`, oder der leere string (`""`) ist, wird zu `true` ausgewertet. Dabei ist auch ein {{jsxref("Global_Objects/Boolean", "Boolean")}}-Objekt mit dem Wert false inbegriffen.

```js
var b = new Boolean(false);
if (b) // wird zu true ausgewertet
```

## Beispiele

### Einsatz von `if...else`

```js
if (cipher_char === from_char) {
  result = result + to_char;
  x++;
} else {
  result = result + clear_char;
}
```

### Einsatz von `else if`

Zu beachten ist, dass in JavaScript kein `elseif`-Schlüsselwort existiert. Man kann jedoch immer ein Leerzeichen zwischen `else` und `if` benutzen.

```js
if (x > 5) {

} else if (x > 50) {

} else {

}
```

### Zuweisungen in der Bedingung

Es ist nicht ratsam einfache Zuweisungen in die Bedingung zu schreiben, weil sie zu Verwechselungen mit dem Gleichheit-Operator führen kann. Zum Beispiel führt folgender Quelltext, der eine Zuweisung enthält immer zu 'true' und sollte daher so nicht benutzt werden:

```js example-bad
if (x = y) {
   /* tu das richtige */
}
```

Wenn es nötig ist, eine Zuweisung in einer Bedingungs-Anweisunge zu benutzen, dann sollten Klammern um die Zuweisung gesetzt werden. Der Effekt ist jedoch derselbe, wie im vorangegangenen Code. Zum Beispiel:

```js example-good
if ((x = y)) {
   /* tu das richtige */
}
```

## Spezifikationen

| Spezifikation                                                                    | Status                       | Kommentar           |
| -------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ESDraft', '#sec-if-statement', 'if statement')}} | {{Spec2('ESDraft')}} |                     |
| {{SpecName('ES6', '#sec-if-statement', 'if statement')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ES5.1', '#sec-12.5', 'if statement')}}             | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES3', '#sec-12.5', 'if statement')}}                 | {{Spec2('ES3')}}         |                     |
| {{SpecName('ES1', '#sec-12.5', 'if statement')}}                 | {{Spec2('ES1')}}         | Initiale Definition |

## Browserkompatibilität

{{Compat("javascript.statements.if_else")}}

## Siehe auch

- {{jsxref("Statements/block", "block")}}
- {{jsxref("Statements/switch", "switch")}}
- {{jsxref("Operators/conditional_operator", "Bedingter (ternärer) Operator")}}
