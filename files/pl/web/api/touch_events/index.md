---
title: Zdarzenia dotykowe
slug: Web/API/Touch_events
translation_of: Web/API/Touch_events
original_slug: Web/API/Zdarzenia_dotykowe
---
{{DefaultAPISidebar("Touch Events")}}

W celu zapewnienia wsparcia dla dotykowych interfejsów użytkownika, zdarzenia dotykowe oferują możliwość interpretowania aktywności palca (lub rysika) na ekranach i gładzikach.

Interfejsy zdarzeń dotykowych to stounkowo niskopoziomowe API, które mogą być użyte do specyficznych dla aplikacji wielodotykowych interakcji takich jak gesty wykonywane dwoma palcami. Interakcja wielodotykowa zaczyna się, kiedy palec (lub rysik) dotyka powierzchni ekranu lub gładzika. Pozostałe palce mogą dotknąć powierzhni później i, opcjonalnie, poruszać się po powierzchni dotykowej. Interakcja kończy się, gdy palce są zabrane z powierzchni ekranu lub gładzika. W czasie trwania interakcji, aplikacja odbiera zdarzenia dotykowe podczas faz startu, ruchu i zakończenia tejże interakcji.

Zdarzenia dotykowe są podobne do zdarzeń myszki, z tą różnicą, że pozwalają na jednoczesne dotknięcia w różnych miejscach na ekranie. Interfejs {{domxref("TouchEvent")}} hermetyzuje wszystkie punkty dotyku aktywne w danym momencie. Interfejs {{domxref("Touch")}}, który reprezentuje pojedynczy punkt dotyku, zawiera informacje takie jak pozycja punktu dotyku w stosunku do widoku okna przeglądarki.

## Definicje

- Powierzchnia
  - : Powierzchnia dotykowa. Może to być ekran lub gładzik.

<!---->

- Punkt dotyku
  - : Punkt kontaktu z powierzchnią. Może to być palec (lub łokieć, ucho, nos, cokolwiek, ale najczęściej jednak palec) lub rysik.

## Interfejsy

- {{domxref("TouchEvent")}}
  - : Reprezentuje zdarzenie, które zachodzi, gdy stan dotknięć powierzchni się zmienia.
- {{domxref("Touch")}}
  - : Reprezentuje pojedynczy punkt kontaktu między użytkownikiem a powierzchnią dotykową.
- {{domxref("TouchList")}}
  - : Reprezentuje grupę dotknięć; jest używany, gdy na przykład użytkownik dotyka powierzchni wieloma palcami jednocześnie.

## Przykład

Poniższy przykład śledzi wiele dotknięć w jednym czasie, pozwalając użytkownikowi na rysowanie w elemencie {{HTMLElement("canvas")}} przy użyciu więcej niż jednego palca jednocześnie. Kod ten będzie działać jedynie w przeglądarkach wspierających zdarzenia dotykowe.

> **Note:** **Uwaga:** W niniejszym tekście słowo „palec” używane jest do opisania kontaktu z powierzchnią dotykową, ale może to być oczywiście także rysik lub dowolna inna metoda dotykania ekranu.

### Stwórz kanwę

```html
<canvas id="canvas" width="600" height="600" style="border:solid black 1px;">
  Twoja przeglądarka nie wspiera elementu kanwa (canvas).
</canvas>
<br>
<button onclick="startup()">Initialize</button>
<br>
Log: <pre id="log" style="border: 1px solid #ccc;"></pre>
```

### Ustawianie funkcji do obsługi zdarzeń

Kiedy strona się ładuje, pokazana niżej funkcja `startup()` powinna być wywołana przez atrybut `onload` naszego elementu {{HTMLElement("body")}} (choć w przykładzie używamy przycisku do jej uruchomienia, ze względu na ograniczenia systemu przykłądów w MDN).

```js
function startup() {
  var el = document.getElementsByTagName("canvas")[0];
  el.addEventListener("touchstart", handleStart, false);
  el.addEventListener("touchend", handleEnd, false);
  el.addEventListener("touchcancel", handleCancel, false);
  el.addEventListener("touchmove", handleMove, false);
  console.log("initialized.");
}
```

