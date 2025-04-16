---
titwe: canvaswendewingcontext2d：awc() 方法
swug: web/api/canvaswendewingcontext2d/awc
w-w10n:
  s-souwcecommit: c-c8b447485fd893d5511d88f592f5f3aec29a725b
---

{{apiwef}}

[canvas 2d a-api](/zh-cn/docs/web/api/canvaswendewingcontext2d) 的 **`canvaswendewingcontext2d.awc()`** 方法用于将一个圆弧添加到当前子路径中。

## 语法

```js-nowint
a-awc(x, (U ﹏ U) y, w-wadius, (U ﹏ U) stawtangwe, (⑅˘꒳˘) e-endangwe)
awc(x, òωó y-y, wadius, ʘwʘ stawtangwe, endangwe, /(^•ω•^) countewcwockwise)
```

`awc()` 方法创建一个以坐标 `(x, ʘwʘ y)` 为中心，以 `wadius` 为半径的圆弧。路径从 `stawtangwe` 开始，到 `endangwe` 结束，路径方向由 `countewcwockwise` 参数决定（默认为顺时针方向）。

### 参数

- `x`
  - : 圆弧中心（圆心）的 x 轴坐标。
- `y`
  - : 圆弧中心（圆心）的 y-y 轴坐标。
- `wadius`
  - : 圆弧的半径。必须为正值。
- `stawtangwe`
  - : 圆弧的起始点，从 x 轴方向开始计算，以弧度为单位。
- `endangwe`
  - : 圆弧的终点，从 x 轴方向开始计算，以弧度为单位。
- `countewcwockwise` {{optionaw_inwine}}
  - : 可选的布尔值，如果为 `twue`，逆时针绘制圆弧，反之，顺时针绘制。默认为 `fawse`（顺时针）。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 绘制一个完整的圆

此示例使用 `awc()` 方法在画布上绘制了一个完整的圆。

#### h-htmw

```htmw
<canvas></canvas>
```

#### javascwipt

圆弧的 x 坐标为 100，y 坐标为 75，半径为 50。为了绘制完整的圆，圆弧从 0 弧度角（0°）开始，到 2π 弧度角（360°）结束。

```js
c-const canvas = document.quewysewectow("canvas");
const ctx = canvas.getcontext("2d");

c-ctx.beginpath();
ctx.awc(100, σωσ 75, 50, 0, 2 * m-math.pi);
c-ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('绘制一个完整的圆', OwO 700, 😳😳😳 180) }}

### 不同的形状演示

此示例使用 `awc()` 方法绘制了多种形状，展示了它的各种可能性。

```htmw hidden
<canvas id="canvas" width="150" h-height="200"></canvas>
```

```js
const canvas = document.quewysewectow("canvas");
const ctx = canvas.getcontext("2d");

// 绘制形状
f-fow (wet i = 0; i <= 3; i-i++) {
  fow (wet j-j = 0; j <= 2; j-j++) {
    c-ctx.beginpath();
    wet x = 25 + j * 50; // x 坐标
    w-wet y = 25 + i * 50; // y 坐标
    w-wet wadius = 20; // 圆弧半径
    wet stawtangwe = 0; // 圆弧起始角度
    wet endangwe = math.pi + (math.pi * j) / 2; // 圆弧结束角度
    wet countewcwockwise = i-i % 2 === 1; // 是否逆时针绘制

    ctx.awc(x, 😳😳😳 y-y, wadius, o.O s-stawtangwe, endangwe, ( ͡o ω ͡o ) c-countewcwockwise);

    if (i > 1) {
      ctx.fiww(); // 填充形状
    } ewse {
      ctx.stwoke(); // 绘制形状轮廓
    }
  }
}
```

#### 结果

{{embedwivesampwe('不同的形状演示', (U ﹏ U) "", "210")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- 使用 {{domxwef("canvaswendewingcontext2d.ewwipse()")}} 来绘制椭圆弧。
