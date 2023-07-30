---
title: Server-Timing
slug: Web/HTTP/Headers/Server-Timing
---

{{HTTPSidebar}}

**`Server-Timing`** 标头传达在一个给定请求 - 响应周期中的一个或多个参数和描述。它用于在用户浏览器的开发工具或 {{domxref("PerformanceServerTiming")}} 接口中显示任何后端服务器定时参数（例如，数据库读/写、CPU 时间、文件系统访问等）。

| Header type                           | {{Glossary("Response header")}} |
| ------------------------------------- | ------------------------------- |
| {{Glossary("Forbidden header name")}} | no                              |

## 语法

`Server-Timing` 头的语法允许您以不同方式传达参数：仅服务器参数名称，具有值的参数，具有值和描述的度参数以及具有描述的参数。

规范建议名称和描述应尽可能短（使用缩写并在可能的情况下省略可选值）以最小化 HTTP 开销。

```plain
// Single metric without value
Server-Timing: missedCache

// Single metric with value
Server-Timing: cpu;dur=2.4

// Single metric with description and value
Server-Timing: cache;desc="Cache Read";dur=23.2

// Two metrics with value
Server-Timing: db;dur=53, app;dur=47.2

// Server-Timing as trailer
Trailer: Server-Timing
--- response body ---

Server-Timing: total;dur=123.4
```

## 保密性与安全性

`Server-Timing` 头可能会暴露潜在的敏感应用程序和基础设备信息。请考虑在服务器端控制何时向谁返回哪些参数信息。例如，您只能向经过身份验证的用户显示参数信息，而不能向公众显示。

## PerformanceServerTiming 接口

除了在浏览器的开发工具中显示 `Server-Timing` 外，{{domxref("PerformanceServerTiming")}} 接口允许工具自动收集和处理 JavaScript 中的参数。此接口仅限于相同的源下使用，但您可以使用 {{HTTPHeader("Timing-Allow-Origin")}} 头指定允许访问服务器参数的域。该接口仅在某些浏览器中的安全上下文（HTTPS）中可用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- {{domxref("PerformanceServerTiming")}}
