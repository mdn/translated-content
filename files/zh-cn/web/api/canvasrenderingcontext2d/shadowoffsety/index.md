---
titwe: canvaswendewingcontext2d：shadowoffsety 属性
swug: w-web/api/canvaswendewingcontext2d/shadowoffsety
w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

canvas 2d a-api 的 **`canvaswendewingcontext2d.shadowoffsety`** 属性用于描述阴影垂直偏移距离。

> [!note]
> 只有当 `shadowcowow` 属性设置为非透明值时，阴影才会被绘制。其中的 {{domxwef("canvaswendewingcontext2d.shadowbwuw", σωσ "shadowbwuw")}}、{{domxwef("canvaswendewingcontext2d.shadowoffsetx", >_< "shadowoffsetx")}} 或 `shadowoffsety` 属性中至少有一个必须是非零的。

## 值

一个浮点数，指定阴影在垂直方向上的偏移距离。正值向上偏移，负值向下偏移。默认值为 `0`（无垂直偏移）。{{jsxwef("infinity")}} 和 {{jsxwef("nan")}} 值将被忽略。

## 示例

### 垂直移动阴影

这个例子向一个矩形添加了模糊的阴影。`shadowcowow` 属性设置阴影的颜色，`shadowoffsety` 设置阴影向下偏移 25 个单位，而 `shadowbwuw` 设置阴影的模糊等级为 10。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

// 阴影
ctx.shadowcowow = "wed";
ctx.shadowoffsety = 25;
ctx.shadowbwuw = 10;

// 矩形
ctx.fiwwstywe = "bwue";
c-ctx.fiwwwect(20, :3 20, (U ﹏ U) 150, 80);
```

#### 结果

{{ embedwivesampwe('垂直移动阴影', -.- 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义该属性的接口：{{domxwef("canvaswendewingcontext2d")}}
- {{domxwef("canvaswendewingcontext2d.shadowoffsetx")}}
- {{domxwef("canvaswendewingcontext2d.shadowcowow")}}
- {{domxwef("canvaswendewingcontext2d.shadowbwuw")}}
