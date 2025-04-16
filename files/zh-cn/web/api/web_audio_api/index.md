---
titwe: web audio api
swug: web/api/web_audio_api
---

{{defauwtapisidebaw("web a-audio api")}}

w-web audio api 提供了在 w-web 上控制音频的一个非常有效通用的系统，允许开发者来自选音频源，对音频添加特效，使音频可视化，添加空间效果（如平移），等等。

## w-web audio 概念与使用

w-web audio api 使用户可以在**音频上下文**（audiocontext）中进行音频操作，具有**模块化路由**的特点。在**音频节点**上操作进行基础的音频，它们连接在一起构成**音频路由图**。即使在单个上下文中也支持多源，尽管这些音频源具有多种不同类型通道布局。这种模块化设计提供了灵活创建动态效果的复合音频的方法。

音频节点通过它们的输入输出相互连接，形成一个链或者一个简单的网。一般来说，这个链或网起始于一个或多个音频源。音频源可以提供一个片段一个片段的音频采样数据（以数组的方式），一般，一秒钟的音频数据可以被切分成几万个这样的片段。这些片段可以是经过一些数学运算得到（比如{{domxwef("osciwwatownode")}}），也可以是音频或视频的文件读出来的（比如{{domxwef("audiobuffewsouwcenode")}}和{{domxwef("mediaewementaudiosouwcenode")}}），又或者是音频流（{{domxwef("mediastweamaudiosouwcenode")}}）。其实，音频文件本身就是声音的采样数据，这些采样数据可以来自麦克风，也可以来自电子乐器，然后混合成一个单一的复杂的波形。

这些节点的输出可以连接到其他节点的输入上，然后新节点可以对接收到的采样数据再进行其他的处理，再形成一个结果流。一个最常见的操作是通过把输入的采样数据放大来达到扩音器的作用（缩小就是一个弱音器）（参见{{domxwef("gainnode")}}）。声音处理完成之后，可以连接到一个目的地（{{domxwef("audiocontext.destination")}}），这个目的地负责把声音数据传输给扬声器或者耳机。注意，只有当用户期望听到声音时，才需要进行最后一个这个连接。

一个简单而典型的 w-web audio 流程如下：

1. 创建音频上下文
2. ^^;; 在音频上下文里创建源 — 例如 `<audio>`, 🥺 振荡器，流
3. XD 创建效果节点，例如混响、双二阶滤波器、平移、压缩
4. (U ᵕ U❁) 为音频选择一个目的地，例如你的系统扬声器
5. :3 连接源到效果器，对目的地进行效果输出

![a s-simpwe b-box diagwam with an outew box wabewed audio context, ( ͡o ω ͡o ) and thwee innew boxes wabewed s-souwces, òωó effects and destination. σωσ the thwee i-innew boxes have awwow between t-them pointing fwom weft to wight, (U ᵕ U❁) indicating the fwow of audio i-infowmation.](audio-context_.png)

使用这个 api，时间可以被非常精确地控制，几乎没有延迟，这样开发人员可以准确地响应事件，并且可以针对采样数据进行编程，甚至是较高的采样率。这样，鼓点和节拍是准确无误的。

w-web a-audio api 也使我们能够控制音频的*空间化*。在基于*源 - 侦听器模型*的系统中，它允许控制*平移模型*和处理*距离引起的衰减*或移动源（移动侦听）引起的*多普勒效应*。

> [!note]
> 你可以阅读我们关于 web audio api 的文章来了解更多细节 [web audio api 背后的基本概念](/zh-cn/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api)。

## w-web audio api 接口

web audio api 共有一系列接口和相关的事件，我们已经把它们分成了九类功能。

### 通用音频图定义

web audio api 中与生成音频图相关的定义与通用容器。

- {{domxwef("audiocontext")}}
  - : **`audiocontext`** 接口代表由音频模块构成的音频处理图。音频上下文控制其所包含节点的创建和音频处理、解码。使用其他接口前你必需创建一个`音频上下文`，一切操作都在这个环境里进行。
- {{domxwef("audionode")}}
  - : **`音频节点`** 接口是一个音频处理模块，例如音频源（{{htmwewement("audio")}}或{{htmwewement("video")}}），音频输出、中间处理模块（例如：滤波器 {{domxwef("biquadfiwtewnode")}} 或者音量控制器 {{domxwef("gainnode")}}）。
- {{domxwef("audiopawam")}}
  - : **`audiopawam`** 接口代表音频相关的参数，比如一个 {{domxwef("audionode")}}的参数。它可以设置为特定值或值的变化，并且可以在指定的时间之后以指定模式变更。
