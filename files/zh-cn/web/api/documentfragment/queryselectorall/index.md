---
title: DocumentFragment：querySelectorAll() 方法
slug: Web/API/DocumentFragment/querySelectorAll
l10n:
  sourceCommit: f216422c99b6c7014e398803b70600501bce8a48
---

{{ApiRef("DOM")}}

**`DocumentFragment.querySelectorAll()`** 方法会返回一个 {{domxref("NodeList")}}，其中包含 {{domxref("DocumentFragment")}} 内所有匹配指定选择器组的元素（采用文档节点的深度优先的前序遍历方式）。

如果参数中指定的选择器无效，将抛出值为 `SYNTAX_ERR` 的 {{domxref("DOMException")}} 异常。

## 语法

```js-nolint
querySelectorAll(selectors)
```

### 参数

- `selectors`
  - : 包含一个或多个以逗号分隔的 CSS 选择器的字符串。

### 返回值

一个非动态的 {{domxref("NodeList")}}，包含匹配至少一个指定选择器的每个元素对应的 {{domxref("Element")}} 对象；若无匹配项，则返回一个空的 {{domxref("NodeList")}}。

## 示例

此示例会返回 `DocumentFragment` 中所有带有 `note` 或 `alert` 类的 `div` 元素列表：

```js
const matches = documentFrag.querySelectorAll("div.note, div.alert");
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("DocumentFragment")}} 的接口。
