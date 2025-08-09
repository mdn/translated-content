---
title: MediaCapabilities
slug: Web/API/MediaCapabilities
l10n:
  sourceCommit: 49f6e40b12be0d6d897d3dab09caafbc093f7677
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

[媒体能力 API](/zh-CN/docs/Web/API/Media_Capabilities_API) 的 **`MediaCapabilities`** 接口提供有关设备、系统和浏览器解码能力的信息。该 API 可用于根据编解码器、配置、分辨率和比特率向浏览器查询设备的解码能力。该信息可用于向用户提供最佳媒体流，并确定播放是否应该流畅和省电。

这些信息可通过 {{domxref("Navigator")}} 和 {{domxref("WorkerNavigator")}} 接口的 **`mediaCapabilities`** 属性访问。

## 实例方法

- {{domxref("MediaCapabilities.encodingInfo()")}}
  - : 在传递有效的媒体配置后，它会返回一个会兑现有关该媒体类型是否受支持以及对此类媒体进行编码是否流畅且省电的信息的 promise。
- {{domxref("MediaCapabilities.decodingInfo()")}}
  - : 在传递有效的媒体配置后，它会返回一个会兑现有关该媒体类型是否受支持以及对此类媒体进行解码是否流畅且省电的信息的 promise。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [HTMLMediaElement](/zh-CN/docs/Web/API/HTMLMediaElement) 的 [canPlayType()](/zh-CN/docs/Web/API/HTMLMediaElement/canPlayType) 方法
- [MediaSource](/zh-CN/docs/Web/API/MediaSource) 的 [isTypeSupported()](/zh-CN/docs/Web/API/MediaSource/isTypeSupported_static) 方法
- {{domxref("Navigator")}} 接口
