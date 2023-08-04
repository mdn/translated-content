---
title: AudioBufferSourceNode.start()
slug: Web/API/AudioBufferSourceNode/start
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioBufferSourceNode") }} 接口的`start()`方法用于计划对缓冲区中包含的音频数据的回放，或者立即开始回放。

## 语法

```
AudioBufferSourceNode.start([when][, offset][, duration]);
```

### 参数

- `when` {{optional_inline}}
  - : The time 声音开始播放的时间，单位是秒，与 {{domxref("AudioContext")}}使用相同的时间坐标系统。如果 `when` 小于 ({{domxref("AudioContext.currentTime")}}, 或者是 0，声音立即被播放。 **默认值是 0。**
- `offset` {{optional_inline}}
  - : An offset, specified as the number of seconds in the same time coordinate system as the `AudioContext`, to the time within the audio buffer that playback should begin. For example, to start playback halfway through a 10-second audio clip, `offset` should be 5. The default value, 0, will begin playback at the beginning of the audio buffer, and offsets past the end of the audio which will be played (based on the audio buffer's {{domxref("AudioBuffer.duration", "duration")}} and/or the {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}} property) are silently clamped to the maximum value allowed. The computation of the offset into the sound is performed using the sound buffer's natural sample rate, rather than the current playback rate, so even if the sound is playing at twice its normal speed, the midway point through a 10-second audio buffer is still 5.
- `duration` {{optional_inline}}
  - : 将要播放的声音的持续时间，指定单位为秒。如果这个参数没有被指定，声音播放到自然结束或者使用{{domxref("AudioScheduledSourceNode.stop", "stop()")}} 方法结束。使用这个参数的功能与调用 `start(when, offset)` 和调用 `stop(when+duration)`完全相同。

### 返回值

{{jsxref("undefined")}}.

### 异常

- `TypeError`
  - : A negative value was specified for one or more of the three time parameters. Please don't attempt to tamper with the laws of temporal physics.
- `InvalidStateError`
  - : `start()` 已经被调用。在一个`AudioBufferSourceNode`的生命周期内只能调用一次这个函数。

## 例子

The most simple example just starts the audio buffer playing from the beginning — you don't need to specify any parameters in this case:

```js
source.start();
```

The following more complex example will, 1 second from now, start playing 10 seconds worth of sound starting 3 seconds into the audio buffer.

```js
source.start(audioCtx.currentTime + 1, 3, 10);
```

> **备注：** For a more complete example showing `start()` in use, check out our {{domxref("AudioContext.decodeAudioData()")}} example, You can also [run the code example live](http://mdn.github.io/decode-audio-data/), or [view the source](https://github.com/mdn/decode-audio-data).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
