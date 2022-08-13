---
title: HTTP Caching FAQ
slug: Web/HTTP/Caching
tags:
  - Cache
  - HTTP
  - Necko
  - NeedsContent
  - header
translation_of: Web/HTTP/Caching
original_slug: Web/HTTP/Caching_FAQ
---
### Was wird im Cache gespeichert?

Der Mozilla Cache beinhaltet alle Dokumente, die via [HTTP](/en/HTTP "en/HTTP") vom Benutzer heruntergeladen wurden. Dies mag sich zunächst widersprüchlich anhören, dieses Verhalten ermöglicht jedoch das Vor- und Zurück-Navigieren, Speichern, sowie die Anzeige des Quelltextes etc. im Browser, ohne dabei zusätzliche Serveranfragen zu benötigen. Somit verbessert es auch die Offline-Nutzung von temporär gespeicherten Inhalten im Cache.

### Was ist mit Dokumenten die mit "Cache-control: no-cache" in der Kopfzeile (Header) gesendet werden?

Auch "no-cache" Dokumente werden von uns aufgrund der oben genannten Gründe im Cache gespeichert.

### Sorgt das nicht dafür, dass abgelaufene Inhalte bereitgestellt werden?

Nein, denn jedes Dokument, das im Mozilla Cache gespeichert wird, erhält eine Gültigkeitsdauer. Lädt Mozilla dieses Dokument für eine normale Ansicht, wird die Gültigkeit berücksichtigt. Wenn nötig, wird ein aus dem Cache zu ladendes Dokument mit dem Server abgeglichen und gegebenenfalls neu geladen, bevor es dem Benutzer angezeigt wird.

### Wie wird die Gültigkeitsdauer berechnet (da nicht jede Serverantwort eine Gültigkeit in der Kopfzeile enthält)?

