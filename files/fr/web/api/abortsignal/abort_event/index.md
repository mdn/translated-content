---
title: "AbortSignal : évènement abort"
short-title: abort
slug: Web/API/AbortSignal/abort_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

L'évènement **`abort`** de l'interface {{DOMxRef("AbortSignal")}} est déclenché lorsque la requête associée est annulée, c'est-à-dire via {{DOMxRef("AbortController.abort()")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("abort", (event) => { })

onabort = (event) => { }
```

## Type d'évènement

Un {{DOMxRef("Event")}} générique sans propriété supplémentaire.

## Exemples

Dans les extraits suivants, nous créons un nouvel objet `AbortController` et récupérons son {{DOMxRef("AbortSignal")}} (disponible via la propriété `signal`). Plus loin, nous vérifions si le signal a été annulé à l'aide d'une propriété gestionnaire d'évènement.

Vous pouvez détecter l'évènement `abort` avec la méthode [`addEventListener`](/fr/docs/Web/API/EventTarget/addEventListener)&nbsp;:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.addEventListener("abort", () => {
  console.log("Requête annulée");
});
```

Ou utiliser la propriété gestionnaire d'évènement `onabort`&nbsp;:

```js
const controller = new AbortController();
const signal = controller.signal;

signal.onabort = () => {
  console.log("Requête annulée");
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
