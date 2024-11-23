---
title: WorkerNavigator：connection 属性
slug: Web/API/WorkerNavigator/connection
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Network Information API")}}{{AvailableInWorkers("worker")}}

{{domxref("WorkerNavigator")}} 接口的 **`connection`** 只读属性返回一个包含有关系统网络连接信息的 {{domxref("NetworkInformation")}} 对象，例如用户设备的当前带宽或连接是否按流量计费。这可以用于根据用户的连接状态来选择高清晰度内容或低清晰度内容。

## 值

一个 {{domxref("NetworkInformation")}} 对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在线事件和离线事件](/zh-CN/docs/Web/API/Navigator/onLine)
- [网络信息 API](/zh-CN/docs/Web/API/Network_Information_API)
