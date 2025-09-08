---
title: AudioListener：forwardZ 属性
short-title: forwardZ
slug: Web/API/AudioListener/forwardZ
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioListener") }} 接口的只读属性 `forwardZ` 返回一个表示定义监听器指向方向的向量的 z 分量的 {{domxref("AudioParam")}}。

> [!NOTE]
> 当与 {{domxref("PannerNode")}} 同时使用时，若将 {{domxref("PannerNode.panningModel", "panningModel")}} 设置为 equalpower，则该参数为 _a-rate_；否则为 _k-rate_。

## 值

{{domxref("AudioParam")}}。默认值为 -1，范围取负无穷到正无穷。

## 示例

参见 [`BaseAudioContext.createPanner()`](/zh-CN/docs/Web/API/BaseAudioContext/createPanner#示例) 以获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
