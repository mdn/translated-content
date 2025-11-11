---
title: PerformanceTiming
slug: Web/API/PerformanceTiming
---

{{APIRef("Performance API")}}{{Deprecated_Header}}

**`PerformanceTiming`** 接口是为保持向后兼容性而保留的传统接口，并且提供了在加载和使用当前页面期间发生的各种事件的性能计时信息。

可以通过只读属性{{domxref("Performance.timing", "window.performance.timing")}} 获得实现该接口的一个对象。

## 属性

_`PerformanceTiming` 接口不包含任何继承属性。_

- {{domxref("PerformanceTiming.navigationStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，表征了从同一个浏览器上下文的上一个文档卸载（unload）结束时的 UNIX 时间戳。如果没有上一个文档，这个值会和 `PerformanceTiming.fetchStart` 相同。
- {{domxref("PerformanceTiming.unloadEventStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，表征了[`unload`](/zh-CN/docs/Web/API/Window/unload_event)事件抛出时的 UNIX 时间戳。如果没有上一个文档，或者重定向中的一个不同源，这个值会返回 `0`。
- {{domxref("PerformanceTiming.unloadEventEnd")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，表征了[`unload`](/zh-CN/docs/Web/API/Window/unload_event)事件处理完成时的 UNIX 时间戳。如果没有上一个文档，或者重定向中的一个不同源，这个值会返回 `0`。
- {{domxref("PerformanceTiming.redirectStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，表征了第一个 HTTP 重定向开始时的 UNIX 时间戳。如果没有重定向，或者重定向中的一个不同源，这个值会返回 0。
- {{domxref("PerformanceTiming.redirectEnd")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，表征了最后一个 HTTP 重定向完成时（也就是说是 HTTP 响应的最后一个比特直接被收到的时间）的 UNIX 时间戳。如果没有重定向，或者重定向中的一个不同源，这个值会返回 `0`。
- {{domxref("PerformanceTiming.fetchStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，表征了浏览器准备好使用 HTTP 请求来获取（fetch）文档的 UNIX 时间戳。这个时间点会在检查任何应用缓存之前。
- {{domxref("PerformanceTiming.domainLookupStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，表征了域名查询开始的 UNIX 时间戳。如果使用了持久连接（persistent connection），或者这个信息存储到了缓存或者本地资源上，这个值将和 `PerformanceTiming.fetchStart` 一致。
- {{domxref("PerformanceTiming.domainLookupEnd")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，表征了域名查询结束的 UNIX 时间戳。如果使用了持久连接，或者这个信息存储到了缓存或者本地资源上，这个值将和 `PerformanceTiming.fetchStart` 一致。
- {{domxref("PerformanceTiming.connectStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回 HTTP 请求开始向服务器发送时的 Unix 毫秒时间戳。如果使用持久连接，则返回值等同于 fetchStart 属性的值。
- {{domxref("PerformanceTiming.connectEnd")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回浏览器与服务器之间的连接建立时的 Unix 毫秒时间戳。如果建立的是持久连接，则返回值等同于 fetchStart 属性的值。连接建立指的是所有握手和认证过程全部结束。
- {{domxref("PerformanceTiming.secureConnectionStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回浏览器与服务器开始安全链接的握手时的 Unix 毫秒时间戳。如果当前网页不要求安全连接，则返回 0。
- {{domxref("PerformanceTiming.requestStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回浏览器向服务器发出 HTTP 请求时（或开始读取本地缓存时）的 Unix 毫秒时间戳。
- {{domxref("PerformanceTiming.responseStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的 Unix 毫秒时间戳。如果传输层在开始请求之后失败并且连接被重开，该属性将会被数制成新的请求的相对应的发起时间。
- {{domxref("PerformanceTiming.responseEnd")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回浏览器从服务器收到（或从本地缓存读取，或从本地资源读取）最后一个字节时（如果在此之前 HTTP 连接已经关闭，则返回关闭时）的 Unix 毫秒时间戳。
- {{domxref("PerformanceTiming.domLoading")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回当前网页 DOM 结构开始解析时（即 {{domxref("Document.readyState")}} 属性变为“loading”、相应的 [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event)事件触发时）的 Unix 毫秒时间戳。
- {{domxref("PerformanceTiming.domInteractive")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回当前网页 DOM 结构结束解析、开始加载内嵌资源时（即 {{domxref("Document.readyState")}} 属性变为“interactive”、相应的 [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event) 事件触发时）的 Unix 毫秒时间戳。
- {{domxref("PerformanceTiming.domContentLoadedEventStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回当解析器发送 {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}} 事件，即所有需要被执行的脚本已经被解析时的 Unix 毫秒时间戳。
- {{domxref("PerformanceTiming.domContentLoadedEventEnd")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回当所有需要立即执行的脚本已经被执行（不论执行顺序）时的 Unix 毫秒时间戳。
- {{domxref("PerformanceTiming.domComplete")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回当前文档解析完成，即 {{domxref("Document.readyState")}} 变为 `'complete'` 且相对应的 [`readystatechange`](/zh-CN/docs/Web/API/Document/readystatechange_event) 被触发时的 Unix 毫秒时间戳。
- {{domxref("PerformanceTiming.loadEventStart")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回该文档下，[`load`](/zh-CN/docs/Web/API/Window/load_event) 事件被发送时的 Unix 毫秒时间戳。如果这个事件还未被发送，它的值将会是 `0`。
- {{domxref("PerformanceTiming.loadEventEnd")}} {{readonlyInline}}
  - : 是一个无符号 long long 型的毫秒数，返回当 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件结束，即加载事件完成时的 Unix 毫秒时间戳。如果这个事件还未被发送，或者尚未完成，它的值将会是 `0`。

## 方法

**`Performance`** 接口不包含任何方法。

- {{domxref("PerformanceTiming.toJSON()")}} {{non-Standard_Inline}}
  - : 是一个 JSON 格式化工具，返回一个 [JSON 对象](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON)，代表具体的 `PerformanceTiming` 对象。

## 规范

因为 [Navigation Timing 规范](https://w3c.github.io/navigation-timing/#obsolete)已被弃用，此特性不再有望成为标准。请使用 {{domxref("PerformanceNavigationTiming")}} 接口代替。

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Performance.timing")}} 属性会返回这样一个对象。
