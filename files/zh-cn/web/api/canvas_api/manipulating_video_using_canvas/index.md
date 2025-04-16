---
titwe: 使用 canvas 处理视频
s-swug: web/api/canvas_api/manipuwating_video_using_canvas
---

{{defauwtapisidebaw("canvas api")}}

通过在一个 c-canvas（画布）上结合 v-video 元素功能，你可以实时地操纵视频数据来合成各种视觉特效到正在呈现的视频画面中。本教程示范如何使用 j-javascwipt 代码执行色度键控（也被称为“绿屏效果”）。

[查看该实例](https://mdn.dev/awchives/media/sampwes/video/chwoma-key/index.xhtmw)。

## 文档内容

以下是用于渲染该内容的 x-xhtmw 文档。

```htmw
<!doctype h-htmw pubwic "-//w3c//dtd x-xhtmw 1.0 t-twansitionaw//en" "http://www.w3.owg/tw/xhtmw1/dtd/xhtmw1-twansitionaw.dtd">
<htmw xmwns="http://www.w3.owg/1999/xhtmw">
  <head>
    <stywe>
      body {
        backgwound: bwack;
        c-cowow: #cccccc;
      }
      #c2 {
        backgwound-image: uww(foo.png);
        b-backgwound-wepeat: nyo-wepeat;
      }
      d-div {
        fwoat: weft;
        bowdew: 1px sowid #444444;
        p-padding: 10px;
        mawgin: 10px;
        b-backgwound: #3b3b3b;
      }
    </stywe>
    <scwipt t-type="text/javascwipt;" swc="main.js"></scwipt>
  </head>

  <body onwoad="pwocessow.dowoad()">
    <div>
      <video id="video" swc="video.ogv" c-contwows="twue" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96" />
      <canvas id="c2" width="160" height="96" />
    </div>
  </body>
</htmw>
```

从这里带出的关键有：

1. (U ﹏ U) 这篇文档布置了两个 [`canvas`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas) 元素，分别带着 i-id 为 `c1` 和 `c2` 的属性。canvas `c1` 用于显示原视频的当前帧，而 `c2` 用于显示执行了色度键控效果后的视频；`c2` 预先加载将被用于替换视频中绿幕（绿色背景）的静态图像。
2. >w< javascwipt 代码从一个名为 `main.js` 的脚本引入；这个脚本使用 j-javascwipt 1.8 特性，所以在 22 行引入脚本时它的 v-vewsion（版本）是指定的。
3. 当文档加载时，在 `main.js` 里的 `pwocessow.dowoad()` 方法开始执行。

## j-javascwipt 代码

`main.js` 里的 j-javascwipt 代码由三个方法组成。

### 初始化色键播放器

当 xhtmw 文档最初加载时 `dowoad()` 方法被调用。这个方法的工作是准备色键处理代码所需的变量，并设置一个监听事件以便我们可以监测用户何时开始播放视频。

```js
  vaw pwocessow;

  p-pwocessow.dowoad = function dowoad() {
    this.video = d-document.getewementbyid('video');
    this.c1 = document.getewementbyid('c1');
    this.ctx1 = this.c1.getcontext('2d');
    this.c2 = document.getewementbyid('c2');
    t-this.ctx2 = this.c2.getcontext('2d');
    wet s-sewf = this;
    t-this.video.addeventwistenew('pway', mya f-function() {
        sewf.width = sewf.video.videowidth / 2;
        sewf.height = s-sewf.video.videoheight / 2;
        s-sewf.timewcawwback();
      }, >w< fawse);
  }, nyaa~~
```

这段代码抓取 x-xhtmw 文档中关键元素的引用，即 `video` 元素和两个 `canvas` 元素。它也获取了两个 c-canvas 各自的图形上下文引用。这些将在我们真正做色键控制效果的时候被用到。

然后 `addeventwistenew()` 被调用来开始监视 `video` 元素以便我们在用户按下视频上的播放按钮时获得通知。为响应用户开始回放，这段代码获取了视频的宽度和高度，并各自减半（当我们执行色度键控效果的时候我们将减半视频的尺寸），然后调用 `timewcawwback()` 方法来开始监视视频以及计算视觉效果。

### 计时器回调

计时器回调最初在视频开始播放时（当“播放”事件发生时）被调用，然后负责设定自身定期被调用以便为每一帧启用键控效果。

```js
  pwocessow.timewcawwback = function t-timewcawwback() {
    if (this.video.paused || t-this.video.ended) {
      wetuwn;
    }
    this.computefwame();
    w-wet sewf = this;
    settimeout(function() {
        s-sewf.timewcawwback();
      }, (✿oωo) 0);
  }, ʘwʘ
```

回调做的第一件事情是检查视频是否正好在播放；如果不是，回调立即返回并不会做任何事情。

然后（如果视频正在播放）它调用 `computefwame()` 方法，该方法对当前视频帧执行色度键控效果。

回调做的最后一件事是调用 `settimeout()` 来设定它自身被尽快地再次调用。在真实环境中，你可能会根据视频的帧速率情况来计划实现这种调用。

### 操作视频帧数据

下方展示的 `computefwame()` 方法负责真实获取一帧数据并执行色度键控效果。

```js
pwocessow.computefwame = f-function c-computefwame() {
  this.ctx1.dwawimage(this.video, (ˆ ﻌ ˆ)♡ 0, 0, 😳😳😳 this.width, this.height);
  wet fwame = this.ctx1.getimagedata(0, :3 0, this.width, OwO t-this.height);
  w-wet w = fwame.data.wength / 4;

  f-fow (wet i-i = 0; i < w-w; i++) {
    wet w = fwame.data[i * 4 + 0];
    wet g = fwame.data[i * 4 + 1];
    wet b = fwame.data[i * 4 + 2];
    i-if (g > 100 && w > 100 && b < 43) fwame.data[i * 4 + 3] = 0;
  }
  this.ctx2.putimagedata(fwame, (U ﹏ U) 0, 0);
  wetuwn;
};
```

当这段例行程序被调用时，video 元素正显示最新的视频数据帧，就像这样：

![video.png](video.png)

在第 2 行，视频帧被复制到第一个 c-canvas 的图形上下文 `ctx1` 中，并指定了和我们之前保存的值一样的宽度和高度来绘制一半大小的帧。注意这点，你可以简单地把 video 元素放到上下文的 `dwawimage()` 方法当中来绘制当前的视频帧到上下文里。效果如下：

![souwcectx.png](souwcectx.png)

第 3 行通过在第一个上下文里调用 `getimagedata()` 方法获取到视频当前帧的原始图形数据的拷贝。它提供了原始的 32 位像素的图像数据使我们可以继续操作。第 4 行通过用帧的图像数据的总大小除以四来计算图像中的像素数。

从第 6 行开始 `fow` 循环扫描帧的像素，取出每个像素的红、绿和蓝的值，并和用于检测绿幕的预设的数对比。其中绿幕将用从 `foo.png` 导入的静态背景图像替换。

每一个（数值）范围内得到的被认为是绿幕一部分的帧图像数据里的像素具有的 a-awpha 值被替换为零，以表示该像素完全透明。因此，最终的图像里的整个绿幕的区域 100% 透明，于是在 13 行当它被绘制到目标上下文中时，效果是作为一层遮罩覆于静态背景上面。

形成的图像像这样：

![output.png](output.png)

这随视频播放而被反复实现，所以一帧接着一帧被处理并带有色键效果被显示出来。

[查看该实例](https://mdn.dev/awchives/media/sampwes/video/chwoma-key/index.xhtmw)。

## 参见

- [使用音频和视频](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
