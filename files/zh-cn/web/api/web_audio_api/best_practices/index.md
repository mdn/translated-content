---
title: Web Audio API 最佳实践
slug: Web/API/Web_Audio_API/Best_practices
---

{{apiref("Web Audio API")}}

在创意编程中（creative coding）没有严格的对错之分。只要你充分考虑安全性、性能和 accessibility，你可以用自己的办法来编写代码。在这篇文章中，我们会分享一些最佳实践——包含使用 Web Audio API 的指导、小知识和小技巧。

## 加载声音/声音文件

使用 Web Audio API 加载声音的主要方式有四种，你可能会对于应当使用哪种方式有些困惑。

在从文件中加载声音时，你可能会采取从{{domxref("HTMLMediaElement")}} (即 {{htmlelement("audio")}} 或{{htmlelement("video")}} ) 中抓取的方式，或提取文件并将其解码到缓冲区。两种工作方式都是合理的，然而，在处理全长音轨时，前一种方法会更加常见。而后一种方法更常见于处理更短的（例如样本）的音轨。

多媒体类 HTML 元素有开箱即用的媒体流支持。音频会在浏览器判断可以在播放完成之前加载文件的剩余部分时进行播放 (when the browser determines it can load the rest of the file before playing finishes.)。你可以在[Using the Web Audio API tutorial](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)这篇文档中看到一个把多媒体类 HTML 元素与 Web Audio API 结合使用的例子。

如果你使用缓冲节点（buffer node）来加载音频，你将会有更多的控制权。虽然你需要请求这个文件，然后等待它加载完成 ([我们的这篇进阶文章中的这一节](/zh-CN/docs/Web/API/Web_Audio_API/Advanced_techniques#dial_up_—_loading_a_sound_sample)介绍了一个好办法)。但是，随后你可以直接访问数据，这意味着你能进行更精确，更精确的操作。

对于来自用户的摄像头或麦克风的音频，你可以考虑通过[Media Stream API](/zh-CN/docs/Web/API/Media_Capture_and_Streams_API)和{{domxref("MediaStreamAudioSourceNode")}}接口来访问。这在与 WebRTC 协作以及你想录制或分析音频的场合下很管用。

最后一个要介绍的方法时如何生成声音。这可以通过{{domxref("OscillatorNode")}}和创建一个缓冲区 (buffer) 然后向其中填充你的数据来完成。你可以在[这篇指导你如何创建自己的乐器的文章](/zh-CN/docs/Web/API/Web_Audio_API/Advanced_techniques)中学习到用这两个工具创建声音的知识。

## Cross browser & legacy support

The Web Audio API specification is constantly evolving and like most things on the web, there are some issues with it working consistently across browsers. Here we'll look at options for getting around cross-browser problems.

There's the [`standardised-audio-context`](https://github.com/chrisguttandin/standardized-audio-context) npm package, which creates API functionality consistently across browsers, full holes as they are found. It's constantly in development and endeavours to keep up with the current specification.

There is also the option of libraries, of which there are a few depending on your use case. For a good all-rounder, [howler.js](https://howlerjs.com/) is a good choice. It has cross-browser support and, provides a useful subset of functionality. Although it doesn't harness the full gamut of filters and other effects the Web Audio API comes with, you can do most of what you'd want to do.

If you are looking for sound creation or a more instrument-based option, [tone.js](https://tonejs.github.io/) is a great library. It provides advanced scheduling capabilities, synths, and effects, and intuitive musical abstractions built on top of the Web Audio API.

[R-audio](https://github.com/bbc/r-audio), from the [BBC's Research & Development department](https://medium.com/bbc-design-engineering/r-audio-declarative-reactive-and-flexible-web-audio-graphs-in-react-102c44a1c69c), is a library of React components aiming to provide a "more intuitive, declarative interface to Web Audio". If you're used to writing JSX it might be worth looking at.

## 自动播放策略

浏览器已经开始实施自动播放策略，这一策略通常可以概括为：

> "Create or resume context from inside a user gesture".

这在实践中意味着什么呢？user gesture 可以解释为用户触发的事件（一般来说，是`click`事件）。浏览器厂商判定不应该允许 Web Audio 上下文自动播放音频，而应该由用户开始播放。这是因为自动播放音频非常烦人且令人讨厌。那么，我们该如何处理 (handle) 呢？

无论是 offline 还是 online，当你创建了一个音频上下文 (audio context)，它会有一个内部状态 (`state`)，这个状态有`暂停 (suspend)、播放 (running)、关闭 (closed)`三种可能。

(When you create an audio context (either offline or online) it is created with a `state`, which can be `suspended`, `running`, or `closed`.)

例如，在使用 {{domxref("AudioContext")}}时，如果你在`click`事件中创建了音频上下文，它的内部状态应该会被自动设置成`播放 (running)`。这里有一个在`click`事件中创建音频上下文简单的例子：

```js
const button = document.querySelector("button");
button.addEventListener(
  "click",
  function () {
    const audioCtx = new AudioContext();
  },
  false,
);
```

如果你在用户动作之外创建上下文 (create the context outside of a user gesture)，它的内部状态会被设置为`暂停 (suspend)`。这里我们可以同样用 click 事件的例子。我们会检查这个上下文的状态，并且启动它。如果它是`暂停 (suspend)`的状态，使用[`resume()`](/zh-CN/docs/Web/API/AudioContext/resume)方法来恢复。

```js
const audioCtx = new AudioContext();
const button = document.querySelector("button");

button.addEventListener(
  "click",
  function () {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  },
  false,
);
```

对于{{domxref("OfflineAudioContext")}}，你也可以使用[`startRendering()`](/zh-CN/docs/Web/API/OfflineAudioContext/startRendering)方法来恢复到播放状态。

## User control

If your website or application contains sound, you should allow the user control over it, otherwise again, it will become annoying. This can be achieved by play/stop and volume/mute controls. The [Using the Web Audio API](/zh-CN/docs/Web/API/Web_Audio_API/Using_Web_Audio_API) tutorial goes over how to do this.

If you have buttons that switch audio on and off, using the ARIA [`role="switch"`](/zh-CN/docs/Web/Accessibility/ARIA/Roles/Switch_role) attribute on them is a good option for signalling to assistive technology what the button's exact purpose is, and therefore making the app more accessible. There's a [demo of how to use it here](https://codepen.io/Wilto/pen/ZoGoQm?editors=1100).

As you work with a lot of changing values within the Web Audio API and will want to provide users with control over these, the [`range input`](/zh-CN/docs/Web/HTML/Element/input/range) is often a good choice of control to use. It's a good option as you can set minimum and maximum values, as well as increments with the [`step`](/zh-CN/docs/Web/HTML/Element/input#attr-step) attribute.

## Setting AudioParam values

There are two ways to manipulate {{domxref("AudioNode")}} values, which are themselves objects of type {{domxref("AudioParam")}} interface. The first is to set the value directly via the property. So for instance if we want to change the `gain` value of a {{domxref("GainNode")}} we would do so thus:

```js
gainNode.gain.value = 0.5;
```

This will set our volume to half. However, if you're using any of the `AudioParam`'s defined methods to set these values, they will take precedence over the above property setting. If for example, you want the `gain` value to be raised to 1 in 2 seconds time, you can do this:

```js
gainNode.gain.setValueAtTime(1, audioCtx.currentTime + 2);
```

It will override the previous example (as it should), even if it were to come later in your code.

Bearing this in mind, if your website or application requires timing and scheduling, it's best to stick with the {{domxref("AudioParam")}} methods for setting values. If you're sure it doesn't, setting it with the `value` property is fine.
