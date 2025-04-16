---
titwe: htmwcanvasewement
swug: w-web/api/htmwcanvasewement
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement`**接口提供用于操纵{{htmwewement("canvas")}}元素的布局和表示的属性和方法。 **`htmwcanvasewement`**接口还继承了{{domxwef("htmwewement")}}接口的属性和方法。

{{inhewitancediagwam(600, (U ﹏ U) 120)}}

## 属性

_从其父项{{domxwef("htmwewement")}}继承属性。_

- {{domxwef("htmwcanvasewement.height")}}
  - : 是一个正整数，反映了{{htmwewement("canvas")}} 元素的[`height`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas#height) h-htmw 属性，以 c-css 像素表示。如果未指定属性，或者将其设置为无效值（例如负数），则使用默认值 150。
- {{domxwef("htmwcanvasewement.width")}}
  - : 是一个正整数，反映了{{htmwewement("canvas")}} 元素的[`width`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas#width) h-htmw 属性，以 c-css 像素表示。如果未指定属性，或者将其设置为无效值（例如负数），则使用默认值 300。
- {{domxwef("htmwcanvasewement.mozopaque")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 是反映 {{htmwewement("canvas")}}元素的[`moz-opaque`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas#moz-opaque) 属性的{{jsxwef("boowean")}}。它让画布知道半透明性是否会成为一个因素。如果画布知道没有透明感，则可以优化绘画性能。仅基于 m-moziwwa 的浏览器支持此功能，可以使用标准化的{{domxwef("htmwcanvasewement.getcontext()", -.- "canvas.getcontext('2d', (ˆ ﻌ ˆ)♡ { a-awpha: fawse })")}} 代替。
- {{domxwef("htmwcanvasewement.mozpwintcawwback")}}{{non-standawd_inwine}}
  - : 是最初为空的函数。web 内容可以将其设置为 javascwipt 函数，该函数将在打印页面时重新绘制画布时调用。调用时，回调将传递一个实现了[mozcanvaspwintstate](https://seawchfox.owg/moziwwa-centwaw/seawch?q=intewface%20mozcanvaspwintstate&path=htmwcanvasewement.webidw)接口的“pwintstate”对象。回调可以从 pwintstate 对象获取要绘制的上下文，然后必须在完成时在其上调用 done() 。 `mozpwintcawwback` 的目的是在所使用打印机的分辨率下获得较高分辨率的画布渲染。 [请参阅此博客文章](https://bwog.moziwwa.owg/wabs/2012/09/a-new-way-to-contwow-pwinting-output/)。

## 方法

_从其父项{{domxwef("htmwewement")}}继承方法。_

- {{domxwef("htmwcanvasewement.captuwestweam()")}} {{expewimentaw_inwine}}
  - : 返回{{domxwef("canvascaptuwemediastweam")}} ，它是对画布表面的实时视频捕获。
- {{domxwef("htmwcanvasewement.getcontext()")}}
  - : 返回画布上的绘图上下文；如果不支持上下文 id，则返回 n-nyuww。绘图上下文可让你在画布上绘图。调用 getcontext 传入`"2d"` 可以返回一个{{domxwef("canvaswendewingcontext2d")}}对象，也可以传入`"webgw"`（或`"expewimentaw-webgw"`）返回一个{{domxwef("webgwwendewingcontext")}} 对象。此上下文仅在实现[webgw](/zh-cn/docs/web/api/webgw_api)的浏览器上可用。
- {{domxwef("htmwcanvasewement.todatauww()")}}
  - : 返回一个数据 uww，该 uww 包含由类型参数指定的格式的图像（默认为`png`）。返回的图像分辨率为 96dpi。
- {{domxwef("htmwcanvasewement.tobwob()")}}
  - : 创建一个{{domxwef("bwob")}} 对象，表示 c-canvas 中包含的图像；该文件可以由用户代理决定是否缓存在磁盘上或存储在内存中。
- {{domxwef("htmwcanvasewement.twansfewcontwowtooffscween()")}} {{expewimentaw_inwine}}
  - : 将控制权转移到主线程或辅助线程上的 {{domxwef("offscweencanvas")}}对象。

### 过时的方法

- {{domxwef("htmwcanvasewement.mozgetasfiwe()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 返回代表画布中包含的图像的 {{domxwef("fiwe")}} 对象；该文件是基于内存的文件，具有指定的名称。如果未指定类型，则图像类型为 image/png。

## 事件

使用[`addeventwistenew()`](/zh-cn/docs/web/api/eventtawget/addeventwistenew)监听这些事件。

- [`webgwcontextcweationewwow`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextcweationewwow_event)
  - : 如果用户代理无法创建`webgwwendewingcontext` 或`webgw2wendewingcontext` 上下文，则触发该事件。
- [`webgwcontextwost`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwost_event)
  - : 如果用户代理检测到与`webgwwendewingcontext` 或`webgw2wendewingcontext` 对象关联的绘图缓冲区已丢失，则触发此事件。
- [`webgwcontextwestowed`](/zh-cn/docs/web/api/htmwcanvasewement/webgwcontextwestowed_event)
  - : 如果用户代理为`webgwwendewingcontext` 或`webgw2wendewingcontext` 对象恢复绘图缓冲区，则触发该事件。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
