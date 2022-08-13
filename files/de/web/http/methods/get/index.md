---
title: GET
slug: Web/HTTP/Methods/GET
tags:
  - Anfragemethode
  - HTTP
  - Referenz
translation_of: Web/HTTP/Methods/GET
---
{{HTTPSidebar}}

Die **HTTP `GET` Methode** fordert eine Darstellung einer spezifischen Ressource an. Anfragen die `GET` benutzen, sollten nur Daten abholen.

| Anfrage hat einen Inhalt (Body)              | Nein |
| -------------------------------------------- | ---- |
| Erfolgreiche Antwort hat einen Inhalt (Body) | Ja   |
| {{Glossary("Safe")}}                 | Ja   |
| {{Glossary("Idempotent")}}         | Ja   |
| {{Glossary("Cacheable")}}             | Ja   |
| Erlaubt in HTML Formularen                   | Ja   |

## Syntax

    GET /index.html

## Spezifikation

| Spezifikation                            | Titel                                                         |
| ---------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "GET", "4.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browserkompatibilität

{{Compat("http.methods.GET")}}

## Siehe auch

- [HTTP Headers](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Range")}}
- [POST](/de/docs/Web/HTTP/Methods/POST)
