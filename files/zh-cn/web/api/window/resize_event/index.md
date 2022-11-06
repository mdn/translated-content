---
title: resize
slug: Web/API/Window/resize_event
---

文档视图调整大小时会触发 **resize** 事件。

## 基本信息

- 规范
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-resize), [CSSOM View](http://www.w3.org/TR/cssom-view/#resizing-viewports)
- 接口
  - : UIEvent
- 是否冒泡
  - : 否
- 是否可取消默认
  - : 否
- 事件目标
  - : defaultView (window)
- 默认行为
  - : None

## 属性

| Property                              | Type                                             | Description                                                                                   |
| ------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `target` {{readonlyInline}}     | [`EventTarget`](/zh-CN/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                        |
| `type` {{readonlyInline}}       | [`DOMString`](/zh-CN/docs/Web/API/DOMString)     | The type of event.                                                                            |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | Whether the event normally bubbles or not.                                                    |
| `cancelable` {{readonlyInline}} | [`Boolean`](/zh-CN/docs/Web/API/Boolean)         | Whether the event is cancellable or not.                                                      |
| `view` {{readonlyInline}}       | [`WindowProxy`](/zh-CN/docs/Web/API/WindowProxy) | [`document.defaultView`](/zh-CN/docs/Web/API/Document/defaultView) (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                 | 0.                                                                                            |

## 案例

由于 resize 事件可以以较高的速率触发，因此事件处理程序不应该执行计算开销很大的操作 (如 DOM 修改)。相反，建议使用[requestAnimationFrame](/zh-CN/docs/DOM/window.requestAnimationFrame), [setTimeout](/zh-CN/docs/Web/API/WindowTimers/setTimeout) or [customEvent](/zh-CN/docs/Web/API/CustomEvent), 比如：

### requestAnimationFrame + customEvent

```js
;(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
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
window.addEventListener("optimizedResize", function() {
    console.log("Resource conscious resize callback!");
});
```

### requestAnimationFrame

```js
var optimizedResize = (function() {

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

        callbacks.forEach(function(callback) {
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
        add: function(callback) {
            if (!callbacks.length) {
                window.addEventListener('resize', resize);
            }
            addCallback(callback);
        }
    }
}());

// start process
optimizedResize.add(function() {
    console.log('Resource conscious resize callback!')
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
