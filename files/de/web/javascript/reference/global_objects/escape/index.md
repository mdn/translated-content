---
title: escape()
slug: Web/JavaScript/Reference/Global_Objects/escape
tags:
  - JavaScript
  - Veraltet
translation_of: Web/JavaScript/Reference/Global_Objects/escape
---
{{jsSidebar("Objects")}}

Die veraltete Funktion **`escape()`** erzeugt einen neuen Text, in welchem gewisse Zeichen durch eine Hexadezimal-Escape-Sequenz ersetzt wurden. Es wird empfohlen, {{jsxref("encodeURI")}} oder {{jsxref("encodeURIComponent")}} stattdessen zu nutzen.

## Syntax

    escape(str)

### Parameter

- `str`
  - : Ein Text welcher verarbeitet wird.

### Rückgabewert

Ein neuer Text, in welchem gewisse Zeichen escaped wurden.

## Beschreibung

Die `escape`-Funktion ist Teil des _globalen Objektes_. Hierbei werden spezielle Zeichen codiert. Außnahme bilden hier: @\*\_+-./

Die hexadezimale Form für Zeichen, deren Code-Einheitswert 0xFF oder weniger ist, enspricht einer zwei Ziffern großen Escape-Sequenz: %xx. Für Zeichen mit einem größeren Code-Einheitswert wird ein vier-Ziffern-Format genutzt: %**u**xxxx

## Beispiele

```js
escape("abc123");     // "abc123"
escape("äöü");        // "%E4%F6%FC"
escape("ć");          // "%u0107"

// Spezielle Zeichen
escape("@*_+-./");    // "@*_+-./"
```

## Spezifikationen

| Spezifikation                                                            | Status                       | Kommentar                                                                         |
| ------------------------------------------------------------------------ | ---------------------------- | --------------------------------------------------------------------------------- |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Initiale Definition.                                                              |
| {{SpecName('ES5.1', '#sec-B.2.1', 'escape')}}             | {{Spec2('ES5.1')}}     | Informativ definiert in Compatibility Annex B                                     |
| {{SpecName('ES6', '#sec-escape-string', 'escape')}}     | {{Spec2('ES6')}}         | Normativ definitiert in Annex B für Erweiterte ECMAScript-Features in Webbrowsern |
| {{SpecName('ESDraft', '#sec-escape-string', 'escape')}} | {{Spec2('ESDraft')}} | Normativ definitiert in Annex B für Erweiterte ECMAScript-Features in Webbrowsern |

## Browserkompatibilität

{{Compat}}

## Siehe Auch

- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
