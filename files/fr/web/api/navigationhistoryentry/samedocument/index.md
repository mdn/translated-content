---
title: "NavigationHistoryEntry : propriété sameDocument"
short-title: sameDocument
slug: Web/API/NavigationHistoryEntry/sameDocument
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`sameDocument`** de l'interface {{DOMxRef("NavigationHistoryEntry")}} retourne `true` si cette entrée de l'historique concerne le même `document` que la valeur actuelle de {{DOMxRef("Document")}} et que le document actuel est entièrement actif, sinon `false`.

## Valeur

Un booléen.

## Exemples

```js
const actuelle = navigation.currentEntry;
console.log(actuelle.sameDocument);
// Retourne toujours true
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
