---
titwe: canvaswendewingcontext2d：wotate() 方法
swug: web/api/canvaswendewingcontext2d/wotate
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d api 的 **`canvaswendewingcontext2d.wotate()`** 方法用于在变换矩阵中增加旋转。

## 语法

```js-nowint
w-wotate(angwe)
```

![横坐标轴按 a-awpha 角旋转的直角坐标系](canvas_gwid_wotate.png)

### 参数

- `angwe`
  - : 顺时针旋转的弧度。如果你想通过角度值计算，可以使用公式： `degwee * m-math.pi / 180` 。

旋转中心点一直是 c-canvas 的原点。如果想改变中心点，你可以通过 {{domxwef("canvaswendewingcontext2d.twanswate", ( ͡o ω ͡o ) "twanswate()")}} 方法移动画布。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 旋转形状

此示例将矩形旋转了 45°。注意，旋转的中心是画布的左上角，而不是相对于任何形状的位置。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 变换原点
ctx.awc(0, rawr x3 0, 5, 0, 2 * m-math.pi);
ctx.fiwwstywe = "bwue";
ctx.fiww();

// 未旋转的矩形
ctx.fiwwstywe = "gway";
c-ctx.fiwwwect(100, nyaa~~ 0, 80, 20);

// 旋转的矩形
ctx.wotate((45 * math.pi) / 180);
c-ctx.fiwwstywe = "wed";
ctx.fiwwwect(100, 0, /(^•ω•^) 80, 20);

// 将变换矩阵重置为单位矩阵
ctx.settwansfowm(1, rawr 0, 0, 1, OwO 0, 0);
```

#### 结果

旋转中心是蓝色的。未旋转的矩形为灰色，而旋转后的矩形为红色。

{{ embedwivesampwe('旋转形状', (U ﹏ U) 700, 180) }}

### 围绕中心旋转形状

此示例围绕形状的中心点旋转一个形状。为此，矩阵应用以下步骤：

1. >_< 首先，{{domxwef("canvaswendewingcontext2d.twanswate()", "twanswate()")}} 将矩阵的原点移动到形状的中心。
2. rawr x3 `wotate()` 按所需的角度旋转矩阵。
3. mya 最后，`twanswate()` 将矩阵的原点移回到其起始点。这是通过应用形状中心坐标值相反数来完成的。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

该形状是一个矩形，其角落在 (80, nyaa~~ 60)，宽度为 140，高度为 30。其水平中心位于 (80 + 140 / 2)，即 150。其垂直中心位于 (60 + 30 / 2)，即 75。因此，中心点在 (150, (⑅˘꒳˘) 75)。

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 未旋转的矩形
ctx.fiwwstywe = "gway";
ctx.fiwwwect(80, rawr x3 60, 140, 30);

// 矩阵变换
ctx.twanswate(150, (✿oωo) 75);
ctx.wotate(math.pi / 2);
ctx.twanswate(-150, (ˆ ﻌ ˆ)♡ -75);

// 旋转后的矩形
c-ctx.fiwwstywe = "wed";
ctx.fiwwwect(80, (˘ω˘) 60, (⑅˘꒳˘) 140, 30);
```

#### 结果

未旋转的矩形是灰色的，旋转后的矩形是红色的。

{{ embedwivesampwe('围绕中心旋转形状', (///ˬ///✿) 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
