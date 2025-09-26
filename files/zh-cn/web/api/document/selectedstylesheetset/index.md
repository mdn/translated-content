---
title: Document：selectedStyleSheetSet 属性
slug: Web/API/Document/selectedStyleSheetSet
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

**`selectedStyleSheetSet`** 属性表示当前使用的样式表集合的名称。

## 值

当前使用的样式表集合的名称。你也可以使用这个属性设置当前样式表集合。

设置这个属性的值等价于用 `currentStyleSheetSet` 的值调用 {{domxref("document.enableStyleSheetsForSet()")}}，然后将 `lastStyleSheetSet` 的值设置为该值。

> [!NOTE]
> 这个属性的值是实时的，直接更改样式表中的 `disabled` 属性将会影响这个属性的值。

## 示例

```js
console.log(`当前样式表集合：${document.selectedStyleSheetSet}`);

document.selectedStyleSheetSet = "其他的某些样式表";
```

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.styleSheetSets")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
