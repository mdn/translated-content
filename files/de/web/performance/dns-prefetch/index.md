---
title: Verwendung von dns-prefetch
slug: Web/Performance/dns-prefetch
translation_of: Web/Performance/dns-prefetch
---
**`DNS-prefetch`** ist ein Versuch, Domainnamen aufzulösen, bevor Ressourcen angefordert werden. Dabei kann es sich um eine Datei handeln, die später geladen wird, oder um ein Linkziel, dem ein Benutzer zu folgen versucht.

## Warum sollte man dns-prefetch benutzen?

Wenn ein Browser eine Ressource von einem (Drittanbieter-)Server anfordert, muss der Domain-Name dieses anderen Ursprungs in eine IP-Adresse aufgelöst werden, bevor der Browser die Anfrage stellen kann. Dieser Vorgang wird als DNS-Auflösung bezeichnet. Während das DNS-Caching dazu beitragen kann, diese Latenzzeit zu verringern, kann die DNS-Auflösung die Latenzzeit bei Anfragen deutlich erhöhen. Bei Websites, die Verbindungen zu vielen Drittanbietern öffnen, kann diese Latenz das Laden erheblich verlangsamen.

`dns-prefetch` hilft Entwicklern, die Latenz der DNS-Auflösung zu überdecken. Das [HTML `<link>` Element](/de/docs/Web/HTML/Element/link) bietet diese Funktionalität über einen [`rel` Attributwert](/de/docs/Web/HTML/Attributes/rel) von `dns-prefetch`. Die [cross-origin](/de/docs/Web/HTTP/CORS)-Domäne wird dann im [href Attribut](/de/docs/Web/HTML/Attributes) angegeben:

## Syntax

```html
<link rel="dns-prefetch" href="https://fonts.gstatic.com/" >
```

## Beispiele

```html
<html>
  <head>
    <link rel="dns-prefetch" href="https://fonts.gstatic.com/">
    <!-- and all other head elements -->
  </head>
  <body>
    <!-- your page content -->
  </body>
</html>
```

Sie sollten immer dann `dns-prefetch`-Hinweise im [`<head>` Element](/de/docs/Web/HTML/Element/head) platzieren, wenn Ihre Website auf Ressourcen von [cross-origin](/de/docs/Web/HTTP/CORS)-Domänen verweist, es gibt aber einige Dinge zu beachten.

## Bewährte Methoden

Es gibt 3 wichtige Dinge zu beachten:

**Erstens** ist `dns-prefetch` nur für DNS-Lookups auf [cross-origin](/de/docs/Web/HTTP/CORS)-Domänen wirksam, also vermeiden Sie es für Verweise auf Ihre eigene Webseite oder Domäne zu benutzen. Hintergrund ist, dass die IP hinter der Domäne Ihrer Website bereits aufgelöst ist, wenn der Browser den Hinweis sieht.

**Zweitens** ist es auch möglich, `dns-prefetch` (und andere Ressourcen-Hinweise) als [HTTP-Header](/de/docs/Web/HTTP/Headers) anzugeben, indem Sie das [HTTP-Link-Feld](/de/docs/Web/HTTP/Headers/Link) verwenden:

```http
Link: <https://fonts.gstatic.com/>; rel=dns-prefetch
```

Ziehen Sie es **drittens** in Betracht `dns-prefetch` mit dem `preconnect` Hinweis zu verwenden. Während `dns-prefetch` nur einen DNS lookup durchführt, stellt `preconnect` eine Verbindung zu einem Server her. Dieser Prozess umfasst sowohl die DNS-Auflösung als auch den Aufbau der TCP-Verbindung und die Durchführung des [TLS](/de/docs/Glossary/TLS)-Handshakes, wenn eine Site über HTTPS ausgeliefert wird. Die Kombination dieser beiden Verfahren bietet die Möglichkeit, die wahrgenommene Latenzzeit von [cross-origin](/de/docs/Web/HTTP/CORS)-Anfragen weiter zu reduzieren. Sie können sie auf folgende Weise sicher zusammen verwenden:

```html
<link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin>
<link rel="dns-prefetch" href="https://fonts.gstatic.com/">
```

> **Hinweis:** Wenn eine Seite Verbindungen zu vielen Drittanbieter-Domains herstellen muss, ist es kontraproduktiv, sie alle im Vorhinein zu verbinden. Der `preconnect` Hinweis wird am besten nur für die kritischsten Verbindungen verwendet. Für die anderen verwenden Sie einfach `<link rel="dns-prefetch">` um Zeit beim ersten Schritt — dem DNS-Lookup — zu sparen.

Die Logik hinter der Verknüpfung dieser Hinweise liegt darin, dass die Unterstützung für dns-prefetch weiter verbreitet ist, als die Unterstützung für preconnect. Browser, die preconnect nicht unterstützen, erhalten trotzdem einen zusätzlichen Vorteil, indem sie auf dns-prefetch zurückgreifen. Da es sich hierbei um eine HTML-Funktion handelt, ist sie sehr fehlertolerant. Wenn ein nicht-unterstützter Browser auf einen dns-prefetch-Hinweis—oder einen anderen Ressourcen-Hinweis—stößt, wird Ihre Website nicht beschädigt. Sie werden nur nicht die Vorteile erfahren, die sie bietet.

Einige Ressourcen, wie z.B. Schriftarten, werden im anonymen Modus geladen. In solchen Fällen sollten Sie das [crossorigin](/de/docs/Web/HTML/CORS_settings_attributes)-Attribut zusammen mit dem `preconnect`-Hinweis setzen. Wenn Sie es weglassen, führt der Browser nur den DNS-Lookup durch.

## Siehe auch

- [\<link>](/de/docs/Web/HTML/Element/link)
- [HTML attribute: rel](/de/docs/Web/HTML/Attributes/rel)
- [crossorigin](/de/docs/Web/HTML/CORS_settings_attributes)
- [Cross-Origin Resource Sharing (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP headers](/de/docs/Web/HTTP/Headers)
- [HTTP header](/de/docs/Web/HTTP/Headers/Link)[Link](/de/docs/Web/HTTP/Headers/Link "The HTTP Link entity-header field provides a means for serialising one or more links in HTTP headers. It is semantically equivalent to the HTML <link> element.")
