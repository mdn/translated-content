---
title: "Window : évènement rejectionhandled"
short-title: rejectionhandled
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("HTML DOM")}}

L'évènement **`rejectionhandled`** est envoyé à la portée globale du script (il s'agit généralement de {{DOMxRef("window")}}, mais ça peut aussi être {{DOMxRef("Worker")}}) lorsqu'une promesse ({{JSxRef("Promise")}}) rompue est gérée tardivement, c'est-à-dire lorsqu'un gestionnaire est attaché à la promesse après que celle-ci a échoué en entraînant un évènement {{DOMxRef("Window.unhandledrejection_event", "unhandledrejection")}}.

Cet évènement peut être utilisé pour le débogage et pour la résilience des applications en général. On peut l'utiliser avec l'évènement `unhandledrejection` qui est émis lorsqu'une promesse est rompue et qu'elle n'a pas de gestionnaire d'échec à ce moment.

## Syntaxe

On peut utiliser le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou utiliser une propriété qui est un gestionnaire d'évènement.

```js-nolint
addEventListener("rejectionhandled", (event) => { })

onrejectionhandled = (event) => { }
```

## Type d'évènement

Un objet de type {{DOMxRef("PromiseRejectionEvent")}} qui hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Alias pour les gestionnaires d'évènement

En plus de l'interface `Window`, la propriété `onrejectionhandled` pour gérer l'évènement est disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Exemples

L'évènement `rejectionhandled` peut être utilisé afin de journaliser les promesses rompues dans la console, ainsi que les raisons de leur échec&nbsp;:

```js
window.addEventListener("rejectionhandled", (event) => {
  console.log(`Promesse rompue ; raison : ${event.reason}`);
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les évènements relatifs aux échecs des promesses](/fr/docs/Web/JavaScript/Guide/Using_promises#évènements_liés_à_la_rupture_dune_promesse)
- L'interface {{DOMxRef("PromiseRejectionEvent")}}
- L'objet {{JSxRef("Promise")}}
- L'évènement {{DOMxRef("Window/unhandledrejection_event", "unhandledrejection")}}
