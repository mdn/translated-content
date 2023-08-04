---
title: Media buffering, seeking, and time ranges
slug: Web/Guide/Audio_and_video_delivery/buffering_seeking_time_ranges
---

有时候知道 {{htmlelement("audio") }} 或 {{htmlelement("video") }} 已经下载了多少或有多少可以不延迟的播放是有用的 — 音频和视频的缓冲条就是这个的一个好例子。这篇文章讨论 用 [TimeRanges](/zh-CN/docs/Web/API/TimeRanges)如何创建一个 buffer/seek bar，和 media API 的其他特性。

## Buffered

`Buffered` 属性会告诉我们媒体的哪一部分已经下载好了。它返回一个 {{ domxref("TimeRanges") }} 对象，表名哪些块已经下载。这通常是连续的但是如果用户在缓冲时跳过，就可能会有缺口。

它与 {{htmlelement("audio") }} 或 {{htmlelement("video") }}一起工作; 现在我们来考虑一个简单的 aodio 例子：

```html
<audio id="my-audio" controls src="music.mp3"></audio>
```

我们可以这样访问这些属性：

```js
var myAudio = document.getElementById("my-audio");

var bufferedTimeRanges = myAudio.buffered;
```

## TimeRanges 对象

TimeRanges 是一系列有开始和结束时间的非重叠的时间范围。 ([learn more about TimeRanges](/zh-CN/docs/Web/API/TimeRanges)).

一个 {{ domxref("TimeRanges") }} 对象包括以下内容。

- `length`: The number of time ranges in the object.
- `start(index)`: The start time, in seconds, of a time range.
- `end(index)`: The end time, in seconds, of a time range.

没有用户操作的话通常只有一个时间范围，但是如果你在媒体中跳来跳去那么就会出现多个时间范围，下面形象化的表名了这一点。This represents two buffered time ranges — one spanning 0 to 5 seconds and the second spanning 15 to 19 seconds.

```plain
------------------------------------------------------
|=============|                    |===========|     |
------------------------------------------------------
0             5                    15          19    21
```

对于这个 audio 实例，相关联的 {{ domxref("TimeRange") }} 对象会有以下的可用属性：

```js
myAudio.buffered.length; // returns 2
myAudio.buffered.start(0); // returns 0
myAudio.buffered.end(0); // returns 5
myAudio.buffered.start(1); // returns 15
myAudio.buffered.end(1); // returns 19
```

为了试用并形象化 buffered time ranges 我们可以写一点 HTML:

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

and a little bit of JavaScript:

```js
window.onload = function () {
  var myAudio = document.getElementById("my-audio");
  var myCanvas = document.getElementById("my-canvas");
  var context = myCanvas.getContext("2d");

  context.fillStyle = "lightgray";
  context.fillRect(0, 0, myCanvas.width, myCanvas.height);
  context.fillStyle = "red";
  context.strokeStyle = "white";

  var inc = myCanvas.width / myAudio.duration;

  // display TimeRanges

  myAudio.addEventListener("seeked", function () {
    for (i = 0; i < myAudio.buffered.length; i++) {
      var startX = myAudio.buffered.start(i) * inc;
      var endX = myAudio.buffered.end(i) * inc;
      var width = endX - startX;

      context.fillRect(startX, 0, width, myCanvas.height);
      context.rect(startX, 0, width, myCanvas.height);
      context.stroke();
    }
  });
};
```

这在长一些的 audio 或 video 上工作的更好，但是按开始键并在进度条上点击，你会得到这个。每个红色填充的长方形代表一个时间范围。

![A simple audio player with play button, seek bar and volume control, with a series of red rectangles beneath it representing time ranges.](bufferedtimeranges.png)

> **备注：** You can see the [timerange code running live on JS Bin](http://jsbin.com/memazaro/1/edit).

## Seekable

`Seekable` 属性返回一个 {{ domxref("TimeRanges") }} 对象告诉我们哪一部分媒体可以不等待的播放; this is irrespective of whether that part has been downloaded or not. Some parts of the media may be seekable but not buffered if byte-range requests are enabled on the server. Byte range requests allow parts of the media file to be delivered from the server and so can be ready to play almost immediately — thus they are seekable.

```js
var seekableTimeRanges = myAudio.seekable;
```

## Creating our own Buffering Feedback

If we wish to create our own custom player, we may want to provide feedback on how much of the media is ready to be played. In practice a good way to do this is use the `seekable` attribute, although as we have seen above seekable parts of the media are not neccessarily contiguous — they often are however and we can safely approximate this information to give the user an indication of which parts of the media can be played directly. We can find this point in the media using the following line of code:

```js
var seekableEnd = myAudio.seekable.end(myAudio.seekable.length - 1);
```

> **备注：** `myAudio.seekable.end(myAudio.seekable.length - 1)` actually tells us the end point of the last time range that is seekable (not all seekable media). In practice this is good enough as the browser either enables range requests or it doesn't. If it doesn't then `audio.seekable` will be equivalent to `audio.buffered`, which will give a valid indication of the end of seekable media. If range requests are enabled this value usually becomes the duration of the media almost instantly.

It is better perhaps to give an indication of how much media has actually downloaded — this what the browser's native players seem to display.

So let's build this. The HTML for our player looks like this:

```css
<audio id="my-audio" preload controls>
  <source src="music.mp3" type="audio/mpeg">
</audio>
<div class="buffered">
  <span id="buffered-amount"></span>
</div>
<div class="progress">
  <span id="progress-amount"></span>
</div>
```

We'll use the following CSS to style the buffering display:

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

And the following JavaScript provides our functionality:

```js
window.onload = function () {
  var myAudio = document.getElementById("my-audio");

  myAudio.addEventListener("progress", function () {
    var bufferedEnd = myAudio.buffered.end(myAudio.buffered.length - 1);
    var duration = myAudio.duration;
    if (duration > 0) {
      document.getElementById("buffered-amount").style.width =
        (bufferedEnd / duration) * 100 + "%";
    }
  });

  myAudio.addEventListener("timeupdate", function () {
    var duration = myAudio.duration;
    if (duration > 0) {
      document.getElementById("progress-amount").style.width =
        (myAudio.currentTime / duration) * 100 + "%";
    }
  });
};
```

The progress event is fired as data is downloaded, this is a good event to react to if we want to display download or buffering progress.

The timeupdate event is fired 4 times a second as the media plays and that's where we increment our playing progress bar.

This should give you results similar to the following, where the light grey bar represents the buffered progress and green bar shows the played progress:

![A simple audio player with play button, seek bar and volume control, with a bar below it. The bar has a red portion to show played video, and a dark gray bar to show how much has been buffered.](bufferedprogress.png)

> **备注：** You can see the [buffering code running live on JS Bin](http://jsbin.com/badimipi/1/edit).

## A quick word about Played

It's worth mentioning the `played` property — this tells us which time ranges have been played within the media. For example:

```js
var played = audio.played; // returns a TimeRanges object
```

This could be useful for establishing the parts of your media that are most listened to or watched.
