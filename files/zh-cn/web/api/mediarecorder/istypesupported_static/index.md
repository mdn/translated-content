---
title: MediaRecorder.isTypeSupported
slug: Web/API/MediaRecorder/isTypeSupported_static
---

{{APIRef("MediaStream Recording")}}

**`MediaRecorder.isTypeSupported()`**方法会判断其 MIME 格式能否被客户端录制。

## 语法

```plain
var canRecord = MediaRecorder.isTypeSupported(mimeType)
```

### 参数

- `mimeType`
  - : 需要检查的 MIME 格式

### 返回值

如果 {{domxref("MediaRecorder")}} 在浏览器上的具体实现能够支持指定 MIME 类型的 {{domxref("Blob")}} 对象就返回 true. 如果没有足够的资源来支持录制和编码任务，最终录制依然会失败。如果返回结果是 false，用户的浏览器就无法录制指定的格式。

## Example

```js
var types = [
  "video/webm",
  "audio/webm",
  "video/webm;codecs=vp8",
  "video/webm;codecs=daala",
  "video/webm;codecs=h264",
  "audio/webm;codecs=opus",
  "video/mpeg",
];

for (var i in types) {
  console.log(
    "Is " +
      types[i] +
      " supported? " +
      (MediaRecorder.isTypeSupported(types[i]) ? "Maybe!" : "Nope :("),
  );
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 看过这个的用户还浏览了以下内容：

- [Using Service Workers](/zh-CN/docs/Web/API/ServiceWorker_API/Using_Service_Workers)
- {{domxref("MediaStreamTrack")}}
- {{domxref("MediaStream")}}
