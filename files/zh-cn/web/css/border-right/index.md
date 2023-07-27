---
title: border-right
slug: Web/CSS/border-right
---

{{CSSRef}}

CSS 属性 **border-`right`** 是属性{{ Cssxref("border-right-color") }}, {{ Cssxref("border-right-style") }}, 和{{ Cssxref("border-right-width") }}的三者的缩写。这些属性都是在描述一个元素的右边的边框[`border`](/zh-CN/docs/Web/CSS/border)。

```css
border-right: 1px;
border-right: 2px dotted;
border-right: medium dashed green;
```

> **备注：** 和 CSS 所有的缩写属性一样，border-`right` 总是会设置该缩写属性所包含的全部属性值，即使开发者并没有一一指定这些值。CSS 缩写属性会给没有被定义的属性一个默认的属性值。那就意味着下面这个例子......
>
> ```css
> border-right-style: dotted;
> border-right: thick green;
> ```
>
> ......实际上应该是下面这个样子......
>
> ```css
> border-right-style: dotted;
> border-right: none thick green;
> ```
>
> ......并且在 border-`right` 之前定义的 {{ Cssxref("border-right-style") }} 的值也会被覆盖。由于{{ Cssxref("border-right-style") }} 的默认值是 none, border-style 的最终结果就是没有边框。

{{cssinfo}}

## Syntax

这三种属性值的缩写需要按照顺序定义数值，也可以省略其中的一个或者两个。

### Values

- `<br-width>`
  - : 请参阅 {{ Cssxref("border-right-width") }}.
- `<br-style>`
  - : 请参阅 {{ Cssxref("border-right-style") }}.
- `{{cssxref("&lt;color&gt;")}}`
  - : 请参阅 {{ Cssxref("border-right-color") }}.

### Formal syntax

{{csssyntax}}

## Example

```html
<div>This box has a border on the right side.</div>
```

```css
div {
  border-right: 4px dashed blue;
  background-color: gold;
  height: 100px;
  width: 100px;
  font-weight: bold;
  text-align: center;
}
```

{{ EmbedLiveSample('Example') }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}
