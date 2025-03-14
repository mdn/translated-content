---
title: WorkerNavigator：userAgentData 属性
slug: Web/API/WorkerNavigator/userAgentData
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerNavigator")}} 接口的 **`userAgentData`** 只读属性返回一个 {{domxref("NavigatorUAData")}} 对象，其可用于访问{{domxref("User-Agent Client Hints API", "用户代理客户端提示 API", "", "nocode")}}。

## 值

一个 {{domxref("NavigatorUAData")}} 对象。

## 示例

以下示例将 {{domxref("NavigatorUAData.brands")}} 的值打印到控制台。

```js
console.log(navigator.userAgentData.brands);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [利用用户代理客户端提示改善用户隐私并提升开发者体验](https://developer.chrome.google.cn/docs/privacy-security/user-agent-client-hints)
