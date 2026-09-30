---
title: "NavigateEvent : propriété navigationType"
short-title: navigationType
slug: Web/API/NavigateEvent/navigationType
l10n:
  sourceCommit: 06ab986fc58ffb4e12b9f9962ee3c2783ce1290b
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`navigationType`** de l'interface {{DOMxRef("NavigateEvent")}} retourne le type de la navigation — `push`, `reload`, `replace` ou `traverse`.

## Valeur

Une valeur énumérée représentant le type de navigation.

Les valeurs possibles sont&nbsp;:

- `push`
  - : Une nouvelle localisation est visitée, ce qui provoque l'ajout d'une nouvelle entrée dans la liste de l'historique.
- `reload`
  - : La valeur de {{DOMxRef("Navigation.currentEntry")}} est rechargée.
- `replace`
  - : La valeur de {{DOMxRef("Navigation.currentEntry")}} est remplacée par une nouvelle entrée dans l'historique. Cette nouvelle entrée réutilise la même {{DOMxRef("NavigationHistoryEntry.key", "key")}}, mais se voit attribuer un {{DOMxRef("NavigationHistoryEntry.id", "id")}} différent.
- `traverse`
  - : Le navigateur navigue d'une entrée existante de l'historique vers une autre entrée existante de l'historique.

## Exemples

### Transitions asynchrones avec gestion spéciale des navigations arrière/avant

Il est parfois souhaitable de gérer les navigations arrière/avant de manière spéciale, par exemple en réutilisant des vues mises en cache en les faisant apparaître à l'écran. Cela peut être fait en procédant comme suit&nbsp;:

```js
navigation.addEventListener("navigate", (event) => {
  // Certaines navigations, par exemple les navigations inter-origines,
  // ne peuvent pas être interceptées. Laissez le navigateur les gérer normalement.
  if (!event.canIntercept) {
    return;
  }

  // N'intercepte pas les navigations par fragment ou les téléchargements.
  if (event.hashChange || event.downloadRequest !== null) {
    return;
  }

  event.intercept({
    async handler() {
      if (monCadriciel.currentPage) {
        await monCadriciel.currentPage.transitionOut();
      }

      let { key } = event.destination;

      if (
        event.navigationType === "traverse" &&
        monCadriciel.previousPages.has(key)
      ) {
        await monCadriciel.previousPages.get(key).transitionIn();
      } else {
        // Cela entraîne probablement le stockage par monCadriciel
        // de la page rendue dans monCadriciel.previousPages.
        await monCadriciel.renderPage(event.destination);
      }
    },
  });
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
