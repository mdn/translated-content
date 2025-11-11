---
title: Beacon API
slug: Web/API/Beacon_API
---

{{DefaultAPISidebar("Beacon")}}

**`Beacon`** API 用于发送异步和非阻塞请求到服务器。这类请求不需要响应。与 {{domxref("XMLHttpRequest")}} 或 [Fetch API](/zh-CN/docs/Web/API/Fetch_API) 请求不同，浏览器会保证在页面卸载前，将信标请求初始化并运行完成。

Beacon API 主要的使用场景是将分析数据发送给服务器，如：客户端事件、会话数据等。在过去，网站使用 {{domxref("XMLHttpRequest")}} 来做这件事，但是浏览器无法保证在某些情况发送这些请求（如：页面将被卸载）。为了解决这个问题，网站采取了各种各样的技术，例如使用同步请求，但是这样对性能造成了很糟糕的影响。因为信标请求是异步的并且保证发送，所以它们结合了良好的性能特征和可靠性。

如需了解 Beacon API 更多的细节和用例，请参考 {{domxref("navigator.sendBeacon()")}} 方法。

> [!NOTE]
> Beacon API 在 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 中是不可用的（没有通过 {{domxref("WorkerNavigator")}} 暴露出来）。

## 接口

Beacon API 定义了一个独立的方法：{{domxref("navigator.sendBeacon()")}}。

该方法接受 2 个参数，URL 和要在请求中发送的数据（data）。data 参数是可选的，其类型可以是 {{jsxref("TypedArray")}}、{{jsxref("DataView")}}、{{domxref("Blob")}}、字符串字面量、普通对象或 {{domxref("FormData")}} 对象。如果浏览器成功地将请求排队交付，则该方法返回“`true`”，否则返回“`false`”。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [信标标准（Beacon standard）](https://w3c.github.io/beacon/)
- [信标 CanIUse 数据](http://caniuse.com/#search=beacon)
- [通过服务程序拦截信标](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers)（Intercepting beacons through service workers）; Ehsan Akhgari; 2015-Apr-08
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- [信标实践](https://calendar.perfplanet.com/2020/beaconing-in-practice/)
