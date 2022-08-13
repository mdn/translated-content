---
title: MouseEvent
slug: Web/API/MouseEvent
tags:
  - API
  - DOM
  - DOM Events
  - Interface
  - Reference
translation_of: Web/API/MouseEvent
---
{{APIRef("DOM Events")}}

Die **`MouseEvent`** Schnittstelle stellt Events bereit, die während der Benutzerinteraktion mit einem Zeigegerät (zum Beispiel eine Maus) auftreten. Häufige Events, die diese Schnittstelle nutzen sind {{event("click")}}, {{event("dblclick")}}, {{event("mouseup")}}, {{event("mousedown")}}.

`MouseEvent` wird vererbt von {{domxref("UIEvent")}}, welches wiederum vererbt wird von {{domxref("Event")}}. Obwohl die {{domxref("MouseEvent.initMouseEvent()")}} Methode wegen der Rückwärtskompatibilität bleibt, sollte das Erstellen eines `MouseEvent` Objekts durch den {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}} Konstruktor erfolgen.

Mehrere spezifischere Events basieren auf MouseEvent, davon {{domxref("WheelEvent")}} und {{domxref("DragEvent")}}.

## Konstruktor

- {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}
  - : Erstellt ein`MouseEvent` Objekt.

## Eigenschaften

_Diese Schnittstelle erbt Eigenschaften der Elternobjekte {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{readonlyinline}}
  - : Gibt `true` zurück wenn die <kbd>alt</kbd> Taste gedrückt war, während das MouseEvent ausgelöst wurde.
- {{domxref("MouseEvent.button")}} {{readonlyinline}}
  - : Die Nummer des Buttons der gedrückt wurde (wenn anwendbar), während das MouseEvent ausgelöst wurde.
- {{domxref("MouseEvent.buttons")}} {{readonlyinline}} {{gecko_minversion_inline("15.0")}}
  - : Die Buttons, die losgelassen wurden (sofern vorhanden) während das MouseEvent ausgelöst wurde.
- {{domxref("MouseEvent.clientX")}} {{readonlyinline}}
  - : Die x-Koordinate des Mauszeigers in lokalen (DOM Inhalt) Koordinaten.
- {{domxref("MouseEvent.clientY")}} {{readonlyinline}}
  - : Die y-Koordinate des Mauszeigers in lokalen (DOM Inhalt) Koordinaten.
- {{domxref("MouseEvent.ctrlKey")}} {{readonlyinline}}
  - : Gibt `true` zurück, wenn die <kbd>control</kbd> Taste gedrückt war, während das MouseEvent ausgelöst wurde.
- {{domxref("MouseEvent.metaKey")}} {{readonlyinline}}
  - : Gibt `true` zurück, wenn die <kbd>meta</kbd> Taste gedrückt war, während das MouseEvent ausgelöst wurde.
- {{domxref("MouseEvent.movementX")}} {{readonlyinline}}
  - : Die x-Koordinate des Mauszeigers relativ zur Position des letzten {{event("mousemove")}} Events.
- {{domxref("MouseEvent.movementY")}} {{readonlyinline}}
  - : Die y-Koordinate des Mauszeigers relativ zur Position des letzten {{event("mousemove")}} Events.
- {{domxref("MouseEvent.offsetX")}} {{readonlyinline}}{{experimental_inline}}
  - : Die x-Koordinate des Mauszeigers relativ zur Position zur padding-Kante des Zielknotens.
- {{domxref("MouseEvent.offsetY")}} {{readonlyinline}}{{experimental_inline}}
  - : Die y-Koordinate des Mauszeigers relativ zur Position zur padding-Kante des Zielknotens.
- {{domxref("MouseEvent.pageX")}} {{readonlyinline}}{{experimental_inline}}
  - : Die x-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.pageY")}} {{readonlyinline}}{{experimental_inline}}
  - : Die y-Koordinate des Mauszeigers relativ zum gesamten Dokument.
- {{domxref("MouseEvent.region")}} {{readonlyinline}}
  - : Gibt die id des Trefferbereichs wieder, die von dem Event betroffen ist. Wenn kein Trefferbereich betroffen ist, wird `null` zurückgegeben.
- {{domxref("MouseEvent.relatedTarget")}} {{readonlyinline}}
  - : Das sekundäre Zielobjekt des Events, sofern verfügbar.
- {{domxref("MouseEvent.screenX")}} {{readonlyinline}}
  - : Die x-Koordinate des Mauszeigers in globalen (Bildschirm) Koordinaten.
- {{domxref("MouseEvent.screenY")}} {{readonlyinline}}
  - : Die y-Koordinate des Mauszeigers in globalen (Bildschirm) Koordinaten.
- {{domxref("MouseEvent.shiftKey")}} {{readonlyinline}}
  - : Gibt `true` zurück, wenn die <kbd>shift</kbd> Taste gedrückt war, während das MouseEvent ausgelöst wurde.
