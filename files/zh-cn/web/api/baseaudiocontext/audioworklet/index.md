---
title: "BaseAudioContext: audioWorklet 属性"
short-title: audioWorklet
slug: Web/API/BaseAudioContext/audioWorklet
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{ APIRef("Web Audio API") }}{{securecontext_header}}

{{domxref("BaseAudioContext")}} 接口的只读属性`audioWorklet`返回一个{{domxref("AudioWorklet")}}实例，该实例可以用于添加实现用户自定义的音频加工{{domxref("AudioWorkletProcessor")}}的派生类。

## 值

{{domxref("AudioWorklet")}} 实例。

## 示例

_如果需要完整的用户自定义音频处理示例，可以查看{{domxref("AudioWorkletNode")}}演示。_

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## See also

- [使用 Web 音频 API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioWorkletNode")}}