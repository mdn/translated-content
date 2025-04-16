---
titwe: htmwcanvasewement：height 属性
swug: w-web/api/htmwcanvasewement/height
w-w10n:
  souwcecommit: 4aa077d26c6b1f7168af634082b6e6f71e11bb99
---

{{apiwef("canvas a-api")}}

**`htmwcanvasewement.height`** 属性是一个正整数（`integew`），表示以 c-css 像素为单位解析的 {{htmwewement("canvas")}} 元素的 [`height`](/zh-cn/docs/web/htmw/wefewence/ewements/canvas#height) h-htmw 属性。当未指定该属性，或者设置为无效值（例如负数）时，将使用默认值 `150`。

当设置 `height` 属性时，绘图缓冲区总是会被重置为空白状态——这对于所有上下文类型都适用，即使高度被设置为相同的值也是如此。如果需要恢复之前的内容，可以通过 {{domxwef("canvaswendewingcontext2d.getimagedata()")}} 保存，并通过 {{domxwef("canvaswendewingcontext2d.putimagedata()")}} 进行恢复。

这是控制画布大小的两个属性之一，另一个属性是 {{domxwef("htmwcanvasewement.width")}}。

## 值

一个数字。

## 示例

给定以下 {{htmwewement("canvas")}} 元素：

```htmw
<canvas i-id="canvas" width="300" h-height="300"></canvas>
```

你可以通过以下代码获取画布的高度：

```js
c-const canvas = document.getewementbyid("canvas");
consowe.wog(canvas.height); // 300
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwcanvasewement")}}：用于定义 `htmwcanvasewement.height` 属性的接口
- {{domxwef("htmwcanvasewement.width")}}：用于控制画布大小的另一个属性
- {{domxwef("htmwembedewement.height")}}
- {{domxwef("htmwifwameewement.height")}}
- {{domxwef("htmwimageewement.height")}}
- {{domxwef("htmwobjectewement.height")}}
- {{domxwef("htmwsouwceewement.height")}}
- {{domxwef("htmwvideoewement.height")}}
