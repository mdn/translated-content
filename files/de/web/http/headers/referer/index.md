---
title: Referer
slug: Web/HTTP/Headers/Referer
tags:
  - Anfrage
  - HTTP
  - Referenz
  - header
  - referer
  - referrer
translation_of: Web/HTTP/Headers/Referer
---
{{HTTPSidebar}}

Der **`Referer`** Anfrage-Header beinhaltet die Adresse von der vorher besuchten Webseite, welche einen Link zur aktuell angefragten Seite beinhaltet. Der **`Referer`**-Header erlaubt es Server zu sehen, von wo die Personen sie Besuchen und diese Daten zum Beispiel zur Analyse, Logging oder optimiertes Caching zu benutzen.

> **Warning:** **Wichtig**: Auch wenn dieser Header nützlich ist, kann es ungewollte Konsequenzen für die Sicherheit und Privatsphäre beinhalten. Siehe [Referer header: privacy and security concerns](/de/docs/Web/Security/Referer_header:_privacy_and_security_concerns) für mehr Informationen und Milderungen

Merke, dass das Wort referer falsch geschrieben ist. Das richtige Wort ist "referrer". Siehe {{interwiki("wikipedia", "Referrer", "HTTP referer on Wikipedia")}} für mehr Details.

Ein `Referer`-Header wird von einem Browser nicht gesendet, wenn:

- Der verweisende Ressource ist eine lokale "file" oder "data" URI ist.
- Eine unsichere HTTP-Anfrage benutzt wird und die verweisende Seite in einem sicheren Protokoll (HTTPS) empfangen wurde.

| Header-Typ                                       | {{Glossary("Request header")}} |
| ------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}} | yes                                      |

## Syntax

    Referer: <url>

## Richtlinien

- \<url>
  - : Eine absolute oder partielle Adresse von der vorherigen Webseite, von welcher ein Link zur aktuell angefragen Seite gefolgt wurde. URL-Fragmente (z.B.: "#section") und userinfo (z.B.: "username:password" in "https\://username:password\@example.com/foo/bar/") sind nicht enthalten.

## Beispiele

    Referer: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## Spezifikationen

| Spezifikation                                    | Titel                                                         |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "Referer", "5.5.2")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## Browser-Kompatibilität

{{Compat("http.headers.Referer")}}

## Siehe auch

- {{interwiki("wikipedia", "HTTP_referer", "HTTP referer on Wikipedia")}}
- {{HTTPHeader("Referrer-Policy")}}
