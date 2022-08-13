---
title: Age
slug: Web/HTTP/Headers/Age
tags:
  - Caching
  - HTTP
  - Response
  - header
translation_of: Web/HTTP/Headers/Age
---
{{HTTPSidebar}}

**`Age`** nennt die Dauer in Sekunden, die das angefragte Objekt bereits in einem Proxy-Cache zwischengespeichert ist.

Die Dauer versteht sich üblicherweise als Differenz zwischen der aktuellen Uhrzeit und der Angabe {{HTTPHeader("Date")}}, die den Zeitpunkt anzeigt, an dem das Objekt ursprünglich erstellt wurde.

Der Wert 0 deutet darauf hin, dass das Objekt gerade durch den Cache vom eigentlichen Server geholt wurde, mithin aktuell ist.

| Typ                                                              | {{Glossary("Response header", "Antwort")}} |
| ---------------------------------------------------------------- | -------------------------------------------------------- |
| {{Glossary("Forbidden header name", "Verboten")}} | Nein                                                     |

## Syntax

    Age: <delta-seconds>

## Argument

- \<delta-seconds>
  - : Eine positive Ganzzahl, die der Dauer in Sekunden entspricht, die das Objekt von einem Proxy-Cache zum Zeitpunkt des Abrufs bereits zwischengespeichert wurde.

## Beispiele

    Age: 24
    Date: Tue, 15 Nov 1994 08:12:31 GMT

Das Objekt befindet sich seit 24 Sekunden im Cache. Die aktuelle Uhrzeit müsste demnach 8:12:55 sein, 8:12:31 + 24s.

## Spezifikationen

| Spezifikation                            | Titel                                           |
| ---------------------------------------- | ----------------------------------------------- |
| {{RFC("7234", "Age", "5.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |

## Browserkompatibilität

{{Compat("http.headers.Age")}}

## Siehe auch

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Expires")}}
