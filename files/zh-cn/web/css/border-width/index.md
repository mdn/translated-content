---
title: border-width
slug: Web/CSS/border-width
l10n:
  sourceCommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{CSSRef}}

**`border-width`** [CSS](/zh-CN/docs/Web/CSS) [简写属性](/zh-CN/docs/Web/CSS/Shorthand_properties)用于设置元素边框的宽度。

{{EmbedInteractiveExample("pages/css/border-width.html")}}

## 构成属性

此属性是以下 CSS 属性的简写：

- [`border-bottom-width`](/zh-CN/docs/Web/CSS/border-bottom-width)
- [`border-left-width`](/zh-CN/docs/Web/CSS/border-left-width)
- [`border-right-width`](/zh-CN/docs/Web/CSS/border-right-width)
- [`border-top-width`](/zh-CN/docs/Web/CSS/border-top-width)

## 语法

```css
/* 关键字值 */
border-width: thin;
border-width: medium;
border-width: thick;

/* <length> 值 */
border-width: 4px;
border-width: 1.2rem;

/* 顶部和底部 | 左侧和右侧 */
border-width: 2px 1.5em;

/* 顶部 | 左侧和右侧 | 底部 */
border-width: 1px 2em 1.5cm;

/* 顶部 | 右侧 | 底部 | 左侧 */
border-width: 1px 2em 0 4rem;

/* 全局值 */
border-width: inherit;
border-width: initial;
border-width: revert;
border-width: revert-layer;
border-width: unset;
```

`border-width` 属性可以通过一个、两个、三个或四个值来指定。

- 当指定**一个**值时，该宽度将应用于**四条边**。
- 当指定**两个**值时，第一个宽度应用于**顶部和底部**，第二个宽度应用于**左侧和右侧**。
- 当指定**三个**值时，第一个宽度应用于**顶部**, 第二个宽度应用于**左侧和右侧**, 第三个宽度应用于**底部**.
- 当指定**四个**值时，这些宽度按照**顶部**、**右侧**、**底部**和**左侧**的顺序（顺时针）进行应用。

### 值

- `<line-width>`

  - : 定义边框的宽度，可以是明确的非负数 {{cssxref("&lt;length&gt;")}} 或关键字。如果是关键字，则必须是以下值之一：

    - `thin`
    - `medium`
    - `thick`

> [!NOTE]
> 由于规范中没有明确定义每个关键字所表示的确切厚度，因此使用其中一个关键字的确切结果取决于具体实现。尽管如此，它们始终遵循 `thin ≤ medium ≤ thick` 这一模式，并且这些值在同一文档中是恒定的。

## 形式定义

{{CSSInfo}}

## 形式语法

{{csssyntax}}

## 示例

### 值与 length 的混合

#### HTML

```html
<p id="one-value">一个值：四边均有 6px 的边框宽度。</p>
<p id="two-values">
  两个不同的值：顶部和底部边框宽 2px，右侧和左侧边框宽 10px。
</p>
<p id="three-values">
  三个不同的值：顶部为 0.3em，底部为 9px，右侧和左侧的宽度为零。
</p>
<p id="four-values">
  四个不同的值：顶部为“thin”，右侧为“medium”，底部为“thick”，左侧为 1em。
</p>
```

#### CSS

```css
#one-value {
  border: ridge #ccc;
  border-width: 6px;
}
#two-values {
  border: solid red;
  border-width: 2px 10px;
}
#three-values {
  border: dotted orange;
  border-width: 0.3em 0 9px;
}
#four-values {
  border: solid lightgreen;
  border-width: thin medium thick 1em;
}
p {
  width: auto;
  margin: 0.25em;
  padding: 0.25em;
}
```

#### 结果

{{ EmbedLiveSample('值与 length 的组合', 320, 320) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 与边框相关的简写属性：{{Cssxref("border")}}、{{Cssxref("border-style")}}、{{Cssxref("border-color")}}
- 与边框宽度相关的属性：{{Cssxref("border-bottom-width")}}、{{Cssxref("border-left-width")}}、{{Cssxref("border-right-width")}}、{{Cssxref("border-top-width")}}
