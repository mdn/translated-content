---
title: API Pointer Lock
slug: Web/API/Pointer_Lock_API
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{DefaultAPISidebar("Pointer Lock API")}}

**Pointer Lock** (antes llamado Bloqueo del _Mouse_) proporciona métodos de entrada basados en el movimiento del ratón a lo largo del tiempo (conocido como deltas), no sólo en la posición absoluta del cursor del _mouse_ en la ventana gráfica. Te da acceso al movimiento puro del _mouse_, bloquea el objetivo de los eventos del _mouse_ en un único elemento, elimina los límites sobre la distancia que puede alcanzar el movimiento del _mouse_ en una única dirección y elimina el cursor de la vista. Es ideal para juegos 3D en primera persona, por ejemplo.

Además, la API es útil para cualquier aplicación que requiera una entrada significativa del _mouse_ para controlar movimientos, rotar objetos y cambiar entradas. Por ejemplo, permite a los usuarios controlar el ángulo de visión moviendo el _mouse_ sin necesidad de pulsar ningún botón. Así, los botones quedan libres para otras acciones. Otros ejemplos son las aplicaciones para ver mapas o imágenes por satélite.

**Pointer Lock** te permite acceder a los eventos del ratón incluso cuando el cursor sobrepasa los límites del navegador o de la pantalla. Por ejemplo, sus usuarios pueden seguir rotando o manipulando un modelo 3D moviendo el _mouse_ sin fin. Sin **Pointer Lock**, la rotación o manipulación se detiene en el momento en que el puntero alcanza el borde del navegador o la pantalla. Ahora, los jugadores pueden hacer clic en los botones y desplazar el cursor del _mouse_ de un lado a otro sin preocuparse de abandonar el área de juego y hacer clic accidentalmente en otra aplicación que les quitaría el foco del ratón.

## Conceptos básicos

**Pointer Lock** está relacionado con [mouse capture](/es/docs/Web/API/Element/setCapture). _Mouse capture_ proporciona una entrega continua de eventos a un elemento de destino mientras se arrastra el _mouse_, pero se detiene cuando se suelta el botón del _mouse_. **Pointer Lock** se diferencia de la captura de _mouse_ en lo siguiente:

- Es persistente: **Pointer Lock** no libera el _mouse_ hasta que se realiza una llamada explícita a la API o el usuario utiliza un gesto de liberación específico.
- No está limitado por los límites del navegador o de la pantalla.
- Continúa enviando eventos independientemente del estado del botón del _mouse_.
- Oculta el cursor.

## Descripción de métodos/propiedades

Esta sección proporciona una breve descripción de cada propiedad y método relacionado con la especificación de bloqueo de puntero.

### requestPointerLock()

