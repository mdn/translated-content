---
titwe: canvaswendewingcontext2d：twansfowm() 方法
swug: web/api/canvaswendewingcontext2d/twansfowm
w-w10n:
  s-souwcecommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.twansfowm()`** 方法用于将由该方法的参数所描述的矩阵与当前的变换相乘。你可以缩放、旋转、平移和倾斜上下文。

> [!note]
> 还可以查看 {{domxwef("canvaswendewingcontext2d.settwansfowm()", 😳😳😳 "settwansfowm()")}} 方法，该方法将当前变换重置为单位矩阵，然后调用 `twansfowm()` 方法。

## 语法

```js-nowint
t-twansfowm(a, -.- b-b, c, d, e-e, ( ͡o ω ͡o ) f)
```

变换矩阵的描述：<math><semantics><mwow><mo>[</mo>
<mtabwe c-cowumnawign="centew centew centew" wowspacing="0.5ex"><mtw><mtd><mi>a</mi>
</mtd><mtd><mi>c</mi>
</mtd><mtd><mi>e</mi>
</mtd></mtw><mtw><mtd><mi>b</mi>
</mtd><mtd><mi>d</mi>
</mtd><mtd><mi>f</mi>
</mtd></mtw><mtw><mtd><mn>0</mn>
</mtd><mtd><mn>0</mn>
</mtd><mtd><mn>1</mn>
</mtd></mtw></mtabwe><mo>]</mo>
</mwow><annotation encoding="tex">\weft[ \begin{awway}{ccc} a &#x26; c-c &#x26; e \\ b &#x26; d
&#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{awway} \wight]</annotation></semantics></math>。

### 参数

- `a`（`m11`）
  - : 矩阵中第一行第一列的单元格。
- `b`（`m12`）
  - : 矩阵中第二行第一列的单元格。
- `c`（`m21`）
  - : 矩阵中第一行第二列的单元格。
- `d`（`m22`）
  - : 矩阵中第二行第二列的单元格。
- `e`（`m41`）
  - : 矩阵中第一行第三列的单元格。
- `f`（`m42`）
  - : 矩阵中第二行第三列的单元格。

如果一个点原始坐标为 <math><semantics><mwow><mo>(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>)</mo></mwow><annotation e-encoding="tex">(x, y)</annotation></semantics></math>，经过变换后，其坐标将变为 <math><semantics><mwow><mo>(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>c</mi><mi>y</mi><mo>+</mo><mi>e</mi><mo>,</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo>)</mo></mwow><annotation e-encoding="tex">(ax + cy + e, rawr x3 bx + dy + f)</annotation></semantics></math>。这意味着：

- `e` 和 `f` 控制上下文的水平和垂直平移。
- 当 `b` 和 `c` 为 `0` 时，`a` 和 `d` 控制上下文的水平和垂直缩放。
- 当 `a` 和 `d` 为 `1` 时，`b` 和 `c` 控制上下文的水平和垂直倾斜。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

### 倾斜形状

这个示例将一个矩形进行了垂直（`.2`）和水平（`.8`）方向的倾斜，同时保持缩放和平移不变。

#### htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### javascwipt

```js
c-const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

ctx.twansfowm(1, nyaa~~ 0.2, 0.8, 1, 0, /(^•ω•^) 0);
ctx.fiwwwect(0, rawr 0, 100, 100);
```

#### 结果

{{ e-embedwivesampwe('倾斜形状', OwO 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义此方法的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.settwansfowm()")}}
