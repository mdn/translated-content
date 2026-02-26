---
title: Temps de chargement d'une page
slug: Glossary/Page_load_time
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Le temps de chargement d'une page** correspond au temps nécessaire pour qu'une page se charge, mesuré depuis le [début de la navigation](/fr/docs/Web/API/PerformanceTiming/navigationStart) jusqu'au [début de l'évènement de chargement](/fr/docs/Web/API/PerformanceTiming/loadEventStart).

```js
let temps = performance.timing;

let tempsChargementPage = temps.loadEventStart - temps.navigationStart;
```

Bien que le temps de chargement d'une page «&nbsp;semble&nbsp;» être la mesure idéale de performance web, ce n'est pas le cas. Les temps de chargement peuvent varier considérablement d'un·e utilisateur·ice à l'autre selon les capacités de l'appareil, les conditions du réseau et, dans une moindre mesure, la distance au serveur. L'environnement de développement, où le temps de chargement est mesuré, offre probablement une expérience optimale, qui ne reflète pas la réalité de vos utilisateur·ice·s. De plus, la performance web ne se limite pas au moment où l'évènement de chargement se produit. Elle concerne aussi la {{Glossary("perceived performance", "performance perçue")}}, la réactivité, le {{Glossary("jank", "saccade")}} et la gigue.

## Voir aussi

- [Chronométrage de la navigation et des ressources](/fr/docs/Web/Performance/Guides/Navigation_and_resource_timings)
- L'interface {{DOMxRef("PerformanceNavigationTiming")}}
- L'interface {{DOMxRef("PerformanceResourceTiming")}}
