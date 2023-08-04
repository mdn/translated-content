---
title: 觸控事件
slug: Web/API/Touch_events
---

{{DefaultAPISidebar("Touch Events")}}

為了支援基於觸碰的使用者介面，觸控事件提供了解釋手指或觸控筆於觸控螢幕或觸控板上活動的資訊。

觸控事件介面為相對低階的 API，可用來支援應用程式特定的多點觸控互動，例如兩指手勢。多點觸控互動起始於手指或觸控筆於平面的第一個觸碰，其它的手指可能於其後伴隨著移動才觸碰到平面。而互動則結束於手指自觸控平面離開。在此互動期間，應用程式會於開始、移動以及結束的階段接收到觸控事件。

觸控事件類似於滑鼠事件，但觸控事件支援同時間多個觸碰及其於觸控平面的每個不同點位置。{{domxref("TouchEvent")}} 介面封裝了所有當前作用中的觸碰點。{{domxref("Touch")}} 介面則表示個別的觸碰點，包括了如觸碰點於瀏覽器 viewport 中的相對位置資訊。

## 定義

- 平面（Surface）
  - : The touch-sensitive surface. This may be a screen or trackpad.
- 觸碰點（Touch point）
  - : A point of contact with the surface. This may be a finger (or elbow, ear, nose, whatever, but typically a finger) or stylus.

## 介面

- {{domxref("TouchEvent")}}
  - : Represents an event that occurs when the state of touches on the surface changes.
- {{domxref("Touch")}}
  - : Represents a single point of contact between the user and the touch surface.
- {{domxref("TouchList")}}
  - : Represents a group of touches; this is used when the user has, for example, multiple fingers on the surface at the same time.

## 範例

This example tracks multiple touch points at a time, allowing the user to draw in a {{HTMLElement("canvas")}} with more than one finger at a time. It will only work on a browser that supports touch events.

> **備註：** The text below uses the term "finger" when describing the contact with the surface, but it could, of course, also be a stylus or other contact method.

### Create a canvas

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  Your browser does not support canvas element.
</canvas>
<br />
<button onclick="startup()">Initialize</button>
<br />
Log:
<pre id="log" style="border: 1px solid #ccc;"></pre>
```

### Setting up the event handlers

When the page loads, the `startup()` function shown below should be called by our {{HTMLElement("body")}} element's `onload` attribute (but in the example we use a button to trigger it, due to limitations of the MDN live example system).

```js
function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
  log("initialized.");
}
```

This simply sets up all the event listeners for our {{HTMLElement("canvas")}} element so we can handle the touch events as they occur.

#### Tracking new touches

We'll keep track of the touches in-progress.

```js
var ongoingTouches = [];
```

When a [`touchstart`](/zh-TW/docs/Web/API/Element/touchstart_event) event occurs, indicating that a new touch on the surface has occurred, the `handleStart()` function below is called.

```js
function handleStart(evt) {
  evt.preventDefault();
  log("touchstart.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false); // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    log("touchstart:" + i + ".");
  }
}
```

This calls {{domxref("event.preventDefault()")}} to keep the browser from continuing to process the touch event (this also prevents a mouse event from also being delivered). Then we get the context and pull the list of changed touch points out of the event's {{domxref("TouchEvent.changedTouches")}} property.

After that, we iterate over all the {{domxref("Touch")}} objects in the list, pushing them onto an array of active touch points and drawing the start point for the draw as a small circle; we're using a 4-pixel wide line, so a 4 pixel radius circle will show up neatly.

#### Drawing as the touches move

Each time one or more fingers moves, a [`touchmove`](/zh-TW/docs/Web/API/Element/touchmove_event) event is delivered, resulting in our `handleMove()` function being called. Its responsibility in this example is to update the cached touch information and to draw a line from the previous position to the current position of each touch.

```js
function handleMove(evt) {
  evt.preventDefault();
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      log("continuing touch " + idx);
      ctx.beginPath();
      log(
        "ctx.moveTo(" +
          ongoingTouches[idx].pageX +
          ", " +
          ongoingTouches[idx].pageY +
          ");",
      );
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i])); // swap in the new touch record
      log(".");
    } else {
      log("can't figure out which touch to continue");
    }
  }
}
```

This iterates over the changed touches as well, but it looks in our cached touch information array for the previous information about each touch in order to determine the starting point for each touch's new line segment to be drawn. This is done by looking at each touch's {{domxref("Touch.identifier")}} property. This property is a unique integer for each touch, and remains consistent for each event during the duration of each finger's contact with the surface.

This lets us get the coordinates of the previous position of each touch and use the appropriate context methods to draw a line segment joining the two positions together.

After drawing the line, we call [`Array.splice()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to replace the previous information about the touch point with the current information in the `ongoingTouches` array.

#### Handling the end of a touch

When the user lifts a finger off the surface, a [`touchend`](/zh-TW/docs/Web/API/Element/touchend_event) event is sent. We handle both of these the same way: by calling the `handleEnd()` function below. Its job is to draw the last line segment for each touch that ended and remove the touch point from the ongoing touch list.

