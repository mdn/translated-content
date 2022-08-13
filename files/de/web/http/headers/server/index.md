---
title: Server
slug: Web/HTTP/Headers/Server
tags:
  - HTTP
  - header
translation_of: Web/HTTP/Headers/Server
---
{{HTTPSidebar}}

Der **`Server`**-Header beinhaltet Informationen über die Software, die von dem Ursprungsserver verwendet wurde, um die Anfrage zu behandeln.

Zu lange und detailierte Server-Werte sollten vermieden werden, da sie möglicherweise interne Implementations-Details herausgeben, welche es (ein wenig) einfacher für Angreifer machen, bekannte Sicherheitslücken zu finden und auszunutzen.

| Header-Typ                                       | {{Glossary("Response header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | Nein                                     |

## Syntax

    Server: <produkt>

## Directives

- \<produkt>
  - : Der Name der Software oder das (Unter-)Produkt, welches mit Anfragen umgeht.

## Beispiele

    Server: Apache/2.4.1 (Unix)

## Specifikationen

| Specification                                | Title                                                         |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "Server", "7.4.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser-Unterstützung

{{Compat("http.headers.Server")}}

## Siehe auch

- {{HTTPHeader("Allow")}}
