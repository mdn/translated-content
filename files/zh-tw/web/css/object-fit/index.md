---
title: object-fit
slug: Web/CSS/object-fit
---

{{CSSRef}}

The **`object-fit`** CSS property specifies how the contents of a replaced element should be fitted to the box established by its used height and width.

物件契合(**`object-fit)`**CSS 屬性能指定置換元素(replaced element)的內容要如何契合、安裝到其使用的高度和寬度已確定的框。

{{cssinfo}}

## Syntax

```css
/* Keyword values */
object-fit: fill;
object-fit: contain;
object-fit: cover;
object-fit: none;
object-fit: scale-down;

/* Global values */
object-fit: inherit;
object-fit: initial;
object-fit: unset;
```

### Values

- `fill`
  - : The replaced content is sized to fill the element’s content box: the object’s concrete object size is the element’s used width and height.
- `contain`
  - : The replaced content is sized to maintain its aspect ratio while fitting within the element’s content box: its concrete object size is resolved as a contain constraint against the element’s used width and height.
- `cover`
  - : The replaced content is sized to maintain its aspect ratio while filling the element’s entire content box: its concrete object size is resolved as a cover constraint against the element’s used width and height.
- `none`
  - : The replaced content is not resized to fit inside the element’s content box: the object’s concrete object size is determined using the default sizing algorithm with no specified size, and a default object size equal to the replaced element’s used width and height.
- `scale-down`
  - : The content is sized as if `none` or `contain` were specified, whichever would result in a smaller concrete object size.

### Formal syntax

{{csssyntax}}

## Example

### HTML Content

```html
<div>
  <h2>object-fit: fill</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="fill"/>

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="fill narrow"/>

  <h2>object-fit: contain</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="contain"/>

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="contain narrow"/>

  <h2>object-fit: cover</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="cover"/>

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="cover narrow"/>

  <h2>object-fit: none</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="none"/>

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="none narrow"/>

  <h2>object-fit: scale-down</h2>
  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="scale-down"/>

  <img src="mdn_logo_only_color.png" alt="MDN Logo" class="scale-down narrow"/>

</div>
```

### CSS Content

```css
h2 {
  font-family: Courier New, monospace;
  font-size: 1em;
  margin: 1em 0 0.3em;
}

div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  height: 940px;
}

img {
  width: 150px;
  height: 100px;
  border: 1px solid #000;
}

.narrow {
  width: 100px;
  height: 150px;
  margin-top: 10px;
}

.fill {
  object-fit: fill;
}

.contain {
  object-fit: contain;
}

.cover {
  object-fit: cover;
}

.none {
  object-fit: none;
}

.scale-down {
  object-fit: scale-down;
}
```

### Output

{{ EmbedLiveSample('Example', 500, 450) }}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- Other image-related CSS properties: {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}.
