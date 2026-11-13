---
title: FontFace：loaded 属性
short-title: loaded
slug: Web/API/FontFace/loaded
l10n:
  sourceCommit: 3b7232826ab98368d06ebf8b021886e4a544de93
---

{{APIRef("CSS Font Loading API")}}{{AvailableInWorkers}}

{{domxref("FontFace")}} 接口的 **`loaded`** 只读属性返回一个 {{jsxref('Promise')}}，当该对象构造函数中指定的字体完成加载时，该 promise 将兑现为当前 `FontFace` 对象；如果加载失败，则该 promise 将以 `SyntaxError` 拒绝。

## 值

一个 {{jsxref('Promise')}}，其将兑现为当前 `FontFace` 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
