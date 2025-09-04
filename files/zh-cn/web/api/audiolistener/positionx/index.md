---
title: AudioListener：positionX 属性
short-title: positionX
slug: Web/API/AudioListener/positionX
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioListener") }} 接口的只读属性 `positionX` 是一个表示监听器在三维笛卡尔空间中的 x 坐标的 {{domxref("AudioParam")}}。

> [!NOTE]
> 当与 {{domxref("PannerNode")}} 同时使用时，若将 {{domxref("PannerNode.panningModel", "PannerNode")}} 设置为 equalpower，则该参数为 [_a-rate_](/zh-CN/docs/Web/API/AudioParam#a-rate)，否则为 [_k-rate_](/zh-CN/docs/Web/API/AudioParam#k-rate)。

## 值

一个 {{domxref("AudioParam")}}。其默认值为 0，范围可从负无穷到正无穷。

## 示例

参见 [`BaseAudioContext.createPanner()`](/zh-CN/docs/Web/API/BaseAudioContext/createPanner#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
