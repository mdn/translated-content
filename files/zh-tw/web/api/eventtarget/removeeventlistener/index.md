---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
---

{{APIRef("DOM Events")}}

**`EventTarget.removeEventListener()`** 方法可以移除先前由 {{domxref("EventTarget.addEventListener()", "addEventListener()")}} 所註冊的事件監聽器。

## 語法

```js
target.removeEventListener(type, listener[, options]);
target.removeEventListener(type, listener[, useCapture]);
```

### 參數

- `type`
  - : A string representing the event type to remove.
- `listener`
  - : The {{domxref("EventListener")}} function to remove from the event target.
- options {{optional_inline}}
  - : An options object that specifies characteristics about the event listener. The available options are: `capture`: A {{jsxref("Boolean")}} that indicates that events of this type will be dispatched to the registered `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
    - `passive`: A {{jsxref("Boolean")}} indicating that the `listener` will never call `preventDefault()`. If it does, the user agent should ignore it and generate a console warning.
    - {{non-standard_inline}} `mozSystemGroup`: Available only in code running in XBL or in Firefox' chrome, it is a {{jsxref("Boolean")}} defining if the listener is added to the system group.
- `useCapture` {{optional_inline}}
  - : Specifies whether the {{domxref("EventListener")}} to be removed is registered as a capturing listener or not. If this parameter is absent, a default value of `false` is assumed. If a listener is registered twice, one with capture and one without, remove each one separately. Removal of a capturing listener does not affect a non-capturing version of the same listener, and vice versa.

> **備註：** `useCapture` was required in most major browsers' early versions. If broad compatibility is desired, you should always provide the `useCapture` parameter.

### 回傳值

無。

## 備註

If an {{domxref("EventListener")}} is removed from an {{domxref("EventTarget")}} while it is processing an event, it will not be triggered by the current actions. An {{domxref("EventListener")}} will not be invoked for the event it was registered for after being removed, however it can be reattached.

Calling `removeEventListener()` with arguments that do not identify any currently registered {{domxref("EventListener")}} on the `EventTarget` has no effect.

## 範例

This example shows how to add a `click`-based event listener and remove a `mouseover`-based event listener.

```js
var body = document.querySelector("body"),
  clickTarget = document.getElementById("click-target"),
  mouseOverTarget = document.getElementById("mouse-over-target"),
  toggle = false;

function makeBackgroundYellow() {
  "use strict";

  if (toggle) {
    body.style.backgroundColor = "white";
  } else {
    body.style.backgroundColor = "yellow";
  }

  toggle = !toggle;
}

clickTarget.addEventListener("click", makeBackgroundYellow, false);

mouseOverTarget.addEventListener("mouseover", function () {
  "use strict";

  clickTarget.removeEventListener("click", makeBackgroundYellow, false);
});
```

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}

## Polyfill to support older browsers

`addEventListener()` and `removeEventListener()` are not present in older browsers. You can work around this by inserting the following code at the beginning of your scripts, allowing the use of `addEventListener()` and `removeEventListener()` in implementations that do not natively support it. However, this method will not work on Internet Explorer 7 or earlier, since extending the Element.prototype was not supported until Internet Explorer 8.

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) {
      oEvent = window.event;
    }
    for (
      var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type];
      iElId < oEvtListeners.aEls.length;
      iElId++
    ) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) {
          oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent);
        }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (
    sEventType,
    fListener /*, useCapture (will be ignored!) */
  ) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (
        var nElIdx = -1, iElId = 0;
        iElId < oEvtListeners.aEls.length;
        iElId++
      ) {
        if (oEvtListeners.aEls[iElId] === this) {
          nElIdx = iElId;
          break;
        }
      }
      if (nElIdx === -1) {
        oEvtListeners.aEls.push(this);
        oEvtListeners.aEvts.push([fListener]);
        this["on" + sEventType] = runListeners;
      } else {
        var aElListeners = oEvtListeners.aEvts[nElIdx];
        if (this["on" + sEventType] !== runListeners) {
          aElListeners.splice(0);
          this["on" + sEventType] = runListeners;
        }
        for (var iLstId = 0; iLstId < aElListeners.length; iLstId++) {
          if (aElListeners[iLstId] === fListener) {
            return;
          }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [[fListener]] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (
    sEventType,
    fListener /*, useCapture (will be ignored!) */
  ) {
    if (!oListeners.hasOwnProperty(sEventType)) {
      return;
    }
    var oEvtListeners = oListeners[sEventType];
    for (
      var nElIdx = -1, iElId = 0;
      iElId < oEvtListeners.aEls.length;
      iElId++
    ) {
      if (oEvtListeners.aEls[iElId] === this) {
        nElIdx = iElId;
        break;
      }
    }
    if (nElIdx === -1) {
      return;
    }
    for (
      var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx];
      iLstId < aElListeners.length;
      iLstId++
    ) {
      if (aElListeners[iLstId] === fListener) {
        aElListeners.splice(iLstId, 1);
      }
    }
  };
}
```

## 參見

- {{domxref("EventTarget.addEventListener()")}}.
- {{non-standard_inline}}{{domxref("EventTarget.detachEvent()")}}.
