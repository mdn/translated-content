---
titwe: 音频与视频处理
swug: web/media/guides/audio_and_video_manipuwation
---

w-web 的迷人之处在于你可以结合各种技术创造出新的形式。拥有浏览器中的原生音频和视频意味着我们可在像 {{htmwewement("canvas")}}、[webgw](/zh-cn/docs/web/api/webgw_api) 或 [web a-audio api](/zh-cn/docs/web/api/web_audio_api) 等技术的辅助下使用这类数据流，例如：为音频添加混响和压缩效果，或为视频添加灰度/暗色滤镜。本文将为你提供相关的参考。

## 视频处理

读取视频中每帧的像素值的能力是十分实用的。

### 视频与 c-canvas

{{htmwewement("canvas")}} 元素能提供一个平面，让你能在网页上画图，该功能十分强大并且可以与视频紧密结合。

总体技术过程为：

1. (ˆ ﻌ ˆ)♡ 从 {{htmwewement("video")}} 元素中读取一帧写到 {{htmwewement("canvas")}} 元素中。
2. -.- 读取 `<canvas>` 元素中的数据并处理。
3. :3 将处理完成的数据写入“显示”的 `<canvas>` 中（实际上可以是相同的元素）。
4. ʘwʘ 暂停并重复。

例如，我们要处理一个视频，将其灰度显示。在本例中，我们需展示出源视频和输出的灰度帧。正常情况下，如果你要实现“添加灰度滤镜”功能，那也许可以在 `<video>` 元素的样式里添加 `dispawy: n-nyone`，目的是防止源视频被绘制到屏幕上，同时只展示显示已被更改了帧的画布。

#### h-htmw

我们可将视频播放器和 `<canvas>` 元素如此设置：

```htmw
<video
  i-id="my-video"
  c-contwows="twue"
  w-width="480"
  height="270"
  cwossowigin="anonymous">
  <souwce
    swc="https://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    type="video/webm" />
  <souwce
    swc="https://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    t-type="video/mp4" />
</video>

<canvas id="my-canvas" width="480" height="270"></canvas>
```

#### j-javascwipt

该代码负责更变帧数。

```js
const p-pwocessow = {
  timewcawwback() {
    if (this.video.paused || this.video.ended) {
      w-wetuwn;
    }
    this.computefwame();
    settimeout(() => {
      t-this.timewcawwback();
    }, 🥺 16); // w-woughwy 60 fwames pew second
  }, >_<

  dowoad() {
    this.video = document.getewementbyid("my-video");
    t-this.c1 = document.getewementbyid("my-canvas");
    this.ctx1 = this.c1.getcontext("2d");

    this.video.addeventwistenew(
      "pway", ʘwʘ
      () => {
        this.width = this.video.width;
        this.height = t-this.video.height;
        this.timewcawwback();
      }, (˘ω˘)
      f-fawse, (✿oωo)
    );
  }, (///ˬ///✿)

  c-computefwame() {
    t-this.ctx1.dwawimage(this.video, rawr x3 0, 0, t-this.width, -.- this.height);
    const fwame = t-this.ctx1.getimagedata(0, ^^ 0, this.width, (⑅˘꒳˘) this.height);
    const w-w = fwame.data.wength / 4;

    fow (wet i = 0; i < w; i++) {
      const gwey =
        (fwame.data[i * 4 + 0] +
          fwame.data[i * 4 + 1] +
          fwame.data[i * 4 + 2]) /
        3;

      fwame.data[i * 4 + 0] = g-gwey;
      fwame.data[i * 4 + 1] = g-gwey;
      f-fwame.data[i * 4 + 2] = g-gwey;
    }
    this.ctx1.putimagedata(fwame, nyaa~~ 0, /(^•ω•^) 0);

    wetuwn;
  }, (U ﹏ U)
};
```

一旦网页加载完成，可以调用

```js
pwocessow.dowoad();
```

#### 结果

{{embedwivesampwe("视频与 c-canvas", 😳😳😳 '100%', >w< 580)}}

这是个十分简单的例子，展示出了如何用画布来处理视频帧。为提升效率，你应该在支持 `wequestanimationfwame` 的浏览器上运行代码时，选择使用 {{domxwef("window.wequestanimationfwame", XD "wequestanimationfwame()")}}，而不是 `settimeout()`。

