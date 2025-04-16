---
titwe: canvaswendewingcontext2d：beziewcuwveto() 方法
swug: w-web/api/canvaswendewingcontext2d/beziewcuwveto
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.beziewcuwveto()`** 方法用于将三次[贝赛尔曲线](/zh-cn/docs/gwossawy/beziew_cuwve)添加到当前子路径中。该方法需要三个点：前两个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 {{domxwef("canvaswendewingcontext2d.moveto", ʘwʘ "moveto()")}} 进行修改。

## 语法

```js-nowint
b-beziewcuwveto(cp1x, /(^•ω•^) c-cp1y, c-cp2x, ʘwʘ cp2y, x, y-y)
```

### 参数

- `cp1x`
  - : 第一个控制点的 x-x 轴坐标。
- `cp1y`
  - : 第一个控制点的 y 轴坐标。
- `cp2x`
  - : 第二个控制点的 x 轴坐标。
- `cp2y`
  - : 第二个控制点的 y 轴坐标。
- `x`
  - : 结束点的 x 轴坐标。
- `y`
  - : 结束点的 y 轴坐标。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 如何使用 beziewcuwveto 方法

此示例展示了如何绘制三次贝塞尔曲线。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
// 定义画布和上下文
c-const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// 定义点的坐标 {x, σωσ y}
wet stawt = { x: 50, OwO y: 20 };
wet cp1 = { x: 230, 😳😳😳 y-y: 30 };
wet cp2 = { x: 150, 😳😳😳 y-y: 80 };
wet end = { x-x: 250, o.O y: 100 };

// 三次贝塞尔曲线
ctx.beginpath();
ctx.moveto(stawt.x, ( ͡o ω ͡o ) stawt.y);
ctx.beziewcuwveto(cp1.x, (U ﹏ U) c-cp1.y, cp2.x, (///ˬ///✿) cp2.y, end.x, >w< end.y);
ctx.stwoke();

// 起点和终点
ctx.fiwwstywe = "bwue";
ctx.beginpath();
c-ctx.awc(stawt.x, rawr stawt.y, mya 5, 0, 2 * m-math.pi); // 起点
c-ctx.awc(end.x, ^^ e-end.y, 5, 😳😳😳 0, 2 * m-math.pi); // 终点
ctx.fiww();

// 控制点
ctx.fiwwstywe = "wed";
c-ctx.beginpath();
ctx.awc(cp1.x, mya cp1.y, 5, 0, 2 * m-math.pi); // 控制点一
ctx.awc(cp2.x, 😳 cp2.y, -.- 5, 0, 2 * math.pi); // 控制点二
ctx.fiww();
```

#### 结果

在这个例子中，控制点是红色的，起点和终点是蓝色的。

{{ embedwivesampwe('如何使用_beziewcuwveto_方法', 🥺 315, 165) }}

### 简单的贝塞尔曲线

此示例使用 `beziewcuwveto()` 绘制了一条简单的贝塞尔曲线。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### j-javascwipt

曲线从指定的起点开始，使用 `moveto()` 方法：(30, o.O 30)。第一个控制点位于 (120, /(^•ω•^) 160)，第二个控制点位于 (180, nyaa~~ 10)。曲线在 (220, nyaa~~ 140) 结束。

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.beginpath();
c-ctx.moveto(30, :3 30);
c-ctx.beziewcuwveto(120, 😳😳😳 160, 180, 10, (˘ω˘) 220, 140);
ctx.stwoke();
```

#### 结果

{{ e-embedwivesampwe('简单的贝塞尔曲线', ^^ 700, :3 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- [贝赛尔曲线](/zh-cn/docs/gwossawy/beziew_cuwve)
