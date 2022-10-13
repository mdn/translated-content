---
title: PerformanceNavigationTiming
slug: Web/API/PerformanceNavigationTiming
---

{{APIRef("Navigation Timing")}}{{SeeCompatTable}}

**`PerformanceNavigationTiming`** 提供了用于存储和检索有关浏览器文档事件的指标的方法和属性。例如，此接口可用于确定加载或卸载文档需要多少时间。

{{InheritanceDiagram}}

## 属性

该接口扩展了 {{domxref('PerformanceEntry')}} 属性，修订和约束以下性能条目：

- {{domxref("PerformanceEntry.entryType")}} {{readonlyInline}}
  - : 返回 `"navigation"`.
- {{domxref("PerformanceEntry.name")}} {{readonlyInline}}
  - : 返回 [文档地址](https://dom.spec.whatwg.org/#concept-document-url).
- {{domxref("PerformanceEntry.startTime")}} {{readonlyInline}}
  - : 返回值为 0 的 {{domxref("DOMHighResTimeStamp")}}。
- {{domxref("PerformanceEntry.duration")}} {{readonlyInline}}
  - : 返回 {{domxref("DOMHighResTimeStamp","timestamp")}} 值，即 {{domxref("PerformanceNavigationTiming.loadEventEnd")}} 和 {{domxref("PerformanceEntry.startTime")}} 属性之间的差值。

该接口还扩展 {{domxref('PerformanceResourceTiming')}} 属性，修订和约束以下性能条目：

- {{domxref('PerformanceResourceTiming.initiatorType')}}{{readonlyInline}}
  - : 返回 `"navigation"`.

该接口还支持以下属性：

- {{domxref('PerformanceNavigationTiming.domComplete')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，等于浏览器将当前文档的当前文档准备*[就绪](https://html.spec.whatwg.org/multipage/syntax.html#the-end)*之前的时间。
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventEnd')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，等于当前文档的 [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) 事件完成后的时间。
- {{domxref('PerformanceNavigationTiming.domContentLoadedEventStart')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，等于用户代理在当前文档上触发 [DOMContentLoaded](https://html.spec.whatwg.org/multipage/syntax.html#the-end) 事件之前的时间。
- {{domxref('PerformanceNavigationTiming.domInteractive')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，等于用户代理将当前文档的当前文档准备就绪设置为[交互](https://html.spec.whatwg.org/multipage/syntax.html#the-end)之前的时间。
- {{domxref('PerformanceNavigationTiming.loadEventEnd')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，代表当前文档的加载事件完成的时间。
- {{domxref('PerformanceNavigationTiming.loadEventStart')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，等于立即触发当前文档的加载事件之前的时间。
- {{domxref('PerformanceNavigationTiming.redirectCount')}} {{readonlyInline}}
  - : 表示自当前浏览上下文中上次非重定向导航以来的重定向次数的数字。
    如果没有重定向，或者重定向是从另一个 origin 发的，并且该 origin 不允许将其计时信息公开给当前来源，则该值为 0。
- {{domxref('PerformanceNavigationTiming.requestStart')}} {{readonlyInline}}
  - : 返回一个 {{domxref("DOMHighResTimeStamp")}} 时间值，代表 UA 立即开始从服务器，相关应用程序缓存或本地资源请求资源之前的时间。
- {{domxref('PerformanceNavigationTiming.responseStart')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，代表用户代理的 HTTP 解析器从相关应用程序缓存，本地资源或服务器接收到响应的第一个字节后立即的时间。
- {{domxref('PerformanceNavigationTiming.type')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMString","string")}} 表示导航类型，取值为为：“`navigate`”，“`reload`”，“`back_forward`”或“`prerender`”。
- {{domxref('PerformanceNavigationTiming.unloadEventEnd')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，等于用户代理程序完成前一文档的卸载事件之后的时间。
- {{domxref('PerformanceNavigationTiming.unloadEventStart')}} {{readonlyInline}}
  - : 一个 {{domxref("DOMHighResTimeStamp")}} 时间值，等于用户代理程序开始前一个文档的卸载事件之前的时间。

## 方法

- {{domxref("PerformanceNavigationTiming.toJSON()")}}
  - : 返回一个表示{{domxref("PerformanceNavigationTiming")}}对象的{{domxref("DOMString")}} JSON。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Performance.navigation")}}
- {{domxref("PerformanceNavigation")}}
