---
title: 'SyntaxError: unterminated string literal'
slug: Web/JavaScript/Reference/Errors/Unterminated_string_literal
tags:
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Unterminated_string_literal
original_slug: Web/JavaScript/Reference/Fehler/Unterminated_string_literal
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: unterminated string literal

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es gibt irgendwo einen nicht beendeten {{jsxref("String")}}. Stringliterale müssen mit einfachen (`'`) oder doppelten (`"`) Anführungszeichen umschlossen sein. JavaScript unterscheidet nicht zwischen Strings, die mit einfachen oder doppelten Anführungszeichen umschlossen sind. [Maskierte Sequenzen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation) funktionieren in Strings mit einfachen und doppelten Anführungszeichen. Um den Fehler zu beheben, sollte folgendes überprüft werden:

- Es gibt öffnende und schließende Anführungszeichen (einfache oder doppelte) für alle Stringliterale,
- Stringliterale sind richtig maskiert,
- Stringliterale funktionieren richtig über mehrere Zeilen, wenn es solche gibt.

## Beispiele

### MehrereZeilen

Man kann Strings nicht über mehrere Zeilen in JavaScript schreiben:

```js example-bad
var longString = 'This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.';
// SyntaxError: unterminated string literal
```

Stattdessen muss ein [+ Operator](/de/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Addition), ein Backslask oder ein [Templateliteral](/de/docs/Web/JavaScript/Reference/Template_literals) eingesetzt werden. Die `+` Operator Variante sieht wie folgt aus:

```js example-good
var longString = 'This is a very long string which needs ' +
                 'to wrap across multiple lines because ' +
                 'otherwise my code is unreadable.';
```

Oder man benutzt ein Backslash Zeichen ("\\") am ende jeder Zeile, um anzudeuten, dass der String in der nächsten Zeile weiter geht. Man muss sicherstellen, dass keine Leerzeichen oder andere Zeichen nach dem Backslash stehen (ausgenommen der Zeilenumbruch) oder als Einrückung, ansonsten wird es nicht funktionieren. Diese Form sieht wie folgt aus:

```js example-good
var longString = 'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';
```

Eine andere Möglichkeit ist der Einsatz von [Templateliteralen](/de/docs/Web/JavaScript/Reference/Template_literals), welche in ECMAScript 2015 Umgebungen unterstützt werden:

```js example-good
var longString = `This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.`;
```

## Siehe auch

- {{jsxref("String")}}
- [Templateliterale](/de/docs/Web/JavaScript/Reference/Template_literals)
