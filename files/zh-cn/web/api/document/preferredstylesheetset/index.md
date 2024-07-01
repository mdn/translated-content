---
title: Document.preferredStyleSheetSet
slug: Web/API/Document/preferredStyleSheetSet
---

{{APIRef("DOM")}}

**`preferredStyleSheetSet`** 属性会依网页作者的喜好回传阶层样式集。

## 语法

```plain
preferredStyleSheetSet = document.preferredStyleSheetSet
```

`preferredStyleSheetSet` 指的是作者偏好的阶层样式集。内容取决于阶层样式集的次序与 `Default-Style` HTTP 标头内容。

如果作者没有定义偏好的阶层样式集，就会回传空白的 ("") 字符串。

## 范例

```js
if (document.preferredStyleSheetSet) {
  console.log(
    "The preferred style sheet set is: " + document.preferredStyleSheetSet,
  );
} else {
  console.log("There is no preferred style sheet.");
}
```

## 规范

- [HTML5: Alternate Style Sheets](http://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets)

## 浏览器相容性

{{Compat}}

## 参见

- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
