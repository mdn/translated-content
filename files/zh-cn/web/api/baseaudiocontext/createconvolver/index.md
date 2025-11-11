---
title: AudioContext.createConvolver()
slug: Web/API/BaseAudioContext/createConvolver
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}的方法 `createConvolver()` 能创建一个 {{ domxref("ConvolverNode") }}，通常用来对你的音频应用混响效果。在 [Convolution 规范定义](https://webaudio.github.io/web-audio-api/#background-3) 中查看更多信息。

## 语法

```js
var audioCtx = new AudioContext();
var convolver = audioCtx.createConvolver();
```

### 返回值

{{domxref("ConvolverNode")}}对象。

## 例子

下面的例子展示了一个 AudioContext 创建一个 混响器节点 的基本使用方法。基本前提是你创建一个包含声音样本的 AudioBuffer 用作混响环境 (称之为*脉冲响应*,) 和在混响器中应用。下面的例子使用了一个简短的示例音乐厅人群效果，所以混响效果应用深度和回声。

更多完整例子请查看 [Voice-change-O-matic demo](https://mdn.github.io/voice-change-o-matic/) (中 [app.js](https://github.com/mdn/voice-change-o-matic/blob/gh-pages/scripts/app.js) 的代码)。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var convolver = audioCtx.createConvolver();

  ...

// grab audio track via XHR for convolver node

var soundSource, concertHallBuffer;

ajaxRequest = new XMLHttpRequest();
ajaxRequest.open('GET', 'concert-crowd.ogg', true);
ajaxRequest.responseType = 'arraybuffer';

ajaxRequest.onload = function() {
  var audioData = ajaxRequest.response;
  audioCtx.decodeAudioData(audioData, function(buffer) {
      concertHallBuffer = buffer;
      soundSource = audioCtx.createBufferSource();
      soundSource.buffer = concertHallBuffer;
    }, function(e){"Error with decoding audio data" + e.err});
}

ajaxRequest.send();

  ...

convolver.buffer = concertHallBuffer;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
