---
title: PerformanceResourceTiming
slug: Web/API/PerformanceResourceTiming
---

{{APIRef("Resource Timing API")}}PerformanceResourceTiming 接口可以检索和分析有关加载应用程序资源的详细网络计时数据。应用程序可以使用 timing 指标来确定获取特定资源所需的时间长度，例如{{domxref("XMLHttpRequest")}}，{{SVGElement("SVG","SVG element")}}，image 或 script。这个接口使用{{domxref("DOMHighResTimeStamp","high-resolution timestamps")}} 属性创建加载资源时间轴，用于网络事件，例如重定向开始 ( redirect start ) 和结束时间，获取开始 ( fetch start )，DNS 查找开始 ( DNS lookup start ) 和结束时间，响应开始 ( response start ) 和结束时间等。此外，接口扩展{{domxref("PerformanceEntry")}}与其他属性，这些属性提供有关获取资源大小的数据以及初始化时获取的资源类型。

{{InheritanceDiagram}}

{{AvailableInWorkers}}

## 属性

此接口通过限定和约束{{domxref("PerformanceEntry")}}属性来扩展资源性能条目类型，如下所示：

- {{domxref("PerformanceEntry.entryType")}}{{readonlyInline}}
  - : 返回 `"resource"`.
- {{domxref("PerformanceEntry.name")}}{{readonlyInline}}
  - : 返回 resources URL.
- {{domxref("PerformanceEntry.startTime")}}{{readonlyInline}}
  - : 在资源提取开始的时间返回{{domxref("DOMHighResTimeStamp","timestamp")}}。该值等于{{domxref("PerformanceEntry.fetchStart")}}。
- {{domxref("PerformanceEntry.duration")}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp","timestamp")}}，它是{{domxref("PerformanceResourceTiming.responseEnd","responseEnd")}}和{{domxref("PerformanceEntry.startTime","startTime")}}属性之间的差异。

该接口还支持以下属性，这些属性按记录顺序列出以获取单个资源。按字母顺序排列的列表显示在左侧的导航栏中。

- {{domxref('PerformanceResourceTiming.initiatorType')}}{{readonlyInline}}
  - : 返回{{domxref("DOMString","string")}}，表示初始化性能条目的资源类型，如{{domxref('PerformanceResourceTiming.initiatorType')}}中所规定。
- {{domxref('PerformanceResourceTiming.nextHopProtocol')}}{{readonlyInline}}
  - : 返回{{domxref("DOMString","string")}} ，表示用于获取资源的网络协议，由[ALPN Protocol ID (RFC7301)](https://tools.ietf.org/html/rfc7301)标识。
- {{domxref('PerformanceResourceTiming.workerStart')}}{{readonlyInline}}
  - : 如果 Service Worker 线程已在运行，则在调用{{domxref("FetchEvent")}}之前立即返回{{domxref("DOMHighResTimeStamp")}}，如果尚未运行，则在启动 Service Worker 线程之前立即返回{{domxref("DOMHighResTimeStamp")}}。如果资源未被 Service Worker 拦截，则该属性将始终返回 0。
- {{domxref('PerformanceResourceTiming.redirectStart')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}}，表示初始重定向的开始获取时间。
- {{domxref('PerformanceResourceTiming.redirectEnd')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，紧接在收到最后一次重定向响应的最后一个字节后。
- {{domxref('PerformanceResourceTiming.fetchStart')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，紧接在浏览器开始获取资源之前。
- {{domxref('PerformanceResourceTiming.domainLookupStart')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}}，紧接在浏览器启动资源的域名查找之前。
- {{domxref('PerformanceResourceTiming.domainLookupEnd')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，表示浏览器完成资源的域名查找后的时间。
- {{domxref('PerformanceResourceTiming.connectStart')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，紧接在浏览器检索资源，开始建立与服务器的连接之前。
- {{domxref('PerformanceResourceTiming.connectEnd')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，紧接在浏览器完成与服务器的连接以检索资源之后。
- {{domxref('PerformanceResourceTiming.secureConnectionStart')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，紧接在浏览器启动握手过程之前，以保护当前连接。
- {{domxref('PerformanceResourceTiming.requestStart')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，紧接在浏览器开始从服务器请求资源之前。
- {{domxref('PerformanceResourceTiming.responseStart')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，紧接在浏览器收到服务器响应的第一个字节后。
- {{domxref('PerformanceResourceTiming.responseEnd')}}{{readonlyInline}}
  - : 返回{{domxref("DOMHighResTimeStamp")}} ，紧接在浏览器收到资源的最后一个字节之后或紧接在传输连接关闭之前，以先到者为准。
- {{domxref('PerformanceResourceTiming.transferSize')}}{{readonlyInline}}
  - : 表示获取资源的大小（以八位字节为单位）的`数字`。包括响应头字段和响应 payload body 的大小。
- {{domxref('PerformanceResourceTiming.encodedBodySize')}}{{readonlyInline}}
  - : 在删除任何应用的内容编码之前，从 payload body 的提取（HTTP 或高速缓存）接收的大小（以八位字节为单位）的`数字`。
- {{domxref('PerformanceResourceTiming.decodedBodySize')}}{{readonlyInline}}
  - : 在删除任何应用的内容编码之后，从消息正文 ( message body ) 的提取（HTTP 或缓存）接收的大小（以八位字节为单位）的`数字`。
- {{domxref('PerformanceResourceTiming.serverTiming')}}{{readonlyInline}}
  - : 包含服务器时序度量 ( timing metrics ) 的{{domxref("PerformanceServerTiming")}} 条目数组。

## 方法

- {{domxref("PerformanceResourceTiming.toJSON()")}}
  - : 返回{{domxref("DOMString")}}，它是 {{domxref("PerformanceResourceTiming")}} 对象的 JSON 表示形式。

## 示例

在 [Resource Timing（概述）](/zh-CN/docs/Web/API/Performance_API/Resource_timing)中查看相关示例。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- [Resource Timing（概述）](/zh-CN/docs/Web/API/Performance_API/Resource_timing)
