---
title: "NavigateEvent : propriété signal"
short-title: signal
slug: Web/API/NavigateEvent/signal
l10n:
  sourceCommit: 77ea71add6054857698eb7ac1bfec8c7afe9ad4f
---

{{APIRef("Navigation API")}}

La propriété en lecture seule **`signal`** de l'interface {{DOMxRef("NavigateEvent")}} retourne un {{DOMxRef("AbortSignal")}}, qui est annulé si la navigation est annulée (par exemple, si l'utilisateur·ice appuie sur le bouton «&nbsp;Arrêter&nbsp;» du navigateur, ou si une autre navigation commence et annule ainsi la navigation en cours).

## Valeur

Un objet {{DOMxRef("AbortSignal")}}.

## Exemples

L'idée générale ici est que la propriété `signal` peut être transmise à une opération {{DOMxRef("Window/fetch", "fetch()")}} associée afin que, si la navigation est annulée, l'opération `fetch()` puisse être interrompue en toute sécurité, évitant ainsi de gaspiller de la bande passante sur des récupérations qui ne sont plus nécessaires.

```js
navigation.addEventListener("navigate", (event) => {
  event.intercept({
    async handler() {
      // …

      await fetch(`/img/some-image.jpg`, { signal: event.signal });

      // …
    },
  });
});
```

> [!NOTE]
> Voir [Exemple&nbsp;: boutons Suivant/Précédent <sup>(angl.)</sup>](https://github.com/WICG/navigation-api#example-nextprevious-buttons) pour un exemple plus détaillé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Routage moderne côté client&nbsp;: l'API Navigation <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/navigation-api/)
- [Présentation de l'API Navigation <sup>(angl.)</sup>](https://github.com/WICG/navigation-api/blob/main/README.md)
