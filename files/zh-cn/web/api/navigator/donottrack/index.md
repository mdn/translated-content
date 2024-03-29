---
title: Navigator：doNotTrack 属性
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}{{non-standard_header}}

**`Navigator.doNotTrack`** 属性是一个只读属性，用于指示用户是否启用了请勿追踪。

该属性的值与 {{httpheader("DNT")}} HTTP 标头一致，即 `"1"`、`"0"` 或 `null` 值。

## 值

字符串或 `null`。

## 示例

```js
console.log(navigator.doNotTrack);
// 如果启用了 DNT，则返回 "1"；如果用户选择加入跟踪，则返回 "0"；否则返回 null。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{httpheader("DNT")}} HTTP 标头
