---
title: srcObject
slug: Web/API/HTMLMediaElement/srcObject
---

{{SeeCompatTable}}{{APIRef("")}}

{{domxref("HTMLMediaElement")}} 接口的 **`srcObject`** 属性设定或返回一个对象，这个对象提供了一个与{{domxref("HTMLMediaElement")}}关联的媒体源，这个对象通常是 {{domxref("MediaStream")}} ，但根据规范可以是 {{domxref("MediaSource")}}， {{domxref("Blob")}} 或者 {{domxref("File")}}。

> **备注：** 截至 2020 年 3 月，只有 Safari 支持设置 `MediaStream` 之外的对象。在其他浏览器跟上之前，对`MediaSource`, `Blob` 和 `File`, 请考虑返回创建具有{domxref("URL.createObjectURL()")}} 的 URL，并将其赋值给{{domxref("HTMLMediaElement.src")}} 有关示例，请参阅下文。

## 语法

```plain
var mediaStream = HTMLMediaElement.srcObject
HTMLMediaElement.srcObject = mediaStream
```

### 值

一个 {{domxref('MediaStream')}}，{{domxref('MediaSource')}}，{{domxref('Blob')}} 或者 {{domxref('File')}} 对象（具体支持请参见兼容表）。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}
