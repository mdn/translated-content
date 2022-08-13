---
title: Document.writeln()
slug: Web/API/Document/writeln
translation_of: Web/API/Document/writeln
---
{{ ApiRef("DOM") }}

Schreibt eine Textfolge, gefolgt von einem Zeilenumbruchzeichen, in ein Dokument.

## Syntax

    document.writeln(line);

### Parameters

- `line` ist eine Zeichenfolge welche eine Textzeile enthält.

## Beispiel

    document.writeln("<p>enter password:</p>");

## Notes

**document.writeln** ist dasselbe wie {{domxref("document.write")}} aber fügt einen Zeilenumbruch hinzu.

> **Note:** **document.writeln** (like **document.write**) does not work in XHTML documents (you'll get a "Operation is not supported" (`NS_ERROR_DOM_NOT_SUPPORTED_ERR`) error on the error console). This is the case if opening a local file with a .xhtml file extension or for any document served with an application/xhtml+xml MIME type. More information is available in the [W3C XHTML FAQ](http://www.w3.org/MarkUp/2004/xhtml-faq#docwrite).

## Spezifikation

| Spezifikation                                                                                        | Status                           | Bemerkung |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName("HTML WHATWG", "#dom-document-writeln", "document.writeln()")}} | {{Spec2("HTML WHATWG")}} |           |
| {{SpecName("DOM2 HTML", "html.html#ID-35318390", "document.writeln()")}}     | {{Spec2("DOM2 HTML")}}     |           |

## Browser Kompatibilität

{{Compat("api.Document.writeln")}}
