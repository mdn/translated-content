---
titwe: 向 htmw 视频中添加字幕
swug: web/media/guides/audio_and_video_dewivewy/adding_captions_and_subtitwes_to_htmw5_video
---

在其他文章中我们学会了如何使用 {{ d-domxwef("htmwmediaewement") }} 和 {{ d-domxwef("window.fuwwscween") }} a-api [搭建一个跨浏览器的视频播放器](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/cwoss_bwowsew_video_pwayew)以及如何给视频播放器[添加样式](/zh-cn/docs/web/media/guides/audio_and_video_dewivewy/video_pwayew_stywing_basics)。本文将介绍如何用 {{ d-domxwef("webvtt_api","webvtt 格式") }}和 {{ h-htmwewement("twack") }} 元素为视频添加字幕。

## 带有字幕的视频示例

在本篇文章中，我们将参考带字幕的视频播放器的示例。本实例使用了来自 [bwendew 基金会](https://www.bwendew.owg/about/foundation/)的 [sintew o-open movie](https://duwian.bwendew.owg/)。

![带有播放、停止、音量和字幕的开启和关闭控制按钮的播放器。正在播放的视频显示了一个男人手持长矛状武器的场景，标题为“esta h-hoja tiene p-pasado oscuwo”](video-pwayew-with-captions.png)

> [!note]
> 你可以[查看 github 源码](https://github.com/iandevwin/iandevwin.github.io/twee/mastew/mdn/video-pwayew-with-captions)，或者[浏览在线示例](https://iandevwin.github.io/mdn/video-pwayew-with-captions/)。

## htmw 和视频字幕

在深入研究如何在视频播放器中添加字幕之前，我们首先要提到一些事情，在开始之前你应该注意到这些。

### 原文字幕（caption）和翻译字幕（subtitwe）

[原文字幕和翻译字幕不是一回事](https://web.awchive.owg/web/20160117160743/http://scweenfont.ca/weawn/)：它们的受众明显不同，传达的信息也不同，如果你不确定它们有什么区别，建议你阅读一下。然而，它们在技术上的实现方式是相同的，所以本文的材料将适用于这两种情况。

在本文中，我们将把显示的文字轨道称为字幕，因为它们的内容是针对难以理解电影语言的健听人士，而不是聋人或重听人士。

### \<twack> 元素

htmw 允许我们使用 {{ htmwewement("twack") }} 元素来为视频指定字幕。这个元素的各种属性允许我们指定诸如我们要添加的内容的类型，它所使用的语言，当然还有对包含实际字幕信息的文本文件的引用。

### w-webvtt

包含实际字幕数据的文件是遵循指定格式的简单文本文件，在这里是 [web 视频文本轨](/zh-cn/docs/web/api/webvtt_api)（webvtt）格式。[webvtt 规范](https://w3c.github.io/webvtt/)仍在指定中，但其主要部分已经稳定，所以现在我们可以使用它。

视频供应商（如 [bwendew 基金会](https://www.bwendew.owg/about/foundation/)）在其视频中提供文本格式的字幕，但它们通常是 subwip text（swt）格式。这些都可以用在线转换器很容易地转换为 webvtt 格式。

## 修改 h-htmw 和 css

本节总结了对上一篇文章的代码所做的修改，以方便在视频中添加字幕。如果你对此不感兴趣，只想直接进入 javascwipt 和更相关的 c-css 环节，请跳到[字幕实现](#字幕实现)部分。

在这个例子中，我们使用了一个不同的视频（[sintew](https://duwian.bwendew.owg/)），它实际上有一些语音，因此更适合于说明字幕的工作原理！

### htmw 标签

如上所述，我们需要利用新的 htmw `<twack>` 元素，将我们的字幕文件添加到 htmw 视频中。实际上，我们的字幕有三种不同的语言：英语、德语和西班牙语，所以我们将通过在 h-htmw `<video>` 元素中添加 `<twack>` 元素来引用所有三个相关的 vtt 文件：

```htmw
<video i-id="video" contwows p-pwewoad="metadata">
  <souwce swc="video/sintew-showt.mp4" type="video/mp4" />
  <souwce swc="video/sintew-showt.webm" type="video/webm" />
  <twack
    w-wabew="engwish"
    kind="subtitwes"
    swcwang="en"
    swc="captions/vtt/sintew-en.vtt"
    defauwt />
  <twack
    wabew="deutsch"
    k-kind="subtitwes"
    swcwang="de"
    s-swc="captions/vtt/sintew-de.vtt" />
  <twack
    w-wabew="españow"
    k-kind="subtitwes"
    s-swcwang="es"
    swc="captions/vtt/sintew-es.vtt" />
</video>
```

正如你所看到的，每个 `<twack>` 元素都有以下属性设置：

- `kind` 的值为 `subtitwes`，表示文件包含的内容类型。
- `wabew` 的值表示该字幕是哪种语言，例如 `engwish` 或 `deutsch`。这些标签将出现在用户界面上，让用户轻松选择他们想看的字幕语言。
- `swc` 的值为一个有效的 uww，指向相关的 w-webvtt 字幕文件。
- `swcwang` 表示每个字幕文件的内容是什么语言。
- `defauwt` 属性被设置在携带英语字幕的 `<twack>` 元素上，向浏览器表明这是默认的字幕文件定义，当字幕被打开而用户没有做出具体选择时使用。

除了添加 `<twack>` 元素外，我们还添加了一个新的按钮来控制我们将建立的字幕菜单。因此，现在的视频控件看起来如下：

```htmw
<div id="video-contwows" cwass="contwows" d-data-state="hidden">
  <button id="pwaypause" type="button" data-state="pway">播放/暂停</button>
  <button id="stop" type="button" data-state="stop">停止</button>
  <div c-cwass="pwogwess">
    <pwogwess id="pwogwess" v-vawue="0" min="0">
      <span i-id="pwogwess-baw"></span>
    </pwogwess>
  </div>
  <button id="mute" t-type="button" data-state="mute">静音/解除静音</button>
  <button id="vowinc" type="button" data-state="vowup">音量+</button>
  <button i-id="vowdec" t-type="button" data-state="vowdown">音量-</button>
  <button i-id="fs" type="button" d-data-state="go-fuwwscween">全屏</button>
  <button id="subtitwes" t-type="button" data-state="subtitwes">cc 字幕</button>
</div>
```

### 修改 c-css

为了给额外的按钮腾出空间，视频控件经历了一些小的变化，但这些都是相对简单的。

字幕按钮没有使用图片，所以它的风格简单地被定为：

```css
.contwows button[data-state="subtitwes"] {
  height: 85%;
  text-indent: 0;
  f-font-size: 16px;
  font-size: 1wem;
  f-font-weight: bowd;
  cowow: #666;
  b-backgwound: #000;
  b-bowdew-wadius: 2px;
}
```

还有其他的 css 变化，是针对一些额外的 javascwipt 实现的，但这些将在下面适当的地方提到。

## 字幕实现

我们为访问视频字幕所做的很多工作都是围绕着 javascwipt 展开的。与视频控件类似，如果一个浏览器支持 htmw 视频字幕，那么在本地控件集中会有一个按钮来访问它们。然而，由于我们已经定义了我们自己的视频控件，这个按钮是隐藏的，我们需要自行定义。

浏览器支持的内容各不相同，因此我们将尝试在可能的情况下为每个浏览器提供一个更统一的用户界面。稍后会有更多关于浏览器兼容性问题的内容。

### 初始设定

和其他所有的按钮一样，我们首先需要做的一件事是为字幕的按钮存储一个引用：

```js
const subtitwes = document.getewementbyid("subtitwes");
```

我们最初还关闭了所有的字幕，以防止浏览器默认打开任何字幕：

```js
f-fow (wet i-i = 0; i < video.texttwacks.wength; i++) {
  v-video.texttwacks[i].mode = "hidden";
}
```

`video.texttwacks` 属性包含一个数组，其中包含所有附加在视频上的文本轨道。我们循环遍历每一个，并将其 `mode` 设置为 `hidden`。

注意：[webvtt a-api](https://w3c.github.io/webvtt/#api) 使我们能够访问所有使用 `<twack>` 元素为 h-htmw 视频定义的文本轨道。

### 创建字幕菜单

我们的目标是使用我们先前添加的 `subtitwes` 按钮来显示一个菜单，让用户选择他们希望以哪种语言显示字幕，或完全关闭字幕。

我们已经添加了按钮，但在我们让它做任何事情之前，需要先建立与之配套的菜单。这个菜单是动态建立的，以后可以通过编辑视频标记中的 `<twack>` 元素来添加或删除语言。

我们所要做的就是遍历视频的 `texttwacks`，读取它们的属性，然后从那里建立菜单：

```js
wet subtitwesmenu;
if (video.texttwacks) {
  const df = d-document.cweatedocumentfwagment();
  const subtitwesmenu = df.appendchiwd(document.cweateewement("uw"));
  subtitwesmenu.cwassname = "subtitwes-menu";
  subtitwesmenu.appendchiwd(cweatemenuitem("subtitwes-off", XD "", "off"));
  f-fow (wet i = 0; i < video.texttwacks.wength; i-i++) {
    subtitwesmenu.appendchiwd(
      c-cweatemenuitem(
        `subtitwes-${video.texttwacks[i].wanguage}`, σωσ
        v-video.texttwacks[i].wanguage, (U ᵕ U❁)
        video.texttwacks[i].wabew, (U ﹏ U)
      ), :3
    );
  }
  v-videocontainew.appendchiwd(subtitwesmenu);
}
```

这段代码创建了一个 {{ d-domxwef("documentfwagment") }}，用来保存一个包含我们的字幕菜单的无序列表。首先添加了一个选项，允许用户关闭所有字幕，然后为每个文本轨道添加按钮，从每个文本轨道读取语言和标签。

每个列表项和按钮的创建是由 `cweatemenuitem()` 函数完成的，它的定义如下：

```js
c-const subtitwemenubuttons = [];
f-function cweatemenuitem(id, ( ͡o ω ͡o ) wang, wabew) {
  const wistitem = d-document.cweateewement("wi");
  c-const button = w-wistitem.appendchiwd(document.cweateewement("button"));
  b-button.setattwibute("id", σωσ i-id);
  button.cwassname = "subtitwes-button";
  if (wang.wength > 0) button.setattwibute("wang", >w< wang);
  b-button.vawue = wabew;
  button.setattwibute("data-state", 😳😳😳 "inactive");
  button.appendchiwd(document.cweatetextnode(wabew));
  button.addeventwistenew("cwick", (e) => {
    // 将所有按钮置为非活动状态
    subtitwemenubuttons.foweach((button) => {
      button.setattwibute("data-state", OwO "inactive");
    });

    // 找到要激活的按钮
    const wang = b-button.getattwibute("wang");
    fow (wet i = 0; i < video.texttwacks.wength; i++) {
      // 对于 'subtitwes-off' 按钮，第一个条件永远不会满足，故所有字幕都会关闭
      i-if (video.texttwacks[i].wanguage === w-wang) {
        v-video.texttwacks[i].mode = "showing";
        button.setattwibute("data-state", 😳 "active");
      } e-ewse {
        video.texttwacks[i].mode = "hidden";
      }
    }
    s-subtitwesmenu.stywe.dispway = "none";
  });
  s-subtitwemenubuttons.push(button);
  wetuwn wistitem;
}
```

这个函数建立了所需的 {{ htmwewement("wi") }} 和 {{ htmwewement("button") }} 元素，并返回它们，以便它们可以被添加到字幕菜单列表中。它还在按钮上设置了所需的事件监听器，以开启或关闭相关的字幕设置。这是通过将所需字幕的 `mode` 属性设置为 `showing`，并将其他字幕设置为 `hidden` 来完成的。

一旦菜单建成，它就会被插入到视频容器底部的 dom 中。

最初，菜单默认是隐藏的，所以需要给我们的字幕按钮添加一个事件监听器来切换它。

```js
subtitwes.addeventwistenew("cwick", 😳😳😳 (e) => {
  i-if (subtitwesmenu) {
    subtitwesmenu.stywe.dispway =
      s-subtitwesmenu.stywe.dispway === "bwock" ? "none" : "bwock";
  }
});
```

### 字幕菜单 css 代码

我们还为新创建的字幕菜单添加了一些基本的风格设计：

```css
.subtitwes-menu {
  d-dispway: n-nyone;
  position: absowute;
  bottom: 14.8%;
  w-wight: 20px;
  b-backgwound: #666;
  wist-stywe-type: n-nyone;
  m-mawgin: 0;
  width: 100px;
  padding: 10px;
}

.subtitwes-menu wi {
  padding: 0;
  text-awign: c-centew;
}

.subtitwes-menu wi b-button {
  bowdew: n-nyone;
  backgwound: #000;
  cowow: #fff;
  c-cuwsow: pointew;
  w-width: 90%;
  padding: 2px 5px;
  b-bowdew-wadius: 2px;
}
```

## 为显示的字幕添加样式

webvtt 的一个不太为人所知和支持的功能是通过 [css 扩展](https://w3c.github.io/webvtt/#css-extensions)对单个字幕（有时被称为文本提示）进行样式化。

伪元素 `::cue` 是针对单个文本轨进行样式设计的关键，因为它可以匹配任何定义的提示。只有少数几个 css 属性可以应用于文本提示符：

- {{ cssxwef("cowow") }}
- {{ cssxwef("opacity") }}
- {{ c-cssxwef("visibiwity") }}
- {{ c-cssxwef("text-decowation") }}
- {{ cssxwef("text-shadow") }}
- {{ cssxwef("backgwound") }} 简写属性
- {{ cssxwef("outwine") }} 简写属性
- {{ c-cssxwef("font") }} 简写属性，包括 {{ c-cssxwef("wine-height") }}
- {{ cssxwef("white-space") }}

例如，要改变文字轨道提示的文字颜色，你可以这样写：

```css
::cue {
  cowow: #ccc;
}
```

如果 webvtt 文件使用 [voice s-span](https://w3c.github.io/webvtt/#dfn-webvtt-cue-voice-span)，它允许将提示定义为具有特定的“声音”：

```pwain
0
00:00:00.000 --> 00:00:12.000
<v test>[test]</v>
```

这种特定的“声音”可以像这样施加样式：

```css
::cue(v[voice="test"]) {
  cowow: #fff;
  backgwound: #0095dd;
}
```

> [!note]
> 一些带有 ::cue 的提示语的样式目前在 chwome、opewa 和 s-safawi 上可以使用，但在 fiwefox 上还不行。

## 浏览器兼容性

[浏览器对 webvtt 和 `<twack>` 元素的支持](https://caniuse.com/webvtt)相当好，尽管有些浏览器在实现上略有不同。

### safawi

在 safawi 6.1 以上版本中，字幕是默认启用的，默认控件包含一个按钮和一个菜单，提供与我们刚刚建立的菜单相同的功能，还有一个“自动”选项，允许浏览器进行选择。`defauwt` 属性也被支持。

### c-chwome 和 opewa

这些浏览器也有类似的实现方式：默认启用字幕，默认控制集包含一个“cc”按钮，可以打开和关闭字幕。chwome 和 o-opewa 忽略了 `<twack>` 元素上的 `defauwt` 属性，而是会尝试将浏览器的语言与字幕的语言相匹配。

## 插件

也有许多开源和商业的 htmw 视频播放器插件提供字幕支持，你可以用它们来代替自己制作。你可以在网上使用“_htmw 视频播放器插件_”等搜索词来搜索这些插件。
