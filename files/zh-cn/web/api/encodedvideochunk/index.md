---
title: EncodedVideoChunk
slug: Web/API/EncodedVideoChunk
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

{{domxref('WebCodecs API','','',' ')}} 的 **`EncodedVideoChunk`** 接口用于表示编码视频数据的块。

## 构造函数

- {{domxref("EncodedVideoChunk.EncodedVideoChunk", "EncodedVideoChunk()")}}
  - : 创建一个新的 `EncodedVideoChunk` 对象。

## 实例属性

- {{domxref("EncodedVideoChunk.type")}} {{ReadOnlyInline}}
  - : 返回一个指示此数据块是否为关键帧的字符串。
- {{domxref("EncodedVideoChunk.timestamp")}} {{ReadOnlyInline}}
  - : 返回一个表示视频的时间戳（以微秒为单位）的整数。
- {{domxref("EncodedVideoChunk.duration")}} {{ReadOnlyInline}}
  - : 返回一个表示视频的持续时间（以微秒为单位）的整数。
- {{domxref("EncodedVideoChunk.byteLength")}} {{ReadOnlyInline}}
  - : 返回一个表示视频的长度（以字节为单位）的整数。

## 实例方法

- {{domxref("EncodedVideoChunk.copyTo()")}}
  - : 复制编码视频数据。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
