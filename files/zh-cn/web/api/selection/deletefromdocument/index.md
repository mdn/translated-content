---
title: Selection：deleteFromDocument() 方法
short-title: deleteFromDocument()
slug: Web/API/Selection/deleteFromDocument
l10n:
  sourceCommit: 860cbd30a1ea3812c51f60a341f856e7d5426efb
---

{{ ApiRef("DOM") }}

{{domxref("Selection")}} 接口的 **`deleteFromDocument()`** 方法会在当前选中的 {{domxref("Range")}} 上调用 {{domxref("Range.deleteContents()")}} 方法。

## 语法

```js-nolint
deleteFromDocument()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

此示例允许你通过点击按钮删除选中的文本或节点。点击按钮时，{{domxref("Window.getSelection()")}} 方法会获取选中的内容，而 `deleteFromDocument()` 方法会将其移除。

### HTML

```html
<p>尝试选中这些段落中的一些内容。</p>
<p>选中后，你可以点击下面的按钮来删除选中的内容。</p>
<h2>所有选中的文本/节点都会被删除。</h2>
<button>删除选中的文本</button>
```

### JavaScript

```js
let button = document.querySelector("button");
button.addEventListener("click", deleteSelection);

function deleteSelection() {
  let selection = window.getSelection();
  selection.deleteFromDocument();
}
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的 {{domxref("Selection")}} 接口。
