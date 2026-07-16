---
title: "HTMLCanvasElement : évènement contextlost"
short-title: contextlost
slug: Web/API/HTMLCanvasElement/contextlost_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

L'évènement **`contextlost`** de l'[API Canvas](/fr/docs/Web/API/Canvas_API) est déclenché si l'agent utilisateur détecte que le stockage, associé à un contexte [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D), est perdu.
Les contextes peuvent être perdus pour plusieurs raisons, par exemple un plantage du pilote ou une saturation de la mémoire de l'application.

Par défaut, l'agent utilisateur tentera de restaurer le contexte, puis déclenchera l'[évènement `contextrestored`](/fr/docs/Web/API/HTMLCanvasElement/contextrestored_event).
Le code utilisateur peut empêcher la restauration du contexte en appelant [`Event.preventDefault()`](/fr/docs/Web/API/Event/preventDefault) lors du traitement de l'évènement.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("contextlost", (event) => { })

oncontextlost = (event) => { }
```

## Type d'évènement

Un {{DOMxRef("Event")}} générique.

## Exemple

Le fragment de code ci‑dessous détecte l'évènement `contextlost`.

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

Pour empêcher la restauration du contexte, le code peut ressembler à ceci&nbsp;:

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'évènement `HTMLCanvasElement : contextrestored`](/fr/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- La méthode {{DOMxRef("CanvasRenderingContext2D.isContextLost()")}}
- [L'évènement `OffscreenCanvas : contextlost`](/fr/docs/Web/API/OffscreenCanvas/contextlost_event)
