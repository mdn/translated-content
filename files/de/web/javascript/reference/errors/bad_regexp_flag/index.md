---
title: 'SyntaxError: invalid regular expression flag "x"'
slug: Web/JavaScript/Reference/Errors/Bad_regexp_flag
tags:
  - Error
  - JavaScript
  - SyntaxError
translation_of: Web/JavaScript/Reference/Errors/Bad_regexp_flag
original_slug: Web/JavaScript/Reference/Fehler/Bad_regexp_flag
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    SyntaxError: invalid regular expression flag "x" (Firefox)
    SyntaxError: Invalid regular expression flags (Chrome)

## Fehlertyp

{{jsxref("SyntaxError")}}

## Was ist falsch gelaufen?

Es gibt nicht valide Flags in regulären Ausdrücken im Code. In einem regulärem Ausdrucksliteral, welches aus eine Muster umschlossen von Schrägstrichen ist, kommen die Flags nach dem zweiten Schrägstrich. Sie können auch in der Konstruktorfunktion des {{jsxref("RegExp")}} Objektes angegeben werden (zweiter Parameter). Flags für reguläre Ausdrücke können einfach oder zusammen in beliebiger Reihenfolge benutzt werden, jedoch gibt es in ECMAScript nur fünf.

Um ein Flag in regulären Ausdrücken einzufügen kann folgende Syntax benutzt werden:

```js
var re = /pattern/flags;
```

oder

```js
var re = new RegExp('pattern', 'flags');
```

| Flag | Beschreibung                                                                                                                                                                 |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| g    | Globale Suche.                                                                                                                                                               |
| i    | Groß- und Kleinschreibung nicht unterscheiden.                                                                                                                               |
| m    | Suche über mehrere Zeilen.                                                                                                                                                   |
| u    | Unicode; nimmt das Muster als eine Sequenz von Unicode Codepoints an.                                                                                                        |
| y    | Führt eine "sticky" Suche durch, welche zutrifft, wenn der String von der Startposition aus auf das Muster zutrifft. Siehe {{jsxref("RegExp.sticky", "sticky")}}. |

## Beispiele

Es gibt nur fünf valide Flags für reguläre Ausdrücke.

```js example-bad
/foo/bar;

// SyntaxError: invalid regular expression flag "b"
```

Ist eine regulärer Ausdruck gewollt? Ein Ausdruck, der zwei Schrägstriche enthält wird als Literal für reguläre Ausdrücke interpretiert.

```js example-bad
let obj = {
  url: /docs/Web
};

// SyntaxError: invalid regular expression flag "W"
```

Oder war stattdessen ein String gemeint? Füge einfache oder doppelte Anführungszeichen hinzu, um ein Stringliteral zu erstellen.

```js example-good
let obj = {
  url: '/docs/Web'
};
```

### Valide Flags für reguläre Ausdrücke

Siehe in der Tabelle oben für die fünf in JavaScript erlaubten validen Flags für reguläre Ausdrücke

```js example-good
/foo/g;
/foo/gim;
/foo/uy;
```

## Siehe auch

- [Reguläre Ausdrücke](/de/docs/Web/JavaScript/Guide/Regular_Expressions)
- [XRegEx Flags](http://xregexp.com/flags/) – Bibliothek für reguläre Ausdrücke, die vier weitere Flags unterstützt (`n`, `s`, `x`, `A`)
