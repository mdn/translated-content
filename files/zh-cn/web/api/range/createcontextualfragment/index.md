---
title: Range：createContextualFragment() 方法
slug: Web/API/Range/createContextualFragment
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.createContextualFragment()`** 方法返回一个 {{domxref("DocumentFragment")}} ，它通过调用 HTML 片段解析算法 或 XML 片段解析算法来生成，所使用的上下文节点是范围的起始位置（即所选节点的*父*节点）。如果该范围属于一个已设置 HTMLness 位的 `Document`，则会使用 HTML 片段解析算法。在 HTML 的情况下，如果上下文节点是 `html`，出于历史原因，片段解析算法会改为使用 `body` 作为上下文来执行。

## 语法

```js-nolint
createContextualFragment(tagString)
```

### 参数

- `tagString`
  - : 包含要转换为文档片段的文本和标签。

### 返回值

{{domxref("DocumentFragment")}} 对象。

## 示例

```js
const tagString = "<div>我是一个 div 节点</div>";
const range = document.createRange();

// 让文档中第一个 div 元素的父元素成为上下文节点
range.selectNode(document.getElementsByTagName("div").item(0));
const documentFragment = range.createContextualFragment(tagString);
document.body.appendChild(documentFragment);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
