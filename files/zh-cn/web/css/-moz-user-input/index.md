---
title: "-moz-user-input"
slug: Web/CSS/-moz-user-input
---

{{Non-standard_header}}{{CSSRef}}

在 Mozilla 应用程序中，**`-moz-user-input`** 决定元素是否将接受用户输入。A 类似的属性 **`user-focus`** 是在[CSS3 UI 规范的前身的早期草案](http://www.w3.org/TR/2000/WD-css3-userint-20000216)中提出的，但被工作组拒绝。

{{cssinfo}}

`-moz-user-input` was one of the proposals leading to the proposed CSS 3 {{cssxref("user-input")}} property, which has not yet reached Candidate Recommendation (call for implementations).

For elements that normally take user input, such as a {{HTMLElement("textarea")}}, the initial value of `-moz-user-input` is `enabled`.

## Syntax

```css
/* Keyword values */
-moz-user-input: none;
-moz-user-input: enabled;
-moz-user-input: disabled;

/* Global values */
-moz-user-input: inherit;
-moz-user-input: initial;
-moz-user-input: unset;
```

### Values

- none
  - : The element does not respond to user input, and it does not become {{Cssxref(":active")}}.
- enabled
  - : The element accepts user input. For textboxes, this is the default behavior.
- disabled
  - : The element does not accept user input. However, this is not the same as setting `disabled` to true, in that the element is drawn normally.

### Formal syntax

{{csssyntax}}

## Examples

```css
input.example {
  /* the user will be able to select the text, but not change it. */
  -moz-user-input: disabled;
}
```

## See also

- {{cssxref("-moz-user-focus")}}
- {{cssxref("-moz-user-modify")}}
- {{cssxref("-moz-user-select")}}
