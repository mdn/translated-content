---
title: PerformanceResourceTiming：transferSize 属性
slug: Web/API/PerformanceResourceTiming/transferSize
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`transferSize`** 只读属性表示所获取资源的大小（以八位字节为单位）。大小包括响应标头字段加上响应有效负载主体（由 [RFC7230](https://httpwg.org/specs/rfc7230.html#message.body) 定义)。

如果资源是从本地缓存中获取的，或者它是跨源资源，则此属性返回零。

## 值

`transferSize` 属性可以具有以下值：

- 表示所获取资源的大小（以八位字节为单位）的数字。该大小包括响应标头字段和[响应有效负载主体](https://httpwg.org/specs/rfc7230.html#message.body)（RFC7230）。
- `0` 如果资源是从缓存中即时检索到的。
- `0` 如果资源是跨源请求并且未使用 {{HTTPHeader("Timing-Allow-Origin")}} HTTP 响应标头。

## 示例

### 检查缓存是否命中

对于不支持 {{domxref("PerformanceResourceTiming.responseStatus", "responseStatus")}} 属性的环境，`transferSize` 属性可用于确定缓存命中。如果 `transferSize` 为零，且资源具有非零解码主体大小（意味着资源是同源的或具有 {{HTTPHeader("Timing-Allow-Origin")}}），资源是从本地缓存中获取的。

以下示例使用 {{domxref("PerformanceObserver")}}，当新的 `resource` 性能条目记录在浏览器的性能时间线中时，它会发出通知。使用 `buffered` 选项可以访问在观察器创建之前的条目。

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
      console.log(`${entry.name} was loaded from cache`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

以下示例使用 {{domxref("Performance.getEntriesByType()")}}，它仅显示在调用此方法时浏览器性能时间线中存在的 `resource` 性能条目：

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.transferSize === 0 && entry.decodedBodySize > 0) {
    console.log(`${entry.name} 是从缓存中加载的`);
  }
});
```

### 跨源内容大小信息

如果 `transferSize` 属性的值为 `0`，且资源并非从本地缓存加载，该资源可能是跨源请求。要暴露跨源内容大小信息，需要设置 {{HTTPHeader("Timing-Allow-Origin")}} HTTP 响应标头。

例如，要允许 `https://developer.mozilla.org` 查看内容大小，跨源资源应该发送：

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{HTTPHeader("Timing-Allow-Origin")}}
