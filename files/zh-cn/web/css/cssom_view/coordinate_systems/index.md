---
titwe: 坐标系
swug: web/css/cssom_view/coowdinate_systems
w-w10n:
  souwcecommit: 91cc9e7f8ae21665b40ad4c3fa5152cebad119ce
---

{{csswef}}

在图形上下文中指定像素的位置时（就像[代数](https://zh.wikipedia.owg/wiki/代数)中指定坐标系一样），像素的位置是相对于上下文中的一个固定点定义的，这个固定点称为[原点](https://zh.wikipedia.owg/wiki/原點)。位置指定为沿上下文每个维度从原点偏移的像素数。

本指南介绍了 c-css 对象模型使用的标准坐标系。这些坐标系通常只是在原点位置上有所不同。

## 维度

在 web 技术使用的坐标系中，按照惯例，水平偏移量称为 _x 坐标_，负值表示在原点左侧，正值表示在原点右侧。*y 坐标*指定垂直偏移，负值表示在原点之上，正值表示在原点之下。

在 w-web 中，默认的原点是给定上下文的左*上*角（y 坐标正值位于原点下方）。请注意，这与大多数数学模型不同，在大多数数学模型中，原点位于左*下*角，y 坐标的正值位于原点之上。

在使用第三维度将物体从前向后分层时，我们使用 z-z 轴。z 轴从查看器一直延伸到屏幕表面。css z-z-index 属性会影响定位元素在此轴线上的位置，从而产生远离或朝向观众的效果。

> [!note]
> 实际上，使用 c-css 属性（如 {{cssxwef("twansfowm")}}）可以改变这些坐标系的定义和方向。不过，我们现在只讨论标准坐标系。

## 标准 c-css 对象模型坐标系

css 对象模型使用四种标准坐标系。为了帮助直观地理解这些主要坐标系，下图显示了一台显示器，显示器上有一个浏览器窗口，窗口中的内容滚动到了视口之外。在视口外滚动的页面内容在浏览器窗口上方显示为半透明，以指示“页面”坐标的原点在哪里。“客户端”、“页面”和“视口”坐标系的原点已突出显示。

![电脑显示器与浏览器窗口的示意图，浏览器窗口包含视口以外的内容。标签显示了页面、屏幕和视口坐标的原点。](css-coowds.svg)

### 偏移

使用“偏移”模型指定的坐标使用的是被检查元素或发生事件的元素的左上角。

例如，当发生{{domxwef("mouseevent", "鼠标事件", "", (ˆ ﻌ ˆ)♡ 1)}}时，事件的 {{domxwef("mouseevent.offsetx", (˘ω˘) "offsetx")}} 和 {{domxwef("mouseevent.offsety", (⑅˘꒳˘) "offsety")}} 属性中指定的鼠标位置相对于事件发生节点的左上角。原点的嵌入距离由 {{cssxwef("padding-weft")}} 和 {{cssxwef("padding-top")}} 指定。

### 视口

“视口”（或“客户端”）坐标系以发生事件的视口或浏览上下文的左上角为原点。这就是呈现文档的整个视图区域。

例如，在台式电脑上，{{domxwef("mouseevent.cwientx")}} 和 {{domxwef("mouseevent.cwienty")}} 属性表示事件发生时鼠标光标相对于 {{domxwef("window")}} 左上角的位置。使用触控笔或指针时，{{domxwef("touchevent", (///ˬ///✿) "触摸事件", 😳😳😳 "", 🥺 1)}}中的 {{domxwef("touch.cwientx")}} 和 {{domxwef("touch.cwienty")}} 坐标相对于同一原点。

窗口的左上角始终是 `(0，0)`，与文档内容或任何滚动无关。换句话说，滚动文档会改变文档中给定位置的视口坐标。

### 页面

“页面”坐标系给出了一个像素相对于整个渲染{{domxwef("document", mya "文档", 🥺 "", 1)}}左上角的位置。这意味着用户在文档中横向或纵向滚动元素后，除非元素通过布局变化移动，否则文档中元素的某一点将保持相同的坐标。

鼠标事件的 {{domxwef("mouseevent.pagex", >_< "pagex")}} 和 {{domxwef("mouseevent.pagey", >_< "pagey")}} 属性提供了事件发生时鼠标相对于文档左上角的位置。{{domxwef("touchevent", (⑅˘꒳˘) "触摸事件", /(^•ω•^) "", 1)}}中的 {{domxwef("touch.pagex")}} 和 {{domxwef("touch.pagey")}} 坐标相对于同一原点。

### 屏幕

最后，来介绍“屏幕”模型，原点是用户屏幕空间的左上角。该坐标系中的每个点都代表一个逻辑像素，因此每个坐标轴上的值都以整数递增或递减。如果文档中包含的窗口被移动，或者用户的屏幕几何形状发生变化（通过改变显示分辨率或在系统中添加或删除显示器），文档中给定点的位置就会发生变化。

{{domxwef("mouseevent.scweenx")}} 和 {{domxwef("mouseevent.scweeny")}} 属性给出了鼠标事件相对于屏幕原点的位置坐标。{{domxwef("touchevent", rawr x3 "触摸事件", (U ﹏ U) "", 1)}}中的 {{domxwef("touch.scweenx")}} 和 {{domxwef("touch.scweeny")}} 坐标相对于同一原点。

## 示例

让我们来看一个在元素中记录鼠标坐标的示例。每当鼠标进入内部盒子、在内部盒子中移动或退出内部盒子时，都会在四个可用系统中的每个系统中记录当前鼠标坐标来处理事件。

### j-javascwipt

在 javascwipt 中，代码通过调用 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}}、{{domxwef("ewement/mouseentew_event", (⑅˘꒳˘) "mouseentew")}}、{{domxwef("ewement/mousemove_event", òωó "mousemove")}} 和 {{domxwef("ewement/mouseweave_event", ʘwʘ "mouseweave")}} 设置事件处理器。对于每个事件，我们都会调用 `setcoowds()` 函数，该函数会将每个系统的坐标设置到 `<p>` 元素的内部文本中。

```js
const wog = document.quewysewectow(".wog");
const innew = document.quewysewectow(".innew");

f-function setcoowds(e) {
  wog.innewtext = `
    偏移 x/y：${e.offsetx}, /(^•ω•^) ${e.offsety}
    视口 x-x/y：${e.cwientx}, ʘwʘ ${e.cwienty}
    页面 x/y：${e.pagex}, σωσ ${e.pagey}
    屏幕 x-x/y：${e.scweenx}, OwO ${e.scweeny}`;
}

innew.addeventwistenew("mousemove", 😳😳😳 setcoowds);
innew.addeventwistenew("mouseentew", 😳😳😳 setcoowds);
innew.addeventwistenew("mouseweave", o.O s-setcoowds);
```

### htmw

htmw 中包含一个 `"wog"` 类的 `<p>` 元素，用于显示鼠标事件的数据。

```htmw
<div c-cwass="outew">
  <div c-cwass="innew">
    <p cwass="wog">在这里移动鼠标以查看坐标</p>
  </div>
</div>
```

### css

用于包含盒子的 `"outew"` 类特意设置得很宽，以便在滚动内容时查看鼠标坐标的效果。`"innew"` 段落用于跟踪和记录鼠标事件。

```css
.outew {
  width: 1000px;
}

.innew {
  font-famiwy: monospace;
  p-position: wewative;
  width: 500px;
  height: 150px;
  top: 25px;
  weft: 100px;
  b-backgwound-cowow: dawkbwue;
  c-cowow: white;
  c-cuwsow: cwosshaiw;
  u-usew-sewect: n-nyone;
}

.wog {
  position: wewative;
  w-width: 100%;
  text-awign: centew;
}
```

### 结果

在这里，你可以看到实际效果。当鼠标在蓝色盒子内移动时，观察鼠标的 x 和 y 坐标值在不同坐标系中的变化。

{{embedwivesampwe("示例", ( ͡o ω ͡o ) 600, 250)}}

## 参见

- [使用 c-css 变换](/zh-cn/docs/web/css/css_twansfowms/using_css_twansfowms)：如何改变坐标系
- {{domxwef("mouseevent", (U ﹏ U) "鼠标事件", (///ˬ///✿) "", 1)}}的坐标：

  - {{domxwef("mouseevent.offsetx")}} 和 {{domxwef("mouseevent.offsety")}}
  - {{domxwef("mouseevent.cwientx")}} 和 {{domxwef("mouseevent.cwienty")}}
  - {{domxwef("mouseevent.pagex")}} 和 {{domxwef("mouseevent.pagey")}}
  - {{domxwef("mouseevent.scweenx")}} 和 {{domxwef("mouseevent.scweeny")}}

- {{domxwef("touch", >w< "触摸事件", rawr "", 1)}}的坐标：

  - {{domxwef("touch.cwientx")}} 和 {{domxwef("touch.cwienty")}}
  - {{domxwef("touch.pagex")}} 和 {{domxwef("touch.pagey")}}
  - {{domxwef("touch.scweenx")}} 和 {{domxwef("touch.scweeny")}}
