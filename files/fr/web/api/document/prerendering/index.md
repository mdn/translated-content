---
title: "Document : propriété prerendering"
short-title: prerendering
slug: Web/API/Document/prerendering
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{APIRef("Speculation Rules API")}}{{SeeCompatTable}}

La propriété en lecture seule **`prerendering`** de l'interface {{DOMxRef("Document")}} retourne `true` si le document est actuellement en cours de pré-rendu, tel qu'initié via l'[API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API).

## Valeur

Un booléen. Retourne `true` si le document est actuellement en cours de pré-rendu, sinon `false`. `false` sera retourné pour les documents dont le pré-rendu est terminé, ainsi que pour ceux qui n'ont pas été pré-rendus.

## Exemples

Pour exécuter une action pendant que la page est en pré-rendu, vous pouvez vérifier la propriété `prerendering`. Vous pouvez par exemple lancer une analyse statistique&nbsp;:

```js
if (document.prerendering) {
  analytics.sendInfo("arrivé jusqu'ici pendant le pré-rendu !");
}
```

Lorsqu'un document pré-rendu est activé, {{DOMxRef("PerformanceNavigationTiming.activationStart")}} est défini sur une valeur {{DOMxRef("DOMHighResTimeStamp")}} représentant le temps écoulé entre le début du pré-rendu et l'activation effective du document. La fonction suivante permet de vérifier le pré-rendu _et_ les pages pré-rendues&nbsp;:

```js
function pagePrerendered() {
  return (
    document.prerendering ||
    performance.getEntriesByType("navigation")[0]?.activationStart > 0
  );
}
```

Lorsque la page pré-rendue est activée par la consultation de l'utilisateur·ice, l'évènement {{DOMxRef("Document.prerenderingchange_event", "prerenderingchange")}} est déclenché. Cela peut servir à activer des activités qui auparavant démarraient par défaut au chargement de la page, mais que vous souhaitez différer jusqu'à ce que la page soit effectivement consultée. Le code suivant met en place un écouteur d'évènement pour exécuter une fonction une fois le pré-rendu terminé, sur une page pré-rendue, ou l'exécute immédiatement sur une page qui n'est pas pré-rendue&nbsp;:

```js
if (document.prerendering) {
  document.addEventListener("prerenderingchange", initAnalytics, {
    once: true,
  });
} else {
  initAnalytics();
}
```

> [!NOTE]
> Voir la page d'accueil de l'[API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) et en particulier la section [Conditions de chargement spéculatif non sûr](/fr/docs/Web/API/Speculation_Rules_API#conditions_de_chargement_spéculatif_non_sûr) pour plus d'informations sur les types d'activités que vous pourriez vouloir différer.

Pour mesurer la fréquence d'activation d'un pré-rendu, combinez les trois API&nbsp;: `document.prerendering` pour détecter les cas où la page est actuellement en pré-rendu, `prerenderingchange` pour surveiller les activations dans ce cas, et `activationStart` pour vérifier les cas où la page a été pré-rendue dans le passé.

```js
if (document.prerendering) {
  document.addEventListener(
    "prerenderingchange",
    () => {
      console.log("Pré-rendu activé après l'exécution de ce script");
    },
    { once: true },
  );
} else if (performance.getEntriesByType("navigation")[0]?.activationStart > 0) {
  console.log("Pré-rendu activé avant l'exécution de ce script");
} else {
  console.log("Ce chargement de page ne s'est pas fait via un pré-rendu");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API)
- L'évènement {{DOMxRef("Document.prerenderingchange_event", "prerenderingchange")}}
- La propriété {{DOMxRef("PerformanceNavigationTiming.activationStart")}}
