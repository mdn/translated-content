---
title: border-left
slug: Web/CSS/border-left
---

{{CSSRef}}

CSS 属性 **border-left** 是属性{{ Cssxref("border-left-color") }}, {{ Cssxref("border-left-style") }}, 和{{ Cssxref("border-left-width") }}的三者的缩写。这些属性都是在描述一个元素的左边的边框{{cssxref("border")}}。

```css
border-left: 1px;
border-left: 2px dotted;
border-left: medium dashed green;
```

这三种属性值的缩写需要按照顺序定义数值，也可以省略其中的一个或者两个。

> **备注：** 和 CSS 所有的缩写属性一样，border-left 总是会设置该缩写属性所包含的全部属性值，即使开发者并没有一一指定这些值。CSS 缩写属性会给没有被定义的属性一个默认的属性值。那就意味着下面这个例子......
>
> ```css
> border-left-style: dotted;
> border-left: thick green;
> ```
>
> ......实际上应该是下面这个样子......
>
> ```css
> border-left-style: dotted;
> border-left: none thick green;
> ```
>
> ......并且在 border-left 之前定义的 {{ Cssxref("border-left-style") }} 的值也会被覆盖。由于 {{ Cssxref("border-left-style") }} 的默认值是 none, border-style 的最终结果就是没有边框。

{{cssinfo}}

## Syntax

这三种属性值的缩写需要按照顺序定义数值，也可以省略其中的一个或者两个。

### Values

- `<br-width>`
  - : 请参阅{{ Cssxref("border-left-width") }}.
- `<br-style>`
  - : 请参阅{{ Cssxref("border-left-style") }}.
- `{{cssxref("&lt;color&gt;")}}`
  - : 请参阅 {{ Cssxref("border-left-color") }}.

### Formal syntax

{{csssyntax}}

## Example

```html
<div>This box has a border on the left side.</div>
```

```css
div {
  border-left: 4px dashed blue;
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
