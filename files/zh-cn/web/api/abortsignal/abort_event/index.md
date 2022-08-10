---
title: AbortSignal.onabort
slug: Web/API/AbortSignal/abort_event
tags:
  - API
  - Fetch
  - onabort
  - 事件处理
  - 属性
  - 测试
  - 终止属性
translation_of: Web/API/AbortSignal/onabort
original_slug: Web/API/AbortSignal/onabort
---
{{APIRef("DOM")}}{{SeeCompatTable}}当事件被{{event("abort_(cancellable_fetch)", "终止")}}，{{domxref("FetchSignal")}}接口的**`onabort`** 只读属性就会被调用。例子。当 fetch 的请求信号被终止。

## 语法

```js
abortSignal.onabort = function() { ... };
```

## 示例

在下面例子中，我们将创建一个新的 `AbortController` 对象，并获取它的{{domxref("AbortSignal")}} (在 `signal` 属性中可用)。然后我们查看 `onabort` 属性是否被终止，并将相应的日志输出到控制台。

```js
var controller = new AbortController();
var signal = controller.signal;

signal.onabort = function() {
  console.log('Request aborted');
};
```

## 规格

{{Specifications}}

## 浏览器兼容性

{{Compat("api.AbortSignal.onabort")}}

## 参考文档

- [Fetch API](/en-US/docs/Web/API/Fetch_API)
