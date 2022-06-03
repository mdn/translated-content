---
title: Screen
slug: Web/API/Screen
translation_of: Web/API/Screen
browser-compat: api.Screen
---
{{APIRef("CSSOM")}}

La interfaz `Screen` representa una pantalla,
usualmente la misma donde la ventana actual está siendo visualizada y
es obtenida usando {{domxref("window.screen")}}.

Tenga en cuenta que los navegadores determinan cual es la pantalla actual
detectando qué pantalla tiene el navegador centrada.

## Propiedades

- {{DOMxRef("Screen.availTop")}} {{Non-standard_Inline}}
  - : Especifica la coordenada-y del primer píxel que no está asignado a funciones de interfaz de usuario permanentes o semipermanentes.
- {{DOMxRef("Screen.availLeft")}} {{Non-standard_Inline}}
  - : Devuelve el primer píxel disponible desde el border izquierdo de la pantalla.
- {{DOMxRef("Screen.availHeight")}}
  - : Especifica la altura de la pantalla, en píxeles, menos las funciones de interfaz de usuario permanentes o semipermanentes que son mostradas por el sistema operativo, como la barra de tareas de Windows.
- {{DOMxRef("Screen.availWidth")}}
  - : Devuelve la cantidad de espacio horizontal disponible en pixeles para la ventana.
- {{DOMxRef("Screen.colorDepth")}}
  - : Devuelve la profundidad de color de la pantalla.
- {{DOMxRef("Screen.height")}}
  - : Devuelve la altura de la pantalla en píxeles.
- {{DOMxRef("Screen.left")}} {{Non-standard_Inline}}
  - : Devuelve la distancia en píxeles desde el borde izquierdo de la pantalla principal al borde izquierdo de la pantalla actual.
- {{DOMxRef("Screen.orientation")}}
  - : Devuelve la instancia {{domxref("ScreenOrientation")}} asociada con la pantalla.
- {{DOMxRef("Screen.pixelDepth")}}
  - : Obtiene la profundidad de bits de la pantalla.
- {{DOMxRef("Screen.top")}} {{deprecated_inline}}{{Non-standard_Inline}}
  - : Devuelve la distancia en píxeles desde el borde supierior de la pantalla principal.
- {{DOMxRef("Screen.width")}}
  - : Devuelve la anchura de la pantalla.
- {{DOMxRef("Screen.mozEnabled")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Booleano. Estableciendo su valor a `false`, se apagaá la pantalla del dispositivo.
- {{DOMxRef("Screen.mozBrightness")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Controla el brillo de la pantalla del dispositivo. Espera un valor `double` entre `0` y `1.0`.

### Manejador de eventos

- {{DOMxRef("Screen.onorientationchange")}} {{Deprecated_Inline}}
  - : Un manejador para el evento {{event("orientationchange")}}.

## Métodos

- {{DOMxRef("Screen.lockOrientation")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Bloquea la orientación de la pantalla (sólo funciona en pantalla completa o para aplicaciones instaladas)
- {{DOMxRef("Screen.unlockOrientation")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Desbloquea la orientación de pantalla (sólo funciona en pantalla completa o para aplicaciones instaladas)

_Métodos heredados de {{domxref("EventTarget")}}:_

{{Page("/es/docs/Web/API/EventTarget", "Methods")}}

## Ejemplo

```js
if (screen.pixelDepth < 8) {
  // usa la versión color-bajo de la página
} else {
  // usa la versión regular, a todo color de la página
}
```

## Especificación

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
