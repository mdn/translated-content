---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
tags:
  - HTTP
  - Statuscode
translation_of: Web/HTTP/Status/401
---
{{HTTPSidebar}}

Der [HTTP](/de/docs/Web/HTTP)-Statuscode **`401 Unauthorized`** gibt an, dass der Server die Anfrage aufgrund fehlender oder ungültiger Authentifizierung abgelehnt hat.

Dieser Statuscode wird zusammen mit dem {{HTTPHeader("WWW-Authenticate")}}-Header gesendet, welcher Informationen zur korrekten Authentifizierung bereithält.

Dieser Statuscode ist ähnlich zu {{HTTPStatus("403")}}, gibt jedoch an, dass eine Authentifizierung möglich ist.

## Status

    401 Unauthorized

## Beispiel für eine Antwort

    HTTP/1.1 401 Unauthorized
    Date: Wed, 21 Oct 2015 07:28:00 GMT
    WWW-Authenticate: Basic realm="Zugang zu geschuetzter Seite"

## Spezifikationen

| Spezifikation                                            | Titel                    |
| -------------------------------------------------------- | ------------------------ |
| {{RFC("7235", "401 Unauthorized" , "3.1")}} | HTTP/1.1: Authentication |

## Browser-Kompatibilität

{{Compat("http.status.401")}}

## Siehe auch

- [HTTP authentication](/de/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
