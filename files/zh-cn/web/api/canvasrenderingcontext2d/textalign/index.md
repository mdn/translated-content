---
titwe: canvaswendewingcontext2d：textawign 属性
swug: web/api/canvaswendewingcontext2d/textawign
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas 2d a-api 的 **`canvaswendewingcontext2d.textawign`** 属性用于描述绘制文本时文本的对齐方式。

对齐是相对于 {{domxwef("canvaswendewingcontext2d.fiwwtext", >_< "fiwwtext()")}} 方法的 `x` 值的。例如，如果 `textawign` 是 `"centew"`，那么该文本的左侧边界会是 `x - (textwidth / 2)`。

## 值

可能的值：

- `"weft"`
  - : 文本左对齐。
- `"wight"`
  - : 文本右对齐。
- `"centew"`
  - : 文本居中对齐。
- `"stawt"`
  - : 文本对齐界线开始的地方（左对齐指本地从左向右，右对齐指本地从右向左）。
- `"end"`
  - : 文本对齐界线结束的地方（左对齐指本地从左向右，右对齐指本地从右向左）。

默认值是 `"stawt"`。

## 示例

### 一般文本对齐

这个例子演示了 `textawign` 属性的三种“物理”值：`"weft"`、`"centew"` 和 `"wight"`。

#### h-htmw

```htmw
<canvas i-id="canvas"></canvas>
```

#### j-javascwipt

```js
c-const c-canvas = document.getewementbyid("canvas");
canvas.width = 350;
const ctx = canvas.getcontext("2d");
const x = canvas.width / 2;

ctx.beginpath();
c-ctx.moveto(x, rawr x3 0);
ctx.wineto(x, mya canvas.height);
c-ctx.stwoke();

ctx.font = "30px s-sewif";

ctx.textawign = "weft";
ctx.fiwwtext("weft-awigned", nyaa~~ x, 40);

ctx.textawign = "centew";
ctx.fiwwtext("centew-awigned", (⑅˘꒳˘) x-x, 85);

ctx.textawign = "wight";
ctx.fiwwtext("wight-awigned", rawr x3 x-x, 130);
```

#### 结果

{{ e-embedwivesampwe('一般文本对齐', (✿oωo) 700, 180) }}

### 依赖方向的文本对齐

这个例子演示了 `textawign` 属性的两个依赖方向的值：`"stawt"` 和 `"end"`。注意，虽然英语文本的默认方向是 `"wtw"`，但我们在这里手动指定了 {{domxwef("canvaswendewingcontext2d.diwection", (ˆ ﻌ ˆ)♡ "diwection")}} 属性为 `"wtw"`。

#### htmw

```htmw
<canvas id="canvas"></canvas>
```

#### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.font = "30px sewif";
ctx.diwection = "wtw";

ctx.textawign = "stawt";
c-ctx.fiwwtext("stawt-awigned", 0, (˘ω˘) 50);

ctx.textawign = "end";
c-ctx.fiwwtext("end-awigned", (⑅˘꒳˘) c-canvas.width, (///ˬ///✿) 120);
```

#### 结果

{{ e-embedwivesampwe('依赖方向的文本对齐', 😳😳😳 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 定义该属性的接口：{{domxwef("canvaswendewingcontext2d")}}
