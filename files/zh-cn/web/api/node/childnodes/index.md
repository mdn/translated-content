---
title: Node：childNodes 属性
short-title: childNodes
slug: Web/API/Node/childNodes
l10n:
  sourceCommit: d4a50b63d9afd826e61eb8833e8e6337b5059e8a
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`childNodes`** 只读属性返回一个实时的 {{domxref("NodeList")}}，其中包含给定元素的所有子{{domxref("Node","节点", , 1)}}，第一个子节点的索引为 `0`。子节点包括元素节点、文本节点和注释节点。

> [!NOTE]
> {{domxref("NodeList")}} 是实时的，这意味着每当有新的子节点被添加或移除时，其内容都会随之更新。
>
> 浏览器会在文档中插入文本节点，用于表示源标记中的空白字符。因此，例如通过 `Node.childNodes[0]` 获取的节点，可能指向的是一个空白文本节点，而不是作者原本想获取的实际元素节点。
>
> 更多信息请参阅[在 DOM 中处理空白](/zh-CN/docs/Web/CSS/Guides/Text/Whitespace#在_DOM_中处理空白)。

节点集合中的项是对象，而不是字符串。若要从节点对象中获取数据，应使用其属性。例如，要获取第一个子节点的名称，可以使用：`elementNodeReference.childNodes[0].nodeName`。

{{domxref("document")}} 对象本身有两个子节点：文档类型声明和根元素（通常称为 `documentElement`）。在 HTML 文档中，根元素即为 {{HTMLElement("html")}} 元素。

需要注意的是，`childNodes` 包含*所有*子节点，包括文本节点和注释等非元素节点。如果只想获取元素节点的集合，请改用 {{domxref("Element.children")}}。

## 值

一个实时的 {{domxref("NodeList")}}，其中包含该节点的所有子节点。

> [!NOTE]
> 多次调用 `childNodes` 会返回*同一个* {{domxref("NodeList")}}。

## 示例

### 简单用法

```js
// 注意，para 是指向一个 <p> 元素的对象引用

// 首先检查该元素是否有子节点
if (para.hasChildNodes()) {
  let children = para.childNodes;

  for (const node of children) {
    // 对每个子节点执行一些操作，例如 children[i]
    // 注意：该列表是实时的！添加或删除子节点会改变列表的 `length`
  }
}
```

### 从节点中移除所有子节点

```js
// 这是从节点中移除所有子节点的一种方法
// box 是指向某个元素的对象引用
while (box.firstChild) {
  // 列表是实时的，因此每次调用都会重新索引
  box.removeChild(box.firstChild);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.firstChild")}}
- {{domxref("Node.lastChild")}}
- {{domxref("Node.nextSibling")}}
- {{domxref("Node.previousSibling")}}
- {{domxref("Element.children")}}
