---
title: 410 Gone
slug: Web/HTTP/Status/410
tags:
  - Client-Fehler
  - HTTP
  - HTTP-Statuscode
  - Referenz
  - Statuscode
translation_of: Web/HTTP/Status/410
---
{{HTTPSidebar}}

Der HTTP-Statuscode **`410`\*\***` Gone`\*\* zeigt an, dass der Zugriff auf die Zielressource über den Server nicht länger möglich ist und dieser Zustand wahrscheinlich permanent sein wird.

Wenn Sie sich nicht sicher sind, ob es sich um einen temporären oder permanenten Zustand handeln wird, sollte ein {{HTTPStatus(404)}}-Statuscode verwendet werden.

Das Englische "Gone" lässt sich in diesem Zusammenhang am besten mit "weg" oder "verschwunden" übersetzen, im vergleich zum "nicht gefunden" von {{HTTPStatus(404)}}

> **Note:** Anmerkung: Eine Antwort mit Statuscode 410 ist standardmäßig im Cache speicherbar.

## Status

    410 Gone

## Spezifikationen

| Spezifikation                                    | Titel                                                         |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "410 Gone" , "6.5.9")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser-Kompatibilität

{{Compat("http.status.410")}}

## Siehe auch

- {{HTTPStatus(404)}}
