---
title: change
slug: Web/API/HTMLElement/change_event
translation_of: Web/API/HTMLElement/change_event
original_slug: Web/Events/change
---
Das `change` Event wird von {{HTMLElement("input")}}, {{HTMLElement("select")}}, und {{HTMLElement("textarea")}} Elementen ausgelöst, wenn der Benutzer den Wert des Elements verändert. Im Gegensatz zum {{event("input")}} Event wird das `change` Event nicht bei jeder Änderung der `value` Eigenschaft ausgelöst.

## General info

- Specification
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#event-input-change)
- Interface
  - : {{domxref("Event")}}
- Bubbles
  - : Yes
- Cancelable
  - : No
- Target
  - : Element
- Default Action
  - : undefined

## Eigenschaften

| Property                              | Type                                 | Description                                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------------------ |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | The event target (the topmost target in the DOM tree). |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}     | The type of event.                                     |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}         | Whether the event normally bubbles or not.             |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}         | Whether the event is cancellable or not.               |

## Beschreibung

Das `change` Event wird abhängig vom Form-Element, welches verändert wird, und der Art der Benutzerinteraktion mit dem Element in verschiedenen Situationen ausgelöst:

- Wenn das Element aktiviert ist (durch einen KIlick oder Verwendung der Tastatur) bei `<input type="radio">` und `<input type="checkbox">`;
- Wenn der Benutzer den Veränderung explizit bestätigt (z.B.: beim Auswählen eines Wertes eines {{HTMLElement("select")}}'s Dropdown mit einem Mausklick, beim Auswählen eine Datums bei einem Date Picker für `<input type="date">`, beim Auswählen einer Datei im File Picker für `<input type="file">`, etc.);
- Wenn das Element den Fokus verliert, nachdem sein Wert verändert aber noch nicht bestätigt wurde (z.B.: nach dem Editieren des Wert eines {{HTMLElement("textarea")}} oder `<input type="text">`).

Verschiedene Webbbrowser unterscheiden sich darin, ob das `change` Event bei bestimmten Interaktionen ausgelöst werden soll oder nicht. Tastaturnavigation in {{HTMLElement("select")}} Elementen zum Beispiel lösen das `change` event in Gecko nie aus bis der Benutzer die Enter-Taste drückt oder den Fokus vom `<select>` (see {{bug("126379")}}) Element nimmt.

Die HTML Spezifikation listet[ die `<input>` Typen, welche das `change` Event auslösen können](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#do-not-apply).

## Beispiele

Ein unvollständiges Beispiel auf jsfiddle: <http://jsfiddle.net/nfakc/5/>, welches möglicherweise nich in allen Webbrowsern funktioniert.

### Beispiel: Change Event auf einem `select`

Der folgende Code behandelt das `change` Event eines `select` durch den Aufruf der `changeEventHandler` Funktion im `onchange` Attribut. Die Funktion liest den Wert des Elements, das das Event auslöste, und gibt ihn in einem Alert aus.

```html
<html>
  <head>
    <title>Example: Change event on a select</title>
    <script type="text/javascript">
      function changeEventHandler(event) {
        alert('You like ' + event.target.value + ' ice cream.');
      }
    </script>
    </head>
    <body>
        <label>Choose an ice cream flavor: </label>
        <select size="1" onchange="changeEventHandler(event);">
            <option>chocolate</option>
            <option>strawberry</option>
            <option>vanilla</option>
        </select>
    </body>
</html>
```

## Siehe auch

{{domxref("NetworkInformation.connection")}} löst das `change` Event aus, wenn sich die Informationen zur Verbindung verändern.

## Webbrowserkompatibilität

{{ CompatibilityTable() }}

Laut [QuirksMode](http://www.quirksmode.org/dom/events/) sind Chrome und Firefox manchmal kompatibel. Aber IE9 und frühere Versionen von IE10 haben nur eine unvollständige Unterstützung.
