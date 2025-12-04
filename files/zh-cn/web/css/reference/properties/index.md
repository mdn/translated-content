---
title: CSS 属性
short-title: 属性
slug: Web/CSS/Reference/Properties
l10n:
  sourceCommit: 12b296d2b3937c45b2363f34ed8afadcf00ed166
---

在 [CSS 声明](/zh-CN/docs/Web/CSS/CSS_syntax/Syntax#css_声明) 中，[CSS](/zh-CN/docs/Web/CSS) ***属性***用于设置选中元素某些样式参数的内容。例如，{{CSSxRef("opacity")}} 属性用于设置选中元素的不透明度，从而可以控制该元素后面的内容是否可见：

```css
/* 设置 <img> 元素的不透明度为 0.8 */
img {
  opacity: 0.8;
}
```

每个属性都有一个名称（例如 `opacity`）、一个值（例如 `0.8`）以及在文档渲染时的定义行为。CSS 还定义了简写属性，以便于在单个声明中指定多个相关属性。例如，{{CSSxRef("margin")}} 属性是 {{CSSxRef("margin-top")}}、{{CSSxRef("margin-right")}}、{{CSSxRef("margin-bottom")}} 和 {{CSSxRef("margin-left")}} 的简写属性，用于设置元素四边的外边距：

```css
/* 设置 <img> 元素的外边距为 1rem */
img {
  margin: 1rem;
}
```

## 语法

```css
selector {
  property: value;
}
```

## 属性的字典序索引

CSS 规范定义的标准属性包括以下几种：

### 杂项

- [自定义属性（`--*`）：CSS 变量](/zh-CN/docs/Web/CSS/--*)

### A

- {{CSSxRef("accent-color")}}
- {{CSSxRef("align-content")}}
- {{CSSxRef("align-items")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("alignment-baseline")}}
- {{CSSxRef("all")}}（简写）
- {{CSSxRef("anchor-name")}}
- {{CSSxRef("animation-composition")}}
- {{CSSxRef("animation-delay")}}
- {{CSSxRef("animation-direction")}}
- {{CSSxRef("animation-duration")}}
- {{CSSxRef("animation-fill-mode")}}
- {{CSSxRef("animation-iteration-count")}}
- {{CSSxRef("animation-name")}}
- {{CSSxRef("animation-play-state")}}
- {{CSSxRef("animation-range-end")}}
- {{CSSxRef("animation-range-start")}}
- {{CSSxRef("animation-range")}}（简写）
- {{CSSxRef("animation-timeline")}}
- {{CSSxRef("animation-timing-function")}}
- {{CSSxRef("animation")}}（简写）
- {{CSSxRef("appearance")}}
- {{CSSxRef("aspect-ratio")}}

### B

- {{CSSxRef("backdrop-filter")}}
- {{CSSxRef("backface-visibility")}}
- {{CSSxRef("background-attachment")}}
- {{CSSxRef("background-blend-mode")}}
- {{CSSxRef("background-clip")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("background-image")}}
- {{CSSxRef("background-origin")}}
- {{CSSxRef("background-position-x")}}
- {{CSSxRef("background-position-y")}}
- {{CSSxRef("background-position")}}
- {{CSSxRef("background-repeat")}}
- {{CSSxRef("background-size")}}
- {{CSSxRef("background")}}（简写）
- {{CSSxRef("block-size")}}

### Border-\*

- {{CSSxRef("border-block-color")}}
- {{CSSxRef("border-block-end-color")}}
- {{CSSxRef("border-block-end-style")}}
- {{CSSxRef("border-block-end-width")}}
- {{CSSxRef("border-block-end")}}（简写）
- {{CSSxRef("border-block-start-color")}}
- {{CSSxRef("border-block-start-style")}}
- {{CSSxRef("border-block-start-width")}}
- {{CSSxRef("border-block-start")}}（简写）
- {{CSSxRef("border-block-style")}}
- {{CSSxRef("border-block-width")}}
- {{CSSxRef("border-block")}}（简写）
- {{CSSxRef("border-bottom-color")}}
- {{CSSxRef("border-bottom-left-radius")}}
- {{CSSxRef("border-bottom-right-radius")}}
- {{CSSxRef("border-bottom-style")}}
- {{CSSxRef("border-bottom-width")}}
- {{CSSxRef("border-bottom")}}（简写）
- {{CSSxRef("border-collapse")}}
- {{CSSxRef("border-color")}}（简写）
- {{CSSxRef("border-end-end-radius")}}
- {{CSSxRef("border-end-start-radius")}}
- {{CSSxRef("border-image-outset")}}
- {{CSSxRef("border-image-repeat")}}
- {{CSSxRef("border-image-slice")}}
- {{CSSxRef("border-image-source")}}
- {{CSSxRef("border-image-width")}}
- {{CSSxRef("border-image")}}（简写）
- {{CSSxRef("border-inline-color")}}
- {{CSSxRef("border-inline-end-color")}}
- {{CSSxRef("border-inline-end-style")}}
- {{CSSxRef("border-inline-end-width")}}
- {{CSSxRef("border-inline-end")}}（简写）
- {{CSSxRef("border-inline-start-color")}}
- {{CSSxRef("border-inline-start-style")}}
- {{CSSxRef("border-inline-start-width")}}
- {{CSSxRef("border-inline-start")}}（简写）
- {{CSSxRef("border-inline-style")}}
- {{CSSxRef("border-inline-width")}}
- {{CSSxRef("border-inline")}}（简写）
- {{CSSxRef("border-left-color")}}
- {{CSSxRef("border-left-style")}}
- {{CSSxRef("border-left-width")}}
- {{CSSxRef("border-left")}}（简写）
- {{CSSxRef("border-radius")}}（简写）
- {{CSSxRef("border-right-color")}}
- {{CSSxRef("border-right-style")}}
- {{CSSxRef("border-right-width")}}
- {{CSSxRef("border-right")}}（简写）
- {{CSSxRef("border-spacing")}}
- {{CSSxRef("border-start-end-radius")}}
- {{CSSxRef("border-start-start-radius")}}
- {{CSSxRef("border-style")}}（简写）
- {{CSSxRef("border-top-color")}}
- {{CSSxRef("border-top-left-radius")}}
- {{CSSxRef("border-top-right-radius")}}
- {{CSSxRef("border-top-style")}}
- {{CSSxRef("border-top-width")}}
- {{CSSxRef("border-top")}}（简写）
- {{CSSxRef("border-width")}}（简写）
- {{CSSxRef("border")}}（简写）

### B - C

- {{CSSxRef("bottom")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("box-decoration-break")}}
- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-flex-group")}}
- {{CSSxRef("box-flex")}}
- {{CSSxRef("box-lines")}}
- {{CSSxRef("box-ordinal-group")}}
- {{CSSxRef("box-orient")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-shadow")}}
- {{CSSxRef("box-sizing")}}
- {{CSSxRef("break-after")}}
- {{CSSxRef("break-before")}}
- {{CSSxRef("break-inside")}}
- {{CSSxRef("caption-side")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("caret")}}（简写）
- {{CSSxRef("clear")}}
- {{CSSxRef("clip-path")}}
- {{CSSxRef("clip-rule")}}
- {{CSSxRef("clip")}}
- {{CSSxRef("color-interpolation-filters")}}
- {{CSSxRef("color-interpolation")}}
- {{CSSxRef("color-scheme")}}
- {{CSSxRef("color")}}
- {{CSSxRef("column-count")}}
- {{CSSxRef("column-fill")}}
- {{CSSxRef("column-gap")}}
- {{CSSxRef("column-rule-color")}}
- {{CSSxRef("column-rule-style")}}
- {{CSSxRef("column-rule-width")}}
- {{CSSxRef("column-rule")}}（简写）
- {{CSSxRef("column-span")}}
- {{CSSxRef("column-width")}}
- {{CSSxRef("columns")}}（简写）
- {{CSSxRef("contain-intrinsic-block-size")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("contain-intrinsic-inline-size")}}
- {{CSSxRef("contain-intrinsic-size")}}（简写）
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain")}}
- {{CSSxRef("container-name")}}
- {{CSSxRef("container-type")}}
- {{CSSxRef("container")}}（简写）
- {{CSSxRef("content-visibility")}}
- {{CSSxRef("content")}}
- {{CSSxRef("corner-block-end-shape")}}
- {{CSSxRef("corner-block-start-shape")}}
- {{CSSxRef("corner-bottom-left-shape")}}
- {{CSSxRef("corner-bottom-right-shape")}}
- {{CSSxRef("corner-bottom-shape")}}（简写）
- {{CSSxRef("corner-end-end-shape")}}
- {{CSSxRef("corner-end-start-shape")}}
- {{CSSxRef("corner-inline-end-shape")}}
- {{CSSxRef("corner-inline-start-shape")}}
- {{CSSxRef("corner-left-shape")}}（简写）
- {{CSSxRef("corner-right-shape")}}（简写）
- {{CSSxRef("corner-shape")}}（简写）
- {{CSSxRef("corner-start-end-shape")}}
- {{CSSxRef("corner-start-start-shape")}}
- {{CSSxRef("corner-top-left-shape")}}
- {{CSSxRef("corner-top-right-shape")}}
- {{CSSxRef("corner-top-shape")}}（简写）
- {{CSSxRef("counter-increment")}}
- {{CSSxRef("counter-reset")}}
- {{CSSxRef("counter-set")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("cx")}}
- {{CSSxRef("cy")}}

### D - F

- {{CSSxRef("d")}}
- {{CSSxRef("direction")}}
- {{CSSxRef("display")}}
- {{CSSxRef("dominant-baseline")}}
- {{CSSxRef("dynamic-range-limit")}}
- {{CSSxRef("empty-cells")}}
- {{CSSxRef("field-sizing")}}
- {{CSSxRef("fill-opacity")}}
- {{CSSxRef("fill-rule")}}
- {{CSSxRef("fill")}}
- {{CSSxRef("filter")}}
- {{CSSxRef("flex-basis")}}
- {{CSSxRef("flex-direction")}}
- {{CSSxRef("flex-flow")}}（简写）
- {{CSSxRef("flex-grow")}}
- {{CSSxRef("flex-shrink")}}
- {{CSSxRef("flex-wrap")}}
- {{CSSxRef("flex")}}（简写）
- {{CSSxRef("float")}}
- {{CSSxRef("flood-color")}}
- {{CSSxRef("flood-opacity")}}
- {{CSSxRef("font-family")}}
- {{CSSxRef("font-feature-settings")}}
- {{CSSxRef("font-kerning")}}
- {{CSSxRef("font-language-override")}}
- {{CSSxRef("font-optical-sizing")}}
- {{CSSxRef("font-palette")}}
- {{CSSxRef("font-size-adjust")}}
- {{CSSxRef("font-size")}}
- {{CSSxRef("font-smooth")}}
- {{CSSxRef("font-stretch")}}
- {{CSSxRef("font-style")}}
- {{CSSxRef("font-synthesis-position")}}
- {{CSSxRef("font-synthesis-small-caps")}}
- {{CSSxRef("font-synthesis-style")}}
- {{CSSxRef("font-synthesis-weight")}}
- {{CSSxRef("font-synthesis")}}（简写）
- {{CSSxRef("font-variant-alternates")}}
- {{CSSxRef("font-variant-caps")}}
- {{CSSxRef("font-variant-east-asian")}}
- {{CSSxRef("font-variant-emoji")}}
- {{CSSxRef("font-variant-ligatures")}}
- {{CSSxRef("font-variant-numeric")}}
- {{CSSxRef("font-variant-position")}}
- {{CSSxRef("font-variant")}}（简写）
- {{CSSxRef("font-variation-settings")}}
- {{CSSxRef("font-weight")}}
- {{CSSxRef("font")}}（简写）
- {{CSSxRef("forced-color-adjust")}}

### G - I

- {{CSSxRef("gap")}}（简写）
- {{CSSxRef("grid-area")}}（简写）
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-flow")}}
- {{CSSxRef("grid-auto-rows")}}
- {{CSSxRef("grid-column-end")}}
- {{CSSxRef("grid-column-start")}}
- {{CSSxRef("grid-column")}}（简写）
- {{CSSxRef("grid-row-end")}}
- {{CSSxRef("grid-row-start")}}
- {{CSSxRef("grid-row")}}（简写）
- {{CSSxRef("grid-template-areas")}}
- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-template")}}（简写）
- {{CSSxRef("grid")}}（简写）
- {{CSSxRef("hanging-punctuation")}}
- {{CSSxRef("height")}}
- {{CSSxRef("hyphenate-character")}}
- {{CSSxRef("hyphenate-limit-chars")}}
- {{CSSxRef("hyphens")}}
- {{CSSxRef("image-orientation")}}
- {{CSSxRef("image-rendering")}}
- {{CSSxRef("image-resolution")}}
- {{CSSxRef("initial-letter")}}
- {{CSSxRef("inline-size")}}
- {{CSSxRef("inset-block-end")}}
- {{CSSxRef("inset-block-start")}}
- {{CSSxRef("inset-block")}}（简写）
- {{CSSxRef("inset-block")}}（简写）
- {{CSSxRef("inset-inline-end")}}
- {{CSSxRef("inset-inline-start")}}
- {{CSSxRef("inset-inline")}}（简写）
- {{CSSxRef("inset-inline")}}（简写）
- {{CSSxRef("inset")}}（简写）
- {{CSSxRef("inset")}}（简写）
- {{CSSxRef("interactivity")}}
- {{CSSxRef("interpolate-size")}}
- {{CSSxRef("isolation")}}

### J - M

- {{CSSxRef("justify-content")}}
- {{CSSxRef("justify-items")}}
- {{CSSxRef("justify-self")}}
- {{CSSxRef("left")}}
- {{CSSxRef("letter-spacing")}}
- {{CSSxRef("lighting-color")}}
- {{CSSxRef("line-break")}}
- {{CSSxRef("line-clamp")}}
- {{CSSxRef("line-height-step")}}
- {{CSSxRef("line-height")}}
- {{CSSxRef("list-style-image")}}
- {{CSSxRef("list-style-position")}}
- {{CSSxRef("list-style-type")}}
- {{CSSxRef("list-style")}}（简写）
- {{CSSxRef("list-style")}}（简写）
- {{CSSxRef("margin-block-end")}}
- {{CSSxRef("margin-block-start")}}
- {{CSSxRef("margin-block")}}（简写）
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-inline-end")}}
- {{CSSxRef("margin-inline-start")}}
- {{CSSxRef("margin-inline")}}（简写）
- {{CSSxRef("margin-left")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-trim")}}
- {{CSSxRef("margin")}}（简写）
- {{CSSxRef("marker-end")}}
- {{CSSxRef("marker-mid")}}
- {{CSSxRef("marker-start")}}
- {{CSSxRef("marker")}}
- {{CSSxRef("mask-border-mode")}}
- {{CSSxRef("mask-border-outset")}}
- {{CSSxRef("mask-border-repeat")}}
- {{CSSxRef("mask-border-slice")}}
- {{CSSxRef("mask-border-source")}}
- {{CSSxRef("mask-border-width")}}
- {{CSSxRef("mask-border")}}（简写）
- {{CSSxRef("mask-clip")}}
- {{CSSxRef("mask-composite")}}
- {{CSSxRef("mask-image")}}
- {{CSSxRef("mask-mode")}}
- {{CSSxRef("mask-origin")}}
- {{CSSxRef("mask-position")}}
- {{CSSxRef("mask-repeat")}}
- {{CSSxRef("mask-size")}}
- {{CSSxRef("mask-type")}}
- {{CSSxRef("mask")}}（简写）
- {{CSSxRef("math-depth")}}
- {{CSSxRef("math-shift")}}
- {{CSSxRef("math-style")}}
- {{CSSxRef("max-block-size")}}
- {{CSSxRef("max-height")}}
- {{CSSxRef("max-inline-size")}}
- {{CSSxRef("max-width")}}
- {{CSSxRef("min-block-size")}}
- {{CSSxRef("min-height")}}
- {{CSSxRef("min-inline-size")}}
- {{CSSxRef("min-width")}}
- {{CSSxRef("mix-blend-mode")}}

### O - P

- {{CSSxRef("object-fit")}}
- {{CSSxRef("object-position")}}
- {{CSSxRef("object-view-box")}}
- {{CSSxRef("offset-anchor")}}
- {{CSSxRef("offset-distance")}}
- {{CSSxRef("offset-path")}}
- {{CSSxRef("offset-position")}}
- {{CSSxRef("offset-rotate")}}
- {{CSSxRef("offset")}}（简写）
- {{CSSxRef("opacity")}}
- {{CSSxRef("order")}}
- {{CSSxRef("orphans")}}
- {{CSSxRef("outline-color")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("outline-style")}}
- {{CSSxRef("outline-width")}}
- {{CSSxRef("outline")}}（简写）
- {{CSSxRef("overflow-anchor")}}
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-clip-margin")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-wrap")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("overflow")}}（简写）
- {{CSSxRef("overlay")}}
- {{CSSxRef("overscroll-behavior-block")}}
- {{CSSxRef("overscroll-behavior-inline")}}
- {{CSSxRef("overscroll-behavior-x")}}
- {{CSSxRef("overscroll-behavior-y")}}
- {{CSSxRef("overscroll-behavior")}}（简写）
- {{CSSxRef("padding-block-end")}}
- {{CSSxRef("padding-block-start")}}
- {{CSSxRef("padding-block")}}（简写）
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-inline-end")}}
- {{CSSxRef("padding-inline-start")}}
- {{CSSxRef("padding-inline")}}（简写）
- {{CSSxRef("padding-left")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-top")}}
- {{CSSxRef("padding")}}（简写）
- {{CSSxRef("page-break-after")}}
- {{CSSxRef("page-break-before")}}
- {{CSSxRef("page-break-inside")}}
- {{CSSxRef("page")}}
- {{CSSxRef("paint-order")}}
- {{CSSxRef("perspective-origin")}}
- {{CSSxRef("perspective")}}
- {{CSSxRef("place-content")}}（简写）
- {{CSSxRef("place-items")}}（简写）
- {{CSSxRef("place-self")}}（简写）
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("position-anchor")}}
- {{CSSxRef("position-area")}}
- {{CSSxRef("position-try-fallbacks")}}
- {{CSSxRef("position-try-order")}}
- {{CSSxRef("position-try")}}（简写）
- {{CSSxRef("position-visibility")}}
- {{CSSxRef("position")}}
- {{CSSxRef("print-color-adjust")}}

### Q - S

- {{CSSxRef("quotes")}}
- {{CSSxRef("r")}}
- {{CSSxRef("reading-flow")}}
- {{CSSxRef("reading-order")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("right")}}
- {{CSSxRef("rotate")}}
- {{CSSxRef("row-gap")}}
- {{CSSxRef("ruby-align")}}
- {{CSSxRef("ruby-overhang")}}
- {{CSSxRef("ruby-position")}}
- {{CSSxRef("rx")}}
- {{CSSxRef("ry")}}
- {{CSSxRef("scale")}}
- {{CSSxRef("scroll-behavior")}}
- {{CSSxRef("scroll-margin-block-end")}}
- {{CSSxRef("scroll-margin-block-start")}}
- {{CSSxRef("scroll-margin-block")}}（简写）
- {{CSSxRef("scroll-margin-bottom")}}
- {{CSSxRef("scroll-margin-inline-end")}}
- {{CSSxRef("scroll-margin-inline-start")}}
- {{CSSxRef("scroll-margin-inline")}}（简写）
- {{CSSxRef("scroll-margin-left")}}
- {{CSSxRef("scroll-margin-right")}}
- {{CSSxRef("scroll-margin-top")}}
- {{CSSxRef("scroll-margin")}}（简写）
- {{CSSxRef("scroll-marker-group")}}
- {{CSSxRef("scroll-padding-block-end")}}
- {{CSSxRef("scroll-padding-block-start")}}
- {{CSSxRef("scroll-padding-block")}}（简写）
- {{CSSxRef("scroll-padding-bottom")}}
- {{CSSxRef("scroll-padding-inline-end")}}
- {{CSSxRef("scroll-padding-inline-start")}}
- {{CSSxRef("scroll-padding-inline")}}（简写）
- {{CSSxRef("scroll-padding-left")}}
- {{CSSxRef("scroll-padding-right")}}
- {{CSSxRef("scroll-padding-top")}}
- {{CSSxRef("scroll-padding")}}（简写）
- {{CSSxRef("scroll-snap-align")}}
- {{CSSxRef("scroll-snap-stop")}}
- {{CSSxRef("scroll-snap-type")}}
- {{CSSxRef("scroll-target-group")}}
- {{CSSxRef("scroll-timeline-axis")}}
- {{CSSxRef("scroll-timeline-name")}}
- {{CSSxRef("scroll-timeline")}}（简写）
- {{CSSxRef("scrollbar-color")}}
- {{CSSxRef("scrollbar-gutter")}}
- {{CSSxRef("scrollbar-width")}}
- {{CSSxRef("shape-image-threshold")}}
- {{CSSxRef("shape-margin")}}
- {{CSSxRef("shape-outside")}}
- {{CSSxRef("shape-rendering")}}
- {{CSSxRef("speak-as")}}
- {{CSSxRef("stop-color")}}
- {{CSSxRef("stop-opacity")}}
- {{CSSxRef("stroke-dasharray")}}
- {{CSSxRef("stroke-dashoffset")}}
- {{CSSxRef("stroke-linecap")}}
- {{CSSxRef("stroke-linejoin")}}
- {{CSSxRef("stroke-miterlimit")}}
- {{CSSxRef("stroke-opacity")}}
- {{CSSxRef("stroke-width")}}
- {{CSSxRef("stroke")}}

### T - Z

- {{CSSxRef("tab-size")}}
- {{CSSxRef("table-layout")}}
- {{CSSxRef("text-align-last")}}
- {{CSSxRef("text-align")}}
- {{CSSxRef("text-anchor")}}
- {{CSSxRef("text-autospace")}}
- {{CSSxRef("text-box-edge")}}
- {{CSSxRef("text-box-trim")}}
- {{CSSxRef("text-box")}}（简写）
- {{CSSxRef("text-combine-upright")}}
- {{CSSxRef("text-decoration-color")}}
- {{CSSxRef("text-decoration-inset")}}
- {{CSSxRef("text-decoration-line")}}
- {{CSSxRef("text-decoration-skip-ink")}}
- {{CSSxRef("text-decoration-skip")}}
- {{CSSxRef("text-decoration-style")}}
- {{CSSxRef("text-decoration-thickness")}}
- {{CSSxRef("text-decoration")}}（简写）
- {{CSSxRef("text-emphasis-color")}}
- {{CSSxRef("text-emphasis-position")}}
- {{CSSxRef("text-emphasis-style")}}
- {{CSSxRef("text-emphasis")}}（简写）
- {{CSSxRef("text-indent")}}
- {{CSSxRef("text-justify")}}
- {{CSSxRef("text-orientation")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("text-rendering")}}
- {{CSSxRef("text-shadow")}}
- {{CSSxRef("text-size-adjust")}}
- {{CSSxRef("text-spacing-trim")}}
- {{CSSxRef("text-transform")}}
- {{CSSxRef("text-underline-offset")}}
- {{CSSxRef("text-underline-position")}}
- {{CSSxRef("text-wrap-mode")}}
- {{CSSxRef("text-wrap-style")}}
- {{CSSxRef("text-wrap")}}（简写）
- {{CSSxRef("timeline-scope")}}
- {{CSSxRef("top")}}
- {{CSSxRef("touch-action")}}
- {{CSSxRef("transform-box")}}
- {{CSSxRef("transform-origin")}}
- {{CSSxRef("transform-style")}}
- {{CSSxRef("transform")}}
- {{CSSxRef("transition-behavior")}}
- {{CSSxRef("transition-delay")}}
- {{CSSxRef("transition-duration")}}
- {{CSSxRef("transition-property")}}
- {{CSSxRef("transition-timing-function")}}
- {{CSSxRef("transition")}}（简写）
- {{CSSxRef("translate")}}
- {{CSSxRef("unicode-bidi")}}
- {{CSSxRef("user-modify")}}
- {{CSSxRef("user-select")}}
- {{CSSxRef("vector-effect")}}
- {{CSSxRef("vertical-align")}}
- {{CSSxRef("view-timeline-axis")}}
- {{CSSxRef("view-timeline-inset")}}
- {{CSSxRef("view-timeline-name")}}
- {{CSSxRef("view-timeline")}}（简写）
- {{CSSxRef("view-transition-class")}}
- {{CSSxRef("view-transition-name")}}
- {{CSSxRef("visibility")}}
- {{CSSxRef("white-space-collapse")}}
- {{CSSxRef("white-space")}}
- {{CSSxRef("widows")}}
- {{CSSxRef("width")}}
- {{CSSxRef("will-change")}}
- {{CSSxRef("word-break")}}
- {{CSSxRef("word-spacing")}}
- {{CSSxRef("writing-mode")}}
- {{CSSxRef("x")}}
- {{CSSxRef("y")}}
- {{CSSxRef("z-index")}}
- {{CSSxRef("zoom")}}

### 非标准属性

具有浏览器引擎前缀的非标准属性包括：

#### `-moz-` 前缀

- {{CSSxRef("-moz-float-edge")}}
- {{CSSxRef("-moz-force-broken-image-icon")}}
- {{CSSxRef("-moz-orient")}}
- {{CSSxRef("-moz-user-focus")}}
- {{CSSxRef("-moz-user-input")}}

#### `-webkit-` 前缀

- {{CSSxRef("-webkit-box-reflect")}}
- {{CSSxRef("-webkit-border-before")}}（简写）
- {{CSSxRef("-webkit-mask-box-image")}}（简写）
- {{CSSxRef("-webkit-mask-composite")}}
- {{CSSxRef("-webkit-mask-position-x")}}
- {{CSSxRef("-webkit-mask-position-y")}}
- {{CSSxRef("-webkit-mask-repeat-x")}}
- {{CSSxRef("-webkit-mask-repeat-y")}}
- {{CSSxRef("-webkit-tap-highlight-color")}}
- {{CSSxRef("-webkit-text-fill-color")}}
- {{CSSxRef("-webkit-text-security")}}
- {{CSSxRef("-webkit-text-stroke")}}（简写）
- {{CSSxRef("-webkit-text-stroke-color")}}
- {{CSSxRef("-webkit-text-stroke-width")}}
- {{CSSxRef("-webkit-touch-callout")}}

## 规范

{{Specifications}}

## 参见

- [CSS 语法](/zh-CN/docs/Web/CSS/CSS_syntax/Syntax)
- [伪元素](/zh-CN/docs/Web/CSS/Pseudo-elements)
- [具有 Firefox 浏览器引擎前缀（-moz-）的 CSS 扩展](/zh-CN/docs/Web/CSS/Mozilla_Extensions)
- [具有 WebKit 浏览器引擎前缀（-webkit-）的 CSS 扩展](/zh-CN/docs/Web/CSS/WebKit_Extensions)
- {{Glossary("Vendor prefix", "浏览器引擎前缀")}}
