---
title: "Window : évènement pagehide"
short-title: pagehide
slug: Web/API/Window/pagehide_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("HTML DOM")}}

L'évènement **`pagehide`** de l'interface {{DOMxRef("Window")}} est émis lorsqu'une entrée dans un historique de session est sur le point d'être quittée.

Par exemple, lorsque l'utilisateur·ice clique sur le bouton «&nbsp;Précédent&nbsp;» du navigateur, la page actuelle reçoit un évènement `pagehide` avant que la page précédente ne soit affichée.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("pagehide", (event) => { })

onpagehide = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("PageTransitionEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PageTransitionEvent")}}

## Propriétés de l'évènement

- {{DOMxRef("PageTransitionEvent.persisted")}} {{ReadOnlyInline}}
  - : Indique si le document est chargé depuis un cache.

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété du gestionnaire d'évènement `onpagehide` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Notes d'utilisation

Comme les évènements {{DOMxRef("Window.unload_event", "unload")}}
et {{DOMxRef("Window.beforeunload_event", "beforeunload")}}, cet évènement n'est pas déclenché de manière fiable par les navigateurs, en particulier sur mobile. Par exemple, l'évènement `pagehide` n'est pas du tout déclenché dans le scénario suivant&nbsp;:

1. Un·e utilisateur·ice mobile visite votre page.
2. L'utilisateur·ice passe ensuite à une autre application.
3. Plus tard, l'utilisateur·ice ferme le navigateur depuis le gestionnaire d'applications.

Cependant, contrairement aux évènements `unload` et `beforeunload`, cet évènement est compatible avec le [cache avant/arrière <sup>(angl.)</sup>](https://web.dev/articles/bfcache) (bfcache), donc ajouter un écouteur à cet évènement n'empêchera pas la page d'être incluse dans le bfcache.

Le meilleur évènement à utiliser pour signaler la fin de la session d'un utilisateur est l'évènement {{DOMxRef("Window.visibilitychange_event", "visibilitychange")}}. Dans les navigateurs qui ne prennent pas en charge `visibilitychange`, l'évènement `pagehide` est la meilleure alternative.

Si vous essayez spécifiquement de détecter les évènements de déchargement de page, l'évènement `pagehide` est la meilleure option.

Voir le guide de [l'API Page Lifecycle <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/page-lifecycle-api) pour plus d'informations sur la manière dont cet évènement se rapporte aux autres évènements du cycle de vie de la page.

## Exemples

Dans cet exemple, un gestionnaire d'évènements est établi pour surveiller les évènements `pagehide` et effectuer un traitement spécial si la page est en cours de persistance pour une réutilisation éventuelle.

```js
window.addEventListener("pagehide", (event) => {
  if (event.persisted) {
    /* la page n'est pas en train d'être supprimée, elle peut donc être réutilisée plus tard */
  }
});
```

Cela peut également être écrit en utilisant la propriété du gestionnaire d'évènement `onpagehide` sur le {{DOMxRef("Window")}}&nbsp;:

```js
window.onpagehide = (event) => {
  if (event.persisted) {
    /* la page n'est pas en train d'être supprimée, elle peut donc être réutilisée plus tard */
  }
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window.pageshow_event", "pageshow")}}
- [L'API Page Lifecycle <sup>(angl.)</sup>](https://developer.chrome.com/docs/web-platform/page-lifecycle-api#developer-recommendations-for-each-state) fournit des recommandations sur les meilleures pratiques pour gérer le comportement du cycle de vie des pages dans vos applications web.
- [PageLifecycle.js <sup>(angl.)</sup>](https://github.com/GoogleChromeLabs/page-lifecycle)&nbsp;: une bibliothèque JavaScript qui gère les incohérences entre navigateurs dans le comportement du cycle de vie des pages.
- [Back/forward cache <sup>(angl.)</sup>](https://web.dev/articles/bfcache) explique ce qu'est le cache avant/arrière et ses implications pour divers événements du cycle de vie des pages.
