---
title: Navigator.connection
slug: Web/API/Navigator/connection
---

{{APIRef("Network Information API")}}{{SeeCompatTable}}

**`Navigator.connection`** 是只读的，提供一个 {{domxref("NetworkInformation")}} 对象来获取设备的网络连接信息。例如用户设备的当前带宽或连接是否被计量，这可以用于基于用户的连接来选择高清晰度内容或低清晰度内容。

## 语法

```plain
connectionInfo = navigator.connection
```

### 值

返回网络连接状态 NetworkInformation 对象，包括 downlink（网络下行速度）effectiveType（网络类型）onchange（有值代表网络状态变更）rtt（估算的往返时间）saveData（打开/请求数据保护模式）

## 规范

{{Specifications}}

## 浏览器兼容情况

{{Compat}}

## 参考资料

- [Online and offline events](/zh-CN/docs/Online_and_offline_events)
