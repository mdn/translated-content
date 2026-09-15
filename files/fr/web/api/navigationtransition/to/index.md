---
title: "NavigationTransition : propriété to"
short-title: to
slug: Web/API/NavigationTransition/to
l10n:
  sourceCommit: ef78a9a3336c884fb3587e4ff833e64704296f01
---

{{APIRef("Navigation API")}}{{SeeCompatTable}}

La propriété en lecture seule **`to`** de l'interface {{DOMxRef("NavigationTransition")}} retourne le {{DOMxRef("NavigationDestination")}} vers lequel la transition se dirige.

Cela reflète la propriété {{DOMxRef("NavigateEvent.destination")}}, mais, contrairement à celle-ci, elle est disponible en dehors du gestionnaire d'évènements {{DOMxRef("Navigation.navigate_event", "navigate")}}. Elle est particulièrement utile lors de l'appel de fonctions avant que l'URL ne change (par exemple, pendant la pré-validation ou en cas d'erreur).

## Valeur

Un objet {{DOMxRef("NavigationDestination")}}.

## Exemples

### Gérer une erreur de navigation

```js
navigation.onnavigateerror = (e) => {
  if (navigation.transition?.to?.url === loginPageURL) {
    /* faire quelque chose lorsqu'on échoue à accéder à la page de connexion */
  }
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
