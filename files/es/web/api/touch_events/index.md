---
title: Eventos de toque
slug: Web/API/Touch_events
---

Con el fin de proporcionar soporte de calidad para usuarios de interfaces táctiles, los eventos táctiles dan la posibilidad de interpretar la actividad de los dedos en pantallas táctiles o trackpads.

## Definiciones

- Superficie
  - : La superficie sensible al tacto. Esta puede ser una pantalla o un trackpad.

<!---->

- **Punto de toque**
  - : Un punto de contacto con la superficie. Esto podría ser un dedo (o un codo, oreja, nariz, o lo que sea, pero probablemente un dedo) o un stylus.

## Interfaces

- {{ domxref("TouchEvent") }}
  - : Representa un evento que ocurre cuando el estado de los toques en la superficie cambian.
- {{ domxref("Touch") }}
  - : Represeta un único punto de contacto entre el usuario y la superficie táctil.
- {{ domxref("TouchList") }}
  - : Representa varios puntos de toque: esto se utiliza cuando el usuario tiene, por ejemplo, varios dedos en la superficie al mismo tiempo.
- {{ domxref("DocumentTouch") }}
  - : Contiene varios métodos para crear objetos de {{domxref("Touch")}} y {{domxref("TouchList")}}.

## Ejemplo

Este ejemplo muestra múltiples puntos de toques al mismo tiempo, permitiendo al usuario dibujar en un {{ HTMLElement("canvas") }} con más de un dedo a la vez. Esto funciona solamente en un navegador que soporte eventos táctiles.

> **Nota:** El texto de abajo usa el término "dedo" cuando describe el contacto con la superficie, pero esto podría ser, por supuesto, también un _stylus_ u otro método de contacto.

### Configurando los eventos de manipulación

Cuando la página carga, la función `startup()` mostrada a continuación es llamada por nuestro atributo `onload` del elemento {{ HTMLElement("body") }}.

```js
function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchleave", handleLeave, false);
  el.addEventListener("touchmove", handleMove, false);
}
```

Esto simplemente configura todos los detectores de eventos para nuestro elemento {{ HTMLElement("canvas") }}, por lo que podremos manejar todos los eventos de toque cuando se produzcan.

### Seguimiento de nuevos toques

Cuando un evento `touchstart` ocurre, indicando que un nuevo toque sobre la superficie se ha producido, la función `handleStart()` de a continuación es llamada.

```js
function handleStart(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    ongoingTouches.push(touches[i]);
    var color = colorForTouch(touches[i]);
    ctx.fillStyle = color;
    ctx.fillRect(touches[i].pageX - 2, touches[i].pageY - 2, 4, 4);
  }
}
```

Esto llama a {{ domxref("event.preventDefault()") }} para mantener al navegador procesando el evento de toque (esto también previene que un evento del ratón o mouse sea entregado). Entonces obtenemos el contexto y lanzamos la lista de puntos de contacto cambiados de la propiedad {{ domxref("TouchEvent.changedTouches") }} del evento.

Después de ello, iteramos sobre todos los objetos {{ domxref("Touch") }} de la lista, insertándolo en una matriz de puntos de toque activos y dibujando el punto de inicio como un pequeño rectángulo; estamos usando una línea de 4 pixeles de ancho, por tanto estamos dibujando un cuadrado de 4 por 4 píxeles como punto de consistencia.

### Dibujando mientras los eventos de toque se mueven

Cada vez que uno o más dedos se mueven, un evento `touchmove` es entregado, resultando en una llamada a nuestra función `handleMove()`. Su responsabilidad en este ejemplo es actualizar la información de toque cacheada y dibujar una línea desde la posición previa a la posición actual en cada toque.

```js
function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  ctx.lineWidth = 4;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
    ctx.lineTo(touches[i].pageX, touches[i].pageY);
    ctx.closePath();
    ctx.stroke();
    ongoingTouches.splice(idx, 1, touches[i]); // swap in the new touch record
  }
}
```

Esto se repite también en los toques cambiados, pero mira en nuestra matriz de información de toques cacheados la información previa de cada toque con el fin de determinar los puntos de inicio para cada nuevo segmento de línea de toques que será dibujada. Esto se hace mirando cada propiedad de los toques de {{ domxref("Touch.identifier") }} . Esta propiedad es un único entero para cada toque, y sigue siendo consistente para cada evento durante la duración del contacto de cada dedo con la superficie.

Esto nos permite conseguir las coordenadas de la posición previa de cada toque y usar el método apropiado de contexto para dibujar un segmento de línea uniendo dos posiciones a la vez.

Después de dibujar la línea, llamamos a [`Array.splice()`](/en/JavaScript/Reference/Global_Objects/Array/splice) para reemplazar la información previa sobre el punto de toque con la información actual de la matriz `ongoingTouches`.

### Manejando el final de un toque

