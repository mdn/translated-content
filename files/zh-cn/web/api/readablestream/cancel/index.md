---
title: ReadableStream.cancel()
slug: Web/API/ReadableStream/cancel
tags:
  - API
  - Method
  - ReadableStream
  - Reference
  - Streams
  - cancel
translation_of: Web/API/ReadableStream/cancel
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的 **`cancel()`** 方法返回一个 {{jsxref("Promise")}}，这个 promise 会在流被取消的时候兑现。

cancel 用于在不再需要来自它的任何数据的情况下（即使仍有排队等待的数据块）完全结束一个流。调用 cancel 后该数据丢失，并且流不再可读。为了仍然可以读这些数据块而不完全结束这个流，你应该使用 {{domxref("ReadableStreamDefaultController.close()")}}。

## 语法

```js
cancel()
cancel(reason)
```

### 参数

- `reason` {{optional_inline}}
  - : 人类可读的取消原因。底层源代码可能会使用它。

### 返回值

一个 {{jsxref("Promise")}}，会在结束时使用给定的 `reason` 参数兑现。

### 异常

- {{jsxref("TypeError")}}
  - : 它尝试取消的流不是 {{domxref("ReadableStream")}}，或者它已被锁定。

## 示例

在 Jake Archibald 的[取消一个 fetch](https://jsbin.com/gameboy/edit?js,console) 示例中，流用于逐块获取 WHATWG HTML 规范；并在每个块中搜索“service workers”字符串。当找到搜索词时，使用 `cancel()` 取消流——作业已被完成，因此不再需要它。

```js
var searchTerm = "service workers";
// Chars to show either side of the result in the match
var contextBefore = 30;
var contextAfter = 30;
var caseInsensitive = true;
var url = 'https://html.spec.whatwg.org/';
console.log(`Searching '${url}' for '${searchTerm}'`);
fetch(url).then(response => {
  console.log('Received headers');
  var decoder = new TextDecoder();
  var reader = response.body.getReader();
  var toMatch = caseInsensitive ? searchTerm.toLowerCase() : searchTerm;
  var bufferSize = Math.max(toMatch.length - 1, contextBefore);
  var bytesReceived = 0;
  var buffer = '';
  var matchFoundAt = -1;
  return reader.read().then(function process(result) {
    if (result.done) {
      console.log('Failed to find match');
      return;
    }
    bytesReceived += result.value.length;
    console.log(`Received ${bytesReceived} bytes of data so far`);
    buffer += decoder.decode(result.value, {stream: true});
    // already found match & just context-gathering?
    if (matchFoundAt === -1) {
      matchFoundAt = (caseInsensitive ? buffer.toLowerCase() : buffer).indexOf(toMatch);
    }
    if (matchFoundAt === -1) {
      buffer = buffer.slice(-bufferSize);
    }
    else if (buffer.slice(matchFoundAt + toMatch.length).length >= contextAfter) {
      console.log("Here's the match:")
      console.log(buffer.slice(
        Math.max(0, matchFoundAt - contextBefore),
        matchFoundAt + toMatch.length + contextAfter
      ));
      console.log("Cancelling fetch");
      reader.cancel();
      return;
    }
    else {
      console.log('Found match, but need more context…');
    }
    // 保持读取
    return reader.read().then(process);
  });
}).catch(err => {
  console.log("Something went wrong. See devtools for details. Does the response lack CORS headers?");
  throw err;
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
