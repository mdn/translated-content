---
title: Document.selectedStyleSheetSet
slug: Web/API/Document/selectedStyleSheetSet
---

{{ APIRef("DOM") }}

表示当前使用的样式表集合的名称

## 语法

```
currentStyleSheetSet = document.selectedStyleSheetSet

document.selectedStyleSheet = newStyleSheetSet
```

返回时，currentStyleSheetSet 表示当前使用的样式表集合的名称。你也可以使用这个属性设置当前样式表集。

设置这个属性的值相当于用`currentStyleSheetSet 的值`调用 {{ domxref("document.enableStyleSheetsForSet()") }}，然后将`lastStyleSheetSet` 的值设置为该值。

> **备注：** 这个属性的值是实时的，直接更改样式表中的`disabled`属性将会影响这个属性的值。

## 示例

```js
console.log("Current style sheet set: " + document.selectedStyleSheetSet);

document.selectedStyleSheetSet = "Some other style sheet";
```

> **备注：**  这个例子会帮助你理解设置 `selectedStyleSheetSet` 的值和调用{{ domxref("document.enableStyleSheetsForSet()") }}之间行为的差异。

## 参看

- {{ domxref("document.lastStyleSheetSet") }}
- {{ domxref("document.preferredStyleSheetSet") }}
- {{ domxref("document.styleSheetSets") }}
- {{ domxref("document.enableStyleSheetsForSet()") }}

## 规范

- [HTML5: Alternate Style Sheets](http://www.whatwg.org/specs/web-apps/current-work/#alternate-style-sheets)
