---
title: Resource Timing API
slug: Web/API/Performance_API/Resource_timing
---

{{DefaultAPISidebar("Resource Timing API")}}

通过 **`Resource Timing API`** 可以获取和分析应用资源加载的详细网络计时数据，应用程序可以使用时间度量标准来确定加载特定资源所需要的时间，比如 {{domxref("XMLHttpRequest")}}、{{SVGElement("SVG","SVG element")}}、图片，或者脚本。

**`Resource Timing API`** 为网络事件（如重定向的开始和结束事件、DNS 查找的开始和结束事件、请求开始、响应开始和结束时间等）生成有高分辨率时间戳（{{domxref("DOMHighResTimeStamp","high-resolution timestamp", "", 1)}}）的资源加载时间线，并提供了资源大小和资源类型。

本文档是 Resource Timing API 的概述。更多详细信息，请查阅每个接口的参考说明，[Using Resource Timing](/zh-CN/docs/Web/API/Resource_Timing/Using_Resource_Timing) 和[参见](#参见)的参考链接。有关资源时序处理模型的图示，请参阅 [resource timing phases](https://w3c.github.io/resource-timing/#process)。

`PerformanceResourceTiming` 接口只统计{{domxref("PerformanceEntry","performance entries", "", 1)}} 中 {{domxref("PerformanceEntry.entryType","entryType")}} 为 `resource` 类型的 {{domxref("PerformanceEntry")}}。

## 高分辨率时间戳

一些 **`Resource Timing`** 属性返回高分辨率时间戳，顾名思义，代表了高分辨率的时间点。高分辨率时间戳类型是 {{domxref("DOMHighResTimeStamp")}}，用双精度数字（double）表示，它的值是一个离散的时间点或者两个离散时间点之间的时间差。

`DOMHighResTimeStamp` 的单位是毫秒（ms），并且应该可以准确到 5 微秒（µs）。但是，如果浏览器无法以提供精确到 5 微秒的时间值（如软硬件限制），则可以将该值表示为以毫秒为单位的精确到毫秒的时间。

## 资源载入时间戳

应用程序可以获得用于加载资源的各个阶段的时间戳。处理模型中的第一个属性是 {{domxref("PerformanceEntry.startTime","startTime")}}，它在资源加载过程开始之前立即返回时间。{{domxref("PerformanceResourceTiming.fetchStart","fetchStart")}} 跟踪和重定向处理（如果适用），并在 DNS 查找之前进行。下个阶段是{{domxref('PerformanceResourceTiming.connectStart','connectStart')}} 和 {{domxref('PerformanceResourceTiming.connectEnd','connectEnd')}} 分别是开始连接到服务器和连接建立完成的时间戳。最后三个按顺序分别是：{{domxref('PerformanceResourceTiming.requestStart','requestStart')}}——在浏览器开始向服务器请求资源时；{{domxref('PerformanceResourceTiming.responseStart','responseStart')}}——资源请求首包返回时；{{domxref('PerformanceResourceTiming.responseEnd','responseEnd')}}——资源全部接收完成时。如果资源是通过安全连接加载的 {{domxref('PerformanceResourceTiming.secureConnectionStart','secureConnectionStart')}} 的值将会在 connectStart 和 connectEnd 之间。

> **备注：** 当 {{Glossary("CORS")}} 生效时，除非服务器的访问策略允许共享这些值，否则这些值中的许多将返回为零。这需要提供资源的服务器发送 `Timing-Allow-Origin` HTTP 响应标头并且指定 origin\[s] 来源才能允许获取这些被限制的时间戳。
>
> 在非 web 页面本身的域名下，这些属性在默认都会返回 0 值：`redirectStart`、`redirectEnd`、`domainLookupStart`、`domainLookupEnd`、`connectStart`、`connectEnd`、`secureConnectionStart`、`requestStart` 和 `responseStart`。

The {{domxref("PerformanceResourceTiming")}} interface also includes several network timing properties. The {{domxref("PerformanceResourceTiming.redirectStart","redirectStart")}} and {{domxref("PerformanceResourceTiming.redirectEnd","redirectEnd")}} properties return {{domxref("DOMHighResTimeStamp","timestamps")}} for redirect start and end times, respectively. Likewise, the The {{domxref("PerformanceResourceTiming.domainLookupStart","domainLookupStart")}} and {{domxref("PerformanceResourceTiming.domainLookupEnd","domainLookupEnd")}} properties return {{domxref("DOMHighResTimeStamp","timestamps")}} for DNS lookup start and end times, respectively.

_This would be a nice place to have a diagram showing the relationships between these segments of the resource loading time._

## Resource size

{{domxref("PerformanceResourceTiming")}}接口有三个属性用来获取一个资源的数据大小。 {{domxref('PerformanceResourceTiming.transferSize','transferSize')}} 属性返回所获得的资源大小，包含响应头加上响应体。

The {{domxref('PerformanceResourceTiming.encodedBodySize','encodedBodySize')}} property returns the size (in octets) received from the fetch (HTTP or cache), of the _payload body_, **before** removing any applied content-codings. {{domxref('PerformanceResourceTiming.decodedBodySize','decodedBodySize')}} returns the size (in octets) received from the fetch (HTTP or cache) of the _message body_, **after** removing any applied content-codings.

## Other properties

The {{domxref('PerformanceResourceTiming.nextHopProtocol','nextHopProtocol')}} property returns the _network protocol_ used to fetch the resource.

The {{domxref('PerformanceResourceTiming.initiatorType','initiatorType')}} property returns the _type_ of resource that initiated the performance entry such as "`css`" for a CSS resource, "`xmlhttprequest`" for an XMLHttpRequest and "`img`" for an image (such as a JPEG).

If the current context is a {{domxref("Worker","worker")}}, the {{domxref('PerformanceResourceTiming.workerStart','workerStart')}} property can be used to obtain a {{domxref("DOMHighResTimeStamp")}} when the worker was started.

## Methods

The Resource Timing API includes two methods that extend the {{domxref("Performance")}} interface. The {{domxref("Performance.clearResourceTimings","clearResourceTimings()")}} method removes all "`resource`" type performance entries from the browser's _resource_ performance entry buffer. The {{domxref("Performance.setResourceTimingBufferSize","setResourceTimingBufferSize()")}} method sets the resource performance entry buffer size to the specified number of resource {{domxref("PerformanceEntry","performance entries")}}.

The {{domxref("PerformanceResourceTiming")}} interface's {{domxref("PerformanceResourceTiming.toJSON","toJSON()")}} method returns a JSON serialization of a "`resource`" type {{domxref("PerformanceEntry","performance entry")}}.

## Implementation status

As shown in the {{domxref("PerformanceResourceTiming")}} interface's [Browser Compatibility](/zh-CN/docs/Web/API/PerformanceResourceTiming#Browser_compatibility) table, most of these interfaces are broadly implemented by desktop browsers. However, note that some properties have little to no implementation so see each property's "Browser compatibility" section for more specific interoperability data.

To test your browser's support for these interfaces, run the [`perf-api-support`](https://mdn.github.io/dom-examples/performance-apis/perf-api-support.html) application.

## 参见

- [Resource Timing Standard](https://w3c.github.io/resource-timing/); W3C Editor's Draft
- [CanIUse data](http://caniuse.com/#search=resource-timing)
- [Resource Timing practical tips](http://www.stevesouders.com/blog/2014/08/21/resource-timing-practical-tips/); Steve Souders; 2014 August 21
- [Measuring network performance with Resource Timing API](http://googledevelopers.blogspot.ca/2013/12/measuring-network-performance-with.html); Ilya Grigorik; 2013 December 11
- [A Primer for Web Performance Timing APIs](http://siusin.github.io/perf-timing-primer/); Xiaoqian Wu; W3C Editor's Draft
