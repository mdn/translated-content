---
title: overscroll-behavior
slug: Web/CSS/overscroll-behavior
translation_of: Web/CSS/overscroll-behavior
---
{{CSSRef}}

The **`overscroll-behavior`** CSS property sets what a browser does when reaching the boundary of a scrolling area. It's a shorthand for {{cssxref("overscroll-behavior-x")}} and {{cssxref("overscroll-behavior-y")}}.

```css
/* Keyword values */
overscroll-behavior: auto; /* default */
overscroll-behavior: contain;
overscroll-behavior: none;

/* Two values */
overscroll-behavior: auto contain;

/* Global values */
overflow: inherit;
overflow: initial;
overflow: unset;
```

By default, mobile browsers tend to provide a "bounce" effect or even a page refresh when the top or bottom of a page (or other scroll area) is reached. You may also have noticed that when you have a dialog box with scrolling content on top of a page of scrolling content, once the dialog box's scroll boundary is reached, the underlying page will then start to scroll — this is called **scroll chaining**.

In some cases these behaviors are not desirable. you can use `overscroll-behavior` to get rid of unwanted scroll chaining and the browser's Facebook/Twitter app-inspired "pull to refresh"-type behavior.

{{cssinfo}}

## Syntax

The `overscroll-behavior` property is specified as one or two keywords chosen from the list of values below.

Two keywords specifies the `overscroll-behavior` value on the `x` and `y` axes respectively. If only one value is specified, both x and y are assumed to have the same value.

### Values

- `auto`
  - : The default scroll overflow behavior occurs as normal.
- `contain`
  - : Default scroll overflow behavior is observed inside the element this value is set on (e.g. "bounce" effects or refreshes), but no scroll chaining occurs to neighbouring scrolling areas, e.g. underlying elements will not scroll.
- `none`
  - : No scroll chaining occurs to neighbouring scrolling areas, and default scroll overflow behavior is prevented.

### Formal syntax

{{csssyntax}}

## Examples

In our [overscroll-behavior example](https://mdn.github.io/css-examples/overscroll-behavior/) (see the [source code](https://github.com/mdn/css-examples/tree/master/overscroll-behavior) also), we present a full-page list of fake contacts, and a dialog box containing a chat window.

![](https://mdn.mozillademos.org/files/15778/example.png)

Both of these areas scroll; normally if you scrolled the chat window until you hit a scroll boundary, the underlying contacts window would start to scroll too, which is not desirable. This can be stopped using `overscroll-behavior-y` (`overscroll-behavior` would also work) on the chat window, like this:

```css
.messages {
  height: 220px;
  overflow: auto;
  overscroll-behavior-y: contain;
}
```

We also wanted to get rid of the standard overscroll effects when the contacts are scrolled to the top or bottom (e.g. Chrome on Android refreshes the page when you scroll past the top boundary). This can be prevented by setting `overscroll-behavior: none` on the {{htmlelement("body")}} element:

```css
body {
  margin: 0;
  overscroll-behavior: none;
}
```

## Specifications

Until the CSSWG publishes their own draft, the specification can only be found in its [WICG Github Repository](https://wicg.github.io/overscroll-behavior/).

| Specification                                                                                                                | Status                                           | Comment |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | ------- |
| {{SpecName('CSS Overscroll Behavior', '#propdef-overscroll-behavior', 'overscroll-behavior')}} | {{Spec2('CSS Overscroll Behavior')}} |         |

## Browser compatibility

{{Compat("css.properties.overscroll-behavior")}}

## See also

- [Take control of your scroll: customizing pull-to-refresh and overflow effects](https://developers.google.com/web/updates/2017/11/overscroll-behavior#demo)
- {{cssxref("-ms-scroll-chaining")}}
