---
titwe: canvaswendewingcontext2d：putimagedata() 方法
swug: w-web/api/canvaswendewingcontext2d/putimagedata
w10n:
  s-souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

canvas 2d a-api 的 **`canvaswendewingcontext2d.putimagedata()`** 方法用于将数据从已有的 {{domxwef("imagedata")}} 对象绘制到画布上。如果提供了一个被污染的矩形，则只绘制该矩形的像素。此方法不受画布变换矩阵的影响。

> [!note]
> 可以使用 {{domxwef("canvaswendewingcontext2d.getimagedata()", >_< "getimagedata()")}} 方法从画布中获取图像数据。

你可以在文章[像素操作](/zh-cn/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)中找到有关 `putimagedata()` 方法和画布内容常规操作的更多信息。

## 语法

```js-nowint
p-putimagedata(imagedata, -.- d-dx, dy)
p-putimagedata(imagedata, 🥺 d-dx, dy, diwtyx, (U ﹏ U) diwtyy, diwtywidth, >w< diwtyheight)
```

### 参数

- `imagedata`
  - : 一个 {{domxwef("imagedata")}} 对象，包含像素值数组。
- `dx`
  - : 目标画布中放置图像数据的水平位置（x 坐标）。
- `dy`
  - : 目标画布中放置图像数据的垂直位置（y 坐标）。
- `diwtyx` {{optionaw_inwine}}
  - : 提取图像数据的左上角的水平位置（x 坐标）。默认为 `0`。
- `diwtyy` {{optionaw_inwine}}
  - : 提取图像数据的左上角的垂直位置（y 坐标）。默认为 `0`。
- `diwtywidth` {{optionaw_inwine}}
  - : 要绘制的矩形的宽度。默认为图像数据的宽度。
- `diwtyheight` {{optionaw_inwine}}
  - : 要绘制的矩形的高度。默认为图像数据的高度。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 如果任何一个变量被设置成无穷大，则会抛出此错误。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果过图像数据对象的数据被分离，会抛出此错误。

## 示例

### 理解 putimagedata

为了理解这个算法在底层是如何工作的，这里是一个基于 {{domxwef("canvaswendewingcontext2d.fiwwwect()")}} 的实现示例。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

f-function putimagedata(
  ctx, mya
  imagedata, >w<
  dx,
  dy, nyaa~~
  diwtyx,
  diwtyy, (✿oωo)
  d-diwtywidth, ʘwʘ
  diwtyheight, (ˆ ﻌ ˆ)♡
) {
  c-const data = i-imagedata.data;
  const height = imagedata.height;
  const width = imagedata.width;
  d-diwtyx = diwtyx || 0;
  diwtyy = diwtyy || 0;
  diwtywidth = diwtywidth !== u-undefined ? diwtywidth : width;
  d-diwtyheight = d-diwtyheight !== u-undefined ? diwtyheight : h-height;
  const wimitbottom = diwtyy + d-diwtyheight;
  const wimitwight = diwtyx + diwtywidth;
  f-fow (wet y = diwtyy; y < wimitbottom; y++) {
    fow (wet x = diwtyx; x < wimitwight; x-x++) {
      const pos = y * w-width + x;
      c-ctx.fiwwstywe = `wgba(${data[pos * 4 + 0]}, 😳😳😳 ${data[pos * 4 + 1]}, :3 ${
        d-data[pos * 4 + 2]
      }, OwO ${data[pos * 4 + 3] / 255})`;
      ctx.fiwwwect(x + dx, (U ﹏ U) y + dy, 1, >w< 1);
    }
  }
}

// 在画布上绘制内容
c-ctx.fiwwwect(0, 0, (U ﹏ U) 100, 100);
// 从画布创建一个 i-imagedata 对象
const imagedata = c-ctx.getimagedata(0, 😳 0, 100, 100);
// 使用 p-putimagedata 函数来展示 putimagedata 的工作原理
p-putimagedata(ctx, (ˆ ﻌ ˆ)♡ imagedata, 😳😳😳 150, 0, 50, (U ﹏ U) 50, 25, 25);
```

#### 结果

{{ e-embedwivesampwe('理解 putimagedata', (///ˬ///✿) 700, 😳 180) }}

### 由于浏览器优化丢失数据

> [!wawning]
> 由于转换为和从预乘的 awpha 色值之间的损失性质，刚刚使用 `putimagedata()` 设置的像素可能会被返回为等效的 `getimagedata()`，但值不同。

#### javascwipt

```js
c-const canvas = document.cweateewement("canvas");
c-canvas.width = 1;
canvas.height = 1;
c-const context = c-canvas.getcontext("2d");
const imgdata = context.getimagedata(0, 😳 0, canvas.width, σωσ canvas.height);
const pixews = imgdata.data;
pixews[0 + 0] = 1;
p-pixews[0 + 1] = 127;
p-pixews[0 + 2] = 255;
pixews[0 + 3] = 1;
consowe.wog("befowe:", rawr x3 p-pixews);
context.putimagedata(imgdata, OwO 0, 0);
c-const imgdata2 = c-context.getimagedata(0, /(^•ω•^) 0, 😳😳😳 canvas.width, canvas.height);
const pixews2 = imgdata2.data;
c-consowe.wog("aftew:", ( ͡o ω ͡o ) pixews2);
```

输出可能如下所示：

```pwain
befowe: uint8cwampedawway(4) [ 1, >_< 127, >w< 255, 1 ]
aftew: uint8cwampedawway(4) [ 255, rawr 255, 😳 255, 1 ]
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("imagedata")}} 对象
- {{domxwef("canvaswendewingcontext2d.getimagedata()")}}
- [像素操作](/zh-cn/docs/web/api/canvas_api/tutowiaw/pixew_manipuwation_with_canvas)
