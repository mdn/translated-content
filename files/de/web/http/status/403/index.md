---
title: 403 Forbidden
slug: Web/HTTP/Status/403
tags:
  - Client-Fehler
  - Clientfehler
  - HTTP
  - HTTP-Statuscode
  - Statuscode
translation_of: Web/HTTP/Status/403
---
{{HTTPSidebar}}

Der HTTP **`403 Forbidden`** Statuscode zeigt an, dass der Server die Anfrage zwar verstanden hat, aber sich weigert, sie zuzulassen.

Dieser Status ist {{HTTPStatus("401")}} ähnlich, aber ein erneutes Anmelden wird am Ergebnis nichts ändern. Der Zugriff ist dauerhaft verboten und liegt an der Anwendungslogik, wie etwa unzureichenden Rechten für eine Ressource.

## Status

    403 Forbidden

## Beispielantwort

    HTTP/1.1 403 Forbidden
    Date: Wed, 21 Oct 2015 07:28:00 GMT

## Spezifikationen

| Spezifikation                                            | Titel                           |
| -------------------------------------------------------- | ------------------------------- |
| {{RFC("7231", "403 Forbidden" , "6.5.3")}} | HTTP/1.1: Semantics and Content |

## Browserkompatibilität

{{Compat("http.status.403")}}

## Siehe auch

- {{HTTPStatus("401")}}
