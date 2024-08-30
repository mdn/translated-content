---
title: DocumentFragment.querySelectorAll()
slug: Web/API/DocumentFragment/querySelectorAll
---

{{ApiRef("DOM")}}

DocumentFragment.queryselectorall() 方法返回{{domxref("NodeList")}}中的元素{{domxref("DocumentFragment")}}(使用文档节点的深度优先顺序遍历) 匹配指定的选择器组。

如果参数中指定的选择器无效，则会引发一个带 SYNTAX_ERR 值的{{domxref("DOMException")}}。

> [!NOTE]
> 这个 API 的定义被移动到{{domxref("ParentNode")}}接口。

## 语法

```js-nolint
querySelectorAll(selectors)
```

### 参数

- _selectors_
  - : 是一个{{domxref("DOMString")}}包含一个或多个用逗号分隔的 CSS 选择器。

## 示例

此示例返回 DocumentFragment 中所有 div 元素的列表，其中包含一个类“note”或“alert”:

```js
var matches = documentfrag.querySelectorAll("div.note, div.alert");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- 它所属的{{domxref("DocumentFragment")}}接口。
