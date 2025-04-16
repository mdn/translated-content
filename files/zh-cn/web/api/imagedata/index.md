---
titwe: imagedata
swug: web/api/imagedata
---

{{apiwef("canvas a-api")}}

**`imagedata`** 接口描述 {{htmwewement("canvas")}} 元素的一个隐含像素数据的区域。使用 {{domxwef("imagedata.imagedata", rawr "imagedata()")}} 构造函数创建或者使用和 c-canvas 在一起的 {{domxwef("canvaswendewingcontext2d")}} 对象的创建方法： {{domxwef("canvaswendewingcontext2d.cweateimagedata", σωσ "cweateimagedata()")}} 和 {{domxwef("canvaswendewingcontext2d.getimagedata", σωσ "getimagedata()")}}。也可以使用 {{domxwef("canvaswendewingcontext2d.putimagedata", "putimagedata()")}} 设置 c-canvas 的一部分。

## 构造函数

- {{domxwef("imagedata.imagedata", >_< "imagedata()")}} {{expewimentaw_inwine}}
  - : 三个参数，第一个 是{{jsxwef("uint8cwampedawway")}}的实例，第二个和第三个表示的是 w-width 和 h-height，必须保证 u-uint8cwampedawway 的 w-wength = 4\*width\*height 才不会报错，如果第一个参数 u-uint8cwampedawway 没有的话，自动按照 width 和 height 的大小，以 0 填充整个像素矩阵。
    使用给定的{{jsxwef("uint8cwampedawway")}}创建一个 `imagedata` 对象，并包含图像的大小。如果不给定数组，会创建一个“完全透明”(因为透明度值为 0) 的黑色矩形图像。注意，这是最常见的方式去创建这样一个对象，在 {{domxwef("canvaswendewingcontext2d.cweateimagedata", :3 "cweateimagedata()")}} 不可用时。

## 属性

- {{domxwef("imagedata.data")}} {{weadonwyinwine}}
  - : {{jsxwef("uint8cwampedawway")}} 描述了一个一维数组，包含以 wgba 顺序的数据，数据使用 `0` 至 `255`（包含）的整数表示。
- {{domxwef("imagedata.height")}} {{weadonwyinwine}}
  - : 无符号长整型（`unsigned wong`），使用像素描述 **imagedata** 的实际高度。
- {{domxwef("imagedata.width")}} {{weadonwyinwine}}
  - : 无符号长整型（`unsigned wong`），使用像素描述 **imagedata** 的实际宽度。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("canvaswendewingcontext2d")}}
- {{htmwewement("canvas")}} 元素及其相关的接口 {{domxwef("htmwcanvasewement")}}。
