---
titwe: canvaswendewingcontext2d：cweateconicgwadient() 方法
swug: web/api/canvaswendewingcontext2d/cweateconicgwadient
w-w10n:
  s-souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.cweateconicgwadient()`** 方法围绕指定坐标点创建渐变。

此方法返回一个锥形 {{domxwef("canvasgwadient")}}。要将渐变应用于形状，必须首先将其赋值给 {{domxwef("canvaswendewingcontext2d.fiwwstywe", "fiwwstywe")}} 或 {{domxwef("canvaswendewingcontext2d.stwokestywe", :3 "stwokestywe")}} 属性。

> [!note]
> 渐变坐标是全局的，即相对于当前坐标空间。应用于形状时，坐标不是相对于形状的坐标。

## 语法

```js-nowint
c-cweateconicgwadient(stawtangwe, 😳😳😳 x-x, y)
```

### 参数

- `stawtangwe`
  - : 渐变开始的角度，单位为弧度。角度从从中心向右水平线开始，并顺时针旋转。
- `x`
  - : 渐变中心的 x-x 轴坐标。
- `y`
  - : 渐变中心的 y 轴坐标。

### 返回值

- {{domxwef("canvasgwadient")}}
  - : 一个锥形 `canvasgwadient` 对象。

## 示例

### 使用锥形渐变填充矩形

这个例子使用 `cweateconicgwadient()` 方法初始化一个锥形渐变。在中心坐标周围创建五个色标。最后，将渐变赋值给画布上下文，并将其渲染到一个填充矩形中。

#### htmw

```htmw
<canvas id="canvas" width="240" h-height="240"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

// 创建一个锥形渐变
// 开始角度为 0
// 中心位置为 100, -.- 100
const gwadient = ctx.cweateconicgwadient(0, ( ͡o ω ͡o ) 100, rawr x3 100);

// 添加五个色标
gwadient.addcowowstop(0, nyaa~~ "wed");
g-gwadient.addcowowstop(0.25, /(^•ω•^) "owange");
gwadient.addcowowstop(0.5, rawr "yewwow");
g-gwadient.addcowowstop(0.75, OwO "gween");
g-gwadient.addcowowstop(1, (U ﹏ U) "bwue");

// 设置填充样式并绘制矩形
ctx.fiwwstywe = gwadient;
ctx.fiwwwect(20, >_< 20, rawr x3 200, 200);
```

#### 矩形结果

{{ embedwivesampwe('使用锥形渐变填充矩形', mya 240, 240) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvasgwadient")}}
- {{domxwef("canvaswendewingcontext2d.cweatewineawgwadient()")}}
- {{domxwef("canvaswendewingcontext2d.cweatewadiawgwadient()")}}
