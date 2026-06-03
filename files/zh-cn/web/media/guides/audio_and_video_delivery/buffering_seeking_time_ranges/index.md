---
title: 媒体缓冲、拖动和时间范围
slug: Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges
l10n:
  sourceCommit: 5aa89c0c0dd2aded106b8d6674fe5370e270f5e6
---

有时候知道 {{htmlelement("audio") }} 或 {{htmlelement("video") }} 已经下载了多少或有多少可以不经过延迟直接播放是有用的——音频和视频的缓冲进度条就是一个很好的例子。本文讨论如何使用 [TimeRanges](/zh-CN/docs/Web/API/TimeRanges) 和媒体 API 的其他特性创建一个缓冲/拖动条。

## Buffered

`buffered` 属性会告诉我们媒体的哪一部分已经下载好了。它返回一个 {{domxref("TimeRanges")}} 对象，表明哪些媒体分块已经下载。这通常是连续的但是如果用户在缓冲时跳过，就可能会有缺少的部分。

它与 {{htmlelement("audio")}} 或 {{htmlelement("video")}} 一起工作，现在让我们来考虑一个简单的音频示例：

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

我们可以这样访问该属性：

```js
const audio = document.getElementById("my-audio");
const bufferedTimeRanges = audio.buffered;
```

## TimeRanges 对象

TimeRanges 是一系列有开始和结束时间的非重叠的时间范围。（[学习更多有关 TimeRanges 的内容](/zh-CN/docs/Web/API/TimeRanges)）。

{{domxref("TimeRanges")}} 对象包含以下属性：

- `length`：对象包含的时间范围的数量。
- `start(index)`：时间范围的开始时间（以秒为单位）。
- `end(index)`：时间范围的结束时间（以秒为单位）。

没有用户交互的情况下通常只有一个时间范围，但是如果你在媒体中跳来跳去，那么就会出现多个时间范围，下面的示意图形象地表明了这一点。这表示两个缓冲的时间范围——第一个范围从 0 到 5 秒，第二个范围从 15 到 19 秒。

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

对于该音频实例，相关联的 {{domxref("TimeRanges")}} 对象会有以下可用的属性：

```js
audio.buffered.length; // 返回 2
audio.buffered.start(0); // 返回 0
audio.buffered.end(0); // 返回 5
audio.buffered.start(1); // 返回 15
audio.buffered.end(1); // 返回 19
```

要尝试并可视化缓冲的时间范围，我们可以写一点 HTML：

```html
<p>
  <audio id="my-audio" controls>
    <source src="music.mp3" type="audio/mpeg" />
  </audio>
</p>
<p>
  <canvas id="my-canvas" width="300" height="20"></canvas>
</p>
```

