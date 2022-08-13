---
title: CSS Transforms
slug: Web/CSS/CSS_Transforms
tags:
  - CSS
  - CSS Reference
  - Experimental
  - NeedsTranslation
  - Overview
  - TopicStub
translation_of: Web/CSS/CSS_Transforms
---
{{CSSRef}}{{SeeCompatTable}}

**CSS Transforms** is a module of CSS that defines how elements styled with CSS can be transformed in two-dimensional or three-dimensional space.

## Reference

### CSS Properties

- {{cssxref("backface-visibility")}}
- {{cssxref("perspective")}}
- {{cssxref("perspective-origin")}}
- {{cssxref("transform")}}
- {{cssxref("transform-box")}}
- {{cssxref("transform-origin")}}
- {{cssxref("transform-style")}}

## Guides

- [Using CSS transforms](/de/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms)
  - : Step-by-step tutorial about how to transform elements styled with CSS.

## Specifications

| Specification                                | Status                                   | Comment             |
| -------------------------------------------- | ---------------------------------------- | ------------------- |
| {{ SpecName('CSS3 Transforms') }} | {{ Spec2('CSS3 Transforms') }} | Initial definition. |

## Browser compatibility

{{Compat}}

\[1] Gecko 14.0 removed the experimental support for `skew()`, but it was reintroduced in Gecko 15.0 for compatibility reasons. As it is non-standard and will likely be removed in the future, do not use it.

\[2] Before Firefox 16, the translation values of `matrix()` and `matrix3d()` could be {{cssxref("&lt;length&gt;")}}, in addition to the standard {{cssxref("&lt;number&gt;")}}.

\[3] Internet Explorer 5.5 or later supports a proprietary [Matrix Filter](http://msdn.microsoft.com/en-us/library/ms533014%28VS.85,loband%29.aspx) which can be used to achieve a similar effect.

Internet Explorer 9.0 or earlier has no support for 3D transforms, mixing 3D and 2D transform functions. such as `-ms-transform:rotate(10deg) translateZ(0);` will prevent the entire property from being applied.

\[4] Android 2.3 has a bug where input forms will "jump" when typing, if any container element has a `-webkit-transform`.

\[5] Internet Explorer 11.0 supports the {{property_prefix("-webkit")}} [prefixed variant as an alias for the default one](https://msdn.microsoft.com/library/jj127312#code-snippet-1).
