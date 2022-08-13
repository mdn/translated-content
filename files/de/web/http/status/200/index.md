---
title: 200 OK
slug: Web/HTTP/Status/200
tags:
  - '200'
  - Erfolg
  - HTTP
  - HTTP-Statuscode
  - Statuscode
  - ok
translation_of: Web/HTTP/Status/200
---
{{HTTPSidebar}}

Der HTTP-Statuscode **`200 OK`** gibt an, dass eine Anfrage erfolgreich verlaufen ist. Eine 200-Antwort ist standardmäßig im Cache speicherbar.

Die Bedeutung eines Erfolgs hängt von der Art der Anfragemethode ab:

- {{HTTPMethod("GET")}}: Die Datei wurde aufgerufen und wird im Body der Nachricht übertragen.
- {{HTTPMethod("HEAD")}}: Die Entitätsüberschriften befinden sich im Body der Nachricht
- {{HTTPMethod("POST")}}: Die Datei, welche das Ergebnis der Aktion darstellt, befindet sich im Body der Nachricht.
- {{HTTPMethod("TRACE")}}: Der Body der Nachricht enthält die Anfrage so, wie sie der Server erhalten hat.

Der Erfolg eines {{HTTPMethod("PUT")}} oder eines {{HTTPMethod("DELETE")}} ist oft kein `200` `OK` sondern ein {{HTTPStatus("204")}} `No Content` (oder ein {{HTTPStatus("201")}} `Created`, wenn die Datei das erste mal hochgeladen wird.).

## Status

    200 OK

## Spezifikationen

| Spezifikation                                    | Titel                                                       |
| ------------------------------------------------ | ----------------------------------------------------------- |
| {{RFC("7231", "200 OK" , "6.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantik und Inhalt |

## Browser-Kompatibilität

{{Compat("http.status.200")}}

## Siehe auch

- [HTTP request methods](/de/docs/Web/HTTP/Methods)
