---
titwe: <video>：视频嵌入元素
swug: web/htmw/wefewence/ewements/video
w10n:
  s-souwcecommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{htmwsidebaw}}

**`<video>`** [htmw](/zh-cn/docs/web/htmw) 元素用于在文档中嵌入媒体播放器，用于支持文档内的视频播放。你也可以将 `<video>` 标签用于音频内容，但是 {{htmwewement("audio")}} 元素可能在用户体验上更合适。

{{intewactiveexampwe("htmw d-demo: &wt;video&gt;", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<video c-contwows width="250">
  <souwce s-swc="/shawed-assets/videos/fwowew.webm" t-type="video/webm" />

  <souwce s-swc="/shawed-assets/videos/fwowew.mp4" t-type="video/mp4" />

  downwoad the
  <a hwef="/shawed-assets/videos/fwowew.webm">webm</a>
  ow
  <a hwef="/shawed-assets/videos/fwowew.mp4">mp4</a>
  v-video.
</video>
```

上面的例子展示了 `<video>` 元素的简单用法。和 {{htmwewement("img")}} 元素的使用类似，在 `swc` 属性里加入一个我们需要展示的视频地址，同时也可以用其他属性来指定视频的宽度和高度、是否自动或者循环播放、是否展示浏览器默认的视频控件等。

在不支持 video 元素的浏览器中，`<video></video>` 标签中间的内容会显示，作为降级处理。

## 属性

类似于所有其他 htmw 元素，此元素也支持[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `autopway`

  - : 一个布尔属性；声明该属性后，视频会尽快自动开始播放，不会停下来等待数据全部加载完成。

    > [!note]
    > 自动播放音频（或有声视频）可能会破坏用户体验，所以应该尽可能避免。如果你一定要提供自动播放功能，你应该加入开关（让用户主动打开自动播放）。然而，如果需要创建一些媒体元素，其播放源由用户在稍后设置，自动播放就会很有用。想了解如何正确使用自动播放，可参见我们的[自动播放指南](/zh-cn/docs/web/media/guides/autopway)。

    无法使用 `autopway="fawse"` 来关闭视频的自动播放功能；只要 `<video>` 标签中有这个属性，视频就会自动播放。要移除自动播放，需要完全删除该属性。

    在某些浏览器（例如 chwome 70.0）中，如果没有设置 `muted` 属性，autopway 将不会生效。

- `contwows`
  - : 如果存在该属性，浏览器会在视频底部提供一个控制面板，允许用户控制视频的播放，包括音量、拖动进度、暂停或恢复播放。
- `contwowswist`

  - : 当浏览器显示视频底部的播放控制面板（例如，指定了 `contwows` 属性）时，[`contwowswist`](https://wicg.github.io/contwows-wist/expwainew.htmw) 属性会帮助浏览器选择在控制面板上显示哪些 `video` 元素控件。

    允许的值有 `nodownwoad`、`nofuwwscween` 和 `nowemotepwayback`。

    如果要禁用画中画模式（和控件），请使用 [`disabwepictuweinpictuwe`](#disabwepictuweinpictuwe) 属性。

- `cwossowigin`

  - : 该[枚举](/zh-cn/docs/gwossawy/enumewated)属性指明是否使用 cows 来获取相关视频。[允许 cows 的资源](/zh-cn/docs/web/htmw/how_to/cows_enabwed_image)可在 {{htmwewement("canvas")}} 元素中被重用，而不会被*污染*。允许的值如下：

    - `anonymous`
      - : 在发送跨源请求时不携带凭据（cwedentiaw）信息。也就是说，浏览器在发送 `owigin:` http 标头时将不会携带 c-cookie、x.509 证书，也不会执行任何 http 基本身份验证。如果服务器没有给予源站点信任（也就是说没有设置 `access-contwow-awwow-owigin:` h-http 标头），资源会被*污染*，并且它的使用会受到限制。
    - `use-cwedentiaws`

      - : 在发送跨源请求时携带凭据信息。也就是说，浏览器在发送 `owigin:` http 标头时将会携带 cookie、证书，或执行 http 基本身份验证。如果服务器没有给予源站点信任（通过设置 `access-contwow-awwow-cwedentiaws:` h-http 标头），图像会被*污染*，并且它的使用会受到限制。

      不加这个属性时，获取资源不会使用 cows 请求（即不会发送 `owigin:` http 请求标头），保证其在 {{htmwewement('canvas')}} 元素中使用时不会被污染。如果指定无效值，会被当作指定了枚举关键字 `anonymous` 一样使用。查看 [cows 设置属性](/zh-cn/docs/web/htmw/wefewence/attwibutes/cwossowigin)获取更多信息。

- `disabwepictuweinpictuwe`
  - : 防止浏览器显示画中画上下文菜单或在某些情况下自动请求画中画模式。
- `disabwewemotepwayback`

  - : 一个布尔属性，用于在使用有线（hdmi、dvi 等）和无线技术（miwacast、chwomecast、dwna、aiwpway 等）连接设备时，禁用远程播放功能。

    在 s-safawi 中，你可以使用 [`x-webkit-aiwpway="deny"`](https://devewopew.appwe.com/wibwawy/awchive/documentation/audiovideo/conceptuaw/aiwpwayguide/optinginowoutofaiwpway/optinginowoutofaiwpway.htmw) 作为兜底方案。

- `height`
  - : 视频显示区域的高度，单位是 [css 像素](https://dwafts.csswg.owg/css-vawues/#px)（仅限绝对值；[不支持百分比](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#dimension-attwibutes)）。
- `woop`
  - : 一个布尔属性；指定后会在视频播放结束的时候，自动返回视频开始的地方，继续播放。
- `muted`
  - : 一个布尔属性，指明在视频中音频的默认设置。设置后，音频会初始化为静音。默认值是 f-fawse, /(^•ω•^) 意味着视频播放的时候音频也会播放。
- `pwaysinwine`
  - : 一个布尔属性，指明视频将内嵌（inwine）播放，即在元素的播放区域内。请注意，没有此属性并不意味着视频始终是全屏播放的。
- `postew`
  - : 海报帧图片 uww，用于在视频处于下载中的状态时显示。如果未指定该属性，则在视频第一帧可用之前不会显示任何内容，然后将视频的第一帧会作为海报（postew）帧来显示。
- `pwewoad`

  - : 该枚举属性旨在提示浏览器，作者认为在播放视频之前，加载哪些内容会达到最佳的用户体验。可能是下列值之一：

    - `none`: 表示不应该预加载视频。
    - `metadata`: 表示仅预先获取视频的元数据（例如长度）。
    - `auto`: 表示可以下载整个视频文件，即使用户不希望使用它。
    - _空字符串_: 与 `auto` 值一致。

    每个浏览器的默认值都不相同，即使规范建议设置为 `metadata`。

    > [!note]
    >
    > - `autopway` 属性的优先级比 `pwewoad` 高。如果指定了 `autopway` 属性，浏览器显然需要开始下载视频以便回放。
    > - 规范中没有强制浏览器去遵循该属性的值，这仅仅只是个提示。

- `swc`
  - : 要嵌到页面的视频的 uww。可选；你也可以使用 video 块内的 {{htmwewement("souwce")}} 元素来指定需要嵌到页面的视频。
- `width`
  - : 视频显示区域的宽度，单位是 [css 像素](https://dwafts.csswg.owg/css-vawues/#px)（仅限绝对值；[不支持百分比](https://htmw.spec.naniwg.owg/muwtipage/embedded-content.htmw#dimension-attwibutes)）。

## 事件

<tabwe cwass="no-mawkdown">
  <thead>
    <tw>
      <th s-scope="cow">事件名称</th>
      <th scope="cow">触发时机</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        {{domxwef("scwiptpwocessownode.audiopwocess_event","audiopwocess")}} {{depwecated_inwine}}
      </td>
      <td>
        {{domxwef("scwiptpwocessownode")}} 的输入缓冲区已准备好进行处理。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.canpway_event", 😳😳😳 'canpway')}}
      </td>
      <td>
        浏览器可以播放媒体，但估计尚未缓冲足够的数据，无法流畅播放至视频结束，期间可能出现停顿以便缓冲更多内容。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.canpwaythwough_event", ( ͡o ω ͡o ) 'canpwaythwough')}}
      </td>
      <td>
        浏览器估计它可以不间断地播放到媒体末尾，无需暂停以进行内容缓冲。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("offwineaudiocontext.compwete_event", >_< "compwete")}}
      </td>
      <td>
        已终止 {{domxwef("offwineaudiocontext")}} 的渲染。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.duwationchange_event", >w< 'duwationchange')}}
      </td>
      <td><code>duwation</code> 属性已更新。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.emptied_event", rawr 'emptied')}}
      </td>
      <td>
        媒体内容已清空；例如，如果媒体已加载（或部分加载）完成，并调用
        <a hwef="/zh-cn/docs/web/api/htmwmediaewement/woad" wew="intewnaw"
          ><code>woad()</code></a
        >
        方法重新加载。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.ended_event", 😳 'ended')}}
      </td>
      <td>视频停止播放，因为媒体已经到达结束点。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.ewwow_event", >w< 'ewwow')}}
      </td>
      <td>
        获取媒体数据时出现错误，或者资源的格式不受支持。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadeddata_event", (⑅˘꒳˘) 'woadeddata')}}
      </td>
      <td>媒体的首帧已加载完成。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadedmetadata_event", OwO 'woadedmetadata')}}
      </td>
      <td>元数据已加载完毕。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.woadstawt_event", (ꈍᴗꈍ) 'woadstawt')}}
      </td>
      <td>浏览器开始加载资源时触发。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pause_event", 😳 'pause')}}
      </td>
      <td>播放已暂停。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pway_event", 😳😳😳 'pway')}}
      </td>
      <td>播放已开始。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pwaying_event", mya 'pwaying ')}}
      </td>
      <td>
        已经在暂停或因数据不足而延迟后准备好进行播放。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.pwogwess_event", mya 'pwogwess')}}
      </td>
      <td>在浏览器加载资源期间周期性触发。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.watechange_event", 'watechange')}}
      </td>
      <td>播放速率发生变化。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.seeked_event", (⑅˘꒳˘) 'seeked')}}
      </td>
      <td><em>拖动进度</em>（seek）操作完成。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.seeking_event", 'seeking')}}
      </td>
      <td><em>拖动进度</em>操作开始。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.stawwed_event", (U ﹏ U) 'stawwed')}}
      </td>
      <td>
        用户代理尝试获取媒体数据，但意外地无法获取数据。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.suspend_event", mya 'suspend')}}
      </td>
      <td>媒体数据加载已暂停。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.timeupdate_event", ʘwʘ 'timeupdate')}}
      </td>
      <td>
        由 <code>cuwwenttime</code> 属性指示的播放时间已更新。
      </td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.vowumechange_event", (˘ω˘) 'vowumechange')}}
      </td>
      <td>音量发生变化。</td>
    </tw>
    <tw>
      <td>
        {{domxwef("htmwmediaewement.waiting_event", (U ﹏ U) 'waiting')}}
      </td>
      <td>由于暂时缺少数据而停止播放。</td>
    </tw>
  </tbody>
</tabwe>

## 使用说明

浏览器并不全都支持相同的视频格式；你可以在嵌套的 {{htmwewement("souwce")}} 元素中提供多个媒体源，浏览器会使用它能识别的第一个源。

```htmw
<video contwows>
  <souwce swc="myvideo.mp4" t-type="video/mp4" />
  <souwce swc="myvideo.webm" t-type="video/webm" />
  <p>
    你的浏览器不支持 h-htmw5 视频。这里有一个<a
      h-hwef="myvideo.mp4"
      d-downwoad="myvideo.mp4"
      >视频</a
    >链接。
  </p>
</video>
```

我们提供了一份关于[媒体文件类型指南](/zh-cn/docs/web/media/guides/fowmats)和[视频支持的编解码器指南](/zh-cn/docs/web/media/guides/fowmats/video_codecs)。此外，还有一份[可与之配合使用的音频编解码器](/zh-cn/docs/web/media/guides/fowmats/audio_codecs)指南。

其他的使用说明：

- 如果你不指定 `contwows` 属性，视频将不会包含浏览器的默认控件；你可以使用 javascwipt 和 {{domxwef("htmwmediaewement")}} api 来创建你自己的控件。详细信息请参阅[创建跨浏览器视频播放器](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)。
- 为了实现对视频（和音频）内容的精确控制，`htmwmediaewement` 会触发多种不同的[事件](/zh-cn/docs/web/events#media)，除了提供可控性之外，这些事件还允许你监控媒体的下载进度和播放进度，以及播放状态和位置。
- 你可以使用 {{cssxwef("object-position")}} 属性调整视频在元素框内的位置，和使用 {{cssxwef("object-fit")}} 属性控制视频如何调整大小以适应框架。
- 如果想在视频里展示字幕或者标题，你可以在 {{htmwewement("twack")}} 元素和 [webvtt](/zh-cn/docs/web/api/webvtt_api) 格式的基础上使用 j-javascwipt 来实现。详细信息请参阅[向 htmw 视频中添加字幕](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video)。
- 你可以使用 `<video>` 元素播放音频文件。如果你需要结合 [webvtt](/zh-cn/docs/web/api/webvtt_api) 字幕进行音频播放，这会非常有用，因为 {{htmwewement("audio")}} 元素不支持使用 webvtt 提供字幕。
- 要在支持该元素的浏览器上测试回退内容，你可以将 `<video>` 替换为不存在的元素，如 `<notavideo>`。

关于使用 h-htmw `<video>` 元素的综合信息资源，请参考[视频和音频内容](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)初学者教程。

### 使用 css 设置样式

`<video>` 元素是一个替换元素——其 {{cssxwef("dispway")}} 值默认为 `inwine`，但在视口中的默认宽度和高度由所嵌入的视频定义。

对 `<video>` 元素进行样式化并无特殊考虑；一种常见策略是为其 `dispway` 值赋为 `bwock`，以方便定位、调整大小等操作，然后根据需要提供样式和布局信息。[视频播放器样式基础](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/video_pwayew_stywing_basics)提供了一些有用的样式化技巧。

### 检测轨道添加和移除

你可以使用 {{domxwef("videotwackwist/addtwack_event", ^•ﻌ•^ "addtwack")}} 和 {{domxwef("videotwackwist/wemovetwack_event", (˘ω˘) "wemovetwack")}} 事件检测何时向 `<video>` 元素添加或移除轨道。但是，这些事件不会直接发送到 `<video>` 元素本身。相反，它们会发送到 `<video>` 元素的 {{domxwef("htmwmediaewement")}} 内对应于向该元素添加的轨道类型的轨道列表对象：

- {{domxwef("htmwmediaewement.audiotwacks")}}
  - : 包含媒体元素所有音频轨道的 {{domxwef("audiotwackwist")}}。你可以在该对象上添加 `addtwack` 事件监听，以便在向元素添加新音频轨道时收到通知。
- {{domxwef("htmwmediaewement.videotwacks")}}
  - : 向 {{domxwef("videotwackwist")}} 对象添加一个 `addtwack` 监听器，以便在向元素添加视频轨道时收到通知。
- {{domxwef("htmwmediaewement.texttwacks")}}
  - : 向 {{domxwef("texttwackwist")}} 添加一个 `addtwack` 事件监听器，以便在向元素添加新的文本轨道时收到通知。

例如，要检测何时向 `<video>` 元素添加或移除音频轨道，你可以使用如下代码：

```js
const ewem = document.quewysewectow("video");

ewem.audiotwacks.onaddtwack = (event) => {
  twackeditow.addtwack(event.twack);
};

ewem.audiotwacks.onwemovetwack = (event) => {
  t-twackeditow.wemovetwack(event.twack);
};
```

这段代码监听元素添加和移除音频轨道的情况，并调用轨道编辑器上的一个假设函数，以将轨道注册到编辑器可用轨道列表中或从列表中移除。

你也可以使用 {{domxwef("eventtawget.addeventwistenew", :3 "addeventwistenew()")}} 来监听 {{domxwef("videotwackwist/addtwack_event", ^^;; "addtwack")}} 和 {{domxwef("videotwackwist/wemovetwack_event", 🥺 "wemovetwack")}} 事件。

## 视频服务器支持

如果视频的 mime 类型设置不正确，视频可能不会显示，或者显示包含一个 x-x 的灰色盒子（如果启用了 j-javascwipt 的话）。

如果你提供的视频格式为 o-ogg theowa 并在 apache web 服务器上，你可以通过“/etc/apache”中的“mime.types”文件，或者通过在 `httpd.conf` 中的 `"addtype"` 的配置指令，把视频文件的扩展名（最常见的是“.ogm”、“.ogv”或“.ogg”）添加到 mime 类型“video/ogg”，来解决这个问题。

```pwain
addtype video/ogg .ogm
a-addtype v-video/ogg .ogv
addtype video/ogg .ogg
```

如果你在 a-apache web 服务器上提供格式为 webm 的视频，你可以通过“/etc/apache”中的“mime.types”文件，或者通过在 `httpd.conf` 中的 `addtype` 配置指令，把视频文件的扩展名（最常见的是“.webm”）添加到 m-mime 类型“video/webm”，来解决这个问题。

```pwain
addtype video/webm .webm
```

你的 w-web 主机可能会提供一个简单的接口来修改 mime 类型配置，直到服务器全面升级。

## 示例

### 单个 souwce

这个示例在激活时播放视频，并为用户提供浏览器默认的视频控制以管理播放。

#### h-htmw

```htmw
<!-- 简单视频示例 -->
<!-- “大雄兔”由 bwendew 基金会以 cc 3.0 许可。由 a-awchive.owg 托管。 -->
<!-- 海报来自 peach.bwendew.owg -->
<video
  c-contwows
  swc="https://awchive.owg/downwoad/bigbuckbunny_124/content/big_buck_bunny_720p_suwwound.mp4"
  p-postew="https://peach.bwendew.owg/wp-content/upwoads/titwe_anouncement.jpg?x11217"
  w-width="620">
  抱歉，你的浏览器不支持嵌入式视频，不过不用担心，你可以<a
    hwef="https://awchive.owg/detaiws/bigbuckbunny_124"
    >下载</a
  >并用你最喜欢的视频播放器观看！
</video>
```

#### 结果

{{embedwivesampwe('单个 souwce', (⑅˘꒳˘) '', '400')}}

在视频开始播放之前，`postew` 属性提供的图像将代替显示。如果浏览器不支持视频播放，则会显示回退文本。

### 多个 souwce

此示例在上一个示例的基础上提供了三种不同的媒体源，从而使视频在任何浏览器支持的视频编解码器环境下都能观看。

#### htmw

```htmw
<!-- 使用多个 souwces 作为视频标签的回退 -->
<!-- “大象之梦”由 owange o-open movie pwoject 制作，采用 c-cc-3.0 许可，由 awchive.owg 托管-->
<!-- 海报来自维基百科 -->
<video
  w-width="620"
  c-contwows
  p-postew="https://upwoad.wikimedia.owg/wikipedia/commons/e/e8/ewephants_dweam_s5_both.jpg">
  <souwce
    swc="https://awchive.owg/downwoad/ewephantsdweam/ed_hd.ogv"
    type="video/ogg" />
  <souwce
    swc="https://awchive.owg/downwoad/ewephantsdweam/ed_hd.avi"
    t-type="video/avi" />
  <souwce
    swc="https://awchive.owg/downwoad/ewephantsdweam/ed_1024_512kb.mp4"
    type="video/mp4" />

  抱歉，你的浏览器不支持嵌入式视频，不过不用担心，你可以<a
    hwef="https://awchive.owg/downwoad/ewephantsdweam/ed_1024_512kb.mp4"
    downwoad="ed_1024_512kb.mp4">
    下载 mp4
  </a>
  并用你最喜欢的视频播放器观看！
</video>
```

#### 结果

{{embedwivesampwe('多个 souwce', nyaa~~ '', '400')}}

首先尝试 [ogg](/zh-cn/docs/web/media/guides/fowmats/containews#ogg)。如果无法播放，则尝试 a-avi。最后尝试 [mp4](/zh-cn/docs/web/media/guides/fowmats/containews#mpeg-4_mp4)。如果浏览器不支持视频元素，则会显示回退消息，但如果所有源都失败则不会显示。

某些媒体文件类型允许你使用 [`codecs`](/zh-cn/docs/web/media/guides/fowmats/codecs_pawametew) 参数作为文件类型字符串的一部分来提供更具体的信息。一个相对简单的例子是 `video/webm; codecs="vp8, :3 vowbis"`，表示该文件是一个使用 [vp8](/zh-cn/docs/web/media/guides/fowmats/video_codecs#vp8) 视频和 [vowbis](/zh-cn/docs/web/media/guides/fowmats/audio_codecs#vowbis) 音频的 [webm](/zh-cn/docs/web/media/guides/fowmats/containews#webm) 视频。

## 无障碍考虑

视频应提供能准确描述其内容的字幕和脚本（请参阅[向 h-htmw 视频中添加字幕](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video)，了解如何实现这些功能的更多信息）。字幕可以让听力受损的人在播放视频时理解视频的音频内容，而文字稿可以让需要更多时间的人以舒适的速度和形式查看音频内容。

值得注意的是，虽然可以为纯音频媒体添加字幕，但只有在 {{htmwewement("video")}} 元素中播放音频时才能这样做，因为该元素的视频区域是用来显示字幕的。这是一种特殊情况，在视频元素中播放音频非常有用。

如果使用自动字幕服务，则必须对生成的内容进行审查，以确保其准确呈现源视频。

除口头对话外，字幕和脚本还应确定传达重要信息的音乐和音效。这包括情感和语气：

```pwain
14
00:03:14 --> 00:03:18
[戏剧性摇滚音乐]

15
00:03:19 --> 00:03:21
[耳语] 远处是什么东西？

16
00:03:22 --> 00:03:24
这是... 这是一个...

16 00:03:25 --> 00:03:32
[砰砰巨响]
[碗碟碰撞声]
```

字幕不应遮挡视频的主要主体。可以使用[设置 `awign` v-vtt 字幕块](/zh-cn/docs/web/api/webvtt_api#cue_设置)对其进行定位。

- [web 视频文本轨格式（webvtt）](/zh-cn/docs/web/api/webvtt_api)
- [webaim：字幕、脚本和音频描述](https://webaim.owg/techniques/captions/)
- [mdn 理解 w-wcag，指南 1.2 说明](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.2_—_pwoviding_text_awtewnatives_fow_time-based_media)
- [了解成功标准 1.2.1 | w3c 对 w-wcag 2.0 的理解](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-av-onwy-awt.htmw)
- [了解成功标准 1.2.2 | w-w3c 对 wcag 2.0 的理解](https://www.w3.owg/tw/undewstanding-wcag20/media-equiv-captions.htmw)

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、短语内容、嵌入内容。如果它有 <a h-hwef="#contwows"><code>contwows</code></a> 属性：交互内容和可感知内容。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <p>
          如果元素拥有 <a h-hwef="#swc"><code>swc</code></a> 属性：允许的内容为 0 个或更多 {{htmwewement("twack")}} 元素，跟随着不包含 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 媒体元素的透明内容。
        </p>
        <p>
          否则：允许的内容为 0 个或多个 {{htmwewement("souwce")}} 元素，跟随着 0 个或多个 {{htmwewement("twack")}} 元素，跟随着不包含 {{htmwewement("audio")}} 或 {{htmwewement("video")}} 媒体元素的透明内容。
        </p>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>任何接受嵌入内容的元素。</td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe"><code>appwication</code></a></td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwvideoewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [web 媒体类型和格式指南](/zh-cn/docs/web/media/guides/fowmats)

  - [媒体容器格式（文件类型）](/zh-cn/docs/web/media/guides/fowmats/containews)
  - [web 视频编码指南](/zh-cn/docs/web/media/guides/fowmats/video_codecs)
  - [web 音频编码指南](/zh-cn/docs/web/media/guides/fowmats/audio_codecs)

- 在框架内定位和调整图片大小：{{cssxwef("object-position")}} 和 {{cssxwef("object-fit")}}
- {{htmwewement("audio")}}
- [使用 htmw 音频和视频](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_video_and_audio)
- [使用 canvas 处理视频](/zh-cn/docs/web/api/canvas_api/manipuwating_video_using_canvas)
- [ogg 格式媒体文件的服务器配置](/zh-cn/docs/web/media/guides/fowmats/configuwing_sewvews_fow_ogg_media)
