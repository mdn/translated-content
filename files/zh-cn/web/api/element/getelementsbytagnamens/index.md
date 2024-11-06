---
title: Element.getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
---

{{APIRef("DOM")}}

**`Element.getElementsByTagNameNS()`** 方法返回在指定命名空间内带有指定名称的动态 HTML 元素集合（而不是快照），搜索范围限定于指定元素的后代，类似于{{Domxref("Document.getElementsByTagNameNS")}}。

## 语法

```plain
elements = element.getElementsByTagNameNS(namespaceURI, localName)
```

- `elements` 是匹配元素的动态 HTML 元素集合{{domxref("HTMLCollection")}}，其顺序为遍历树时匹配元素出现的先后。
- `element` 是查找的起始结点，查找范围为该元素的后代，并且不包含该元素自身。
- `namespaceURI` 是所要查询的元素的命名空间 URL (参考 {{domxref("Node.namespaceURI")}}). 举个例子，如果你想查找的是 XHTML 元素，你应该使用 XHTML 的命名空间 URL，`http://www.w3.org/1999/xhtml`。
- `localName` 是所要查询的元素的名称。其中特殊字符 "\*" 代表所有元素 (参考 {{domxref("Node.localName")}}).

## 示例

```js
// 检查一个 XHTML 文档中表格的单元格的对齐方式。
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "td");

for (var i = 0; i < cells.length; i++) {
  var axis = cells[i].getAttribute("axis");
  if (axis == "year") {
    // grab the data
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
