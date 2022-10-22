---
title: '-moz-outline-radius'
slug: Web/CSS/-moz-outline-radius
---

{{CSSRef}}{{Non-standard_Header}}

在包括 Firefox 在内的 Mozilla 的应用里， **`-moz-outline-radius`** [CSS](/zh-CN/docs/Web/CSS) 属性可以用作给一个元素 {{cssxref("outline")}} 圆角。

```css
/* 一个值 */
-moz-outline-radius: 25px;

/* 两个值 */
-moz-outline-radius: 25px 1em;

/* 三个值 */
-moz-outline-radius: 25px 1em 12%;

/* 四个值 */
-moz-outline-radius: 25px 1em 12% 4mm;

/* 全局值 */
-moz-outline-radius: inherit;
-moz-outline-radius: initial;
-moz-outline-radius: unset;
```

这个属性是以下四个属性的简写：{{cssxref("-moz-outline-radius-topleft")}}、 {{cssxref("-moz-outline-radius-topright")}}、 {{cssxref("-moz-outline-radius-bottomright")}} 和 {{cssxref("-moz-outline-radius-bottomleft")}}。

{{cssinfo}}

## 语法

### 值

> **备注：** 省略的 outlines 和 `<percentage>` 的值与 {{cssxref("border-radius")}}中描述的语法一致。

一个、两个、三个或四个 `<outline-radius>` 的值，代表着以下数值之一：

- {{cssxref("&lt;length&gt;")}}
  - : 可能的值请参考 {{cssxref("&lt;length&gt;")}} 。
- {{cssxref("&lt;percentage&gt;")}}
  - : 一个 {{cssxref("&lt;percentage&gt;")}}；详情请参考 {{cssxref("border-radius")}} 。

- 如果仅有一个值，这个值应用到全部四个角。
- 如果设置了两个值，第一个值应用于左上角个右下角，第二个值应用于右上角和左下角。
- 如果设置了三个值，第一个值应用于左上角，第二个值应用于右上角个左下角，第三个值应用于右下角。
- 如果设置了四个值，第一个值应用于左上角，第二个值应用于右上角，第三个值应用于右下角，第四个值应用于左下角。

### 正式语法

{{csssyntax}}

## 示例

### HTML

```html
<p>This element has a rounded outline!</p>
```

### CSS

```css
p {
  margin: 5px;
  border: 1px solid black;
  outline: dotted red;
  -moz-outline-radius: 12% 1em 25px;
}
```

### 结果

{{EmbedLiveSample('Example')}}

## 备注

- 直至 Firefox 50 之前，`dotted` 或 `dashed` 圆角被渲染为 solid，详见 {{bug("382721")}}
- 未来的 Gecko/Firefox 版本可能完全弃用这个属性。详见 {{bug("593717")}}.

## 规范

这个属性没有在任何 CSS 标准中被定义。

## 浏览器兼容性

{{Compat}}
