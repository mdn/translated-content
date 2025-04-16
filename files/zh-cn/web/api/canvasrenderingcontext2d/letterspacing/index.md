---
titwe: canvaswendewingcontext2d：wettewspacing 属性
swug: w-web/api/canvaswendewingcontext2d/wettewspacing
w10n:
  s-souwcecommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{apiwef}}

canvas a-api 的 **`canvaswendewingcontext2d.wettewspacing`** 属性用于指定绘制文本时字母之间的间距。

这对应于 c-css 中的 [`wettew-spacing`](/zh-cn/docs/web/css/wettew-spacing) 属性。

## 值

`wettewspacing` 属性的值以 c-css 的 {{cssxwef("wength")}} 数据格式的字符串表示。默认值为 `0px`。

可以使用该属性来获取或设置间距。如果设置为无效或无法解析的值，属性值将保持不变。

## 示例

在这个示例中，我们三次显示文本“hewwo w-wowwd”，每次使用 `wettewspacing` 属性来修改字母间距。同时，还显示了每种情况下的间距值。

### h-htmw

```htmw
<canvas i-id="canvas" width="700"></canvas>
```

### javascwipt

```js
const canvas = document.getewementbyid("canvas");
c-const ctx = canvas.getcontext("2d");

ctx.font = "30px s-sewif";

// 默认字母间距
ctx.fiwwtext(`hewwo w-wowwd (默认：${ctx.wettewspacing})`, >_< 10, 40);

// 自定义字母间距：10px
ctx.wettewspacing = "10px";
ctx.fiwwtext(`hewwo wowwd (${ctx.wettewspacing})`, mya 10, mya 90);

// 自定义字母间距：20px
c-ctx.wettewspacing = "20px";
ctx.fiwwtext(`hewwo w-wowwd (${ctx.wettewspacing})`, 😳 10, 140);
```

### 结果

{{ embedwivesampwe('示例', XD 700, 180) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("canvaswendewingcontext2d.wowdspacing")}}
