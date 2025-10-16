---
title: NavigatorUAData：brands 属性
slug: Web/API/NavigatorUAData/brands
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

{{domxref("NavigatorUAData")}} 接口的 **`brands`** 只读属性返回一个包含品牌信息的数组。

## 值

一个包含每个品牌如下信息的数组：

- `brand`
  - : 一个包含品牌的字符串。例如，`"Google Chrome"`。
- `version`
  - : 一个包含版本的字符串。例如，`"91"`。

## 示例

以下示例将 `brands` 的值打印到控制台。

```js
console.log(navigator.userAgentData.brands);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Sec-CH-UA")}}（[低熵客户端提示](/zh-CN/docs/Web/HTTP/Guides/Client_hints#低熵提示)）包含相同的信息。
