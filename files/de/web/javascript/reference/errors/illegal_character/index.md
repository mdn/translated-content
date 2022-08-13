---
title: 'SyntaxError: illegal character'
slug: Web/JavaScript/Reference/Errors/Illegal_character
tags:
  - Error
  - Errors
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Illegal_character
original_slug: Web/JavaScript/Reference/Fehler/Illegal_character
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: illegal character (Firefox)
    SyntaxError: Invalid or unexpected token (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es gibt ein nicht valides oder nicht erwartetes Token, welches nicht an eine Position im Code passt. Man sollte einen Editor mit Syntaxhighlighting benutzten und vorsichtig nach Verwechselungen suchen, wie einem Minuszeichen (` - `) und einem Dashzeichen (` – `) oder einfachen Anführungszeichen (` " `) und anderen Anführungszeichen (` “ `).

## Beispiele

### Verwechseltes Zeichen

Einige Zeichen sehen sehr ähnlich aus, aber führen dazu, dass der Code nicht interpretiert werden kann. Bekannte Beispiele dafür sind Anführungszeichen, das Minus oder das Semikolon ([griechisches Fragezeichen (U+37e)](https://de.wikipedia.org/wiki/Fragezeichen#Weitere_Schriftsysteme) sieht genauso aus)

```js example-bad
“This looks like a string”;  // SyntaxError: illegal character
                             // “ und ” sind nicht ", aber sehen so aus

42 – 13;                     // SyntaxError: illegal character
                             // – sind nicht -, aber sieht so aus

var foo = 'bar';             // SyntaxError: illegal character
                             // <37e> sind nicht ;, aber sieht so aus
```

Das funktioniert:

```js example-good
"This is actually a string";
42 - 13;
var foo = 'bar';
```

Einige Editoren und IDEs werden darauf hinweisen oder dieses anderes hervorheben, aber nicht alle. Wenn manchmal so etwas im Code passiert und man in der Lage ist das Problem zu finden, ist es oft das beste die Zeile zu löschen und sie neu einzutippen.

### Vergessene Zeichen

Es passiert schnell, dass man ein Zeichen vergisst.

```js example-bad
var colors = ['#000', #333', '#666'];
// SyntaxError: illegal character
```

Man muss das fehlende Anführungszeichen ergänzen `'#333'`.

```js example-good
var colors = ['#000', '#333', '#666'];
```

### Nicht sichtbare Zeichen

Beim Kopieren und Einfügen von Code aus externen Quellen kann es nicht valide Zeichen geben. Zum Beispiel:

```js example-bad
var foo = 'bar';​
// SyntaxError: illegal character
```

Wenn man den Code in einem Editor wie Vim anschaut, bemerkt man, dass ein[breitenloses Leerzeichen (ZWSP) (U+200B)](https://de.wikipedia.org/wiki/Breitenloses_Leerzeichen) benutzt wird.

```js
var foo = 'bar';​<200b>
```

## Siehe auch

- [Lexikalische Grammatik](/de/docs/Web/JavaScript/Reference/Lexical_grammar)
