---
title: column-width
slug: Web/CSS/column-width
---

{{CSSRef}}

在多列布局中，**`column-width`** [CSS](/zh-CN/docs/Web/CSS) 属性可以设置合适的列宽。容器会被尽可能多的列填充，其中，列的宽度不小于 `column-width` 值。如果容器的宽度比指定的值小，那么单列的宽度比会声明的 `column-width` 值小。

{{EmbedInteractiveExample("pages/css/column-width.html")}}

此属性可以创建响应式设计，帮助你适配不同的屏幕尺寸，特别是在存在 {{cssxref("column-count")}} 属性（具有优先级）的情况下，为了得到精确的列宽，你必须指定所有相关的长度，在水平文本中，需要指定 {{cssxref('width')}}、`column-width`、{{cssxref('column-gap')}} 和 {{cssxref('column-rule-width')}}。

## 语法

```css
/* 关键字值 */
column-width: auto;

/* 长度值 */
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

### 取值

- {{cssxref("&lt;length&gt;")}}
  - ：表示最合适的列宽。实际的列宽可能与指定值存在很大差别：必要时，它可能会更宽，以填充可用空间，当可用空间太小时，列宽则会变窄。该值必须严格为正，否则声明无效。百分比值也无效。
- `auto`
  - ：列的宽度由其它 CSS 属性决定，例如 {{cssxref("column-count")}}。

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

{{EmbedLiveSample('Setting_column_width_in_pixels', 'auto', 160)}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## 参见

- [学习：多列布局](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout) (学习布局)
- [多列布局基础概念](/zh-CN/docs/Web/CSS/CSS_multicol_layout/Basic_concepts)
