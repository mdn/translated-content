---
title: box-orient
slug: Web/CSS/box-orient
---

{{CSSRef}}{{Non-standard_header}}

这是原始的 css 弹性布局草案的一个属性，已经被最新的标准替代。查看 [flexbox](/zh-CN/docs/Web/CSS/CSS_flexible_box_layout/Using_CSS_flexible_boxes) 了解现行标准。

**`box-orient`** [CSS](/zh-CN/docs/Web/CSS) 属性用来设置一个元素是水平还是垂直布局其内容。

```css
/* Keyword values */
box-orient: horizontal;
box-orient: vertical;
box-orient: inline-axis;
box-orient: block-axis;

/* Global values */
box-orient: inherit;
box-orient: initial;
box-orient: unset;
```

## 语法

`box-orient` 属性值需指定为以下关键字之一。

### 值

- `horizontal`
  - : 盒子水平布局其内容。
- `vertical`
  - : 盒子垂直布局其内容。
- `inline-axis` (HTML)
  - : 盒子沿内联轴展示其子元素。
- `block-axis` (HTML)
  - : 盒子沿块轴展示其子元素。

内联轴和块轴取决于写入模式的关键字，在英语中，分别对应水平和垂直方向。

## 规范

{{CSSInfo}}

## 正式语法

{{CSSSyntax}}

## 示例

### 设置盒子水平布局

在这里，box-orient 属性会将两个 {{HTMLElement("p")}} 段落布局到同一行。

#### HTML

```html
<div class="example">
  <p>I will be to the left of my sibling.</p>
  <p>I will be to the right of my sibling.</p>
</div>
```

#### CSS

```css
div.example {
  display: -moz-box; /* Mozilla */
  display: -webkit-box; /* WebKit */
  display: box; /* As specified */

  /* Children should be oriented vertically */
  -moz-box-orient: horizontal; /* Mozilla */
  -webkit-box-orient: horizontal; /* WebKit */
  box-orient: horizontal; /* As specified */
}
```

#### 结果

{{ EmbedLiveSample('设置盒子水平布局', 600, 50) }}

## 规范

不是任何标准的一部分。

## 浏览器兼容性

{{Compat}}

## 参见

- {{CSSxRef("box-direction")}}
- {{CSSxRef("box-pack")}}
- {{CSSxRef("box-align")}}
- {{CSSxRef("flex-direction")}}
