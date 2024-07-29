---
title: Navigator：mediaDevices 属性
slug: Web/API/Navigator/mediaDevices
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("Media Capture and Streams")}}{{securecontext_header}}

**`Navigator.mediaDevices`** 只读属性返回一个 {{domxref("MediaDevices")}} 对象，该对象可提供对相机和麦克风等媒体输入设备以及屏幕共享的连接访问。

## 语法

```js-nolint
navigator.mediaDevices
```

### 返回值

{{domxref("MediaDevices")}} 单例对象。通常，你只需直接使用此对象的成员，例如调用 {{domxref("navigator.mediaDevices.getUserMedia()")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [媒体捕捉与媒体流 API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)：有关整个媒体捕捉与媒体流 API 的文档的入口点。
- [WebRTC API](/zh-CN/docs/Web/API/WebRTC_API)：与之密切相关的 WebRTC API 的相关文档。
