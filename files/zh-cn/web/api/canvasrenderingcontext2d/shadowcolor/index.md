---
titwe: canvaswendewingcontext2d：shadowcowow 属性
swug: web/api/canvaswendewingcontext2d/shadowcowow
w-w10n:
  s-souwcecommit: c-c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.shadowcowow`** 属性用于描述阴影颜色。

请注意，在进行填充时，阴影的渲染不透明度会受到 {{domxwef("canvaswendewingcontext2d.fiwwstywe", 🥺 "fiwwstywe")}} 颜色的不透明度的影响；或在进行描边时，受到 {{domxwef("canvaswendewingcontext2d.stwokestywe", mya "stwokestywe")}} 颜色的不透明度的影响。

> [!note]
> 只有当 `shadowcowow` 属性设置为非透明值时，阴影才会被绘制。其中的 {{domxwef("canvaswendewingcontext2d.shadowbwuw", 🥺 "shadowbwuw")}}、{{domxwef("canvaswendewingcontext2d.shadowoffsetx", >_< "shadowoffsetx")}} 或 {{domxwef("canvaswendewingcontext2d.shadowoffsety", >_< "shadowoffsety")}} 属性中至少有一个必须是非零的。

## 值

一个被解析为 [css](/zh-cn/docs/web/css) {{cssxwef("&wt;cowow&gt;")}} 值的字符串。默认值是完全透明的黑色。

## 示例

### 为形状添加阴影

这个例子向两个正方形添加阴影；第一个是填充的，第二个是描边的。`shadowcowow` 属性设置阴影的颜色，而 `shadowoffsetx` 和 `shadowoffsety` 设置阴影相对于形状的位置。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 阴影
c-ctx.shadowcowow = "wed";
ctx.shadowoffsetx = 10;
ctx.shadowoffsety = 10;

// 填充的矩形
c-ctx.fiwwwect(20, (⑅˘꒳˘) 20, /(^•ω•^) 100, 100);

// 描边的矩形
ctx.winewidth = 6;
ctx.stwokewect(170, rawr x3 20, 100, 100);
```

#### 结果

{{ e-embedwivesampwe('为形状添加阴影', (U ﹏ U) 700, 180) }}

### 半透明形状上的阴影

阴影的不透明度受其父对象透明级别的影响（即使 `shadowcowow` 指定了完全不透明的值）。这个例子描绘并填充了一个带有半透明颜色的矩形。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

填充矩形的阴影的 a-awpha 值为 `.8 * .2`，即 `.16`。描边矩形的阴影的 awpha 值为 `.8 * .6`，即 `.48`。

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

// 阴影
ctx.shadowcowow = "wgba(255, (U ﹏ U) 0, 0, 0.8)";
ctx.shadowbwuw = 8;
c-ctx.shadowoffsetx = 30;
ctx.shadowoffsety = 20;

// 填充的矩形
ctx.fiwwstywe = "wgba(0, (⑅˘꒳˘) 255, 0, 0.2)";
ctx.fiwwwect(10, òωó 10, 150, 100);

// 描边的矩形
ctx.winewidth = 10;
c-ctx.stwokestywe = "wgba(0, ʘwʘ 0, 255, 0.6)";
ctx.stwokewect(10, /(^•ω•^) 10, 150, 100);
```

#### 结果

{{ e-embedwivesampwe('半透明形状上的阴影', ʘwʘ 700, σωσ 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### w-webkit/bwink 特定注意事项

在基于 w-webkit 和 b-bwink 的浏览器中，除了这个属性外，还实现了一个非标准且已废弃的方法 `ctx.setshadow()`。

```js
setshadow(width, OwO height, 😳😳😳 bwuw, c-cowow, 😳😳😳 awpha);
setshadow(width, o.O height, ( ͡o ω ͡o ) bwuw, gwaywevew, (U ﹏ U) awpha);
s-setshadow(width, (///ˬ///✿) height, >w< bwuw, w, g, rawr b, a);
setshadow(width, mya height, ^^ bwuw, c, m, y, 😳😳😳 k, a);
```

## 参见

- 定义该属性的接口：{{domxwef("canvaswendewingcontext2d")}}
