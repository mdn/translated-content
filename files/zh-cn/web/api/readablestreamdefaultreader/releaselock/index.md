---
title: ReadableStreamDefaultReader.releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} 接口的 **`releaseLock()`** 方法用于释放 reader 对流的锁定。

如果释放锁时关联流出错，reader 随后会以同样的方式发生错误；此外，reader 将关闭。

reader 的锁在仍有待处理的读取请求时无法释放，即，如果 reader 的 {{domxref("ReadableStreamDefaultReader.read()")}} 方法返回的 promise 尚未完成，这将导致抛出 `TypeError`。

## 语法

```js-nolint
releaseLock()
```

### 参数

无。

### 返回值

无 ({{jsxref("undefined")}})。

### 异常

- {{jsxref("TypeError")}}
  - : 如果源对象不是一个 `ReadableStreamDefaultReader`，或者仍有读取请求处于等待状态。

## 示例

```js
function fetchStream() {
  const reader = stream.getReader();
  ...
  reader.releaseLock()
  ...
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} 构造函数
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
