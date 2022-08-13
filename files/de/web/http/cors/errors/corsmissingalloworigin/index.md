---
title: >-
  Grund: CORS header 'AccessGrund: CORS-Kopfzeile 'Access-Control-Allow-Origin'
  fehlt
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
tags:
  - CORS
  - CORSMissingAllowOrigin
  - Cross-Origin
  - Error
  - Fehler
  - Gründe
  - HTTP
  - HTTPS
  - Konsole
  - Nachrichten
  - Sicherheit
  - troubleshooting
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
original_slug: Web/HTTP/CORS/Errors/CORSFehltQuelleErlauben
---
{{HTTPSidebar}}

## Grund

     Grund: CORS-Kopfzeile 'Access-Control-Allow-Origin' fehlt

## Was ist schief gelaufen?

Der Antwort auf die {{Glossary("CORS")}}-Anfrage fehlt der benötigte {{HTTPHeader("Access-Control-Allow-Origin")}}-Header, welcher verwendet wird, um herauszufinden, ob die Ressource vom Inhalt, der im momentanen Origin arbeitet, verwendet werden kann oder nicht.

Wenn der Server unter Ihrer Kontrolle steht, fügen Sie die Quelle der anfragenden Seite zu der Liste der Domains hinzu, die Zugriff haben, indem Sie Sie zum Header-Wert `Access-Control-Allow-Origin` ergänzen.

Um zum Beispiel einer Seite unter https\://amazing.site zu erlauben, auf die Ressource mithilfe von CORS zuzugreifen, sollte der Header lauten:

    Access-Control-Allow-Origin: https://amazing.site

Mithilfe der `"*"`-Wildcard kann man eine Seite so konfigureren, dass Sie jeder anderen Webseite Zugriff gewährt. Dies sollte man ausschließlich für öffentliche APIs tun. Private APIs sollten niemals `"*"` verwenden, sondern stattdessen eine spezifische Domain oder eine Liste von Domains. Zudem funktioniert die Wildcard nur für Requests, die mit dem {{htmlattrxref("crossorigin")}}-Attribut, gesetzt auf `"anonymous"`, erstellt wurden.

    Access-Control-Allow-Origin: *

> **Warnung:** Die Wildcard dazu zu benutzen, um allen Websites Zugriff auf eine private API zu geben, ist - aus wohl offensichtlichen Gründen - keine gute Idee.

Fügen Sie z.B. in Apache eine Zeile wie die Folgende zur Konfiguration des Servers hinzu (im zugehörigen `<Directory>`, `<Location>`, `<Files>`, oder `<VirtualHost>`-Abschnitt). Die Konfigurationseinstellungen findet man üblicherweise in einer `.conf`-Datei (`httpd.conf` und `apache.conf` sind übliche Namen dafür), oder in einer `.htaccess`-Datei.

    Header set Access-Control-Allow-Origin 'origin-list'

Für Nginx lautet der Befehl, um den Header zu setzen:

    add_header 'Access-Control-Allow-Origin' 'origin-list'

## Siehe auch

- [CORS fehler](/de/docs/Web/HTTP/CORS/Errors)
- Glossar: {{Glossary("CORS")}}
- [CORS-Einführung](/de/docs/Web/HTTP/CORS)
