---
title: NavigationHistoryEntry
slug: Web/API/NavigationHistoryEntry
l10n:
  sourceCommit: 0563b7d83916b234fa637483211889e573df9440
---

{{APIRef("Navigation API")}}

L'interface **`NavigationHistoryEntry`** de {{DOMxRef("Navigation API", "l'API Navigation", "", "nocode")}} représente une seule entrée de l'historique de navigation.

Ces objets sont couramment accessibles avec la propriété {{DOMxRef("Navigation.currentEntry")}} et la méthode {{DOMxRef("Navigation.entries()")}}.

L'API Navigation n'expose que les entrées de l'historique créées dans le contexte de navigation actuel et ayant la même origine que la page actuelle (par exemple, pas les navigations à l'intérieur des {{HTMLElement("iframe")}} intégrés, ni les navigations inter-origines), fournissant une liste précise de toutes les entrées de l'historique précédentes uniquement pour votre application. Cela rend la traversée de l'historique beaucoup moins fragile qu'avec l'ancienne {{DOMxRef("History API", "API History", "", "nocode")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("NavigationHistoryEntry.id", "id")}} {{ReadOnlyInline}}
  - : Retourne un `id` de l'entrée de l'historique. Il s'agit d'une valeur unique générée par l'agent utilisateur qui représente toujours une entrée d'historique spécifique, utile pour la corréler avec une ressource externe telle qu'un cache de stockage.
- {{DOMxRef("NavigationHistoryEntry.index", "index")}} {{ReadOnlyInline}}
  - : Retourne l'index de l'entrée de l'historique dans la liste des entrées de l'historique (c'est-à-dire la liste retournée par {{DOMxRef("Navigation.entries()")}}), ou `-1` si l'entrée n'apparaît pas dans la liste.
- {{DOMxRef("NavigationHistoryEntry.key", "key")}} {{ReadOnlyInline}}
  - : Retourne la `key` de l'entrée de l'historique. Il s'agit d'une valeur unique générée par l'agent utilisateur qui représente le créneau de l'entrée dans la liste des entrées plutôt que l'entrée elle-même. Elle est utilisée pour naviguer vers ce créneau particulier avec {{DOMxRef("Navigation.traverseTo()")}}. La `key` est réutilisée par d'autres entrées qui remplacent l'entrée dans la liste (c'est-à-dire si le {{DOMxRef("NavigateEvent.navigationType")}} est `replace`).
- {{DOMxRef("NavigationHistoryEntry.sameDocument", "sameDocument")}} {{ReadOnlyInline}}
  - : Retourne `true` si cette entrée de l'historique concerne le même `document` que la valeur actuelle de {{DOMxRef("Document")}}, sinon `false`.
- {{DOMxRef("NavigationHistoryEntry.url", "url")}} {{ReadOnlyInline}}
  - : Retourne l'URL absolue de cette entrée de l'historique. Si l'entrée correspond à un document différent de celui actuel (comme lorsque la propriété `sameDocument` est `false`), et que ce document a été récupéré avec un en-tête {{HTTPHeader("Referrer-Policy")}} défini sur `no-referrer` ou `origin`, la propriété retourne `null`.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("EventTarget")}}._

- {{DOMxRef("NavigationHistoryEntry.getState", "getState()")}}
  - : Retourne une copie de l'état disponible associé à cette entrée de l'historique.

## Évènements

- {{DOMxRef("NavigationHistoryEntry/dispose_event", "dispose")}}
  - : Déclenché lorsque l'entrée ne fait plus partie de la liste des entrées de l'historique.

## Exemples

```js
function initBoutonAccueil() {
  // Obtient la clé de la première entrée chargée
  // afin que l'utilisateur·ice puisse toujours revenir à cette vue.
  const { key } = navigation.currentEntry;
  backToHomeButton.onclick = () => {
    navigation.traverseTo(key);
  };
}
// Intercepte les évènements de navigation, tels que les clics sur les
// liens, et les remplace par des navigations sur une seule page
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // Navigue vers une vue différente,
      // mais le bouton « accueil » fonctionne toujours.
    },
  });
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
