---
title: AudioContext.decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}接口的 `decodeAudioData()` 方法可用于异步解码音频文件中的 {{domxref("ArrayBuffer")}}。`ArrayBuffer` 数据可以通过 {{domxref("XMLHttpRequest")}} 和 {{domxref("FileReader")}} 来获取。AudioBuffer 是通过 AudioContext 采样率进行解码的，然后通过回调返回结果。

这是从音频轨道创建用于 web audio API 音频源的首选方法。

## 语法

旧版的回调函数语法

```
audioCtx.decodeAudioData(audioData, function(decodedData) {
  // use the decoded data here
});
```

新版的 promise-based 语法：

```
audioCtx.decodeAudioData(audioData).then(function(decodedData) {
  // use the decoded data here
});
```

## 举例

在本章节中，我们将首先学习基于回调的系统，然后采用新的基于 promise-based 的语法

### 旧的回调语法

在这个事例中， `getData()` 方法使用 XHR 加载一个音轨，设置请求的 responsetype 为 ArrayBuffer 使它返回一个 arraybuffer 数据，然后存储在 audioData 变量中。然后我们将这个 arraybuffer 数据置于 `decodeAudioData()` 方法中使用，当成功解码 PCM Data 后通过回调返回，将返回的结果通过{{ domxref("AudioContext.createBufferSource()") }}接口进行处理并获得一个{{ domxref("AudioBufferSourceNode") }}, 将源连接至{{domxref("AudioContext.destination") }}并将它设置为循环的。

通过按钮来运行 `getData()` 来获取音轨并播放它。当使用 `stop()` 方法后 source 将会被清除。

> **备注：** You can [run the example live](http://mdn.github.io/decode-audio-data/) (or [view the source](https://github.com/mdn/decode-audio-data).)

```js
// define variables

var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var source;

var pre = document.querySelector("pre");
var myScript = document.querySelector("script");
var play = document.querySelector(".play");
var stop = document.querySelector(".stop");

// use XHR to load an audio track, and
// decodeAudioData to decode it and stick it in a buffer.
// Then we put the buffer into the source

function getData() {
  source = audioCtx.createBufferSource();
  var request = new XMLHttpRequest();

  request.open("GET", "viper.ogg", true);

  request.responseType = "arraybuffer";

  request.onload = function () {
    var audioData = request.response;

    audioCtx.decodeAudioData(
      audioData,
      function (buffer) {
        source.buffer = buffer;

        source.connect(audioCtx.destination);
        source.loop = true;
      },

      function (e) {
        "Error with decoding audio data" + e.err;
      },
    );
  };

  request.send();
}

// wire up buttons to stop and play audio

play.onclick = function () {
  getData();
  source.start(0);
  play.setAttribute("disabled", "disabled");
};

stop.onclick = function () {
  source.stop(0);
  play.removeAttribute("disabled");
};

// dump script to pre element

pre.innerHTML = myScript.innerHTML;
```

### 新的 promise-based 语法

```js
ctx.decodeAudioData(compressedBuffer).then(function (decodedData) {
  // use the decoded data here
});
```

## 参数

- ArrayBuffer
  - : 将会被解码的音频数据，可通过{{domxref("XMLHttpRequest")}}或{{domxref("FileReader")}}来获取。
- DecodeSuccessCallback
  - : 当成功解码后会被调用的回调函数。该回调函数只有一个 AudioBuffer 类型参数。
- DecodeErrorCallback
  - : 一个可选的错误回调函数。

## 返回

一个 {{domxref("Promise") }}对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
