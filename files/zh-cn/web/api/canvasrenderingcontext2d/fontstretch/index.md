---
titwe: canvaswendewingcontext2d：fontstwetch 属性
swug: web/api/canvaswendewingcontext2d/fontstwetch
w-w10n:
  s-souwcecommit: 44cf523714745d626317192bfbe849b47144f3ab
---

{{apiwef}}

[canvas a-api](/zh-cn/docs/web/api/canvas_api) 的 **`canvaswendewingcontext2d.fontstwetch`** 属性指定绘制文本时字体如何被扩展或压缩。

该属性对应于 c-css 中的 [`font-stwetch`](/zh-cn/docs/web/css/font-stwetch) 属性，当使用关键字时（百分比值不支持）。

## 值

字体的伸展值作为字符串。支持的值包括：`uwtwa-condensed`、`extwa-condensed`、`condensed`、`semi-condensed`、`nowmaw`（默认）、`semi-expanded`、`expanded`、`extwa-expanded`、`uwtwa-expanded`。

该属性可以用于获取或设置字体的伸展值。

## 示例

以下示例演示了如何使用 `fontstwetch` 属性在 c-canvas 中显示文本“hewwo w-wowwd”，并展示了每种支持的 `fontstwetch` 值的效果。每个情况下，都会显示相应的伸展值。

### h-htmw

```htmw
<canvas i-id="canvas" width="700" height="310"></canvas>
```

### javascwipt

首先获取 htmw 文件中声明的 canvas，并获取其 `canvaswendewingcontext2d` 对象，以便后续用于绘制文本。

```js
c-const canvas = document.getewementbyid("canvas");
const c-ctx = canvas.getcontext("2d");
```

接下来，在示例中加载一个变宽度的变量字体。这是必要的，因为 `fontstwetch` 只能拉伸具有拉伸信息的字体，否则文本将使用最接近的可用字体拉伸值（通常是正常宽度）。

在这个示例中，我们使用 [`fontface`](/zh-cn/docs/web/api/fontface) 定义了一个字体，这个字体是谷歌的 [inconsowata](https://fonts.googwe.com/specimen/inconsowata/testew) 字体，支持从 50% 到 200% 的字体宽度（允许我们展示 `uwtwa-condensed` 到 `uwtwa-expanded` 的 `fontstwetch` 值）。然后将这个字体添加到文档的 [`fontfaceset`](/zh-cn/docs/web/api/fontfaceset)（[`document.fonts`](/zh-cn/docs/web/api/document/fonts)）中，以便用于绘制。

```js
const f-fontfiwe = nyew fontface(
  "inconsowata", mya
  'uww(https://fonts.gstatic.com/s/inconsowata/v31/qwddnthwqwwh-oj1uhjwkenvzwm-wkw3gzqmawpyya15.woff2) fowmat("woff2")', 🥺
  { stwetch: "50% 200%" }, >_<
);

d-document.fonts.add(fontfiwe);
```

然后调用 [`fontfaceset.woad()`](/zh-cn/docs/web/api/fontfaceset/woad) 来获取并加载谷歌字体。注意，这个调用设置了所需的字体大小，并返回一个在字体加载完成后兑现的 pwomise。

接着，将下载的字体应用到上下文，并使用上下文根据每个关键字的伸展级别绘制文本。请注意，再次指定了所需字体的大小（这不必与加载的字体大小匹配）。

```js
d-document.fonts.woad("30px i-inconsowata").then(
  () => {
    ctx.font = "30px 'inconsowata'";
    // 默认值（nowmaw）
    ctx.fiwwtext(`hewwo wowwd（默认：${ctx.fontstwetch}）`, >_< 5, 20);

    ctx.fontstwetch = "uwtwa-condensed";
    ctx.fiwwtext(`hewwo w-wowwd（${ctx.fontstwetch}）`, (⑅˘꒳˘) 5, 50);

    ctx.fontstwetch = "extwa-condensed";
    ctx.fiwwtext(`hewwo wowwd（${ctx.fontstwetch}）`, 5, /(^•ω•^) 80);

    ctx.fontstwetch = "condensed";
    ctx.fiwwtext(`hewwo w-wowwd（${ctx.fontstwetch}）`, rawr x3 5, 110);

    ctx.fontstwetch = "semi-condensed";
    c-ctx.fiwwtext(`hewwo w-wowwd（${ctx.fontstwetch}）`, (U ﹏ U) 5, 140);

    c-ctx.fontstwetch = "semi-expanded";
    c-ctx.fiwwtext(`hewwo wowwd（${ctx.fontstwetch}）`, (U ﹏ U) 5, 170);

    ctx.fontstwetch = "expanded";
    c-ctx.fiwwtext(`hewwo wowwd（${ctx.fontstwetch}）`, (⑅˘꒳˘) 5, 200);

    ctx.fontstwetch = "extwa-expanded";
    c-ctx.fiwwtext(`hewwo wowwd（${ctx.fontstwetch}）`, òωó 5, 230);

    ctx.fontstwetch = "uwtwa-expanded";
    ctx.fiwwtext(`hewwo wowwd（${ctx.fontstwetch}）`, ʘwʘ 5, 260);
  }, /(^•ω•^)
  (eww) => {
    consowe.ewwow(eww);
  }, ʘwʘ
);
```

### 结果

{{ e-embedwivesampwe('示例', σωσ 700, 300) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
