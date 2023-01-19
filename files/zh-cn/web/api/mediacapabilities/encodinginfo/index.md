---
title: MediaCapabilitiesInfo
slug: Web/API/MediaCapabilities/encodingInfo
---

{{APIRef("Media Capabilities API")}}

[Media Capabilities API](/zh-CN/docs/Web/API/Media_Capabilities_API)的**`MediaCapabilitiesInfo`** 接口在 {{domxref("MediaCapabilities")}}接口的 {{domxref("MediaCapabilities.encodingInfo()")}} 或 {{domxref("MediaCapabilities.decodingInfo()")}} 方法返回的 promise 完成时变得可用。它提供了媒体类型是否支持，在编码或解码此媒体时是否流畅和能效等信息。

## 属性

`MediaCapabilitiesInfo` 接口包含 3 个布尔属性：

- `supported`: 给出 {{domxref("MediaConfiguration")}} 中定义的属性，确定指定的媒体内容能否完全被 编码 (如果 {{domxref("MediaEncodingConfiguration")}} 已设置) 或 解码 (如果 {{domxref("MediaDecodingConfiguration")}} 已设置) 。如果是，`supported` 为 _true_. 否则为 _false_.
- `smooth`: 给出 {{domxref("MediaConfiguration")}} 中定义的属性，确定指定的媒体内容在回放时能否高质量和流畅。如果 `supported` 为 `true`, 并且回放时将流畅，`smooth` 为 _true_, 否则为 _false._
- `powerEfficient`: 给出 {{domxref("MediaConfiguration")}} 中定义的属性，确定指定的媒体内容在回放时能否高能效。如果 `supported` 为 `true`, 并且回放时将高能效，`powerEfficient` 为 _true_, 否则为 _false._

浏览器将报告一个支持的媒体配置为 `smooth` 和 `powerEfficient` 直到此设备的统计信息被记录。所有受支持的音频编解码器将报告为高能效。

## 范例

```js
// 测试的 {{domxref("MediaConfiguration")}}
const mediaConfig = {
    type : 'file',
    audio : {
        contentType : "audio/ogg",
        channels : 2,
        bitrate : 132700,
        samplerate : 5200
     },
};

// 检查支持和性能
navigator.mediaCapabilities.decodingInfo(mediaConfig).then(result => { // result 包含媒体兼容信息
    console.log('This configuration is ' +
        (result.supported ? '' : 'not ') + 'supported, ' +             // 配置的媒体能否被用户代理解码？
        (result.smooth ? '' : 'not ') + 'smooth, and ' +               // 是否流畅？
        (result.powerEfficient ? '' : 'not ') + 'power efficient.').   // 是否高能效？
});
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参考

- {{domxref("MediaConfiguration")}}
- {{domxref("MediaCapabilities.encodingInfo()")}}
- {{domxref("MediaCapabilities.decodingInfo()")}}
