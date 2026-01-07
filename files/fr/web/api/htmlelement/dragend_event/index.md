---
title: "HTMLElement : évènement dragend"
short-title: dragend
slug: Web/API/HTMLElement/dragend_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML Drag and Drop API")}}

L'évènement `dragend` de l'interface {{DOMxRef("HTMLElement")}} est déclenché lorsqu'une opération de glisser‑déposer se termine (en relâchant un bouton de la souris ou en appuyant sur la touche Échap).

Cet évènement est annulable et peut se propager jusqu'aux objets {{DOMxRef("Document")}} et {{DOMxRef("Window")}}.

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou on définira une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("dragend", (event) => { })

ondragend = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("DragEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Propriétés d'évènement

_En plus des propriétés listées ci‑dessous, les propriétés de l'interface parente, {{DOMxRef("Event")}}, sont disponibles._

- {{DOMxRef('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Les données transférées lors d'une interaction de glisser‑déposer.

## Exemples

### Réinitialisation de l'opacité à la fin du déplacement

Dans cet exemple, nous avons un élément déplaçable à l'intérieur d'un conteneur. Essayez de saisir l'élément, de le déplacer, puis de le relâcher.

Nous rendons l'élément semi‑transparent pendant le déplacement, et nous écoutons l'évènement `dragend` pour réinitialiser l'opacité de l'élément lorsqu'il est relâché.

Pour un exemple complet de glisser‑déposer, consultez la page de l'évènement {{DOMxRef("HTMLElement/drag_event", "drag")}}.

#### HTML

```html
<div id="container">
  <div id="draggable" draggable="true">Ce div est déplaçable</div>
</div>
<div class="dropzone"></div>
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

#container {
  width: 200px;
  height: 20px;
  background: blueviolet;
  padding: 10px;
}

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
const source = document.getElementById("draggable");
source.addEventListener("dragstart", (event) => {
  // rend l'élément semi‑transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // réinitialise la transparence
  event.target.classList.remove("dragging");
});
```

#### Résultat

{{EmbedLiveSample("Réinitialisation de l'opacité à la fin du déplacement")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres évènements de glisser-deposer&nbsp;:
  - {{DOMxRef("HTMLElement/drag_event", "drag")}}
  - {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
  - {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
  - {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
  - {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
  - {{DOMxRef("HTMLElement/drop_event", "drop")}}
