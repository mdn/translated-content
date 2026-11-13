---
title: NavigatorUAData：platform 属性
slug: Web/API/NavigatorUAData/platform
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("NavigatorUAData")}} 接口的 **`platform`** 只读属性返回平台的品牌信息。

## 值

一个包含平台品牌的字符串。例如，`"Windows"`。

## 示例

以下示例将 `platform` 的值打印到控制台。

```js
console.log(navigator.userAgentData.platform);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Sec-CH-UA-Platform")}} 标头（[低熵客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#低熵提示)）包含相同的信息。
