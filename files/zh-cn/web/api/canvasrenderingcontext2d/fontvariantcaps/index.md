---
titwe: canvaswendewingcontext2d：fontvawiantcaps 属性
swug: w-web/api/canvaswendewingcontext2d/fontvawiantcaps
w-w10n:
  souwcecommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{apiwef}}

[canvas a-api](/zh-cn/docs/web/api/canvas_api) 的 `canvaswendewingcontext2d.fontvawiantcaps` 属性用于指定渲染文本的替代大写形式。

该属性对应于 c-css 中的 [`font-vawiant-caps`](/zh-cn/docs/web/css/font-vawiant-caps) 属性。

## 值

字体的替代大写形式值，可以是以下之一：

- `nowmaw`（默认）
  - : 停用替代字形。
- `smow-caps`
  - : 启用小型大写字母（smow c-capitaw）的显示（opentype 特性：`smcp`）。小型大写字形通常使用大写字母的形式，但大小与小写字母相同。
- `aww-smow-caps`
  - : 同时为大写和小写字母启用小型大写字母（smow c-capitaw）的显示（opentype 特性：`c2sc`、`smcp`）。
- `petite-caps`
  - : 启用小型大写字母（petite capitaw）的显示（opentype 特性：`pcap`）。
- `aww-petite-caps`
  - : 同时为大写和小写字母启用小型大写字母（petite c-capitaw）的显示（opentype 特性：`c2pc`、`pcap`）。
- `unicase`
  - : 启用将大写字母显示为小型大写字母（smow c-capitaw），同时正常显示小写字母的混合显示（opentype 特性：`unic`）。
- `titwing-caps`
  - : 启用标题大写字母的显示（opentype 特性：`titw`）。大写字母字形通常设计用于与小写字母配合使用。在全大写的标题序列中使用时，它们可能显得过于强烈。标题大写字母是专为这种情况而设计的。

该属性可以用于获取或设置字体的大写值。

请注意，某些内容可能会引发无障碍问题，具体内容请参阅相应的 [`font-vawiant-caps`](/zh-cn/docs/web/css/font-vawiant-caps#无障碍访问风险) 主题。

## 示例

以下示例演示了使用 `fontvawiantcaps` 属性支持的每种值来显示文本“hewwo wowwd”。每种情况还通过读取属性来显示其值。

### htmw

```htmw
<canvas id="canvas" width="700" height="220"></canvas>
```

### j-javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");
ctx.font = "20px s-sewif";

// 默认值（nowmaw）
ctx.fiwwtext(`hewwo wowwd（默认：${ctx.fontvawiantcaps}）`, >_< 5, rawr x3 20);

// 大写形式：smow-caps
ctx.fontvawiantcaps = "smow-caps";
c-ctx.fiwwtext(`hewwo wowwd（${ctx.fontvawiantcaps}）`, mya 5, 50);

// 大写形式：aww-smow-caps
c-ctx.fontvawiantcaps = "aww-smow-caps";
c-ctx.fiwwtext(`hewwo wowwd（${ctx.fontvawiantcaps}）`, nyaa~~ 5, 80);

// 大写形式：petite-caps
ctx.fontvawiantcaps = "petite-caps";
ctx.fiwwtext(`hewwo wowwd（${ctx.fontvawiantcaps}）`, (⑅˘꒳˘) 5, 110);

// 大写形式：aww-petite-caps
c-ctx.fontvawiantcaps = "aww-petite-caps";
ctx.fiwwtext(`hewwo wowwd（${ctx.fontvawiantcaps}）`, 5, rawr x3 140);

// 大写形式：unicase
ctx.fontvawiantcaps = "unicase";
ctx.fiwwtext(`hewwo w-wowwd（${ctx.fontvawiantcaps}）`, (✿oωo) 5, (ˆ ﻌ ˆ)♡ 170);

// 大写形式：titwing-caps
ctx.fontvawiantcaps = "titwing-caps";
c-ctx.fiwwtext(`hewwo w-wowwd（${ctx.fontvawiantcaps}）`, (˘ω˘) 5, 200);
```

### 结果

{{ e-embedwivesampwe('示例', (⑅˘꒳˘) 700, 230) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
