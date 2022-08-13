---
title: DOMParser
slug: Web/API/DOMParser
translation_of: Web/API/DOMParser
---
{{APIRef("DOM")}}{{SeeCompatTable}}

Der DOMParser kann XML oder HTML aus einem String in ein DOM-[Document](/de/docs/DOM/document "document") parsen. Der DOMParser ist spezifiziert in [DOM Parsing and Serialization](http://html5.org/specs/dom-parsing.html).

[XMLHttpRequest](/de/docs/DOM/XMLHttpRequest "DOM/XMLHttpRequest") unterstützt das parsen von XML- und HTML-Dokumenten auf die über eine URL zugegriffen wird.

## DOMParser erzeugen

Um einen neuen `DOMParser` zu erzeugen benutze einfach `new DOMParser()`.

Für mehr Informationen über das Erstellen von einem `DOMParser` in einer Firefox-Erweiterung, konsultiere die [`nsIDOMParser`](/de/docs/nsIDOMParser "nsIDOMParser")-Dokumentation.

## XML parsen

Nachdem du einmal ein Parser-Objekt erzeugt hast, kannst du XML-Strings mit der `parseFromString`-Methode parsen.

```js
const parser = new DOMParser();
const doc = parser.parseFromString(stringContainingXMLSource, "application/xml");
```

### Fehlerbehandlung

Beachte dass derzeit keine Exception ausgelöst wird, wenn es beim Ausführen des Parser-Prozesses zu einem Fehler kommen sollte. Stattdessen wird ein Fehler-Dokument (s.a. {{Bug(45566)}}) ausgelöst:

```xml
<parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml">
(error description)
<sourcetext>(a snippet of the source XML)</sourcetext>
</parsererror>
```

Die Parsing-Fehler werden auch in der Error-Console, zusammen mit dem Dokument-URl als Fehlerquelle ausgegeben (s.u.).

## Ein SVG- oder HTML-Dokument parsen

Der `DOMParser` beherrscht auch SVG {{geckoRelease("10.0")}} und HTML {{geckoRelease("12.0")}}. Es gibt drei mögliche Ergebnisse, die mit der Übergabe eines MIME-Typen ausgewählt werden können. Ist der MIME-Typ `text/xml`, ist das resultierende Dokument ein `XMLDocument`, ist er `image/svg+xml`, wird ein `SVGDocument` zurückgegeben und für `text/html` erhält man ein `HTMLDocument`.

```js
const xmlDoc = new DOMParser().parseFromString(stringContainingXMLSource, "application/xml");
// returns a Document, but not a SVGDocument nor a HTMLDocument

const svgDoc = new DOMParser().parseFromString(stringContainingXMLSource, "image/svg+xml");
// returns a SVGDocument, which also is a Document.

const htmlDoc = new DOMParser().parseFromString(stringContainingHTMLSource, "text/html");
// returns a HTMLDocument, which also is a Document.
```

### DOMParser HTML-Erweiterung für andere Browser

```js
/* inspiriert von https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function(DOMParser) {
    "use strict";

    const proto = DOMParser.prototype;
    const nativeParse = proto.parseFromString;

    // Firefox/Opera/IE werfen bei unbekannten Typen Fehler
    try {
        // WebKit gibt bei bei unbekannten Typen `null` zurück
        if (new DOMParser().parseFromString("", "text/html")) {
            // text/html wird unterstützt
            return;
        }
    } catch (ex) {}

    proto.parseFromString = function(markup, type) {
        if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
            const doc = document.implementation.createHTMLDocument("");
            if (markup.toLowerCase().includes('<!doctype')) {
                doc.documentElement.innerHTML = markup;
            } else {
                doc.body.innerHTML = markup;
            }
            return doc;
        } else {
            return nativeParse.apply(this, arguments);
        }
    };
}(DOMParser));
```

### Den DOMParser im Chrome/JSM/XPCOM/Privileged-Scope aufrufen

Siehe [nsIDOMParser](/de/docs/nsIDOMParser)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Parsing and serializing XML](/de/docs/Parsing_and_serializing_XML "Parsing_and_serializing_XML")
- [XMLHttpRequest](/de/docs/DOM/XMLHttpRequest "DOM/XMLHttpRequest")
- [XMLSerializer](/de/docs/XMLSerializer "XMLSerializer")
- [Parsing HTML to DOM](/en-US/Add-ons/Code_snippets/HTML_to_DOM)