以及一些 JavaScript：

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");
  const canvas = document.getElementById("my-canvas");
  const context = canvas.getContext("2d");

  context.fillStyle = "lightgray";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "red";
  context.strokeStyle = "white";

  const inc = canvas.width / audio.duration;

  // 显示 TimeRanges

  audio.addEventListener("seeked", () => {
    for (let i = 0; i < audio.buffered.length; i++) {
      const startX = audio.buffered.start(i) * inc;
      const endX = audio.buffered.end(i) * inc;
      const width = endX - startX;

      context.fillRect(startX, 0, width, canvas.height);
      context.rect(startX, 0, width, canvas.height);
      context.stroke();
    }
  });
};
```

这在长一些的音频或视频上工作得更好，但是按开始键并在播放进度条上点击，你会看到类似这样的东西。每个红色填充的长方形代表一个时间范围。

![一个简单的音频播放器，带有播放按钮、搜索栏和音量控制，下面有一系列代表时间范围的红色矩形。](bufferedtimeranges.png)

> [!NOTE]
> 你可以查看 [JS Bin 上实时运行的时间范围代码](https://jsbin.com/memazaro/1/edit)。

## Seekable

`seekable` 属性返回一个 {{domxref("TimeRanges")}} 对象，告诉我们媒体的哪一部分可以不经过延迟直接播放；这与该部分是否已被下载无关。如果服务器上启用了字节范围请求，媒体的一些部分可能是可查找（seekable）但又没有缓冲的，字节范围请求允许服务器分发媒体文件的某一部分，因此可以几乎立即准备好播放——故它们是可查找的。有关字节范围请求的更多信息，请参见 [HTTP 范围请求](/zh-CN/docs/Web/HTTP/Guides/Range_requests)。

```js
const seekableTimeRanges = audio.seekable;
```

## 创建我们自己的缓冲反馈

如果我们希望创建一个自定义播放器，我们可能希望提供有关多少媒体已经可供播放的反馈。实际上，一个很好的方法是使用 `seekable` 属性，尽管如上所述，媒体可查找的部分不一定是连续的——但它们通常是连续的，我们可以安全地近似这些信息，以便给用户一个指示哪些部分的媒体可以直接播放。我们可以使用以下代码找到媒体中的这一点：

```js
const seekableEnd = audio.seekable.end(audio.seekable.length - 1);
```

> [!NOTE]
> `audio.seekable.end(audio.seekable.length - 1)` 实际上告诉我们可查找的最后一个时间范围的结束点（而不是所有可查找的媒体）。在实践中，这已经足够了，因为浏览器要么启用范围请求，要么不启用。如果不启用，`audio.seekable` 将等同于 `audio.buffered`，这将给出媒体可查找的结束点的有效指示。如果启用了范围请求，这个值通常几乎立即变成媒体的持续时间。

也许最好的方法是给出媒体实际下载了多少的指示——这似乎是浏览器的原生播放器显示的内容。

让我们来构建它。我们播放器的 HTML 如下：

```html
<audio id="my-audio" preload controls>
  <source src="music.mp3" type="audio/mpeg" />
</audio>
<div class="buffered">
  <span id="buffered-amount"></span>
</div>
<div class="progress">
  <span id="progress-amount"></span>
</div>
```

我们将使用以下 CSS 来为缓冲显示添加样式：

```css
.buffered {
  height: 20px;
  position: relative;
  background: #555;
  width: 300px;
}

#buffered-amount {
  display: block;
  height: 100%;
  background-color: #777;
  width: 0;
}

.progress {
  margin-top: -20px;
  height: 20px;
  position: relative;
  width: 300px;
}

#progress-amount {
  display: block;
  height: 100%;
  background-color: #595;
  width: 0;
}
```

而以下 JavaScript 为我们提供了功能：

```js
window.onload = () => {
  const audio = document.getElementById("my-audio");

  audio.addEventListener("progress", () => {
    const duration = audio.duration;
    if (duration > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          document.getElementById("buffered-amount").style.width = `${
            (audio.buffered.end(audio.buffered.length - 1 - i) * 100) / duration
          }%`;
          break;
        }
      }
    }
  });

  audio.addEventListener("timeupdate", () => {
    const duration = audio.duration;
    if (duration > 0) {
      document.getElementById("progress-amount").style.width = `${
        (audio.currentTime / duration) * 100
      }%`;
    }
  });
};
```

下载数据时会触发 progress 事件，如果我们想要显示下载或缓冲进度，这是一个很好的用于做出反应的事件。

当媒体播放时，timeupdate 事件每秒触发 4 次，这是我们推动播放进度条的地方。

这应该会为你提供类似这样的结果，浅灰色的条代表缓冲进度，绿色的条代表播放进度：

![一个简单的音频播放器，带有播放按钮、搜索栏和音量控制，以及控件下方的进度条，其中的绿色部分显示已播放的视频，还有一个浅灰色的部分表示已缓冲的部分。](bufferedprogress.png)

> [!NOTE]
> 你可以查看 [JS Bin 上实时运行的缓冲代码](https://jsbin.com/badimipi/1/edit)。

## 关于 Played 的简短说明

`played` 属性值得一提——它告诉我们媒体中已经播放了哪些时间范围。例如：

```js
const played = audio.played; // 返回一个 TimeRanges 对象
```

这对于确定媒体中最常被收听或观看的部分可能很有用。
