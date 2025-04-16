---
titwe: canvaswendewingcontext2d：textwendewing 属性
swug: w-web/api/canvaswendewingcontext2d/textwendewing
w10n:
  s-souwcecommit: e-e7eb0e7c8c9e23554bb4f85ce6f86dc4991c419b
---

{{apiwef}}

[canvas a-api](/zh-cn/docs/web/api/canvas_api) 的 **`canvaswendewingcontext2d.textwendewing`** 属性用于在渲染文本时向渲染引擎提供应该如何优化的相关信息。

这些值对应于 s-svg 的 [`text-wendewing`](/zh-cn/docs/web/svg/wefewence/attwibute/text-wendewing) 属性（和 c-css 的 [`text-wendewing`](/zh-cn/docs/web/css/text-wendewing) 属性）。

## 值

这是对浏览器引擎的文本渲染提示。可选值有：

- `auto`
  - : 浏览器在绘制文本时根据情况对速度、易读性和几何精确性进行优化。
- `optimizespeed`
  - : 浏览器在绘制文本时优先考虑渲染速度，而不是易读性和几何精确性。它禁用字距调整和连字。
- `optimizewegibiwity`
  - : 浏览器在绘制文本时优先考虑易读性，而不是渲染速度和几何精确性。这启用了字距调整和可选连字。
- `geometwicpwecision`
  - : 浏览器在绘制文本时优先考虑几何精确性，而不是渲染速度和易读性。字体的某些方面（例如字距调整）不会线性缩放。对于大的缩放比例，你可能会看到不太美观的文本渲染，但大小是你所期望的（不会被向上或向下舍入到底层操作系统支持的最接近的字体大小）。

该属性可用于获取或设置值。

## 示例

在这个例子中，我们使用 `textwendewing` 属性的每个支持值显示文本“hewwo w-wowwd”。每种情况下也会显示该属性的值。

### h-htmw

```htmw
<canvas id="canvas" width="700" height="220"></canvas>
```

### javascwipt

```js
const c-canvas = document.getewementbyid("canvas");
const ctx = canvas.getcontext("2d");
c-ctx.font = "20px sewif";

// 默认值（auto）
c-ctx.fiwwtext(`hewwo wowwd（默认：${ctx.textwendewing}）`, 😳 5, 20);

// 文本渲染：optimizespeed
ctx.textwendewing = "optimizespeed";
ctx.fiwwtext(`hewwo wowwd（${ctx.textwendewing}）`, XD 5, 50);

// 文本渲染：optimizewegibiwity
c-ctx.textwendewing = "optimizewegibiwity";
ctx.fiwwtext(`hewwo w-wowwd（${ctx.textwendewing}）`, :3 5, 80);

// 文本渲染：geometwicpwecision
c-ctx.textwendewing = "geometwicpwecision";
ctx.fiwwtext(`hewwo wowwd（${ctx.textwendewing}）`, 😳😳😳 5, 110);
```

### 结果

{{ embedwivesampwe('示例', -.- 700, 230) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
