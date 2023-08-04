---
title: Pointer Lock API
slug: Web/API/Pointer_Lock_API
---

**Pointer lock** **API**(прежнее название Mouse Lock API) обеспечивает методы ввода, основанные на движении мыши , а не только абсолютно позиционированых координатах курсора в окне. Это даёт вам доступ к необработанным движениям мыши, прикрепляет курсор мыши к любому элементу в окне браузера, предоставляет возможность вычислять координаты мыши не ограниченной областью окна проекции, и скрывает курсор из поля зрения. Это идеальное решение для 3D игр, например.

Более того, API полезно для любых приложений, которые используют данные мыши для управления движениями, вращения объектов и изменения записей. Например пользователь может управлять наклоном просто двигая мышь, не нажимая ни на какие кнопки. Сами кнопки освобождаются под другие задачи. Примерами могут послужить программы для просмотра карт или спутниковой съёмки.

Блокировка указателя позволяет вам получить доступ к данным мыши, даже если курсор ушёл за границы экрана или браузера. Например, ваши пользователи могут продолжать вращать или управлять 3D моделью движением мыши бесконечно. Без блокировки вращение или управление останавливается, как только курсор достигает края браузера или экрана. Геймеры теперь могут нажимать кнопки и водить курсором взад и вперёд, не боясь покинуть игровое поле и случайно переключится на другое приложение.

## Основные концепции

Pointer lock is related to [mouse capture](/en/DOM/element.setCapture). Mouse capture provides continued delivery of events to a target element while a mouse is being dragged, but it stops when the mouse button is released. Pointer lock is different from mouse capture in the following ways:

- It is persistent: Pointer lock does not release the mouse until an explicit API call is made or the user uses a specific release gesture.
- It is not limited by browser or screen boundaries.
- It continues to send events regardless of mouse button state.
- It hides the cursor.

## Обзор методов/свойств

Этот раздел содержит краткое описание каждого свойства и метода, связанного со спецификацией блокировки указателя.

### requestPointerLock()

The Pointer lock API, similar to the [Fullscreen API](/ru/docs/Web/Guide/API/DOM/Using_full_screen_mode), extends DOM elements by adding a new method, {{domxref("Element.requestPointerLock","requestPointerLock")}}, which is vendor-prefixed for now. You would currently declare it something like this, for example if you wanted to request pointer lock on a `canvas` element.:

```js
canvas.requestPointerLock =
  canvas.requestPointerLock ||
  canvas.mozRequestPointerLock ||
  canvas.webkitRequestPointerLock;

canvas.requestPointerLock();
```

### pointerLockElement and exitPointerLock()

The Pointer lock API also extends the {{domxref("Document")}} interface, adding both a new property and a new method. The new property is used for accessing the currently locked element (if any), and is named {{domxref("Document.pointerLockElement","pointerLockElement")}}, which is vendor-prefixed for now. The new method on {{domxref("Document")}} is {{domxref("Document.exitPointerLock","exitPointerLock")}} and, as the name implies, it is used to exit Pointer lock.

The {{domxref("Document.pointerLockElement","pointerLockElement")}} property is useful for determining if any element is currently pointer locked (e.g., for doing a boolean check) and also for obtaining a reference to the locked element, if any.

Here is an example of using `pointerLockElement`:

```js
if (
  document.pointerLockElement === canvas ||
  document.mozPointerLockElement === canvas ||
  document.webkitPointerLockElement === canvas
) {
  console.log("The pointer lock status is now locked");
} else {
  console.log("The pointer lock status is now unlocked");
}
```

The {{domxref("Document.exitPointerLock")}} method is used to exit pointer lock, and like {{domxref("Element.requestPointerLock","requestPointerLock")}}, works asynchronously using the {{event("pointerlockchange")}} and {{event("pointerlockerror")}} events, which you'll see more about below.

```js
document.exitPointerLock =
  document.exitPointerLock ||
  document.mozExitPointerLock ||
  document.webkitExitPointerLock;

// Attempt to unlock
document.exitPointerLock();
```

## pointerlockchange event

