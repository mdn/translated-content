---
title: Node.getRootNode()
slug: Web/API/Node/getRootNode
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`getRootNode()`** 方法返回上下文中的根节点，如果 shadow DOM 可用，则对 shadow DOM 同样适用。

## 语法

```plain
var root = node.getRootNode(options);
```

### 参数

- `options` {{optional_inline}}

  - : 获取根节点时的可选参数对象。下列值可供选择：

    - `composed`: {{jsxref('Boolean')}} 如果检索到 shadow Root 需要返回，则设置为（`false`，默认值），如果跳过 shadow Root 检索普通 Root 则设置为（`true`）。

### 返回值

返回一个继承自 {{domxref('Node')}} 的对象。返回值会因为 `getRootNode()` 调用的地方不同而不同; 比如说：

- 在标准的网页中调用将会返回一个 {{domxref("HTMLDocument")}} 对象表示整个网页。
- 在 Shadow DOM 里调用将会返回一个与之相关联的 {{domxref("ShadowRoot")}} 。

## 示例

第一个例子很简单，返回一个参照 HTML/document node 位置的一个节点。

```js
rootNode = node.rootNode;
```

我们来看一个稍微复杂的例子。这个例子展示了该属性在普通的 DOM 的 shadow DOM 的差别。 (See the [full source code](<https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html>)):

```html
<!-- source: https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html -->
<div class="js-parent">
  <div class="js-child"></div>
</div>
<div class="js-shadowHost"></div>
<script>
  // work on Chrome 54+，Opera41+

  var parent = document.querySelector(".js-parent"),
    child = document.querySelector(".js-child"),
    shadowHost = document.querySelector(".js-shadowHost");

  console.log(parent.getRootNode().nodeName); // #document
  console.log(child.getRootNode().nodeName); // #document

  // create a ShadowRoot
  var shadowRoot = shadowHost.attachShadow({ mode: "open" });
  shadowRoot.innerHTML =
    "<style>div{background:#2bb8aa;}</style>" +
    '<div class="js-shadowChild">content</div>';
  var shadowChild = shadowRoot.querySelector(".js-shadowChild");

  // The default value of composed is false
  console.log(shadowChild.getRootNode() === shadowRoot); // true
  console.log(shadowChild.getRootNode({ composed: false }) === shadowRoot); // true
  console.log(shadowChild.getRootNode({ composed: true }).nodeName); // #document
</script>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
