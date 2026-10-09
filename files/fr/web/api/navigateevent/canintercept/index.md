---
title: "NavigateEvent : propriété canIntercept"
short-title: canIntercept
slug: Web/API/NavigateEvent/canIntercept
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`canIntercept`** de l'interface {{DOMxRef("NavigateEvent")}} retourne `true` si la navigation peut être interceptée et que son URL peut être réécrite, ou sinon `false`.

Il existe plusieurs règles concernant le moment où une navigation peut être interceptée. Par exemple&nbsp;:

- Vous ne pouvez pas intercepter les navigations inter-origines.
- Vous pouvez intercepter les URL `http` ou `https` si seules les parties `path`, `query` et `fragment` de la nouvelle URL diffèrent de l'URL actuelle.
- Vous pouvez intercepter les URL `file` si seules les parties `query` et `fragment` de la nouvelle URL diffèrent.
- Pour les autres types d'URL, vous pouvez intercepter la navigation si seule la partie `fragment` diffère.

Voir la spécification pour une explication plus détaillée sur [le moment où un Document peut voir son URL réécrite <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/nav-history-apis.html#can-have-its-url-rewritten), y compris un tableau d'exemples.

## Valeur

Une valeur booléenne — `true` si la navigation peut être interceptée, sinon `false`.

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
