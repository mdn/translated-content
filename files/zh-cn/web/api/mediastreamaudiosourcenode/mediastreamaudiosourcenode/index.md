---
title: MediaStreamAudioSourceNode.MediaStreamAudioSourceNode()
slug: Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode
---

{{APIRef("Web Audio API")}}

**`MediaStreamAudioSourceNode()`**构造器创建一个新的 {{domxref("MediaStreamAudioSourceNode")}}对象实例。

## 语法

```js
var myAudioSource = new MediaStreamAudioSourceNode(context, options);
```

### 参数

- _context_
  - : 一个用来使用 node 的音频环境{{domxref("AudioContext")}}。
- _options_

  - : `MediaStreamAudioSourceOptions`，一个 map 对象，定义`MediaStreamAudioSourceNode`的属性：

    - `mediaStream`: 需要使用的音频流

## 示例

```js
// define variables
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();

// getUserMedia block - grab stream 获取音频流
// put it into a  把音频流放入 MediaStreamAudioSourceNode
if (navigator.mediaDevices.getUserMedia) {
  console.log("new getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia(
      // constraints: audio and video for this app
      {
        audio: true,
        video: false,
      },
    )
    .then(function (stream) {
      // Create a MediaStreamAudioSourceNode
      var options = {
        mediaStream: stream,
      };

      var source = new MediaStreamAudioSourceNode(audioCtx, options);
      source.connect(audioCtx.destination);
    })
    .catch(function (err) {
      console.log("The following gUM error occured: " + err);
    });
} else {
  console.log("new getUserMedia not supported on your browser!");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
