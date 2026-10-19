---
title: "NavigationTransition : propriété finished"
short-title: finished
slug: Web/API/NavigationTransition/finished
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`finished`** de l'interface {{DOMxRef("NavigationTransition")}} retourne une promesse ({{JSxRef("Promise")}}) qui se complète en même temps que l'évènement {{DOMxRef("Navigation/navigatesuccess_event", "navigatesuccess")}} se déclenche, ou se rompt en même temps que l'évènement {{DOMxRef("Navigation/navigateerror_event", "navigateerror")}} se déclenche.

## Valeur

Une promesse ({{JSxRef("Promise")}}) qui se complète avec la valeur `undefined`.

## Exemples

```js
async function cleanupNavigation() {
  await navigation.transition.finished;
  // La navigation s'est complétée avec succès
  // Nettoyer toute surveillance en cours
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
