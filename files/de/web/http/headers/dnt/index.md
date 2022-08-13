---
title: DNT
slug: Web/HTTP/Headers/DNT
tags:
  - DNT
  - HTTP
  - Refernz
  - header
translation_of: Web/HTTP/Headers/DNT
---
{{HTTPSidebar}}

Der **`DNT`** (**D**o **N**ot **T**rack, engl. "Bitte nicht Tracken") Anfragenheader indiziert, die Tracking-Präferenz des Nutzers. Er lässt den Nutzer indizieren, ob dieser lieber Privatsphäre als personalisierten Kontent hätte.

| Header-Typ                                       | {{Glossary("Request header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | Ja                                       |

## Syntax

    DNT: 0
    DNT: 1

## Directives

- 0
  - : Der Nutzer erlaubt das Tracking auf der Zielseite.
- 1
  - : Der Nutze möchte auf der Zielseite lieber nicht getrackt werden.

## Examples

### Die DNT-Präferenz per JavaScript auslesen

Die DNT-Präferenz des Nutzers kann auch per JavaScript, dank dem {{domxref("Navigator.doNotTrack")}} Wert, ausgelesen werden:

```js
navigator.doNotTrack; // "0" oder "1"
```

## Specifikationen

| Specification                                                                                                | Status                       | Comment                |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ---------------------- |
| {{SpecName('Tracking','#dnt-header-field', 'DNT Header Field for HTTP Requests')}} | {{Spec2("Tracking")}} | Erstmalige Definition. |

## Browser compatibility

{{Compat("http.headers.DNT")}}

## Siehe auch

- {{domxref("Navigator.doNotTrack")}}
- {{HTTPHeader("Tk")}} header
- [Do Not Track on Wikipedia](https://en.wikipedia.org/wiki/Do_Not_Track)
- [What Does the "Track" in "Do Not Track" Mean? – EFF](https://www.eff.org/deeplinks/2011/02/what-does-track-do-not-track-mean)
- [donottrack.us](http://donottrack.us/)
- DNT Browsereinstellungen:

  - [Firefox](https://www.mozilla.org/en-US/firefox/dnt/)
  - [Chrome](https://support.google.com/chrome/answer/2790761)
