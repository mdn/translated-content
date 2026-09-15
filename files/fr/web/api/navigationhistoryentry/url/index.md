---
title: "NavigationHistoryEntry : propriété url"
short-title: url
slug: Web/API/NavigationHistoryEntry/url
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`url`** de l'interface {{DOMxRef("NavigationHistoryEntry")}} retourne l'URL absolue de cette entrée de l'historique. Si l'entrée correspond à un `Document` différent de celui actuel (comme lorsque la propriété `sameDocument` est `false`), et que ce `Document` a été récupéré avec un en-tête {{HTTPHeader("Referrer-Policy")}} défini sur `no-referrer` ou `origin`, la propriété retourne `null`. Si le document actuel n'est pas entièrement actif, elle retourne une chaîne de caractères vide.

## Valeur

Une chaîne de caractères représentant l'URL ou `null`.

## Exemples

```js
const actuelle = navigation.currentEntry;
console.log(actuelle.url);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
