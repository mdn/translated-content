---
title: "NavigationHistoryEntry : propriété index"
short-title: index
slug: Web/API/NavigationHistoryEntry/index
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`index`** de l'interface {{DOMxRef("NavigationHistoryEntry")}} retourne l'index de l'entrée de l'historique dans la liste des entrées de l'historique (c'est-à-dire la liste retournée par {{DOMxRef("Navigation.entries()")}}), ou `-1` si l'entrée n'apparaît pas dans la liste ou si le document actuel n'est pas entièrement actif.

## Valeur

Un nombre représentant un `index` de l'entrée dans la liste des entrées de l'historique, ou `-1` si cet élément n'apparaît pas dans la liste.

## Exemples

```js
const current = navigation.currentEntry;
console.log(current.index);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
