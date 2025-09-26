---
title: Node：cloneNode() 方法
slug: Web/API/Node/cloneNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`cloneNode()`** 方法会返回调用该方法的节点的一个副本。该方法的参数用于控制是否同时克隆节点中包含的子树。

克隆一个节点会复制它的所有属性及其对应的值，包括内联事件监听器。它*不会*复制通过 [`addEventListener()`](/zh-CN/docs/Web/API/EventTarget/addEventListener) 添加的事件监听器，或赋值给元素属性的事件处理器（例如 `node.onclick = someFunction`）。此外，对于 {{HTMLElement("canvas")}} 元素，绘制的图像不会被复制。

> [!WARNING]
> `cloneNode()` 可能会导致文档中出现重复的元素 ID！
>
> 如果原始节点具有 `id` 属性，并且克隆节点将被放置在同一文档中，则应修改克隆节点的 ID 以确保其唯一性。
>
> 此外，`name` 属性可能需要修改，具体取决于是否预期会有重复的名称。

要将节点克隆并插入到*另一个*文档中，请改用 {{domxref("Document.importNode()")}}。

## 语法

```js-nolint
cloneNode()
cloneNode(deep)
```

### 参数

- `deep` {{optional_inline}}
  - : 如果为 `true`，则节点及其整个子树，包括可能存在于 {{domxref("Text")}} 子节点中的文本，也会被复制。

    如果为 `false`，则仅复制节点本身。子树，包括节点包含的任何文本，将不会被复制。

    请注意，`deep` 对{{glossary("void element", "空元素")}}没有影响，例如 {{HTMLElement("img")}} 和 {{HTMLElement("input")}} 元素。

### 返回值

新的、被克隆的 {{domxref("Node")}}。克隆的节点没有父节点，并且在被添加到文档中其他节点之前，*不会*成为文档的一部分，直到它通过 {{domxref("Node.appendChild()")}} 或类似的方法被添加到文档中的其他节点。

## 示例

```js
let p = document.getElementById("para1");
let p_prime = p.cloneNode(true);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
