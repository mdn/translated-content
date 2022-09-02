---
title: GainNode.gain
slug: Web/API/GainNode/gain
---
{{ APIRef("Web Audio API") }}

{{ domxref("GainNode") }} 接口的 gain 属性是一个[a-rate](/zh-CN/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} ,表示可利用的增益量。

## 语法

```js
var audioCtx = new AudioContext();
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
```

### 值

An {{domxref("AudioParam")}}.

> **备注：** Though the `AudioParam` returned is read-only, the value it represents is not.

## Example

{{page("/en-US/docs/Web/API/AudioContext.createGain","Example")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat("api.GainNode.gain")}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
