---
title: Selection：getRangeAt() 方法
short-title: getRangeAt()
slug: Web/API/Selection/getRangeAt
l10n:
  sourceCommit: 7a9bb2446815454a7f905e17e6f4d652c891316a
---

{{ ApiRef("DOM") }}

{{domxref("Selection")}} 接口的 **`getRangeAt()`** 方法会返回一个表示当前选中范围的 Range 对象。

如果所选范围的端点位于某个{{glossary("shadow tree", "影子树")}}中，那么 JavaScript 将无法访问这些影子节点，此方法应当将该范围重新限定为包含该端点的宿主元素。在实际情况下，大多数浏览器尚未实现这一行为，因此返回的范围结果是不可预测的。

> [!NOTE]
> 当在可能包含影子根的节点内进行选择时，可以使用 {{domxref("Selection.getComposedRanges()")}}（如果浏览器支持）来获取位于影子树内的选区范围，或者将选区可靠地重新限定到宿主节点上。

## 语法

```js-nolint
getRangeAt(index)
```

### 参数

- `index`
  - : 要返回的范围的从零开始的索引。如果该数为负数，或大于等于 {{domxref("Selection.rangeCount")}}，将会导致错误。

### 返回值

指定的 {{domxref("Range")}} 对象。

## 示例

```js
let ranges = [];

const sel = window.getSelection();

for (let i = 0; i < sel.rangeCount; i++) {
  ranges[i] = sel.getRangeAt(i);
}
/* ranges 数组中的每一项现在都是一个 range 对象，
 * 用来表示当前选区中的其中一个范围 */
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Selection")}} 接口。
