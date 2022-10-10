---
title: '-webkit-line-clamp'
slug: Web/CSS/-webkit-line-clamp
---

{{CSSRef}}

**`-webkit-line-clamp`** CSS 属性 可以把 {{Glossary("块容器")}} 中的内容限制为指定的行数。

它只有在 {{cssxref("display")}} 属性设置成 `-webkit-box` 或者 `-webkit-inline-box` 并且 {{cssxref("-webkit-box-orient")}} 属性设置成 `vertical`时才有效果

在大部分情况下，也需要设置 {{cssxref("overflow")}} 属性为 `hidden`, 否则，里面的内容不会被裁减，并且在内容显示为指定行数后还会显示省略号 (ellipsis ).

当他应用于锚 (anchor) 元素时，截取动作可以发生在文本中间，而不必在末尾。

> **备注：** 此属性在 WebKit 中已经实现，但有一些问题。他是旧标准的一种支持。[CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#propdef--webkit-line-clamp) 规范还定义了一个 {{cssxref("line-clamp")}} 属性，用来代替此属性且避免一些问题。

## 语法

```css
/* Keyword value */
-webkit-line-clamp: none;

/* <integer> values */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* Global values */
-webkit-line-clamp: inherit;
-webkit-line-clamp: initial;
-webkit-line-clamp: unset;
```

- `none`
  - : 这个值表明内容显示不会被限制。
- {{cssxref("integer")}}
  - : 这个值表明内容显示了多少行之后会被限制。必须大于 0.

## 例子

### HTML

```html
<p>
  In this example the <code>-webkit-line-clamp</code> property is set to <code>3</code>, which means the text is clamped after three lines.
  An ellipsis will be shown at the point where the text is clamped.
</p>
```

### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

### 结果

{{EmbedLiveSample("例子", "100%", "100")}}

## 规范

{{Specifications}}

{{cssinfo}}

## 浏览器兼容性

{{Compat}}

## See also

- [Line Clampin’ (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/)
- {{cssxref("line-clamp")}}
