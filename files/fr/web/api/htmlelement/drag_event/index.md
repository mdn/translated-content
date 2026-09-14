---
title: "HTMLElement : évènement drag"
short-title: drag
slug: Web/API/HTMLElement/drag_event
l10n:
  sourceCommit: 3385bda58637833eedc9b8dc41a2804e653208a7
---

{{APIRef("HTML Drag and Drop API")}}

L'évènement `drag` de l'interface {{DOMxRef("HTMLElement")}} est déclenché de manière répétée lorsqu'un élément ou une sélection de texte est en train d'être déplacé par l'utilisateur·ice. La fréquence de déclenchement dépend du navigateur, du système d'exploitation et du mouvement du pointeur&nbsp;; ne vous fiez pas à un intervalle fixe.

La fréquence de déclenchement dépend du navigateur, du système d'exploitation et du mouvement du pointeur. L'évènement `drag` peut continuer à se déclencher lorsque le pointeur est immobile, et peut se déclencher plus fréquemment lorsqu'il est en mouvement. Ne vous fiez pas à un intervalle fixe et ne vous attendez pas à un évènement pour chaque mouvement du pointeur. La [spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/dnd.html#drag-and-drop-processing-model) utilise une fréquence de déclenchement d'environ 350ms (±200ms). En pratique, les navigateurs utilisent des mises à jour de déplacement natives et des minuteries spécifiques à la plateforme pour dispatcher ces évènements, donc cet intervalle ne décrit pas tout le comportement des navigateurs.

Cet évènement est annulable et peut se propager jusqu'aux objets {{DOMxRef("Document")}} et {{DOMxRef("Window")}}.

## Syntaxe

On utilisera le nom de l'évènement dans des méthodes telles que {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou on définit une propriété gestionnaire d'évènements.

```js-nolint
addEventListener("drag", (event) => { })

ondrag = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("DragEvent")}}. Hérite de l'objet {{DOMxRef("Event")}}.

{{InheritanceDiagram("DragEvent")}}

## Exemples

### Exemple de glisser‑déposer

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

.dragging {
  opacity: 0.5;
}
```

#### JavaScript

```js
let dragged;

/* les évènements déclenchés sur la cible déplaçable */
const source = document.getElementById("draggable");
source.addEventListener("drag", (event) => {
  console.log("déplacement");
});

source.addEventListener("dragstart", (event) => {
  //  stocker une référence sur l'élément déplacé
  dragged = event.target;
  // rendre l'élément semi-transparent
  event.target.classList.add("dragging");
});

source.addEventListener("dragend", (event) => {
  // réinitialiser la transparence
  event.target.classList.remove("dragging");
});

/* les évènements déclenchés sur les cibles de dépôt */
const target = document.getElementById("drop-target");
target.addEventListener("dragover", (event) => {
  // empêcher le comportement par défaut pour autoriser le dépôt
  event.preventDefault();
});

target.addEventListener("dragenter", (event) => {
  // mettre en surbrillance la cible de dépôt potentielle lorsque l'élément déplaçable y entre
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.add("dragover");
  }
});

target.addEventListener("dragleave", (event) => {
  // réinitialiser l'arrière-plan de la cible de dépôt potentielle lorsque l'élément déplaçable la quitte
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
  }
});

target.addEventListener("drop", (event) => {
  // empêcher le comportement par défaut (ouvrir comme un lien pour certains éléments)
  event.preventDefault();
  // déplacer l'élément déplacé vers la cible de dépôt sélectionnée
  if (event.target.classList.contains("dropzone")) {
    event.target.classList.remove("dragover");
    event.target.appendChild(dragged);
  }
});
```

#### Résultat

{{EmbedLiveSample("Exemple de glisser‑déposer")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
- L'évènement {{DOMxRef("HTMLElement/dragend_event", "dragend")}}
- L'évènement {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
- L'évènement {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
- L'évènement {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
- L'évènement {{DOMxRef("HTMLElement/drop_event", "drop")}}
