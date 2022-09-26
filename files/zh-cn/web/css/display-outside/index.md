---
title: <display-outside>
slug: Web/CSS/display-outside
---

{{CSSRef}}

The `<display-outside>` keywords specify the element’s outer {{CSSxRef("display")}} type, which is essentially its role in flow layout. These keywords are used as values of the `display` property, and can be used for legacy purposes as a single keyword, or as defined in the Level 3 specification alongside a value from the {{CSSxRef("&lt;display-inside&gt;")}} keywords.

## 语法

`<display-outside>` 的可用值：

- `block`
  - : 这个值会生成一个块级元素盒子，同时在该元素之前和之后打断（换行）。简单来说就是，这个值会将该元素变成[块级元素](/zh-CN/docs/Web/HTML/Block-level_elements)。
- `inline`
  - : 这个值会生成一个行内元素盒子，该元素之前和之后不会打断（换行）。如果空间充足，该元素后的元素将会在同一行显示。简单来说就是，这个值会将该元素变成[行内元素](/zh-CN/docs/Web/HTML/Inline_elements)。
- `run-in` {{Experimental_Inline}}
  - : 这个值生成一个 run-in 盒子。如果其后的兄弟元素是块级盒子，那么这个 run-in 盒子就会以兄弟元素的第一个行内元素盒子的形式存在；如果其后的兄弟元素是行内元素，那么这个 run-in 盒子会变成块级元素。
    run-in 元素的存在形式取决于相邻的元素，如果它的内部存在 block box，那么它会变成块级元素盒子。

> **备注：** Browsers that support the two value syntax, on finding the outer value only, such as when `display: block` or `display: inline` is specified, will set the inner value to `flow`. This will result in expected behavior; for example if you specify an element to be block, you would expect that the children of that element would participate in block and inline normal flow layout.

## 举例

In the following example, span elements (normally displayed as inline elements) are set to `display: block` and so break onto new lines and expand to fill their container in the inline dimension.

### HTML

```html
<span>span 1</span>
<span>span 2</span>
```

### CSS

```css
span {
    display: block;
    border: 1px solid rebeccapurple;
}
```

### Result

{{EmbedLiveSample("Examples", 300, 60)}}

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其它

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Block and Inline layout in Normal Flow](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Formatting Contexts explained](/zh-CN/docs/Web/CSS/CSS_Flow_Layout/Formatting_Contexts_Explained)
