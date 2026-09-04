---
title: "PerformanceNavigationTiming : propriété activationStart"
short-title: activationStart
slug: Web/API/PerformanceNavigationTiming/activationStart
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

La propriété en lecture seule **`activationStart`** représente la durée entre le début de la pré-rendu d'un document et son activation.

## Valeur

Un objet {{DOMxRef("DOMHighResTimeStamp")}} représentant la durée entre le début de la pré-rendu du document et son activation, en millisecondes.

La valeur est `0` si la page n'a pas été pré-rendue ou est encore en cours de pré-rendu.

## Exemples

### Détecter les pages pré-rendues

Lorsqu'un document pré-rendu est activé, `activationStart` est défini à l'heure courante. La fonction suivante permet de vérifier si une page est en cours de pré-rendu ({{DOMxRef("Document.prerendering","prerendering")}}) ou a déjà été pré-rendue&nbsp;:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    self.performance?.getEntriesByType?.("navigation")[0]?.activationStart > 0
  );
}
```

### Mesurer les jalons de performance perçus par l'utilisateur·ice

Avec les pages pré-rendues, une page peut avoir été créée bien avant d'être effectivement visitée. Lors de l'utilisation de l'[API Performance](/fr/docs/Web/API/Performance_API) sur des pages pré-rendues, il est essentiel de comparer les valeurs retournées avec `activationStart` afin d'éviter des mesures trompeuses.

```js
// Temps jusqu'à l'activation
let activationStart =
  performance.getEntriesByType("navigation")[0].activationStart;

// Temps jusqu'au premier affichage
let firstPaint = performance.getEntriesByName("first-paint")[0].startTime;

// Temps jusqu'au premier affichage significatif
let firstContentfulPaint = performance.getEntriesByName(
  "first-contentful-paint",
)[0].startTime;

console.log(
  `temps jusqu'au premier affichage : ${firstPaint - activationStart}`,
);
console.log(
  `temps jusqu'au premier affichage significatif : ${firstContentfulPaint - activationStart}`,
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading)
