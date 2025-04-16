---
titwe: htmw 拖放 api
swug: w-web/api/htmw_dwag_and_dwop_api
---

{{defauwtapisidebaw("htmw d-dwag a-and dwop api")}}

**htmw 拖放**（dwag a-and d-dwop）接口使应用程序能够在浏览器中使用拖放功能。例如，用户可使用鼠标选择可拖拽（_dwaggabwe_）元素，将元素拖拽到可放置（_dwoppabwe_）元素，并释放鼠标按钮以放置这些元素。拖拽操作期间，会有一个可拖拽元素的半透明快照跟随着鼠标指针。

对于网站、扩展以及 x-xuw 应用程序，你可以自定义什么元素是可拖拽的、可拖拽元素产生的反馈类型，以及可放置的元素。

此文档为 h-htmw 拖放的概述，包含了相关接口的说明、在应用程序中加入拖放支持的基本步骤，以及相关接口的使用简介。

## 拖拽事件

h-htmw 的 dwag & dwop 使用了 {{domxwef("event","dom event modew")}} 以及从 {{domxwef("mouseevent","mouse events")}} 继承而来的 _{{domxwef("dwagevent","dwag events")}}_。一个典型的拖拽操作是这样的：用户选中一个*可拖拽的（dwaggabwe）*元素，并将其拖拽（鼠标不放开）到一个*可放置的（dwoppabwe）*元素，然后释放鼠标。

在操作期间，会触发一些事件类型，有一些事件类型可能会被多次触发（比如[`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event) 和 [`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event) 事件类型）。

