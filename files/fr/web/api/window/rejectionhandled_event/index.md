---
title: "Window : évènement rejectionhandled"
slug: Web/API/Window/rejectionhandled_event
l10n:
  sourceCommit: d9026c37acaf22da682206c381686fe8a4666f16
---

{{APIRef("HTML DOM")}}

L'évènement **`rejectionhandled`** est envoyé à la portée globale du script (il s'agit généralement de [`window`](/fr/docs/Web/API/Window), mais ça peut aussi être [`Worker`](/fr/docs/Web/API/Worker)) lorsqu'une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) rompue est gérée tardivement, c'est-à-dire lorsqu'un gestionnaire est attaché à la promesse après que celle-ci a échoué en entraînant un évènement [`unhandledrejection`](/fr/docs/Web/API/Window/unhandledrejection_event).

Cet évènement peut être utilisé pour le débogage et pour la résilience des applications en général. On pourra l'utiliser avec l'évènement `unhandledrejection` qui est émis lorsqu'une promesse est rompue et qu'elle n'a pas de gestionnaire d'échec à ce moment.

## Syntaxe

On pourra utiliser le nom de l'évènement dans des méthodes comme [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener), ou utiliser une propriété qui est un gestionnaire d'évènement.

```js
addEventListener("rejectionhandled", (event) => {});
onrejectionhandled = (event) => {};
```

## Type d'évènement

Un objet de type [`PromiseRejectionEvent`](/fr/docs/Web/API/PromiseRejectionEvent) qui hérite de [`Event`](/fr/docs/Web/API/Event).

{{InheritanceDiagram("PromiseRejectionEvent")}}

## Propriétés de l'évènement

- [`PromiseRejectionEvent.promise`](/fr/docs/Web/API/PromiseRejectionEvent/promise) {{ReadOnlyInline}}
  - : La [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) JavaScript qui a été rompue.
- [`PromiseRejectionEvent.reason`](/fr/docs/Web/API/PromiseRejectionEvent/reason) {{ReadOnlyInline}}
  - : Une valeur ou un objet qui indique la raison de l'échec de la promesse, comme celui qui serait passé à [`Promise.reject()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject).

## Alias pour les gestionnaires d'évènement

En plus de l'interface `Window`, la propriété `onrejectionhandled` pour gérer l'évènement est disponible sur les cibles suivantes&nbsp;:

- [`HTMLBodyElement`](/fr/docs/Web/API/HTMLBodyElement)
- [`HTMLFrameSetElement`](/fr/docs/Web/API/HTMLFrameSetElement)
- [`SVGSVGElement`](/fr/docs/Web/API/SVGSVGElement)

## Exemple

L'évènement `rejectionhandled` peut être utilisé afin de journaliser les promesses rompues dans la console, ainsi que les raisons de leur échec&nbsp;:

```js
window.addEventListener(
  "rejectionhandled",
  (event) => {
    console.log(`Promesse rompue - raison : ${event.reason}`);
  },
  false,
);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les évènements relatifs aux échecs des promesses](/fr/docs/Web/JavaScript/Guide/Using_promises#évènements_liés_à_la_rupture_dune_promesse)
- [`PromiseRejectionEvent`](/fr/docs/Web/API/PromiseRejectionEvent)
- [Les promesses (`Promise`)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`unhandledrejection`](/fr/docs/Web/API/Window/unhandledrejection_event)
