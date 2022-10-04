---
title: Range.selectNodeContents()
slug: Web/API/Range/selectNodeContents
---

{{ApiRef("DOM")}}

**`Range.selectNodeContents()`** 方法用于设置 {{ domxref("Range") }}，使其包含一个 {{ domxref("Node") }} 的内容。

{{ domxref("Range") }} 的起始和结束节点的父节点即为引用节点。 `startOffset` 为 0, `endOffset` 则是引用节点包含的字符数或子节点个数。

## 语法

```
range.selectNodeContents(referenceNode);
```

### 参数

- _referenceNode_
  - : 此 {{ domxref("Node") }} 中的内容被包含在 {{ domxref("Range") }} 中。

## 示例

```js
range = document.createRange();
referenceNode = document.getElementsByTagName("div")[0];
range.selectNodeContents(referenceNode);
```

### 实时样例

这个例子让用户使用按钮选择或取消选择一个段落。{{domxref("Document.createRange()")}}、 `Range.selectNodeContents()` 和 {{domxref("Selection.addRange()")}} 用于选择内容。{{domxref("Window.getSelection()")}} 和 {{domxref("Selection.removeAllRanges()")}} 用于取消选择。

#### HTML

```
<p id="p"><b>Use the buttons below</b> to select or deselect the contents of this paragraph.</p>
<button id="select-button">Select paragraph</button>
<button id="deselect-button">Deselect paragraph</button>
```

#### JavaScript

```
const p = document.getElementById('p');
const selectButton = document.getElementById('select-button');
const deselectButton = document.getElementById('deselect-button');

selectButton.addEventListener('click', e => {
  // Clear any current selection
  const selection = window.getSelection();
  selection.removeAllRanges();

  // Select paragraph
  const range = document.createRange();
  range.selectNodeContents(p);
  selection.addRange(range);
});

deselectButton.addEventListener('click', e => {
  const selection = window.getSelection();
  selection.removeAllRanges();
});
```

#### 结果

{{EmbedLiveSample("Live_sample")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
