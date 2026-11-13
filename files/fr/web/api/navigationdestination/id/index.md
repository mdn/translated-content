---
title: "NavigationDestination : propriété id"
short-title: id
slug: Web/API/NavigationDestination/id
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`id`** de l'interface {{DOMxRef("NavigationDestination")}} retourne la valeur {{DOMxRef("NavigationHistoryEntry.id", "id")}} de la destination {{DOMxRef("NavigationHistoryEntry")}} si le {{DOMxRef("NavigateEvent.navigationType")}} est `traverse`, sinon une chaîne de caractères vide.

Un `id` est unique, généré par l'agent utilisateur, et représente toujours l'entrée de l'historique, utile pour corréler une entrée de l'historique avec une ressource externe telle qu'un cache de stockage.

## Valeur

Une chaîne de caractères représentant un `id` de la destination {{DOMxRef("NavigationHistoryEntry")}}, ou une chaîne de caractères vide.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.id);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Explication de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
