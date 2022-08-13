---
title: block
slug: Web/JavaScript/Reference/Statements/block
tags:
  - Anweisung
  - JavaScript
  - Statement
translation_of: Web/JavaScript/Reference/Statements/block
---
{{jsSidebar("Statements")}}

Eine **Blockanweisung** (oder in anderen Sprachen **Verbundanweisung**) wird genutzt, um Anweisungen zu gruppieren. Ein Block wird durch ein Paar geschweifte Klammern abgegrenzt. Optional kann ihm ein {{jsxref("Statements/label", "Label")}} zugewiesen werden.

{{EmbedInteractiveExample("pages/js/statement-block.html", "taller")}}

## Syntax

    [label:] {
      anweisung_1;
      anweisung_2;
      ...
      anweisung_n;
    }

- `anweisung1`, `anweisung2`, `anweisungN`
  - : Anweisungen, die zu einer Blockanweisung gruppiert werden.
- `label`
  - : Ein optionales {{jsxref("Statements/label", "Label")}}, entweder nur als Kennzeichnung oder als Referenz für die Verwendung in einer {{jsxref("Statements/break", "break")}}-Anweisung.

## Beschreibung

Eine Blockanweisung wird meistens in Verbindung mit Komtrollfluss-Anweisungen (z. B. {{jsxref("Statements/if...else", "if…else")}}, {{jsxref("Statements/for", "for")}}, {{jsxref("Statements/while", "while")}}) genutzt. Zum Beispiel:

```js
while (x < 10) {
  x++;
}
```

Zu beachten ist, dass eine Blockanweisung nicht mit einem Semikolon endet.

In anderen Sprachen wird eine Blockanweisung auch oftmals Verbundanweisung genannt. Dieser erlaubt den Einsatz mehrerer Anweisungen an Stellen, an denen JavaScript nur eine Anweisung erwartet. Das Kombinieren von Anweisungen in Blöcken ist in Javascript gängige Praxis. Mit einer {{jsxref("Statements/empty", "empty")}}-Anweisung ist auch der gegenteilige Fall umsetzbar (keine Anweisung an Stellen, an denen Anweisungen erwartet werden).

### Variablen in Blockgültigkeitsbereichen

**Wichtig**: Variablen, die mit {{jsxref("Statements/var", "var")}} deklariert werden, haben keinen Blockgültigkeitsbereich. Sie sind an den Gültigkeitsbereich der umschließenden Funktion oder des Skripts gebunden. Variablen sind folglich auch außerhalb des Blocks verfügbar, in dem sie deklariert wurden. Beispiel:

```js example-bad
var x = 1;
{
  var x = 2;
}
console.log(x); // Ausgabe: 2
```

Die Ausgabe zeigt _2_, weil die Anweisungen `var x` außerhalb des Blocks und innerhalb des Blocks den gleichen Gültigkeitsbereich haben. In anderen Sprachen würde dieser Code _1_ ausgeben.

Um die Gültigkeit auf den Block zu begrenzen, muss {{jsxref("Statements/let", "let")}} eingesetzt werden:

```js
let x = 1;
{
  let x = 2; // dieses x ist nur in diesem Block sichtbar
}
console.log(x); // Ausgabe: 1
```

## Spezifikationen

| Spezifikation                                                                | Status                       | Kommentar                                          |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-block', 'Block statement')}} | {{Spec2('ESDraft')}} |                                                    |
| {{SpecName('ES6', '#sec-block', 'Block statement')}}         | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ES5.1', '#sec-12.1', 'Block statement')}}     | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES3', '#sec-12.1', 'Block statement')}}         | {{Spec2('ES3')}}         |                                                    |
| {{SpecName('ES1', '#sec-12.1', 'Block statement')}}         | {{Spec2('ES1')}}         | Erste Definition. Implementiert in JavaScript 1.0. |

## Browserkompatibilität

{{Compat("javascript.statements.block")}}

## Siehe auch

- {{jsxref("Statements/while", "while")}}
- {{jsxref("Statements/if", "if")}}
- {{jsxref("Statements/let", "let")}}
