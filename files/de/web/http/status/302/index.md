---
title: 302 Found
slug: Web/HTTP/Status/302
tags:
  - HTTP
  - HTTP-Statuscode
  - Statuscode
  - Weiterleitung
translation_of: Web/HTTP/Status/302
---
{{HTTPSidebar}}Der HTTP-Statuscode **`302 Found`** besagt, dass die angeforderte Ressource vorübergehend auf die URL verschoben wurde, die durch den {{HTTPHeader("Location")}}-Header angegeben wurde. Ein Browser folgt der Weiterleitung auf diese Seite, aber Suchmaschinen aktualisieren ihre Links auf die Ressource nicht (In SEO-Sprech sagt man, dass der 'link-juice' nicht an die neue URL gesendet wird).Obwohl die Spezifikation verlangt, dass die Anfragemethode (und der Body der Anfrage) beim Folgen auf die Weiterleitung nicht verändert wird, setzen das nicht alle User-Agents um - man findet immer noch Programme, die hier Fehler haben Daher ist zu empfehlen, den Code `302` nur als Antwort auf die Anfragemethoden {{HTTPMethod("GET")}} und {{HTTPMethod("HEAD")}} auszugeben und ansonsten {{HTTPStatus("307")}} `Temporary Redirect` zu benutzen, wo ein Wechsel der Methode ausdrücklich verboten ist.

Falls Sie möchten, dass der User-Agent die Anfragemethode auf {{HTTPMethod("GET")}} ändert, benutzen Sie stattdessen den Code {{HTTPStatus("303")}} `See Other`. Das ist etwa nützlich, wenn Sie eine {{HTTPMethod("PUT")}}-Anfrage nicht mit der hochgeladenen Resource, sondern mit einer bestätigenden Nachricht wie "Sie haben XYZ erfolgreich hochgeladen." beantworten wollen.

## Status

    302 Found

## Spezifikationen

| Spezifikation                                        | Titel                                                         |
| ---------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "302 Found" , "6.4.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser-Kompatibilität

{{Compat("http.status.302")}}

## Siehe auch

- {{HTTPStatus("307")}} `Temporary Redirect`, entspricht diesem Statuscode, lässt aber nie eine Änderung der Anfragemethode zu.
- {{HTTPStatus("303")}} `See Other`, eine vorübergehende Weiterleitung, bei der die Anfragemethode auf {{HTTPMethod("GET")}} geändert werden soll.
- {{HTTPStatus("301", "301 Moved Permanently")}} Die dauerhafte Weiterleitung.
