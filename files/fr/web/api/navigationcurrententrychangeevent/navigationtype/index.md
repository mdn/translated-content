---
title: "NavigationCurrentEntryChangeEvent : propriété navigationType"
short-title: navigationType
slug: Web/API/NavigationCurrentEntryChangeEvent/navigationType
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`navigationType`** de l'interface {{DOMxRef("NavigationCurrentEntryChangeEvent")}} retourne le type de la navigation qui a entraîné le changement. La propriété peut être `null` si le changement se produit à la suite de {{DOMxRef("Navigation.updateCurrentEntry()")}}.

## Valeur

Une valeur énumérée représentant le type de navigation.

Les valeurs possibles sont&nbsp;:

- `push`&nbsp;: Une nouvelle localisation est visitée, ce qui entraîne l'ajout d'une nouvelle entrée dans la liste de l'historique.
- `reload`&nbsp;: La valeur de {{DOMxRef("Navigation.currentEntry")}} est rechargée.
- `replace`&nbsp;: La valeur de {{DOMxRef("Navigation.currentEntry")}} est remplacée par une nouvelle entrée dans l'historique. Cette nouvelle entrée réutilise la même {{DOMxRef("NavigationHistoryEntry.key", "key")}}, mais se voit attribuer un {{DOMxRef("NavigationHistoryEntry.id", "id")}} différent.
- `traverse`&nbsp;: Le navigateur passe d'une entrée existante de l'historique à une autre entrée existante de l'historique.

## Exemples

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.navigationType);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
