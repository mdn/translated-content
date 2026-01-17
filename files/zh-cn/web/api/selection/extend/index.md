---
title: Selection：extend() 方法
short-title: extend()
slug: Web/API/Selection/extend
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{ ApiRef("DOM") }}

**`Selection.extend()`** 方法会将选区的焦点移动到指定的位置。选区的锚点不会发生改变。无论方向如何，最终形成的选区范围都是从锚点到新的焦点。

## 语法

```js-nolint
extend(node)
extend(node, offset)
```

### 参数

- `node`
  - : 要将选区焦点移动到的节点。
- `offset` {{optional_inline}}
  - : 在 `node` 中将焦点移动到的偏移位置。如果未指定，则使用默认值 `0`。

### 返回值

无（{{jsxref("undefined")}}）。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Selection")}} 接口。
