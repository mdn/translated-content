---
title: "NavigationActivation : propriété navigationType"
short-title: navigationType
slug: Web/API/NavigationActivation/navigationType
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`navigationType`** de l'interface {{DOMxRef("NavigationActivation")}} contient une chaîne de caractères indiquant le type de navigation.

## Valeur

Une chaîne de caractères représentant le type de navigation auquel se rapporte la {{DOMxRef("NavigationActivation")}}. Les valeurs possibles sont&nbsp;:

- `push`&nbsp;: Une nouvelle localisation a été navigué, ce qui a entraîné l'ajout d'une nouvelle entrée dans la liste de l'historique.
- `reload`&nbsp;: La valeur de {{DOMxRef("NavigationActivation.entry")}} a été rechargée.
- `replace`&nbsp;: La valeur de {{DOMxRef("NavigationActivation.entry")}} a été remplacée par une nouvelle entrée dans l'historique. Cette nouvelle entrée réutilise la même {{DOMxRef("NavigationHistoryEntry.key", "key")}}, mais se voit attribuer un {{DOMxRef("NavigationHistoryEntry.id", "id")}} différent.
- `traverse`&nbsp;: Le navigateur a navigué d'une entrée existante de l'historique vers une autre entrée existante de l'historique.

## Exemples

```js
window.addEventListener("pageswap", (event) => {
  // Par exemple, la page a été masquée, ou la navigation est inter-document.
  if (!event.viewTransition) return;

  // Ignorer la transition de vue pour les navigations arrière/avant.
  if (event.activation.navigationType === "traverse") {
    event.viewTransition.skipTransition();
  }
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Navigation](/fr/docs/Web/API/Navigation_API)
- [L'API View Transition](/fr/docs/Web/API/View_Transition_API)
