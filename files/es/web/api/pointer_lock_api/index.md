---
title: API Pointer Lock
slug: Web/API/Pointer_Lock_API
original_slug: WebAPI/Pointer_Lock
---

**Pointer Lock** (antes llamado Bloqueo del _Mouse_) proporciona métodos de entrada basados en el movimiento del ratón a traves del tiempo (es decir, deltas), no sólo la posición absoluta del cursor del _mouse_. Te da acceso al movimiento puro del _mouse_, bloquea el objetivo de los eventos del _mouse_ a un solo elemento, elimina límites en cuanto a que tan lejos puedes mover el _mouse_ en una sola dirección, y quita el cursor de la vista.

Esta API es útil para aplicaciones que requieren bastantes acciones para controlar los movimientos del _mouse_, rotar objetos y cambiar las entradas. Es especialmente importante para aplicaciones altamente visuales, tales como los que utilizan la perspectiva en primera persona, así como vistas en 3D y modelado.

Por ejemplo, puedes crear aplicaciones que permiten a los usuarios controlar el ángulo de visión con sólo mover el _mouse_ sin ningún clic, permitiendo liberar los clics para otras acciones. Este tipo de entrada del _mouse_ es muy útil para ver mapas, imágenes de satélite, o escenas en primera persona (como en un juego o un vídeo embebido).

**Pointer Lock** te permite acceder a los eventos del _mouse_ incluso cuando el cursor pasa por el límite de la pantalla del navegador. Por ejemplo, los usuarios pueden seguir girando o manipular un modelo 3D moviendo el _mouse_ sin fin. Sin **Pointer Lock**, la rotación o la manipulación se detiene en el momento en que el cursor alcanza el borde de la pantalla del navegador. Los jugadores se verán particularmente encantados con esta característica, ya que anciosamente pueden hacer clic en los botones y arrastrar el cursor del _mouse_ de un lado a otro sin tener que preocuparse por salir de la zona de juego ni de cliquear accidentalmente otra aplicación que podría llevar al _mouse_ fuera del juego. Una tragedia!

## Conceptos Básicos

**Pointer Lock** está relacionado con la _mouse capture_. _mouse capture_ proporciona la entrega continua de eventos a un elemento de destino, mientras que el _mouse_ se arrastra, pero se detiene cuando se suelta el clic. **Pointer Lock** es diferente de _mouse capture_ en las siguientes maneras:

- Es persistente. **Pointer Lock** no libera el _mouse_ hasta que se haga una llamada explícita a la API o el usuario utilize un gesto concreto de lanzamiento.
- No está limitado por los limites del navegador o la pantalla.
- Envia continuamente eventos independientemente del estado del clic del _mouse_.
- Oculta el cursor.

## Ejemplo

El siguiente es un ejemplo de cómo se puede configurar **Pointer Lock** en su página web.

```js
<button onclick="lockPointer();">Lock it!</button>
<div id="pointer-lock-element"></div>
<script>
// Nota: Al momento de escribir esto, sólo Mozilla y WebKit apoyan Pointer Lock.

// El elemento que servirá para pantalla completa y pointer lock.
var elem;

document.addEventListener("mousemove", function(e) {
  var movementX = e.movementX       ||
                  e.mozMovementX    ||
                  e.webkitMovementX ||
                  0,
      movementY = e.movementY       ||
                  e.mozMovementY    ||
                  e.webkitMovementY ||
                  0;

  // Imprime los valores delta del movimiento del mouse
  console.log("movementX=" + movementX, "movementY=" + movementY);
}, false);

function fullscreenChange() {
  if (document.webkitFullscreenElement === elem ||
      document.mozFullscreenElement === elem ||
      document.mozFullScreenElement === elem) { // Older API upper case 'S'.
    // El elemento esta en pantalla completa, ahora podemos hacer el request de pointer lock
    elem.requestPointerLock = elem.requestPointerLock    ||
                              elem.mozRequestPointerLock ||
                              elem.webkitRequestPointerLock;
    elem.requestPointerLock();
  }
}

document.addEventListener('fullscreenchange', fullscreenChange, false);
document.addEventListener('mozfullscreenchange', fullscreenChange, false);
document.addEventListener('webkitfullscreenchange', fullscreenChange, false);

function pointerLockChange() {
  if (document.mozPointerLockElement === elem ||
      document.webkitPointerLockElement === elem) {
    console.log("Pointer Lock was successful.");
  } else {
    console.log("Pointer Lock was lost.");
  }
}

document.addEventListener('pointerlockchange', pointerLockChange, false);
document.addEventListener('mozpointerlockchange', pointerLockChange, false);
document.addEventListener('webkitpointerlockchange', pointerLockChange, false);

function pointerLockError() {
  console.log("Error while locking pointer.");
}

document.addEventListener('pointerlockerror', pointerLockError, false);
document.addEventListener('mozpointerlockerror', pointerLockError, false);
document.addEventListener('webkitpointerlockerror', pointerLockError, false);

function lockPointer() {
  elem = document.getElementById("pointer-lock-element");
  // Start by going fullscreen with the element.  Current implementations
  // require the element to be in fullscreen before requesting pointer
  // lock--something that will likely change in the future.
  elem.requestFullscreen = elem.requestFullscreen    ||
                           elem.mozRequestFullscreen ||
                           elem.mozRequestFullScreen || // Older API upper case 'S'.
                           elem.webkitRequestFullscreen;
  elem.requestFullscreen();
}
</script>
```

