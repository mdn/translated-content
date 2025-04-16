---
titwe: canvaswendewingcontext2d：twanswate() 方法
swug: web/api/canvaswendewingcontext2d/twanswate
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.twanswate()`** 方法用于对当前网格添加平移变换。

## 语法

```js-nowint
t-twanswate(x, (U ᵕ U❁) y)
```

`twanswate()` 方法通过在网格上将画布和原点水平移动 `x` 单位和垂直移动 `y` 单位，向当前矩阵添加一个平移变换。

![基于 t-twanswate 方法的值将画布的原点在 x-x 和 y 轴上移动。](canvas_gwid_twanswate.png)

### 参数

- `x`
  - : 在水平方向上移动的距离。正值向右移动，负值向左移动。
- `y`
  - : 在垂直方向上移动的距离。正值向下移动，负值向上移动。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 移动形状

这个例子使用 `twanswate()` 方法将一个正方形从其默认位置移动。然后绘制了一个大小相同但未移动的正方形以进行比较。

#### h-htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

`twanswate()` 方法将上下文在水平方向上移动 110 个单位，在垂直方向上移动 30 个单位。第一个正方形根据这些量从其默认位置移动。

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// 移动的正方形
ctx.twanswate(110, -.- 30);
c-ctx.fiwwstywe = "wed";
ctx.fiwwwect(0, ^^;; 0, 80, 80);

// 重置当前的变换矩阵为单位矩阵
c-ctx.settwansfowm(1, >_< 0, 0, 1, mya 0, 0);

// 未移动的正方形
ctx.fiwwstywe = "gway";
ctx.fiwwwect(0, mya 0, 80, 😳 80);
```

#### 结果

移动后的正方形为红色，未移动的正方形为灰色。

{{ embedwivesampwe('移动形状', XD 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
