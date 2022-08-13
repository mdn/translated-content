---
title: 'URIError: malformed URI sequence'
slug: Web/JavaScript/Reference/Errors/Malformed_URI
tags:
  - Error
  - Errors
  - JavaScript
  - URIError
translation_of: Web/JavaScript/Reference/Errors/Malformed_URI
original_slug: Web/JavaScript/Reference/Fehler/Malformed_URI
---
{{jsSidebar("Errors")}}

## Fehlermeldung

    URIError: malformed URI sequence (Firefox)
    URIError: URI malformed (Chrome)

## Fehlertyp

{{jsxref("URIError")}}

## Was ist falsch gelaufen?

Das URI-Kodieren oder -Dekodieren war nicht erfolgreich. Ein gegebenenes Argument der {{jsxref("decodeURI")}}-, {{jsxref("encodeURI")}}-, {{jsxref("encodeURIComponent")}}-, oder {{jsxref("decodeURIComponent")}}-Funktion ist nicht valide, wodurch die Funktion nicht richtig Kodieren oder Dekodieren kann.

## Beispiele

### Kodieren

Kodieren ersetzt bestimmte Zeichen durch eine Sequenz von einem, zwei, drei oder vier maskierten Zeichen, welche der UTF-8 Kodierung des Zeichens entsprechen. Ein {{jsxref("URIError")}} wird erzeugt, wenn versucht wird ein Zeichen zu kodieren, welches kein Teil des high-low-Paares ist, zum Beispiel:

```js example-bad
encodeURI('\uD800');
// "URIError: malformed URI sequence"

encodeURI('\uDFFF');
// "URIError: malformed URI sequence"
```

Ein high-low Paar ist ok. Zum Beispiel:

```js example-good
encodeURI('\uD800\uDFFF');
// "%F0%90%8F%BF"
```

### Dekodieren

Dekodieren ersetzt eine Sequenz maskierter Zeichen in einer URI-Komponente mit einem Zeichen, welches dieses repräsentiert. Wenn es kein solches Zeichen gibt, wird ein Fehler erzeugt:

```js example-bad
decodeURIComponent('%E0%A4%A');
// "URIError: malformed URI sequence"
```

Mit richiger Eingabe sollte es wie folgendermaßen aussehen:

```js example-good
decodeURIComponent('JavaScript_%D1%88%D0%B5%D0%BB%D0%BB%D1%8B');
// "JavaScript_шеллы"
```

## Siehe auch

- {{jsxref("URIError")}}
- {{jsxref("decodeURI")}}
- {{jsxref("encodeURI")}}
- {{jsxref("encodeURIComponent")}}
- {{jsxref("decodeURIComponent")}}
