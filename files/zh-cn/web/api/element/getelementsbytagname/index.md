---
title: element.getElementsByTagName
slug: Web/API/Element/getElementsByTagName
---

{{ APIRef("DOM") }}

**`Element.getElementsByTagName()`** 方法返回一个动态的包含所有指定标签名的元素的 HTML 集合{{domxref("HTMLCollection")}}。指定的元素的子树会被搜索，不包括元素自己。返回的列表是动态的，这意味着它会随着 DOM 树的变化自动更新自身。所以，使用相同元素和相同参数时，没有必要多次的调用`Element.getElementsByTagName()` .

如果是 HTML 文档中的某个元素调用了`getElementsByTagName 函数，` 运行前会将参数转为小写字母形式。故不建议在驼峰式命名的 SVG 元素中使用。 {{ domxref("Element.getElementsByTagNameNS()") }} 适用于那种情况。

`Element.getElementsByTagName` 和 {{domxref("Document.getElementsByTagName()")}}类似，除了它的搜索被限制为指定元素的后代。

## 语法

```plain
elements = element.getElementsByTagName(tagName)
```

- `elements` 搜索到的元素的动态 HTML 集合 {{domxref("HTMLCollection")}}，它们的顺序是在子树中出现的顺序。如果没有搜索到元素则这个集合为空。
- `element` 搜索从 element 开始。请注意只有 element 的后代元素会被搜索，不包括元素自己。
- `tagName` 要查找的限定名。字符 `"*"` 代表所有元素。考虑到兼容 XHTML，应该使用小写。

## 实例

```js
// check the alignment on a number of cells in a table.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagName("td");
for (var i = 0; i < cells.length; i++) {
  var status = cells[i].getAttribute("data-status");
  if (status == "open") {
    // grab the data
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
