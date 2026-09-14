---
title: "NavigateEvent : propriété downloadRequest"
short-title: downloadRequest
slug: Web/API/NavigateEvent/downloadRequest
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`downloadRequest`** de l'interface {{DOMxRef("NavigateEvent")}} retourne le nom du fichier demandé pour téléchargement, dans le cas d'une navigation de téléchargement (par exemple, un élément HTML {{HTMLElement("a")}} ou {{HTMLElement("area")}} avec un attribut `download`), ou sinon `null`.

## Valeur

Une chaîne de caractères contenant le nom du fichier demandé pour téléchargement, ou `null`.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  // Certaines navigations, par exemple les navigations inter-origines,
  // ne peuvent pas être interceptées. Laissez le navigateur les gérer normalement.
  if (!event.canIntercept) {
    return;
  }

  // N'intercepte pas les navigations de fragments ou les téléchargements.
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
