---
title: "Document : évènement selectionchange"
short-title: selectionchange
slug: Web/API/Document/selectionchange_event
l10n:
  sourceCommit: 453f1e19963409710b3466630538467db38a3f6f
---

{{APIRef("Selection API")}}

Le navigateur déclenche l'évènement **`selectionchange`** de [l'API de sélection](/fr/docs/Web/API/Selection) lorsque la {{DOMxRef("Selection")}} actuelle d'un {{DOMxRef("Document")}} change. Une sélection de document représente soit une plage de contenu sélectionné à travers les nœuds DOM, soit à une position de curseur réduite.

Cet évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("selectionchange", (event) => {})

onselectionchange = (event) => {}
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Description

L'évènement `selectionchange` de l'objet `Document` est déclenché lorsque&nbsp;:

- Un·e utilisateur·ice ou un script crée ou efface une sélection.
- Le point de départ ou d'arrivée d'une plage sélectionnée se déplace.
- Une plage sélectionnée change complètement.
- Une sélection se réduit à une seule position de curseur.

L'objet évènement lui-même ne contient pas les détails de la sélection mise à jour. Vous pouvez récupérer la sélection actuelle en appelant {{DOMxRef("Document.getSelection()", "document.getSelection()")}} dans votre gestionnaire d'évènement.

Cet évènement diffère considérablement de l'évènement `selectionchange` déclenché sur les contrôles de texte {{HTMLElement("input")}} et {{HTMLElement("textarea")}}&nbsp;:

- Les sélections dans le document utilisent les positions des nœuds DOM et nécessitent {{DOMxRef("Document.getSelection()")}} pour être inspectées. Les champs de texte maintiennent des sélections indépendantes dans leurs valeurs textuelles internes, en utilisant des décalages de caractères inspectés avec `selectionStart`, `selectionEnd` et `selectionDirection`.
- L'évènement `selectionchange` au niveau du document est déclenché directement sur le {{DOMxRef("Document")}} et ne se propage pas. L'évènement `selectionchange` des champs de texte est déclenché sur l'élément input/textarea et se propage dans l'arbre DOM.

Consultez l'évènement {{DOMxRef("HTMLInputElement.selectionchange_event", "selectionchange")}} de `HTMLInputElement` et l'évènement {{DOMxRef("HTMLTextAreaElement.selectionchange_event", "selectionchange")}} de `HTMLTextAreaElement` pour plus de détails sur les évènements de saisie de texte.

## Exemples

### Exemple simple

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
