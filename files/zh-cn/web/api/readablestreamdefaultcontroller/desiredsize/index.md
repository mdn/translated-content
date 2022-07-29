---
title: ReadableStreamDefaultController.desiredSize
slug: Web/API/ReadableStreamDefaultController/desiredSize
tags:
  - API
  - Property
  - ReadableStreamDefaultController
  - Reference
  - Streams
  - desiredSize
translation_of: Web/API/ReadableStreamDefaultController/desiredSize
---
{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultController")}} 接口的只读属性 **`desiredSize`** 返回填充满流的内部队列需要的大小。

## 值

一个整数。请注意，在队列已满的情况下，则可能是负数。

## 示例

规范中[具有底层推送源和背压支持的流](https://streams.spec.whatwg.org/#example-rs-push-backpressure)提供了一个很好的例子，说明如何使用 `desiredSize` 去手动检测流何时已满并应使用背压，以及使用 {{domxref("ReadablestreamDefaultController.error()")}} 在流所依赖的系统一部分失效的情况去手动触发一个流错误。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
