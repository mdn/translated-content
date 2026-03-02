---
title: "HTMLCanvasElement : évènement contextrestored"
short-title: contextrestored
slug: Web/API/HTMLCanvasElement/contextrestored_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

L'évènement **`contextrestored`** de l'[API Canvas](/fr/docs/Web/API/Canvas_API) est déclenché si l'agent utilisateur restaure le stockage associé à un contexte {{DOMxRef("CanvasRenderingContext2D")}}.

Après réception de cet évènement, vous pouvez redessiner, recharger les ressources et réinitialiser l'état de votre contexte.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("contextrestored", (event) => { })

oncontextrestored = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemple

Le fragment de code ci‑dessous détecte l'évènement `contextrestored`.

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextrestored", (e) => {
  console.log(e);
  // appel de redrawCanvas() ou similaire
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'évènement `HTMLCanvasElement : contextlost`](/fr/docs/Web/API/HTMLCanvasElement/contextlost_event)
- La méthode {{DOMxRef("CanvasRenderingContext2D.isContextLost()")}}
- [L'évènement `OffscreenCanvas : contextlost`](/fr/docs/Web/API/OffscreenCanvas/contextlost_event)
