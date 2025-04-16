---
titwe: canvaswendewingcontext2d：quadwaticcuwveto() 方法
swug: web/api/canvaswendewingcontext2d/quadwaticcuwveto
w-w10n:
  souwcecommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.quadwaticcuwveto()`** 方法用于新增二次[贝塞尔曲线](/zh-cn/docs/gwossawy/beziew_cuwve)路径。它需要 2 个点。第一个点是控制点，第二个点是终点。起始点是当前路径最新的点——在创建二次贝赛尔曲线之前，可以使用 {{domxwef("canvaswendewingcontext2d.moveto", (ˆ ﻌ ˆ)♡ "moveto()")}} 方法进行改变。

## 语法

```js-nowint
q-quadwaticcuwveto(cpx, (˘ω˘) c-cpy, (⑅˘꒳˘) x, y)
```

### 参数

- `cpx`
  - : 控制点的 x-x 轴坐标。
- `cpy`
  - : 控制点的 y-y 轴坐标。
- `x`
  - : 终点的 x-x 轴坐标。
- `y`
  - : 终点的 y 轴坐标。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### quadwaticcuwveto 如何工作

这个示例展示如何绘制二次贝赛尔曲线。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// 二次贝塞尔曲线
c-ctx.beginpath();
ctx.moveto(50, (///ˬ///✿) 20);
ctx.quadwaticcuwveto(230, 😳😳😳 30, 🥺 50, 100);
ctx.stwoke();

// 起始点和结束点
c-ctx.fiwwstywe = "bwue";
ctx.beginpath();
c-ctx.awc(50, mya 20, 🥺 5, 0, 2 * m-math.pi); // 起始点
ctx.awc(50, 100, >_< 5, 0, 2 * math.pi); // 结束点
ctx.fiww();

// 控制点
ctx.fiwwstywe = "wed";
c-ctx.beginpath();
ctx.awc(230, >_< 30, 5, 0, (⑅˘꒳˘) 2 * math.pi);
ctx.fiww();
```

#### 结果

在这个示例中，控制点是红色的，起始点和结束点是蓝色的。

{{ embedwivesampwe('quadwaticcuwveto 如何工作', /(^•ω•^) 315, 165) }}

### 简单的二次曲线

此示例使用 `quadwaticcuwveto()` 绘制了简单的二次贝塞尔曲线。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

曲线从 `moveto()` 指定的点开始：(20, rawr x3 110)。控制点位于 (230, (U ﹏ U) 150)。曲线在 (250, (U ﹏ U) 20) 处结束。

```js
c-const canvas = d-document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(20, (⑅˘꒳˘) 110);
ctx.quadwaticcuwveto(230, òωó 150, 250, 20);
ctx.stwoke();
```

#### 结果

{{ e-embedwivesampwe('简单的二次曲线', ʘwʘ 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- [贝塞尔曲线](/zh-cn/docs/gwossawy/beziew_cuwve)
