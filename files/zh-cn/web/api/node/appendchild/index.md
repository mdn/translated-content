---
title: Node.appendChild
slug: Web/API/Node/appendChild
---

{{APIRef("DOM")}}

**`Node.appendChild()`** 方法将一个节点附加到指定父节点的子节点列表的末尾处。如果将被插入的节点已经存在于当前文档的文档树中，那么 `appendChild()` 只会将它从原先的位置移动到新的位置（不需要事先移除要移动的节点）。

这意味着，一个节点不可能同时出现在文档的不同位置。所以，如果某个节点已经拥有父节点，在被传递给此方法后，它首先会被移除，再被插入到新的位置。若要保留已在文档中的节点，可以先使用 {{domxref("Node.cloneNode()")}} 方法来为它创建一个副本，再将副本附加到目标父节点下。请注意，用 `cloneNode` 制作的副本不会自动保持同步。

如果给定的子节点是 {{domxref("DocumentFragment")}}，那么 {{domxref("DocumentFragment")}} 的全部内容将转移到指定父节点的子节点列表中。

> **备注：** **有更加新的 API 可供使用！** > {{domxref("ParentNode.append()")}} 方法支持多个参数，接受字符串作为参数，会将字符串转换为文本节点再附加。

## 语法

```
element.appendChild(aChild)
```

### 参数

- `aChild`
  - : 要追加给父节点（通常为一个元素）的节点。

### 返回值

返回追加后的子节点（`aChild`），除非 `aChild` 是一个文档片段（{{domxref("DocumentFragment")}}），这种情况下将返回空文档片段（{{domxref("DocumentFragment")}}）。

## 附注

如果你需要保留这个子节点在原先位置的显示，则你需要先用{{domxref("Node.cloneNode")}}方法复制出一个节点的副本，然后在插入到新位置。

这个方法只能将某个子节点插入到同一个文档的其他位置，如果你想跨文档插入，你需要先调用{{domxref("document.importNode")}}方法。

## 备注

由于 `appendChild()` 返回的是被附加的子元素，所以链式调用可能无法按照你的预期去执行：

```js
let aBlock = document
  .createElement("block")
  .appendChild(document.createElement("b"));
```

（上述代码）只会将 `aBlock` 设置为 `<b></b>` ，这可能不是你所想要的。

## 示例

```js
// 创建一个新的段落元素 <p>，然后添加到 <body> 的最尾部
var p = document.createElement("p");
document.body.appendChild(p);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.removeChild")}}
- {{domxref("Node.replaceChild")}}
- {{domxref("Node.insertBefore")}}
- {{domxref("Node.hasChildNodes")}}
