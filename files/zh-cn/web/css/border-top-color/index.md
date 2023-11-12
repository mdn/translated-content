---
title: border-top-color
slug: Web/CSS/border-top-color
---

{{CSSRef}}

**`border-top-color`** 属性用以设置某元素顶部 {{cssxref("border")}}的颜色。通常，用{{cssxref("border-color")}} 或 {{cssxref("border-top")}} 设置该颜色更为便捷可取。

{{EmbedInteractiveExample("pages/css/border-top-color.html")}}

## 语法

```css
/* <color> values */
border-top-color: red;
border-top-color: #ffbb00;
border-top-color: rgb(255, 0, 0);
border-top-color: hsla(100%, 50%, 25%, 0.75);
border-top-color: currentColor;
border-top-color: transparent;

/* Global values */
border-top-color: inherit;
border-top-color: initial;
border-top-color: unset;
```

`border-top-color` 属性的值为单值。

### 值

- {{cssxref("&lt;color&gt;")}}
  - : 上边框的颜色。

### 形式语法

{{csssyntax}}

## 示例

### 一个简单的带边框容器

#### HTML

```html
<div class="mybox">
  <p>
    This is a box with a border around it. Note which side of the box is
    <span class="redtext">red</span>.
  </p>
</div>
```

#### CSS

```css
.mybox {
  border: solid 0.3em gold;
  border-top-color: red;
  width: auto;
}

.redtext {
  color: red;
}
```

#### 结果

{{EmbedLiveSample('一个简单的带边框容器')}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## 参见

- The border-related CSS shorthand properties: {{Cssxref("border")}}, {{Cssxref("border-top")}}, and {{Cssxref("border-color")}}.
- The color-related CSS properties for the other borders: {{Cssxref("border-right-color")}}, {{Cssxref("border-bottom-color")}}, and {{Cssxref("border-left-color")}}.
- The other border-related CSS properties applying to the same border: {{cssxref("border-top-style")}} and {{cssxref("border-top-width")}}.
