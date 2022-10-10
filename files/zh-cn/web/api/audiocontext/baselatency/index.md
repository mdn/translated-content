---
title: AudioContext.baseLatency
slug: Web/API/AudioContext/baseLatency
---

{{SeeCompatTable}}{{APIRef("Web Audio API")}}

The **`baseLatency`** read-only property of the {{domxref("AudioContext")}} interface returns a double that represents the number of seconds of processing latency incurred by the `AudioContext` passing the audio from the {{domxref("AudioDestinationNode")}} to the audio subsystem.

You can request a certain latency during {{domxref("AudioContext.AudioContext()", "construction time", "", "true")}} with the `latencyHint` option but the browser may ignore the option.

## Syntax

```plain
var baseLatency = audioCtx.baseLatency;
```

### Value

A double representing the base latency in seconds.

## Example

```js
//default latency ("interactive")
const audioCtx1 = new AudioContext();
console.log(audioCtx1.baseLatency);//0.01

//higher latency ("playback")
const audioCtx2 = new AudioContext({ latencyHint: 'playback' });
console.log(audioCtx2.baseLatency);//0.02
```

## Specifications

{{Specifications}}

## Browser Compatibility

{{Compat}}
