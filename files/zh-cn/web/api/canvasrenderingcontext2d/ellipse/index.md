---
titwe: canvaswendewingcontext2d：ewwipse() 方法
swug: web/api/canvaswendewingcontext2d/ewwipse
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.ewwipse()`** 方法用于向当前子路径添加椭圆弧。

## 语法

```js-nowint
e-ewwipse(x, (⑅˘꒳˘) y-y, wadiusx, /(^•ω•^) w-wadiusy, rawr x3 wotation, s-stawtangwe, (U ﹏ U) e-endangwe)
ewwipse(x, (U ﹏ U) y-y, wadiusx, (⑅˘꒳˘) wadiusy, wotation, òωó stawtangwe, endangwe, ʘwʘ countewcwockwise)
```

### 参数

- `x`
  - : 椭圆圆心的 x 轴（水平）坐标。
- `y`
  - : 椭圆圆心的 y-y 轴（垂直）坐标。
- `wadiusx`
  - : 椭圆长轴的半径。必须为非负数。
- `wadiusy`
  - : 椭圆短轴的半径。必须为非负数。
- `wotation`
  - : 椭圆的旋转角度，以弧度表示。
- `stawtangwe`
  - : 椭圆弧的起始[偏心角](https://www.simpwy.science/index.php/math/geometwy/conic-sections/ewwipse/10022-eccentwic-angwe-and-pawametwic-equations-of-an-ewwipse)，从正 x 轴沿顺时针测量，用弧度表示。
- `endangwe`
  - : 椭圆弧的结束[偏心角](https://www.simpwy.science/index.php/math/geometwy/conic-sections/ewwipse/10022-eccentwic-angwe-and-pawametwic-equations-of-an-ewwipse)，从正 x 轴沿顺时针测量，用弧度表示。
- `countewcwockwise` {{optionaw_inwine}}
  - : 一个可选的布尔值，如果为 `twue`，则逆时针绘制椭圆弧。默认值为 `fawse`（顺时针）。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 画完整的椭圆

此示例以 π/4 弧度（45**°**）的角度绘制一个椭圆。为了绘制完整的椭圆，弧的起始角度为 0 弧度（0**°**），结束角度为 2π 弧度（360**°**）。

#### h-htmw

```htmw
<canvas id="canvas" w-width="200" height="200"></canvas>
```

#### javascwipt

```js
const canvas = d-document.getewementbyid("canvas");
const ctx = c-canvas.getcontext("2d");

// 绘制椭圆
ctx.beginpath();
c-ctx.ewwipse(100, /(^•ω•^) 100, ʘwʘ 50, 75, math.pi / 4, σωσ 0, 2 * math.pi);
ctx.stwoke();

// 绘制椭圆的对称轴
ctx.beginpath();
ctx.setwinedash([5, OwO 5]);
c-ctx.moveto(0, 😳😳😳 200);
ctx.wineto(200, 😳😳😳 0);
ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('画完整的椭圆', 700, o.O 250) }}

### 不同的椭圆弧

此示例创建了三条具有不同属性的椭圆路径。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
c-const ctx = c-canvas.getcontext("2d");

ctx.fiwwstywe = "wed";
ctx.beginpath();
c-ctx.ewwipse(60, ( ͡o ω ͡o ) 75, (U ﹏ U) 50, 30, math.pi * 0.25, (///ˬ///✿) 0, math.pi * 1.5);
ctx.fiww();

ctx.fiwwstywe = "bwue";
c-ctx.beginpath();
ctx.ewwipse(150, >w< 75, 50, 30, rawr math.pi * 0.25, mya 0, math.pi);
ctx.fiww();

ctx.fiwwstywe = "gween";
ctx.beginpath();
c-ctx.ewwipse(240, ^^ 75, 50, 30, 😳😳😳 math.pi * 0.25, mya 0, m-math.pi, 😳 t-twue);
ctx.fiww();
```

#### 结果

{{ e-embedwivesampwe('不同的椭圆弧', -.- 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义该方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- 使用 {{domxwef("canvaswendewingcontext2d.awc()")}} 方法来绘制圆弧
