---
title: "Element : évènement paste"
short-title: paste
slug: Web/API/Element/paste_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Clipboard API")}}

L'évènement **`paste`** de [l'API Clipboard](/fr/docs/Web/API/Clipboard_API) est déclenché lorsque l'utilisateur·ice a lancé une action de «&nbsp;coller&nbsp;» par l'interface utilisateur du navigateur.

Si le curseur se trouve dans un contexte éditable (par exemple, dans un {{HTMLElement("textarea")}} ou un élément avec l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) défini sur `true`), l'action par défaut consiste à insérer le contenu du presse-papiers dans le document à la position du curseur.

Un gestionnaire pour cet évènement peut accéder au contenu du presse-papiers en appelant {{DOMxRef("DataTransfer/getData", "getData()")}} sur la propriété `clipboardData` de l'évènement.

Pour remplacer le comportement par défaut (par exemple pour insérer des données différentes ou une transformation du contenu du presse-papiers), un gestionnaire d'évènement doit annuler l'action par défaut en utilisant {{DOMxRef("Event/preventDefault", "event.preventDefault()")}}, puis insérer manuellement les données souhaitées.

Il est possible de construire et de déclencher un évènement `paste` [synthétique](/fr/docs/Web/API/Document_Object_Model/Events#créer_et_diffuser_des_évènements), mais cela n'affecte pas le contenu du document.

Cet évènement [se propage](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling) dans l'arborescence DOM, jusqu'à {{DOMxRef("Document")}} et {{DOMxRef("Window")}}, est [annulable](/fr/docs/Web/API/Event/cancelable) et est [composé](/fr/docs/Web/API/Event/composed).

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("paste", (event) => { })

onpaste = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("ClipboardEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Exemples

### Exemple interactif

#### HTML

```html
<div class="source" contenteditable="true">
  Copiez le texte depuis cette zone.
</div>
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
const cible = document.querySelector("div.cible");

cible.addEventListener("paste", (event) => {
  event.preventDefault();

  let coller = (event.clipboardData || window.clipboardData).getData("text");
  coller = coller.toUpperCase();
  const selection = window.getSelection();
  if (!selection.rangeCount) return;
  selection.deleteFromDocument();
  selection.getRangeAt(0).insertNode(document.createTextNode(coller));
  selection.collapseToEnd();
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
- L'évènement {{DOMxRef("Element/copy_event", "copy")}}
