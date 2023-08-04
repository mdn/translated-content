---
title: resize
slug: Web/API/Window/resize_event
---

{{APIRef}}

Событие **`resize`** срабатывает при изменении размера представления документа (окна).

В некоторых более ранних браузерах можно было зарегистрировать обработчики событий `resize` на любом HTML-элементе. По-прежнему можно установить атрибуты `onresize` или использовать {{domxref("EventTarget.addEventListener", "addEventListener()")}} чтобы установить обработчик для любого элемента. Однако, событие `resize` запускается только на объекте {{domxref("Window", "window")}}. Только обработчики, зарегистрированные на объекте window, будут получать события `resize` .

Существует предложение разрешить всем элементам получать уведомления об изменениях размера. См. раздел [Resize Observer](https://wicg.github.io/ResizeObserver/), чтобы ознакомиться с проектом документа, и [GitHub вопросы](https://github.com/WICG/ResizeObserver/issues), чтобы ознакомиться с текущими обсуждениями.

## Основная информация

- Спецификации
  - : [DOM L3](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-resize), [CSSOM View](http://www.w3.org/TR/cssom-view/#resizing-viewports)
- Интерфейс
  - : UIEvent
- Bubbles
  - : Нет
- Отмена
  - : Нет
- Цель
  - : вид по умолчанию (window)
- Действие по умолчанию
  - : Нет

| Property                        | Type                                          | Description                                                                                |
| ------------------------------- | --------------------------------------------- | ------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/ru/docs/Web/API/EventTarget) | The event target (the topmost target in the DOM tree).                                     |
| `type` {{readonlyInline}}       | [`DOMString`](/ru/docs/Web/API/DOMString)     | The type of event.                                                                         |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/ru/docs/Web/API/Boolean)         | Whether the event normally bubbles or not.                                                 |
| `cancelable` {{readonlyInline}} | [`Boolean`](/ru/docs/Web/API/Boolean)         | Whether the event is cancellable or not.                                                   |
| `view` {{readonlyInline}}       | [`WindowProxy`](/ru/docs/Web/API/WindowProxy) | [`document.defaultView`](/ru/docs/Web/API/Document/defaultView) (`window` of the document) |
| `detail` {{readonlyInline}}     | `long` (`float`)                              | 0.                                                                                         |

## Примеры

Так как события изменения размера могут срабатывать с высокой скоростью, обработчик событий не должен выполнять дорогостоящие операции, такие как модификации DOM. Вместо этого рекомендуется регулировать событие, используя requestAnimationFrame, setTimeout или customEvent \*, следующим образом:

**\* ВАЖНО:** Обратите внимание, что для работы в IE11 необходимо, чтобы [customEvent](/ru/docs/Web/API/CustomEvent/CustomEvent#Polyfill) заполнялся в функцию правильно.

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
