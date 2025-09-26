---
title: AudioScheduledSourceNode.stop()
slug: Web/API/AudioScheduledSourceNode/stop
---

{{ APIRef("Web Audio API") }}

{{domxref("AudioScheduledSourceNode")}} 上的`stop()`方法将声音安排在指定的时间停止播放。如果没有指定时间，声音将立即停止播放。

每次在同一个节点上调用 `stop()` 时，指定的时间将替换任何未发生的计划停止时间。如果节点已经停止，则此方法无效。

> [!NOTE]
> 如果计划的停止时间发生在节点计划的开始时间之前，则节点永远不会开始运行。

## 语法

```js-nolint
stop()
stop(when)
```

### 参数

- `when` {{optional_inline}}
  - : 声音停止播放的时间，单位为秒。这个值在 {{domxref("AudioContext")}} 用于其 {{domxref("AudioContext.currentTime", "currentTime")}} 属性的同一时间坐标系统中指定。省略这个参数，设置为 0 或者负值都会立即停止播放。

### Return value

{{jsxref("undefined")}}

### Exceptions

- `InvalidStateNode`
  - : 节点还没有通过调用{{domxref("AudioScheduledSourceNode.start", "start()")}}方法被播放。
- `RangeError`
  - : 当 `when` 指定为负值时。

## Example

This example demonstrates starting an oscillator node, scheduled to begin playing at once and to stop playing in one second. The stop time is determined by taking the audio context's current time from {{domxref("AudioContext.currentTime")}} and adding 1 second.

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* Let's play a sine wave for one second. */

osc.start();
osc.stop(context.currentTime + 1);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode.start", "start()")}}
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("ConstantSourceNode")}}
- {{domxref("OscillatorNode")}}
