---
title: MouseEvent
slug: Web/API/MouseEvent
l10n:
  sourceCommit: 757f33efcbdf2de4995920e41ab7dd20f0a9192b
---

{{APIRef("UI Events")}}

La interfaz **`MouseEvent`** representa eventos que ocurren debido a que el usuario interactúa con un dispositivo señalador (como un mouse).
Los eventos comunes que usan esta interfaz incluyen {{domxref("Element/click_event", "click")}}, {{domxref("Element/dblclick_event", "dblclick")}}, {{domxref("Element/mouseup_event", "mouseup")}}, {{domxref("Element/mousedown_event", "mousedown")}}.

`MouseEvent` deriva de {{domxref("UIEvent")}}, que a su vez deriva de {{domxref("Event")}}.
Aunque el método {{domxref("MouseEvent.initMouseEvent()")}} se mantiene por compatibilidad con versiones anteriores, la creación de un objeto `MouseEvent` se debe realizar mediante el constructor {{domxref("MouseEvent.MouseEvent", "MouseEvent()" )}}.

Varios eventos más específicos se basan en `MouseEvent`, incluidos {{domxref("WheelEvent")}}, {{domxref("DragEvent")}} y {{domxref("PointerEvent")}}.

{{InheritanceDiagram}}

## Constructor

- {{domxref("MouseEvent.MouseEvent", "MouseEvent()")}}
  - : Crea un objeto `MouseEvent`.

## Propiedades estáticas

