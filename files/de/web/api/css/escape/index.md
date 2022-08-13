---
title: CSS.escape()
slug: Web/API/CSS/escape
tags:
  - API
  - CSS
  - CSSOM
  - Méthode
  - Referenz
  - Statisch
  - escape()
  - maskieren
translation_of: Web/API/CSS/escape
---
{{APIRef("CSSOM")}}{{SeeCompatTable}}

Die statische Methode **`CSS.escape()`** gibt ein {{DOMxRef("CSSOMString")}} zurück, das die maskierte Zeichenfolge des übergebenen String Parameters enthält, hauptsächlich zur Verwendung als Teil eines CSS Selektors.

## Syntax

    escapedStr = CSS.escape(str);

### Parameter

- _str_
  - : Die zu maskierende Zeichenfolge {{DOMxRef("CSSOMString")}}.

## Beispiele

### Grundlegende Ergebnisse

```js
CSS.escape(".foo#bar")        // "\.foo\#bar"
CSS.escape("()[]{}")          // "\(\)\[\]\\{\\}"
CSS.escape('--a')             // "--a"
CSS.escape(0)                 // "\30 ", the Unicode code point of '0' is 30
CSS.escape('\0')              // "\ufffd", the Unicode REPLACEMENT CHARACTER
```

### Verwendung im Kontext

Um einen String als Teil eines Selektors zu maskieren kann die `escape()` Methode verwendet werden:

```js
var element = document.querySelector('#' + CSS.escape(id) + ' > img');
```

Die `escape()` Methode kann auch verwendet werden um Strings zu maskieren. Die Maskierung wird dabei auf Zeichen angewendet, die streng genommen nicht maskiert werden müssen.

```js
var element = document.querySelector('a[href="#' + CSS.escape(fragment) + '"]');
```

## Spezifikation

| Spezifikation                                                                            | Status                   | Kommentar          |
| ---------------------------------------------------------------------------------------- | ------------------------ | ------------------ |
| {{SpecName('CSSOM', '#the-css.escape()-method', 'CSS.escape()')}} | {{Spec2('CSSOM')}} | Initial definition |

## Browserkompatibilität

{{Compat("api.CSS.escape")}}

## Siehe auch

- Das {{DOMxRef("CSS")}} Interface das die statischen Methoden beinhaltet.
- [Ein Polyfill für CSS.escape](https://github.com/mathiasbynens/CSS.escape/blob/master/css.escape.js)
