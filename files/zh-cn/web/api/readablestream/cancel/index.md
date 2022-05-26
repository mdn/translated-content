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
translation_of: Web/API/ReadableStream.cancel
---
{{APIRef("Streams")}}

{{domxref("ReadableStream")}} 接口的 **`cancel()`** 方法在流被取消后，返回 {{jsxref("Promise")}}。

当你完全完成流并且不需要来自它的任何数据时使用取消，即使有排队等待的数据块。
调用cancel后该数据丢失，并且流不再可读。
为了仍然可以读这些数据块并且而不是完全摆脱流，你应该使用 {{domxref("ReadableStreamDefaultController.close()")}}。

## 语法

```js
cancel()
cancel(reason)
```

### 参数

- `reason` {{optional_inline}}
  - : 人类可读的取消原因。底层源代码可能使用它，也可能不使用它。

### 返回值

一个 {{jsxref("Promise")}}，它满足 `reason` 参数给定的值。

### 异常

- {{jsxref("TypeError")}}
  - : 它尝试取消的流不是 {{domxref("ReadableStream")}}，或者它已被锁定。

## 示例

在 Jake Archibald's [取消一个fetch](https://jsbin.com/gameboy/edit?js,console)示例中，流用于逐块获取 WHATWG HTML规范;
每个块中搜索 "service workers"字符串。当找到搜索词时，`cancel()` 用于取消流 — 作业已被完成，因此不在需要它。

```js
var searchTerm = "service workers";
// 字符显示匹配结果的任意一方
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
    // 已经找到匹配 & 只是 context-gathering?
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
