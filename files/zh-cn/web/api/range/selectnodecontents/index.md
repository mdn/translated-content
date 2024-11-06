---
title: Range：selectNodeContents() 方法
slug: Web/API/Range/selectNodeContents
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.selectNodeContents()`** 方法用于设置 {{domxref("Range")}}，使其包含一个 {{ domxref("Node") }} 的内容。

`Range` 的开始和结束节点的父节点（`Node`）即为引用节点。`startOffset` 为 0，`endOffset` 则是引用节点包含的字符数或子节点个数。

## 语法

```js-nolint
selectNodeContents(referenceNode)
```

### 参数

- `referenceNode`
  - : 此{{domxref("Node", "节点", "", 1)}}中的内容会被 {{domxref("Range")}} 选中。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
const range = document.createRange();
const referenceNode = document.querySelector("div");
range.selectNodeContents(referenceNode);
```

### 实时示例

这个例子让用户使用按钮选择或取消选择一个段落。{{domxref("Document.createRange()")}}、`Range.selectNodeContents()` 和 {{domxref("Selection.addRange()")}} 用于选择内容。{{domxref("Window.getSelection()")}} 和 {{domxref("Selection.removeAllRanges()")}} 用于取消选择。

#### HTML

```html
<p id="p"><strong>使用下面的按钮</strong>选择或取消选择本段的内容。</p>
<button id="select-button">选择段落</button>
<button id="deselect-button">取消选择段落</button>
```

#### JavaScript

```js
const p = document.getElementById("p");
const selectButton = document.getElementById("select-button");
const deselectButton = document.getElementById("deselect-button");

selectButton.addEventListener("click", (e) => {
  // 清除当前的任何选择
  const selection = window.getSelection();
  selection.removeAllRanges();

  // 选择段落
  const range = document.createRange();
  range.selectNodeContents(p);
  selection.addRange(range);
});

deselectButton.addEventListener("click", (e) => {
  const selection = window.getSelection();
  selection.removeAllRanges();
});
```

#### 结果

{{EmbedLiveSample("实时示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
