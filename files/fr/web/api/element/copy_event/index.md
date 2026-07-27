---
title: "Element : évènement copy"
short-title: copy
slug: Web/API/Element/copy_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Clipboard API")}}

L'évènement **`copy`** de [l'API Clipboard](/fr/docs/Web/API/Clipboard_API) se déclenche lorsque l'utilisateur·ice initie une action de copie avec l'interface utilisateur du navigateur.

L'action par défaut de l'évènement est de copier la sélection (le cas échéant) dans le presse-papiers.

Un gestionnaire d'évènement peut _modifier_ le contenu du presse-papiers en appelant {{DOMxRef("DataTransfer.setData", "setData(format, data)")}} sur la propriété {{DOMxRef("ClipboardEvent.clipboardData")}} de l'évènement, et en annulant l'action par défaut de l'évènement en utilisant {{DOMxRef("Event/preventDefault", "event.preventDefault()")}}.

Cependant, le gestionnaire ne peut pas _lire_ les données du presse-papiers.

Il est possible de construire et de déclencher un évènement [synthétique](/fr/docs/Web/API/Document_Object_Model/Events#créer_et_diffuser_des_évènements) `copy`, mais cela n'affecte pas le presse-papiers du système.

Cet évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling) dans l'arborescence DOM, jusqu'à {{DOMxRef("Document")}} et {{DOMxRef("Window")}}, est [annulable](/fr/docs/Web/API/Event/cancelable) et est [composé](/fr/docs/Web/API/Event/composed).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("copy", (event) => { })

oncopy = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("ClipboardEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Exemples

### Exemple interactif

#### HTML

```html
<div class="source" contenteditable="true">Copiez le texte de cette zone.</div>
<div class="cible" contenteditable="true">Et collez-le dans celle-ci.</div>
```

```css hidden
div.source,
div.cible {
  border: 1px solid gray;
  margin: 0.5rem;
  padding: 0.5rem;
  height: 1rem;
  background-color: #e9eef1;
}
```

#### JavaScript

```js
const source = document.querySelector("div.source");

source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
});
```

#### Résultat

{{EmbedLiveSample("Exemple interactif", "100%", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Element/cut_event", "cut")}}
- L'évènement {{DOMxRef("Element/paste_event", "paste")}}