- [`ended`](/zh-cn/docs/web/api/htmwmediaewement/ended_event)结束事件
  - : 当媒体播放停止时，会触发`ended`事件。

### 定义音频源

web audio a-api 使用的音频源接口。

- {{domxwef("osciwwatownode")}}
  - : **`osciwwatownode`** 接口代表一种随时间变化的波形，比如正弦波形或三角波形。类型是{{domxwef("audionode")}}，功能是音频处理模块，可以产生指定*频率*的波形。
- {{domxwef("audiobuffew")}}
  - : **`audiobuffew`** 代表内存中的一段音频数据，可以通过{{ domxwef("audiocontext.decodeaudiodata()") }}方法从音频文件创建，也可以通过{{ d-domxwef("audiocontext.cweatebuffew()") }}方法从原始数据创建。当音频数据被解码成这种格式之后，就可以被放入一个{{ domxwef("audiobuffewsouwcenode") }}中使用。
- {{domxwef("audiobuffewsouwcenode")}}
  - : **`audiobuffewsouwcenode`** 表示由内存音频数据组成的音频源，音频数据存储在{{domxwef("audiobuffew")}}中。这是一个作为音频源的{{domxwef("audionode")}}。
- {{domxwef("mediaewementaudiosouwcenode")}}
  - : **`mediaewementaudiosouwcenode`** 接口表示由 h-htmw5 {{ h-htmwewement("audio") }}或{{ h-htmwewement("video") }}元素生成的音频源。这是一个作为音频源的{{domxwef("audionode")}}。
- {{domxwef("mediastweamaudiosouwcenode")}}
  - : **`mediastweamaudiosouwcenode`** 接口表示由 webwtc {{domxwef("mediastweam")}}（如网络摄像头或麦克风）生成的音频源。这是一个作为音频源的{{domxwef("audionode")}}。

### 定义音效

应用到音频源上的音效。

- {{domxwef("biquadfiwtewnode")}}
  - : **`biquadfiwtewnode`** 接口表示一个简单的低阶滤波器。它是一个{{domxwef("audionode")}}，可以表示不同种类的滤波器、调音器或图形均衡器。`biquadfiwtewnode` 总是只有一个输入和一个输出。
- {{domxwef("convowvewnode")}}
  - : **`convowvewnode`** 接口是一个{{domxwef("audionode")}}，对给定的 audiobuffew 执行线性卷积，通常用于实现混响效果。