La API **Pointer Lock**, similar a la [Fullscreen API](/es/docs/Web/API/Fullscreen_API), amplía los elementos DOM añadiendo un nuevo método, {{domxref("Element.requestPointerLock", "requestPointerLock()")}}. El siguiente ejemplo solicita el bloqueo de puntero en un elemento {{htmlelement("canvas")}}:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock();
});
```

> **Nota:** Si un usuario ha salido del bloqueo de puntero mediante el [default unlock gesture](https://w3c.github.io/pointerlock/#dfn-default-unlock-gesture), o el bloqueo de puntero no ha sido introducido previamente para este documento, un evento generado como resultado de un [gesto de compromiso](https://w3c.github.io/pointerlock/#dfn-engagement-gesture) debe ser recibido por el documento antes de que [`requestPointerLock`](https://w3c.github.io/pointerlock/#dom-element-requestpointerlock) tenga éxito. (de <https://w3c.github.io/pointerlock/#extensions-to-the-element-interface>)

Los sistemas operativos activan la aceleración del ratón por defecto, lo que resulta útil cuando a veces se desea un movimiento lento y preciso (piensa en que podrías utilizar un paquete de gráficos), pero también quieres mover grandes distancias con un movimiento más rápido del ratón (piensa en el desplazamiento y la selección de varios archivos). Sin embargo, para algunos juegos de perspectiva en primera persona, se prefieren los datos de entrada brutos del ratón para controlar la rotación de la cámara, donde el mismo movimiento de distancia, rápido o lento, da como resultado la misma rotación. Según los jugadores profesionales, esto mejora la experiencia de juego y aumenta la precisión.

Para desactivar la aceleración del ratón a nivel de sistema operativo y acceder a la entrada sin procesar del ratón, puedes establecer `unadjustedMovement` a `true`:

```js
canvas.addEventListener("click", async () => {
  await canvas.requestPointerLock({
    unadjustedMovement: true,
  });
});
```

## Gestión de las versiones con y sin promesa de requestPointerLock()

El fragmento de código anterior seguirá funcionando en navegadores que no soporten la versión basada en promesas de `requestPointerLock()` o la opción `unadjustedMovement` — el operador [`await`](/es/docs/Web/JavaScript/Reference/Operators/await) está permitido delante de una función que no devuelva una promesa, y el objeto options simplemente será ignorado en los navegadores que no lo soporten.

Sin embargo, esto podría ser confuso, y tiene otros posibles efectos secundarios (por ejemplo, tratar de utilizar `requestPointerLock().then()` arrojaría un error en los navegadores que no lo soportan), por lo que es posible que desee manejar esto explícitamente utilizando código en las siguientes líneas:

```js
function requestPointerLockWithUnadjustedMovement() {
  const promise = myTargetElement.requestPointerLock({
    unadjustedMovement: true,
  });

  if (!promise) {
    console.log("no se admite la desactivación de la aceleración del mouse");
    return;
  }

  return promise
    .then(() => console.log("el puntero está bloqueado"))
    .catch((error) => {
      if (error.name === "NotSupportedError") {
        // Es posible que algunas plataformas no admitan el movimiento no ajustado.
        // Puede solicitar de nuevo un bloqueo de puntero normal.
        return myTargetElement.requestPointerLock();
      }
    });
}
```

### pointerLockElement y exitPointerLock()

La API de bloqueo de puntero también amplía la interfaz {{domxref("Document")}}, añadiendo una nueva propiedad y un nuevo método:

- {{domxref("Document.pointerLockElement","pointerLockElement")}} se utiliza para acceder al elemento bloqueado actualmente (si existe).
- {{domxref("Document.exitPointerLock","exitPointerLock()")}} se utiliza para salir del bloqueo del puntero.

La propiedad {{domxref("Document.pointerLockElement", "pointerLockElement")}} es útil para determinar si algún elemento está actualmente bloqueado por puntero (por ejemplo, para hacer una comprobación booleana) y también para obtener una referencia al elemento bloqueado, si existe.

He aquí un ejemplo de utilización de `pointerLockElement`:

```js
if (document.pointerLockElement === canvas) {
  console.log("El estado de bloqueo del puntero ahora está bloqueado");
} else {
  console.log("El estado de bloqueo del puntero ahora está desbloqueado");
}
```

El método {{domxref("Document.exitPointerLock()")}} se utiliza para salir del bloqueo de puntero, y al igual que {{domxref("Element.requestPointerLock", "requestPointerLock")}}, funciona de forma asíncrona utilizando los eventos {{domxref("Document/pointerlockchange_event", "pointerlockchange")}} y {{domxref("Document/pointerlockerror_event", "pointerlockerror")}}, de los que se hablará más adelante.

```js
document.exitPointerLock();
```

## Evento pointerlockchange

Cuando cambia el estado de bloqueo del puntero —por ejemplo, al llamar a {{domxref("Element.requestPointerLock", "requestPointerLock()")}} o {{domxref("Document.exitPointerLock", "exitPointerLock()")}}, al pulsar el usuario la tecla ESC, etc.— se envía al `document` el evento {{domxref("Document/pointerlockchange_event", "pointerlockchange")}}. Se trata de un evento simple que no contiene datos adicionales.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);

function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("El estado de bloqueo del puntero ahora está bloqueado");
    // Haz algo útil como respuesta
  } else {
    console.log("El estado de bloqueo del puntero ahora está desbloqueado");
    // Haz algo útil como respuesta
  }
}
```

