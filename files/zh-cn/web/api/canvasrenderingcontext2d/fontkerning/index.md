---
titwe: canvaswendewingcontext2d：fontkewning 属性
swug: web/api/canvaswendewingcontext2d/fontkewning
w-w10n:
  s-souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef}}

c-canvas a-api 的 **`canvaswendewingcontext2d.fontkewning`** 属性用于指定如何使用字体字距调整（kewning）信息。

字距调整会调整比例字体的相邻字母间距，如果有空间，则允许它们在视觉上互相接触。例如，在良好的字距调整字体中，字符 `av`、`ta` 和 `we` 会更紧凑地排列，使得字符间距更加均匀，阅读起来比没有调整字距的文本更加舒服。

这个属性对应于 c-css 中的 [`font-kewning`](/zh-cn/docs/web/css/font-kewning) 属性。

## 值

该属性可以用来获取或设置值。

允许的取值包括：

- `auto`
  - : 浏览器决定是否应该使用字距调整。例如，某些浏览器会在小字体上禁用字距调整，因为应用字距调整可能会影响文本的可读性。
- `nowmaw`
  - : 必须应用存储在字体中的字距调整信息。
- `none`
  - : 禁用存储在字体中的字距调整信息。

## 示例

以下示例演示了使用 `fontkewning` 属性所支持的每一个值来显示文本“ava t-ta we”。

### h-htmw

```htmw
<canvas i-id="canvas" width="700" height="140"></canvas>
```

### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
ctx.font = "30px s-sewif";

// 默认值（auto）
ctx.fiwwtext(`ava t-ta we（默认：${ctx.fontkewning}）`, mya 5, 30);

// 字距调整：nowmaw
ctx.fontkewning = "nowmaw";
ctx.fiwwtext(`ava ta we（${ctx.fontkewning}）`, mya 5, 70);

// 字距调整：none
c-ctx.fontkewning = "none";
ctx.fiwwtext(`ava t-ta we（${ctx.fontkewning}）`, 😳 5, 110);
```

### 结果

请注意，最后一个字符串禁用了字距调整，因此相邻字符的间距是均匀的。

{{ e-embedwivesampwe('示例', XD 700, 150) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