When the Pointer lock state changes—for example, when calling {{domxref("Element.requestPointerLock","requestPointerLock")}}, {{domxref("Document.exitPointerLock","exitPointerLock")}}, the user pressing the ESC key, etc.—the {{event("pointerlockchange")}} event is dispatched to the `document`. This is a simple event and contains no extra data.

```js
if ("onpointerlockchange" in document) {
  document.addEventListener("pointerlockchange", lockChangeAlert, false);
} else if ("onmozpointerlockchange" in document) {
  document.addEventListener("mozpointerlockchange", lockChangeAlert, false);
} else if ("onwebkitpointerlockchange" in document) {
  document.addEventListener("webkitpointerlockchange", lockChangeAlert, false);
}

function lockChangeAlert() {
  if (
    document.pointerLockElement === canvas ||
    document.mozPointerLockElement === canvas ||
    document.webkitPointerLockElement === canvas
  ) {
    console.log("The pointer lock status is now locked");
    // Do something useful in response
  } else {
    console.log("The pointer lock status is now unlocked");
    // Do something useful in response
  }
}
```

## pointerlockerror event

When there is an error caused by calling {{domxref("Element.requestPointerLock","requestPointerLock")}} or {{domxref("Document.exitPointerLock","exitPointerLock")}}, the {{event("pointerlockerror")}} event is dispatched to the `document`. This is a simple event and contains no extra data.

```js
document.addEventListener("pointerlockerror", lockError, false);
document.addEventListener("mozpointerlockerror", lockError, false);
document.addEventListener("webkitpointerlockerror", lockError, false);

function lockError(e) {
  alert("Pointer lock failed");
}
```

> **Примечание:** The above events are currently prefixed with `moz` in Firefox and `webkit` in Chrome.

## Extensions to mouse events

The Pointer lock API extends the normal {{domxref("MouseEvent")}} interface with movement attributes.

```webidl
partial interface MouseEvent {
    readonly attribute long movementX;
    readonly attribute long movementY;
};
```

> **Примечание:** The movement attributes are currently prefixed as `.mozMovementX` and `.mozMovementY` in Firefox, and`.webkitMovementX` and `.webkitMovementY` in Chrome.

Two new parameters to mouse events—{{domxref("MouseEvent.movementX","movementX")}} and {{domxref("MouseEvent.movementY","movementY")}}—provide the change in mouse positions. The values of the parameters are the same as the difference between the values of {{domxref("MouseEvent")}} properties, {{domxref("MouseEvent.screenX","screenX")}} and {{domxref("MouseEvent.screenY","screenY")}}, which are stored in two subsequent {{event("mousemove")}} events, `eNow` and `ePrevious`. In other words, the Pointer lock parameter `movementX = eNow.screenX - ePrevious.screenX`.

### Locked state

When Pointer lock is enabled, the standard {{domxref("MouseEvent")}} properties {{domxref("MouseEvent.clientX","clientX")}}, {{domxref("MouseEvent.clientY","clientY")}}, {{domxref("MouseEvent.screenX","screenX")}}, and {{domxref("MouseEvent.screenY","screenY")}} are held constant, as if the mouse is not moving. The {{domxref("MouseEvent.movementX","movementX")}} and {{domxref("MouseEvent.movementY","movementY")}} properties continue to provide the mouse's change in position. There is no limit to {{domxref("MouseEvent.movementX","movementX")}} and {{domxref("MouseEvent.movementY","movementY")}} values if the mouse is continuously moving in a single direction. The concept of the mouse cursor does not exist and the cursor cannot move off the window or be clamped by a screen edge.

### Unlocked state

The parameters {{domxref("MouseEvent.movementX","movementX")}} and {{domxref("MouseEvent.movementY","movementY")}} are valid regardless of the mouse lock state, and are available even when unlocked for convenience.

When the mouse is unlocked, the system cursor can exit and re-enter the browser window. If that happens, {{domxref("MouseEvent.movementX","movementX")}} and {{domxref("MouseEvent.movementY","movementY")}} could be set to zero.

## Simple example walkthrough

We've written a [simple pointer lock demo](https://mdn.github.io/dom-examples/pointer-lock/) to show you how to use it to set up a simple control system ([see source code](https://github.com/mdn/dom-examples/tree/master/pointer-lock)). The demo looks like this:

![A red circle on top of a black background.](pointer-lock.png)

