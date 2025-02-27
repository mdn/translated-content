---
title: NavigatorUAData：mobile 属性
slug: Web/API/NavigatorUAData/mobile
l10n:
  sourceCommit: ea68d8f5b27af9c11247dc7d8115c0cfa6bffd1b
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("NavigatorUAData")}} 接口的 **`mobile`** 只读属性返回一个值，指示设备是否是移动设备。

## 值

一个{{jsxref("Boolean", "布尔值", "", 1)}}，如果设备是移动设备，则为 `true`。

## 示例

以下示例将 `mobile` 的值打印到控制台。

```js
console.log(navigator.userAgentData.mobile);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Sec-CH-UA-Mobile")}} 标头（[低熵客户端提示](/zh-CN/docs/Web/HTTP/Client_hints#低熵提示)）包含相同的信息。
