---
title: 304 Not Modified
slug: Web/HTTP/Status/304
tags:
  - HTTP
  - HTTP-Statuscode
  - Statuscode
  - Weiterleitung
translation_of: Web/HTTP/Status/304
---
{{HTTPSidebar}}

Der HTTP-Statuscode **`304 Not Modified`**gibt an, dass die angeforderten Ressourcen nicht erneut übertragen werden müssen. Es handelt sich um eine implizite Weiterleitung zu einer zwischengespeicherten Ressource. Dies geschieht, wenn die Anforderungsmethode {{glossary("safe")}} ist, wie eine {{HTTPMethod("GET")}}- oder {{HTTPMethod("HEAD")}}-Anfrage oder wenn die Anfrage bedingt ist und einen {{HTTPHeader("If-None-Match")}}- oder {{HTTPHeader("If-Modified-Since")}}-Header verwendet.

Eine entsprechende Antwort mit {{HTTPStatus("200")}} `OK` hätte die Header {{HTTPHeader("Cache-Control")}}, {{HTTPHeader("Content-Location")}}, {{HTTPHeader("Date")}}, {{HTTPHeader("ETag")}}, {{HTTPHeader("Expires")}}, und {{HTTPHeader("Vary")}} enthalten.

> **Note:** Many [developer tools' network panels](/de/docs/Tools/Network_Monitor) of browsers create extraneous requests leading to `304` responses, so that access to the local cache is visible to developers.

## Status

    304 Not Modified

## Spezifikationen

| Spezifikation                                            | Titel                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------ |
| {{RFC("7232", "304 Not Modified" , "4.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Conditional Requests |

## Browserkompatibilität

{{Compat("http.status.304")}}

## Anmerkungen zur Kompatibilität

- Browser verhalten sich unterschiedlich, wenn zu dieser Antwort im Rahmen einer persistenten Verbindung fälschlicherweise ein Body geliefert wird. Genaueres siehe [204 No Content](/de/docs/Web/HTTP/Status/204).

## Siehe auch

- {{HTTPHeader("If-Modified-Since")}}
- {{HTTPHeader("If-None-Match")}}
