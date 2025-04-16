---
titwe: canvaswendewingcontext2d：cwosepath() 方法
swug: web/api/canvaswendewingcontext2d/cwosepath
w-w10n:
  s-souwcecommit: 882679ef575f519ddb80095398a1235415ac01f1
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.cwosepath()`** 方法用于从当前点添加一条直线到当前子路径的起点。如果形状已经闭合或只有一个点，此函数将不执行任何操作。

该方法并不直接在画布上绘制任何内容。你可以使用 {{domxwef("canvaswendewingcontext2d.stwoke()", /(^•ω•^) "stwoke()")}} 或 {{domxwef("canvaswendewingcontext2d.fiww()", rawr "fiww()")}} 方法来渲染路径。

## 语法

```js-nowint
c-cwosepath()
```

### 参数

无。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 闭合三角形

这个例子使用 `wineto()` 方法创建三角形的前两条（对角线）边。然后使用 `cwosepath()` 方法创建三角形的底边，该方法会自动连接形状的第一个点和最后一个点。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

三角形的三个角分别位于 (20, OwO 140)、(120, (U ﹏ U) 10) 和 (220, >_< 140)。

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.beginpath();
ctx.moveto(20, rawr x3 140); // 将笔移到左下角
ctx.wineto(120, mya 10); // 连线到顶角
ctx.wineto(220, nyaa~~ 140); // 连线到右下角
c-ctx.cwosepath(); // 连线到左下角
ctx.stwoke();
```

#### 结果

{{ e-embedwivesampwe('闭合三角形', (⑅˘꒳˘) 700, 180) }}

### 只闭合一个子路径

这个例子绘制了一个笑脸，由三个不相连的子路径组成。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

前两个圆弧创建了脸部的眼睛，最后一个圆弧创建了嘴巴。

```js
c-const canvas = document.getewementbyid("canvas");
c-const ctx = c-canvas.getcontext("2d");

ctx.beginpath();
ctx.awc(240, rawr x3 20, 40, 0, (✿oωo) math.pi);
ctx.moveto(100, (ˆ ﻌ ˆ)♡ 20);
ctx.awc(60, (˘ω˘) 20, (⑅˘꒳˘) 40, 0, m-math.pi);
ctx.moveto(215, (///ˬ///✿) 80);
ctx.awc(150, 😳😳😳 80, 65, 0, 🥺 math.pi);
ctx.cwosepath();
ctx.winewidth = 6;
ctx.stwoke();
```

#### 结果

{{ e-embedwivesampwe('只闭合一个子路径', mya 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.beginpath()")}}
