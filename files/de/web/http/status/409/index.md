---
title: 409 Konflikt
slug: Web/HTTP/Status/409
tags:
  - Client fehler
  - HTTP
  - HTTP Status Code
  - Referenz
translation_of: Web/HTTP/Status/409
---
{{HTTPSidebar}}

Der HTTP **`409 Conflict`** Antwort Status Code indiziert einen Anfragenkonflikt mit dem aktuellen Status des Servers.

Konflikte entstehen meistens als Antwort auf eine {{HTTPMethod("PUT")}} Anfrage. Zum Beispiel erhält man eine 409 Antwort wenn man eine Datei hochlädt, die älter ist als die Datei auf dem Server, wodurch ein Versionskonflikt entsteht

## Status

    409 Conflict

## Specifications

| Specification                                            | Title                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "409 Conflict" , "6.5.8")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## See also

- {{HTTPMethod("PUT")}}
