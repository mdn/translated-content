---
title: 使用 canvas 处理视频
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
---

{{DefaultAPISidebar("Canvas API")}}

通过在一个 canvas（画布）上结合 video 元素功能，你可以实时地操纵视频数据来合成各种视觉特效到正在呈现的视频画面中。本教程示范如何使用 JavaScript 代码执行色度键控（也被称为“绿屏效果”）。

[查看该实例](/samples/video/chroma-key/index.xhtml)。

## 文档内容

以下是用于渲染该内容的 XHTML 文档。

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
  <head>
    <style>
      body {
        background: black;
        color: #cccccc;
      }
      #c2 {
        background-image: url(foo.png);
        background-repeat: no-repeat;
      }
      div {
        float: left;
        border: 1px solid #444444;
        padding: 10px;
        margin: 10px;
        background: #3b3b3b;
      }
    </style>
    <script type="text/javascript;" src="main.js"></script>
  </head>

  <body onload="processor.doLoad()">
    <div>
      <video id="video" src="video.ogv" controls="true" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96" />
      <canvas id="c2" width="160" height="96" />
    </div>
  </body>
</html>
```

从这里带出的关键有：

1. 这篇文档布置了两个 [`canvas`](/zh-CN/docs/Web/HTML/Element/canvas) 元素，分别带着 ID 为 `c1` 和 `c2` 的属性。Canvas `c1` 用于显示原视频的当前帧，而 `c2` 用于显示执行了色度键控效果后的视频；`c2` 预先加载将被用于替换视频中绿幕（绿色背景）的静态图像。
2. JavaScript 代码从一个名为 `main.js` 的脚本引入；这个脚本使用 JavaScript 1.8 特性，所以在 22 行引入脚本时它的 version（版本）是指定的。
3. 当文档加载时，在 `main.js` 里的 `processor.doLoad()` 方法开始执行。

## JavaScript 代码

`main.js` 里的 JavaScript 代码由三个方法组成。

### 初始化色键播放器

当 XHTML 文档最初加载时 `doLoad()` 方法被调用。这个方法的工作是准备色键处理代码所需的变量，并设置一个监听事件以便我们可以监测用户何时开始播放视频。

```js
  var processor;

  processor.doLoad = function doLoad() {
    this.video = document.getElementById('video');
    this.c1 = document.getElementById('c1');
    this.ctx1 = this.c1.getContext('2d');
    this.c2 = document.getElementById('c2');
    this.ctx2 = this.c2.getContext('2d');
    let self = this;
    this.video.addEventListener('play', function() {
        self.width = self.video.videoWidth / 2;
        self.height = self.video.videoHeight / 2;
        self.timerCallback();
      }, false);
  },
```

这段代码抓取 XHTML 文档中关键元素的引用，即 `video` 元素和两个 `canvas` 元素。它也获取了两个 canvas 各自的图形上下文引用。这些将在我们真正做色键控制效果的时候被用到。

然后 `addEventListener()` 被调用来开始监视 `video` 元素以便我们在用户按下视频上的播放按钮时获得通知。为响应用户开始回放，这段代码获取了视频的宽度和高度，并各自减半（当我们执行色度键控效果的时候我们将减半视频的尺寸），然后调用 `timerCallback()` 方法来开始监视视频以及计算视觉效果。

### 计时器回调

计时器回调最初在视频开始播放时（当“播放”事件发生时）被调用，然后负责设定自身定期被调用以便为每一帧启用键控效果。

```js
  processor.timerCallback = function timerCallback() {
    if (this.video.paused || this.video.ended) {
      return;
    }
    this.computeFrame();
    let self = this;
    setTimeout(function() {
        self.timerCallback();
      }, 0);
  },
```

回调做的第一件事情是检查视频是否正好在播放；如果不是，回调立即返回并不会做任何事情。

然后（如果视频正在播放）它调用 `computeFrame()` 方法，该方法对当前视频帧执行色度键控效果。

回调做的最后一件事是调用 `setTimeout()` 来设定它自身被尽快地再次调用。在真实环境中，你可能会根据视频的帧速率情况来计划实现这种调用。

### 操作视频帧数据

下方展示的 `computeFrame()` 方法负责真实获取一帧数据并执行色度键控效果。

```js
processor.computeFrame = function computeFrame() {
  this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
  let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
  let l = frame.data.length / 4;

  for (let i = 0; i < l; i++) {
    let r = frame.data[i * 4 + 0];
    let g = frame.data[i * 4 + 1];
    let b = frame.data[i * 4 + 2];
    if (g > 100 && r > 100 && b < 43) frame.data[i * 4 + 3] = 0;
  }
  this.ctx2.putImageData(frame, 0, 0);
  return;
};
```

当这段例行程序被调用时，video 元素正显示最新的视频数据帧，就像这样：

![video.png](video.png)

在第 2 行，视频帧被复制到第一个 canvas 的图形上下文 `ctx1` 中，并指定了和我们之前保存的值一样的宽度和高度来绘制一半大小的帧。注意这点，你可以简单地把 video 元素放到上下文的 `drawImage()` 方法当中来绘制当前的视频帧到上下文里。效果如下：

![sourcectx.png](sourcectx.png)

第 3 行通过在第一个上下文里调用 `getImageData()` 方法获取到视频当前帧的原始图形数据的拷贝。它提供了原始的 32 位像素的图像数据使我们可以继续操作。第 4 行通过用帧的图像数据的总大小除以四来计算图像中的像素数。

从第 6 行开始 `for` 循环扫描帧的像素，取出每个像素的红、绿和蓝的值，并和用于检测绿幕的预设的数对比。其中绿幕将用从 `foo.png` 导入的静态背景图像替换。

每一个（数值）范围内得到的被认为是绿幕一部分的帧图像数据里的像素具有的 alpha 值被替换为零，以表示该像素完全透明。因此，最终的图像里的整个绿幕的区域 100% 透明，于是在 13 行当它被绘制到目标上下文中时，效果是作为一层遮罩覆于静态背景上面。

形成的图像像这样：

![output.png](output.png)

这随视频播放而被反复实现，所以一帧接着一帧被处理并带有色键效果被显示出来。

[查看该实例](/samples/video/chroma-key/index.xhtml)。

## 参见

- [使用音频和视频](/zh-CN/docs/Web/Guide/HTML/Using_HTML5_audio_and_video)
