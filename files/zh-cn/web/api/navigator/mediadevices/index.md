---
title: Navigator.mediaDevices
slug: Web/API/Navigator/mediaDevices
---

{{APIRef("Media Capture and Streams")}}mediaDevices 是 Navigator 只读属性，返回一个 {{domxref("MediaDevices")}} 对象，该对象可提供对相机和麦克风等媒体输入设备的连接访问，也包括屏幕共享。

## 语法

```plain
var mediaDevices = navigator.mediaDevices;
```

### 返回值

{{domxref("MediaDevices")}} 是一个单例对象。通常，您只需直接使用此对象的成员，例如通过调用{{domxref("navigator.mediaDevices.getUserMedia()")}}。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 参考阅读

- [Media Capture and Streams API](/zh-CN/docs/Web/API/Media_Streams_API): The entry point to the documentation about the entire media stream API.
- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API): Documentation about the WebRTC API, which is closely related.
