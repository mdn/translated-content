---
title: EventTarget.removeEventListener()
slug: Web/API/EventTarget/removeEventListener
translation_of: Web/API/EventTarget/removeEventListener
---
{{APIRef("DOM Events")}}

**`EventTarget.removeEventListener()`** 메서드는 이전에{{domxref("EventTarget.addEventListener()")}}로 {{domxref("EventTarget")}} 에 등록했던 이벤트 리스너를 제거합니다. 이 이벤트 리스너는 이벤트 종류와 이벤트 리스너 함수 자체의 조합으로 식별되어 제거되며, 등록시 제공했던 다양한 옵션과 일치하는 이벤트 리스너만 제거할 수 있습니다. <span style="font-size: 1rem; letter-spacing: -0.00278rem;"> {{anch("Matching event listeners for removal")}}를 참고하세요.</span>

## Syntax

    target.removeEventListener(type, listener[, options]);
    target.removeEventListener(type, listener[, useCapture]);

### Parameters

<dl><dt><code>type</code></dt><dd>제거할 이벤트 리스너의 이벤트 타입을 지정합니다.</dd><dt><code>listener</code></dt><dd>이벤트 타깃에서 제거할 이벤트 핸들러 함수, {{domxref("EventListener")}}를 지정합니다.</dd><dt><code>options</code> {{optional_inline}}</dt><dd>이벤트 리스너에 대한 특징, 즉 제거할 이벤트 리스너의 옵션들을 지정합니다. 지정할 수 있는 옵션들은 아래와 같습니다.<ul><li><code>capture</code>: 이 이벤트 타입의 이벤트들이 DOM 트리 내 모든 어떤 <code>EventTarget</code> 에 디스패치되기 전에  등록된 <code>listener</code> 들을 먼저 처리하도록 만들지 말지를 결정하는 {{jsxref("Boolean")}} 값.</li><li>{{non-standard_inline}}<code> mozSystemGroup</code>: Available only in code running in XBL or in Firefox' chrome, it is a {{jsxref("Boolean")}} defining if the listener is added to the system group. (비표준)</li></ul></dd><dt><code>useCapture</code> {{optional_inline}}</dt><dd>Specifies whether the {{domxref("EventListener")}} to be removed is registered as a capturing listener or not. If this parameter is absent, a default value of <code>false</code> is assumed.</dd><dd>If a listener is registered twice, one with capture and one without, remove each one separately. Removal of a capturing listener does not affect a non-capturing version of the same listener, and vice versa.</dd></dl>

### Return value

`undefined`.

### Matching event listeners for removal

Given an event listener previously added by calling {{domxref("EventTarget.addEventListener", "addEventListener()")}}, you may eventually come to a point at which you need to remove it. Obviously, you need to specify the same `type` and `listener` parameters to `removeEventListener()`, but what about the `options` or `useCapture` parameters?

While `addEventListener()` will let you add the same listener more than once for the same type if the options are different, the only option `removeEventListener()` checks is the `capture`/`useCapture` flag. Its value must match for `removeEventListener()` to match, but the other values don't.

For example, consider this call to `addEventListener()`:

```js
element.addEventListener("mousedown", handleMouseDown, true);
```

Now consider each of these two calls to `removeEventListener()`:

```js
element.removeEventListener("mousedown", handleMouseDown, false);     // Fails
element.removeEventListener("mousedown", handleMouseDown, true);      // Succeeds
```

The first call fails because the value of `useCapture` doesn't match. The second succeeds, since `useCapture` matches up.

Now consider this:

```js
element.addEventListener("mousedown", handleMouseDown, { passive: true });
```

Here, we specify an `options` object in which `passive` is set to `true`, while the other options are left to the default value of `false`.

Now look at each of these calls to `removeEventListener()` in turn. Any of them in which `capture` or `useCapture` is `true` fail; all others succeed. Only the `capture` setting matters to `removeEventListener()`.

```js
element.removeEventListener("mousedown", handleMouseDown, { passive: true });     // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, { capture: true });     // Fails
element.removeEventListener("mousedown", handleMouseDown, { passive: false });    // Succeeds
element.removeEventListener("mousedown", handleMouseDown, false);                 // Succeeds
element.removeEventListener("mousedown", handleMouseDown, true);                  // Fails
```

