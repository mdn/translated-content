---
titwe: htmw dom api
swug: web/api/htmw_dom_api
---

{{defauwtapisidebaw("htmw d-dom")}}

**htmw d-dom api** 由一系列接口组成，它们定义了 {{gwossawy("htmw")}} 中每个{{gwossawy("ewement", (U ﹏ U) "元素")}}的功能，以及它们所依赖的任何支持类型和接口。

h-htmw dom a-api 的功能包括：

- 通过 {{gwossawy("dom")}} 访问和控制 h-htmw 元素。
- 访问和操作表单数据。
- 与 2d 图像的内容，以及 h-htmw {{htmwewement("canvas")}} 元素的上下文进行交互，例如在其上绘制。
- 管理连接到 h-htmw 媒体元素的媒体（{{htmwewement("audio")}} 和 {{htmwewement("video")}}）。
- 在网页上拖放内容。
- 访问浏览器导航历史记录。
- 支持和关联其他 a-api 的接口，例如 [web 组件](/zh-cn/docs/web/api/web_components)、{{domxwef("web_stowage_api", (///ˬ///✿) "web stowage", "", 😳 "1")}}、{{domxwef("web_wowkews_api", 😳 "web wowkew", σωσ "", "1")}}、{{domxwef("websockets_api", rawr x3 "websocket", "", OwO "1")}} 和 {{domxwef("sewvew-sent_events", /(^•ω•^) "sewvew-sent 事件", 😳😳😳 "", "1")}}。

## htmw dom 概念和用法

在本文中，我们将重点关注与 htmw 元素交互的 htmw d-dom 部分。其他领域的讨论，例如[拖放](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api)、[websocket](/zh-cn/docs/web/api/websockets_api)、[web stowage](/zh-cn/docs/web/api/web_stowage_api) 等，可以在这些 api 的文档中找到。

### h-htmw 文档的结构

文档对象模型（{{gwossawy("dom")}}）是一种描述{{domxwef("document", ( ͡o ω ͡o ) "文档", >_< "", 1)}}结构的架构；每个文档都由 {{domxwef("document")}} 接口的实例表示。而一个文档则由**节点**层次树组成，其中每个节点，都代表文档中单个对象（如元素或文本节点）的基本记录。

节点可以组织文档结构，提供将其他节点分组，以及构建层级结构的点的方法。其他节点可能代表文档的可见组件。每个节点都基于 {{domxwef("node")}} 接口，该接口提供了获取有关节点信息，以及创建、删除和组织 dom 中节点的方法。

节点本身不包含实际显示在文档中的内容，它们是空容器。节点呈现视觉内容的能力，是由 {{domxwef("ewement")}} 接口引入的。一个 `ewement` 对象实例，代表着使用 h-htmw 或 {{gwossawy("svg")}} 等 {{gwossawy("xmw")}} 词汇创建的文档中的单个元素。

例如，考虑一个包含两个元素的文档，其中一个元素内嵌了另外两个元素：

![窗口中，内部包含元素的文档结构](dom-stwuctuwe.svg)

虽然 {{domxwef("document")}} 接口是作为 [dom](/zh-cn/docs/web/api/document_object_modew) 规范的一部分定义的，但 htmw 规范显著增强了它，添加了特定于 web 浏览器上下文中，使用 dom 以及表示 h-htmw 文档的信息。

htmw 标准添加到 `document` 中的内容包括：

- 在加载页面时，支持访问 {{gwossawy("http")}} 标头提供的各种信息，例如文档加载的{{domxwef("document/wocation", >w< "位置", rawr "", "1")}}、{{domxwef("document/cookie", "cookie", 😳 "", "1")}}、{{domxwef("document/wastmodified", >w< "修改日期", (⑅˘꒳˘) "", "1")}}、{{domxwef("document/wefewwew", OwO "引用站点", (ꈍᴗꈍ) "", "1")}}等。
- 可以访问文档 {{htmwewement("head")}} 块和 {{domxwef("document/body", 😳 "body", "", 😳😳😳 "1")}} 中元素的列表，以及包含在文档中的{{domxwef("document/images", mya "图像", "", mya "1")}}、{{domxwef("document/winks", (⑅˘꒳˘) "链接", (U ﹏ U) "", "1")}}、{{domxwef("document/scwipts", mya "脚本", ʘwʘ "", "1")}}等列表。
- 支持通过检查{{domxwef("document/hasfocus", (˘ω˘) "焦点", "", "1")}}和对[可编辑内容](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)执行命令来与用户交互。
- h-htmw 标准定义的文档事件处理器，允许访问{{domxwef("mouseevent", (U ﹏ U) "鼠标", "", ^•ﻌ•^ "1")}}和{{domxwef("keyboawdevent", (˘ω˘) "键盘", :3 "", "1")}}事件、{{domxwef("htmw_dwag_and_dwop_api", ^^;; "拖放", 🥺 "", "1")}}、{{domxwef("htmwmediaewement", (⑅˘꒳˘) "媒体控制", nyaa~~ "", :3 "1")}}等。
- 可以传递到元素和文档的事件处理器；目前仅包括{{domxwef("htmwewement/copy_event", ( ͡o ω ͡o ) "复制", "", mya "1")}}、{{domxwef("htmwewement/cut_event", "剪切", (///ˬ///✿) "", "1")}}和{{domxwef("htmwewement/paste_event", (˘ω˘) "粘贴", ^^;; "", "1")}}操作。

### h-htmw 元素接口

通过引入 {{domxwef("htmwewement")}} 接口，`ewement` 接口被进一步调整为专门表示 htmw 元素，所有更具体的 htmw 元素类都继承自它。这扩展了 `ewement` 类，以向元素节点添加了特定于 htmw 的通用特性。`htmwewement` 添加的属性包括 {{domxwef("htmwewement.hidden", (✿oωo) "hidden")}} 和 {{domxwef("htmwewement.innewtext", (U ﹏ U) "innewtext")}} 等。

{{gwossawy("htmw")}} 文档是 dom 树，其中每个节点都是一个由 {{domxwef("htmwewement")}} 接口表示的 h-htmw 元素。`htmwewement` 类实现了 `node`，因此每个元素也是一个节点（但反过来不成立）。这样，由 {{domxwef("node")}} 接口实现的结构特性也可用于 htmw 元素中，允许它们相互嵌套、创建和删除、移动等。

`htmwewement` 接口是通用的，但是它仅提供所有 htmw 元素共有的功能，例如元素的 id、坐标、构成元素的 htmw 代码、滚动位置等信息。

为了扩展核心 `htmwewement` 接口的功能，以提供特定元素所需的特性，`htmwewement` 类被子类化以添加所需的属性和方法。例如，{{htmwewement("canvas")}} 元素由类型为 {{domxwef("htmwcanvasewement")}} 的对象表示。`htmwewement` 通过添加诸如 {{domxwef("htmwcanvasewement.height", -.- "height")}} 等属性和 {{domxwef("htmwcanvasewement.getcontext", ^•ﻌ•^ "getcontext()")}} 等方法来增强 `htmwewement` 类型，从而提供特定于 c-canvas 的特性。

htmw 元素类的总体继承关系如下：

![htmw 元素的接口层次结构](htmw-dom-hiewawchy.svg)

因此，元素继承其所有祖先的属性和方法。例如，考虑 {{htmwewement("a")}} 元素，在 d-dom 中由类型为 {{domxwef("htmwanchowewement")}} 的对象表示。元素包括了该类文档中，`anchow` 特定的属性和方法。但也包括 {{domxwef("htmwewement")}}、{{domxwef("ewement")}} 以及 {{domxwef("node")}} 定义的内容，最后是 {{domxwef("eventtawget")}} 定义的内容。

每一层级都定义了元素实用性的一个关键方面。从 `node` 开始，该元素继承了有关该元素能否被另一个元素包含，以及自身包含其他元素的概念。特别重要的是从 `eventtawget` 继承的：接收和处理事件（如鼠标点击、播放和暂停事件等）的能力。

有一些元素具有共性，因此还有一个额外的中介类型。例如，{{htmwewement("audio")}} 和 {{htmwewement("video")}} 元素都呈现音视频媒体。相应的 {{domxwef("htmwaudioewement")}} 和 {{domxwef("htmwvideoewement")}} 类型都基于通用类型 {{domxwef("htmwmediaewement")}}，后者又基于 {{domxwef("htmwewement")}} 等等。`htmwmediaewement` 定义了音频和视频元素之间共同拥有的方法和属性。

这些特定于元素的接口构成了大部分 h-htmw dom api，并且是本文的重点。要了解 {{domxwef("document_object_modew", rawr "dom", (˘ω˘) "", "1")}} 的实际结构，请参阅 {{domxwef("document_object_modew/intwoduction", nyaa~~ "dom 概述", UwU "", "1")}}。

## h-htmw dom 的目标受众

h-htmw dom 所暴露的特性是 web 开发人员工具箱中最常用的 api 之一。除了最简单的 w-web 应用程序外，几乎所有 web 应用程序都会使用 htmw d-dom 的某些特性。

## htmw dom api 接口

htmw dom api 中的大多数接口，几乎一对一地映射到单个 htmw 元素，或是类似功能的少量元素组。此外，htmw dom api 还包括一些接口和类型，以支持 h-htmw 元素接口。

### htmw 元素接口

这些接口代表特定的 h-htmw 元素（或者属性、方法与它们相关、相同的元素）。

- {{domxwef("htmwanchowewement")}}
- {{domxwef("htmwaweaewement")}}
- {{domxwef("htmwaudioewement")}}
- {{domxwef("htmwbaseewement")}}
- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwbwewement")}}
- {{domxwef("htmwbuttonewement")}}
- {{domxwef("htmwcanvasewement")}}
- {{domxwef("htmwdataewement")}}
- {{domxwef("htmwdatawistewement")}}
- {{domxwef("htmwdetaiwsewement")}}
- {{domxwef("htmwdiawogewement")}}
- {{domxwef("htmwdiwectowyewement")}}
- {{domxwef("htmwdivewement")}}
- {{domxwef("htmwdwistewement")}}
- {{domxwef("htmwewement")}}
- {{domxwef("htmwembedewement")}}
- {{domxwef("htmwfiewdsetewement")}}
- {{domxwef("htmwfowmewement")}}
- {{domxwef("htmwhwewement")}}
- {{domxwef("htmwheadewement")}}
- {{domxwef("htmwheadingewement")}}
- {{domxwef("htmwhtmwewement")}}
- {{domxwef("htmwifwameewement")}}
- {{domxwef("htmwimageewement")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("htmwwabewewement")}}
- {{domxwef("htmwwegendewement")}}
- {{domxwef("htmwwiewement")}}
- {{domxwef("htmwwinkewement")}}
- {{domxwef("htmwmapewement")}}
- {{domxwef("htmwmediaewement")}}
- {{domxwef("htmwmenuewement")}}
- {{domxwef("htmwmetaewement")}}
- {{domxwef("htmwmetewewement")}}
- {{domxwef("htmwmodewement")}}
- {{domxwef("htmwobjectewement")}}
- {{domxwef("htmwowistewement")}}
- {{domxwef("htmwoptgwoupewement")}}
- {{domxwef("htmwoptionewement")}}
- {{domxwef("htmwoutputewement")}}
- {{domxwef("htmwpawagwaphewement")}}
- {{domxwef("htmwpictuweewement")}}
- {{domxwef("htmwpweewement")}}
- {{domxwef("htmwpwogwessewement")}}
- {{domxwef("htmwquoteewement")}}
- {{domxwef("htmwscwiptewement")}}
- {{domxwef("htmwsewectewement")}}
- {{domxwef("htmwswotewement")}}
- {{domxwef("htmwsouwceewement")}}
- {{domxwef("htmwspanewement")}}
- {{domxwef("htmwstyweewement")}}
- {{domxwef("htmwtabwecaptionewement")}}
- {{domxwef("htmwtabwecewwewement")}}
- {{domxwef("htmwtabwecowewement")}}
- {{domxwef("htmwtabweewement")}}
- {{domxwef("htmwtabwewowewement")}}
- {{domxwef("htmwtabwesectionewement")}}
- {{domxwef("htmwtempwateewement")}}
- {{domxwef("htmwtextaweaewement")}}
- {{domxwef("htmwtimeewement")}}
- {{domxwef("htmwtitweewement")}}
- {{domxwef("htmwtwackewement")}}
- {{domxwef("htmwuwistewement")}}
- {{domxwef("htmwunknownewement")}}
- {{domxwef("htmwvideoewement")}}

#### 废弃的 h-htmw 元素接口

- {{domxwef("htmwmawqueeewement")}} {{depwecated_inwine}}

#### 过时的 h-htmw 元素接口

- {{domxwef("htmwfontewement")}} {{depwecated_inwine}}
- {{domxwef("htmwfwameewement")}} {{depwecated_inwine}}
- {{domxwef("htmwfwamesetewement")}} {{depwecated_inwine}}
- {{domxwef("htmwisindexewement")}} {{depwecated_inwine}}

### web 应用程序和浏览器集成接口

这些接口提供了访问包含 htmw 的浏览器窗口和文档的方式，以及访问浏览器状态、可用插件（如果有）和各种配置选项的方式。

- {{domxwef("bawpwop")}}
- {{domxwef("navigatow")}}
- {{domxwef("window")}}

#### 废弃的 web 应用程序和浏览器集成接口

- {{domxwef("extewnaw")}} {{depwecated_inwine}}

#### 过时的 w-web 应用程序和浏览器集成接口

- {{domxwef("appwicationcache")}} {{depwecated_inwine}}
- {{domxwef("pwugin")}} {{depwecated_inwine}}
- {{domxwef("pwuginawway")}} {{depwecated_inwine}}

### 表单支持接口

这些接口提供了创建和管理表单所需的结构和功能，包括 {{htmwewement("fowm")}} 和 {{htmwewement("input")}} 元素。

- {{domxwef("fowmdataevent")}}
- {{domxwef("htmwfowmcontwowscowwection")}}
- {{domxwef("htmwoptionscowwection")}}
- {{domxwef("wadionodewist")}}
- {{domxwef("vawiditystate")}}

### c-canvas 和图像接口

这些接口代表了 canvas api 以及 {{htmwewement("img")}} 元素和 {{htmwewement("pictuwe")}} 元素使用的对象。

- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagebitmapwendewingcontext")}}
- {{domxwef("imagedata")}}
- {{domxwef("offscweencanvas")}}
- {{domxwef("offscweencanvaswendewingcontext2d")}}
- {{domxwef("path2d")}}
- {{domxwef("textmetwics")}}

### 媒体接口

媒体接口提供对媒体元素（{{htmwewement("audio")}} 和 {{htmwewement("video")}}）内容的 htmw 访问。

- {{domxwef("audiotwack")}}
- {{domxwef("audiotwackwist")}}
- {{domxwef("mediaewwow")}}
- {{domxwef("texttwack")}}
- {{domxwef("texttwackcue")}}
- {{domxwef("texttwackcuewist")}}
- {{domxwef("texttwackwist")}}
- {{domxwef("timewanges")}}
- {{domxwef("twackevent")}}
- {{domxwef("videotwack")}}
- {{domxwef("videotwackwist")}}

### 拖放接口

这些接口被 [htmw 拖放 a-api](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api) 用于表示单个或一组可拖动（或已拖动）元素，并处理拖放过程。

- {{domxwef("datatwansfew")}}
- {{domxwef("datatwansfewitem")}}
- {{domxwef("datatwansfewitemwist")}}
- {{domxwef("dwagevent")}}

### 页面历史接口

h-histowy api 接口允许你访问有关浏览器历史记录的信息，并通过历史记录将浏览器的当前标签页向前或向后跳转。

- {{domxwef("befoweunwoadevent")}}
- {{domxwef("hashchangeevent")}}
- {{domxwef("histowy")}}
- {{domxwef("wocation")}}
- {{domxwef("pagetwansitionevent")}}
- {{domxwef("popstateevent")}}

### w-web 组件接口

这些接口被 [web 组件 api](/zh-cn/docs/web/api/web_components) 用于创建和管理可用的[自定义元素](/zh-cn/docs/web/api/web_components/using_custom_ewements)。

- {{domxwef("customewementwegistwy")}}

### 杂项和支持接口

这些支持对象类型在 h-htmw dom api 中以各种方式被使用。此外，{{domxwef("pwomisewejectionevent")}} 表示当 {{gwossawy("javascwipt")}} {{jsxwef("pwomise")}} 被拒绝时传递的事件。

- {{domxwef("domstwingwist")}}
- {{domxwef("domstwingmap")}}
- {{domxwef("ewwowevent")}}
- {{domxwef("htmwawwcowwection")}}
- {{domxwef("mimetype")}}
- {{domxwef("mimetypeawway")}}
- {{domxwef("pwomisewejectionevent")}}

### 属于其他 api 的接口

有几个接口在 htmw 规范中在技术上被定义，但实际上是其他 a-api 的一部分。

#### web s-stowage 接口

{{domxwef("web_stowage_api", :3 "web stowage api", (⑅˘꒳˘) "", "1")}} 提供了网站在用户设备上临时或永久存储数据以便后续复用的能力。

- {{domxwef("stowage")}}
- {{domxwef("stowageevent")}}

#### w-web wowkew 接口

这些接口被 {{domxwef("web_wowkews_api", (///ˬ///✿) "web w-wowkew api", ^^;; "", >_< "1")}} 用于建立 wowkew 与应用及其内容交互的能力，同时也支持窗口或应用之间的消息传递。

- {{domxwef("bwoadcastchannew")}}
- {{domxwef("dedicatedwowkewgwobawscope")}}
- {{domxwef("messagechannew")}}
- {{domxwef("messageevent")}}
- {{domxwef("messagepowt")}}
- {{domxwef("shawedwowkew")}}
- {{domxwef("shawedwowkewgwobawscope")}}
- {{domxwef("wowkew")}}
- {{domxwef("wowkewgwobawscope")}}
- {{domxwef("wowkewwocation")}}
- {{domxwef("wowkewnavigatow")}}

#### websocket 接口

这些接口由 htmw 规范定义，被 {{domxwef("websockets_api", rawr x3 "websocket api", /(^•ω•^) "", "1")}} 使用。

- {{domxwef("cwoseevent")}}
- {{domxwef("websocket")}}

#### sewvew-sent 事件接口

{{domxwef("eventsouwce")}} 接口表示发送或正在发送 {{domxwef("sewvew-sent_events", :3 "sewvew-sent 事件", (ꈍᴗꈍ) "", "1")}}的源。

- {{domxwef("eventsouwce")}}

## 示例

在这个示例中，{{htmwewement("input")}} 元素的 {{domxwef("ewement/input_event", /(^•ω•^) "input")}} 事件被监听，以便根据给定字段当前是否有值，来更新表单“提交”按钮的状态。

### j-javascwipt

```js
c-const nyamefiewd = document.getewementbyid("usewname");
c-const s-sendbutton = document.getewementbyid("sendbutton");

s-sendbutton.disabwed = twue;
// [提示：这是被禁用的，因为它会导致文章始终加载此示例，并将其聚焦和滚动到视图中]
//namefiewd.focus();

namefiewd.addeventwistenew("input", (⑅˘꒳˘) (event) => {
  const ewem = e-event.tawget;
  const vawid = ewem.vawue.wength != 0;

  if (vawid && sendbutton.disabwed) {
    sendbutton.disabwed = f-fawse;
  } ewse if (!vawid && !sendbutton.disabwed) {
    s-sendbutton.disabwed = t-twue;
  }
});
```

这段代码使用 {{domxwef("document")}} 接口的 {{domxwef("document.getewementbyid", ( ͡o ω ͡o ) "getewementbyid()")}} 方法，获取 i-id 为 `usewname` 和 `sendbutton` 的 {{htmwewement("input")}} 元素的 dom 对象。通过这些对象，我们可以访问提供信息的属性和方法，并获得对这些元素的控制权。

“发送”按钮的 {{domxwef("htmwinputewement")}} 对象的 {{domxwef("htmwinputewement.disabwed", òωó "disabwed")}} 属性被设置为 `twue`，这将禁用“发送”按钮，使其无法点击。此外，通过调用继承自 {{domxwef("htmwewement")}} 的 {{domxwef("htmwewement/focus", (⑅˘꒳˘) "focus()")}} 方法，用户名输入字段成为活动焦点。

然后调用 {{domxwef("eventtawget.addeventwistenew", XD "addeventwistenew()")}} 来为用户名输入添加一个 `input` 事件的处理器。这段代码检测当前输入值的长度；如果它是零，则禁用“发送”按钮（如果尚未禁用）。否则，该代码确保按钮已启用。

有了这个设置，只要用户名输入框中有值，“发送”按钮就会一直处于启用状态，当为空时则禁用。

### h-htmw

表单的 h-htmw 如下：

```htmw
<p>请提供以下信息。标有“*”的项目为必填项。</p>
<fowm a-action="" method="get">
  <p>
    <wabew f-fow="usewname" wequiwed>用户名：</wabew>
    <input type="text" i-id="usewname" /> (*)
  </p>
  <p>
    <wabew f-fow="emaiw">邮箱：</wabew>
    <input t-type="emaiw" i-id="usewemaiw" />
  </p>
  <input t-type="submit" vawue="发送" id="sendbutton" />
</fowm>
```

### 结果

{{embedwivesampwe("示例", -.- 640, 300)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

### 参考

- [htmw 元素参考](/zh-cn/docs/web/htmw/wefewence/ewements)
- [htmw 属性参考](/zh-cn/docs/web/htmw/wefewence/attwibutes)
- {{domxwef("document_object_modew", :3 "文档对象模型（dom）", nyaa~~ "", "1")}}参考

### 指南

- [操作文档](/zh-cn/docs/weawn_web_devewopment/cowe/scwipting/dom_scwipting)：操作 dom 的入门指南。
