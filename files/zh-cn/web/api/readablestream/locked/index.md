---
title: ReadableStream.locked
slug: Web/API/ReadableStream/locked
tags:
  - API
  - Property
  - ReadableStream
  - Reference
  - Streams
  - locked
translation_of: Web/API/ReadableStream.locked
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的只读属性 **`locked`** 返回可读流是否锁定到reader。

一个可读流最多可以有一个激活的reader，并且直到被释放之前都是锁定到该reader。
可以使用 [`ReadableStream.getReader()`](/zh-CN/docs/Web/API/ReadableStream/getReader) 方法获取读取器并且使用`releaseLock()`方法发布读取器。

## 值

一个 {{Glossary("boolean")}} 布尔值，指示可读流是否已锁定。

## 示例

```js
const stream = new ReadableStream({
  ...
});
const reader = stream.getReader();
stream.locked
// 应返回true，并且流已经锁定一个reader
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
