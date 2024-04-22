---
title: Valor usado
slug: Web/CSS/used_value
---

{{cssref}}

O **valor usado** de uma propriedade CSS é o valor final dessa propriedade depois de todos os cálculos terem sido executados.

After the user agent has finished its calculations, every CSS property has a used value. The used values of dimensions (e.g., `width`, `line-height`) are in pixels. The used values of shorthand properties (e.g., background) are consistent with those of their component properties (e.g., `background-color`, `display)` and with `position` and `float`.

For some properties, JavaScript can retrieve the used value through the [window.getComputedStyle](/pt-BR/docs/DOM/window.getComputedStyle) method.

## Detalhes

There are four steps to calculating any CSS property's final value. First, the [specified value](/pt-BR/docs/CSS/specified_value) is the result of cascading (choosing the most specific stylesheet rule that changes the property), [inheritance](/pt-BR/docs/CSS/inheritance) (using the same computed value as a parent if the property is inheritable), or using the default. Then, the [computed value](/pt-BR/docs/CSS/computed_value) is calculated according to the specification (for example, a `span` with `position: absolute` will have its computed `display` changed to `block`). Then, layout is calculated (dimensions that are `auto` or percentages relative to a parent are replaced with pixel values), and the result is the **used value**.

Finally, transformed according to the limitations of the local environment, the result is [actual value](/pt-BR/docs/Web/CSS/actual_value). The actual value is the used value after any approximations have been applied. For example, a user agent may only be able to render borders with integer pixel widths, and therefore have to approximate the computed width, or the user agent may be forced to use only black and white shades, instead of full color. These steps are calculated internally.

JavaScript can read only the final used values with [window.getComputedStyle](/pt-BR/docs/DOM/window.getComputedStyle). This method may instead return computed values, depending on the property. The values it returns are generically called {{cssxref("resolved_value", "resolved values")}}).

## Exemplo

Compute and show the used width of three elements (updates on resize):

### HTML

```html
<div id="no-width">
  <p>No explicit width.</p>
  <p class="show-used-width">..</p>

  <div id="width-50">
    <p>Explicit width: 50%.</p>
    <p class="show-used-width">..</p>

    <div id="width-inherit">
      <p>Explicit width: inherit.</p>
      <p class="show-used-width">..</p>
    </div>
  </div>
</div>
```

### CSS

```css
#no-width {
  width: auto;
}

#width-50 {
  width: 50%;
}

#width-inherit {
  width: inherit;
}

/* Make results easier to see: */
div {
  border: 1px solid red;
  padding: 8px;
}
```

### JavaScript

```js
function updateUsedWidth(id) {
  var div = document.getElementById(id);
  var par = document.querySelector(`#${id} .show-used-width`);
  var wid = window.getComputedStyle(div)["width"];
  par.textContent = `Used width: ${wid}.`;
}

function updateAllUsedWidths() {
  updateUsedWidth("no-width");
  updateUsedWidth("width-50");
  updateUsedWidth("width-inherit");
}

updateAllUsedWidths();
window.addEventListener("resize", updateAllUsedWidths);
```

### Resultado

{{ EmbedLiveSample('Example', '80%', '372px') }}

## Diferentes valores computados

CSS 2.0 defined only [computed value](/pt-BR/docs/CSS/computed_value) as the last step in a property's calculation. Then, CSS 2.1 introduced the distinct definition of used value. An element could then explicitly inherit a width/height of a parent, whose computed value is a percentage. For CSS properties that don't depend on layout (e.g., display, font-size, line-height), the computed values and used values are the same. These are the CSS 2.1 properties that do depend on layout, so they have a different computed value and used value: (taken from [CSS 2.1 Changes: Specified, computed, and actual values](https://www.w3.org/TR/CSS2/changes.html#q36)):

- background-position
- bottom, left, right, top
- height, width
- margin-bottom, margin-left, margin-right, margin-top,
- min-height, min-width
- padding-bottom, padding-left, padding-right, padding-top
- text-indent

## Especificações

[CSS Level 2: Used Values](https://www.w3.org/TR/CSS2/cascade.html#used-value)

## Veja também

- [CSS Reference](/pt-BR/docs/CSS_Reference)
- [window.getComputedStyle](/pt-BR/docs/DOM/window.getComputedStyle)
