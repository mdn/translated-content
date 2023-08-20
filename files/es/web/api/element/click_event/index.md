---
title: "Element: Evento click"
short-title: click
slug: Web/API/Element/click_event
l10n:
  sourceCommit: 757f33efcbdf2de4995920e41ab7dd20f0a9192b
---

{{APIRef}}

Un elemento recibe un evento **`click`** (clic) cuando se presiona y se suelta un botón del dispositivo señalador (como el botón principal del mouse) mientras el puntero se encuentra dentro del elemento.

Si se presiona el botón en un elemento y el puntero se mueve fuera del elemento antes de soltar el botón, el evento se activa en el elemento antecesor más específico que contenía ambos elementos.

`click` se activa después de que se hayan activado los eventos {{domxref("Element/mousedown_event", "mousedown")}} y {{domxref("Element/mouseup_event", "mouseup")}}, en ese orden.

## Sintaxis

Utilice el nombre del evento en métodos como {{domxref("EventTarget.addEventListener", "addEventListener()")}}, o establezca una propiedad de manejador de eventos.

```js
addEventListener("click", (event) => {});

onclick = (event) => {};
```

## Tipo de evento

Un {{domxref("MouseEvent")}}. Hereda de {{domxref("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Propiedades del evento

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
  - : La coordenada X del puntero del mouse en relación con la posición del borde de relleno del nodo de destino.
- {{domxref("MouseEvent.offsetY")}} {{ReadOnlyInline}}
  - : La coordenada Y del puntero del mouse en relación con la posición del borde de relleno del nodo de destino.
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

## Notas de uso

El objeto {{domxref("MouseEvent")}} pasado al manejador de eventos para `click` tiene su propiedad {{domxref("UIEvent/detail", "detail")}} establecida en el número de veces que se hizo clic en {{domxref ("Event.target", "target")}}. En otras palabras, `detail` será 2 para un doble clic, 3 para un triple clic, y así sucesivamente. Este contador se restablece después de un breve intervalo sin que se produzcan clics; los detalles de la duración de ese intervalo pueden variar de un navegador a otro y entre plataformas. También es probable que el intervalo se vea afectado por las preferencias del usuario; por ejemplo, las opciones de accesibilidad pueden ampliar este intervalo para facilitar la realización de varios clics con interfaces adaptables.

## Ejemplos

Este ejemplo muestra el número de clics consecutivos en un {{HtmlElement("button")}}.

### HTML

```html
<button>Clic</button>
```

### JavaScript

```js
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  button.textContent = `Recuento de clics: ${event.detail}`;
});
```

### Resultado

Intente hacer clics rápidos y repetidos en el botón para aumentar el número de clics. Si se toma un descanso entre clics, el conteo se restablecerá.

{{EmbedLiveSample("Ejemplos")}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Introducción a los eventos](/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- {{domxref("Element/auxclick_event", "auxclick")}}
- {{domxref("Element/contextmenu_event", "contextmenu")}}
- {{domxref("Element/dblclick_event", "dblclick")}}
- {{domxref("Element/mousedown_event", "mousedown")}}
- {{domxref("Element/mouseup_event", "mouseup")}}
- {{domxref("Element/pointerdown_event", "pointerdown")}}
- {{domxref("Element/pointerup_event", "pointerup")}}