## Evento pointerlockerror

Cuando se produce un error al llamar a {{domxref("Element.requestPointerLock", "requestPointerLock()")}} o {{domxref("Document.exitPointerLock", "exitPointerLock()")}}, se envía el evento {{domxref("Document/pointerlockerror_event", "pointerlockerror")}} al `document`. Se trata de un evento simple que no contiene datos adicionales.

```js
document.addEventListener("pointerlockerror", lockError, false);

function lockError(e) {
  alert("El bloqueo del puntero falló");
}
```

## Extensiones a eventos de ratón

La API de bloqueo de puntero amplía la interfaz normal {{domxref("MouseEvent")}} con atributos de movimiento. Dos nuevos atributos para eventos de ratón —{{domxref("MouseEvent.movementX", "movementX")}} y {{domxref("MouseEvent.movementY", "movementY")}}— proporcionan el cambio en las posiciones del ratón. Los valores de los parámetros son los mismos que la diferencia entre los valores de las propiedades {{domxref("MouseEvent")}}, {{domxref("MouseEvent.screenX", "screenX")}} y {{domxref("MouseEvent.screenY", "screenY")}}, que se almacenan en dos eventos posteriores {{domxref("Element/mousemove_event", "mousemove")}}, `eNow` y `ePrevious`. En otras palabras, el parámetro de bloqueo del puntero `movementX = eNow.screenX - ePrevious.screenX`.

### Estado de bloqueo

Cuando el bloqueo de puntero está activado, las propiedades {{domxref("MouseEvent")}} estándar {{domxref("MouseEvent.clientX", "clientX")}}, {{domxref("MouseEvent.clientY", "clientY")}}, {{domxref("MouseEvent.screenX", "screenX")}} y {{domxref("MouseEvent.screenY", "screenY")}} se mantienen constantes, como si el ratón no se moviera. Las propiedades {{domxref("MouseEvent.movementX", "movementX")}} y {{domxref("MouseEvent.movementY", "movementY")}} siguen proporcionando el cambio de posición del ratón. No hay límite para los valores {{domxref("MouseEvent.movementX", "movementX")}} y {{domxref("MouseEvent.movementY", "movementY")}} si el ratón se mueve continuamente en una única dirección. El concepto de cursor del ratón no existe y el cursor no puede moverse fuera de la ventana ni ser sujetado por un borde de la pantalla.

### Estado desbloqueado

Los parámetros {{domxref("MouseEvent.movementX", "movementX")}} y {{domxref("MouseEvent.movementY", "movementY")}} son válidos independientemente del estado de bloqueo del ratón, y están disponibles incluso cuando está desbloqueado para mayor comodidad.

Cuando el ratón está desbloqueado, el cursor del sistema puede salir y volver a entrar en la ventana del navegador. Si eso ocurre, {{domxref("MouseEvent.movementX", "movementX")}} y {{domxref("MouseEvent.movementY", "movementY")}} podrían ponerse a cero.

## Ejemplo sencillo de recorrido

