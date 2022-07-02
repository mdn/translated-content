---
title: WritableStream.locked
slug: Web/API/WritableStream/locked
page-type: web-api-instance-property
tags:
  - API
  - Property
  - Reference
  - Streams
  - WritableStream
  - locked
translation_of: Web/API/WritableStream/locked
---
{{APIRef("Streams")}}

{{domxref("WritableStream")}} 接口的只读属性 **`locked`** 返回一个布尔值，表示 `WritableStream` 是否锁定到一个 writer。

## 值

一个布尔值，表示可写流是否已锁定。

## 示例

```js
const writableStream = new WritableStream({
  write(chunk) {
    ...
  },
  close() {
    ...
  },
  abort(err) {
    ...
  }
}, queuingStrategy);
...
const writer = writableStream.getWriter();
writableStream.locked
// should return true, as the stream has been locked to a writer
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
