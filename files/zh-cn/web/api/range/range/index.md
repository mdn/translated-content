---
title: Range()
slug: Web/API/Range/Range
---

{{ APIRef("DOM") }}{{seeCompatTable}}

构造函数 **`Range()`** 返回一个新创建的 {{domxref("Range")}} 对象，新创建的对象属于全局 {{domxref("Document")}} 对象。

## 语法

```
range = new Range()
```

## 示例

在下面的例子中，我们通过构造函数`Range()`创建了一个新的 range，并且使用{{domxref("Range.setStartBefore()")}} 和{{domxref("Range.setEndAfter()")}} 分别设置了起始位置。然后，通过方法{{domxref("window.getSelection()")}}和{{domxref("Selection.addRange()")}}选中了选区 range。

### HTML

```html
<p>First paragraph.</p>
<p>Second paragraph.</p>
<p>Third paragraph.</p>
<p>Fourth paragraph.</p>
```

### JavaScript

```js
const paragraphs = document.querySelectorAll("p");

// 创建 Range 对象
const range = new Range();

// Range 起始位置在段落 2
range.setStartBefore(paragraphs[1]);

// Range 结束位置在段落 3
range.setEndAfter(paragraphs[2]);

// 获取 selection 对象
const selection = window.getSelection();

// 添加光标选择的范围
selection.addRange(range);
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
