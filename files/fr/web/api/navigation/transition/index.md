---
title: "Navigation : propriété transition"
short-title: transition
slug: Web/API/Navigation/transition
l10n:
  sourceCommit: 4a873b9316fad777692bc15abaacac2f7648b9e8
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`transition`** de l'interface {{DOMxRef("Navigation")}} retourne un objet {{DOMxRef("NavigationTransition")}} représentant l'état d'une navigation en cours, qui peut être utilisé pour la suivre.

`Navigation.transition` n'est rempli que tant que le gestionnaire [`intercept()`](/fr/docs/Web/API/NavigateEvent/intercept) n'est pas résolu (c'est-à-dire lors d'une [interception de navigation](/fr/docs/Web/API/Navigation/navigate_event#gérer_une_navigation_en_utilisant_intercept)), et est sinon `null`.

## Valeur

Un objet {{DOMxRef("NavigationTransition")}}, ou `null` si aucune navigation n'est en cours.

## Exemples

```js
async function gererTransition() {
  if (navigation.transition) {
    afficherBoucleDeChargement();
    await navigation.transition.finished;
    masquerBoucleDeChargement();
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
