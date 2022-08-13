---
title: DragEvent
slug: Web/API/DragEvent
translation_of: Web/API/DragEvent
---
{{APIRef("HTML DOM")}}

Das `drag` Event wird ausgelöst, wenn ein Element oder ein Text "gezogen" wird (alle paar hundert Millisekunden).

## Allgemeine Informationen

- Spezifikation
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/dnd.html#event-drag)
- Interface
  - : DragEvent
- Steigt auf
  - : Ja
- Abbrechbar
  - : Ja
- Ziel
  - : Document, Element
- Standard-Aktion
  - : Mit der drag & drop Operation fortfahren.

## Eigenschaften

| Property                                 | Type                                                                                                                                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}        | [`EventTarget`](/de/docs/Web/API/EventTarget "EventTarget is an interface implemented by objects that can receive events and may have listeners for them.")  | The element that was underneath the element being dragged.                                                                                                                                                                                                                                                                                                                                                           |
| `type` {{readonlyInline}}          | [`DOMString`](/de/docs/Web/API/DOMString "DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String.") | The type of event.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `bubbles` {{readonlyInline}}       | [`Boolean`](/de/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event normally bubbles or not                                                                                                                                                                                                                                                                                                                                                                            |
| `cancelable` {{readonlyInline}}    | [`Boolean`](/de/docs/Web/API/Boolean "The Boolean object is an object wrapper for a boolean value.")                                                         | Whether the event is cancellable or not?                                                                                                                                                                                                                                                                                                                                                                             |
| `view` {{readonlyInline}}          | [`WindowProxy`](/de/docs/Web/API/WindowProxy "The documentation about this has not yet been written; please consider contributing!")                         | [`document.defaultView`](/de/docs/Web/API/Document/defaultView "In browsers, document.defaultView returns the window object associated with a document, or null if none is available.") (`window` of the document)                                                                                                                                                                                                   |
| `detail` {{readonlyInline}}        | `long` (`float`)                                                                                                                                             | 0.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `dataTransfer`                           | DataTransfer                                                                                                                                                 | The data that underlies a drag-and-drop operation, known as the [drag data store](/de/docs/Web/API/DataTransfer). Protected mode.                                                                                                                                                                                                                                                                                    |
| `currentTarget` {{readonlyInline}} | EventTarget                                                                                                                                                  | The node that had the event listener attached.                                                                                                                                                                                                                                                                                                                                                                       |
| `relatedTarget` {{readonlyInline}} | EventTarget                                                                                                                                                  | For `mouseover`, `mouseout`, `mouseenter` and `mouseleave` events: the target of the complementary event (the `mouseleave` target in the case of a `mouseenter` event). `null` otherwise.                                                                                                                                                                                                                            |
| `screenX` {{readonlyInline}}       | long                                                                                                                                                         | The X coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                |
| `screenY` {{readonlyInline}}       | long                                                                                                                                                         | The Y coordinate of the mouse pointer in global (screen) coordinates.                                                                                                                                                                                                                                                                                                                                                |
| `clientX` {{readonlyInline}}       | long                                                                                                                                                         | The X coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                            |
| `clientY` {{readonlyInline}}       | long                                                                                                                                                         | The Y coordinate of the mouse pointer in local (DOM content) coordinates.                                                                                                                                                                                                                                                                                                                                            |
| `button` {{readonlyInline}}        | unsigned short                                                                                                                                               | The button number that was pressed when the mouse event was fired: Left button=0, middle button=1 (if present), right button=2. For mice configured for left handed use in which the button actions are reversed the values are instead read from right to left.                                                                                                                                                     |
| `buttons` {{readonlyInline}}       | unsigned short                                                                                                                                               | The buttons being pressed when the mouse event was fired: Left button=1, Right button=2, Middle (wheel) button=4, 4th button (typically, "Browser Back" button)=8, 5th button (typically, "Browser Forward" button)=16. If two or more buttons are pressed, returns the logical sum of the values. E.g., if Left button and Right button are pressed, returns 3 (=1 \| 2). [More info](/de/docs/Web/API/MouseEvent). |
| `mozPressure` {{readonlyInline}}   | float                                                                                                                                                        | The amount of pressure applied to a touch or tabdevice when generating the event; this value ranges between 0.0 (minimum pressure) and 1.0 (maximum pressure).                                                                                                                                                                                                                                                       |
| `ctrlKey` {{readonlyInline}}       | boolean                                                                                                                                                      | `true` if the control key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                      |
| `shiftKey` {{readonlyInline}}      | boolean                                                                                                                                                      | `true` if the shift key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                        |
| `altKey` {{readonlyInline}}        | boolean                                                                                                                                                      | `true` if the alt key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                          |
| `metaKey` {{readonlyInline}}       | boolean                                                                                                                                                      | `true` if the meta key was down when the event was fired. `false` otherwise.                                                                                                                                                                                                                                                                                                                                         |

## Beispiel

```js
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

  /* Event wird vom ge-drag-ten Element ausgelöst */
  document.addEventListener("drag", function( event ) {

  }, false);

  document.addEventListener("dragstart", function( event ) {
      // Speichern einer ref auf das drag-bare Element
      dragged = event.target;
      // Element halb-transparent machen
      event.target.style.opacity = .5;
  }, false);

  document.addEventListener("dragend", function( event ) {
      // Transparenz zurücksetzen
      event.target.style.opacity = "";
  }, false);

  /* events fired on the drop targets */
  document.addEventListener("dragover", function( event ) {
      // Standard-Aktion verhindern um das drop-Event zu erlauben
      event.preventDefault();
  }, false);

  document.addEventListener("dragenter", function( event ) {
      // Hintergrund des möglichen Drop-Zeils anfärben, wenn das drag-bare Element auf das Ziel gezogen wird
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "purple";
      }

  }, false);

  document.addEventListener("dragleave", function( event ) {
      // Hintergrund des möglichen Drop-Ziels, wenn das drag-bare Element vom Ziel wieder weggezogen wird / verlässt
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
      }
  }, false);

  document.addEventListener("drop", function( event ) {
      // Standard-Aktion verhindern (Bei einigen Elementen wäre das das Öffnen als Link)
      event.preventDefault();
      // move dragged elem to the selected drop target
      if ( event.target.className == "dropzone" ) {
          event.target.style.background = "";
          dragged.parentNode.removeChild( dragged );
          event.target.appendChild( dragged );
      }

  }, false);
</script>
```

## Verwandte Events

- {{event("drag")}}
- {{event("dragstart")}}
- {{event("dragend")}}
- {{event("dragover")}}
- {{event("dragenter")}}
- {{event("dragleave")}}
- {{event("dragexit")}}
- {{event("drop")}}
