---
title: "HTMLInputElement : évènement selectionchange"
short-title: selectionchange
slug: Web/API/HTMLInputElement/selectionchange_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Selection API")}}

L'évènement **`selectionchange`** de l'{{DOMxRef("Selection_API", "API Selection")}} est déclenché lorsqu'une sélection de texte à l'intérieur d'un élément HTML {{HTMLElement("input")}} change. Cela inclut les modifications de l'étendue sélectionnée de caractères ou le déplacement du caret.

Cet évènement n'est pas annulable.

L'évènement est généralement traité en ajoutant un écouteur sur l'élément {{HTMLElement("input")}}, et dans la fonction gestionnaire on lit les propriétés `selectionStart`, `selectionEnd` et `selectionDirection` de {{DOMxRef("HTMLInputElement")}}.

Il est aussi possible d'ajouter un gestionnaire via la propriété `onselectionchange` et, dans la fonction gestionnaire, d'utiliser {{DOMxRef("Document.getSelection()")}} pour obtenir l'objet {{DOMxRef("Selection")}}. Toutefois, cela est peu utile pour détecter les changements de _sélections de texte_.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou affectez un gestionnaire d'évènements à la propriété correspondante.

```js-nolint
addEventListener("selectionchange", (event) => { })

onselectionchange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

L'exemple ci‑dessous montre comment obtenir le texte sélectionné dans un élément {{HTMLElement("input")}}.

### HTML

```html
<div>
  Saisissez et sélectionnez du texte ici&nbsp;:<br /><input
    id="my-text"
    rows="2"
    cols="20" />
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
