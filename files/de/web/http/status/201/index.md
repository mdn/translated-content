---
title: 201 Created
slug: Web/HTTP/Status/201
translation_of: Web/HTTP/Status/201
---
{{HTTPSidebar}}

Der Antwortcode HTTP **`201 Created`** Erfolgsstatus zeigt an, dass die Anfrage erfolgreich war und zur Erstellung einer Ressource geführt hat. Die neue Ressource wird effektiv erstellt, bevor diese Antwort zurückgesendet wird, und die neue Ressource wird im Hauptteil der Nachricht zurückgegeben, wobei ihre Position entweder die URL der Anforderung oder der Inhalt des {{HTTPHeader("Location")}} Headers ist.

Der übliche Anwendungsfall für diesen Statuscode ist das Ergebnis einer {{HTTPMethod("POST")}} Anfrage.

## Status

    201 Created

## Spezifikationen

| Spezifikation                                        | Titel                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "201 Created" , "6.3.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browserkompatibilität

{{Compat("http.status.201")}}

## Siehe auch

- [HTTP request methods](/de/docs/Web/HTTP/Methods)
