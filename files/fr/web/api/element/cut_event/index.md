---
title: "Element : évènement cut"
short-title: cut
slug: Web/API/Element/cut_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Clipboard API")}}

L'évènement **`cut`** de [l'API Clipboard](/fr/docs/Web/API/Clipboard_API) est déclenché lorsque l'utilisateur·ice a initié·e une action de «&nbsp;coupe&nbsp;» par l'interface utilisateur du navigateur.

Si l'utilisateur·ice tente une action de «&nbsp;coupe&nbsp;» sur un contenu non modifiable, l'évènement `cut` est tout de même déclenché, mais l'objet évènement ne contient aucune donnée.

L'action par défaut de l'évènement est de copier la sélection courante (le cas échéant) dans le presse-papiers système et de la supprimer du document.

Un gestionnaire pour cet évènement peut _modifier_ le contenu du presse-papiers en appelant {{DOMxRef("DataTransfer.setData", "setData(format, data)")}} sur la propriété {{DOMxRef("ClipboardEvent.clipboardData")}} de l'évènement, et annuler l'action par défaut en utilisant {{DOMxRef("Event/preventDefault", "event.preventDefault()")}}.

Notez toutefois que l'annulation de l'action par défaut empêche également la mise à jour du document. Ainsi, un gestionnaire d'évènement qui souhaite émuler l'action par défaut pour «&nbsp;coupe&nbsp;» tout en modifiant le presse-papiers doit également supprimer manuellement la sélection du document.

Le gestionnaire ne peut pas _lire_ les données du presse-papiers.

Il est possible de construire et de déclencher un évènement [synthétique](/fr/docs/Web/API/Document_Object_Model/Events#créer_et_diffuser_les_évènements) `cut`, mais cela n'affecte pas le presse-papiers système ni le contenu du document.

Cet évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling) dans l'arborescence DOM, jusqu'à {{DOMxRef("Document")}} et {{DOMxRef("Window")}}, est [annulable](/fr/docs/Web/API/Event/cancelable) et est [composé](/fr/docs/Web/API/Event/composed).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("cut", (event) => { })

oncut = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("ClipboardEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Exemples

### Exemple interactif

#### HTML

```html
<div class="source" contenteditable="true">Coupez le texte de cette zone.</div>
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

source.addEventListener("cut", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  selection.deleteFromDocument();
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

- L'évènement {{DOMxRef("Element/copy_event", "copy")}}
- L'évènement {{DOMxRef("Element/paste_event", "paste")}}