This demo uses JavaScript to draw a ball on top of an {{ htmlelement("canvas") }} element. When you click the canvas, pointer lock is then used to remove the mouse pointer and allow you to move the ball directly using the mouse. Let's see how this works.

Set initial x and y positions on the canvas:

```js
var x = 50;
var y = 50;
```

The `canvasDraw()` function draws the ball in the current x and y positions, but it also includes `if()` statements to check whether the ball has gone off the edges of the canvas. If so, it makes the ball wrap around to the opposite edge.

```js
function canvasDraw() {
  if (x > canvas.clientWidth + 20) {
    x = 0;
  }

  if (y > canvas.clientHeight + 20) {
    y = 0;
  }

  if (x < -20) {
    x = canvas.clientWidth;
  }

  if (y < -20) {
    y = canvas.clientHeight;
  }

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  ctx.fillStyle = "#f00";

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, degToRad(360), true);
  ctx.fill();
}
```

The pointer lock methods are currently prefixed, so next we'll fork them for the different browser implementations.

```js
canvas.requestPointerLock =
  canvas.requestPointerLock ||
  canvas.mozRequestPointerLock ||
  canvas.webkitRequestPointerLock;
// pointer lock object forking for cross browser

document.exitPointerLock =
  document.exitPointerLock ||
  document.mozExitPointerLock ||
  document.webkitExitPointerLock;
//document.exitPointerLock();
```

Now we set up an event listener to run the requestPointerLock() method on the canvas when it is clicked, which initiates pointer lock.

```js
canvas.onclick = function () {
  canvas.requestPointerLock();
};
```

Now for the dedicated pointer lock event listener: `pointerlockchange`. When this occurs, we run a function called `lockChangeAlert()` to handle the change.

```js
// pointer lock event listener

// Hook pointer lock state change events for different browsers
document.addEventListener("pointerlockchange", lockChangeAlert, false);
document.addEventListener("mozpointerlockchange", lockChangeAlert, false);
document.addEventListener("webkitpointerlockchange", lockChangeAlert, false);
```

This function checks the pointLockElement property to see if it is our canvas. If so, it attached an event listener to handle the mouse movements with the `canvasLoop()` function. If not, it removes the event listener again.

```js
function lockChangeAlert() {
  if (
    document.pointerLockElement === canvas ||
    document.mozPointerLockElement === canvas ||
    document.webkitPointerLockElement === canvas
  ) {
    console.log("The pointer lock status is now locked");
    document.addEventListener("mousemove", canvasLoop, false);
  } else {
    console.log("The pointer lock status is now unlocked");
    document.removeEventListener("mousemove", canvasLoop, false);
  }
}
```

A tracker is set up to write out the X and Y values to the screen, for reference.

```js
var tracker = document.createElement("p");
var body = document.querySelector("body");
body.appendChild(tracker);
tracker.style.position = "absolute";
tracker.style.top = "0";
tracker.style.right = "10px";
tracker.style.backgroundColor = "white";
```

The `canvasLoop()` function first forks the `movementX` and `movementY` properties, as they are also prefixed currently in some browsers. It then adds those property's values to x and y, and reruns `canvasDraw()` with those new values so the ball position is updated. Finally, we use `requestAnimationFrame()` to run the loop again and again.

```
function canvasLoop(e) {
  var movementX = e.movementX ||
      e.mozMovementX          ||
      e.webkitMovementX       ||
      0;

  var movementY = e.movementY ||
      e.mozMovementY      ||
      e.webkitMovementY   ||
      0;

  x += movementX;
  y += movementY;

  canvasDraw();

  var animation = requestAnimationFrame(canvasLoop);

  tracker.innerHTML = "X position: " + x + ', Y position: ' + y;
}
```

## iframe limitations

Pointer lock can only lock one iframe at a time. If you lock one iframe, you cannot try to lock another iframe and transfer the target to it; Pointer lock will error out. To avoid this limitation, first unlock the locked iframe, and then lock the other.

While iframes work by default, "sandboxed" iframes block Pointer lock. The ability to avoid this limitation, in the form of the attribute/value combination `<iframe sandbox="allow-pointer-lock">`, is expected to appear in Chrome soon.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("MouseEvent")}}