- {{domxref("MouseEvent.which")}} {{non-standard_inline}} {{readonlyinline}}
  - : Der Button, der gedrückt war, als das MouseEvent ausgelöst wurde.
- {{domxref("MouseEvent.mozPressure")}} {{non-standard_inline()}} {{readonlyinline}}
  - : Die Stärke des Drucks, die auf ein Touch- oder Tabletgerät ausgeübt wurde, während das Event ausgelöst wurde. Der Wert bewegt sich zwischen `0.0` (Minimalste Druckstärke) und `1.0` (Maximalster Druckstärke)
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{readonlyinline}}
  - : Der Typ des Geräts das den Event generiert hat (eine der `MOZ_SOURCE_*` Konstanten die weiter unten gelistet werden). Es ermöglicht zum Beispiel die Bestimmung ob ein MouseEvent tatsächlich von einer Maus oder von einem Touchgerät ausgelöst wurde (welches den Grad der Genauigkeit beeinflusst, mit dem man die Koordinaten des Events betrachten kann).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{readonlyinline}}
  - : Die Stärke des Drucks, die beim Klick angewendet wurde.
- {{domxref("MouseEvent.x")}} {{experimental_inline}}{{readonlyinline}}
  - : Alias auf {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{experimental_inline}}{{readonlyinline}}
  - : Alias auf {{domxref("MouseEvent.clientY")}}

## Konstanten

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : Minimum der Kraft, die für einen normalen Klick notwendig ist.
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}}{{readonlyinline}}
  - : Minimum der Kraft, die für einen Force-Click notwendig ist.

## Methoden

_Das Interface erbt auch die Methoden seiner Eltern, {{domxref("UIEvent")}} und {{domxref("Event")}}._

- {{domxref("MouseEvent.getModifierState()")}}
  - : Gibt den aktuellen Zustand der angegebenen Modifizierungstaste zurück. Für Detailinformationen siehe {{domxref("KeyboardEvent.getModifierState()")}}.
- {{domxref("MouseEvent.initMouseEvent()")}} {{deprecated_inline}}
  - : Initialisiert den Wert eines erzeugten `MouseEvent`. Wenn der Event bereits ausgesendet wurde, wird durch diese Methode nichts passieren.

## Beispiele

Dieses Beispiel demonstriert das Simulieren eines Klicks (die programmatische Erzeugung eines Klickereignisses) auf eine Checkbox mittels DOM Methoden.

```js
function simulateClick() {
  var evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window
  });
  var cb = document.getElementById("checkbox"); //element to click on
  var canceled = !cb.dispatchEvent(evt);
  if(canceled) {
    // A handler called preventDefault
    alert("canceled");
  } else {
    // None of the handlers called preventDefault
    alert("not canceled");
  }
}
document.getElementById("button").addEventListener('click', simulateClick);
```

```html
<p><label><input type="checkbox" id="checkbox"> Checked</label>
<p><button id="button">Click me</button>
```

Auf den Button klicken, um zu sehen wie das Beispiel funktioniert:

{{ EmbedLiveSample('Example', '', '', '') }}

## Spezifikationen

| Specification                                                                                                    | Status                           | Comment                                                                                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSSOM View','#extensions-to-the-mouseevent-interface', 'MouseEvent')}}     | {{Spec2('CSSOM View')}} | Redefines `MouseEvent` from long to double. This means that a `PointerEvent` whose `pointerType` is mouse will be a double.                                                                                         |
| {{SpecName("HTML WHATWG", "#dom-mouseevent-region", "MouseEvent.region")}}             | {{Spec2('HTML WHATWG')}} | From {{SpecName('DOM3 Events')}}, added the `region` property.                                                                                                                                             |
| {{SpecName('Pointer Lock','#extensions-to-the-mouseevent-interface','MouseEvent')}} | {{Spec2('Pointer Lock')}} | From {{SpecName('DOM3 Events')}}, added `movementX` and `movementY` properties.                                                                                                                            |
| {{SpecName('CSSOM View', '#extensions-to-the-mouseevent-interface', 'MouseEvent')}} | {{Spec2('CSSOM View')}} | From {{SpecName('DOM3 Events')}}, added `offsetX` and `offsetY`, `pageX` and `pageY`, `x,` and `y` properties. Redefined screen, page, client and coordinate (x and y) properties as `double` from `long`. |
| {{SpecName('DOM3 Events','#events-mouseevents','MouseEvent')}}                             | {{Spec2('DOM3 Events')}} | From {{SpecName('DOM2 Events')}}, added the `MouseEvent()` constructor, the `getModifierState()` method and the `buttons` property.                                                                        |
| {{SpecName('DOM2 Events','#Events-MouseEvent','MouseEvent')}}                                 | {{Spec2('DOM2 Events')}} | Initial definition.                                                                                                                                                                                                 |

## Browserkompatibilität

{{Compat}}

\[1] Setzt das Aktivieren von `ExperimentalCanvasFeatures` voraus.

## Siehe auch

- Das direkte Elternobjekt, {{domxref("UIEvent")}}.
