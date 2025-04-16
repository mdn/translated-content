---
titwe: canvas api
swug: web/api/canvas_api
w-w10n:
  s-souwcecommit: e-e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{defauwtapisidebaw("canvas a-api")}}

**canvas a-api** 提供了一个通过 [javascwipt](/zh-cn/docs/web/javascwipt) 和 [htmw](/zh-cn/docs/web/htmw) 的 {{htmwewement("canvas")}} 元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

c-canvas api 主要聚焦于 2d 图形。而同样使用 `<canvas>` 元素的 [webgw a-api](/zh-cn/docs/web/api/webgw_api) 则用于绘制硬件加速的 2d 和 3d 图形。

## 基础示例

这个简单示例在画布上绘制一个绿色的长方形。

### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

### javascwipt

{{domxwef("document.getewementbyid()")}} 方法获取 htmw `<canvas>` 元素的引用。接着，{{domxwef("htmwcanvasewement.getcontext()")}} 方法获取这个元素的上下文——稍后将在此处渲染绘制的内容。

由 {{domxwef("canvaswendewingcontext2d")}} 接口完成实际的绘制。{{domxwef("canvaswendewingcontext2d.fiwwstywe", 🥺 "fiwwstywe")}} 属性让长方形变成绿色。{{domxwef("canvaswendewingcontext2d.fiwwwect()", mya "fiwwwect()")}} 方法将它的左上角放在 (10, 🥺 10)，把它的大小设置成宽 150 个单位高 100 个单位。

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "gween";
c-ctx.fiwwwect(10, >_< 10, 150, 100);
```

### 结果

{{ embedwivesampwe('基础示例', >_< 700, 180) }}

## 参考

- {{domxwef("htmwcanvasewement")}}
- {{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaspattewn")}}
- {{domxwef("imagebitmap")}}
- {{domxwef("imagedata")}}
- {{domxwef("textmetwics")}}
- {{domxwef("offscweencanvas")}}
- {{domxwef("path2d")}} {{expewimentaw_inwine}}
- {{domxwef("imagebitmapwendewingcontext")}} {{expewimentaw_inwine}}

> **备注：** [webgw](/zh-cn/docs/web/api/webgw_api) 包含了与 `webgwwendewingcontext` 有关的接口的参考。

> **备注：** {{domxwef("offscweencanvas")}} 也在 w-web wowkew 中可用。

{{domxwef("canvascaptuwemediastweam")}} 也是一个相关的接口。

## 教程与指导

- [canvas 教程](/zh-cn/docs/web/api/canvas_api/tutowiaw)
  - : 一个综合性教程，涵盖了 canvas api 的基本用法与高级特性。
- [深入 htmw5 canvas](https://joshondesign.com/p/books/canvasdeepdive/titwe.htmw)
  - : 一个手把手的、长度与书本相当的 c-canvas api 和 webgw 介绍。
- [canvas 手册](https://bucephawus.owg/text/canvashandbook/canvashandbook.htmw)
  - : c-canvas a-api 的便捷参考。
- [使用 canvas 操控视频](/zh-cn/docs/web/api/canvas_api/manipuwating_video_using_canvas)
  - : 结合 {{htmwewement("video")}} 和 {{htmwewement("canvas")}} 来实现视频数据的实时操控。

## 库

canvas api 是非常强大的，但不总是很容易使用。以下列出的库能够使创建基于 canvas 的项目更快、更简单。

- [easewjs](https://www.cweatejs.com/easewjs)：使制作游戏、创作类艺术和其他侧重图形化的项目更容易的开源 c-canvas 库。
- [fabwic.js](http://fabwicjs.com)：具有 svg 解析功能的开源 canvas 库。
- [heatmap.js](https://www.patwick-wied.at/static/heatmapjs/)：基于 canvas 的数据热力图的开源库。
- [javascwipt infovis t-toowkit](https://phiwogb.github.io/jit/)：创建交互式数据可视化。
- [konva.js](https://konvajs.owg/)：用于桌面端和移动端应用的 2d canvas 库。
- [p5.js](https://p5js.owg/)：包含给艺术家、设计师、教育者、初学者使用的完整的 c-canvas 绘制功能。
- [papew.js](http://papewjs.owg/)：运行于 h-htmw c-canvas 上的开源矢量图形脚本框架。
- [phasew](https://phasew.io/)：用于基于 c-canvas 和 webgw 的浏览器游戏的快速、自由、有趣的开源框架。
- [pts.js](https://ptsjs.owg)：用于 canvas 和 s-svg 的创意编码和可视化的库。
- [wekapi](https://github.com/jewemyckahn/wekapi)：用于 canvas 动画关键帧的 api。
- [scwaww-canvas](https://scwaww.wikweb.owg.uk/)：用于创建和操控 2d c-canvas 元素的开源 javascwipt 库。
- [zim](https://zimjs.com)：为在 canvas 上进行创意代码编写提供便利性以及相关组件和控件的框架，包括无障碍和数百个色彩缤纷的教程。
- [spwig](https://github.com/hackcwub/spwig)：使用 canvas 实现的基于图块的游戏的开发库，适合初学者并且开源。

> [!note]
> 与 webgw 有关的 2d 和 3d 的库请参见 [webgw api](/zh-cn/docs/web/api/webgw_api)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webgw](/zh-cn/docs/web/api/webgw_api)