- {{domxref("MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Fuerza mínima necesaria para un clic normal.
- {{domxref("MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN")}} {{non-standard_inline}} {{ReadOnlyInline}}
  - : Fuerza mínima necesaria para un clic de fuerza.

## Propiedades de instancia

_Esta interfaz también hereda propiedades de sus padres, {{domxref("UIEvent")}} y {{domxref("Event")}}._

- {{domxref("MouseEvent.altKey")}} {{ReadOnlyInline}}
  - : Devuelve `true` si la tecla <kbd>alt</kbd> estaba presionada cuando se activó el evento del mouse.
- {{domxref("MouseEvent.button")}} {{ReadOnlyInline}}
  - : El número de botón que se presionó (si corresponde) cuando se activó el evento del mouse.
- {{domxref("MouseEvent.buttons")}} {{ReadOnlyInline}}
  - : Los botones que se presionaron (si los hay) cuando se activó el evento del mouse.
- {{domxref("MouseEvent.clientX")}} {{ReadOnlyInline}}
  - : La coordenada X del puntero del mouse en coordenadas locales (contenido DOM).
- {{domxref("MouseEvent.clientY")}} {{ReadOnlyInline}}
  - : La coordenada Y del puntero del mouse en coordenadas locales (contenido DOM).
- {{domxref("MouseEvent.ctrlKey")}} {{ReadOnlyInline}}
  - : Devuelve `true` si la tecla <kbd>control</kbd> estaba presionada cuando se activó el evento del mouse.
- {{domxref("MouseEvent.layerX")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Devuelve la coordenada horizontal del evento relativa a la capa actual.
- {{domxref("MouseEvent.layerY")}} {{Non-standard_inline}} {{ReadOnlyInline}}
  - : Devuelve la coordenada vertical del evento relativa a la capa actual.
- {{domxref("MouseEvent.metaKey")}} {{ReadOnlyInline}}
  - : Devuelve `true` si la tecla <kbd>meta</kbd> estaba presionada cuando se activó el evento del mouse.
- {{domxref("MouseEvent.movementX")}} {{ReadOnlyInline}}
  - : La coordenada X del puntero del mouse en relación con la posición del último evento {{domxref("Element/mousemove_event", "mousemove")}}.
- {{domxref("MouseEvent.movementY")}} {{ReadOnlyInline}}
  - : La coordenada Y del puntero del mouse en relación con la posición del último evento {{domxref("Element/mousemove_event", "mousemove")}}.
- {{domxref("MouseEvent.offsetX")}} {{ReadOnlyInline}}
  - : La coordenada X del puntero del mouse en relación con la posición del borde del relleno del nodo de destino.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : La coordenada Y del puntero del mouse en relación con la posición del borde del relleno del nodo de destino.
- {{domxref("MouseEvent.pageX")}} {{ReadOnlyInline}}
  - : La coordenada X del puntero del mouse en relación con todo el documento.
- {{domxref("MouseEvent.pageY")}} {{ReadOnlyInline}}
  - : La coordenada Y del puntero del mouse en relación con todo el documento.
- {{domxref("MouseEvent.relatedTarget")}} {{ReadOnlyInline}}
  - : El objetivo secundario del evento, si lo hay.
- {{domxref("MouseEvent.screenX")}} {{ReadOnlyInline}}
  - : La coordenada X del puntero del mouse en coordenadas globales (pantalla).
- {{domxref("MouseEvent.screenY")}} {{ReadOnlyInline}}
  - : La coordenada Y del puntero del mouse en coordenadas globales (pantalla).
- {{domxref("MouseEvent.shiftKey")}} {{ReadOnlyInline}}
  - : Devuelve `true` si la tecla <kbd>shift</kbd> estaba presionada cuando se activó el evento del mouse.
- {{domxref("MouseEvent.mozInputSource")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : El tipo de dispositivo que generó el evento (una de las constantes `MOZ_SOURCE_*`).
    Esto le permite, por ejemplo, determinar si un evento de mouse fue generado por un mouse real o por un evento táctil (lo que podría afectar el grado de precisión con el que interpreta las coordenadas asociadas con el evento).
- {{domxref("MouseEvent.webkitForce")}} {{non-standard_inline()}} {{ReadOnlyInline}}
  - : La cantidad de presión aplicada al hacer clic.
- {{domxref("MouseEvent.x")}} {{ReadOnlyInline}}
  - : Alias para {{domxref("MouseEvent.clientX")}}.
- {{domxref("MouseEvent.y")}} {{ReadOnlyInline}}
  - : Alias para {{domxref("MouseEvent.clientY")}}.

## Métodos de instancia

_Esta interfaz también hereda métodos de sus padres, {{domxref("UIEvent")}} y {{domxref("Event")}}._

- {{domxref("MouseEvent.getModifierState()")}}
  - : Devuelve el estado actual de la tecla modificadora especificada. Consulte {{domxref("KeyboardEvent.getModifierState", "KeyboardEvent.getModifierState()")}} para obtener más información.
- {{domxref("MouseEvent.initMouseEvent()")}} {{deprecated_inline}}
  - : Inicializa el valor de un `MouseEvent` creado. Si el evento ya se envió, este método no hace nada.

## Ejemplo

Este ejemplo demuestra la simulación de un clic (generando mediante programación un evento de clic) en una casilla de verificación usando métodos DOM.
El estado del evento (cancelado o no) se determina luego con el valor de retorno del método {{domxref("EventTarget.dispatchEvent", "EventTarget.dispatchEvent()")}}.

### HTML

```html
<p>
  <label><input type="checkbox" id="checkbox" /> Comprobado</label>
</p>
<p>
  <button id="button">
    Haga clic en mí para enviar un MouseEvent a la casilla de verificación
  </button>
</p>
```

### JavaScript

```js
function simulateClick() {
  // Obtener el elemento para enviar un evento de clic
  const cb = document.getElementById("checkbox");

  // Crear un MouseEvent de clic artificial
  let evt = new MouseEvent("click", {
    bubbles: true,
    cancelable: true,
    view: window,
  });

  // Enviar el evento al elemento de la casilla de verificación
  cb.dispatchEvent(evt);
}
document.getElementById("button").addEventListener("click", simulateClick);
```

### Resultado

{{EmbedLiveSample('Ejemplo')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- Su padre directo, {{domxref("UIEvent")}}
- {{domxref("PointerEvent")}}: Para eventos de puntero avanzados, incluido multitáctil
