---
title: Selection：collapse() 方法
short-title: collapse()
slug: Web/API/Selection/collapse
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{ApiRef("DOM")}}

**`Selection.collapse()`** 方法会将当前选区折叠为单个点。文档内容不会被修改。如果当前内容处于可编辑并获得焦点的状态，光标会在该位置闪烁。

> [!NOTE]
> 该方法是 {{domxref("Selection.setPosition()")}} 方法的别名。

## 语法

```js-nolint
collapse(node)
collapse(node, offset)
```

### 参数

- `node`
  - : 光标将位于此节点内。该值也可以设为 `null`——如果为 `null` ，方法行为将与 {{domxref("Selection.removeAllRanges()")}} 相同，即移除选区中的所有范围。
- `offset` {{optional_inline}}
  - : 选区将折叠到 `node` 中的此偏移位置。如果未指定，则使用默认值 `0`。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
// 将光标放置在 HTML 文档 body 的起始位置。
const body = document.querySelector("body");
window.getSelection().collapse(body, 0);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Selection.setPosition()")}}
