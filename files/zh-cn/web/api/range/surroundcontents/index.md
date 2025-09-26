---
title: Range：surroundContents() 方法
slug: Web/API/Range/surroundContents
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ApiRef("DOM")}}

**`Range.surroundContents()`** 方法将 {{ domxref("Range") }} 的内容移动到一个新节点，并将该新节点放置在范围所指定的起始位置。

此方法几乎等同于 `newNode.appendChild(range.extractContents()); range.insertNode(newNode)`。在包围操作之后，`range` 的边界点将包含 `newNode`。

如果 {{ domxref("Range") }} 只用其中一个边界点分割了一个非 {{domxref("Text") }} 节点，则会抛出异常。也就是说，与上述方案不同的是，如果有部分节点被选中，它们将不会被克隆，相反，操作会失败。

## 语法

```js-nolint
surroundContents(newParent)
```

### 参数

- `newParent`
  - : 用于包围内容的 {{ domxref("Node") }}。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### HTML

```html
<span class="header-text">在标题中写道</span>
```

### JavaScript

```js
const range = document.createRange();
const newParent = document.createElement("h1");

range.selectNode(document.querySelector(".header-text"));
range.surroundContents(newParent);
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
