---
title: WindowClient：navigate() 方法
short-title: navigate()
slug: Web/API/WindowClient/navigate
l10n:
  sourceCommit: 2ef36a6d6f380e79c88bc3a80033e1d3c4629994
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

{{domxref("WindowClient")}} 接口的 **`navigate()`** 方法会将指定的 URL 加载到受控的客户端页面中，然后返回一个 {{jsxref("Promise")}}，其兑现为现有的 {{domxref("WindowClient")}}。

## 语法

```js-nolint
navigate(url)
```

### 参数

- `url`
  - : 要导航到的位置。

### 返回值

如果该 URL 与 service worker 同源，则返回一个兑现为现有 {{domxref("WindowClient")}} 的 {{jsxref("Promise")}}；否则返回 {{jsxref("Operators/null", "null")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
