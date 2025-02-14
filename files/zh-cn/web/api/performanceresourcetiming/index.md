---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceResourceTiming`** 接口允许检索和分析应用程序资源加载的详细网络计时数据。应用程序可以使用这些 timing 指标来确定获取特定资源所需的时间长度(如 {{domxref("XMLHttpRequest")}}、{{SVGElement("SVG","SVG element")}}、Image 或 Script)所需的时间。

{{InheritanceDiagram}}

## 描述

这个接口使用 high-resolution timestamps 属性创建加载资源时间线，用于网络事件，例如重定向开始 ( redirect start ) 和结束时间, 获取开始 ( fetch start )，DNS 查找开始 ( DNS lookup start ) 和结束时间，响应开始 ( response start ) 和结束时间等。此外，接口扩展了 {{domxref("PerformanceEntry")}} 和其他属性，这些属性提供有关获取资源大小的数据以及初始化时获取的资源类型。

### 经典的资源加载计时指标

该接口的属性允许你计算某些资源计时指标。常见用例包括:

- 计算 TCP 连接耗时: `connectEnd` - `connectStart`
- 计算 DNS 查询耗时: `domainLookupEnd` - `domainLookupStart`
- 计算重定向时间: `redirectEnd` - `redirectStart`
- 计算临时请求响应耗时: `firstInterimResponseStart` - `finalResponseHeadersStart`
- 计算请求响应耗时: `responseStart` - `requestStart`
- 计算 SSL 安全连接耗时: `requestStart` - `secureConnectionStart`
- 计算 Fetch 时间(不包括重定向): `responseEnd` - `fetchStart`
- 计算 ServiceWorker 处理时间: `fetchStart` - `workerStart`
- 检查内容是否被压缩: `decodedBodySize` != `encodedBodySize`
- 检查是否命中本地缓存: `transferSize` = `0`
- 检查是否使用了现代和快速的协议: `nextHopProtocol` 应该是 HTTP/2 或 HTTP/3
- 检查正确的资源是否阻止渲染 (`renderBlockingStatus`)

## 属性

### Inherited from `PerformanceEntry`

此接口通过限定和约束{{domxref("PerformanceEntry")}}属性来扩展资源性能条目类型，如下所示：

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : 返回 {{domxref("DOMHighResTimeStamp","timestamp")}} ，它是 {{domxref("PerformanceResourceTiming.responseEnd","responseEnd")}} 和 {{domxref("PerformanceEntry.startTime","startTime")}} 属性之间的差异。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : 返回 `"resource"`.
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : 返回 resource's URL.
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : 返回资源获取开始时的 {{domxref("DOMHighResTimeStamp","timestamp")}} 。该值等同于 {{domxref("PerformanceResourceTiming.fetchStart")}}。

### 时间戳

该接口支持以下时间戳属性, 您可以在图表中看到这些属性, 并且它们按照资源获取时记录的顺序列出。按字母顺序排列的列表显示在左侧导航栏中。

![按获取文档时记录的时间戳顺序排列的时间戳图](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- {{domxref('PerformanceResourceTiming.redirectStart')}} {{ReadOnlyInline}}
  - : 表示初始重定向的开始获取时间的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.redirectEnd')}} {{ReadOnlyInline}}
  - : 表示在接收到最后一个重定向响应的最后一个字节后的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.workerStart')}} {{ReadOnlyInline}}
  - : 如果 Service Worker 线程已在运行, 则在调用 {{domxref("FetchEvent")}} 之前的 {{domxref("DOMHighResTimeStamp")}}；如果 Service Worker 线程尚未在运行, 则在启动 Service Worker 线程之前返回的 {{domxref("DOMHighResTimeStamp")}}。如果资源未被 Service Worker 拦截, 该属性将始终返回 0。
- {{domxref('PerformanceResourceTiming.fetchStart')}} {{ReadOnlyInline}}
  - : 表示浏览器即将开始获取资源之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.domainLookupStart')}} {{ReadOnlyInline}}
  - : 表示浏览器即将开始为资源进行域名查找之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.domainLookupEnd')}} {{ReadOnlyInline}}
  - : 表示浏览器刚刚完成资源的域名查找之后的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.connectStart')}} {{ReadOnlyInline}}
  - : 表示浏览器即将开始与服务器建立连接以检索资源之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.secureConnectionStart')}} {{ReadOnlyInline}}
  - : 表示浏览器即将开始握手过程以保护当前连接之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.connectEnd')}} {{ReadOnlyInline}}
  - : 表示浏览器刚刚完成与服务器建立连接以检索资源之后的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.requestStart')}} {{ReadOnlyInline}}
  - : 表示浏览器开始从服务器请求资源之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.firstInterimResponseStart')}} {{experimental_inline}} {{ReadOnlyInline}}
  - : 表示中间响应时间 (例如,100 Continue 或 103 Early Hints) 的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.responseStart')}} {{ReadOnlyInline}}
  - : 表示浏览器接收到来自服务器的响应的第一个字节 (可能是中间响应) 之后后的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.finalResponseHeadersStart')}} {{experimental_inline}} {{ReadOnlyInline}}
  - : 表示最终头部响应时间 (例如, 200 Success) 的 {{domxref("DOMHighResTimeStamp")}}, 在任何中间响应时间之后。
- {{domxref('PerformanceResourceTiming.responseEnd')}} {{ReadOnlyInline}}
  - : 表示浏览器接收到资源的最后一个字节后或紧接在传输连接关闭前 (以先发生者为准) 的 {{domxref("DOMHighResTimeStamp")}}。

### 附加资源信息

此外, 该接口还公开了以下包含有关资源更多信息的属性:

- {{domxref("PerformanceResourceTiming.contentType")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 表示获取资源 MIME-type 最小化和标准化版本
- {{domxref('PerformanceResourceTiming.decodedBodySize')}} {{ReadOnlyInline}}
  - : 表示在删除任何应用的内容编码之后，从消息正文 ( message body ) 的提取（HTTP 或缓存）接收的大小（以八位字节为单位）的`数字`。
- {{domxref("PerformanceResourceTiming.deliveryType")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : 表示资源获取的方式 — 例如,从缓存或从预请求。
- {{domxref('PerformanceResourceTiming.encodedBodySize')}} {{ReadOnlyInline}}
  - : 表示在删除任何应用的内容编码之前，从 payload body 的提取（HTTP 或高速缓存）接收的大小（以八位字节为单位）的`数字`。
- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : 表示初始化性能条目的资源类型，如{{domxref('PerformanceResourceTiming.initiatorType')}}中所规定
- {{domxref('PerformanceResourceTiming.nextHopProtocol')}} {{ReadOnlyInline}}
  - : 表示用于获取资源的网络协议,由 [ALPN Protocol ID (RFC7301)](https://datatracker.ietf.org/doc/html/rfc7301) 标识。
- {{domxref('PerformanceResourceTiming.renderBlockingStatus')}} {{ReadOnlyInline}}
  - : 表示渲染阻塞状态。可能的值为 `"blocking"` 或 `"non-blocking"`。
- {{domxref('PerformanceResourceTiming.responseStatus')}} {{ReadOnlyInline}}
  - : 表示获取资源时返回的 HTTP 响应状态码的数字。
- {{domxref('PerformanceResourceTiming.transferSize')}} {{ReadOnlyInline}}
  - : 表示获取资源的大小（以八位字节为单位）的数字。包括响应头字段和响应 payload body 的大小。
- {{domxref('PerformanceResourceTiming.serverTiming')}} {{ReadOnlyInline}}
  - : 包含服务器 timing metrics 的 {{domxref("PerformanceServerTiming")}} 条目数组。

## 方法

- {{domxref("PerformanceResourceTiming.toJSON()")}}
  - 返回 `PerformanceResourceTiming` 对象的 JSON 内容。

## 示例

### 记录资源耗时信息

以下示例使用 {{domxref("PerformanceObserver")}} ，当新的 `resource` 性能条目记录在浏览器的性能时间线中时，它会发出通知。使用 `buffered` 选项可以访问在观察器创建之前的条目。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(entry);
  });
});

observer.observe({ type: "resource", buffered: true });
```

以下示例使用 {{domxref("Performance.getEntriesByType()")}}，它仅显示在调用此方法时浏览器性能时间线中存在的 `resource` 性能条目：

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(entry);
});
```

## 安全性

### 跨源计时信息

当资源是跨域请求时, 许多资源计时属性被限制为返回 `0` 或空字符串。要公开跨源计时信息,需要设置 {{HTTPHeader("Timing-Allow-Origin")}} HTTP 响应头。

例如, 允许 `https://developer.mozilla.org` 查看资源计时信息, 跨源资源应发送:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Resource timing (概述)](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