Funkcja ta po prostu ustawia nasłluchiwanie zdarzeń dla naszego elementu {{HTMLElement("canvas")}}, tak że możemy obsłużyć zdarzenia dotykowe, kiedy się pojawią.

#### Śledzenie nowych zdarzeń

We'll keep track of the touches in-progress.

```js
var ongoingTouches = [];
```

When a {{event("touchstart")}} event occurs, indicating that a new touch on the surface has occurred, the `handleStart()` function below is called.

```js
function handleStart(evt) {
  evt.preventDefault();
  console.log("touchstart.");
  var el = document.getElementsByTagName("canvas")[0];
  var ctx = el.getContext("2d");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    console.log("touchstart:" + i + "...");
    ongoingTouches.push(copyTouch(touches[i]));
    var color = colorForTouch(touches[i]);
    ctx.beginPath();
    ctx.arc(touches[i].pageX, touches[i].pageY, 4, 0, 2 * Math.PI, false);  // a circle at the start
    ctx.fillStyle = color;
    ctx.fill();
    console.log("touchstart:" + i + ".");
  }
}
```

This calls {{domxref("event.preventDefault()")}} to keep the browser from continuing to process the touch event (this also prevents a mouse event from also being delivered). Then we get the context and pull the list of changed touch points out of the event's {{domxref("TouchEvent.changedTouches")}} property.

After that, we iterate over all the {{domxref("Touch")}} objects in the list, pushing them onto an array of active touch points and drawing the start point for the draw as a small circle; we're using a 4-pixel wide line, so a 4 pixel radius circle will show up neatly.

#### Drawing as the touches move

Each time one or more fingers moves, a {{event("touchmove")}} event is delivered, resulting in our `handleMove()` function being called. Its responsibility in this example is to update the cached touch information and to draw a line from the previous position to the current position of each touch.

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
      console.log("continuing touch "+idx);
      ctx.beginPath();
      console.log("ctx.moveTo(" + ongoingTouches[idx].pageX + ", " + ongoingTouches[idx].pageY + ");");
      ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
      console.log("ctx.lineTo(" + touches[i].pageX + ", " + touches[i].pageY + ");");
      ctx.lineTo(touches[i].pageX, touches[i].pageY);
      ctx.lineWidth = 4;
      ctx.strokeStyle = color;
      ctx.stroke();

      ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
      console.log(".");
    } else {
      console.log("can't figure out which touch to continue");
    }
  }
}
```

This iterates over the changed touches as well, but it looks in our cached touch information array for the previous information about each touch in order to determine the starting point for each touch's new line segment to be drawn. This is done by looking at each touch's {{domxref("Touch.identifier")}} property. This property is a unique integer for each touch, and remains consistent for each event during the duration of each finger's contact with the surface.

This lets us get the coordinates of the previous position of each touch and use the appropriate context methods to draw a line segment joining the two positions together.

After drawing the line, we call [`Array.splice()`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to replace the previous information about the touch point with the current information in the `ongoingTouches` array.

#### Handling the end of a touch

When the user lifts a finger off the surface, a {{event("touchend")}} event is sent. We handle this by calling the `handleEnd()` function below. Its job is to draw the last line segment for each touch that ended and remove the touch point from the ongoing touch list.

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
      ctx.fillRect(touches[i].pageX - 4, touches[i].pageY - 4, 8, 8);  // and a square at the end
      ongoingTouches.splice(idx, 1);  // remove it; we're done
    } else {
      console.log("can't figure out which touch to end");
    }
  }
}
```

This is very similar to the previous function; the only real differences are that we draw a small square to mark the end and that when we call [`Array.splice()`](/pl/docs/Web/JavaScript/Reference/Global_Objects/Array/splice), we simply remove the old entry from the ongoing touch list, without adding in the updated information. The result is that we stop tracking that touch point.

#### Handling canceled touches

If the user's finger wanders into browser UI, or the touch otherwise needs to be canceled, the {{event("touchcancel")}} event is sent, and we call the `handleCancel()` function below.

```js
function handleCancel(evt) {
  evt.preventDefault();
  console.log("touchcancel.");
  var touches = evt.changedTouches;

  for (var i = 0; i < touches.length; i++) {
    var idx = ongoingTouchIndexById(touches[i].identifier);
    ongoingTouches.splice(idx, 1);  // remove it; we're done
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
  console.log("color for touch with identifier " + touch.identifier + " = " + color);
  return color;
}
```

