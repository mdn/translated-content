---
title: Beacon API
slug: Web/API/Beacon_API
---

{{DefaultAPISidebar("Beacon")}}{{SeeCompatTable}}

**`Beacon`** 接口用于将异步和非阻塞请求发送到服务器。信标（Beacon）请求使用 HTTP 协议中的 POST 方法，请求通常不需要响应。这个请求被保证在，页面的**unload**状态从发起到完成之前，被发送。而并不需要一个阻塞请求，例如 {{domxref("XMLHttpRequest")}} 。

Beacon API 的示例用例是记录活动并向服务器发送分析数据。

本文档中描述的接口的示例代码包含在[使用信标 API](/zh-CN/docs/Web/API/Beacon_API/Using_the_Beacon_API) 中。

## 为什么是信标？

`Beacon` 接口满足了分析和诊断代码的需要，这些代码通常会尝试在卸载文档之前将数据发送到 web 服务器。发送数据的任何过早时机都可能导致错失收集数据的机会。但是，确保在卸载文档期间发送数据是开发人员难以做到的。

用户代理通常会忽略卸载文档处理程序中的异步 {{domxref("XMLHttpRequest","XMLHttpRequests")}} 请求。若要解决此问题，为了分析和诊断代码，通常会在 {{event("unload")}} 事件或 {{event("beforeunload")}} 事件中创建同步 {{domxref("XMLHttpRequest")}} 请求以提交数据。同步 {{domxref("XMLHttpRequest")}} 请求强制浏览器延迟卸载文档，并使下一个页面跳转看起来较慢。下一页面没有任何办法来避免这种页面加载性能不佳的感觉。

其他技术也可以用来确保提交数据。其中一种技术是通过创建 Image 元素并在卸载文档处理程序中设置其 `src` 属性来延迟卸载以提交数据。由于大多数用户代理会延迟文档卸载，以完成挂起的图片加载，因此可以在卸载过程中提交数据。另一种方法是在卸载处理程序中创建一个无操作循环，花费数秒以延迟卸载并将数据提交到服务器。

但是上述技术不仅代表了较差的编码模式，其中一些还是不可靠的，会导致下一个导航的页面加载性能较差的感觉。信标 API 提供了解决这些问题的标准方法。

## 全局环境

`Beacon` API 的 {{domxref("Navigator.sendBeacon()")}} 方法用于在*全局浏览上下文*中向服务器发送*数据信标*。该方法有两个参数，URL 和要在请求中发送的数据 data。data 参数是可选的，其类型可以是 {{domxref("ArrayBufferView")}}、{{domxref("Blob")}}、{{domxref("DOMString")}} 或{{domxref("FormData")}}。如果浏览器成功的以队列形式排列了用于传递的请求，则该方法返回“`true`”，否则返回“`false`”。

## 生产环境

`Beacon` API 的 {{domxref("WorkerNavigator.sendBeacon()")}} 方法用于从 _{{domxref("WorkerGlobalScope","worker global scope")}}_ 向服务器发送*数据信标*。该方法有两个参数，URL 和要在请求中发送的数据 data。data 参数是可选的，其类型可以是 {{domxref("ArrayBufferView")}}、{{domxref("Blob")}}、{{domxref("DOMString")}} 或 {{domxref("FormData")}}。如果浏览器成功的以队列形式排列了用于传递的请求，则该方法返回“`true`”，否则返回“`false`”。

## 浏览器兼容性

{{domxref("Navigator.sendBeacon","Navigator.sendBeacon()","Browser_compatibility")}}表说明了该方法具有相对广泛地实现。但是，{{domxref("WorkerNavigator.sendBeacon","WorkerNavigator.sendBeacon()","Browser_compatibility")}}数据显示该方法没有被实现。

## 相关知识

- {{domxref("WorkerGlobalScope")}}
- [信标标准（Beacon standard）](https://w3c.github.io/beacon/)
- [信标 CanIUse 数据](http://caniuse.com/#search=beacon)
- [通过服务程序拦截信标](https://ehsanakhgari.org/blog/2015-04-08/intercepting-beacons-through-service-workers)（Intercepting beacons through service workers）; Ehsan Akhgari; 2015-Apr-08
- <https://webkit.org/blog/8821/link-click-analytics-and-privacy/>
- <https://davidwalsh.name/ping-attribute>
