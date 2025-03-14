---
title: Node.isConnected
slug: Web/API/Node/isConnected
---

{{APIRef("DOM")}}

**`isConnected`** 是 {{domxref("Node")}} 的一个只读属性接口。无论节点是否与 DOM 树连接，该属性都会返回一个{{domxref("Boolean", "布尔值")}}。例如：{{domxref("Document")}} 对象与一般 DOM 树连接，{{domxref("ShadowRoot")}} 与 shadow DOM 连接。

## 语法

```plain
var isItConnected = nodeObjectInstance.isConnected
```

### 返回值

返回 {{domxref("Boolean", "布尔值")}} — 如果该节点与 DOM 树连接则返回 `true`, 否则返回 `false`。

## 样例

### 标准 DOM 树

```js
let test = document.createElement("p");
console.log(test.isConnected); // Returns false
document.body.appendChild(test);
console.log(test.isConnected); // Returns true
```

### Shadow DOM 树

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
  // Attach the created style element to the shadow dom

  shadow.appendChild(style);
console.log(style.isConnected); // Returns true
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