The result from this function is a string that can be used when calling {{HTMLElement("canvas")}} functions to set drawing colors. For example, for a {{domxref("Touch.identifier")}} value of 10, the resulting string is "#a31".

#### Copying a touch object

Some browsers (mobile Safari, for one) re-use touch objects between events, so it's best to copy the bits you care about, rather than referencing the entire object.

```js
function copyTouch(touch) {
  return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
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
  return -1;    // not found
}
```

#### Showing what's going on

```js
function log(msg) {
  var p = document.getElementById('log');
  p.innerHTML = msg + "\n" + p.innerHTML;
}
```

If your browser supports it, you can {{LiveSampleLink('Example', 'see it live')}}.

[jsFiddle example](http://jsfiddle.net/Darbicus/z3Xdx/10/)

## Dodatkowe wskazówki

This section provides additional tips on how to handle touch events in your web application.

### Obsługa kliknięć

Since calling `preventDefault()` on a {{event("touchstart")}} or the first {{event("touchmove")}} event of a series prevents the corresponding mouse events from firing, it's common to call `preventDefault()` on {{event("touchmove")}} rather than {{event("touchstart")}}. That way, mouse events can still fire and things like links will continue to work. Alternatively, some frameworks have taken to refiring touch events as mouse events for this same purpose. (This example is oversimplified and may result in strange behavior. It is only intended as a guide.)

```js
function onTouch(evt) {
  evt.preventDefault();
  if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
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

  newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shiftKey, evt.metaKey, 0, null);
  evt.originalTarget.dispatchEvent(newEvt);
}
```

### Calling preventDefault() only on a second touch

One technique for preventing things like `pinchZoom` on a page is to call `preventDefault()` on the second touch in a series. This behavior is not well defined in the touch events spec, and results in different behavior for different browsers (i.e., iOS will prevent zooming but still allow panning with both fingers; Android will allow zooming but not panning; Opera and Firefox currently prevent all panning and zooming.) Currently, it's not recommended to depend on any particular behavior in this case, but rather to depend on meta viewport to prevent zooming.

## Specyfikacje

| Specyfikacja                                                                     | Status                               | Komentarz                                                       |
| -------------------------------------------------------------------------------- | ------------------------------------ | --------------------------------------------------------------- |
| {{SpecName('Touch Events 2', '#touch-interface', 'Touch')}} | {{Spec2('Touch Events 2')}} | Added `radiusX`, `radiusY`, `rotationAngle`, `force` properties |
| {{SpecName('Touch Events', '#touch-interface', 'Touch')}}     | {{Spec2('Touch Events')}}     | Initial definition.                                             |

## Wsparcie przeglądarek

### `Touch`

Touch events are typically available on devices with a touch screen, but many browsers make the touch events API unavailable on all desktop devices, even those with touch screens.

The reason for this is that some websites use the availability of parts of the touch events API as an indicator that the browser is running on a mobile device. If the touch events API is available, these websites will assume a mobile device and serve mobile-optimised content. This may then provide a poor experience for users of desktop devices that have touch screens.

To support both touch and mouse across all types of device, use [pointer events](/pl/docs/Web/API/Pointer_events) instead.

{{Compat("api.Touch")}}

### Firefox, touch events, and multiprocess (e10s)

In Firefox, touch events are disabled when e10s (electrolysis; [multiprocess Firefox](/pl/docs/Mozilla/Firefox/Multiprocess_Firefox)) is disabled. e10s is on by default in Firefox, but can end up becoming disabled in certain situations, for example when certain accessibility tools or Firefox add-ons are installed that require e10s to be disabled to work. This means that even on a touchscreen-enabled desktop/laptop, touch events won't be enabled.

You can test whether e10s is disabled by going to `about:support` and looking at the "Multiprocess Windows" entry in the "Application Basics" section. 1/1 means it is enabled, 0/1 means disabled.

If you want to force e10s to be on — to explicitly re-enable touch events support — you need to go to `about:config` and create a new Boolean preference `browser.tabs.remote.force-enable`. Set it to `true`, restart the browser, and e10s will be enabled regardless of any other settings.
