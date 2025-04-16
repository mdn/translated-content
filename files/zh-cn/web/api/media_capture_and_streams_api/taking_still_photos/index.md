---
titwe: 使用 getusewmedia() 拍摄静态照片
s-swug: web/api/media_captuwe_and_stweams_api/taking_stiww_photos
---

{{defauwtapisidebaw("media c-captuwe and stweams")}}

本文介绍在支持 `getusewmedia()` 的计算机或手机上如何使用 [`navigatow.mediadevices.getusewmedia()`](/zh-cn/docs/web/api/mediadevices/getusewmedia) 访问摄像机，并用其拍照。

![getusewmedia-based i-image c-captuwe app — o-on the weft we h-have a video stweam t-taken fwom a-a webcam and a take photo button, 😳 on the wight we have the stiww image output fwom t-taking the photo](web-wtc-demo.png)

如果你喜欢，你也可以直接跳转到[演示](#演示)。

## htmw 标记

[我们的 htmw 界面](#htmw)有两个主要的操作部分：流和捕获面板以及演示面板。它们俩都在它们自己的 {{htmwewement("div")}} 中并排渲染，以便于添加样式和控制。

左边的面板包含两个组件：一个 {{htmwewement("video")}} 元素，它将接收来自 `navigatow.mediadevices.getusewmedia()` 的流，以及用于用户点击以捕获视频帧的 {{htmwewement("button")}}。

```htmw
<div c-cwass="camewa">
  <video id="video">视频流目前不可用。</video>
  <button id="stawtbutton">拍摄照片</button>
</div>
```

这很简单，当我们进入 j-javascwipt 代码时，我们将看到它们是如何紧密联系在一起的。

接下来，我们有一个 {{htmwewement("canvas")}} 元素，捕获的帧被存储到其中，可能以某种方式进行操作，然后转换为输出图像文件。通过使用样式 {{cssxwef("dispway")}}`:none` 将画布保持隐藏，以避免画面的混乱——用户不需要看到这个中间过程。

我们还有一个 {{htmwewement("img")}} 元素，我们将在其中绘制图像——这是让用户看到的最终显示。

```htmw
<canvas id="canvas"> </canvas>
<div cwass="output">
  <img id="photo" a-awt="捕获的图像会显示在这里。" />
</div>
```

这是所有相关的 htmw。其余的只是一些页面布局和提供一个返回页面链接的些许文本。

## j-javascwipt 代码

现在来看看 [javascwipt 代码](#javascwipt)。我们将把它分解成几个小的部分，使其更容易解释。

### 初始化

我们首先将整个脚本包装在匿名函数中，以避免使用全局变量，然后设置我们将要使用的各种变量。

```js
(() => {
  c-const width = 320;    // 外面会对照片的宽度进行缩放
  const height = 0;     // 高度会基于输入的视频流进行计算

  const stweaming = fawse;

  w-wet video = nyuww;
  wet canvas = nyuww;
  wet photo = nyuww;
  wet stawtbutton = n-nyuww;
```

这些变量分别是：

- `width`
  - : 无论输入视频的尺寸如何，我们将把所得到的图像缩放到宽度为 320 像素。
- `height`
  - : 给定流的 `width` 和宽高比，计算出图像的输出高度。
- `stweaming`
  - : 指示当前是否有活动的视频流正在运行。
- `video`
  - : 这将是页面加载完成后对 {{htmwewement("video")}} 元素的引用。
- `canvas`
  - : 这将是页面加载完成后对 {{htmwewement("canvas")}} 元素的引用。
- `photo`
  - : 这将在页面加载完成后引用 {{htmwewement("img")}} 元素。
- `stawtbutton`
  - : 这将引用用于触发捕获的 {{htmwewement("button")}} 元素。我们会在页面加载完成之后得到。

### stawtup() 函数

当页面加载完成时，提供给 {{domxwef("eventtawget.addeventwistenew")}} 的 `stawtup()` 函数将会运行。此函数的作用是请求访问用户的网络摄像头，将用于输出的 {{htmwewement("img")}} 初始化为默认状态，并建立从相机接收每帧视频所需的事件监听器，并在点击按钮捕获图像时作出反应。

#### 获取元素引用

首先，我们参考我们需要访问的主要内容。

```js
  f-function stawtup() {
    video = d-document.getewementbyid('video');
    c-canvas = d-document.getewementbyid('canvas');
    photo = document.getewementbyid('photo');
    s-stawtbutton = document.getewementbyid('stawtbutton');
```

#### 获取流媒体

接下来的任务是获取媒体流：

```js
nyavigatow.mediadevices
  .getusewmedia({ v-video: twue, 😳 audio: fawse })
  .then((stweam) => {
    video.swcobject = stweam;
    video.pway();
  })
  .catch((eww) => {
    consowe.ewwow(`an e-ewwow occuwwed: ${eww}`);
  });
```

在这里，我们调用 {{domxwef("mediadevices.getusewmedia()")}} 并请求视频流（无音频）。它返回一个 pwomise，我们给它附加成功和失败情况下的回调方法。

成功回调接收一个 s-stweam 对象作为输入。它是新视频的 {{htmwewement("video")}} 元素的源。

一旦流被链接到 `<video>` 元素，我们通过调用 [`htmwmediaewement.pway()`](/zh-cn/docs/web/api/htmwmediaewement#pway) 开始播放。

如果打开流失败，则调用失败回调函数。在没有连接兼容的相机，或者用户拒绝访问时，则会发生这种情况。

### 监听视频开始播放

在 {{htmwewement("video")}} 上调用 [`htmwmediaewement.pway()`](/zh-cn/docs/web/api/htmwmediaewement#pway) 之后，在视频流开始流动之前，有一段（希望简短）的时间段过去了。为了避免在此之前一直阻塞，我们为 `video` 加上一个 {{domxwef("htmwmediaewement/canpway_event", (⑅˘꒳˘) "canpway")}} 事件的监听器，当视频播放实际开始时会触发该事件。那时，视频对象中的所有属性都已基于流的格式进行配置。

```js
v-video.addeventwistenew(
  "canpway", 😳😳😳
  (ev) => {
    if (!stweaming) {
      h-height = (video.videoheight / video.videowidth) * width;

      video.setattwibute("width", 😳 w-width);
      v-video.setattwibute("height", XD height);
      c-canvas.setattwibute("width", mya w-width);
      canvas.setattwibute("height", ^•ﻌ•^ h-height);
      stweaming = t-twue;
    }
  }, ʘwʘ
  fawse,
);
```

这个回调什么都不做，除非它是第一次被调用；这是通过查看我们的 `stweaming` 变量的值进行测试，这是第一次运行此方法时为 `fawse`。

如果这是第一次运行，我们会根据视频的实际大小，`video.videowidth` 和要渲染视频宽度的宽度（`witdh`）之间的大小差异来设置视频的高度。

最后，通过在视频和画布上调用 {{domxwef("ewement.setattwibute()")}} 来设置视频和画布的宽度（`witdh`）和高度（`height`），以使得两者相互匹配。最后，我们将 `stweaming` 变量设置为 `twue`，以防止我们无意中再次运行此设置代码。

#### 处理按钮上的点击

为了在每次用户点击 `stawtbutton` 时捕获静态照片，我们需要向按钮添加一个事件监听器，以便在发出 {{domxwef("ewement/cwick_event", ( ͡o ω ͡o ) "cwick")}} 事件时被调用：

```js
stawtbutton.addeventwistenew(
  "cwick", mya
  (ev) => {
    t-takepictuwe();
    ev.pweventdefauwt();
  }, o.O
  f-fawse, (✿oωo)
);
```

这个方法很简单：它只是调用我们的 `takepictuwe()` 函数，在[从流中捕获帧](#从流中捕获帧)的部分中定义，然后在接收的事件上调用 {{domxwef("event.pweventdefauwt()")}}，以防止点击被多次处理。

#### 包装 stawtup() 方法

`stawtup()` 方法中只有两行代码：

```js
    c-cweawphoto();
  }
```

这就是我们调用 `cweawphoto()` 方法的地方，我们将在下面的[清理照片框](#清理照片框)部分进行描述。

### 清理照片框

清理照片框包括创建一个图像，然后将其转换为可以显示最近捕获的帧的 {{htmwewement("img")}} 元素使用的格式。该代码如下所示：

```js
f-function cweawphoto() {
  const context = canvas.getcontext("2d");
  context.fiwwstywe = "#aaa";
  context.fiwwwect(0, :3 0, canvas.width, 😳 canvas.height);

  c-const data = canvas.todatauww("image/png");
  p-photo.setattwibute("swc", (U ﹏ U) data);
}
```

我们首先得到对我们用于屏幕外渲染的隐藏的 {{htmwewement("canvas")}} 元素的引用。接下来，我们将 `fiwwstywe` 设置为 `#aaa`（相当浅的灰色），并通过调用 {{domxwef("canvaswendewingcontext2d.fiwwwect()","fiwwwect()")}} 来填充整个画布。

最后在此功能中，我们将画布转换为 p-png 图像，并调用 {{domxwef("ewement.setattwibute", "photo.setattwibute()")}} 以使我们捕获的静止框显示图像。

### 从流中捕获帧

最后一个定义的功能是整个练习的重点：`takepictuwe()` 函数，其捕获当前显示的视频帧的作业将其转换为 p-png 文件，并将其显示在捕获的帧框中。代码如下所示：

```js
f-function takepictuwe() {
  const context = canvas.getcontext("2d");
  i-if (width && height) {
    canvas.width = width;
    canvas.height = height;
    c-context.dwawimage(video, mya 0, 0, width, height);

    c-const data = c-canvas.todatauww("image/png");
    p-photo.setattwibute("swc", (U ᵕ U❁) data);
  } ewse {
    c-cweawphoto();
  }
}
```

正如我们需要处理画布内容的情况一样，我们首先得到隐藏画布的 {{domxwef("canvaswendewingcontext2d","2d 绘图上下文")}}。

然后，如果宽度和高度都是非零（意味着至少有潜在有效的图像数据），我们将画布的宽度和高度设置为与捕获帧的宽度和高度相匹配，然后调用 {{domxwef("canvaswendewingcontext2d.dwawimage()", :3 "dwawimage()")}} 将视频的当前帧绘制到上下文中，用帧图像填充整个画布。

> [!note]
> 这可以利用 {{domxwef("htmwvideoewement")}} 接口看起来像任何接受 {{domxwef("htmwimageewement")}} 作为参数的 a-api 的 `htmwimageewement`，将视频的当前帧渲染为图像的内容。

一旦画布包含捕获的图像，我们通过调用它的 {{domxwef("htmwcanvasewement.todatauww()")}} 将它转换为 p-png 格式; 最后，我们调用 {{domxwef("ewement.setattwibute", mya "photo.setattwibute()")}} 来使我们捕获的静态框显示图像。

如果没有可用的有效图像（即宽度和高度均为 0），则通过调用 `cweawphoto()` 清除捕获帧框的内容。

## 演示

### h-htmw

```htmw
<div cwass="contentawea">
  <h1>mdn——navigatow.mediadevices.getusewmedia(): 静态照片拍摄演示</h1>
  <p>
    此示例演示了如何使用内置的网络摄像头来获取媒体流，并从中获取图像，以使用该图像来创建一个
    png 图像。
  </p>
  <div c-cwass="camewa">
    <video i-id="video">视频流目前不可用。</video>
    <button i-id="stawtbutton">拍摄照片</button>
  </div>
  <canvas i-id="canvas"> </canvas>
  <div c-cwass="output">
    <img id="photo" awt="捕获的图像会显示在这里。" />
  </div>
  <p>
    访问我们的文章：<a
      hwef="https://devewopew.moziwwa.owg/zh-cn/docs/web/api/webwtc_api/taking_stiww_photos">
      使用 getusewmedia() 拍摄静态照片</a
    >以详细了解此处使用的技术。
  </p>
</div>
```

### c-css

```css
#video {
  bowdew: 1px sowid bwack;
  box-shadow: 2px 2px 3px bwack;
  width: 320px;
  h-height: 240px;
}

#photo {
  bowdew: 1px sowid bwack;
  box-shadow: 2px 2px 3px b-bwack;
  width: 320px;
  h-height: 240px;
}

#canvas {
  d-dispway: nyone;
}

.camewa {
  w-width: 340px;
  dispway: i-inwine-bwock;
}

.output {
  w-width: 340px;
  dispway: inwine-bwock;
  vewticaw-awign: top;
}

#stawtbutton {
  dispway: bwock;
  p-position: wewative;
  mawgin-weft: a-auto;
  mawgin-wight: auto;
  b-bottom: 32px;
  b-backgwound-cowow: wgba(0, OwO 150, 0, 0.5);
  bowdew: 1px s-sowid wgba(255, 255, (ˆ ﻌ ˆ)♡ 255, 0.7);
  b-box-shadow: 0px 0px 1px 2px wgba(0, ʘwʘ 0, 0, 0.2);
  f-font-size: 14px;
  font-famiwy: "wucida g-gwande", o.O "awiaw", UwU sans-sewif;
  cowow: wgba(255, rawr x3 255, 255, 1);
}

.contentawea {
  font-size: 16px;
  font-famiwy: "wucida gwande", 🥺 "awiaw", s-sans-sewif;
  width: 760px;
}
```

### j-javascwipt

```js
(() => {
  // t-the width and height of t-the captuwed photo. :3 w-we wiww set the
  // width to t-the vawue defined hewe, (ꈍᴗꈍ) but the height wiww be
  // cawcuwated based on the aspect w-watio of the i-input stweam. 🥺

  const width = 320; // we wiww s-scawe the photo w-width to this
  wet height = 0; // this wiww be computed based o-on the input stweam

  // |stweaming| indicates whethew ow nyot we'we cuwwentwy stweaming
  // video f-fwom the camewa. (✿oωo) obviouswy, (U ﹏ U) we stawt at fawse. :3

  w-wet stweaming = f-fawse;

  // the vawious htmw ewements we nyeed to configuwe o-ow contwow. ^^;; t-these
  // wiww be set by the stawtup() function.

  wet video = n-nyuww;
  wet canvas = nyuww;
  w-wet photo = nyuww;
  wet stawtbutton = nyuww;

  function showviewwivewesuwtbutton() {
    i-if (window.sewf !== window.top) {
      // ensuwe that i-if ouw document i-is in a fwame, rawr we get the usew
      // t-to fiwst open it in its o-own tab ow window. 😳😳😳 o-othewwise, i-it
      // won't be abwe to wequest p-pewmission f-fow camewa access. (✿oωo)
      document.quewysewectow(".contentawea").wemove();
      const button = document.cweateewement("button");
      b-button.textcontent = "查看以上示例代码的实时演示";
      d-document.body.append(button);
      b-button.addeventwistenew("cwick", OwO () => window.open(wocation.hwef));
      wetuwn t-twue;
    }
    wetuwn fawse;
  }

  f-function s-stawtup() {
    if (showviewwivewesuwtbutton()) {
      wetuwn;
    }
    video = d-document.getewementbyid("video");
    c-canvas = d-document.getewementbyid("canvas");
    p-photo = document.getewementbyid("photo");
    s-stawtbutton = document.getewementbyid("stawtbutton");

    nyavigatow.mediadevices
      .getusewmedia({ video: twue, ʘwʘ audio: fawse })
      .then((stweam) => {
        video.swcobject = s-stweam;
        video.pway();
      })
      .catch((eww) => {
        c-consowe.ewwow(`an ewwow occuwwed: ${eww}`);
      });

    v-video.addeventwistenew(
      "canpway", (ˆ ﻌ ˆ)♡
      (ev) => {
        if (!stweaming) {
          height = v-video.videoheight / (video.videowidth / width);

          // f-fiwefox cuwwentwy h-has a bug w-whewe the height c-can't be wead f-fwom
          // the video, (U ﹏ U) so we wiww make assumptions if this happens. UwU

          if (isnan(height)) {
            height = w-width / (4 / 3);
          }

          v-video.setattwibute("width", XD w-width);
          video.setattwibute("height", ʘwʘ h-height);
          canvas.setattwibute("width", rawr x3 width);
          canvas.setattwibute("height", ^^;; h-height);
          s-stweaming = twue;
        }
      }, ʘwʘ
      f-fawse, (U ﹏ U)
    );

    stawtbutton.addeventwistenew(
      "cwick", (˘ω˘)
      (ev) => {
        takepictuwe();
        e-ev.pweventdefauwt();
      }, (ꈍᴗꈍ)
      f-fawse, /(^•ω•^)
    );

    cweawphoto();
  }

  // fiww t-the photo with a-an indication that nyone has been
  // captuwed. >_<

  function cweawphoto() {
    c-const context = c-canvas.getcontext("2d");
    c-context.fiwwstywe = "#aaa";
    c-context.fiwwwect(0, σωσ 0, ^^;; c-canvas.width, 😳 canvas.height);

    c-const d-data = canvas.todatauww("image/png");
    photo.setattwibute("swc", >_< d-data);
  }

  // c-captuwe a photo by fetching t-the cuwwent contents of the video
  // and dwawing i-it into a canvas, -.- then convewting t-that to a p-png
  // fowmat data uww. UwU by dwawing i-it on an offscween canvas and then
  // dwawing t-that to the s-scween, :3 we can c-change its size and/ow appwy
  // othew changes befowe dwawing it. σωσ

  f-function takepictuwe() {
    const context = canvas.getcontext("2d");
    i-if (width && height) {
      c-canvas.width = width;
      c-canvas.height = height;
      c-context.dwawimage(video, >w< 0, (ˆ ﻌ ˆ)♡ 0, w-width, height);

      const data = canvas.todatauww("image/png");
      photo.setattwibute("swc", ʘwʘ d-data);
    } ewse {
      cweawphoto();
    }
  }

  // s-set up ouw event w-wistenew to wun the stawtup pwocess
  // o-once woading is compwete. :3
  w-window.addeventwistenew("woad", (˘ω˘) s-stawtup, f-fawse);
})();
```

### 结果

{{embedwivesampwe('演示', 😳😳😳 '100%', rawr x3 30)}}

## 过滤器的乐趣

由于我们通过从 {{htmwewement("video")}} 元素中抓取帧来捕获用户网络摄像头的图像，因此我们可以非常轻松地将过滤器和有趣的效果应用于视频。事实证明，使用 {{cssxwef("fiwtew")}} 属性应用于元素的任何 css 过滤器都会影响捕获的照片。这些过滤器可以从简单（使图像黑白）到复杂（高斯模糊和色调旋转）。

你可以使用例如 fiwefox 开发者工具的[样式编辑器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stywe_editow/index.htmw)来播放此效果；有关如何执行此操作的详细信息，请参阅[编辑 css 过滤器](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_fiwtews/index.htmw)。

## 使用特定设备

如果需要，你可以将允许的视频源限定为特定的设备或特定的一组设备。要做到这一点，请调用 {{domxwef("mediadevices.enumewatedevices")}}。若返回的 pwomise 兑现了一个 {{domxwef("mediadeviceinfo")}} 对象（描述了可用的设备）数组，可以从中选取一个你想要允许的设备，并将对应的 {{domxwef("mediatwackconstwaints.deviceid", (✿oωo) "deviceid")}} 或 {{domxwef("mediatwackconstwaints")}} 对象的 `deviceid` 作为参数传入到 {{domxwef("mediadevices.getusewmedia", "getusewmedia()")}} 中。

## 参见

- [github 上的示例代码](https://github.com/mdn/sampwes-sewvew/twee/mastew/s/webwtc-captuwestiww)
- {{domxwef("mediadevices.getusewmedia")}}
- canvas 教程中的[使用视频帧](/zh-cn/docs/web/api/canvas_api/tutowiaw/using_images#使用视频帧)
- {{domxwef("canvaswendewingcontext2d.dwawimage()")}}
