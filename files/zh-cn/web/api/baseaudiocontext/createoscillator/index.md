---
title: BaseAudioContext.createOscillator()
slug: Web/API/BaseAudioContext/createOscillator
---

{{APIRef("Web Audio API")}}

{{domxref("BaseAudioContext")}} 接口的 createOscillator() 方法创建一个 {{domxref("OscillatorNode")}}，它是一个表示周期性波形的源。它基本上产生一个不变的音调。

## Syntax

```plain
var oscillatorNode = audioCtx.createOscillator();
```

### Returns

An {{domxref("OscillatorNode")}}.

## Example

以下示例显示了用于创建振荡器节点的 AudioContext 的基本用法。有关应用示例/信息，请查看我们的[Violent Theremin demo](http://mdn.github.io/violent-theremin/)（有关相关代码，请参阅[see app.js](https://github.com/mdn/violent-theremin/blob/gh-pages/scripts/app.js)）; 另请参阅我们的 OscillatorNode 页面以获取更多信息。

```js
// create web audio api context
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// create Oscillator node
var oscillator = audioCtx.createOscillator();

oscillator.type = "square";
oscillator.frequency.setValueAtTime(3000, audioCtx.currentTime); // value in hertz
oscillator.connect(audioCtx.destination);
oscillator.start();
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
