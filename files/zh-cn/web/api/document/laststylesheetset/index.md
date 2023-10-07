---
title: Document.lastStyleSheetSet
slug: Web/API/Document/lastStyleSheetSet
---

{{APIRef("DOM")}}{{deprecated_header}}

**`Document.lastStyleSheetSet`** 返回最后一个启用的样式表集合。当 {{domxref("document.selectedStyleSheetSet")}} 属性发生变化时，这个属性的值就会随之发生变化。

## 语法

```
var lastStyleSheetSet = document.lastStyleSheetSet
```

返回时，_lastStyleSheetSet_ 指示最近设置的样式表。如果当前样式表集尚未通过设置更改 {{domxref("document.selectedStyleSheetSet")}}, 则返回值为 `null`。

> **备注：** 当{{domxref("document.enableStyleSheetsForSet()")}} 被执行时，该值不会该变。

## 示例

```js
let lastSheetSet = document.lastStyleSheetSet;

if (!lastSheetSet) {
  lastSheetSet = "Style sheet not yet changed";
} else {
  console.log("The last style sheet set is: " + lastSheetSet);
}
```

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
