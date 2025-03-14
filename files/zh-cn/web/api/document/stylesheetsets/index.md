---
title: Document：styleSheetSets 属性
slug: Web/API/Document/styleSheetSets
---

{{APIRef("DOM")}}{{deprecated_header}}{{Non-standard_header}}

**`styleSheetSets`** 只读属性返回一个所有当前可用样式表集合的实时列表。

## 值

一个可用的样式表集合的列表。

## 示例

给定一个 ID 为“sheetList”的 {{HTMLElement("ul")}}（列表）元素，你可以使用下面的代码将所有可用样式表集合的名称填充到列表中：

```js
const list = document.getElementById("sheetList");
const sheets = document.styleSheetSets;

list.textContent = "";

for (const sheet of sheets) {
  const item = document.createElement("li");
  item.textContent = sheet;
  list.appendChild(item);
}
```

## 备注

可用样式表集合的列表是通过以下方式构建的：按照文档中所有可用的样式表在 {{domxref("Document.styleSheets")}} 属性中列出的顺序枚举，并将每个具有标题的样式表的 `title` 添加到列表中。列表中的重复项将被删除（使用区分大小写的比较）。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Stylesheet")}}
- {{domxref("document.styleSheets")}}
- {{domxref("document.lastStyleSheetSet")}}
- {{domxref("document.preferredStyleSheetSet")}}
- {{domxref("document.selectedStyleSheetSet")}}
- {{domxref("document.enableStyleSheetsForSet()")}}
