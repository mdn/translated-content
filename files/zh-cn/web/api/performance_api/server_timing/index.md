---
title: 服务器计时
slug: Web/API/Performance_API/Server_timing
l10n:
  sourceCommit: 8d0cbeacdc1872f7e4d966177151585c58fb879e
---

{{DefaultAPISidebar("Performance API")}}

服务器计时是性能 API 的组成部分，允许服务器向用户代理传递请求——响应周期的指标数据。你可以收集这些信息，并像处理性能 API 中的其他指标那样，根据服务器指标采取相应措施。

## 发送服务器指标

{{HTTPHeader("Server-Timing")}} HTTP 标头用于呈现后端服务器的计时指标。例如，可能需要发送数据库读写操作耗时、CPU 时间以及文件系统访问数据。

指标可带值或不带值发送，并可选择包含描述信息。建议将名称、描述和数据保持尽可能简短，以最大限度降低 HTTP 开销。

以下是 `Server-Timing` 标头的示例：

```http
// 不含值的单个指标
Server-Timing: missedCache

// 含值的单个指标
Server-Timing: cpu;dur=2.4

// 含描述和值的单个指标
Server-Timing: cache;desc="Cache Read";dur=23.2

// 两个含值的指标
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing 作为挂载标头
Trailer: Server-Timing
--- 响应体 ---
Server-Timing: total;dur=123.4
```

要计算真实的服务器指标，请查阅你所使用的服务器端内容管理系统（CMS）、框架或编程语言的文档，了解如何在后端应用程序中测量性能。如果服务器使用 Node.js，其性能测量 API 将与浏览器中的性能 API 非常相似。这是因为 Node.js 的性能模块既包含 W3C Web 性能 API 的子集，也包含用于 Node.js 特定性能测量的附加 API。更多信息请参阅 [Node.js 性能文档](https://nodejs.org/api/perf_hooks.html#performance-measurement-apis)。

请注意，服务器、客户端及任何中间代理之间不存在时钟同步。这意味着若服务器发送时间戳或 `startTime` 值，该值可能无法与客户端时间轴的 {{domxref("PerformanceEntry.startTime", "startTime")}} 建立有效映射。

计算出所需指标后，服务器需在响应中发送 `Server-Timing` 标头。有关在 Node.js 中如何发送该标头的示例，请参阅 {{HTTPHeader("Server-Timing")}} 参考页面。

## 获取服务器指标

服务器计时指标通常显示在浏览器的开发者工具中，但它们也会以 {{domxref("PerformanceServerTiming")}} 性能条目的形式存储，可像访问其他[性能数据](/zh-CN/docs/Web/API/Performance_API/Performance_data)那样获取这些条目。不过，系统不会单独提供 `"server-timing"` 条目。`PerformanceServerTiming` 对象可通过 `"navigation"` 和 `"resource"` 性能条目进行观察。需通过 {{domxref("PerformanceResourceTiming.serverTiming")}} 属性访问服务器指标，该属性是一个包含 `PerformanceServerTiming` 对象的数组。

给定一个 {{HTTPHeader("Server-Timing")}} 标头如下：

```http
Server-Timing: cache;desc="Cache Read";dur=23.2,db;dur=53,app;dur=47.2
```

`PerformanceObserver` 可通过以下代码在客户端记录条目：

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(
        `${serverEntry.name} (${serverEntry.description}) 用时：${serverEntry.duration}`,
      );
      // 记录“cache (Cache Read) 用时：23.2”
      // 记录“db () 用时：53”
      // 记录“app () 用时：47.2”
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

## 隐私和安全性考量

`Server-Timing` 标头可能暴露潜在敏感的应用程序和基础设施信息。因此，需要在服务器端控制指标的返回时机及接收对象。例如，可仅向经过身份验证的用户展示指标，而对公众不作任何披露。

`PerformanceServerTiming` 接口默认受同源策略限制，但可通过 {{HTTPHeader("Timing-Allow-Origin")}} 标头指定允许访问服务器指标的域名。另请注意，部分浏览器仅在安全上下文（HTTPS）中支持此接口。
