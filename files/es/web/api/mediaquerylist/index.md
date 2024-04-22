---
title: MediaQueryList
slug: Web/API/MediaQueryList
---

{{APIRef("CSSOM View")}}{{SeeCompatTable}}

Un objeto `MediaQueryList` almacena información en un [media query](/es/docs/Web/CSS/Media_Queries) aplicada a un documento y se encarga de enviar notificaciones a los oyentes cuando cambia el estado de consulta de medios (es decir, cuando la prueba de consulta de medios comienza o deja de evaluarse a `true`).

Esto hace posible observar un documento para detectar cuando sus consultas de medios cambian, en lugar de sondear los valores periódicamente y le permite programar cambios en un documento basado en el estado de consulta de medios.

## Propiedades

La nueva versión de la interfaz de `MediaQueryList` hereda las propiedades de su interfaz principal, {{domxref("EventTarget")}}.

- {{domxref("MediaQueryList.matches")}} {{readonlyInline}}
  - : Un {{domxref("Boolean")}} que devuelve `true` si el
    {{domxref("document")}} actualmente coincide con la lista de consultas de medios, o `false` si no.
- {{domxref("MediaQueryList.media")}} {{readonlyInline}}
  - : Un {{domxref("DOMString")}} representa una consulta de medios serializada.

### Controladores de eventos

- {{domxref("MediaQueryList.onchange")}}
  - : Una propiedad de controlador de eventos que representa una función que se invoca cuando se desencadena el evento [`change`](/es/docs/Web/Reference/Events/change), es decir, cuando cambia el estado del soporte de consulta de medios. El objeto de evento es una instancia {{domxref("MediaQueryListEvent")}}, que se reconoce como una instancia de `MediaListQuery` en navegadores antiguos, para propósitos de compatibilidad con versiones anteriores.

## Métodos

_La nueva versión de la interfaz de `MediaQueryList` hereda métodos de su interfaz principal, {{domxref("EventTarget")}}._

- {{domxref("MediaQueryList.addListener()")}}
  - : Agrega un escucha al `MediaQueryListener` que ejecutará una función de devolución de llamada personalizada en respuesta al cambio de estado de consulta de medios. Esto es básicamente un alias para {{domxref("EventTarget.addEventListener()")}}, para propósitos de compatibilidad con versiones anteriores.
- {{domxref("MediaQueryList.removeListener()")}}
  - : Elimina un escucha de `MediaQueryListener`. Esto es básicamente un alias para {{domxref ("EventTarget.removeEventListener ()")}}, para propósitos de compatibilidad con versiones anteriores.

<!---->

## Ejemplos

Este ejemplo sencillo crea una `MediaQueryList` y, a continuación, establece un detector para detectar cuándo cambia el estado de la consulta de medios, ejecutando una función personalizada cuando cambia la apariencia de la página.

```js
var para = document.querySelector("p");

var mql = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* el ventana tiene 600 píxeles de ancho o menos*/
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    /* la ventana tiene más de 600 píxeles de ancho */
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addListener(screenTest);
```

> **Nota:** Puedes encontrar este ejemplo en GitHub (ver el [codigo fuente](https://github.com/mdn/dom-examples/blob/master/mediaquerylist/index.html), y también verlo en [ejecución](https://mdn.github.io/dom-examples/mediaquerylist/index.html)).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Media queries](/es/docs/CSS/Media_queries)
- [Uso de media queries desde el código](/es/docs/CSS/Using_media_queries_from_code)
- {{domxref("window.matchMedia()")}}
- {{domxref("MediaQueryListListener")}}
- {{domxref("MediaQueryListEvent")}}
