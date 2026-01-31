---
title: "HTMLTextAreaElement : évènement selectionchange"
short-title: selectionchange
slug: Web/API/HTMLTextAreaElement/selectionchange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

L'évènement **`selectionchange`** de {{DOMxRef("Selection", "l'API Selection")}} se déclenche lorsque la sélection de texte dans un élément HTML {{HTMLElement("textarea")}} est modifiée.
Cela inclut aussi bien les changements dans la plage de caractères sélectionnés que le déplacement du curseur.

Cet évènement n'est pas annulable.

L'évènement est généralement traité en ajoutant un gestionnaire d'évènement sur l'élément {{HTMLElement("textarea")}}, et dans la fonction de gestion, en lisant les propriétés `selectionStart`, `selectionEnd` et `selectionDirection` de {{DOMxRef("HTMLTextAreaElement")}}.

Il est aussi possible d'ajouter un gestionnaire sur l'évènement global `onselectionchange`, et dans la fonction de gestion, d'utiliser {{DOMxRef("Document.getSelection()")}} pour obtenir la {{DOMxRef("Selection", "sélection", , 1)}}. Cependant, cela n'est pas très utile pour obtenir les changements de sélection _texte_.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

L'exemple ci-dessous montre comment obtenir le texte sélectionné dans un élément HTML {{HTMLElement("textarea")}}.

### HTML

```html
<div>
  Saisissez et sélectionnez du texte ici&nbsp;:<br />
  <textarea id="my-text" rows="2" cols="20"></textarea>
</div>
<div>selectionStart&nbsp;: <span id="start"></span></div>
<div>selectionEnd&nbsp;: <span id="end"></span></div>
<div>selectionDirection&nbsp;: <span id="direction"></span></div>
```

### JavaScript

```js
const myInput = document.getElementById("my-text");

myInput.addEventListener("selectionchange", () => {
  document.getElementById("start").textContent = myInput.selectionStart;
  document.getElementById("end").textContent = myInput.selectionEnd;
  document.getElementById("direction").textContent = myInput.selectionDirection;
});
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
