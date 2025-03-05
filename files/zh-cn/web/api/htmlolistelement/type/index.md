---
title: HTMLOListElement：type 属性
slug: Web/API/HTMLOListElement/type
l10n:
  sourceCommit: 23ad4d2736b06fcd07a102ea4719ecfe590c33f5
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLOListElement")}} 接口的 **`type`** 属性用于显示排序列表标记的类型。

它反映了 {{HTMLElement("ol")}} 元素的 [`type`](/zh-CN/docs/Web/HTML/Element/ol#type) 属性。

> **备注：** `type` 可以在 CSS 中使用 {{CSSxRef("list-style-type")}} 属性定义。 `list-style-type` 属性提供更多的值。

## 值

表示类型的字符串。

其可能的值列在属性[标记类型](/zh-CN/docs/Web/HTML/Element/ol#type)部分。

## 示例

### HTML

```html
<ol id="order-list">
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

### JavaScript

```js
const olElement = document.querySelector("#order-list");
// 如果没有指定类型，则返回空字符串
console.log(olElement.type); // 输出：""
olElement.type = "i"; // 使用罗马数字类型
console.log(olElement.type); // 输出："i"
```

### 结果

{{EmbedLiveSample("示例", 400, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
