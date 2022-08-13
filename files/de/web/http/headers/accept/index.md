---
title: Accept
slug: Web/HTTP/Headers/Accept
tags:
  - Anfrage-Header
  - HTTP
  - HTTP Header
translation_of: Web/HTTP/Headers/Accept
---
{{HTTPSidebar}}

Der **`Accept`** Anfrage-HTTP-Header drückt aus, welche Inhaltstypen, ausgedrückt als [MIME-Typen (MIME-Types)](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types), der anfragende Client unterstützt. Durch [Inhalts-Aushandlung (Content negotiation)](/de/docs/Web/HTTP/Content_negotiation) wählt der Ziel-Server einen Inhalts-Typen aus, verwendet diesen für den Inhalt und teilt dem Client diesen über den Antwort-HTTP-Header {{HTTPHeader("Content-Type")}} mit. Browser setzen entsprechende Inhalts-Typen automatisch, je nachdem in welchem Kontext die Anfrage stattfindet: Wenn ein CSS-Stylesheet angefragt wird, wird ein anderer Inhalts-Typ verwendet wie wenn ein Bild, Video oder Script angefragt wird.

| Header-Typ                                                   | {{Glossary("Request header")}}                                                                                                                                           |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("Forbidden header name")}}             | Nein                                                                                                                                                                               |
| {{Glossary("CORS-safelisted request header")}} | Ja, mit der zusätzlichen Restriktion dass die Werte keine _CORS-unsicheren Anfrage-Header-Bytes_ enthalten dürfen: `"():<>?@[\]{}`, Delete, Tab und Kontrollzeichen: 0x00 to 0x19. |

## Syntax

    Accept: <MIME_type>/<MIME_subtype>
    Accept: <MIME_type>/*
    Accept: */*

    // Mehrere Werte, gewichtet mit der {{glossary("quality values", "quality value")}} Syntax:
    Accept: text/html, application/xhtml+xml, application/xml;q=0.9, image/webp, */*;q=0.8

## Direktiven

- `<MIME_type>/<MIME_subtype>`
  - : Ein einfacher, präziser [MIME-Type](/de/docs/Web/HTTP/Basics_of_HTTP/MIME_types) wie `text/html`.
- `<MIME_type>/*`
  - : Ein Mime-Type, aber ohne einen Untertypen. `image/*` z.B. stimmt mit `image/png`, `image/svg`, `image/gif` und allen anderen Bild-Typen überein.
- `*/*`
  - : Irgend ein MIME-Type
- `;q=` (q-Faktor Gewichtung)
  - : Jeder verwendete Wert definiert eine Ordnung der Präferenzen durch einen relativen [Qualitätswert (Quality value)](/de/docs/Glossary/Quality_values), auch als **Gewichtung** bezeichnet.

## Beispiele

    Accept: text/html

    Accept: image/*

    // Standard für allgemeine Anfragen
    Accept: */*

    // Standard für Navigations-Anfragen im Browser
    Accept: text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8

## Spezifikationen

| Specification                                | Title                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Accept", "5.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Context |

## Browserkompatibilität

{{Compat("http.headers.Accept")}}

## Siehe auch

- HTTP [Inhalts-Aushandlung (Content negotiation)](/de/docs/Web/HTTP/Content_negotiation)
- Header, der das Ergebnis der Aushandlung enthält: {{HTTPHeader("Content-Type")}}
- Andere, ähnliche Header: {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Language")}}
