---
title: dragleave
slug: Web/API/Document/dragleave_event
translation_of: Web/API/Document/dragleave_event
---
L'événement **dragleave** est déclenché lorsqu'un élément glissé ou une sélection de texte quitte une cible de dépôt valide.

## Informations générales

- Interface
  - : [`DragEvent`](/fr/docs/Web/API/DragEvent)
- Propagation
  - : Oui
- Annulable
  - : Non
- Cible
  - : {{domxref("Document")}}, {{domxref("Element")}}
- Action par défaut
  - : Aucune

## Propriétés

| Property                                 | Type                                             | Description                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/en-US/docs/Web/API/EventTarget) | The element that was underneath the element being dragged.                                                                                                                                                                                                                                                                                                                                                              |
| `type` {{readonlyInline}}          | [`DOMString`](/en-US/docs/Web/API/DOMString)     | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                      |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/en-US/docs/Web/API/Boolean)         | Whether the event normally bubbles or not                                                                                                                                                                                                                                                                                                                                                                               |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/en-US/docs/Web/API/Boolean)         | Whether the event is cancellable or not?                                                                                                                                                                                                                                                                                                                                                                                |
| `view` {{readonlyInline}}          | [`WindowProxy`](/en-US/docs/Web/API/WindowProxy) | [`document.defaultView`](/en-US/docs/Web/API/Document/defaultView) (`window` of the document)                                                                                                                                                                                                                                                                                                                           |
| `detail` {{readonlyInline}}        | `long` (`float`)                                 | 0.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `dataTransfer`                           | DataTransfer                                     | The data that underlies a drag-and-drop operation, known as the [drag data store](/en-US/docs/Web/API/DataTransfer). Protected mode.                                                                                                                                                                                                                                                                                    |
| `currentTarget` {{readonlyInline}} | EventTarget                                      | The node that had the event listener attached.                                                                                                                                                                                                                                                                                                                                                                          |
| `relatedTarget` {{readonlyInline}} | EventTarget                                      | For `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                                                                                                                               |
| `screenX` {{readonlyInline}}       | long                                             | The X coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                   |
| `screenY` {{readonlyInline}}       | long                                             | The Y coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                   |
| `clientX` {{readonlyInline}}       | long                                             | The X coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                               |
| `clientY` {{readonlyInline}}       | long                                             | The Y coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                               |
| `button` {{readonlyInline}}        | unsigned short                                   | The button number that was pressed when the mouse event was fired: Left button=0, middle button=1 (if present), right button=2. For mice configured for left handed use in which the button actions are reversed the values are instead read from right to left.                                                                                                                                                        |
| `buttons` {{readonlyInline}}       | unsigned short                                   | The buttons being pressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are pressed, returns the logical sum of the values. E.g., if Left button and Right button are pressed, returns 3 (=1 \| 2). [More info](/en-US/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                            | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                          |
| `ctrlKey` {{readonlyInline}}       | boolean                                          | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                         |
| `shiftKey` {{readonlyInline}}      | boolean                                          | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                           |
| `altKey` {{readonlyInline}}        | boolean                                          | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                             |
| `metaKey` {{readonlyInline}}       | boolean                                          | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                            |

## Exemple

```html
<div class="dropzone">
  <div id="draggable" draggable="true" ondragstart="event.dataTransfer.setData('text/plain',null)">
    This div is draggable
  </div>
</div>
<div class="dropzone"></div>
<div class="dropzone"></div>
<div class="dropzone"></div>

<style>
  #draggable {
    width: 200px;
    height: 20px;
    text-align: center;
    background: white;
  }

  .dropzone {
    width: 200px;
    height: 20px;
    background: blueviolet;
    margin-bottom: 10px;
    padding: 10px;
  }
</style>

<script>
  var dragged;

  /* Les événements sont déclenchés sur les objets glissables */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // Stocke une référence sur l'objet glissable
      dragged = event.target;
      // transparence 50%
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // reset de la transparence
      event.target.style.opacity = "";
  }, false);

  /* Les événements sont déclenchés sur les cibles du drop */
  document.addEventListener("dragover", function( event ) {
      // Empêche default d'autoriser le drop
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // Met en surbrillance la cible de drop potentielle lorsque l'élément glissable y entre
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // reset de l'arrière-plan des potentielles cible du drop lorsque les éléments glissables les quittent
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }

  }, false);

  document.addEventListener("drop", function( event ) {
      // Empêche l'action par défaut (ouvrir comme lien pour certains éléments)
      event.preventDefault();
      // Déplace l'élément traîné vers la cible du drop sélectionnée
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }

  }, false);
</script>
```

## Spécifications

| Spécification                                                                                | Statut                           | Commentaire         |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("HTML WHATWG", "interaction.html#dndevents", "dragleave")}} | {{Spec2("HTML WHATWG")}} |                     |
| {{SpecName("HTML5.1", "editing.html#dndevents", "dragleave")}}         | {{Spec2("HTML5.1")}}     | Définition initiale |

## Compatibilités navigateur

{{Compat("api.Document.dragleave_event")}}

## Voir aussi

- {{event("drag")}}
- {{event("dragstart")}}
- {{event("dragend")}}
- {{event("dragover")}}
- {{event("dragenter")}}
- {{event("dragleave")}}
- {{event("dragexit")}}
- {{event("drop")}}
