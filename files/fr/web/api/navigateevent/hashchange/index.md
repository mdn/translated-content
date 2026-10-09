---
title: "NavigateEvent : propriété hashChange"
short-title: hashChange
slug: Web/API/NavigateEvent/hashChange
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`hashChange`** de l'interface {{DOMxRef("NavigateEvent")}} retourne `true` si la navigation est une navigation par fragment (c'est-à-dire vers un identifiant de fragment dans le même document), ou sinon `false`.

## Valeur

Une valeur booléenne — `true` si la navigation est une navigation par fragment, sinon `false`.

## Exemples

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
    handler() {
      if (event.formData) {
        processFormDataAndUpdateUI(event.formData, event.signal);
      } else {
        doSinglePageAppNav(event.destination, event.signal);
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
