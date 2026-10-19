---
title: NavigationCurrentEntryChangeEvent
slug: Web/API/NavigationCurrentEntryChangeEvent
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("Navigation API")}}

L'interface **`NavigationCurrentEntryChangeEvent`** de {{DOMxRef("Navigation API", "l'API Navigation", "", "nocode")}} est l'objet évènement pour l'évènement {{DOMxRef("Navigation/currententrychange_event", "currententrychange")}}, qui se déclenche lorsque la valeur {{DOMxRef("Navigation.currentEntry")}} a changée.

Cet évènement se déclenche pour les navigations dans le même document (par exemple, {{DOMxRef("Navigation.back", "back()")}} ou {{DOMxRef("Navigation.traverseTo", "traverseTo()")}}), les remplacements (c'est-à-dire un appel à {{DOMxRef("Navigation.navigate", "navigate()")}} avec `history` défini sur `replace`), ou d'autres appels qui modifient l'état de l'entrée (par exemple, {{DOMxRef("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}, ou {{DOMxRef("History API", "l'API History", "", "nocode")}} et sa méthode {{DOMxRef("History.replaceState()")}}).

Cet évènement se déclenche après que la navigation a été validée, ce qui signifie que l'URL visible a changé et que la mise à jour de {{DOMxRef("NavigationHistoryEntry")}} a eu lieu. Il est utile pour migrer depuis l'utilisation de fonctionnalités plus anciennes de l'API, comme les évènements {{DOMxRef("Window/hashchange_event", "hashchange")}} ou {{DOMxRef("Window/popstate_event", "popstate")}}.

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("NavigationCurrentEntryChangeEvent.NavigationCurrentEntryChangeEvent", "NavigationCurrentEntryChangeEvent()")}}
  - : Crée une nouvelle instance de l'objet `NavigationCurrentEntryChangeEvent`.

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("Event")}}._

- {{DOMxRef("NavigationCurrentEntryChangeEvent.from", "from")}} {{ReadOnlyInline}}
  - : Retourne une {{DOMxRef("NavigationHistoryEntry")}} vers laquelle la navigation a été effectuée.
- {{DOMxRef("NavigationCurrentEntryChangeEvent.navigationType", "navigationType")}} {{ReadOnlyInline}}
  - : Retourne le type de la navigation qui a entraîné le changement.

## Exemples

Rapport des données de navigation&nbsp;:

```js
navigation.addEventListener("currententrychange", () => {
  const donnee = navigation.currentEntry.getState();
  submitAnalyticsData(donnee.analytics);
});
```

Configuration d'un évènement par entrée&nbsp;:

```js
navigation.addEventListener("currententrychange", () => {
  navigation.currentEntry.addEventListener("dispose", genericDisposeHandler);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
- [Démonstration en direct de l'API Navigation <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/navigation-api/) ([voir le code source de la démonstration <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/navigation-api))
