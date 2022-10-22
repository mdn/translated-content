---
title: NetworkInformation
slug: Web/API/NetworkInformation
---

{{APIRef("Network Information API")}}{{SeeCompatTable}}

**`NetworkInformation`** 提供有关设备正在使用的连接与网络进行通信的信息，并提供了在连接类型更改时通知脚本的事件。`NetworkInformation` 接口不能被是实例化，而是通过 {{domxref("Navigator")}} 的 `connection` 属性进行访问。

{{AvailableInWorkers}}

## Properties

_这些属性接口继承自 {{domxref("EventTarget")}}._

- {{domxref("NetworkInformation.type")}} {{readonlyinline}}

  - : 返回设备正在与网络进行通信的连接类型。它将是以下值之一：

    - `bluetooth`
    - `cellular`
    - `ethernet`
    - `none`
    - `wifi`
    - `wimax`
    - `other`
    - `unknown`

- {{domxref("NetworkInformation.downlinkMax")}} {{readonlyinline}}
  - : 返回基础连接技术的最大下载速度（Mbps）。

### Event handlers

- {{domxref("NetworkInformation.onchange")}}
  - : 当连接信息更改并在此对象上触发更改时触发的 {{event("change")}} 。

## Methods

_这些属性接口同样继承自 {{domxref("EventTarget")}}._

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Network Information API](/zh-CN/docs/Web/API/Network_Information_API)
- [Online and offline events](/zh-CN/docs/Online_and_offline_events)
- The {{domxref("Navigator")}} interface that implements it.
