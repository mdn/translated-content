---
title: Selection：addRange() 方法
short-title: addRange()
slug: Web/API/Selection/addRange
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{ ApiRef("DOM") }}

**`Selection.addRange()`** 方法会向选区（{{domxref("Selection")}}）中添加一个范围（{{domxref("Range")}}）。

## 语法

```js-nolint
addRange(range)
```

### 参数

- `range`
  - : 一个将被添加到 {{domxref("Selection")}} 中的 {{ domxref("Range") }} 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

> [!NOTE]
> 目前只有 Firefox 支持多选区范围；如果选区中已经包含一个范围，其他浏览器将不会向选区中添加新的范围。

### HTML

```html
<p>
  我<strong>坚持</strong>要你<strong>试着</strong>选择这些<strong>加粗的词语</strong>。
</p>
<button>选择加粗的词语</button>
```

### JavaScript

```js
let button = document.querySelector("button");

button.addEventListener("click", () => {
  const selection = window.getSelection();
  const strongElems = document.getElementsByTagName("strong");

  if (selection.rangeCount > 0) {
    selection.removeAllRanges();
  }

  for (const node of strongElems) {
    const range = document.createRange();
    range.selectNode(node);
    selection.addRange(range);
  }
});
```

### 结果

{{EmbedLiveSample("示例")}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 此方法所属的接口：{{domxref("Selection")}}
