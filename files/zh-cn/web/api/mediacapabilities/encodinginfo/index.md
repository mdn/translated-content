---
title: MediaCapabilities：encodingInfo() 方法
slug: Web/API/MediaCapabilities/encodingInfo
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("Media Capabilities API")}}{{AvailableInWorkers}}

{{domxref("MediaCapabilities")}} 接口的 **`encodingInfo()`** 方法返回一个会兑现经过测试的媒体配置在编码媒体时的能力信息的 promise。其包含三个布尔属性：`supported`（是否支持）、`smooth`（能否流畅播放）和 `powerefficient`（播放是否省电），以描述设备与此媒体类型的兼容性。

## 语法

```js-nolint
encodingInfo(configuration)
```

### 参数

- `configuration`
  - : 具有 `type` 属性以及 `video` _或_ `audio` 属性（包含适当类型的配置）的对象：
    - `type`
      - : 测试的媒体类型。可取以下两个值之一：
        - `record`
          - : 表示用于录制媒体的配置，例如使用 {{domxref("MediaRecorder")}}。
        - `webrtc`
          - : 表示用于通过电子方式传输（例如，使用 {{domxref("RTCPeerConnection")}}）的配置。**注意**：Firefox 使用 `transmission` 来表示这个类型，而 `webrtc` 不起作用。
        - `transmission` {{non-standard_inline}}
          - : Firefox 中使用的 `webrtc` 的同义词。

    - `video`
      - : 用于配置视频媒体源的对象。其具有以下属性：
        - `contentType`
          - : 包含有效视频 MIME 类型以及（可选的）[`codecs` 参数](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter)的字符串。
        - `width`
          - : 视频的宽度。
        - `height`
          - : 视频的高度。
        - `bitrate`
          - : 编码视频文件的 1 秒内容所需的比特数。
        - `framerate`
          - : 构成视频播放的 1 秒内容的帧数。

    - `audio`
      - : 用于配置音频媒体源的对象。其具有以下属性：
        - `contentType`
          - : 包含有效音频 MIME 类型以及（可选的）[`codecs` 参数](/zh-CN/docs/Web/Media/Guides/Formats/codecs_parameter)的字符串。
        - `channels`
          - : 音轨使用的声道数。
        - `bitrate`
          - : 编码音频文件 1 秒内容所需的比特数。
        - `samplerate`
          - : 构成音频文件 1 秒内容的音频采样数。

### 返回值

{{jsxref('Promise')}}，其会兑现一个包含三个布尔属性的对象：

- `supported`
  - : 如果媒体内容可以被编码，则为 `true`。否则为 `false`。
- `smooth`
  - : 如果媒体可以被流程（或高质量）播放，则为 `true`。否则为 `false`。
- `powerEfficient`
  - : 如果媒体的播放是省电的，则为 `true`。否则为 `false`。

浏览器将在设备的统计信息被记录后，再将受支持的媒体配置报告为能流畅播放（`smooth`）且播放是省电的（`powerEfficient`）。所有受支持的音频编解码器都将报告为播放是省电的。

### 异常

- {{jsxref("TypeError")}}
  - : 如果向 `encodingInfo()` 方法传递的 `configuration` 是无效的，则会抛出此异常，可能的原因如下：
    - 类型不是视频或音频
    - `contentType` 不是有效的编解码器 MIME 类型
    - 传递给此方法的媒体配置中有一些其他错误，包括省略任何 `configuration` 元素。

## 示例

```js
// 创建用于测试的媒体配置
const mediaConfig = {
  type: "record", // 或“transmission”
  video: {
    contentType: "video/webm;codecs=vp8.0", // 有效内容类型
    width: 1920, // 视频宽度
    height: 1080, // 视频高度
    bitrate: 120000, // 用于对 1 秒的视频内容进行编码的比特数
    framerate: 48, // 组成 1 秒内容的帧数
  },
};

// 检查支持和性能
navigator.mediaCapabilities.encodingInfo(mediaConfig).then((result) => {
  console.log(`此配置${result.supported ? "" : "不"}受支持，`);
  console.log(`${result.smooth ? "" : "不"}能流畅编码，且`);
  console.log(`${result.powerEfficient ? "" : "不"}省电。`);
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("MediaCapabilities.decodingInfo()")}}
