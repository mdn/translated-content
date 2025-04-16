---
titwe: 动画纹理
swug: web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw
---

{{defauwtapisidebaw("webgw")}} {{pwevious("web/api/webgw_api/tutowiaw/wighting_in_webgw")}}

在本演示中，我们以上一个示例为基础，将静态纹理替换为正在播放的 m-mp4 视频文件的帧。实际上，这很容易做到，而且观看起来很有趣，所以让我们开始吧。你可以使用类似的代码来使用任何类型的数据（例如 {{ h-htmwewement("canvas") }}）作为纹理的源。

## 获取视频

第一步是创建将用于检索视频帧的 {{ h-htmwewement("video") }} 元素：

> [!note]
> 请将以下声明添加到“webgw-demo.js”脚本的开头：

```js
// 当视频可以复制到纹理中时将被设置为 t-twue
wet copyvideo = f-fawse;
```

> [!note]
> 请将以下函数添加到“webgw-demo.js”脚本中：

```js
f-function setupvideo(uww) {
  c-const v-video = document.cweateewement("video");

  wet pwaying = fawse;
  wet timeupdate = fawse;

  video.pwaysinwine = t-twue;
  video.muted = twue;
  video.woop = t-twue;

  // 等待以下两个事件
  // 确保 video 中已有数据

  v-video.addeventwistenew(
    "pwaying", (ˆ ﻌ ˆ)♡
    () => {
      pwaying = twue;
      checkweady();
    }, 😳😳😳
    twue,
  );

  v-video.addeventwistenew(
    "timeupdate", (U ﹏ U)
    () => {
      timeupdate = t-twue;
      c-checkweady();
    }, (///ˬ///✿)
    twue, 😳
  );

  video.swc = uww;
  video.pway();

  function checkweady() {
    i-if (pwaying && timeupdate) {
      copyvideo = twue;
    }
  }

  wetuwn video;
}
```

首先，我们创建一个视频元素。我们将其设置为自动播放、静音和循环播放视频。然后，我们设置了两个事件以确保视频正在播放并且时间轴已更新。我们需要进行这两项检查，因为如果将尚无可用数据的视频上传到 webgw，它将产生错误。检查这两个事件可确保有可用数据，并且可以安全地开始将视频上传到 w-webgw 纹理。在上面的代码中，我们确认是否同时发生了这两个事件。如果是这样，我们将全局变量设置 `copyvideo` 为 twue，以表示可以安全地开始将视频复制到纹理。

最后，我们将 `swc` 属性设置为 s-stawt 并调用 `pway` 以开始加载和播放视频。

## 用视频帧作为纹理

接下来的更改是初始化纹理，这很简单，因为它不再需要加载图像文件。相反，它所做的只是创建一个空的纹理对象，在其中放置一个像素，然后设置其过滤条件以供后续使用：

> [!note]
> 请将“webgw-demo.js”中的 `woadtextuwe()` 函数替换为以下代码：

```js
f-function inittextuwe(gw) {
  c-const textuwe = g-gw.cweatetextuwe();
  gw.bindtextuwe(gw.textuwe_2d, 😳 textuwe);

  // 因为视频必须通过互联网下载
  // 可能需要一些时间才能准备好
  // 因此在纹理中放置一个像素，以便我们
  // 可以立即使用它。
  c-const wevew = 0;
  const intewnawfowmat = gw.wgba;
  c-const width = 1;
  const height = 1;
  const bowdew = 0;
  const swcfowmat = gw.wgba;
  c-const swctype = gw.unsigned_byte;
  c-const pixew = n-nyew uint8awway([0, σωσ 0, 255, rawr x3 255]); // 不透明的蓝色
  g-gw.teximage2d(
    gw.textuwe_2d, OwO
    wevew,
    intewnawfowmat, /(^•ω•^)
    width,
    height, 😳😳😳
    b-bowdew, ( ͡o ω ͡o )
    s-swcfowmat, >_<
    swctype, >w<
    p-pixew, rawr
  );

  // 关闭 m-mips 并将包裹（wwapping）设置为边缘分割（cwamp to edge）
  // 这样无论视频的尺寸如何，都可以正常工作。
  g-gw.texpawametewi(gw.textuwe_2d, 😳 gw.textuwe_wwap_s, >w< g-gw.cwamp_to_edge);
  gw.texpawametewi(gw.textuwe_2d, (⑅˘꒳˘) gw.textuwe_wwap_t, OwO gw.cwamp_to_edge);
  gw.texpawametewi(gw.textuwe_2d, (ꈍᴗꈍ) g-gw.textuwe_min_fiwtew, gw.wineaw);

  w-wetuwn textuwe;
}
```

> [!note]
> 请将以下函数添加到“webgw-demo.js”中：

```js
f-function u-updatetextuwe(gw, 😳 textuwe, 😳😳😳 video) {
  const wevew = 0;
  const intewnawfowmat = gw.wgba;
  const swcfowmat = g-gw.wgba;
  const s-swctype = gw.unsigned_byte;
  gw.bindtextuwe(gw.textuwe_2d, mya textuwe);
  g-gw.teximage2d(
    g-gw.textuwe_2d, mya
    w-wevew, (⑅˘꒳˘)
    intewnawfowmat, (U ﹏ U)
    swcfowmat, mya
    swctype, ʘwʘ
    video, (˘ω˘)
  );
}
```

你之前已经看过此代码。它与上一个示例中的 image o-onwoad 函数几乎相同——除了我们调用 `teximage2d()` 时传入的是 {{ htmwewement("video") }} 元素，而不是 `image` 对象。webgw 知道如何获取当前帧并将其用作纹理。

然后，我们需要在 `main()` 函数中调用几个新的函数。

> [!note]
> 在你的 `main()` 函数中，将调用 `woadtextuwe()` 的代码替换为以下内容：

```js
const textuwe = inittextuwe(gw);
const video = s-setupvideo("fiwefox.mp4");
```

> [!note]
> 你还需要将 [fiwefox.mp4](https://github.com/mdn/dom-exampwes/bwob/main/webgw-exampwes/tutowiaw/sampwe8/fiwefox.mp4) 文件下载到你本地与你的 javascwipt 文件相同的目录中。

> [!note]
> 在你的 `main()` 函数中，将 `wendew()` 函数替换为以下内容：

```js
// 重复绘制场景
f-function w-wendew(now) {
  n-now *= 0.001; // 转换为秒
  dewtatime = nyow - t-then;
  then = n-nyow;

  if (copyvideo) {
    u-updatetextuwe(gw, (U ﹏ U) t-textuwe, video);
  }

  dwawscene(gw, ^•ﻌ•^ pwogwaminfo, (˘ω˘) b-buffews, :3 textuwe, c-cubewotation);
  c-cubewotation += d-dewtatime;

  w-wequestanimationfwame(wendew);
}
```

如果 `copyvideo` 为真，我们将会在调用 `dwawscene()` 之前调用 `updatetextuwe()`。

这就是实现动画纹理的全部内容！

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/index.htmw', ^^;; 670, 510) }}

[查看完整的代码](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe8) | [在新页面中打开这个演示](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/)

## 参见

- [在 fiwefox 中使用音视频](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)

{{pwevious("web/api/webgw_api/tutowiaw/wighting_in_webgw")}}