Mozilla strebt danach, [RFC 2616](http://tools.ietf.org/html/rfc2616) zu implementieren (siehe speziell Abschnitt 13 für nähere Informationen). Jede der folgenden Antwort-Kopfzeilen generiert eine stets abgelaufene Gültigkeitsdauer, z.B. "00:00:00 UTC, January 1, 1970":

    Cache-control: no-cache
    Cache-control: no-store
    Pragma: no-cache
    Expires: 0

Bemerkenswerter Weise sind die Werte `Expires: 0` und `Pragma: no-cache` technisch gesehen ungültige Werte in einer Antwort-Kopfzeile. Wenn keine dieser Angaben vorhanden ist, geschieht die Berechnung der Gültigkeitsdauer nach dem Algorithmus, welcher in [RFC 2616](http://tools.ietf.org/html/rfc2616), Abschnitt 13.2. beschrieben wird. Wir ermitteln das gegenwärtige Alter der Antwort und seine Gültigkeit basierend auf den vorhandenen Informationen.

Das gegenwärtige Alter entspricht für gewöhnlich fast Null, wird jedoch durch eine vorhandene `Age`-Angabe in der Antwort-Kopfzeile beeinflusst, die z.B. von Proxy Caches angeben wird um die Länge der Dauer anzugeben, die sich ein Dokument bereits in ihrem Cache befindet. Der exakte Algorithmus, der versucht, Fehler bei der Zeitverschiebung zu verhindern, wird in [RFC 2616](http://tools.ietf.org/html/rfc2616), Abschnitt 13.2.3 beschrieben.

Die Gültigkeit wird basierend auf mehreren Antwort-Kopfzeilen berechnet. Wenn die Kopfzeile `Cache-control: max-age=N` angegeben ist, entspricht die Gültigkeit des Dokumentes dem Wert N. Ist dieser Wert nicht vorhanden, was mitunter sehr oft der Fall ist, wird nach einer `Expires`-Angabe in der Kopfzeile gesucht. Existiert diese, ergibt sich die Gültigkeitsdauer aus dem darin enthaltenen Wert abzüglich des in `Date` enthaltenen Wertes. Sollte sich letztlich keine `Expires`-Angabe in den Antwort-Kopfzeilen befinden, wird nach einem `Last-Modified` Wert gesucht. Ist dieser Wert vorhanden, entspricht die Gültigkeitsdauer im Cache dem Wert `Date` abzüglich des Wertes `Last-Modified` geteilt durch 10. Dies ist die vereinfachte Darstellung des heuristischen Algorithmus, der in Abschnitt 13.2.4 des [RFC 2616](http://tools.ietf.org/html/rfc2616) vorgeschlagen wird.

Die Gültigkeitsdauer berechnet sich somit folgendermaßen:

    ablaufZeit = reaktionsZeit + neuheitsLebenszeit - aktuellesAlter

Wobei `reaktionsZeit` dem Zeitwert entspricht, zu dem der Browser die Antwort erhalten hat.

### Gibt es weitere Faktoren, welche die Revalidation beinflussen?

Die Revalidation wird ausgelöst, sobald ein User die Seite neu lädt (z.B. mittels des Neu-Laden-Knopfes). Ebenso wird sie beim normalen browsen ausgelöst, wenn in den Antwort-Kopfzeilen `Cache-control: must-revalidate` enthalten ist. Ein weiterer Faktor sind die Einstellungen des Cache-Management im Bereich `Erweitert->Netzwerk` der Firefox-Einstellungen. Hier kann als Option gewählt werden, dass Dokumente bei jedem Laden neu validiert werden ("Nachfragen, wenn Websites Daten für die Verwendung im Offline-Modus speichern möchten").

### Wie funktioniert die Cache-Valdiation?

Sobald die Gültigkeit eines Dokumentes im Cache abgelaufen ist, wird es entweder revalidiert oder gänzlich neu vom Server angefordert. Eine Validation kann nur dann angewendet werden, wenn der Server entweder eine _starke Valdiation_ (strong validation) oder eine _schwache Valdiation_ (weak validation) ermöglicht. Cache-Validatoren werden im Abschnitt 13.3.2 des [RFC 2616](http://tools.ietf.org/html/rfc2616) beschrieben.

Der `ETag`-Wert in den Antwort-Kopfzeilen ist ein Wert, der nicht für den User Agent einsehbar ist (_opaque-to-the-useragent_) und als starker Validator genutzt werden kann (strong validator). Ist der `ETag`-Wert in den Antwort-Kopfzeilen vorhanden, kann der Browser einen `If-None-Match`-Wert in den Anfrage-Kopfzeilen ausgeben, um das Dokument im Cache zu validieren.

Der `Last-Modified`-Wert in den Antwort-Kopfzeilen kann als schwacher Validator (weak validator) genutzt werden. Er wird als schwach eingestuft, da er nur eine 1-Sekunden-Lösung ermöglicht. Wenn der `Last-Modified`-Wert in den Antwort-Kopfzeilen enthalten ist, kann der Browser einen `If-Modified-Since`-Wert in den Anfrage-Kopfzeilen ausgeben, um das Dokument im Cache zu validieren.

Sobald eine Validierungs-Anfrage gestellt wurde, kann der Server diese entweder ignorieren und mit einem normalen [`200 OK`](/en/HTTP/HTTP_response_codes#200 "https://developer.mozilla.org/en/HTTP/HTTP_response_codes#200")-Statuscode antworten, oder aber einen [`304 Not Modified`](/en/HTTP/HTTP_response_codes#304 "https://developer.mozilla.org/en/HTTP/HTTP_response_codes#304")-Statuscode zurückgeben um den Browser anzuweisen, die im Cache befindliche Kopie des Dokumentes zu verwenden. Letzere kann ebenfalls Werte in der Antwort-Kopfzeile enthalten, welche die Gültigkeit des Dokumentes im Cache aktualisieren.

### Was ist mit...?

Ich beabsichtige, diese Dokumentation in Zukunft zu erweitern. Fühlen Sie sich frei, mir eine E-Mail mit Ihren Fragen oder Kommentaren zu schreiben.

## Informationen zum Original-Dokument

- Autor(en): [Darin Fisher](mailto:darin@meer.net)
- Zuletzt aktualisiert: 16. Juni 2004
- Copyright Information: Teile des Inhaltes sind urheberrechtlich durch © 1998–2007 einzelne Mitwirkende von mozilla.org; Inhalt lizensiert under einer Creative Commons Lizenz | [Details](http://www.mozilla.org/foundation/licensing/website-content.html).
