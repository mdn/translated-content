---
title: "NavigationTransition : propriété committed"
short-title: committed
slug: Web/API/NavigationTransition/committed
l10n:
  sourceCommit: e37e6f1ca594cd444b243be19637171790bbb656
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`committed`** de l'interface {{DOMxRef("NavigationTransition")}} retourne une promesse ({{JSxRef("Promise")}}) qui se complète lorsque {{DOMxRef("Navigation.currentEntry")}} est mis à jour et que la nouvelle URL est affichée dans le navigateur, marquant la navigation comme engagée. Cela se produit après que tous les [gestionnaires de pré-validation](/fr/docs/Web/API/NavigateEvent/intercept#gérer_les_actions_avant_validation_avec_precommithandler) pour la navigation sont remplis.

La promesse `committed` se rompt si un gestionnaire de pré-validation se rompt.

## Valeur

Une promesse ({{JSxRef("Promise")}}) qui se complète avec la valeur `undefined`.

## Exemples

```js
async function lockInNavigation() {
  await navigation.transition.committed;
  // La navigation s'est validée avec succès
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
