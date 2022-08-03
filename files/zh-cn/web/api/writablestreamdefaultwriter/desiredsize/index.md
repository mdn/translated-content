---
title: WritableStreamDefaultWriter.desiredSize
slug: Web/API/WritableStreamDefaultWriter/desiredSize
page-type: web-api-instance-property
tags:
  - API
  - Experimental
  - Property
  - Reference
  - Streams
  - WritableStreamDefaultWriter
  - desiredSize
translation_of: Web/API/WritableStreamDefaultWriter/desiredSize
---
{{SeeCompatTable}}{{APIRef("Streams")}}

{{domxref("WritableStreamDefaultWriter")}} 接口的只读属性 **`desiredSize`** 返回填充满流的内部队列需要的大小。

## 值

一个整数。请注意，在队列已满的情况下，则可能是负数。

如果无法成功写入流（由于流发生错误或者中止入队），则该值为 `null`，如果流关闭，则该值为 0。

### 异常

- {{jsxref("TypeError")}}
  - : writer 的锁已被释放。

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

...

// return stream's desired size
let size = writer.desiredSize;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
