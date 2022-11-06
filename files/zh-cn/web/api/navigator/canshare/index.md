---
title: Navigator.canShare
slug: Web/API/Navigator/canShare
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}{{securecontext_header}}如果对 [`Navigator.share()`](/zh-CN/docs/Web/API/Navigator/share) 的调用成功，则 Web Share API 的 **`Navigator.canShare()`** 方法将返回 true。

## 语法

```plain
var canShare = navigator.canShare(data);
```

### 参数

- `data` {{optional_inline}}
  - : 包含要共享的数据的对象，该对象要与 {{domxref("Navigator.share()")}} 方法传递的数据相匹配。

### 返回值

{{jsxref('Boolean')}}值。{{domxref("Navigator.share()")}} 若返回 True 则表示内容可以被成功分享。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关连接

{{domxref('navigator.share', 'navigator.share()')}}
