---
title: resize
slug: Web/API/Window/resize_event
---

O evento **`resize`** é disparado quando o document view é redimensionado.

O evento manipulador pode ser registrado para o evento `resize` usando o atributo `window.onresize` ou usando `window.addEventListener('resize', ...)`

Em alguns browsers mais recentes é possível registrar o evento manipulador `resize` em qualquer elemento HTML. E ainda é possível adicionar atributos `onresize` ou usar {{domxref("EventTarget.addEventListener", "addEventListener()")}} para implementar o manipulador em qualquer elemento. Entretanto, eventos `resize` apenas são disparados sobre (enviados para) o objeto {{domxref("Window", "window")}} ({{domxref("document.defaultView")}}). Apenas manipuladores registrados no objeto `window` recebem os eventos.

Existe uma nova proposta (2017) para permitir que todos os elementos sejam notificados de alterações de tamanho. Veja [Resize Observer](https://wicg.github.io/ResizeObserver/) para ler o documento rascunho, e [Github issues](https://github.com/WICG/ResizeObserver/issues) para ler as discussões do que está ativo.

## Informações gerais

- Specifications
  - : [DOM L3](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-resize), [CSSOM View](https://www.w3.org/TR/cssom-view/#resizing-viewports)
- Interface
  - : UIEvent
- Bubbles
  - : Não
- Cancelable
  - : Não
- Target
  - : defaultView (window)
- Default Action
  - : Nenhuma

## Properties

| Property                        | Type                                             | Description                                                                                |
| ------------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `target` {{readonlyInline}}     | [`EventTarget`](/pt-BR/docs/Web/API/EventTarget) | O evento alto (o primeiro alvo na árvore DOM).                                             |
| `type` {{readonlyInline}}       | [`DOMString`](/pt-BR/docs/Web/API/DOMString)     | O tipo de evento.                                                                          |
| `bubbles` {{readonlyInline}}    | [`Boolean`](/pt-BR/docs/Web/API/Boolean)         | Se o evento normalmente bubbles ou não.                                                    |
| `cancelable` {{readonlyInline}} | [`Boolean`](/pt-BR/docs/Web/API/Boolean)         | Se o evento é cancelado ou não.                                                            |
| `view` {{readonlyInline}}       | [`WindowProxy`](/pt-BR/docs/Web/API/WindowProxy) | [`document.defaultView`](/pt-BR/docs/Web/API/Document/defaultView) (`window` do documento) |
| `detail` {{readonlyInline}}     | `long` (`float`)                                 | 0.                                                                                         |

## Examples

Como os eventos `resize` podem ser altamente executados, o evento manipulador não deve executar operações computacionais caras como modificações DOM. Em vez disso, recomenda-se diminuir o impacto do evento usando [requestAnimationFrame](/pt-BR/docs/DOM/window.requestAnimationFrame), [setTimeout](/pt-BR/docs/Web/API/WindowTimers/setTimeout) ou [customEvent](/pt-BR/docs/Web/API/CustomEvent)\*, como a seguir:

**\* IMPORTANT:** Por favor note que IE11 precisa do [customEvent](/pt-BR/docs/Web/API/CustomEvent/CustomEvent#Polyfill) polyfill para funcionar corretamente.

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