## Propiedades/Métodos

La API de bloque de puntero ,similar a la API de Fullscreen,extiende del elemento DOM agregando un nuevo método, `requestPointerLock`, la cual es dependiente del vendedor(del navegador). Puede escribirse como:

```idl
element.webkitRequestPointerLock(); // para Chrome

element.mozRequestPointerLock(); // para Firefox
```

Current implementations of `requestPointerLock` are tightly bound to `requestFullScreen` and the Fullscreen API. Before an element can be pointer locked, it must first enter the fullscreen state. As demonstrated above, the process of locking the pointer is asynchronous, with events (`pointerlockchange`, `pointerlockerror`) indicating the success or failure of the request. This matches how the Fullscreen API works, with its `requestFullScreen` method and `fullscreenchange` and `fullscreenerror` events.

The Pointer lock API also extends the `document` interface, adding both a new property and a new method. The new property is used for accessing the currently locked element (if any), and is named `pointerLockElement`, which is vendor-prefixed for now. The new method on `document` is `exitPointerLock` and, as the name implies, it is used to exit Pointer lock.

The `pointerLockElement` property is useful for determining if any element is currently pointer locked (e.g., for doing a boolean check) and also for obtaining a reference to the locked element, if any. Here is an example of both uses:

```idl
document.pointerLockElement = document.pointerLockElement    ||
                              document.mozPointerLockElement ||
                              document.webkitPointerLockElement;

// 1) Used as a boolean check--are we pointer locked?
if (!!document.pointerLockElement) {
  // pointer is locked
} else {
  // pointer is not locked
}

// 2) Used to access the pointer locked element
if (document.pointerLockElement === someElement) {
  // someElement is currently pointer locked
}
```

The `document`'s `exitPointerLock` method is used to exit pointer lock, and like requestPointerLock, works asynchrounously using the `pointerlockchange` and `pointerlockerror` events:

```idl
document.exitPointerLock = document.exitPointerLock    ||
                           document.mozExitPointerLock ||
                           document.webkitExitPointerLock;

function pointerLockChange() {
  document.pointerLockElement = document.pointerLockElement    ||
                                document.mozPointerLockElement ||
                                document.webkitPointerLockElement;

  if (!!document.pointerLockElement) {
    console.log("Still locked.");
  } else {
    console.log("Exited lock.");
  }
}

document.addEventListener('pointerlockchange', pointerLockChange, false);
document.addEventListener('mozpointerlockchange', pointerLockChange, false);
document.addEventListener('webkitpointerlockchange', pointerLockChange, false);

// Attempt to unlock
document.exitPointerLock();
```

## pointerlockchange event

When the Pointer lock state changes—for example, when calling `requestPointerLock`, `exitPointerLock`, the user pressing the ESC key, etc.—the `pointerlockchange` event is dispatched to the `document`. This is a simple event and contains no extra data.

> **Nota:** This event is currently prefixed as `mozpointerlockchange` in Firefox and `webkitpointerlockchange` in Chrome.

## pointerlockerror event

When there is an error caused by calling `requestPointerLock` or `exitPointerLock`, the `pointerlockerror` event is dispatched to the `document`. This is a simple event and contains no extra data.

> **Nota:** This event is currently prefixed as `mozpointerlockerror` in Firefox and `webkitpointerlockerror` in Chrome.

## Extensions to mouse events

The Pointer lock API extends the normal `MouseEvent` with movement attributes.

```idl
partial interface MouseEvent {
    readonly attribute long movementX;
    readonly attribute long movementY;
};
```

> **Nota:** The movement attributes are currently prefixed as `.mozMovementX` and `.mozMovementY` in Firefox, and`.webkitMovementX` and `.webkitMovementY` in Chrome.

Two new parameters to mouse events—`movementX` and `movementY`—provide the change in mouse positions. The values of the parameters are the same as the difference between the values of [`MouseEvent`](/en/DOM/MouseEvent) properties, `screenX` and `screenY`, which are stored in two subsequent `mousemove` events, `eNow` and `ePrevious`. In other words, the Pointer lock parameter `movementX = eNow.screenX - ePrevious.screenX`.

### Locked state

When Pointer lock is enabled, the standard `MouseEvent` properties `clientX`, `clientY`, `screenX`, and `screenY` are held constant, as if the mouse is not moving. The `movementX` and `movementY` properties continue to provide the mouse's change in position. There is no limit to `movementX` and `movementY` values if the mouse is continuously moving in a single direction. The concept of the mouse cursor does not exist and the cursor cannot move off the window or be clamped by a screen edge.

### Unlocked state

The parameters `movementX` and `movementY` are valid regardless of the mouse lock state, and are available even when unlocked for convenience.

When the mouse is unlocked, the system cursor can exit and re-enter the browser window. If that happens, `movementX` and `movementY` could be set to zero.

## iframe limitations

Pointer lock can only lock one iframe at a time. If you lock one iframe, you cannot try to lock another iframe and transfer the target to it; Pointer lock will error out. To avoid this limitation, first unlock the locked iframe, and then lock the other.

While iframes work by default, "sandboxed" iframes block Pointer lock. The ability to avoid this limitation, in the form of the attribute/value combination `<iframe sandbox="allow-pointer-lock">`, is expected to appear in Chrome soon.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## See also

[MouseEvent](/en/DOM/MouseEvent)
