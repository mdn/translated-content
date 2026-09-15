---
title: "NavigationDestination : propriété sameDocument"
short-title: sameDocument
slug: Web/API/NavigationDestination/sameDocument
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`sameDocument`** de l'interface {{DOMxRef("NavigationDestination")}} retourne `true` si la navigation se fait vers le même `document` que la valeur actuelle de {{DOMxRef("Document")}}, ou sinon `false`.

Ceci est utile pour vérifier si la navigation se fait vers le même document ou vers un document différent.

## Valeur

Un booléen.

## Exemples

```js
navigation.addEventListener("navigate", (event) => {
  console.log(event.destination.sameDocument);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Explication de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
