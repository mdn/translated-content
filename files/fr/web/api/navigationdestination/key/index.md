---
title: "NavigationDestination : propriété key"
short-title: key
slug: Web/API/NavigationDestination/key
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`key`** de l'interface {{DOMxRef("NavigationDestination")}} retourne la valeur {{DOMxRef("NavigationHistoryEntry.key", "key")}} de la destination {{DOMxRef("NavigationHistoryEntry")}} si le {{DOMxRef("NavigateEvent.navigationType")}} est `traverse`, sinon une chaîne de caractères vide.

Une clé (`key`) est une valeur unique, générée par l'agent utilisateur, qui représente la position de l'entrée de l'historique dans la liste des entrées de l'historique, utilisée pour naviguer vers cet emplacement dans l'historique avec {{DOMxRef("Navigation.traverseTo()")}}. Elle est réutilisée par d'autres entrées qui remplacent l'entrée dans la liste (c'est-à-dire si le {{DOMxRef("NavigateEvent.navigationType")}} est `replace`).

## Valeur

Une chaîne de caractères représentant une `key` de la destination {{DOMxRef("NavigationHistoryEntry")}}, ou une chaîne de caractères vide.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.key);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Explication de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
