---
title: "NavigationCurrentEntryChangeEvent : propriété from"
short-title: from
slug: Web/API/NavigationCurrentEntryChangeEvent/from
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`from`** de l'interface {{DOMxRef("NavigationCurrentEntryChangeEvent")}} retourne la {{DOMxRef("NavigationHistoryEntry")}} depuis laquelle la navigation a été effectuée.

## Valeur

Un objet {{DOMxRef("NavigationHistoryEntry")}}.

## Exemples

```js
navigation.addEventListener("currententrychange", (event) => {
  console.log(event.from);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
