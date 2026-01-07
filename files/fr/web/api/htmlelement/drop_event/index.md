---
title: "HTMLElement : évènement drop"
short-title: drop
slug: Web/API/HTMLElement/drop_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML Drag and Drop API")}}

L'évènement **`drop`** de l'interface {{DOMxRef("HTMLElement")}} est déclenché lorsqu'un élément ou une sélection de texte est déposé sur une cible de dépôt valide. Pour garantir que l'évènement `drop` se déclenche toujours comme prévu, vous devez toujours inclure un appel à {{DOMxRef("Event/preventDefault", "preventDefault()")}} dans la partie de votre code qui gère l'évènement {{DOMxRef("HTMLElement/dragover_event", "dragover")}}.

Cet évènement est annulable et peut se propager jusqu'aux objets {{DOMxRef("Document")}} et {{DOMxRef("Window")}}.

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou on définira une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("drop", (event) => { })

ondrop = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("DragEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Propriétés d'évènement

_En plus des propriétés listées ci‑dessous, les propriétés de l'interface parente, {{DOMxRef("Event")}}, sont disponibles._

- {{DOMxRef('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Les données transférées lors d'une interaction de glisser‑déposer.

## Exemples

### Exemple minimal de glisser‑déposer

Dans cet exemple, nous avons un élément déplaçable à l'intérieur d'un conteneur. Essayez de saisir l'élément, de le déplacer au‑dessus de l'autre conteneur, puis de le relâcher.

Nous utilisons trois gestionnaires d'évènements ici&nbsp;:

- dans le gestionnaire d'évènement `dragstart`, nous obtenons une référence vers l'élément déplacé par l'utilisateur·ice
- dans le gestionnaire d'évènement `dragover` pour le conteneur cible, nous appelons `event.preventDefault()`, ce qui permet de recevoir les évènements `drop`.
- dans le gestionnaire d'évènement `drop` pour la zone de dépôt, nous gérons le déplacement de l'élément déplaçable du conteneur d'origine vers la zone de dépôt.

Pour un exemple complet de glisser‑déposer, consultez la page de l'évènement {{DOMxRef("HTMLElement/drag_event", "drag")}}.

#### HTML

```html
<div class="dropzone">
  <div id="draggable" draggable="true">Ce div est déplaçable</div>
</div>
<div class="dropzone" id="drop-target"></div>
```

#### CSS

```css
body {
  /* Empêche l'utilisateur·ice de sélectionner du texte dans l'exemple */
  user-select: none;
}

#draggable {
  text-align: center;
  background: white;
}

.dropzone {
  width: 200px;
  height: 20px;
  background: blueviolet;
  margin: 10px;
  padding: 10px;
}
```

#### JavaScript

```js
let dragged = null;

const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // stocke une référence sur l'élément déplacé
  dragged = event.target;
});

const target = document.getElementById("drop-target");
target.addEventListener("dragover", (event) => {
  // empêche le comportement par défaut pour autoriser le drop
  event.preventDefault();
});

target.addEventListener("drop", (event) => {
  // empêche l'action par défaut (ouvrir comme lien pour certains éléments)
  event.preventDefault();
  // déplace l'élément déplacé vers la cible de dépôt sélectionnée
  if (event.target.className === "dropzone") {
    dragged.parentNode.removeChild(dragged);
    event.target.appendChild(dragged);
  }
});
```

#### Résultat

{{EmbedLiveSample('Exemple minimal de glisser‑déposer')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres évènements de glisser-deposer&nbsp;:
  - {{DOMxRef("HTMLElement/drag_event", "drag")}}
  - {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
  - {{DOMxRef("HTMLElement/dragend_event", "dragend")}}
  - {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
  - {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
  - {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
