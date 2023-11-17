---
title: Node.isConnected
slug: Web/API/Node/isConnected
---

{{APIRef("DOM")}}

The **`isConnected`** read-only property of the {{domxref("Node")}} interface returns a boolean indicating whether the Node is connected (directly or indirectly) to the context object, for example the {{domxref("Document")}} object in the case of the normal DOM, or the {{domxref("ShadowRoot")}} in the case of a shadow DOM.

## Синтаксис

```
var isItConnected = nodeObjectInstance.isConnected
```

### Return value

A {{domxref("Boolean")}} that is `true` if the node is connected to its relevant context object, and `false` if not.

## Пример

Стандартный DOM пример:

```js
let test = document.createElement("p");
console.log(test.isConnected); // returns false
document.body.appendChild(test);
console.log(test.isConnected); // returns true
```

A shadow DOM example:

```js
// Create a shadow root
var shadow = this.attachShadow({ mode: "open" });

// Create some CSS to apply to the shadow dom
var style = document.createElement("style");
console.log(style.isConnected); // returns false

style.textContent =
  ".wrapper {" +
  "position: relative;" +
  "}" +
  ".info {" +
  "font-size: 0.8rem;" +
  "width: 200px;" +
  "display: inline-block;" +
  "border: 1px solid black;" +
  "padding: 10px;" +
  "background: white;" +
  "border-radius: 10px;" +
  "opacity: 0;" +
  "transition: 0.6s all;" +
  "position: absolute;" +
  "bottom: 20px;" +
  "left: 10px;" +
  "z-index: 3;" +
  "}" +
  // attach the created style element to the shadow dom

  shadow.appendChild(style);
console.log(style.isConnected); // returns true
```

## Спецификация

{{Specifications}}

## Поддержка Браузерами

{{Compat}}
