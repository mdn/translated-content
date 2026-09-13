---
title: NavigationTransition
slug: Web/API/NavigationTransition
l10n:
  sourceCommit: e37e6f1ca594cd444b243be19637171790bbb656
---

{{APIRef("Navigation API")}}

L'interface **`NavigationTransition`** de {{domxref("Navigation API", "l'API Navigation", "", "nocode")}} représente une navigation en cours — une navigation qui n'a pas encore atteint l'évènement {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} ou {{domxref("Navigation/navigateerror_event", "navigateerror")}}.

Elle est accessible par la propriété {{domxref("Navigation.transition")}}.
Notez que cette propriété n'est remplie que tant que le gestionnaire [`intercept()`](/fr/docs/Web/API/NavigateEvent/intercept) n'est pas résolu (c'est-à-dire, lors d'une [interception de navigation](/fr/docs/Web/API/Navigation/navigate_event#gérer_une_navigation_avec_intercept)), et est sinon `null`.

{{InheritanceDiagram}}

## Propriétés d'instance

- {{domxref("NavigationTransition.committed", "committed")}} {{ReadOnlyInline}}
  - : Retourne une promesse ({{jsxref("Promise")}}) qui se complète lorsque {{domxref("Navigation.currentEntry")}} est mis à jour et que la nouvelle URL est affichée dans le navigateur, marquant la navigation comme engagée.
- {{domxref("NavigationTransition.finished", "finished")}} {{ReadOnlyInline}}
  - : Retourne une promesse ({{jsxref("Promise")}}) qui se complète en même temps que l'évènement {{domxref("Navigation/navigatesuccess_event", "navigatesuccess")}} se déclenche, ou se rompt en même temps que l'évènement {{domxref("Navigation/navigateerror_event", "navigateerror")}} se déclenche.
- {{domxref("NavigationTransition.from", "from")}} {{ReadOnlyInline}}
  - : Retourne l'entrée {{domxref("NavigationHistoryEntry")}} depuis laquelle la transition provient.
- {{domxref("NavigationTransition.navigationType", "navigationType")}} {{ReadOnlyInline}}
  - : Retourne le type de la navigation en cours.
- {{domxref("NavigationTransition.to", "to")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Retourne un objet {{domxref("NavigationDestination")}} vers lequel la transition se dirige.

## Exemples

```js
async function cleanupNavigation() {
  await navigation.transition.finished;
  // La navigation s'est terminée avec succès
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
- [Démonstration en direct de l'API Navigation <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/navigation-api/) ([voir le code source de la démonstration <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/navigation-api))
