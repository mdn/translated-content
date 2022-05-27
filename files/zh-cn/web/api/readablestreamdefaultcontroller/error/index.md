---
title: ReadableStreamDefaultController.error()
slug: Web/API/ReadableStreamDefaultController/error
tags:
  - API
  - Error
  - Method
  - ReadableStreamDefaultController
  - Reference
  - Streams
translation_of: Web/API/ReadableStreamDefaultController/error
---
{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultController")}} 接口的 **`error()`** 方法会导致未来任何与关联流的交互出错。

> **备注：** `error()` 方法可以被多次调用，并且可以在流不可读时被调用。

## 语法

```js
error(e)
```

### 参数

- `e`
  - : 您需要在后面使用的错误信息。

### 返回值

无 ({{jsxref("undefined")}})。

### 异常

- {{jsxref("TypeError")}}
  - : 如果源对象不是 `ReadableStreamDefaultController` 则抛出异常。

## 示例

规范中[具有底层推送源和背压支持的流](https://streams.spec.whatwg.org/#example-rs-push-backpressure)提供了一个很好的例子，说明如何使用 {{domxref("ReadablestreamDefaultController.desiredSize")}} 去手动检测流何时已满并使用背压，以及流所依赖的系统在部分失效的情况下如何使用 `error()` 去手动触发一个流错误。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
