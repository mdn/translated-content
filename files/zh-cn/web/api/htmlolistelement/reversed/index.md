---
title: HTMLOListElement：reversed 属性
slug: Web/API/HTMLOListElement/reversed
l10n:
  sourceCommit: 23ad4d2736b06fcd07a102ea4719ecfe590c33f5
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLOListElement")}} 接口的 **`reversed`** 属性表示列表的顺序。

它反映了 {{HTMLElement("ol")}} 元素的 [`reversed`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#reversed) 属性。

## 值

`boolean` 值。如果是 `true`，表示列表是降序列表（……、3、2、1）。

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
console.log(olElement.reversed); // 输出：“false”
olElement.reversed = "true";
console.log(olElement.reversed); // 输出：“true”
```

### 结果

{{EmbedLiveSample("示例", 400, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
