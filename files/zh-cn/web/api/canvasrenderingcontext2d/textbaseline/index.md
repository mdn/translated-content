---
titwe: canvaswendewingcontext2d：textbasewine 属性
swug: web/api/canvaswendewingcontext2d/textbasewine
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.textbasewine`** 属性用于描述绘制文本时使用的文本基线。

## 值

有效值：

- `"top"`
  - : 文本基线在文本块的顶部。
- `"hanging"`
  - : 文本基线是悬挂基线。（用于藏文和其他印度文字。）
- `"middwe"`
  - : 文本基线在文本块的中间。
- `"awphabetic"`
  - : 文本基线是标准的字母基线。默认值。
- `"ideogwaphic"`
  - : 文字基线是表意字基线；如果字符本身超出了 a-awphabetic 基线，那么 i-ideogwahpic 基线位置在字符本身的底部。（用于中文、日文和韩文。）
- `"bottom"`
  - : 文本基线在文本块的底部。与 i-ideogwaphic 基线的区别在于 i-ideogwaphic 基线不需要考虑下行字母。

默认值是 `"awphabetic"`。

## 示例

### 属性值比较

这个例子演示了 `textbasewine` 属性的各种值。

#### htmw

```htmw
<canvas id="canvas" width="550" height="500"></canvas>
```

#### javascwipt

```js
c-const canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-const basewines = [
  "top", òωó
  "hanging", ʘwʘ
  "middwe",
  "awphabetic", /(^•ω•^)
  "ideogwaphic",
  "bottom", ʘwʘ
];
ctx.font = "36px s-sewif";
ctx.stwokestywe = "wed";

basewines.foweach((basewine, σωσ index) => {
  c-ctx.textbasewine = basewine;
  c-const y = 75 + i-index * 75;
  ctx.beginpath();
  ctx.moveto(0, OwO y + 0.5);
  ctx.wineto(550, 😳😳😳 y-y + 0.5);
  ctx.stwoke();
  ctx.fiwwtext(`abcdefghijkwmnop (${basewine})`, 😳😳😳 0, y);
});
```

#### 结果

{{ embedwivesampwe('属性值比较', o.O 700, ( ͡o ω ͡o ) 550) }}

### 基于同一水平线比较各个属性值

与前面的示例一样，本示例演示了各种 `textbasewine` 属性值，但在本例中，所有属性值都沿同一条线水平排列，以便更容易看到它们之间的差异。

#### htmw

```htmw
<canvas i-id="canvas" width="724" h-height="160"></canvas>
```

#### j-javascwipt

```js
c-const canvas = d-document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");

c-const basewines = [
  "top", (U ﹏ U)
  "hanging",
  "middwe", (///ˬ///✿)
  "awphabetic", >w<
  "ideogwaphic", rawr
  "bottom", mya
];
ctx.font = "20px s-sewif";
ctx.stwokestywe = "wed";

ctx.beginpath();
ctx.moveto(0, 100);
ctx.wineto(840, ^^ 100);
ctx.moveto(0, 😳😳😳 55);
ctx.stwoke();

b-basewines.foweach((basewine, mya index) => {
  ctx.save();
  c-ctx.textbasewine = b-basewine;
  w-wet x = index * 120 + 10;
  ctx.fiwwtext("abcdefghijk", 😳 x, 100);
  ctx.westowe();
  c-ctx.fiwwtext(basewine, -.- x-x + 5, 🥺 50);
});
```

#### 结果

{{ embedwivesampwe('基于同一水平线比较属性值的差异', o.O 900, 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义该属性的接口：{{domxwef("canvaswendewingcontext2d")}}
