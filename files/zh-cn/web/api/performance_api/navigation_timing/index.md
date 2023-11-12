---
title: Navigation Timing API
slug: Web/API/Performance_API/Navigation_timing
---

{{DefaultAPISidebar("Performance API")}}

**Navigation Timing API** 提供了可用于衡量一个网站性能的数据。与用于相同目的的其他基于 JavaScript 的机制不同，该 API 可以提供可以更有用和更准确的端到端延迟数据。

## Concepts and usage

你可以使用 Navigation Timing API 在客户端收集性能数据，并用 {{domxref("XMLHttpRequest")}} 或其他技术传送到服务端。同时，该 API 使你可以衡量之前难以获取的数据，如卸载前一个页面的时间，在域名解析上的时间，在执行 [`load`](/zh-CN/docs/Web/API/Window/load_event) 事件处理器上花费的总时间等。

## Interfaces

{{domxref("Performance")}}

返回一个 Performance 对象。该对象由 High Resolution Time API 定义，Navigation Timing API 在此基础上增加了两个属性：{{domxref("Performance.timing", "timing")}} 和 {{domxref("Performance.navigation", "navigation")}}

{{domxref("PerformanceNavigationTiming")}}

提供了方法和属性来存取关于游览器文档 navigation 事件的相关数据。如文档实际加载/卸载的时间。

{{deprecated_inline}} {{domxref("PerformanceTiming")}}

曾被用来获取 {{domxref("Performance.timing", "timing")}} 的值，用来衡量页面性能。

{{deprecated_inline}} {{domxref("PerformanceNavigation")}}

曾被用来获取 {{domxref("Performance.navigation", "navigation")}} 的值，用来描述加载相关的操作。

以下示例显示了如何测量感知加载时间：

```
function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  console.log("User-perceived page loading time: " + page_load_time);
}
```

还有很多以毫秒为单位呈现的测量事件，你可以通过 {{domxref("PerformanceTiming")}} 接口得到它们。按照事件发生的先后顺序，这些事件的列表如下：

- navigationStart
- unloadEventStart
- unloadEventEnd
- redirectStart
- redirectEnd
- fetchStart
- domainLookupStart
- domainLookupEnd
- connectStart
- connectEnd
- secureConnectionStart
- requestStart
- responseStart
- responseEnd
- domLoading
- domInteractive
- domContentLoadedEventStart
- domContentLoadedEventEnd
- domComplete
- loadEventStart
- loadEventEnd

`window.performance.navigation` 对象存储了两个属性，它们表示触发页面加载的原因。这些原因可能是页面重定向、前进后退按钮或者普通的 `URL` 加载。

window\.performance.navigation.type:

| Constant            | Value | Description                                                                                                                      |
| ------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------- |
| `TYPE_NAVIGATE`     | 0     | 导航开始于点击链接、或者在用户代理中输入 URL、或者表单提交、或者通过除下表中 TYPE_RELOAD 和 TYPE_BACK_FORWARD 的脚本初始化操作。 |
| `TYPE_RELOAD`       | 1     | 通过刷新操作或者 location.reload() 方法导航。                                                                                    |
| `TYPE_BACK_FORWARD` | 2     | 通过历史遍历操作导航。                                                                                                           |
| `TYPE_UNDEFINED`    | 255   | 其他非以上类型的导航。                                                                                                           |

`window.performance.navigation.redirectCount` 表示到达最终页面前，重定向的次数（如果有的话）。

Navigation Timing API 可以用于收集客户端性能数据，然后通过 XHR 发送给服务端。还可以计算那些其他方法难以计算的数据，如卸载 (unload) 上一个页面的时间、域名查找时间、window\.onload 的总时间等等。

## 示例

计算页面加载所需的总时长：

```
var perfData = window.performance.timing;
var pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
```

计算请求返回时长：

```
var connectTime = perfData.responseEnd - perfData.requestStart;
```
