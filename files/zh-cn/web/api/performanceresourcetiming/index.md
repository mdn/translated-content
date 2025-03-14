---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
l10n:
  sourceCommit: db12ba7455d1897dc1ff5f5c1dbe36f6e2720805
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceResourceTiming`** 接口允许检索和分析应用程序资源加载的详细网络计时数据。应用程序可以使用这些计时指标来确定获取特定资源（如 {{domxref("XMLHttpRequest")}}、{{SVGElement("SVG","SVG 元素")}}、图像或脚本）所需的时间。

{{InheritanceDiagram}}

## 描述

此接口的属性使用高分辨率时间戳创建网络事件的资源加载时间线，例如重定向开始和结束时间、获取（fetch）开始、DNS 查询开始和结束时间、响应开始和结束时间等。此外，接口使用其他属性扩展了 {{domxref("PerformanceEntry")}}，这些属性提供有关获取资源的大小以及初始化时获取的资源类型的数据。

### 经典的资源加载计时指标

该接口的属性允许你计算某些资源计时指标。常见用例包括：

- 计算 TCP 握手耗时（`connectEnd` - `connectStart`）
- 计算 DNS 查询耗时（`domainLookupEnd` - `domainLookupStart`）
- 计算重定向时间（`redirectEnd` - `redirectStart`）
- 计算临时请求耗时（`firstInterimResponseStart` - `finalResponseHeadersStart`）
- 计算请求耗时（`responseStart` - `requestStart`）
- 计算 TLS 协商耗时（`requestStart` - `secureConnectionStart`）
- 计算获取请求（fetch）的时间（不包括重定向）（`responseEnd` - `fetchStart`）
- 计算 ServiceWorker 处理时间（`fetchStart` - `workerStart`）
- 检查内容是否被压缩（`decodedBodySize` 不应该是 `encodedBodySize`）
- 检查是否命中本地缓存（`transferSize` = `0`）
- 检查是否使用了现代和快速的协议（`nextHopProtocol` 应该是 HTTP/2 或 HTTP/3）
- 检查正确的资源是否阻止渲染（`renderBlockingStatus`）

## 属性

### 继承自 `PerformanceEntry`

此接口通过限定和约束以下 {{domxref("PerformanceEntry")}} 属性来扩展资源性能条目类型：

- {{domxref("PerformanceEntry.duration")}} {{ReadOnlyInline}}
  - : 返回表示 {{domxref("PerformanceResourceTiming.responseEnd","responseEnd")}} 和 {{domxref("PerformanceEntry.startTime","startTime")}} 属性之差的 {{domxref("DOMHighResTimeStamp","timestamp")}}。
- {{domxref("PerformanceEntry.entryType")}} {{ReadOnlyInline}}
  - : 返回 `"resource"`。
- {{domxref("PerformanceEntry.name")}} {{ReadOnlyInline}}
  - : 返回资源的 URL。
- {{domxref("PerformanceEntry.startTime")}} {{ReadOnlyInline}}
  - : 返回资源获取开始时的 {{domxref("DOMHighResTimeStamp","timestamp")}}。该值等同于 {{domxref("PerformanceResourceTiming.fetchStart")}}。

### 时间戳

该接口支持以下时间戳属性，可以在图表中看到这些属性，并且它们按照资源获取时记录的顺序列出。按字母顺序排列的列表显示在左侧导航栏中。

![按获取资源时记录的时间戳顺序排列的时间戳图](https://mdn.github.io/shared-assets/images/diagrams/api/performance/timestamp-diagram.svg)

- {{domxref('PerformanceResourceTiming.redirectStart')}} {{ReadOnlyInline}}
  - : 表示发起重定向的获取的开始时间的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.redirectEnd')}} {{ReadOnlyInline}}
  - : 表示在接收到最后一个重定向响应的最后一个字节后的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.workerStart')}} {{ReadOnlyInline}}
  - : 如果 Service Worker 线程已在运行，则返回在派发 {{domxref("FetchEvent")}} 之前的 {{domxref("DOMHighResTimeStamp")}}；如果 Service Worker 线程尚未在运行，则返回在启动 Service Worker 线程之前的 {{domxref("DOMHighResTimeStamp")}}。如果资源未被 Service Worker 拦截，该属性将始终返回 0。
- {{domxref('PerformanceResourceTiming.fetchStart')}} {{ReadOnlyInline}}
  - : 表示浏览器即将开始获取资源之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.domainLookupStart')}} {{ReadOnlyInline}}
  - : 表示浏览器即将开始为资源进行域名查询之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.domainLookupEnd')}} {{ReadOnlyInline}}
  - : 表示浏览器刚刚完成资源的域名查询之后的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.connectStart')}} {{ReadOnlyInline}}
  - : 表示浏览器即将开始与服务器建立连接以检索资源之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.secureConnectionStart')}} {{ReadOnlyInline}}
  - : 表示浏览器即将开始握手过程以保护当前连接之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.connectEnd')}} {{ReadOnlyInline}}
  - : 表示浏览器刚刚完成与服务器建立连接以检索资源之后的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.requestStart')}} {{ReadOnlyInline}}
  - : 表示浏览器开始从服务器请求资源之前的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.firstInterimResponseStart')}} {{experimental_inline}} {{ReadOnlyInline}}
  - : 表示中间响应时间（例如，100 Continue 或 103 Early Hints）的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.responseStart')}} {{ReadOnlyInline}}
  - : 表示浏览器接收到来自服务器的响应的第一个字节（可能是中间响应）之后的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref('PerformanceResourceTiming.finalResponseHeadersStart')}} {{experimental_inline}} {{ReadOnlyInline}}
  - : 表示最终标头响应时间（例如，200 Success）的 {{domxref("DOMHighResTimeStamp")}}，在任何中间响应时间之后。
- {{domxref('PerformanceResourceTiming.responseEnd')}} {{ReadOnlyInline}}
  - : 表示浏览器接收到资源的最后一个字节后或紧接在传输连接关闭前（以先发生者为准）的 {{domxref("DOMHighResTimeStamp")}}。

### 附加资源信息

此外，该接口还公开了以下包含有关资源更多信息的属性：

- {{domxref("PerformanceResourceTiming.contentType")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : 表示获取资源 MIME 类型的最小化和标准化版本
- {{domxref('PerformanceResourceTiming.decodedBodySize')}} {{ReadOnlyInline}}
  - : 表示在移除任何应用的内容编码之后，从消息主体的获取（HTTP 或缓存）接收的大小（以八位字节为单位）的数字。
- {{domxref("PerformanceResourceTiming.deliveryType")}} {{experimental_inline}} {{ReadOnlyInline}}
  - : 表示资源获取的方式——例如，从缓存或导航预获取。
- {{domxref('PerformanceResourceTiming.encodedBodySize')}} {{ReadOnlyInline}}
  - : 表示在移除任何应用的内容编码之前，从有效负载体的获取（HTTP 或高速缓存）接收的大小（以八位字节为单位）的数字。
- {{domxref('PerformanceResourceTiming.initiatorType')}} {{ReadOnlyInline}}
  - : 表示初始化性能条目的 Web 平台特性的字符串。
- {{domxref('PerformanceResourceTiming.nextHopProtocol')}} {{ReadOnlyInline}}
  - : 表示用于获取资源的网络协议（由 [ALPN 协议 ID（RFC7301）](https://datatracker.ietf.org/doc/html/rfc7301)标识）的字符串。
- {{domxref('PerformanceResourceTiming.renderBlockingStatus')}} {{ReadOnlyInline}}
  - : 表示渲染阻塞状态的字符串。为 `"blocking"` 或 `"non-blocking"`。
- {{domxref('PerformanceResourceTiming.responseStatus')}} {{ReadOnlyInline}}
  - : 表示获取资源时返回的 HTTP 响应状态码的数字。
- {{domxref('PerformanceResourceTiming.transferSize')}} {{ReadOnlyInline}}
  - : 表示获取资源的大小（以八位字节为单位）的数字。包括响应标头字段和响应有效负载体的大小。
- {{domxref('PerformanceResourceTiming.serverTiming')}} {{ReadOnlyInline}}
  - : 包含服务器计时指标的 {{domxref("PerformanceServerTiming")}} 条目的数组。

## 方法

- {{domxref("PerformanceResourceTiming.toJSON()")}}
  - : 返回 `PerformanceResourceTiming` 对象的 JSON 表示。

## 示例

### 记录资源耗时信息

以下示例使用 {{domxref("PerformanceObserver")}}，当新的 `resource` 性能条目记录在浏览器的性能时间线中时，它会发出通知。使用 `buffered` 选项可以访问在观察器创建之前的条目。

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

## 安全性要求

### 跨源计时信息

当资源是跨源请求时，许多资源计时属性被限制为返回 `0` 或空字符串。要暴露跨源计时信息，需要设置 {{HTTPHeader("Timing-Allow-Origin")}} HTTP 响应标头。

例如，允许 `https://developer.mozilla.org` 查看资源计时信息，跨源资源应发送：

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [资源计时（概述）](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
