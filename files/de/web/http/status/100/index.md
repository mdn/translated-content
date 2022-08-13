---
title: 100 Continue
slug: Web/HTTP/Status/100
tags:
  - HTTP
  - Informationell
  - Statuscode
translation_of: Web/HTTP/Status/100
---
{{HTTPSidebar}}

Der HTTP **`100 Continue`** Statuscode zeigt an, dass bisher alles in Ordnung ist und der Client mit der Anfrage fortfahren oder ihn ignorieren kann, sofern sie schon beendet ist.

Damit ein Server die Header der Anfrage überprüft, muss ein Client in seiner ursprünglichen Anfrage ein `Expect: 100-continue` senden und einen `100 Continue` Statuscode als Antwort bekommen bevor der Inhalt gesendet wird.

## Status

    100 Continue

## Spezifikationen

| Spezifikation                                            | Titel                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "100 Continue" , "6.2.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser-Kompatibilität

{{Compat("http.status.100")}}

## Siehe auch

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
