---
title: Navigator.doNotTrack
slug: Web/API/Navigator/doNotTrack
---

{{ApiRef("HTML DOM")}}{{Deprecated_header}}

**`Navigator.doNotTrack`** 属性返回用户的不跟踪（Do Not Track）设置，表示用户是否请求网站和广告商不进行跟踪。

该属性的值反映了 {{httpheader("DNT")}} HTTP 标头的值，例如：`"1"`、`"0"` 或 `"unspecified"`。

## 值

一个数字。

## 示例

```js
console.log(navigator.doNotTrack);
// 若启用了 DNT，则为 "1"；若允许跟踪，则为 "0"；否则为 "unspecified"
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{httpheader("DNT")}} HTTP 标头
