---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
tags:
  - Clientfehler
  - Fehlermeldung
  - HTTP
  - HTTP-Statuscode
  - Statuscode
translation_of: Web/HTTP/Status/414
---
{{HTTPSidebar}}

Der HTTP-Statuscode **`414 URI Too Long`** zeigt an, dass die vom Client angefragte URI länger ist als das, was der Server zu verarbeiten bereit ist.

Es gibt einige seltene Fälle, in denen so etwas passieren kann:

- wenn ein Client fälschlicherweise eine {{HTTPMethod("POST")}}- in eine {{HTTPMethod("GET")}}-Anfrage umgewandelt hat und die bei der Anfrage übergebenen Daten umfangreich sind,
- wenn der Client in eine Schleife von Weiterleitungen geraten ist (beispielsweise, wenn URIs immer wieder auf eine durch eine Ergänzung verlängerte URI verweisen) oder
- wenn der Server von einem Client angegriffen wird, der versucht, durch die Anfrage sehr langer URIs Sicherheitslücken auszunutzen.

## Status

    414 URI Too Long

## Spezifikationen

| Spezifikation                                                | Titel                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "414 URI Too Long" , "6.5.12")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Siehe auch

- {{Glossary("URI")}}
