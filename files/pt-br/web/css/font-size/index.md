---
title: font-size
slug: Web/CSS/font-size
---

{{CSSRef}}

A propriedade **`font-size`** no [CSS](/pt-BR/docs/Web/CSS) estabelece o tamanho da fonte.

Esta propriedade também é usada para computaro tamanho de `em`, `ex`, e outras unidades {{cssxref("&lt;length&gt;")}} relativas.

{{EmbedInteractiveExample("pages/css/font-size.html")}}

## Sintaxe

```css
/* <absolute-size> values */
font-size: xx-small;
font-size: x-small;
font-size: small;
font-size: medium;
font-size: large;
font-size: x-large;
font-size: xx-large;

/* <relative-size> values */
font-size: smaller;
font-size: larger;

/* <length> values */
font-size: 12px;
font-size: 0.8em;

/* <percentage> values */
font-size: 80%;

/* Global values */
font-size: inherit;
font-size: initial;
font-size: unset;
```

The `font-size` property is specified in one of the following ways:

- As one of the [absolute-size](#absolute-size) or [relative-size](#relative-size) keywords
- As a `<length>` or a `<percentage>`, relative to the parent element's font size

### Valores

- `xx-small`, `x-small`, `small`, `medium`, `large`, `x-large`, `xx-large`
  - : Absolute-size keywords, based on the user's default font size (which is `medium`).
- `larger`, `smaller`
  - : Relative-size keywords. The font will be larger or smaller relative to the parent element's font size, roughly by the ratio used to separate the absolute-size keywords above.
- {{cssxref("&lt;length&gt;")}}

  - : A positive {{cssxref("&lt;length&gt;")}} value. For most font-relative units (such as `em` and `ex`), the font size is relative to the parent element's font size.

    For font-relative units that are root-based (such as `rem`), the font size is relative to the size of the font used by the {{HTMLElement("html")}} (root) element.

- {{cssxref("&lt;percentage&gt;")}}
  - : A positive {{cssxref("&lt;percentage&gt;")}} value, relative to the parent element's font size.

> **Nota:** To maximize accessibility, it is generally best to use values that are relative to the user's default font size.

### Formal syntax

{{csssyntax}}

## Possible approaches

There are several ways to specify the font size, including with keywords or numerical values for pixels or ems. Choose the appropriate method based on the needs for the particular web page.

### Keywords

Keywords are a good way to set the size of fonts on the web. By setting a keyword font size on the {{HTMLElement("body")}} element, you can set relative font-sizing everywhere else on the page, giving you the ability to easily scale the font up or down on the entire page accordingly.

### Pixels

Setting the font size in pixel values (`px`) is a good choice when you need pixel accuracy. A px value is static. This is an OS-independent and cross-browser way of literally telling the browsers to render the letters at exactly the number of pixels in height that you specified. The results may vary slightly across browsers, as they may use different algorithms to achieve a similar effect.

Font sizing settings can also be used in combination. For example, if a parent element is set to `16px` and its child element is set to `larger`, the child element displays larger than the parent element in the page.

> **Nota:** Defining font sizes in `px` is _[not accessible](https://en.wikipedia.org/wiki/Web_accessibility)_, because the user cannot change the font size from the browser. For example, users with limited vision may wish to set the font size much larger than the size chosen by a web designer. Avoid using them for font sizes if you wish to create an inclusive design.

### Ems

Another way of setting the font size is with `em` values. The size of an `em` value is dynamic. When defining the `font-size` property, an em is equal to the size of the font that applies to the parent of the element in question. If you haven't set the font size anywhere on the page, then it is the browser default, which is often 16px. So, by default 1em = 16px, and 2em = 32px. If you set a `font-size` of 20px on the body element, then 1em = 20px and 2em = 40px. Note that the value 2 is essentially a multiplier of the current em size.

In order to calculate the em equivalent for any pixel value required, you can use this formula:

```plain
em = desired element pixel value / parent element font-size in pixels
```

For example, suppose the font-size of the body of the page is set to 16px. If the font-size you want is 12px, then you should specify 0.75em (because 12/16 = 0.75). Similarly, if you want a font size of 10px, then specify 0.625em (10/16 = 0.625); for 22px, specify 1.375em (22/16).

The em is a very useful unit in CSS, since it automatically adapts its length relative to the font that the reader chooses to use.

One important fact to keep in mind: em values compound. Take the following HTML and CSS:

```css
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6em;
}
```

```html
<div>
  <span>Outer <span>inner</span> outer</span>
</div>
```

The result is:

{{EmbedLiveSample("Ems", 400, 40)}}

Assuming that the browser's default `font-size` is 16px, the words "outer" would be rendered at 16px, but the word "inner" would be rendered at 25.6px. This is because the inner {{HTMLElement("span")}}'s `font-size` is 1.6em which is relative to its parent's `font-size`, which is in turn relative to its parent's `font-size`. This is often called **compounding**.

### Rems

`rem` values were invented in order to sidestep the compounding problem. `rem` values are relative to the root `html` element, not the parent element. In other words, it lets you specify a font size in a relative fashion without being affected by the size of the parent, thereby eliminating compounding.

The CSS below is nearly identical to the previous example. The only exception is that the unit has been changed to `rem`.

```css
html {
  font-size: 62.5%; /* font-size 1em = 10px on default browser settings */
}
span {
  font-size: 1.6rem;
}
```

Then we apply this CSS to the same HTML, which looks like this:

```html
<span>Outer <span>inner</span> outer</span>
```

{{EmbedLiveSample("Rems", 400, 40)}}

In this example, the words "outer inner outer" are all displayed at 16px (assuming that the browser's `font-size` has been left at the default value of 16px).

## Examples

### Example 1

```css
/* Sets paragraph text to be very large */
p {
  font-size: xx-large;
}

/* Sets <h1> text to be 2.5 times the size
   of the text around it */
h1 {
  font-size: 250%;
}

/* Sets text enclosed within span tag to be 16px */
span {
  font-size: 16px;
}
```

### Example 2

#### CSS

```css
.small {
  font-size: xx-small;
}
.larger {
  font-size: larger;
}
.point {
  font-size: 24pt;
}
.percent {
  font-size: 200%;
}
```

#### HTML

```html
<h1 class="small">Small H1</h1>
<h1 class="larger">Larger H1</h1>
<h1 class="point">24 point H1</h1>
<h1 class="percent">200% H1</h1>
```

#### Result

{{EmbedLiveSample('Example_2','600','200')}}

## Notes

`em` and `ex` units on the {{cssxref("font-size")}} property are relative to the parent element's font size (unlike all other properties, where they're relative to the font size on the element). This means `em` units and percentages do the same thing for {{cssxref("font-size")}}.

## Specifications

| Specification                                                       | Status                        | Comment                            |
| ------------------------------------------------------------------- | ----------------------------- | ---------------------------------- |
| {{SpecName('CSS3 Fonts', '#font-size-prop', 'font-size')}}          | {{Spec2('CSS3 Fonts')}}       | No change.                         |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'font-size')}}    | {{Spec2('CSS3 Transitions')}} | Defines `font-size` as animatable. |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-size', 'font-size')}} | {{Spec2('CSS2.1')}}           | No change.                         |
| {{SpecName('CSS1', '#font-size', 'font-size')}}                     | {{Spec2('CSS1')}}             | Initial definition.                |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.font-size")}}
