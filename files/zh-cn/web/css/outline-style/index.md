---
title: outline-style
slug: Web/CSS/outline-style
---

{{CSSRef}}

## 概要

**`outline-style`** CSS 属性被用于设置一个元素轮廓的样式。

元素轮廓是绘制于元素周围的一条线，位于{{cssxref("border")}}的外围，使元素突出

大多时候使用{{cssxref("outline")}}而不是 `outline-style`, `outline-width` 和 `outline-color` 会更方便。

{{cssinfo}}

## 语法

```css
/* 关键字 值 */
outline-style: auto;
outline-style: none;
outline-style: dotted;
outline-style: dashed;
outline-style: solid;
outline-style: double;
outline-style: groove;
outline-style: ridge;
outline-style: inset;
outline-style: outset;

/* 全局 值*/
outline-style: inherit;
outline-style: initial;
outline-style: unset;
```

## 取值

`<br-style>` 可为以下这些值：

- none
  - : 无轮廓 ({{Cssxref("outline-width")}} 为 `0`).
- dotted
  - : 轮廓为一系列点。
- dashed
  - : 轮廓为一系列短线。
- solid
  - : 轮廓为实线。
- double
  - : 轮廓为两根有空隙的线。{{Cssxref("outline-width")}} 为线与空间的总和。
- groove
  - : 轮廓呈凹下状。
- ridge
  - : 与 `groove` 相反：轮廓呈凸起状。
- inset
  - : 轮廓呈嵌入状。
- outset
  - : 与 `inset` 相反：轮廓呈突出状。

### 正式语法

{{csssyntax}}

## 示例

### `dotted` 和 `dashed`

#### HTML

```html
<div>
  <div class="dotted">
    <p class="dashed">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.dotted {
  outline-style: dotted; /* 于 "outline: dotted"等价 */
}
.dashed {
  outline-style: dashed;
}

/* 让效果更清楚 */
* {
  outline-width: 10px;
  padding: 15px;
}
```

{{ EmbedLiveSample('dotted 和 dashed') }}

### `solid` 和 `double`

#### HTML

```html
<div>
  <div class="solid">
    <p class="double">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.solid {
  outline-style: solid;
}
.double {
  outline-style: double;
}

/* 让效果更清楚 */
* {
  outline-width: 10px;
  padding: 15px;
}
```

{{ EmbedLiveSample('solid 和 double') }}

### `groove` 和 `ridge`

#### HTML

```html
<div>
  <div class="groove">
    <p class="ridge">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.groove {
  outline-style: groove;
}
.ridge {
  outline-style: ridge;
}

/* 让效果更清楚 */
* {
  outline-width: 10px;
  padding: 15px;
}
```

{{ EmbedLiveSample('groove 和 ridge') }}

### `inset` 和 `outset`

#### HTML

```html
<div>
  <div class="inset">
    <p class="outset">Outline Demo</p>
  </div>
</div>
```

#### CSS

```css
.inset {
  outline-style: inset;
}
.outset {
  outline-style: outset;
}

/* 让效果更清楚 */
* {
  outline-width: 10px;
  padding: 15px;
}
```

{{ EmbedLiveSample('inset 和 outset') }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
