---
title: HTMLOListElement：start 属性
slug: Web/API/HTMLOListElement/start
l10n:
  sourceCommit: 23ad4d2736b06fcd07a102ea4719ecfe590c33f5
---

{{ApiRef("HTML DOM")}}

{{domxref("HTMLOListElement")}} 接口的 **`start`** 属性表示有序列表的起始值，默认值是 1。

它反映了 {{HTMLElement("ol")}} 元素的 [`start`](/zh-CN/docs/Web/HTML/Reference/Elements/ol#start) 属性。

> [!NOTE]
> `start` 属性值独立于 {{domxref("HTMLOListElement.type")}} 属性；它总是数字，即使当类型是字母或罗马数字。

## 值

`long` 值。

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
console.log(olElement.start); // 输出：“1”
olElement.start = "11";
console.log(olElement.start); // 输出：“11”
```

### 结果

{{EmbedLiveSample("示例", 400, 100)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
