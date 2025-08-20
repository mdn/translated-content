---
title: AudioListener：forwardX 属性
slug: Web/API/AudioListener/forwardX
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioListener") }} 接口的只读属性 `forwardX` 是一个表示定义监听器指向方向的向量的 x 值的 {{domxref("AudioParam")}}。

> [!NOTE]
> 当与 {{domxref("PannerNode")}} 一起使用时，如果 {{domxref("PannerNode.panningModel", "panningModel")}} 设置为 equalpower，则该参数为 _a-rate_；否则为 _k-rate_。

## 值

一个 {{domxref("AudioParam")}}。其默认值为 0，范围可从负无穷到正无穷。

## 示例

请参阅 [`BaseAudioContext.createPanner()`](/zh-CN/docs/Web/API/BaseAudioContext/createPanner#examples) 获取示例代码。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [使用 Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)

```

```
