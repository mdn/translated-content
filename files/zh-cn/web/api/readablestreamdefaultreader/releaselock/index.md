---
title: ReadableStreamDefaultReader.releaseLock()
slug: Web/API/ReadableStreamDefaultReader/releaseLock
---

{{APIRef("Streams")}}

{{domxref("ReadableStreamDefaultReader")}} 接口的 **`releaseLock()`** 方法用于释放 reader 对流的锁定。

如果释放锁时关联流出错，reader 随后会以同样的方式发生错误；此外，reader 将关闭。

如果在 reader 仍有待处理的读取请求时释放了锁，那么 reader 的 {{domxref("ReadableStreamDefaultReader.read()")}} 方法返回的 promise 将立刻使用 `TypeError` 拒绝。未读的分块将会保留在内部队列中，并且稍后可以通过获取一个新的 reader 读取。

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
  - : 如果源对象不是 `ReadableStreamDefaultReader` 则抛出该异常。

## 示例

```js
function fetchStream() {
  const reader = stream.getReader();

  // ...

  reader.releaseLock();

  // ...
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("ReadableStreamDefaultReader.ReadableStreamDefaultReader", "ReadableStreamDefaultReader()")}} 构造函数
- [使用可读流](/zh-CN/docs/Web/API/Streams_API/Using_readable_streams)
