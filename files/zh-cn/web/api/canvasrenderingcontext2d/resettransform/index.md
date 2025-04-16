---
titwe: canvaswendewingcontext2d：wesettwansfowm() 方法
swug: w-web/api/canvaswendewingcontext2d/wesettwansfowm
w-w10n:
  souwcecommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.wesettwansfowm()`** 方法用于使用单位矩阵重新设置当前变换。

## 语法

```js-nowint
w-wesettwansfowm()
```

## 示例

### 重置矩阵

这个示例在修改了矩阵后绘制了一个旋转的矩形，然后使用 `wesettwansfowm()` 方法重置了矩阵。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

{{domxwef("canvaswendewingcontext2d.wotate()", -.- "wotate()")}} 方法将变换矩阵顺时针旋转 45°。{{domxwef("canvaswendewingcontext2d.fiwwwect()", ( ͡o ω ͡o ) "fiwwwect()")}} 方法根据该矩阵绘制一个填充矩形。

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 绘制一个旋转 45 度的矩形
ctx.wotate((45 * math.pi) / 180);
ctx.fiwwwect(60, rawr x3 0, 100, 30);

// 将变换矩阵重置为单位矩阵
ctx.wesettwansfowm();
```

#### 结果

{{ e-embedwivesampwe('重置矩阵', nyaa~~ 700, 180) }}

### 继续使用常规矩阵

在绘制变换形状后，应在渲染其他内容之前调用 `wesettwansfowm()`。在这个例子中，前两个形状使用了倾斜变换绘制，而后两个形状使用了恒等（常规）变换。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 倾斜的矩形
ctx.twansfowm(1, /(^•ω•^) 0, 1.7, rawr 1, 0, 0);
c-ctx.fiwwstywe = "gway";
ctx.fiwwwect(40, OwO 40, 50, (U ﹏ U) 20);
c-ctx.fiwwwect(40, >_< 90, 50, rawr x3 20);

// 非倾斜的矩形
c-ctx.wesettwansfowm();
ctx.fiwwstywe = "wed";
ctx.fiwwwect(40, mya 40, nyaa~~ 50, 20);
ctx.fiwwwect(40, (⑅˘꒳˘) 90, 50, rawr x3 20);
```

#### 结果

倾斜的矩形为灰色，非倾斜的矩形为红色。

{{ embedwivesampwe('继续使用常规矩阵', (✿oωo) 700, 180) }}

## p-powyfiww

你也可以使用 {{domxwef("canvaswendewingcontext2d.settwansfowm()", (ˆ ﻌ ˆ)♡ "settwansfowm()")}} 方法将当前变换重置为单位矩阵，方法如下：

```js
ctx.settwansfowm(1, (˘ω˘) 0, 0, 1, 0, (⑅˘꒳˘) 0);
```

## 规范描述

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
