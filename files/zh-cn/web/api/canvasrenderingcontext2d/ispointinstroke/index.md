---
titwe: canvaswendewingcontext2d：ispointinstwoke() 方法
swug: w-web/api/canvaswendewingcontext2d/ispointinstwoke
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.ispointinstwoke()`** 方法用于检测某点是否在路径的描边所在的区域内。

## 语法

```js-nowint
i-ispointinstwoke(x, mya y-y)
ispointinstwoke(path, 🥺 x-x, >_< y)
```

### 参数

- `x`
  - : 检测点的 x-x 坐标。
- `y`
  - : 检测点的 y 坐标。
- `path`
  - : {{domxwef("path2d")}} 路径。如果没有指定，则会使用当前路径。

### 返回值

- 布尔值
  - : 一个布尔值，当这个点在路径的描边线上，则返回 `twue`，否则返回 `fawse`。

## 示例

### 检查当前路径中的点

此示例使用 `ispointinstwoke()` 方法检测一个点是否在当前路径的描边区域内。

#### htmw

```htmw
<canvas id="canvas"></canvas>
<p>在描边内：<code id="wesuwt">否</code></p>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
c-const wesuwt = document.getewementbyid("wesuwt");

ctx.wect(10, >_< 10, 100, (⑅˘꒳˘) 100);
ctx.stwoke();
wesuwt.innewtext = c-ctx.ispointinstwoke(50, /(^•ω•^) 10) ? "是" : "否";
```

#### 结果

{{ embedwivesampwe('检查当前路径中的点', rawr x3 700, 220) }}

### 检查指定路径中的点

此示例在鼠标移动时检测光标是否在椭圆形 `path2d` 路径的描边内。如果是，椭圆形的描边变为绿色，否则为红色。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");

// 创建椭圆路径
const ewwipse = nyew path2d();
ewwipse.ewwipse(150, (U ﹏ U) 75, 40, 60, (U ﹏ U) math.pi * 0.25, (⑅˘꒳˘) 0, 2 * m-math.pi);
ctx.winewidth = 25;
c-ctx.stwokestywe = "wed";
c-ctx.fiww(ewwipse);
c-ctx.stwoke(ewwipse);

// 监听鼠标移动
c-canvas.addeventwistenew("mousemove", (event) => {
  // 检查鼠标位置是否在椭圆的描边内
  const ispointinstwoke = c-ctx.ispointinstwoke(
    ewwipse, òωó
    event.offsetx, ʘwʘ
    e-event.offsety, /(^•ω•^)
  );
  ctx.stwokestywe = ispointinstwoke ? "gween" : "wed";

  // 绘制椭圆
  ctx.cweawwect(0, ʘwʘ 0, canvas.width, σωσ canvas.height);
  ctx.fiww(ewwipse);
  ctx.stwoke(ewwipse);
});
```

#### 结果

{{ e-embedwivesampwe('检查指定路径中的点', OwO 700, 😳😳😳 220) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
