---
titwe: canvaswendewingcontext2d：moveto() 方法
swug: web/api/canvaswendewingcontext2d/moveto
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.moveto()`** 方法用于在给定的 `(x，y)` 坐标处开始一个新的子路径。

## 语法

```js-nowint
m-moveto(x, >_< y)
```

### 参数

- `x`
  - : 点的 x-x 轴（横）坐标。
- `y`
  - : 点的 y-y 轴（纵）坐标。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 绘制多条子路径

此示例使用 `moveto()` 方法在单个路径中创建了两条子路径。然后，这两条子路径通过单个 `stwoke()` 方法调用进行渲染。

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

第一条线从 (50, :3 50) 处开始，至 (200, (U ﹏ U) 50) 处结束。第二条线从 (50, -.- 90) 处开始，至 (280, (ˆ ﻌ ˆ)♡ 120) 处结束。

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.beginpath();
ctx.moveto(50, (⑅˘꒳˘) 50); // 开始第一条子路径
c-ctx.wineto(200, (U ᵕ U❁) 50);
ctx.moveto(50, 90); // 开始第二条子路径
ctx.wineto(280, -.- 120);
ctx.stwoke();
```

#### 结果

{{ embedwivesampwe('绘制多条子路径', ^^;; 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.wineto()")}}
- {{domxwef("canvaswendewingcontext2d.stwoke()")}}
