---
title: "Document : évènement selectionchange"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

L'évènement **`selectionchange`** de [l'API de sélection](/fr/docs/Web/API/Selection) est déclenché lorsque la {{DOMxRef("Selection")}} actuelle d'un {{DOMxRef("Document")}} est modifiée.

Cet évènement n'est pas annulable et ne se propage pas.

L'évènement peut être géré en ajoutant un écouteur d'évènement pour `selectionchange` ou en utilisant le gestionnaire d'évènement `onselectionchange`.

> [!NOTE]
> Cet évènement n'est pas tout à fait le même que les évènements `selectionchange` déclenchés lorsque la sélection de texte dans un élément HTML {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} est modifiée. Voir l'évènement {{DOMxRef("HTMLInputElement.selectionchange_event", "selectionchange")}} de `HTMLInputElement` pour plus de détails.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

```js
// Version avec addEventListener
document.addEventListener("selectionchange", () => {
  console.log(document.getSelection());
});

// Version avec onselectionchange
document.onselectionchange = () => {
  console.log(document.getSelection());
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Node/selectstart_event", "selectstart")}}
- La méthode {{DOMxRef("Document.getSelection()")}}
- L'interface {{DOMxRef("Selection")}}
