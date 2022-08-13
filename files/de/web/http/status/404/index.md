---
title: 404 Not Found
slug: Web/HTTP/Status/404
tags:
  - Client-Fehler
  - Clientfehler
  - HTTP
  - HTTP-Statuscode
  - Statuscode
translation_of: Web/HTTP/Status/404
---
{{HTTPSidebar}}

Der HTTP-Statuscode **`404`\*\***` Not Found`\*\* zeigt an, dass der Server die angeforderte Ressource nicht finden konnte. Dieser Statuscode ist wahrscheinlich einer der bekanntesten, da er so häufig im Web auftritt. Oft spricht man dann von kaputten oder toten Links, die durch [Linkverrottung ("link rot")](https://de.wikipedia.org/wiki/Toter_Link) entstehen.

Ein 404-Statuscode zeigt nicht an, ob es sich dabei um einen temporären oder permanenten Zustand handelt. Wenn bekannt ist, dass die Ressource wahrscheinlich dauerhaft nicht verfügbar sein wird, ist {{HTTPStatus(410)}} (Gone) einem Status 404 vorzuziehen.

## Status

    404 Not Found

## Eigene Fehler-Seiten

Viele Webseiten passen das Aussehen einer 404 Seite an, damit sie dem Benutzer Unterstützung anbieten kann. Apache-Server können mit einer `.htaccess`-Datei und folgendem Code-Schnipsel konfiguriert werden.

    ErrorDocument 404 /notfound.html

Sie können sich auch von der [404 Seite des MDN](/de/404) inspirieren lassen.

> **Note:** **Hinweis:** Es gibt eine [schier unerschöpfliche Quelle](https://www.google.de/search?q=awesome+404+pages) an Inspiration für das Design einer 404-Seite. Beachten Sie aber, dass eine solche Seite nicht nur witzig sein soll, sondern es auch [gute fachliche Herangehensweisen](http://alistapart.com/article/perfect404) gibt, die für die Besucher Ihrer Webseite hilfreich sind.

## Spezifikationen

| Spezifikation                                            | Titel                                                         |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "404 Not Found" , "6.5.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPStatus(410)}}
- {{interwiki("wikipedia", "HTTP_404", "Wikipedia: HTTP 404")}}
