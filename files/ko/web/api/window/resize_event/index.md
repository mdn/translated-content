---
title: resize
slug: Web/API/Window/resize_event
---

**`resize`** 이벤트는 document view의 크기가 변경될 때 발생합니다.

`window.onresize` 속성(어트리뷰트)을 사용하거나,`window.addEventListener('resize', ...)`를 사용하여, 이벤트 핸들러에 `resize` 이벤트를 등록할 수 있습니다.

일부 브라우저의 이전 버전에서는 모든 HTML 요소(엘리먼트)에 `resize` 이벤트 핸들러를 등록 할 수 있었습니다. 여전히 `onresize` 속성을 사용하거나, {{domxref("EventTarget.addEventListener", "addEventListener()")}}를 사용하여 모든 요소에 핸들러를 설정할 수 있습니다. 그러나 `resize` 이벤트는 오직 {{domxref("Window", "window")}}객체({{domxref("document.defaultView")}})에서만 발생합니다(전달합니다). `window` 객체에 등록된 핸들러만 이벤트를 수신합니다.

모든 요소가 resize 변경을 알림받을 수 있도록 하는 새로운 제안(proposal 2017)이 있습니다. 드래프트문서를 읽으려면 [Resize Observer](https://wicg.github.io/ResizeObserver/)를 참조하고, 진행중인 토론을 읽으려면 [Github issues](https://github.com/WICG/ResizeObserver/issues) 문서를 참조하세요.

## General info

- Specifications
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-resize), [CSSOM View](http://www.w3.org/TR/cssom-view/#resizing-viewports)
- Interface
  - : UIEvent
- Bubbles
  - : No
- Cancelable
  - : No
- Target
  - : defaultView (window)
- Default Action
  - : None

## Properties

| Property                        | Type                                          | Description                                                                       |
| ------------------------------- | --------------------------------------------- | --------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/ko/docs/Web/API/EventTarget) | 이벤트 타겟(DOM 트리의 최상위 타겟).                                              |
| `type` {{readonlyInline}}       | [`DOMString`](/ko/docs/Web/API/DOMString)     | 이벤트의 타입.                                                                    |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/ko/docs/Web/API/Boolean)         | 이벤트가 정상적으로 버블이 발생하는지 여부.                                       |
| `cancelable` {{readonlyInline}} | [`Boolean`](/ko/docs/Web/API/Boolean)         | 이벤트 취소 가능 여부.                                                            |
| `view` {{readonlyInline}}       | [`WindowProxy`](/ko/docs/Web/API/WindowProxy) | [`document.defaultView`](/ko/docs/Web/API/Document/defaultView) (문서의 `window`) |
| `detail` {{readonlyInline}}     | `long` (`float`)                              | 0.                                                                                |

## Examples

`resize` 이벤트는 빈번하게 발생될 수 있기 때문에, 이벤트 핸들러는 DOM 수정과 같은 계산이 많이 필요한 연산을 실행하지 않아야 합니다. 대신에 다음과 같이 [requestAnimationFrame](/ko/docs/DOM/window.requestAnimationFrame), [setTimeout](/ko/docs/Web/API/WindowTimers/setTimeout), [customEvent](/ko/docs/Web/API/CustomEvent)\* 등을 사용해 이벤트를 스로틀(throttle) 하는것이 좋습니다:

**\* 주의:** IE11은 제대로 작동하려면 [customEvent](/ko/docs/Web/API/CustomEvent/CustomEvent#Polyfill) 폴리필(polyfill)이 필요합니다.

### requestAnimationFrame + customEvent

```js
(function () {
  var throttle = function (type, name, obj) {
    obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  /* init - you can init any event */
  throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function () {
  console.log("Resource conscious resize callback!");
});
```

### requestAnimationFrame

```js
var optimizedResize = (function () {
  var callbacks = [],
    running = false;

  // fired on resize event
  function resize() {
    if (!running) {
      running = true;

      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(runCallbacks);
      } else {
        setTimeout(runCallbacks, 66);
      }
    }
  }

  // run the actual callbacks
  function runCallbacks() {
    callbacks.forEach(function (callback) {
      callback();
    });

    running = false;
  }

  // adds callback to loop
  function addCallback(callback) {
    if (callback) {
      callbacks.push(callback);
    }
  }

  return {
    // public method to add additional callback
    add: function (callback) {
      if (!callbacks.length) {
        window.addEventListener("resize", resize);
      }
      addCallback(callback);
    },
  };
})();

// start process
optimizedResize.add(function () {
  console.log("Resource conscious resize callback!");
});
```

### setTimeout

```js
(function() {

  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

       // The actualResizeHandler will execute at a rate of 15fps
       }, 66);
    }
  }

  function actualResizeHandler() {
    // handle the resize event
    ...
  }

}());
```