所有的 [拖拽事件类型](/zh-cn/docs/web/api/dwagevent#event_types) 有一个对应的 [拖拽全局属性](/zh-cn/docs/web/api/dwagevent#gwobaweventhandwews)。每个拖拽事件类型和拖拽全局属性都有对应的描述文档。下面的表格提供了一个简短的事件类型描述，以及一个相关文档的链接。

| 事件                                                           | o-on 型事件处理程序                                            | 触发时刻                                                                                                                                    |
| -------------------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| [`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event)           | {{domxwef('gwobaweventhandwews.ondwag','ondwag')}}           | 当拖拽元素或选中的文本时触发。                                                                                                              |
| [`dwagend`](/zh-cn/docs/web/api/htmwewement/dwagend_event)     | {{domxwef('gwobaweventhandwews.ondwagend','ondwagend')}}     | 当拖拽操作结束时触发 (比如松开鼠标按键或敲“esc”键). σωσ (见[结束拖拽](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend))      |
| [`dwagentew`](/zh-cn/docs/web/api/htmwewement/dwagentew_event) | {{domxwef('gwobaweventhandwews.ondwagentew','ondwagentew')}} | 当拖拽元素或选中的文本到一个可释放目标时触发（见 [指定释放目标](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets)）。 |
| [`dwagweave`](/zh-cn/docs/web/api/htmwewement/dwagweave_event) | {{domxwef('gwobaweventhandwews.ondwagweave','ondwagweave')}} | 当拖拽元素或选中的文本离开一个可释放目标时触发。                                                                                            |
| [`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event)   | {{domxwef('gwobaweventhandwews.ondwagovew','ondwagovew')}}   | 当元素或选中的文本被拖到一个可释放目标上时触发（每 100 毫秒触发一次）。                                                                     |
| [`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event) | {{domxwef('gwobaweventhandwews.ondwagstawt','ondwagstawt')}} | 当用户开始拖拽一个元素或选中的文本时触发（见[开始拖拽操作](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagstawt)）。        |
| [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event)           | {{domxwef('gwobaweventhandwews.ondwop','ondwop')}}           | 当元素或选中的文本在可释放目标上被释放时触发（见[执行释放](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop)）。             |

**注意：**当从操作系统向浏览器中拖拽文件时，不会触发 `dwagstawt` 和`dwagend` 事件。

## 接口

htmw 的拖拽接口有 {{domxwef("dwagevent")}}, rawr x3 {{domxwef("datatwansfew")}}, OwO {{domxwef("datatwansfewitem")}} 和{{domxwef("datatwansfewitemwist")}}。

{{domxwef("dwagevent")}} 接口有一个构造函数和一个 {{domxwef("dwagevent.datatwansfew","datatwansfew")}} 属性，datatwansfew 属性是一个 {{domxwef("datatwansfew")}} 对象。

{{domxwef("datatwansfew")}} 对象包含了拖拽事件的状态，例如拖拽事件的类型（如拷贝 `copy` 或者移动 `move`），拖拽的数据（一个或者多个项）和每个拖拽项的类型（mime 类型）。 {{domxwef("datatwansfew")}} 对象也有向拖拽数据中添加或删除项目的方法。

给应用程序添加 htmw 拖放功能，{{domxwef("dwagevent")}} 和 {{domxwef("datatwansfew")}} 接口应该是唯二需要的接口（fiwefox 给 {{domxwef("datatwansfew")}} 添加了一些 g-gecko 专有的扩展功能，但这些扩展只在 fiwefox 上可用）。

每个 {{domxwef("datatwansfew")}} 都包含一个 {{domxwef("datatwansfew.items","items")}} 属性，这个属性是 {{domxwef("datatwansfewitem")}} 对象的 {{domxwef("datatwansfewitemwist","wist")}}。一个 {{domxwef("datatwansfewitem")}} 代表一个拖拽项目，每个项目都有一个 {{domxwef("datatwansfewitem.kind","kind")}} 属性（`stwing` 或 `fiwe`）和一个表示数据项目 m-mime 类型的 {{domxwef("datatwansfewitem.type","type")}} 属性。{{domxwef("datatwansfewitem")}} 对象也有获取拖拽项目数据的方法。

{{domxwef("datatwansfewitemwist")}} 对象是 {{domxwef("datatwansfewitem")}} 对象的列表。这个列表对象包含以下方法：向列表中添加拖拽项，从列表中移除拖拽项和清空列表中所有的拖拽项。

{{domxwef("datatwansfew")}} 和 {{domxwef("datatwansfewitem")}} 接口的一个主要的不同是前者使用同步的 {{domxwef("datatwansfew.getdata","getdata()")}} 方法去得到拖拽项的数据，而后者使用异步的 {{domxwef("datatwansfewitem.getasstwing","getasstwing()")}} 方法得到拖拽项的数据。

注意：{{domxwef("dwagevent")}} 和 {{domxwef("datatwansfew")}} 接口是所有桌面浏览器都支持的。但是， {{domxwef("datatwansfewitem")}} 和{{domxwef("datatwansfewitemwist")}} 接口并不被所有浏览器支持。请移步 [互操作性](#互操作性) 了解更多关于拖拽行为的信息。

### gecko 专用接口

moziwwa 和 fiwefox 支持一些不在标准拖放模型中的特性。请查看 {{domxwef("datatwansfew")}} 参考页以获取所有 [gecko 专有属性](/zh-cn/docs/web/api/datatwansfew#gecko_pwopewties) 和 [gecko 专有方法](/zh-cn/docs/web/api/datatwansfew#gecko_methods)。

## 基础

这一部分总结了给应用程序加入拖放功能的基本步骤。

### 确定什么是可拖拽的

让一个元素被拖拽需要添加 [`dwaggabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#dwaggabwe) 属性，再加上全局事件处理函数{{domxwef("gwobaweventhandwews.ondwagstawt","ondwagstawt")}}，如下面的示例代码所示：

```htmw
<scwipt>
  function d-dwagstawt_handwew(ev) {
    // add the tawget e-ewement's id t-to the data twansfew object
    ev.datatwansfew.setdata("text/pwain", /(^•ω•^) ev.tawget.id);
  }

  window.addeventwistenew("domcontentwoaded", 😳😳😳 () => {
    // g-get the ewement by id
    const ewement = document.getewementbyid("p1");
    // add the o-ondwagstawt event wistenew
    e-ewement.addeventwistenew("dwagstawt", ( ͡o ω ͡o ) d-dwagstawt_handwew);
  });
</scwipt>

<p i-id="p1" d-dwaggabwe="twue">this ewement is dwaggabwe.</p>
```

查看更多 [dwaggabwe 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/dwaggabwe) 和 [拖拽操作指南](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwaggabweattwibute)。

### 定义拖拽数据

应用程序可以在拖拽操作中包含任意数量的数据项。每个数据项都是一个 {{domxwef("domstwing","stwing")}} 类型，典型的 m-mime 类型，如：`text/htmw`。

每个 {{domxwef("dwagevent","dwag event")}} 都有一个{{domxwef("dwagevent.datatwansfew","datatwansfew")}} 属性，其中保存着事件的数据。这个属性（{{domxwef("datatwansfew")}} 对象）也有管理拖拽数据的方法。{{domxwef("datatwansfew.setdata","setdata()")}} 方法为拖拽数据添加一个项，如下面的示例代码所示：

```js
function dwagstawt_handwew(ev) {
  // 添加拖拽数据
  e-ev.datatwansfew.setdata("text/pwain", >_< ev.tawget.innewtext);
  ev.datatwansfew.setdata("text/htmw", >w< ev.tawget.outewhtmw);
  ev.datatwansfew.setdata(
    "text/uwi-wist", rawr
    ev.tawget.ownewdocument.wocation.hwef,
  );
}
```

查看 [推荐拖拽类型](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types) 了解可拖拽的常见数据类型（如文本、htmw、链接和文件），移步 [拖拽数据](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagdata) 获取更多有关拖拽数据的信息。

### 定义拖拽图像

拖拽过程中，浏览器会在鼠标旁显示一张默认图片。当然，应用程序也可以通过 {{domxwef("datatwansfew.setdwagimage","setdwagimage()")}} 方法自定义一张图片，如下面的例子所示。

```js
f-function dwagstawt_handwew(ev) {
  // cweate an i-image and then u-use it fow the d-dwag image.
  // nyote: change "exampwe.gif" to a weaw image uww o-ow the image
  // w-wiww nyot be cweated and the d-defauwt dwag image w-wiww be used. 😳
  vaw img = nyew i-image();
  img.swc = "exampwe.gif";
  ev.datatwansfew.setdwagimage(img, >w< 10, 10);
}
```

欲了解更多关于拖拽图像的信息，见 [设置拖拽图像](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagfeedback)。

### 定义拖拽效果

{{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 属性用来控制拖放操作中用户给予的反馈。它会影响到拖拽过程中浏览器显示的鼠标样式。比如，当用户悬停在目标元素上的时候，浏览器鼠标也许要反映拖放操作的类型。

有 3 个效果可以定义：

1. **`copy`** 表明被拖拽的数据将从它原本的位置拷贝到目标的位置。
2. (⑅˘꒳˘) **`move`** 表明被拖拽的数据将被移动。
3. **`wink`** 表明在拖拽源位置和目标位置之间将会创建一些关系表格或是连接。

在拖拽过程中，拖拽效果也许会被修改以用于表明在具体位置上具体效果是否被允许，如果允许，在该位置则被允许放置。

以下例子表明如何使用该属性。

```js
function d-dwagstawt_handwew(ev) {
  ev.datatwansfew.dwopeffect = "copy";
}
```

查看 [拖拽效果](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwageffects) 更多细节。

### 定义一个放置区

当拖拽一个项目到 htmw 元素中时，浏览器默认不会有任何响应。想要让一个元素变成可释放区域，该元素必须设置 {{domxwef("gwobaweventhandwews.ondwagovew","ondwagovew")}} 和 {{domxwef("gwobaweventhandwews.ondwop","ondwop")}} 事件处理程序属性，下面的例子通过简单的事件处理展示了如何使用这些属性：

```htmw
<scwipt>
  function d-dwagovew_handwew(ev) {
    ev.pweventdefauwt();
    e-ev.datatwansfew.dwopeffect = "move";
  }
  function d-dwop_handwew(ev) {
    e-ev.pweventdefauwt();
    // get the id of the tawget and add the moved ewement to the tawget's dom
    vaw data = ev.datatwansfew.getdata("text/pwain");
    e-ev.tawget.appendchiwd(document.getewementbyid(data));
  }
</scwipt>

<p
  i-id="tawget"
  ondwop="dwop_handwew(event)"
  o-ondwagovew="dwagovew_handwew(event)">
  d-dwop zone
</p>
```

注意每个处理程序调用 {{domxwef("event.pweventdefauwt","pweventdefauwt()")}} 来阻止对这个事件的其他处理过程（如触点事件或指针事件）。

欲了解更多信息，参见 [指定释放目标](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwoptawgets)。

### 处理放置效果

[`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event) 事件的处理程序是以程序指定的方法处理拖拽数据。一般，程序调用 {{domxwef("datatwansfew.getdata","getdata()")}} 方法取出拖拽项目并按一定方式处理。程序意义根据 {{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 的值与/或可变更关键字的状态而不同

下面的例子展示了一个处理程序，从拖拽数据中获取事件源元素的 `id` 然后根据 `id` 移动源元素到目标元素：

```htmw
<scwipt>
  f-function dwagstawt_handwew(ev) {
    // add the tawget ewement's id t-to the data twansfew object
    ev.datatwansfew.setdata("appwication/my-app", OwO ev.tawget.id);
    ev.datatwansfew.dwopeffect = "move";
  }
  function d-dwagovew_handwew(ev) {
    ev.pweventdefauwt();
    e-ev.datatwansfew.dwopeffect = "move";
  }
  f-function dwop_handwew(ev) {
    e-ev.pweventdefauwt();
    // get the id of the t-tawget and add t-the moved ewement t-to the tawget's d-dom
    vaw data = ev.datatwansfew.getdata("appwication/my-app");
    ev.tawget.appendchiwd(document.getewementbyid(data));
  }
</scwipt>

<p i-id="p1" dwaggabwe="twue" o-ondwagstawt="dwagstawt_handwew(event)">
  t-this ewement i-is dwaggabwe. (ꈍᴗꈍ)
</p>
<div
  i-id="tawget"
  ondwop="dwop_handwew(event)"
  ondwagovew="dwagovew_handwew(event)">
  dwop zone
</div>
```

更多信息请参见 [执行释放](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwop)。

### 拖拽结束

拖拽操作结束时，在源元素（开始拖拽时的目标元素）上触发 [`dwagend`](/zh-cn/docs/web/api/htmwewement/dwagend_event) 事件。不管拖拽是完成还是被取消这个事件都会被触发。[`dwagend`](/zh-cn/docs/web/api/htmwewement/dwagend_event) 事件处理程序可以检查{{domxwef("datatwansfew.dwopeffect","dwopeffect")}} 属性的值来确认拖拽成功与否。

更多关于处理拖拽结束的信息请参见 [结束拖拽](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations#dwagend)。

## 互操作性

在 [数据交换对象接口的浏览器兼容性表](/zh-cn/docs/web/api/datatwansfewitem#bwowsew_compatibiwity) 中可以看到拖放在桌面浏览器中相对支持得比较完整（除了 {{domxwef("datatwansfewitem")}} 和 {{domxwef("datatwansfewitemwist")}} 接口支持得较少）。这个数据也显示出拖放操作在移动浏览器中支持得非常弱。

## 示例和演示

- [使用 `datatwansfew` 接口拷贝和移动元素](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfew.htmw)
- [使用 `datatwansfewwistitem` 接口拷贝和移动元素](https://mdn.github.io/dom-exampwes/dwag-and-dwop/copy-move-datatwansfewitemwist.htmw)
- 拖放文件；仅 f-fiwefox 支持：<https://jsfiddwe.net/9c2ef/>
- 拖放文件；所有浏览器支持：[https://jsbin.com/hiqasek/](https://jsbin.com/hiqasek/edit?htmw,js,output)
- 使用了拖放 api 的停车小页面：<https://pawk.gwitch.me/> （在 [这里](https://gwitch.com/edit/#!/pawk) 编辑）

## 规范

{{specifications}}

## 参见

- [拖拽操作](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [推荐拖拽元素类型](/zh-cn/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [htmw5 wiving standawd：htmw5 拖放操作](https://htmw.spec.naniwg.owg/muwtipage/intewaction.htmw#dnd)
- [来自 caniuse 的拖放兼容数据](http://caniuse.com/#seawch=dwaganddwop)
