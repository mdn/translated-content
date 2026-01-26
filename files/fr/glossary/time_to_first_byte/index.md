---
title: Time to First Byte (TTFB)
slug: Glossary/Time_to_first_byte
l10n:
  sourceCommit: 13839b2979cc244034ffb1fe243240778b0cd23f
---

**Time to First Byte** (**TTFB**), signifiant «&nbsp;Temps Jusqu'au Premier Octet&nbsp;» en français, désigne le temps écoulé entre la requête du navigateur pour une page et la réception du premier octet d'information par le serveur. Ce temps inclut la résolution {{Glossary("DNS")}} et l'établissement de la connexion via une poignée de main {{Glossary("TCP")}} et {{Glossary("TLS")}} si la requête est effectuée sur {{Glossary("HTTPS")}}.

Le <abbr lang="en" title="Time to First Byte">TTFB</abbr> correspond au temps entre le début de la requête et le début de la réponse, exprimé en millisecondes. Il peut être mesuré à l'aide de l'attribut {{DOMxRef("PerformanceResourceTiming.responseStart", "responseStart")}} de {{DOMxRef("PerformanceNavigationTiming")}}&nbsp;:

```js
const ttfb = performance.getEntriesByType("navigation")[0].responseStart;
```

> [!NOTE]
> Pour les sites utilisant {{HTTPStatus("103", "103 Early Hints")}}, le <abbr lang="en" title="Time to First Byte">TTFB</abbr> correspond généralement aux _premiers octets_ (après d'éventuelles redirections) — c'est‑à‑dire à la réponse intermédiaire 103. Les propriétaires de sites souhaitant mesurer le temps jusqu'à la réponse finale doivent utiliser {{DOMxRef("PerformanceResourceTiming.finalResponseHeadersStart", "finalResponseHeadersStart")}}, lorsque cela est pris en charge.

## Voir aussi

- [Une session HTTP typique](/fr/docs/Web/HTTP/Guides/Session)
- L'interface {{DOMxRef("PerformanceResourceTiming")}}
- L'interface {{DOMxRef("PerformanceNavigationTiming")}}