Cuando el usuario levanta un dedo de la superficie, un evento `touchend` es enviado. De igual manera, si el dedo se desliza fuera de nuestro lienzo, obtenemos un evento `touchleave`. Manejamos ambos casos de la misma manera: llamando a la función `handleEnd()` de abajo. Su trabajo es dibujar el último segmento de línea para cada toque que ha finalizado y remueve el punto de toque de la lista de toques en marcha.

```js
function handleEnd(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  ctx.lineWidth = 4;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(ongoingTouches[i].pageX, ongoingTouches[i].pageY);
    ctx.lineTo(touches[i].pageX, touches[i].pageY);
    ongoingTouches.splice(i, 1); // remove it; we're done
  }
}
```

Esto es muy similar a la función previa; la única diferencia real es que cuando llamamos a [`Array.splice()`](/en/JavaScript/Reference/Global_Objects/Array/splice), simplemente remueve la antigua entrada de la lista de toques en marcha, sin añadir la información actualizada. El resultado es que detenemos el seguimiento del punto de toque.

### Manejando los toques cancelados

Si el dedo del usuario se equivoca en la Interfaz del navegador, o el toque necesita ser cancelado, el evento `touchcancel` es enviado, y llamamos a la función `handleCancel()` abajo.

```js
function handleCancel(evt) {
  evt.preventDefault();
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    ongoingTouches.splice(i, 1); // remove it; we're done
  }
}
```

Dado que la idea es cancelar el toque inmediatamente, simplemente lo removemos de la lista de toques en marcha sin dibujar un segmento de línea final.

### Funciones de conveniencia

Este ejemplo usa dos funciones de convenience que deben mirarse brevemente para ayudar a que el resto del código sea más claro.

#### Seleccionando un color para cada toque

Con el fin de hacer que cada dibujo de toque se vea diferente, la función `colorForTouch()` es usada para elegir un color basado en el identificador único de toque. Este identificador estará siempre entre 0 y un valor menos que el número de toques activos. Puesto que es muy improbable que alguna persona con más de 16 dedos use este demo, convertimos estos directamente en colores de escalas grises.

```js
function colorForTouch(touch) {
  var id = touch.identifier;
  id = id.toString(16); // make it a hex digit
  return "#" + id + id + id;
}
```

El resultado de esta función es un string o cadena que puede ser usada cuando se llame a funciones {{ HTMLElement("canvas") }} para configurar los colores de dibujos. Por ejemplo, para un valor {{ domxref("Touch.identifier") }} de 10, el resultado string o cadena es "#aaa".

#### Encontrando un toque continuo

La función `ongoingTouchIndexById()` abajo explora mediante la matriz `ongoingTouches` para encontrar el toque que coincida con el identificador dado, luego devuelve los índices de toques a la matriz.

```js
function ongoingTouchIndexById(idToFind) {
  for (var i = 0; i < ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
      return i;
    }
  }
  return -1; // not found
}
```

[Ver ejemplo en vivo](/samples/domref/touchevents.html)

## Consejos adicionales

Esta sección provee consejos adicionales sobre como manejar los eventos de toques en tu aplicación web.

### Manejando los clics

Ya que la llamada `preventDefault()` en un `touchstart` o el primer evento `touchmove` de una serie impide que los eventos correspondientes eventos del mouse o ratón se disparen, es común llamar a `preventDefault()` en `touchmove` en lugar de `touchstart`. De esta manera, los eventos del ratón pueden todavía ser disparados y cosas como enlaces siguen funcionando. Alternativamente, algunos frameworks tienen que referirse a eventos de toque como eventos de ratón para este mismo propósito. (Este ejemplo es muy simplificado y podria resultar en un extraño comportamiento. Solo se diseñó como guía).

```js
function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;
  switch (event.type) {
    case "touchstart": type = "mousedown"; touch = event.changedTouches[[0];
    case "touchmove":  type = "mousemove"; touch = event.changedTouches[[0];
    case "touchend":   type = "mouseup"; touch = event.changedTouches[0];
  }
  newEvt.initMouseEvent(type, true, true, event.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shirtKey, evt.metaKey, 0, null);
  event.originalTarget.dispatchEvent(newEvt);
}
```

### Llamando a preventDefault() solo en un segundo toque

Una cosa para prevenir cosas como `pinchZoom` en una página es llamar a `preventDefault()` en el segundo toque de una serie. Este comportamiento no está bien definido en los eventos de toque, y resulta en diferentes comportamientos en diferentes navegadores (osea iOS evitará el zoom o acercamiento pero permitirá vista panorámica con ambos dedos. Android permitirá zoom o acercamiento pero no una panorámica. Opera and Firefox actualmente evita panorámica y zoom o acercamiento). Actualmente, no se recomienda depender de ningún comportamiento en particular en este caso, si no mas bien depender de una meta vista para evitar el zoom.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
