---
title: AudioContext.currentTime
slug: Web/API/BaseAudioContext/currentTime
---

{{ APIRef("Web Audio API") }}

The `currentTime` read-only property of the {{ domxref("AudioContext") }} interface returns a double representing an ever-increasing hardware timestamp in seconds that can be used for scheduling audio playback, visualizing timelines, etc. It starts at 0.

## Syntax

```js
var audioCtx = new AudioContext();
console.log(audioCtx.currentTime);
```

## Exemplo

```js
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioCtx = new AudioContext();
// Older webkit/blink browsers require a prefix

...

console.log(audioCtx.currentTime);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando a API Web Audio API](/pt-BR/docs/Web_Audio_API/Using_Web_Audio_API)
