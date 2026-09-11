---
title: "Navigation : évènement currententrychange"
short-title: currententrychange
slug: Web/API/Navigation/currententrychange_event
l10n:
  sourceCommit: e7ffb2866dc8b67280801535c7f58bf073a5aaf9
---

{{APIRef("Navigation API")}}

L'évènement **`currententrychange`** de l'interface {{DOMxRef("Navigation")}} est déclenché lorsque la valeur de {{DOMxRef("Navigation.currentEntry")}} a changée.

Cet évènement se déclenche pour&nbsp;:

- Les navigations dans le même document (par exemple, {{DOMxRef("Navigation.back", "back()")}} ou {{DOMxRef("Navigation.traverseTo", "traverseTo()")}}).

- Les remplacements (c'est-à-dire un appel à {{DOMxRef("Navigation.navigate", "navigate()")}} avec `history` défini sur `replace`).

- Les autres appels qui modifient l'état de l'entrée (par exemple, {{DOMxRef("Navigation.updateCurrentEntry", "updateCurrentEntry()")}}, ou le {{DOMxRef("History.replaceState()")}}) de {{DOMxRef("History API", "l'API History", "", "nocode")}}.

Cet évènement se déclenche après que la navigation a été validée, ce qui signifie que l'URL visible a changé et que la mise à jour de {{DOMxRef("NavigationHistoryEntry")}} a eu lieu. Il est utile pour migrer depuis l'utilisation de fonctionnalités d'API plus anciennes comme les évènements {{DOMxRef("Window/hashchange_event", "hashchange")}} ou {{DOMxRef("Window/popstate_event", "popstate")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("currententrychange", (event) => { })

oncurrententrychange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("NavigationCurrentEntryChangeEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("NavigationCurrentEntryChangeEvent")}}

## Exemples

Rapport des données de navigation&nbsp;:

```js
navigation.addEventListener("currententrychange", () => {
  const data = navigation.currentEntry.getState();
  submitAnalyticsData(data.analytics);
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
