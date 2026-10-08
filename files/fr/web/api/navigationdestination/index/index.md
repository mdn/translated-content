---
title: "NavigationDestination : propriété index"
short-title: index
slug: Web/API/NavigationDestination/index
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`index`** de l'interface {{DOMxRef("NavigationDestination")}} retourne la valeur {{DOMxRef("NavigationHistoryEntry.index", "index")}} de la destination {{DOMxRef("NavigationHistoryEntry")}} si le {{DOMxRef("NavigateEvent.navigationType")}} est `traverse`, sinon `-1`.

## Valeur

Un nombre représentant un `index` de la destination {{DOMxRef("NavigationHistoryEntry")}}, ou -1.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.index);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Explication de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