It's worth noting that some browser releases have been inconsistent on this, and unless you have specific reasons otherwise, it's probably wise to use the same values used for the call to `addEventListener()` when calling `removeEventListener()`.

## Notes

If an {{domxref("EventListener")}} is removed from an {{domxref("EventTarget")}} while it is processing an event, it will not be triggered by the current actions. An {{domxref("EventListener")}} will not be invoked for the event it was registered for after being removed. However, it can be reattached.

Calling `removeEventListener()` with arguments that do not identify any currently registered {{domxref("EventListener")}} on the `EventTarget` has no effect.

## Example

This example shows how to add a `click`-based event listener and remove a `mouseover`-based event listener.

```js
var body = document.querySelector('body'),
    clickTarget = document.getElementById('click-target'),
    mouseOverTarget = document.getElementById('mouse-over-target'),
    toggle = false;

function makeBackgroundYellow() {
    'use strict';

    if (toggle) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'yellow';
    }

    toggle = !toggle;
}

clickTarget.addEventListener('click',
    makeBackgroundYellow,
    false
);

mouseOverTarget.addEventListener('mouseover', function () {
    'use strict';

    clickTarget.removeEventListener('click',
        makeBackgroundYellow,
        false
    );
});
```

## Specifications

| Specification                                                                                                                                    | Status                           | Comment            |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------ |
| {{SpecName("DOM WHATWG", "#dom-eventtarget-removeeventlistener", "EventTarget.removeEventListener()")}}         | {{Spec2("DOM WHATWG")}} |                    |
| {{SpecName("DOM4", "#dom-eventtarget-removeeventlistener", "EventTarget.removeEventListener()")}}                 | {{Spec2("DOM4")}}         |                    |
| {{SpecName("DOM2 Events", "#Events-EventTarget-removeEventListener", "EventTarget.removeEventListener()")}} | {{Spec2("DOM2 Events")}} | Initial definition |

## Browser compatibility



{{Compat("api.EventTarget.removeEventListener", 3)}}

## Polyfill to support older browsers

`addEventListener()` and `removeEventListener()` are not present in older browsers. You can work around this by inserting the following code at the beginning of your scripts, allowing the use of `addEventListener()` and `removeEventListener()` in implementations that do not natively support it. However, this method will not work on Internet Explorer 7 or earlier, since extending the Element.prototype was not supported until Internet Explorer 8.

```js
if (!Element.prototype.addEventListener) {
  var oListeners = {};
  function runListeners(oEvent) {
    if (!oEvent) { oEvent = window.event; }
    for (var iLstId = 0, iElId = 0, oEvtListeners = oListeners[oEvent.type]; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) {
        for (iLstId; iLstId < oEvtListeners.aEvts[iElId].length; iLstId++) { oEvtListeners.aEvts[iElId][iLstId].call(this, oEvent); }
        break;
      }
    }
  }
  Element.prototype.addEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (oListeners.hasOwnProperty(sEventType)) {
      var oEvtListeners = oListeners[sEventType];
      for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
        if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
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
          if (aElListeners[iLstId] === fListener) { return; }
        }
        aElListeners.push(fListener);
      }
    } else {
      oListeners[sEventType] = { aEls: [this], aEvts: [ [fListener] ] };
      this["on" + sEventType] = runListeners;
    }
  };
  Element.prototype.removeEventListener = function (sEventType, fListener /*, useCapture (will be ignored!) */) {
    if (!oListeners.hasOwnProperty(sEventType)) { return; }
    var oEvtListeners = oListeners[sEventType];
    for (var nElIdx = -1, iElId = 0; iElId < oEvtListeners.aEls.length; iElId++) {
      if (oEvtListeners.aEls[iElId] === this) { nElIdx = iElId; break; }
    }
    if (nElIdx === -1) { return; }
    for (var iLstId = 0, aElListeners = oEvtListeners.aEvts[nElIdx]; iLstId < aElListeners.length; iLstId++) {
      if (aElListeners[iLstId] === fListener) { aElListeners.splice(iLstId, 1); }
    }
  };
}
```

## See also

- {{domxref("EventTarget.addEventListener()")}}.
- {{non-standard_inline}}{{domxref("EventTarget.detachEvent()")}}.