Hemos escrito una [demo de bloqueo de puntero](https://mdn.github.io/dom-examples/pointer-lock/) ([ver código fuente](https://github.com/mdn/dom-examples/tree/main/pointer-lock)) para mostrarle cómo utilizarlo para configurar un sistema de control sencillo. Esta demo utiliza JavaScript para dibujar una bola encima de un elemento {{ htmlelement("canvas") }}. Al hacer clic en el lienzo, se utiliza el bloqueo del puntero para eliminar el puntero del ratón y permitirle mover la bola directamente con el ratón. Veamos cómo funciona esto.

Establecemos las posiciones iniciales x e y en el lienzo:

```js
let x = 50;
let y = 50;
```

A continuación configuramos un detector de eventos para que ejecute el método `requestPointerLock()` en el lienzo cuando se haga clic sobre él, lo que iniciará el bloqueo del puntero. La comprobación de `document.pointerLockElement` es para ver si ya hay un bloqueo de puntero activo - no queremos seguir llamando a `requestPointerLock()` en el lienzo cada vez que hacemos clic dentro de él si ya tenemos un bloqueo de puntero.

```js
canvas.addEventListener("click", async () => {
  if (!document.pointerLockElement) {
    await canvas.requestPointerLock({
      unadjustedMovement: true,
    });
  }
});
```

> **Nota:** El fragmento anterior funciona en navegadores que no soportan la versión promise de `requestPointerLock()`. Ver [Manejo de versiones promise y no-promise de requestPointerLock()](#handling_promise_and_non-promise_versions_of_requestpointerlock) para una explicación.

Ahora vamos a detectar el evento de bloqueo de puntero: `pointerlockchange`. Cuando esto ocurre, ejecutamos una función llamada `lockChangeAlert()` para manejar el cambio.

```js
document.addEventListener("pointerlockchange", lockChangeAlert, false);
```

Esta función comprueba la propiedad `pointerLockElement` para ver si es nuestro canvas. Si es así, adjunta un listener de eventos para manejar los movimientos del ratón con la función `updatePosition()`. Si no es así, elimina el listener de nuevo.

```js
function lockChangeAlert() {
  if (document.pointerLockElement === canvas) {
    console.log("El estado de bloqueo del puntero ahora está bloqueado");
    document.addEventListener("mousemove", updatePosition, false);
  } else {
    console.log("El estado de bloqueo del puntero ahora está desbloqueado");
    document.removeEventListener("mousemove", updatePosition, false);
  }
}
```

La función `updatePosition()` actualiza la posición de la bola en el lienzo (`x` e `y`), y también incluye sentencias `if ()` para comprobar si la bola se ha salido de los bordes del lienzo. Si es así, hace que la bola se desplace hasta el borde opuesto. También incluye una comprobación de si se ha hecho previamente una llamada a [`requestAnimationFrame()`](/es/docs/Web/API/window/requestAnimationFrame), y si es así, la llama de nuevo si es necesario, y llama a la función `canvasDraw()` que actualiza la escena del lienzo. También se configura un rastreador para escribir los valores X e Y en la pantalla, como referencia.

```js
const tracker = document.getElementById("tracker");

let animation;
function updatePosition(e) {
  x += e.movementX;
  y += e.movementY;
  if (x > canvas.width + RADIUS) {
    x = -RADIUS;
  }
  if (y > canvas.height + RADIUS) {
    y = -RADIUS;
  }
  if (x < -RADIUS) {
    x = canvas.width + RADIUS;
  }
  if (y < -RADIUS) {
    y = canvas.height + RADIUS;
  }
  tracker.textContent = `X position: ${x}, Y position: ${y}`;

  if (!animation) {
    animation = requestAnimationFrame(() => {
      animation = null;
      canvasDraw();
    });
  }
}
```

La función `canvasDraw()` dibuja la bola en las posiciones `x` e `y` actuales:

```js
function canvasDraw() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#f00";
  ctx.beginPath();
  ctx.arc(x, y, RADIUS, 0, degToRad(360), true);
  ctx.fill();
}
```

## Limitaciones de IFrame

**Pointer Lock** sólo puede bloquear un {{htmlelement("iframe")}} a la vez. Si bloqueas un `<iframe>`, no puedes bloquear otro y transferirle el objetivo; el bloqueo de puntero dará error. Para evitar esta limitación, desbloquea primero el `<iframe>` bloqueado, y luego bloquea el otro.

Mientras que `<iframe>` funciona por defecto, los `<iframe>` "aislados" bloquean el bloqueo de puntero. Para evitar esta limitación, utilice `<iframe sandbox="allow-pointer-lock">`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{domxref("MouseEvent")}}
- {{domxref("Element.requestPointerLock()")}}