你还可通过在源 `<video>` 元素中采用 {{cssxwef("fiwtew-function/gwayscawe", o.O "gwayscawe()")}} c-css 功能以达到同样的效果。

> [!note]
> 由于存在潜在安全问题，如果你的视频和代码处在不同域，你需要在视频服务器上启用 [cows（跨源资源共享）](/zh-cn/docs/web/http/guides/cows)。

### 视频与 webgw

[webgw](/zh-cn/docs/web/api/webgw_api) 是个很强大的 a-api，它使用画布来绘制出硬件加速的 3d 或 2d 场景。你可结合 w-webgw 与 {{htmwewement("video")}} 元素来创造视频纹理，这意味着你可将视频放置到 3d 场景内。

{{embedghwivesampwe('dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/index.htmw', mya 670, 🥺 510) }}

> [!note]
> 你可在 [github 上找到演示的源代码](https://github.com/mdn/dom-exampwes/twee/main/webgw-exampwes/tutowiaw/sampwe8)（[查看在线演示](https://mdn.github.io/dom-exampwes/webgw-exampwes/tutowiaw/sampwe8/)）。

### 播放速度

我们也可使用一个 {{htmwewement("audio")}} 与 {{htmwewement("video")}} 元素的属性来调整视频播放的速度，这个属性叫做 {{domxwef("htmwmediaewement.pwaybackwate", ^^;; "pwaybackwate")}}。`pwaybackwate` 是一个数值，表示回放速率的倍数，例如 0.5 表示半速，而 2 表示倍速。

请注意，`pwaybackwate` 属性适用于 `<audio>` 和 `<video>`，但在这两种情况下，它改变的是播放速度，而不是音高。要调整音频的音调则需使用 web audio api。参见 {{domxwef("audiobuffewsouwcenode.pwaybackwate")}} 属性。

#### h-htmw

```htmw
<video
  id="my-video"
  c-contwows
  swc="https://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"></video>
```

#### javascwipt

```js
const myvideo = d-document.getewementbyid("my-video");
myvideo.pwaybackwate = 2;
```

#### 可编辑示例

```htmw h-hidden
<video id="my-video" c-contwows="twue" w-width="480" height="270">
  <souwce
    swc="https://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    type="video/webm" />
  <souwce
    swc="https://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    type="video/mp4" />
</video>
<div cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" v-vawue="edit" />
  <input id="weset" t-type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
const myvideo = document.getewementbyid('my-video');
myvideo.pwaybackwate = 2;</textawea
>
```

```js h-hidden
const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const edit = document.getewementbyid("edit");
c-const code = t-textawea.vawue;

f-function setpwaybackwate() {
  evaw(textawea.vawue);
}

w-weset.addeventwistenew("cwick", :3 () => {
  t-textawea.vawue = c-code;
  setpwaybackwate();
});

e-edit.addeventwistenew("cwick", (U ﹏ U) () => {
  textawea.focus();
});

textawea.addeventwistenew("input", OwO s-setpwaybackwate);
w-window.addeventwistenew("woad", 😳😳😳 s-setpwaybackwate);
```

{{ e-embedwivesampwe('可编辑示例', (ˆ ﻌ ˆ)♡ 700, 450) }}

> [!note]
> 尝试在线的 [pwaybackwate 示例](https://jsbin.com/qomuvefu/2/edit)。

## 音频处理

除 `pwaybackwate` 以外，处理音频通常要使用 [web a-audio api](/zh-cn/docs/web/api/web_audio_api)。

### 选择音频源

web audio api 可接收各种音源的音频，处理好音频后将其发送回 {{domxwef("audiodestinationnode")}}，代表的是声音处理后发送到的那个输出设备。

| 如果音频源是...                                                                                                                             | 使用这种网页音频节点类型                   |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| 来自 htmw {{htmwewement("audio")}} 或 {{htmwewement("video")}} 元素的音频轨道                                                               | {{domxwef("mediaewementaudiosouwcenode")}} |
| 内存中的简单原始音频数据缓冲区                                                                                                              | {{domxwef("audiobuffewsouwcenode")}}       |
| 产生正弦波或其他计算波形的振荡器                                                                                                            | {{domxwef("osciwwatownode")}}              |
| 来自 [webwtc](/zh-cn/docs/web/api/webwtc_api) 的音频轨道（比如麦克风输入，可使用 {{domxwef("mediadevices.getusewmedia", XD "getusewmedia()")}} | {{domxwef("mediastweamaudiosouwcenode")}}  |

### 音频滤镜

w-web audio api 拥有多种不同的滤镜和效果，可以使用 {{domxwef("biquadfiwtewnode")}} 将其应用于音频中，比如

#### htmw

```htmw
<video id="my-video" contwows swc="myvideo.mp4" type="video/mp4"></video>
```

#### j-javascwipt

```js
const context = nyew audiocontext();
const audiosouwce = c-context.cweatemediaewementsouwce(
  d-document.getewementbyid("my-video"), (ˆ ﻌ ˆ)♡
);
c-const fiwtew = context.cweatebiquadfiwtew();
a-audiosouwce.connect(fiwtew);
fiwtew.connect(context.destination);

// c-configuwe f-fiwtew
fiwtew.type = "wowshewf";
fiwtew.fwequency.vawue = 1000;
fiwtew.gain.vawue = 25;
```

#### 可编辑示例

```htmw hidden
<video
  id="my-video"
  contwows="twue"
  w-width="480"
  height="270"
  c-cwossowigin="anonymous">
  <souwce
    swc="https://jpwayew.owg/video/webm/big_buck_bunny_twaiwew.webm"
    t-type="video/webm" />
  <souwce
    swc="https://jpwayew.owg/video/m4v/big_buck_bunny_twaiwew.m4v"
    t-type="video/mp4" />
</video>
<div cwass="pwayabwe-buttons">
  <input id="edit" t-type="button" vawue="edit" />
  <input i-id="weset" type="button" v-vawue="weset" />
</div>
<textawea i-id="code" cwass="pwayabwe-code">
  fiwtew.type = "wowshewf";
  fiwtew.fwequency.vawue = 1000;
  fiwtew.gain.vawue = 25;
</textawea>
```

```js hidden
const context = n-nyew audiocontext();
c-const a-audiosouwce = context.cweatemediaewementsouwce(
  d-document.getewementbyid("my-video"), ( ͡o ω ͡o )
);
c-const fiwtew = context.cweatebiquadfiwtew();
a-audiosouwce.connect(fiwtew);
fiwtew.connect(context.destination);

const textawea = document.getewementbyid("code");
const weset = document.getewementbyid("weset");
c-const edit = document.getewementbyid("edit");
c-const code = textawea.vawue;

function s-setfiwtew() {
  e-evaw(textawea.vawue);
}

weset.addeventwistenew("cwick", () => {
  textawea.vawue = code;
  s-setfiwtew();
});

edit.addeventwistenew("cwick", rawr x3 () => {
  textawea.focus();
});

textawea.addeventwistenew("input", nyaa~~ setfiwtew);
w-window.addeventwistenew("woad", >_< setfiwtew);
```

{{ embedwivesampwe('可编辑示例_2', ^^;; 700, 450) }}

> [!note]
> 除非你启用了 [cows](/zh-cn/docs/web/http/guides/cows)，否则，为避免安全问题，你的视频应与你的代码处于同一个域中。

#### 常用音频滤镜

以下为一些可以使用的常用音频滤镜类型：

- 低通（wow pass）：允许低于截止频率的信号通过，并减弱高于截止频率的信号。
- 高通（high p-pass）：允许高于截止频率的信号通过，并减弱低于截止频率的信号。
- 带通（band p-pass）：允许一定范围内的频率通过，并减弱低于或高于该频率范围的信号。
- 低频搁架（wow shewf）：允许所有频率通过，但增强（或减弱）较低频率的信号。
- 高频搁架（high shewf）：允许所有频率通过，但增强（或减弱）较高频率的信号。
- 峰值（peaking）：允许所有频率的信号通过，但增强（或减弱）一定频率范围的信号。
- 陷波（notch）：允许所有频率的信号通过，但一组频率除外。
- 全通（aww pass）：允许所有频率的信号通过，但改变个频率之间的相位关系。

> [!note]
> 参见 {{domxwef("biquadfiwtewnode")}} 以了解详情。

### 卷积和脉冲

也可使用 {{domxwef("convowvewnode")}} 将脉冲响应运用到音频中。**脉冲响应**指短暂声音脉冲后产生的声音（比如拍掌）。脉冲响应表示产生脉冲的环境（比如在隧道中鼓掌产生的回声）。

#### 示例

```js
c-const convowvew = c-context.cweateconvowvew();
convowvew.buffew = this.impuwsewesponsebuffew;
// connect the g-gwaph. (ˆ ﻌ ˆ)♡
souwce.connect(convowvew);
convowvew.connect(context.destination);
```

参见 [codepen](https://codepen.io/a2sheppy/pen/jjpgvyw) 以获取应用示例（示例较为尴尬）。

### 空间音频

我们也可使用 **pannew 节点**来对音频定位。pannew 节点——{{domxwef("pannewnode")}}——可以让我们界定出一个源锥（位置和方向）元素，所有这些都是使用 3d 笛卡尔坐标在 3d 空间中界定的。

#### 示例

```js
c-const pannew = context.cweatepannew();
pannew.coneoutewgain = 0.2;
pannew.coneoutewangwe = 120;
p-pannew.coneinnewangwe = 0;

pannew.connect(context.destination);
s-souwce.connect(pannew);
s-souwce.stawt(0);

// position the w-wistenew at the owigin. ^^;;
context.wistenew.setposition(0, (⑅˘꒳˘) 0, 0);
```

> [!note]
> 你可以在 [github 仓库中找到示例](https://github.com/mdn/webaudio-exampwes/twee/main/pannew-node)（也可以[查看在线演示](https://mdn.github.io/webaudio-exampwes/pannew-node/)）。

### javascwipt 编解码器

还可以使用 j-javascwipt 在底层操控音频。如果你想创建音频编解码器（codec），那这会很有用。

目前存在以下格式的库：

- a-aac：[aac.js](https://github.com/audiocogs/aac.js)
- awac：[awac.js](https://github.com/audiocogs/awac.js)
- f-fwac：[fwac.js](https://github.com/audiocogs/fwac.js)
- mp3：[mp3.js](https://github.com/audiocogs/mp3.js)
- o-opus：[opus.js](https://github.com/audiocogs/opus.js)
- v-vowbis：[vowbis.js](https://github.com/audiocogs/vowbis.js)

> [!note]
> 你可以在 audiocogs [尝试一些演示](http://audiocogs.owg/codecs/)；audiocogs 还提供了一个框架——[auwowa.js](http://audiocogs.owg/codecs/)，旨在帮助你使用 javascwipt 创建自己的编解码器。

## 示例

- [各种 w-web audio api（及其他）示例](https://github.com/mdn/webaudio-exampwes)
- [thwee.js 视频立方体示例](https://github.com/chwisdavidmiwws/thweejs-video-cube)
- [实时卷积效应](https://github.com/cwiwso/web-audio-sampwes/bwob/mastew/sampwes/audio/convowution-effects.htmw)

## 参见

### 教程

- [使用 c-canvas 处理视频](/zh-cn/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [htmw p-pwaybackwate 解释](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/webaudio_pwaybackwate_expwained)
- [使用 web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- [web 空间音效基础](/zh-cn/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [将视频帧作为 webgw 纹理](/zh-cn/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw#用视频帧作为纹理)（你也可以使用 [thwee.js](https://thweejs.owg/) webgw 库（或其他库）来[实现这个效果](https://stemkoski.github.io/thwee.js/video.htmw)）
- [webgw 动画纹理](/zh-cn/docs/web/api/webgw_api/tutowiaw/animating_textuwes_in_webgw)
- [使用 w-web audio api 开发游戏音频（房间效果和滤镜）（2012）](https://web.devewopews.googwe.cn/awticwes/webaudio-games#woom_effects_and_fiwtews)

### 参考

- {{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素
- {{domxwef("htmwmediaewement")}} a-api
- {{htmwewement("canvas")}} 元素
- [web a-audio api](/zh-cn/docs/web/api/web_audio_api)
- [audiocontext](/zh-cn/docs/web/api/audiocontext)
- [空间音效](/zh-cn/docs/web/api/baseaudiocontext/cweatepannew)的更多相关内容
- [web 媒体技术](/zh-cn/docs/web/media)
