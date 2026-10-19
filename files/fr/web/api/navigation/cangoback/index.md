---
title: "Navigation : propriété canGoBack"
short-title: canGoBack
slug: Web/API/Navigation/canGoBack
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`canGoBack`** de l'interface {{DOMxRef("Navigation")}} retourne `true` s'il est possible de naviguer en arrière dans l'historique de navigation (c'est-à-dire que la {{DOMxRef("Navigation.currentEntry", "currentEntry")}} n'est pas la première de la liste des entrées de l'historique), et `false` dans le cas contraire.

## Valeur

Une valeur booléenne — `true` s'il est possible de naviguer en arrière dans l'historique de navigation, `false` dans le cas contraire.

## Exemples

```js
async function gestionEnArriere() {
  if (navigation.canGoBack) {
    await navigation.back().finished;
    // Gère tout nettoyage nécessaire après
    // que la navigation est terminée
  } else {
    displayBanner("Vous êtes sur la première page");
  }
}

async function gestionEnAvant() {
  if (navigation.canGoForward) {
    await navigation.forward().finished;
    // Gère tout nettoyage nécessaire après
    // que la navigation est terminée
  } else {
    displayBanner("Vous êtes sur la dernière page");
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
