---
title: Selection：removeRange() 方法
slug: Web/API/Selection/removeRange
l10n:
  sourceCommit: 29601e9dc567c497143866aa9c2eca9358e9f449
---

{{ ApiRef("DOM") }}

**`Selection.removeRange()`** 方法用于从当前选区中移除一个范围。

## 语法

```js-nolint
removeRange(range)
```

### 参数

- `range`
  - : 一个将被从选区中移除的 Range 对象。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
/* 在程序层面，可以选中多个范围。
 * 此操作将移除除第一个范围外的所有其他范围。*/
const s = window.getSelection();
if (s.rangeCount > 1) {
  for (let i = 1; i < s.rangeCount; i++) {
    s.removeRange(s.getRangeAt(i));
  }
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属接口：{{domxref("Selection")}}。
