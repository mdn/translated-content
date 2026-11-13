---
title: column-width
slug: Web/CSS/Reference/Properties/column-width
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

**`column-width`** [CSS](/zh-CN/docs/Web/CSS) 属性用于设置多列布局中的理想列宽。容器会被尽可能多的列填充，其中，列的宽度不小于 `column-width` 值。如果容器的宽度比指定的值小，那么单列的宽度比会声明的列宽小。

{{InteractiveExample("CSS Demo: column-width")}}

```css interactive-example-choice
column-width: auto;
```

```css interactive-example-choice
column-width: 6rem;
```

```css interactive-example-choice
column-width: 120px;
```

```css interactive-example-choice
column-width: 18ch;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">
    London. Michaelmas term lately over, and the Lord Chancellor sitting in
    Lincoln's Inn Hall. Implacable November weather. As much mud in the streets
    as if the waters had but newly retired from the face of the earth, and it
    would not be wonderful to meet a Megalosaurus, forty feet long or so,
    waddling like an elephantine lizard up Holborn Hill.
  </p>
</section>
```

```css interactive-example
#example-element {
  width: 100%;
  columns: auto;
  text-align: left;
}
```

此属性可以创建响应式设计，帮助你适配不同的屏幕尺寸。特别是在存在 {{cssxref("column-count")}} 属性（具有高优先级）的情况下，为了得到精确的列宽，你必须指定所有相关的长度。在水平文本中，需要指定 {{cssxref('width')}}、`column-width`、{{cssxref('column-gap')}} 和 {{cssxref('column-rule-width')}}。

## 语法

```css
/* 关键字值 */
column-width: auto;

/* <length> 值 */
column-width: 60px;
column-width: 15.5em;
column-width: 3.3vw;

/* 全局值 */
column-width: inherit;
column-width: initial;
column-width: revert;
column-width: revert-layer;
column-width: unset;
```

`column-width` 属性可以指定为下面列出的值。

### 值

- {{cssxref("&lt;length&gt;")}}
  - : 表示最合适的列宽。实际的列宽可能与指定值存在很大差别：它可能会更宽以填充可用空间，当可用空间太小时则会变窄。该值必须严格为正，否则声明无效。百分比值也无效。
- `auto`
  - : 列的宽度由其它 CSS 属性（例如 {{cssxref("column-count")}}）决定。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 实例

### 使用像素设置列宽

#### HTML

```html
<p class="content-box">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
  enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis
  nisl ut aliquip ex ea commodo consequat.
</p>
```

#### CSS

```css
.content-box {
  column-width: 100px;
}
```

#### 结果

{{EmbedLiveSample('使用像素设置列宽', 'auto', 160)}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [学习：多列布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)（学习布局）
- [多列布局基础概念](/zh-CN/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
