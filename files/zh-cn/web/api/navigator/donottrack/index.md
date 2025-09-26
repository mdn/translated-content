---
title: Navigator：doNotTrack 属性
slug: Web/API/Navigator/doNotTrack
l10n:
  sourceCommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}{{non-standard_header}}

**`Navigator.doNotTrack`** 属性返回用户的请勿追踪设置，该设置指示用户是否请求网站和广告商不要追踪他们。

该属性的值反映了 {{httpheader("DNT")}} HTTP 标头的值，即 `"1"`、`"0"` 或 `null` 值。

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
