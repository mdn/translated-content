---
title: Web Audio playbackRate explained
slug: Web/Guide/Audio_and_video_delivery/WebAudio_playbackRate_explained
---

html 元素“audio”和“video”的`playbackRate` 属性允许我们改变一段正在播放的网页音频或者视频的速度，或速率。本文详细解释了 `playbackRate` 。

## playbackRate 基础

让我们以一个简单的`playbackRate`用法示例开始：

```js
var myAudio = document.createElement("audio");
myAudio.setAttribute("src", "audiofile.mp3");
myAudio.playbackRate = 0.5;
```

在此我们创建了一个 html 元素“audio”，以我们选择的一个文件设置它的 `src` 。然后我们把 `playbackRate` 设为 0.5，这代表一半的正常播放速度（ `playbackRate` 是对原始速率的一个乘数）。

## 一个完整示例

让我们首先创建一个 html 元素“video”，在 HTML 中设置视频和播放速率控制：

```html
<video id="myVideo" controls>
  <source
    src="http://jplayer.org/video/m4v/Big_Buck_Bunny_Trailer.m4v"
    type="video/mp4" />
  <source
    src="http://jplayer.org/video/webm/Big_Buck_Bunny_Trailer.webm"
    type="video/webm" />
</video>

<form>
  <input id="pbr" type="range" value="1" min="0.5" max="4" step="0.1" />
  <p>Playback Rate <span id="currentPbr">1</span></p>
</form>
```

对它运用一些 JavaScript 代码：

```js
window.onload = function () {
  var v = document.getElementById("myVideo");
  var p = document.getElementById("pbr");
  var c = document.getElementById("currentPbr");

  p.addEventListener(
    "input",
    function () {
      c.innerHTML = p.value;
      v.playbackRate = p.value;
    },
    false,
  );
};
```

最后，我们监听指向 html 元素“input”的 `input` 事件，这允许我们对被改变的播放速率控制产生影响。

> **备注：** [在线试用示例](http://jsbin.com/UGIxoJis/1/edit), 尝试调整播放速率控制看看效果。

## defaultPlaybackRate 和 ratechange

除了 `playbackRate`, 我们也有一个可用的 `defaultPlaybackRate` 属性，这让我们能设置默认的播放速率：对媒体文件重设置的播放速率；例如，如果我们改变视频的来源，或（在一些浏览器中）当产生一个`ended`事件。

所以 `defaultPlaybackRate` 允许我们在播放媒体文件之前设置播放速率，而`playbackRate` 只允许我们在媒体播放阶段改变它。

有一个可用事件 `ratechange`，每次 `playbackRate` 改变的时候均会触发。

## 浏览器支持

- Chrome 20+ ✔
- Firefox 20+ ✔
- IE 9+ ✔
- Safari 6+ ✔
- Opera 15+ ✔
- Mobile Chrome (Android) ✖
- Mobile Firefox 24+ ✔
- IE Mobile ✖
- Mobile Safari 6+ (iOS) ✔
- Opera Mobile ✖

### 注意

- 大多数浏览器对 0.5 至 4 之外的`playbackRate`值会停止播放音频，而视频会静音播放。对大多数应用，推荐限制值的范围在 0.5 至 4 之间。
- 当 `playBackRate` 改变的时候音频的进度条不会变化。
- 负数不会引起媒体文件反向播放。
- 当`ended`事件触发时 IE9+ 会转换到默认播放速率。
- 当媒体源文件被替换时，Firefox 会触发 `ratechange` 事件。
- 在 iOS 7 中你只能在媒体暂停的时候影响`playbackRate`值（不是它播放的时候）。

## 请参阅

- [Hyperaudio's Playback Rate Test](http://hyperaud.io/lab/pbr-test/)
- [HTMLMediaElement reference](/zh-CN/docs/Web/API/HTMLMediaElement)
