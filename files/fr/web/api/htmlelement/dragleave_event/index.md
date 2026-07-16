---
title: "HTMLElement : évènement dragleave"
short-title: dragleave
slug: Web/API/HTMLElement/dragleave_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("HTML Drag and Drop API")}}

L'évènement `dragleave` de l'interface {{DOMxRef("HTMLElement")}} est déclenché lorsqu'un élément déplacé ou une sélection de texte quitte une cible de dépôt valide.

Cet évènement n'est pas annulable et peut se propager jusqu'aux objets {{DOMxRef("Document")}} et {{DOMxRef("Window")}}.

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou on définira une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("dragleave", (event) => { })

ondragleave = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("DragEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Propriétés d'évènement

_En plus des propriétés listées ci‑dessous, les propriétés de l'interface parente, {{DOMxRef("Event")}}, sont disponibles._

- {{DOMxRef('DragEvent.dataTransfer')}} {{ReadOnlyInline}}
  - : Les données transférées lors d'une interaction de glisser‑déposer.

## Exemples

### Réinitialisation du style des zones de dépôt sur `dragleave`

Dans cet exemple, nous avons un élément déplaçable à l'intérieur d'un conteneur. Essayez de saisir l'élément, de le déplacer au‑dessus de l'autre conteneur, puis de le relâcher.

Nous donnons à l'autre conteneur un arrière‑plan violet pendant que l'élément déplaçable le survole, afin d'indiquer qu'il peut y être déposé. Nous écoutons l'évènement `dragleave` pour réinitialiser l'arrière‑plan du conteneur lorsque l'élément déplaçable quitte le conteneur.

Cependant, dans cet exemple partiel, la fonctionnalité de dépôt n'est pas implémentée&nbsp;: pour un exemple complet de glisser‑déposer, consultez la page de l'évènement {{DOMxRef("HTMLElement/drag_event", "drag")}}.

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

.dropzone.dragover {
  background-color: purple;
}
```

#### JavaScript

```js
const target = document.getElementById("drop-target");
target.addEventListener("dragenter", (event) => {
  // met en surbrillance la cible de dépôt potentielle lorsque l'élément déplaçable y entre
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // réinitialise l'arrière‑plan de la cible de dépôt potentielle lorsque l'élément déplaçable la quitte
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});
```

#### Résultat

{{EmbedLiveSample('Réinitialisation du style des zones de dépôt sur `dragleave`')}}

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
  - {{DOMxRef("HTMLElement/drop_event", "drop")}}
