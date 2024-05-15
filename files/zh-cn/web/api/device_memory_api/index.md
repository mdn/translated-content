---
title: 设备内存 API
slug: Web/API/Device_Memory_API
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{DefaultAPISidebar("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers}}

客户端设备的性能在很大程度上取决于可用内存（RAM）的大小。传统上，开发人员必须使用启发式方法，要么对设备进行基准测试，要么根据设备制造商或用户代理字符串等其他参数推断设备的性能。

## 确定设备内存

有两种方法可以确定设备的 RAM 大小：使用设备内存 JavaScript API 或接受客户端提示。

### JavaScript API

你可以通过检索 {{DOMxRef("Navigator.deviceMemory")}} 或 {{DOMxRef("WorkerNavigator.deviceMemory")}} 来查询设备的近似 RAM 的大小。

```js
const RAM = navigator.deviceMemory;
```

### 客户端提示

你也可以使用[客户端提示](/zh-CN/docs/Web/HTTP/Client_hints) HTTP 标头与 `Device-Memory` 指令来检索设备的近似 RAM 大小。

## 接口

### 对其他接口的扩展

- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}}
  - : 返回以 GB 为单位的设备内存的近似大小。
- {{domxref("WorkerNavigator.deviceMemory")}} {{ReadOnlyInline}}
  - : 返回以 GB 为单位的设备内存的近似大小。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Device-Memory")}} 标头
