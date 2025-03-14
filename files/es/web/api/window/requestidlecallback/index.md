---
title: requestIdleCallback
slug: Web/API/Window/requestIdleCallback
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

El método **`window.requestIdleCallback()`** encola la función que será ejecutada en periodos de inactividad del navegador permitiendo a los desarrolladores ejecutar en segundo plano tareas de baja prioridad del bucle de eventos, sin perjudicar la latencia de eventos principales como animaciones o respuestas a entradas. La funciones son ejecutadas normalmente en orden FIFO (primero en entrar primero en salir) salvo que se alcance el timeout definido de la función antes de que el navegador la ejecute.

## Sintaxis

```js
var handle = window.requestIdleCallback(callback[, options])
```

### Valor devuelto

Un entero largo sin signo (unsigned long integer) que puede utilizarse para cancelar el callback a través del método {{domxref("Window.cancelIdleCallback()")}}.

### Parámetros

- `callback`

  - : La referencia a la función que debe ser ejecutada en un futuro inmediato. La función callback toma un argumento con las siguientes propiedades:

    - `timeRemaining`: Referencia a un metodo que devuelve un {{domxref("DOMHighResTimeStamp")}}.
    - `didTimeout`: Booleano que se devuelve a false si el callback fue invocado por el navegador durante su inactividad, y true en otro caso (por ejemplo, si se definió timeout y expiró antes de que hubiera suficiente tiempo de inactividad).

- `options` {{optional_inline}}

  - : Contiene parametros opcionales de configuración. Contiene la siguiente propiedad:

    - `timeout`: Plazo para que el navegador ejecute la función callback. Valor en milisegundos.

## Ejemplos

Ver [ejemplo](/es/docs/Web/API/Background_Tasks_API#Example) en el artículo [Planificación Cooperativa de la API de Tareas en segundo plano](/es/docs/Web/API/Background_Tasks_API).

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vease también

- {{domxref("window.cancelIdleCallback()")}}
- {{domxref("IdleDeadline")}}
- {{domxref("window.setTimeout()")}}
- {{domxref("window.setInterval()")}}
- {{domxref("window.requestAnimationFrame")}}
