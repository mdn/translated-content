---
title: '@viewport'
slug: Web/CSS/@viewport
---

{{CSSRef}}

## Summary

The** `@viewport`** [CSS](/zh-TW/CSS) [at-rule](/zh-TW/CSS/At-rule) contains a set of nested descriptors in a CSS block that is delimited by curly braces. These descriptors control viewport settings, primarily on mobile devices.

## Syntax

A _zoom factor_ of `1.0` or `100%` corresponds to no zooming. Larger values zoom in. Smaller values zoom out.

### Descriptors

Browsers are supposed to ignore unrecognized descriptors.

- [`min-width`](/zh-TW/docs/Web/CSS/@viewport/min-width)
  - : Used in the determination of the width of the viewport when the document is first displayed.
- [`max-width`](/zh-TW/docs/Web/CSS/@viewport/max-width)
  - : Used in the determination of the width of the viewport when the document is first displayed.
- [`width`](/zh-TW/docs/Web/CSS/@viewport/width)
  - : A shorthand descriptor for setting both `min-width` and `max-width`
- [`min-height`](/zh-TW/docs/Web/CSS/@viewport/min-height)
  - : Used in the determination of the height of the viewport when the document is first displayed.
- [`max-height`](/zh-TW/docs/Web/CSS/@viewport/max-height)
  - : Used in the determination of the height of the viewport when the document is first displayed.
- [`height`](/zh-TW/docs/Web/CSS/@viewport/height)
  - : A shorthand descriptor for setting both `min-height` and `max-height`
- [`zoom`](/zh-TW/docs/Web/CSS/@viewport/zoom)
  - : Sets the initial zoom factor.
- [`min-zoom`](/zh-TW/docs/Web/CSS/@viewport/min-zoom)
  - : Sets the minimum zoom factor.
- [`max-zoom`](/zh-TW/docs/Web/CSS/@viewport/max-zoom)
  - : Sets the maximum zoom factor.
- [`user-zoom`](/zh-TW/docs/Web/CSS/@viewport/user-zoom)
  - : Controls whether or not the user should be able to change the zoom factor.
- [`orientation`](/zh-TW/docs/Web/CSS/@viewport/orientation)
  - : Controls the document's orientation.

### Formal syntax

{{csssyntax}}

## Examples

```css
@viewport {
  min-width: 640px;
  max-width: 800px;
}
@viewport {
  zoom: 0.75;
  min-zoom: 0.5;
  max-zoom: 0.9;
}
@viewport {
  orientation: landscape;
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{HTMLElement("meta")}}, specifically `<meta name="viewport">`
- [Using the viewport meta tag to control layout on mobile browsers](/zh-TW/docs/Mobile/Viewport_meta_tag)