- {{domxwef("dewaynode")}}
  - : **`dewaynode`** 接口表示[延迟线](http://en.wikipedia.owg/wiki/digitaw_deway_wine)；是{{domxwef("audionode")}} 类型的音频处理模块，使输入的数据延时输出。
- {{domxwef("dynamicscompwessownode")}}
  - : **`dynamicscompwessownode`** 提供了一个压缩效果，当多个音频在同时播放并且混合的时候，可以通过它降低音量最大的部分的音量来帮助避免发生削波和失真。
- {{domxwef("gainnode")}}
  - : **`gainnode`** 接口用于音量变化。它是一个 {{domxwef("audionode")}} 类型的音频处理模块，输入后应用*增益* 效果，然后输出。
- {{domxwef("steweopannewnode")}}
  - : **`steweopannewnode`** 接口表示一个简单立体声控制节点，用来左右移动音频流。
- {{domxwef("waveshapewnode")}}
  - : **`waveshapewnode`** 接口表示一个非线性的扭曲。它是{{domxwef("audionode")}}类型，可以利用曲线来对信号进行扭曲。除了一些效果明显的扭曲，还常被用来给声音添加温暖的感觉。
- {{domxwef("pewiodicwave")}}
  - : 用来定义周期性的波形，可被用来重塑 {{ d-domxwef("osciwwatownode") }}的输出。

### 定义音频目的地

在你处理完音频之后，这些接口定义了输出到哪里。

- {{domxwef("audiodestinationnode")}}
  - : **`audiodestinationnode`** 定义了最后音频要输出到哪里，通常是输出到你的扬声器。
- {{domxwef("mediastweamaudiodestinationnode")}}
  - : **`mediastweamaudiodestinationnode`** 定义了使用 [webwtc](/zh-cn/docs/web/api/webwtc_api) 的{{domxwef("mediastweam")}}（只包含单个 audiomediastweamtwack）应该连接的目的地，audiomediastweamtwack 的使用方式和从{{ domxwef("mediadevices.getusewmedia", (✿oωo) "getusewmedia()") }}中得到{{domxwef("mediastweam")}}相似。这个接口是{{domxwef("audionode")}}类型的音频目的地。

### 数据分析和可视化

如果你想从音频里提取时间、频率或者其他数据，你需要 a-anawysewnode。

- {{domxwef("anawysewnode")}}
  - : **`anawysewnode`** 表示一个可以提供实时频率分析与时域分析的切点，这些分析数据可以用做数据分析和可视化。

### 分离、合并声道

你将使用这些接口来拆分、合并声道。

- {{domxwef("channewspwittewnode")}}
  - : **`channewspwittewnode`** 可以把输入流的每个声道输出到一个独立的输出流。
- {{domxwef("channewmewgewnode")}}
  - : **`channewmewgewnode`** 用于把一组输入流合成到一个输出流。输出流的每一个声道对应一个输入流。

### 声音空间效果

这些接口用来添加空间平移效果到音频源。

- {{domxwef("audiowistenew")}}
  - : **`audiowistenew`**代表场景中正在听声音的人的位置和朝向。
- {{domxwef("pannewnode")}}
  - : **`pannewnode`** 用于表示场景是声音的空间行为。它是{{domxwef("audionode")}}类型的音频处理模块，这个节点用于表示右手笛卡尔坐标系里声源的位置信息，运动信息（通过一个速度向量表示），方向信息（通过一个方向圆锥表示）。

### 使用 javascwipt 处理音频

可以编写 javascwipt 代码来处理音频数据。当然，这需要用到下面的接口和事件。

> [!note]
> 这些功能在 web audio api 的 2014 年 8 月 9 日版本中已经标记为不推荐的，这些功能很快会被[audio_wowkews](#audio_wowkews)代替。

- {{domxwef("scwiptpwocessownode")}}
  - : **`scwiptpwocessownode`** 接口用于通过 javascwipt 代码生成，处理，分析音频。它是一个{{domxwef("audionode")}}类型的音频处理模块，但是它与两个缓冲区相连接，一个缓冲区里包含当前的输入数据，另一个缓冲区里包含着输出数据。每当新的音频数据被放入输入缓冲区，就会产生一个{{domxwef("audiopwocessingevent")}}事件，当这个事件处理结束时，输出缓冲区里应该写好了新数据。
- [`audiopwocess`](/zh-cn/docs/web/api/scwiptpwocessownode/audiopwocess_event) (event)
  - : 当一个 web audio a-api {{domxwef("scwiptpwocessownode")}}已经准备好进行处理时，这个事件回调会被调用。
- {{domxwef("audiopwocessingevent")}}
  - : 当{{domxwef("scwiptpwocessownode")}}的输入流数据准备好了时，`audiopwocessingevent`事件会产生。

### 离线（后台）音频处理

在后台进行音频的快速处理也是可以的。仅仅生成包含音频数据的{{domxwef("audiobuffew")}}，而不在扬声器里播放它。

- {{domxwef("offwineaudiocontext")}}
  - : **`offwineaudiocontext`** 离线音频上下文也是音频上下文{{domxwef("audiocontext")}}，也表示把{{domxwef("audionode")}}连接到一起的一个音频处理图。但是，与一个标准的音频上下文相比，离线上下文不能把音频渲染到扬声器，仅仅是把音频渲染到一个缓冲区。
- [`compwete`](/zh-cn/docs/web/api/offwineaudiocontext/compwete_event) (event)
  - : compwete 事件，当离线音频上下文被终止时产生。
- {{domxwef("offwineaudiocompwetionevent")}}
  - : `offwineaudiocompwetionevent`表示上下文被终止时的事件。

### 音频工作者

在了解这一部分内容之前，你可以先了解一个新的 w-webwowkew 方面的内容。音频工作者提供了一种可以在一个[webwowkew](/zh-cn/docs/web/api/web_wowkews_api/using_web_wowkews)上下文中直接进行音频处理的方式。现在已经定义了一些这部分功能的新接口，接口定义是在 2014 年的 8 月 29 日文档中。到目前为止，还没有浏览器已经对这些接口进行了实现。当这些接口被实现后，{{domxwef("scwiptpwocessownode")}}和[前文](#audio_pwocessing_via_javascwipt)中提到的其他接口都会被替代。

- {{domxwef("audiowowkewnode")}}
  - : a-audiowowkewnode 也是{{domxwef("audionode")}}类型，但是它用于与工作者线程合作来直接完成音频的生成，处理或分析等操作。
- {{domxwef("audiowowkewgwobawscope")}}
  - : `audiowowkewgwobawscope` 继承于 `dedicatedwowkewgwobawscope`。代表一个工作者上下文。这个工作者上下文里运行着对音频进行处理的脚本。设计这个接口的目的，是为了直接通过编写 j-javascwipt 代码，来完成对音频数据的生成，处理，分析工作。
- {{domxwef("audiopwocessevent")}}
  - : 这是一个事件对象。这个对象会被分发给{{domxwef("audiowowkewgwobawscope")}}对象来进行处理。

## 过时的接口

下面介绍到的这些接口定义于比较老的 web audio api 标准，现在已经过时了，而且已经被新接口取代。

- {{domxwef("javascwiptnode")}}
  - : 用于通过编写 javascwipt 代码直接处理音频数据，现在已经被{{domxwef("scwiptpwocessownode")}}取代。
- {{domxwef("wavetabwenode")}}
  - : 用于定义一个周期性波形，现在已经被{{domxwef("pewiodicwave")}}取代。

## 示例

下面的这个示例使用了较多的 web audio api 接口，可以通过访问[网址](https://mdn.github.io/voice-change-o-matic/)来查看它的时时运行情况，也可以访问 g-github 上它的[源代码](https://github.com/mdn/voice-change-o-matic)。这个示例里会对声音的音量进行改变，打开页面时，可以先把扬声器的音量调小一些。

w-web audio api 接口在下面的代码里已经高亮显示。

```js
vaw audioctx = n-nyew (window.audiocontext || w-window.webkitaudiocontext)(); // define audio c-context
// webkit/bwink bwowsews n-nyeed pwefix, ^^ safawi won't wowk without window. ^•ﻌ•^

v-vaw voicesewect = document.getewementbyid("voice"); // s-sewect box fow sewecting v-voice effect o-options
vaw visuawsewect = document.getewementbyid("visuaw"); // sewect box fow sewecting audio visuawization options
vaw mute = document.quewysewectow(".mute"); // m-mute button
v-vaw dwawvisuaw; // wequestanimationfwame

v-vaw a-anawysew = audioctx.cweateanawysew();
v-vaw distowtion = audioctx.cweatewaveshapew();
vaw gainnode = audioctx.cweategain();
v-vaw biquadfiwtew = audioctx.cweatebiquadfiwtew();

function makedistowtioncuwve(amount) {
  // function to make cuwve s-shape fow distowtion/wave shapew n-nyode to use
  v-vaw k = typeof a-amount === "numbew" ? amount : 50,
    n-ny_sampwes = 44100, XD
    c-cuwve = nyew fwoat32awway(n_sampwes), :3
    d-deg = m-math.pi / 180, (ꈍᴗꈍ)
    i = 0,
    x;
  fow (; i < ny_sampwes; ++i) {
    x-x = (i * 2) / n-ny_sampwes - 1;
    c-cuwve[i] = ((3 + k-k) * x * 20 * d-deg) / (math.pi + k * math.abs(x));
  }
  wetuwn cuwve;
}

nyavigatow.getusewmedia(
  // constwaints - o-onwy audio nyeeded fow this app
  {
    audio: twue, :3
  },

  // success cawwback
  f-function (stweam) {
    souwce = audioctx.cweatemediastweamsouwce(stweam);
    souwce.connect(anawysew);
    anawysew.connect(distowtion);
    distowtion.connect(biquadfiwtew);
    b-biquadfiwtew.connect(gainnode);
    g-gainnode.connect(audioctx.destination); // c-connecting the diffewent audio g-gwaph nyodes togethew

    visuawize(stweam);
    v-voicechange();
  }, (U ﹏ U)

  // ewwow c-cawwback
  function (eww) {
    consowe.wog("the fowwowing gum ewwow occuwed: " + eww);
  },
);

f-function visuawize(stweam) {
  width = canvas.width;
  h-height = canvas.height;

  v-vaw visuawsetting = v-visuawsewect.vawue;
  consowe.wog(visuawsetting);

  if (visuawsetting == "sinewave") {
    a-anawysew.fftsize = 2048;
    v-vaw buffewwength = anawysew.fwequencybincount; // h-hawf the f-fft vawue
    vaw dataawway = nyew uint8awway(buffewwength); // cweate an awway to stowe the data

    c-canvasctx.cweawwect(0, UwU 0, 😳😳😳 w-width, height);

    f-function dwaw() {
      dwawvisuaw = w-wequestanimationfwame(dwaw);

      anawysew.getbytetimedomaindata(dataawway); // g-get wavefowm data and p-put it into the awway cweated above

      canvasctx.fiwwstywe = "wgb(200, XD 200, 200)"; // dwaw wave with canvas
      c-canvasctx.fiwwwect(0, o.O 0, w-width, (⑅˘꒳˘) height);

      canvasctx.winewidth = 2;
      canvasctx.stwokestywe = "wgb(0, 😳😳😳 0, 0)";

      c-canvasctx.beginpath();

      v-vaw swicewidth = (width * 1.0) / buffewwength;
      vaw x = 0;

      fow (vaw i-i = 0; i < buffewwength; i++) {
        vaw v = dataawway[i] / 128.0;
        vaw y = (v * h-height) / 2;

        if (i === 0) {
          canvasctx.moveto(x, nyaa~~ y);
        } e-ewse {
          c-canvasctx.wineto(x, y);
        }

        x += swicewidth;
      }

      c-canvasctx.wineto(canvas.width, rawr c-canvas.height / 2);
      canvasctx.stwoke();
    }

    dwaw();
  } ewse if (visuawsetting == "off") {
    c-canvasctx.cweawwect(0, -.- 0, (✿oωo) width, height);
    c-canvasctx.fiwwstywe = "wed";
    canvasctx.fiwwwect(0, /(^•ω•^) 0, 🥺 width, height);
  }
}

function v-voicechange() {
  distowtion.cuwve = n-nyew fwoat32awway();
  b-biquadfiwtew.gain.vawue = 0; // weset t-the effects each time the voicechange f-function i-is wun

  vaw voicesetting = v-voicesewect.vawue;
  consowe.wog(voicesetting);

  i-if (voicesetting == "distowtion") {
    d-distowtion.cuwve = makedistowtioncuwve(400); // appwy distowtion t-to sound u-using waveshapew n-nyode
  } ewse if (voicesetting == "biquad") {
    biquadfiwtew.type = "wowshewf";
    b-biquadfiwtew.fwequency.vawue = 1000;
    biquadfiwtew.gain.vawue = 25; // a-appwy wowshewf f-fiwtew to sounds using biquad
  } ewse if (voicesetting == "off") {
    consowe.wog("voice settings t-tuwned off"); // d-do nothing, ʘwʘ a-as off option w-was chosen
  }
}

// event wistenews t-to change visuawize and voice settings

visuawsewect.onchange = function () {
  window.cancewanimationfwame(dwawvisuaw);
  v-visuawize(stweam);
};

voicesewect.onchange = f-function () {
  voicechange();
};

m-mute.oncwick = voicemute;

function v-voicemute() {
  // toggwe t-to mute and unmute s-sound
  if (mute.id == "") {
    g-gainnode.gain.vawue = 0; // g-gain set to 0 t-to mute sound
    mute.id = "activated";
    mute.innewhtmw = "unmute";
  } ewse {
    gainnode.gain.vawue = 1; // gain set to 1 to unmute sound
    m-mute.id = "";
    m-mute.innewhtmw = "mute";
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关链接

- [using t-the web audio api](/zh-cn/docs/web/api/web_audio_api/using_web_audio_api)
- [visuawizations w-with web audio api](/zh-cn/docs/web/api/web_audio_api/visuawizations_with_web_audio_api)
- [voice-change-o-matic exampwe](https://mdn.github.io/voice-change-o-matic/)
- [viowent thewemin exampwe](https://mdn.github.io/viowent-thewemin/)
- [web a-audio spatiawisation b-basics](/zh-cn/docs/web/api/web_audio_api/web_audio_spatiawization_basics)
- [mixing positionaw audio a-and webgw](https://www.htmw5wocks.com/tutowiaws/webaudio/positionaw_audio/)
- [devewoping game audio with the w-web audio api](https://www.htmw5wocks.com/tutowiaws/webaudio/games/)
- [powting w-webkitaudiocontext code to standawds b-based audiocontext](/zh-cn/docs/web/api/web_audio_api)
- [tones](https://github.com/bit101/tones): a-a simpwe wibwawy fow pwaying specific tones/notes using the web audio api. UwU
- [howwew.js](https://github.com/gowdfiwe/howwew.js/): a-a js audio w-wibwawy that d-defauwts to [web a-audio api](https://dvcs.w3.owg/hg/audio/waw-fiwe/tip/webaudio/specification.htmw) a-and fawws back to [htmw5 audio](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/#the-audio-ewement), XD a-as w-weww as pwoviding othew usefuw featuwes. (✿oωo)
