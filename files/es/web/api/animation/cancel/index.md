---
title: Animation.cancel()
slug: Web/API/Animation/cancel
tags:
  - API
  - Animacion
  - Animaciones Web
  - Experimental
  - Reference
  - cancel
  - metodo
  - waapi
translation_of: Web/API/Animation/cancel
---
{{ SeeCompatTable() }}{{ APIRef("Web Animations") }}

El método **`cancel()`** de la Web Animations API de la interfaz {{domxref("Animation")}} borra todos los {{domxref("KeyframeEffect")}} causados por esta animación y aborta su reproducción.

> **Nota:** Cuando se cancela una animación, su {{domxref("Animation.startTime", "startTime")}} y su {{domxref("Animation.currentTime", "currentTime")}} se establecen en `null`.

## Sintaxis

    Animation.cancel();

### Parámetros

None.

### Valor devuelto

None.

### Excepciones

Este método no arroja excepciones directamente; sin embargo, si la animación {{domxref ("Animation.playState", "playState")}} no está `"idle"`"inactiva" cuando se cancela, el {{domxref ("Animation.finished", "current finished promise", "", 1)}} se rechaza con un {{domxref ("DOMException")}} llamado `AbortError`.

## Especificaciones

| Specification                                                                                            | Status                               | Comment         |
| -------------------------------------------------------------------------------------------------------- | ------------------------------------ | --------------- |
| {{SpecName('Web Animations', '#dom-animation-cancel', 'Animation.cancel()' )}} | {{Spec2('Web Animations')}} | Editor's draft. |

## Compatibilidad del navegador

{{Compat("api.Animation.cancel")}}

## Ver también

- [Web Animations API](/es/docs/Web/API/Web_Animations_API)
- {{domxref("KeyframeEffect")}}
- {{domxref("Animation")}}
- {{domxref("Animation.playState")}}
- {{domxref("Animation.finished")}} devuelve la promesa que esta acción rechazará si la animación de `playState` no está `"idle"` ("inactiva") .
