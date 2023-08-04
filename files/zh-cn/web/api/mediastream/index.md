---
title: 媒体流 (MediaStream)
slug: Web/API/MediaStream
---

{{APIRef("Media Capture and Streams")}} **`MediaStream`** 接口是一个媒体内容的流.。一个流包含几个*轨道*，比如视频和音频轨道。

## 属性

- {{domxref("MediaStream.active")}} {{readonlyinline}}
  - : 布尔型。如果这个流处于活动状态值为 true，反之为 false
- {{domxref("MediaStream.ended")}} {{readonlyInline}}{{Deprecated_Inline}}

  - : 布尔型。如果 `ended` 事件在这个对象上触发了，也就是说这个流已经被完全读取，值为 true。如果还没有到达这个流的尾部，值为 false。

- {{domxref("MediaStream.id")}} {{readonlyInline}}
  - : 这是一个包含 36 个字符的 {{domxref("DOMString")}} ，用来作为这个对象的唯一标识符 (GUID) 。

### 事件处理

- {{domxref("MediaStream.onaddtrack")}}
  - : 这是 `addtrack` 事件在这个对象上触发时调用的事件处理器，这时一个{{domxref("MediaStreamTrack")}}对象被添加到这个流。
- {{domxref("MediaStream.onended")}}
  - : 这是当流终止 `ended` 时触发的事件。
- {{domxref("MediaStream.onremovetrack")}}
  - : 这是 `removetrack` 事件在这个对象上触发事调用的事件处理器，这时一个对象从流上移除。

## 方法

- {{domxref("MediaStream.addTrack()")}}

  - : 存储传入参数 {{domxref("MediaStreamTrack")}} 的一个副本。如果这个轨道已经被添加到了这个媒体流，什么也不会发生; 如果目标轨道为“完成”状态（也就是已经到尾部了），一个 INVALID_STATE_RAISE 异常会产生。

- {{domxref("MediaStream.clone()")}}

  - 返回这个 `MediaStream 对象的克隆版本。返回的版本会有一个新的 ID`。
  - 返回给定 ID 的轨道。如果没有参数或者没有指定 ID 的轨道，将返回 null。如果有几个轨道有同一个 ID，将返回第一个。

- {{domxref("MediaStream.getTracks()")}}

  - : 返回流中所有的{{domxref("MediaStreamTrack")}}列表。

- {{domxref("MediaStream.getAudioTracks()")}}

  - : 返回流中 kind 属性为"audio"的{{domxref("MediaStreamTrack")}}列表。顺序是不确定的，不同浏览器间会有不同，每次调用也有可能不同。

- {{domxref("MediaStream.getTrackById()")}}

  - : 返回给定 ID 的轨道。如果没有参数或者没有指定 ID 的轨道，将返回 null。如果有几个轨道有同一个 ID，将返回第一个。

- {{domxref("MediaStream.getVideoTracks()")}}

  - : 返回流中 kind 属性为"video"的{{domxref("MediaStreamTrack")}}列表。顺序是不确定的，不同浏览器间会有不同，每次调用也有可能不同。

- {{domxref("MediaStream.removeTrack()")}}
  - : 移除作为参数传入的 {{domxref("MediaStreamTrack")}}。如果这个轨道不在 `MediaStream` 对象中什么也不会发生；
    如果目标轨道为“完成”状态，一个 INVALID_STATE_RAISE 异常会产生。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关内容

- Using the MediaStream API
