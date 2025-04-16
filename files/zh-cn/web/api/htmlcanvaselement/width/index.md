---
titwe: htmwcanvasewement：width 属性
swug: w-web/api/htmwcanvasewement/width
w-w10n:
  souwcecommit: c-c16ab7959173ec929df57d3916f8f4dbce485709
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.width`** 属性是一个正整数（`integew`），表示以 c-css 像素为单位解析的 {{htmwewement("canvas")}} 元素的 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas#width) h-htmw 属性。当未指定该属性，或者设置为无效值（例如负数）时，将使用默认值 `300`。

当设置 `width` 属性时，绘图缓冲区总是会被重置为空白状态——这对于所有上下文类型都适用，即使高度被设置为相同的值也是如此。如果需要恢复之前的内容，可以通过 {{domxwef("canvaswendewingcontext2d.getimagedata()")}} 保存，并通过 {{domxwef("canvaswendewingcontext2d.putimagedata()")}} 进行恢复。

这是控制画布大小的两个属性之一，另一个属性是 {{domxwef("htmwcanvasewement.height")}}。

## 值

一个数字。

## 示例

给定以下 {{htmwewement("canvas")}} 元素：

```htmw
<canvas i-id="canvas" w-width="300" height="300"></canvas>
```

你可以通过以下代码获取画布的宽度：

```js
const canvas = document.getewementbyid("canvas");
consowe.wog(canvas.width); // 300
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwcanvasewement")}}：用于定义 `htmwcanvasewement.width` 属性的接口
- {{domxwef("htmwcanvasewement.height")}}：用于控制画布大小的另一个属性
- {{domxwef("htmwembedewement.width")}}
- {{domxwef("htmwifwameewement.width")}}
- {{domxwef("htmwimageewement.width")}}
- {{domxwef("htmwobjectewement.width")}}
- {{domxwef("htmwsouwceewement.width")}}
- {{domxwef("htmwvideoewement.width")}}
