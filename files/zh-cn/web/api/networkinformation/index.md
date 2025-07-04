---
title: NetworkInformation
slug: Web/API/NetworkInformation
l10n:
  sourceCommit: 8bb6752a4d3ed3d54ab681636d16602e6bf1d74d
---

{{APIRef("Network Information API")}}{{AvailableInWorkers}}

[网络信息 API](/zh-CN/docs/Web/API/Network_Information_API) 的 **`NetworkInformation`** 接口提供有关设备正在使用的与网络进行通信的连接的信息，并提供了在连接类型发生变化时通知脚本的方法。`NetworkInformation` 接口不能被实例化，而需要通过 {{domxref("Navigator")}} 接口或 {{domxref("WorkerNavigator")}} 接口的 `connection` 属性进行访问。

{{InheritanceDiagram}}

## 实例属性

_此接口也从其父接口 {{domxref("EventTarget")}} 继承属性。_

- {{domxref("NetworkInformation.downlink")}} {{ReadOnlyInline}}
  - : 返回以兆比特每秒为单位的有效带宽估计，四舍五入到最接近的 25 千比特每秒的倍数。
- {{domxref("NetworkInformation.downlinkMax")}} {{ReadOnlyInline}}
  - : 返回底层连接技术的最大下行速度，以兆比特每秒（Mbps）为单位。
- {{domxref("NetworkInformation.effectiveType")}} {{ReadOnlyInline}}
  - : 返回连接的有效类型（意思是“slow-2g”、“2g”、“3g”或“4g”中的一个）。此值是使用最近观察到的往返时间和下行链路值的组合来确定的。
- {{domxref("NetworkInformation.rtt")}} {{ReadOnlyInline}}
  - : 返回当前连接的有效往返时间估计，四舍五入到最接近的 25 毫秒的倍数。
- {{domxref("NetworkInformation.saveData")}} {{ReadOnlyInline}}
  - : 如果用户在用户代理上设置了减少数据使用的选项，则返回 `true`。
- {{domxref("NetworkInformation.type")}} {{ReadOnlyInline}}
  - : 返回设备用于网络通信的连接类型。它会是以下值之一：
    - `bluetooth`
    - `cellular`
    - `ethernet`
    - `none`
    - `wifi`
    - `wimax`
    - `other`
    - `unknown`

## 实例方法

_此接口也从其父接口 {{domxref("EventTarget")}} 继承方法。_

## 事件

- {{domxref("NetworkInformation.change_event", "change")}}
  - : 在连接信息发生变化时触发的事件。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在线事件和离线事件](/zh-CN/docs/Web/API/Navigator/onLine)
