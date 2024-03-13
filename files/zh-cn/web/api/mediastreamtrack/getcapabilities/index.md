---
title: MediaStreamTrack.getCapabilities()
slug: Web/API/MediaStreamTrack/getCapabilities
---

{{APIRef("Media Capture and Streams")}}

{{domxref("MediaStreamTrack")}} 接口的 **`getCapabilities()`** 方法返回一个 {{domxref('MediaTrackCapabilities')}} 对象，此对象表示每个可调节属性的值或者范围，该特性依赖于平台和{{Glossary("user agent")}}.

一旦你知道了浏览器的功能，你的脚本可以通过调用 {{domxref("MediaStreamTrack.applyConstraints", "applyConstraints()")}} 来请求配置为匹配理想或可接受的设置。参考[功能、约束和设置](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API/Constraints)以了解受限制属性的具体细节。

## 语法

```plain
var capabilities = MediaStreamTrack.getCapabilities();
```

### 参数

没有参数。

### 返回值

A {{domxref('MediaTrackCapabilities')}} object which specifies the value or range of values which are supported for each of the user agent's supported constrainable properties.

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
