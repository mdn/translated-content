---
title: AudioContext.createMediaElementSource()
slug: Web/API/AudioContext/createMediaElementSource
---

{{ APIRef("Web Audio API") }}

{{ domxref("AudioContext") }} 接口的 `createMediaElementSource()` 方法用于创建一个新的 {{ domxref("MediaElementAudioSourceNode") }} 对象，输入某个存在的 HTML {{htmlelement("audio")}} or {{htmlelement("video")}} 元素，对应的音频即可被播放或者修改。

为寻求更多关于媒体元素音频源节点的具体信息，请查阅 {{ domxref("MediaElementAudioSourceNode") }} 参考页。

## 语法

```js
var audioCtx = new AudioContext();
var source = audioCtx.createMediaElementSource(myMediaElement);
```

### 参数

- `myMediaElement`
  - : 某个被期待被录入音频处理图修改的 {{domxref("HTMLMediaElement")}} 对象。

### 返回值

一个 {{domxref("MediaElementAudioSourceNode")}} 对象。

## 示例

该示例由 {{htmlelement("audio") }} 元素，通过使用 `createMediaElementSource()` 方法，创建了一个音源，将其通过 {{ domxref("GainNode") }} 节点，输出到{{ domxref("AudioDestinationNode") }} 节点以播放。当鼠标指针移动时，`updatePage()` 函数被调用，该函数计算当前鼠标 Y 坐标与页面高度的比值，改变 {{ domxref("GainNode") }} 节点的值以调整音量。您就可以通过鼠标上下移动而改变音乐的音量了。

> **备注：** 也可以[浏览该示例的在线演示](http://mdn.github.io/webaudio-examples/media-source-buffer/), 或者[浏览源代码](https://github.com/mdn/webaudio-examples/tree/main/media-source-buffer)。

```js
var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
var myAudio = document.querySelector("audio");
var pre = document.querySelector("pre");
var myScript = document.querySelector("script");

pre.innerHTML = myScript.innerHTML;

// Create a MediaElementAudioSourceNode
// Feed the HTMLMediaElement into it
var source = audioCtx.createMediaElementSource(myAudio);

// Create a gain node
var gainNode = audioCtx.createGain();

// Create variables to store mouse pointer Y coordinate
// and HEIGHT of screen
var CurY;
var HEIGHT = window.innerHeight;

// Get new mouse pointer coordinates when mouse is moved
// then set new gain value

document.onmousemove = updatePage;

function updatePage(e) {
  CurY = window.Event
    ? e.pageY
    : event.clientY +
      (document.documentElement.scrollTop
        ? document.documentElement.scrollTop
        : document.body.scrollTop);

  gainNode.gain.value = CurY / HEIGHT;
}

// connect the AudioBufferSourceNode to the gainNode
// and the gainNode to the destination, so we can play the
// music and adjust the volume using the mouse cursor
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
```

> **备注：** 作为调用 `createMediaElementSource()` 的结果，{{domxref("HTMLMediaElement")}} 的播放将会由 AudioContext 的音频处理图接管。所以对媒体进行播放/暂停等操作仍可通过 media API 与播放器面板来进行。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- [Using the Web Audio API](/zh-CN/docs/Web_Audio_API/Using_Web_Audio_API)
