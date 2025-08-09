---
title: Range：Range() 构造函数
slug: Web/API/Range/Range
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

**`Range()`** 构造函数返回一个新创建的 {{domxref("Range")}} 对象，其起始点和结束点是全局 {{domxref("Document")}} 对象。

## 语法

```js-nolint
new Range()
```

### 参数

无。

## 示例

在这个示例中，我们使用 `Range()` 构造函数创建一个新的范围，并通过 {{domxref("Range.setStartBefore()")}} 和 {{domxref("Range.setEndAfter()")}} 方法设置其起始和结束位置。然后我们使用 {{domxref("window.getSelection()")}} 和 {{domxref("Selection.addRange()")}} 方法选择该范围。

### HTML

```html
<p>第一段。</p>
<p>第二段。</p>
<p>第三段。</p>
<p>第四段。</p>
```

### JavaScript

```js
const paragraphs = document.querySelectorAll("p");

// 创建新的范围
const range = new Range();

// 从第二个段落开始设置范围
range.setStartBefore(paragraphs[1]);

// 将范围结束于第三个段落
range.setEndAfter(paragraphs[2]);

// 获取窗口的选择范围
const selection = window.getSelection();

// 将范围添加到窗口的选择范围中
selection.addRange(range);
```

### 结果

{{EmbedLiveSample("示例", 400, 210)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
- {{domxref("Document.createRange()")}}
