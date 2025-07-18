---
title: inset()
slug: Web/CSS/basic-shape/inset
l10n:
  sourceCommit: 20315338453f387f8c1f6c20a07766f8f71e8032
---

**`inset()`** [CSS](/zh-CN/docs/Web/CSS) 函数定义了一个矩形，其位于参考框的每一边内侧的指定的距离处。它是用于定义 {{cssxref("&lt;basic-shape&gt;")}} [数据类型](/zh-CN/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)之一的基本形状函数。

{{InteractiveExample("CSS Demo: inset()")}}

```css interactive-example-choice
clip-path: inset(30px);
```

```css interactive-example-choice
clip-path: inset(1rem 2rem 3rem 4rem);
```

```css interactive-example-choice
clip-path: inset(20% 30% round 20px);
```

```css interactive-example-choice
clip-path: inset(4rem 20% round 1rem 2rem 3rem 4rem);
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element"></div>
</section>
```

```css interactive-example
#default-example {
  background: #fe9;
}

#example-element {
  background: linear-gradient(to bottom right, #f52, #05f);
  width: 100%;
  height: 100%;
}
```

## 语法

```css
shape-outside: inset(20px 50px 10px 0 round 50px);
```

### 值

- `<length-percentage>{1,4}`
  - : 当提供了四个参数时，它们分别表示从参考框的上侧、右侧、下侧和左侧向内的偏移量，这些偏移量定义了内嵌矩形边缘的位置。这些参数遵循边距简写的语法，它允许你定义具有一个、两个或四个值的 inset。
- `<border-radius>`
  - : 可选的 [`<border-radius>`](/zh-CN/docs/Web/CSS/border-radius) 参数使用边框半径简写语法为内嵌矩形定义圆角。

## 形式语法

{{csssyntax}}

## 示例

### 基本 inset 示例

在下面的示例中，我们使用了一个 `inset()` 形状来拉取内容覆盖浮动元素。更改偏移值以查看形状如何变化。

{{EmbedGHLiveSample("css-examples/shapes/basic-shape/inset.html", '100%', 800)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 使用该数据类型的属性：{{cssxref("clip-path")}}、{{cssxref("shape-outside")}}
- [CSS 形状](/zh-CN/docs/Web/CSS/CSS_shapes)模块
- [基本形状指南](/zh-CN/docs/Web/CSS/CSS_shapes/Basic_shapes)
