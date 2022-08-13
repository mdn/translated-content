---
title: Cache-Control
slug: Web/HTTP/Headers/Cache-Control
tags:
  - Allgemeine Header
  - HTTP
  - HTTP-Header
  - Referenz
translation_of: Web/HTTP/Headers/Cache-Control
---
{{HTTPSidebar}}

Das allgemeine Header-Feld **`Cache-Control`** wird benutzt um Direktiven für Caching-Mechanismen, sowohl für Requests als auch für Responses, zu spezifizieren. Caching-Direktiven sind unidirektional, das bedeutet dass eine Direktive in einem Request nicht impliziert, dass die gleiche Direktive auch in einem Response zurückkommen muss.

| Header type                                                                                      | {{Glossary("General header")}} |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| {{Glossary("Forbidden header name")}}                                                 | nein                                     |
| {{Glossary("Simple response header", "CORS-safelisted response-header")}} | ja                                       |

## Syntax

Die Direktiven beachten Groß- und Kleinschreibung und haben optionale Argumente, die sowohl Token-Syntax als auch Zeichenketten mit Anführungszeichen verwenden. Mehrere Direktiven werden kommasepariert.

### Cache Request Direktiven

Standard `Cache-Control` Direktiven, die vom Client in einem HTTP Request verwendet werden können.

    Cache-Control: max-age=<seconds>
    Cache-Control: max-stale[=<seconds>]
    Cache-Control: min-fresh=<seconds>
    Cache-Control: no-cache
    Cache-Control: no-store
    Cache-Control: no-transform
    Cache-Control: only-if-cached

### Cache Response Direktiven

Standard `Cache-Control` Direktiven, die vom Server in einer HTTP Response verwendet werden können.

    Cache-Control: must-revalidate
    Cache-Control: no-cache
    Cache-Control: no-store
    Cache-Control: no-transform
    Cache-Control: public
    Cache-Control: private
    Cache-Control: proxy-revalidate
    Cache-Control: max-age=<seconds>
    Cache-Control: s-maxage=<seconds>

### Erweiterungs `Cache-Control` Direktiven

