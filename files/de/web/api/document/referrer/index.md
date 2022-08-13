---
title: Document.referrer
slug: Web/API/Document/referrer
tags:
  - Referenz
translation_of: Web/API/Document/referrer
---
{{APIRef("DOM")}}

Gibt den [URI](http://www.w3.org/Addressing/#background) der Seite aus, von der die aktuelle Seite aufgerufen wurde.

## Syntax

    var string = document.referrer;

### Wert

Der Wert ist eine leere Zeichenkette, wenn der Benutzer direkt auf die Seite navigiert ist (nicht über einen Link, sondern z.B. über ein Lesezeichen). Da es sich bei dieser Eigenschaft lediglich um einen String handelt, ist der Zugriff auf das DOM der referenzierenden Seite nicht möglich.

Innerhalb eines {{HTMLElement("iframe")}}, wird der `Document.referrer` anfänglich auf den identischen Wert wie {{domxref("HTMLHyperlinkElementUtils/href", "href")}} der {{domxref("Window/location", "Window.location")}} des übergeordneten Fensters gesetzt.

## Spezifikation

| Spezifikation                                                                                            | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', '#dom-document-referrer-dev', 'document.referrer')}} | {{Spec2('HTML WHATWG')}} |           |

## Browser Kompatibilität

{{Compat("api.Document.referrer")}}