```js
function handleEnd(evt) {
  evt.preventDefault();
  log("touchend");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if (idx >= 0) {
      ctx.lineWidth = 4;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8); // and a square at the end
      ongoingTouches.splice(idx, 1); // remove it; we're done
    } else {
      log("can't figure out which touch to end");
    }
  }
}
```

This is very similar to the previous function; the only real differences are that we draw a small square to mark the end and that when we call [`Array.splice()`](/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), we simply remove the old entry from the ongoing touch list, without adding in the updated information. The result is that we stop tracking that touch point.

#### Handling canceled touches

If the user's finger wanders into browser UI, or the touch otherwise needs to be canceled, the [`touchcancel`](/zh-TW/docs/Web/API/Element/touchcancel_event) event is sent, and we call the `handleCancel()` function below.

```js
function handleCancel(evt) {
  evt.preventDefault();
  log("touchcancel.");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1); // remove it; we're done
  }
}
```

Since the idea is to immediately abort the touch, we simply remove it from the ongoing touch list without drawing a final line segment.

### Convenience functions

This example uses two convenience functions that should be looked at briefly to help make the rest of the code more clear.

#### Selecting a color for each touch

In order to make each touch's drawing look different, the `colorForTouch()` function is used to pick a color based on the touch's unique identifier. This identifier is an opaque number, but we can at least rely on it differing between the currently-active touches.

```js
function colorForTouch(touch) {
  var r = touch.identifier % 16;
  var g = Math.floor(touch.identifier / 3) % 16;
  var b = Math.floor(touch.identifier / 7) % 16;
  r = r.toString(16); // make it a hex digit
  g = g.toString(16); // make it a hex digit
  b = b.toString(16); // make it a hex digit
  var color = "#" + r + g + b;
  log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}
```

The result from this function is a string that can be used when calling {{HTMLElement("canvas")}} functions to set drawing colors. For example, for a {{domxref("Touch.identifier")}} value of 10, the resulting string is "#aaa".

#### Copying a touch object

Some browsers (mobile Safari, for one) re-use touch objects between events, so it's best to copy the bits you care about, rather than referencing the entire object.

```js
function copyTouch(touch) {
  return {
    identifier: touch.identifier,
    pageX: touch.pageX,
    pageY: touch.pageY,
  };
}
```

#### Finding an ongoing touch

The `ongoingTouchIndexById()` function below scans through the `ongoingTouches` array to find the touch matching the given identifier, then returns that touch's index into the array.

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

#### Showing what's going on

```js
function log(msg) {
  var p = document.getElementById("log");
  p.innerHTML = msg + "\n" + p.innerHTML;
}
```

If your browser supports it, you can {{LiveSampleLink('Example', 'see it live')}}.

[jsFiddle example](http://jsfiddle.net/Darbicus/z3Xdx/10/)

## Additional tips

This section provides additional tips on how to handle touch events in your web application.

### Handling clicks

Since calling `preventDefault()` on a [`touchstart`](/zh-TW/docs/Web/API/Element/touchstart_event) or the first [`touchmove`](/zh-TW/docs/Web/API/Element/touchmove_event) event of a series prevents the corresponding mouse events from firing, it's common to call `preventDefault()` on [`touchmove`](/zh-TW/docs/Web/API/Element/touchmove_event) rather than [`touchstart`](/zh-TW/docs/Web/API/Element/touchstart_event). That way, mouse events can still fire and things like links will continue to work. Alternatively, some frameworks have taken to refiring touch events as mouse events for this same purpose. (This example is oversimplified and may result in strange behavior. It is only intended as a guide.)

```js
function onTouch(evt) {
  evt.preventDefault();
  if (
    evt.touches.length > 1 ||
    (evt.type == "touchend" && evt.touches.length > 0)
  )
    return;

  var newEvt = document.createEvent("MouseEvents");
  var type = null;
  var touch = null;

  switch (evt.type) {
    case "touchstart":
      type = "mousedown";
      touch = evt.changedTouches[0];
      break;
    case "touchmove":
      type = "mousemove";
      touch = evt.changedTouches[0];
      break;
    case "touchend":
      type = "mouseup";
      touch = evt.changedTouches[0];
      break;
  }

  newEvt.initMouseEvent(
    type,
    true,
    true,
    evt.originalTarget.ownerDocument.defaultView,
    0,
    touch.screenX,
    touch.screenY,
    touch.clientX,
    touch.clientY,
    evt.ctrlKey,
    evt.altKey,
    evt.shiftKey,
    evt.metaKey,
    0,
    null,
  );
  evt.originalTarget.dispatchEvent(newEvt);
}
```

### Calling preventDefault() only on a second touch

One technique for preventing things like `pinchZoom` on a page is to call `preventDefault()` on the second touch in a series. This behavior is not well defined in the touch events spec, and results in different behavior for different browsers (i.e., iOS will prevent zooming but still allow panning with both fingers; Android will allow zooming but not panning; Opera and Firefox currently prevent all panning and zooming.) Currently, it's not recommended to depend on any particular behavior in this case, but rather to depend on meta viewport to prevent zooming.

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
