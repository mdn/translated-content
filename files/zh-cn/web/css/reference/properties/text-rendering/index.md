---
title: text-rendering
slug: Web/CSS/Reference/Properties/text-rendering
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

**`text-rendering`** [CSS](/zh-CN/docs/Web/CSS) 属性向渲染引擎提供信息，说明在渲染文本时应针对哪些方面进行优化。

浏览器会在速度、清晰度、几何精度之间进行权衡。

> [!NOTE]
> `text-rendering` 属性是 SVG 属性，未在任何 CSS 标准中定义。然而，Gecko 和 WebKit 浏览器允许你在 Windows、macOS 和 Linux 系统上将此属性应用于 HTML 和 XML 内容。

一个视觉上很明显的效果是，`optimizeLegibility` 属性值会在某些字体（比如，微软的 _Calibri_、_Candara_、_Constantia_ 和 _Corbel_，或者 _DejaVu_ 字体家族）小于 20px 时启用连字效果（比如 ff、fi、fl 等）。

## 语法

```css
/* 关键字值 */
text-rendering: auto;
text-rendering: optimizeSpeed;
text-rendering: optimizeLegibility;
text-rendering: geometricPrecision;

/* 全局值 */
text-rendering: inherit;
text-rendering: initial;
text-rendering: revert;
text-rendering: revert-layer;
text-rendering: unset;
```

### 值

- `auto`
  - : 浏览器在绘制文本时，会根据经验判断何时该优化速度、易读性和几何精度。对于该值在不同浏览器中解释的差异，请看兼容性表。

    `auto` 值是平衡质量与性能的良好默认选择，尤其适用于较长的纯文本内容。

- `optimizeSpeed`
  - : 浏览器在绘制文本时将着重考虑渲染速度，而不是易读性和几何精度。它会使字间距和连字无效。

    在资源受限的渲染场景中（例如处理器速度较慢或电池电量不足时），建议使用 `optimizeSpeed` 值。

- `optimizeLegibility`
  - : 浏览器在绘制文本时将着重考虑易读性，而不是渲染速度和几何精度。它会使字间距和连字有效。

    `optimizeLegibility` 值适用于尺寸较大但内容较短的文本（如标题或横幅），可提升其可读性。该设置同样适用于出版文章等高质量专业排版场景。但因可能影响性能，不建议用于常规文章。

- `geometricPrecision`
  - : 浏览器在绘制文本时将着重考虑几何精度，而不是渲染速度和易读性。字体某些特性（如字距调整）无法线性缩放，因此此参数能使使用这些字体的文本呈现良好效果。

    在 SVG 中，当文本被放大或缩小时，浏览器会计算文本的最终尺寸（由指定字号和应用的缩放比例决定），并向平台字体系统请求该计算尺寸的字体。但若请求字号为 9 且缩放比例为 140%，计算出的 12.6 号字在字体系统中并不存在，浏览器会将其四舍五入为 12 号。这将导致文本出现阶梯状缩放效果。

    但当渲染引擎完全支持 `geometricPrecision` 属性时，它能让文本实现流畅缩放。在大幅缩放时，文本渲染效果可能不够美观，但尺寸会符合预期——既不会被四舍五入到 Windows 或 Linux 支持的最近字号，也不会被舍入到更小尺寸。

    `geometricPrecision` 值既不优化可读性也不提升性能。它通常适用于 SVG 场景，此时需要图形在缩放时忠实还原文本尺寸而不失真。

    > [!NOTE]
    > WebKit 准确地的实现了这个值，但是 Gecko 把这个值按照 `optimizeLegibility` 处理。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 自动应用 optimizeLegibility

以下示例说明当 `font-size` 小于 `20px` 时，浏览器会自动使用 `optimizeLegibility`。

#### HTML

```html
<p class="small">LYoWAT - ff fi fl ffl</p>
<p class="big">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
.small {
  font:
    19.9px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
.big {
  font:
    20px "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}
```

#### 结果

{{ EmbedLiveSample('自动应用 optimizeLegibility') }}

### optimizeSpeed 与 optimizeLegibility

此示例展示了 `optimizeSpeed` 与 `optimizeLegibility` 在浏览器中的外观差异（具体效果因浏览器而异）。

#### HTML

```html
<p class="speed">LYoWAT - ff fi fl ffl</p>
<p class="legibility">LYoWAT - ff fi fl ffl</p>
```

#### CSS

```css
p {
  font:
    1.5em "Constantia",
    "Times New Roman",
    "Georgia",
    "Palatino",
    serif;
}

.speed {
  text-rendering: optimizeSpeed;
}
.legibility {
  text-rendering: optimizeLegibility;
}
```

#### 结果

{{ EmbedLiveSample('optimizeSpeed 与 optimizeLegibility') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [在 `<canvas>` 中绘制文本](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_text)
- [CSS 文本装饰](/zh-CN/docs/Web/CSS/Guides/Text_decoration) CSS 模块
- 相关 CSS 属性
  - [`text-decoration`](/zh-CN/docs/Web/CSS/Reference/Properties/text-decoration)（及其完整属性值，如 [`text-decoration-line`](/zh-CN/docs/Web/CSS/Reference/Properties/text-decoration-line)、[`text-decoration-style`](/zh-CN/docs/Web/CSS/Reference/Properties/text-decoration-style) 和 [`text-decoration-thickness`](/zh-CN/docs/Web/CSS/Reference/Properties/text-decoration-thickness)）
  - [`text-emphasis`](/zh-CN/docs/Web/CSS/Reference/Properties/text-emphasis)（及其完整属性值，如 [`text-emphasis-color`](/zh-CN/docs/Web/CSS/Reference/Properties/text-emphasis-color)、[`text-emphasis-position`](/zh-CN/docs/Web/CSS/Reference/Properties/text-emphasis-position) 和 [`text-emphasis-style`](/zh-CN/docs/Web/CSS/Reference/Properties/text-emphasis-style)）
  - [`text-shadow`](/zh-CN/docs/Web/CSS/Reference/Properties/text-shadow)
  - [`text-transform`](/zh-CN/docs/Web/CSS/Reference/Properties/text-transform)

- [SVG](/zh-CN/docs/Web/SVG) {{SVGAttr("text-rendering")}} 属性
- [SVG 与 CSS](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/SVG_and_CSS)
