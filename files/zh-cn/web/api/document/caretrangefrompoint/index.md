---
title: Document：caretRangeFromPoint() 方法
slug: Web/API/Document/caretRangeFromPoint
---

{{APIRef("DOM")}}{{Non-standard_header}}

{{domxref("Document")}} 接口的 **`caretRangeFromPoint()`** 方法返回指定坐标位置文档片段的 {{domxref("Range")}} 对象。

该方法是 {{domxref("Document.caretPositionFromPoint")}} 方法的 WebKit 专有实现。

## 语法

```js-nolint
caretRangeFromPoint(x, y)
```

### 参数

- `x`
  - : 当前视口内的水平位置。
- `y`
  - : 当前视口内的垂直位置。

### 返回值

以下之一：

- 一个 {{domxref("Range")}}。
- `Null`，当 _x_ 或 _y_ 为负数，超出视口范围或者没有包含文本的节点。

## 示例

访问 {{domxref("Document.caretPositionFromPoint#示例", "Document.caretPositionFromPoint")}} 页面查看此方法的实时示例。

## 浏览器兼容性

{{Compat}}
