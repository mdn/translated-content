---
title: AudioContext.createMediaStreamSource()
slug: Web/API/AudioContext/createMediaStreamSource
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }}接口的 `createMediaStreamSource()` 方法用于创建一个新的 {{ domxref("MediaStreamAudioSourceNode") }} 对象，需要传入一个媒体流对象 (MediaStream 对象)(可以从 {{ domxref("navigator.getUserMedia") }} 获得 MediaStream 对象实例), 然后来自 MediaStream 的音频就可以被播放和操作。

更多关于媒体流音频源 (media stream audio source nodes) 的细节，请参考{{ domxref("MediaStreamAudioSourceNode") }} 页面。

## 语法

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaStreamSource(stream);
```

### 参数

- stream
  - : 一个{{domxref("MediaStream")}} 对象，把他传入一个音频处理器进行操作

### 返回

{{domxref("MediaStreamAudioSourceNode")}}

## 示例

本例中，我们从 {{ domxref("navigator.getUserMedia") }}获取媒体 (audio + video) 流，把它传入 {{ htmlelement("video") }}中播放，并把视频调成静音，然后把获取到的 audio 传入 {{ domxref("MediaStreamAudioSourceNode") }}。接下来我们把获取到的 audio 传入{{ domxref("BiquadFilterNode") }} (可以把声音转化为低音)，输出到 {{domxref("AudioDestinationNode") }}.

{{ htmlelement("video") }} 元素下面滑动杆控制低音过滤器过滤的程度，滑动杆的值越大，低音更明显

> **备注：** 你可以查看[在线演示](https://mdn.github.io/webaudio-examples/stream-source-buffer/)，或者[查看源码](https://github.com/mdn/webaudio-examples/tree/main/stream-source-buffer)。

```js
var pre = document.querySelector("pre");
var video = document.querySelector("video");
var myScript = document.querySelector("script");
var range = document.querySelector("input");

// getUserMedia 获取流
// 把流放入 MediaStreamAudioSourceNode
// 输出到 video 元素

if (navigator.mediaDevices) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia({ audio: true, video: true })
    .then(function (stream) {
      video.srcObject = stream;
      video.onloadedmetadata = function (e) {
        video.play();
        video.muted = true;
      };

      // 创建 MediaStreamAudioSourceNode
      // Feed the HTMLMediaElement into it
      var audioCtx = new AudioContext();
      var source = audioCtx.createMediaStreamSource(stream);

      // 创建二阶滤波器
      var biquadFilter = audioCtx.createBiquadFilter();
      biquadFilter.type = "lowshelf";
      biquadFilter.frequency.value = 1000;
      biquadFilter.gain.value = range.value;

      // 把 AudioBufferSourceNode 连接到 gainNode
      // gainNode 连接到目的地，所以我们可以播放
      // 音乐并用鼠标调节音量
      source.connect(biquadFilter);
      biquadFilter.connect(audioCtx.destination);

      // Get new mouse pointer coordinates when mouse is moved
      // then set new gain value

      range.oninput = function () {
        biquadFilter.gain.value = range.value;
      };
    })
    .catch(function (err) {
      console.log("The following gUM error occured: " + err);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}

// dump script to pre element

pre.innerHTML = myScript.innerHTML;
```

> **备注：** **注意**: 调用`createMediaStreamSource()`, 来自于媒体流的音频回放将被重新传到 AudioContext 的处理器中。所以播放/暂停流仍然是可以通过 media 元素的 API 和自带的控制器控制。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 查看更多

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
