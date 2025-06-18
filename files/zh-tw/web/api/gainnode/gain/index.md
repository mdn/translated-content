---
title: GainNode.gain
slug: Web/API/GainNode/gain
---

{{ APIRef("Web Audio API") }}

{{ domxref("GainNode") }} 介面的 `gain` 屬性是 [a-rate](/zh-TW/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}，代表增益的數值。

## 語法

```js
var audioCtx = new AudioContext();
var gainNode = audioCtx.createGain();
gainNode.gain.value = 0.5;
```

### 傳回值

一個 {{domxref("AudioParam")}}.

> [!NOTE]
> 雖然傳回的 `AudioParam` 是唯讀的，但是它所代表的值可以更改。

## 範例

See [`BaseAudioContext.createGain()`](/zh-TW/docs/Web/API/BaseAudioContext/createGain#examples) for example code showing how to use an `AudioContext` to create a `GainNode`, which is then used to mute and unmute the audio by changing the gain property value.

## 規格

{{Specifications}}

## 瀏覽器相容度

{{Compat}}

## 參見

- [Using the Web Audio API](/zh-TW/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