Erweiterungs `Cache-Control` Direktiven sind nicht Teil des Kern HTTP Caching Standard-Dokuments. Prüfen Sie die Unterstützung in der [Kompatibilitätstabelle](#Browser_compatibility).

    Cache-Control: immutable
    Cache-Control: stale-while-revalidate=<seconds>
    Cache-Control: stale-if-error=<seconds>

## Direktiven

### Cachebarkeit

- `public`
  - : Kennzeichen dass die Response von jedem Cache gecached werden dürfen.
- `private`
  - : Kennzeichen dass die Response für einen einzigen Benutzer gedacht ist, und nicht von einem geteilten Cache gespeichert werden dürfen. Ein privater Cache darf die Response speichern.
- `no-cache`
  - : Zwingt Caches den Request dem Ursprungs-Server zuzustellen, um die Gültigkeit zu validieren, bevor eine gecachte Kopie freigegeben wird.
- `only-if-cached`
  - : Gibt an, dass keine neue Daten abgerufen werden sollen. Der Client möchte nur eine gecachte Response erhalten und sollte nicht den Ursprungs-Server kontaktieren, um zu prüfen, ob eine neuere Kopie existiert.

### Cache-Verfall

- `max-age=<seconds>`
  - : Spezifiziert die maximale Zeitdauer, die eine Ressource als aktuell betrachtet wird. Im Gegensatz zu `Expires`, ist diese Direktive relativ zum Zeitpunkt des Requests.
- `s-maxage=<seconds>`
  - : Überschreibt `max-age` oder den `Expires` Header, bezieht sich allerdings nur auf geteilte Caches (z.B. Proxyserver) und wird von einem privaten Cachen ignoriert.
- `max-stale[=<seconds>]`
  - : Gibt an, dass der Client bereit ist eine Response zu akzeptieren, die ihre Ablaufzeit überschritten hat. Optional können Sie einen Wert in Sekunden angeben, der die Zeit angibt, die eine Response höchstens abgelaufen sein darf.
- `min-fresh=<seconds>`
  - : Gibt an, dass der Client eine Response erwartet, die mindestens noch für die angegebene Zeit aktuell ist.
- `stale-while-revalidate=<seconds>` {{experimental_inline}}
  - : Gibt an, dass der Client bereit ist eine abgelaufene Response zu akzeptieren, während im Hintergrund asynchron auf eine Aktualisierung geprüft wird. Der zweite Wert gibt an für wie lange der Client bereit ist die abgelaufene Response zu akzeptieren.
- `stale-if-error=<seconds>` {{experimental_inline}}
  - : ...

### Revalidierung und Neuladen

- `must-revalidate`
  - : Der Cache muss den Status der abgelaufenen Ressource überprüfen bevor sie verwendet wird. Abgelaufene Ressourcen sollten nicht verwendet werden.
- `proxy-revalidate`
  - : Gleich wie `must-revalidate`, aber bezieht sich nur auf geteilte Caches (z.B. Proxyserver) und wird von einem privaten Cache ignoriert.
- `immutable`
  - : Gibt an, dass der Response-Body sich nicht im Laufe der Zeit ändern wird. Falls die Ressource noch nicht abgelaufen ist, ist sie auf dem Server unverändert und daher sollte der Client, selbst wenn der Benutzer die Seite explizit aktualisiert, nicht eine bedingte Revalidierung schicken (z.B. `If-None-Match` oder `If-Modified-Since`) , um auf Aktualisierungen zu prüfen Die Ressource . Clients, denen diese Erweiterung unbekannt ist, müssen sie nach der HTTP-Spezifikation ignorieren. In Firefox, `immutable` wird nur bei `https://` Transaktionen beachtet. Für mehr Informationen, siehe auch diesen [Blogpost](http://bitsup.blogspot.de/2016/05/cache-control-immutable.html).

### Weitere

- `no-store`
  - : Der Cache sollte nichts über den Client-Request oder die Server-Response speichern.
- `no-transform`
  - : Es sollte keinerlei Transformation oder Konvertierung der Ressoruce durchgeführt werden. Die Content-Encoding, Content-Range, Content-Type Headers dürfen nicht durch einen Proxyserver verändert werden. Ein nicht-transparenter Proxy könnte beispielsweise zwischen Bildformaten konvertieren, um Speicherplatz im Cache zu sparen oder den Datenverkehr bei einer langsamen Verbindung zu reduzieren. Die `no-transform` Direktive verbietet dies.

## Beispiele

### Caching verhindern

Um Caching abzuschalten können Sie den folgenden Response Header schicken. Beachten Sie ggf. zusätzlich die `Expires` und `Pragma` Header.

```bash
Cache-Control: no-cache, no-store, must-revalidate
```

### Statische Assets cachen

Für die Dateien einer Anwendung, die sich nicht ändern werden, können Sie normalerweise aggressives Caching nutzen, indem Sie den untenstehenden Response-Header senden. Dies schließt statische Dateien ein, die von der Anwendung bereitgestellt werden, wie z.B. Bilder, CSS- und JavaScript-Dateien. Beachten Sie außerdem den `Expires` Header.

```bash
Cache-Control: public, max-age=31536000
```

## Spezifikationen

| Specification        | Title                                           |
| -------------------- | ----------------------------------------------- |
| {{RFC("7234")}} | Hypertext Transfer Protocol (HTTP/1.1): Caching |
| {{RFC("5861")}} | HTTP Cache-Control Extensions for Stale Content |
| {{RFC("8246")}} | HTTP Immutable Responses                        |

## Browser Kompatibilität

{{Compat("http.headers.Cache-Control")}}

## Siehe auch

- [HTTP Caching FAQ](/de/docs/Web/HTTP/Caching_FAQ)
- {{HTTPHeader("Age")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Pragma")}}
