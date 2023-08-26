---
title: CSS Images
slug: Web/CSS/CSS_images
---

{{CSSRef}}

**CSS Images** is a module of CSS that defines what types of images can be used (the {{cssxref("&lt;image&gt;")}} type, containing URLs, gradients and other types of images), how to resize them and how they, and other replaced content, interact with the different layout models.

## Reference

### Properties

- {{cssxref("image-orientation")}}
- {{cssxref("image-rendering")}}
- {{cssxref("object-fit")}}
- {{cssxref("object-position")}}

### Functions

- {{cssxref("linear-gradient", "linear-gradient()")}}
- {{cssxref("radial-gradient", "radial-gradient()")}}
- {{cssxref("repeating-linear-gradient", "repeating-linear-gradient()")}}
- {{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}}
- {{cssxref("element", "element()")}}

### Data types

- {{cssxref("&lt;gradient&gt;")}}
- {{cssxref("&lt;image&gt;")}}

## Guides

- [Using CSS gradients](/pt-BR/docs/Web/CSS/CSS_Images/Using_CSS_gradients)
  - : Presents a specific type of CSS images, _gradients_, and how to create and use these.
- [Implementing image sprites in CSS](/pt-BR/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
  - : Describes the common technique grouping several images in one single document to save download requests and speed up the availability of a page.

## Specifications

| Specification                                                    | Status                   | Comment                                                      |
| ---------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------ |
| {{SpecName('CSS4 Images')}}                                      | {{Spec2('CSS4 Images')}} |                                                              |
| {{SpecName('CSS3 Images')}}                                      | {{Spec2('CSS3 Images')}} |                                                              |
| {{SpecName('Compat', '#css-%3Cimage%3E-type', 'CSS Gradients')}} | {{Spec2('Compat')}}      | Standardizes the `-webkit` prefixed gradient value functions |
| {{SpecName('CSS3 Values', '#urls', '&lt;url&gt;')}}              | {{Spec2('CSS3 Values')}} |                                                              |
| {{Specname('CSS2.1', 'syndata.html#uri', '&lt;uri&gt;')}}        | {{Spec2('CSS2.1')}}      |                                                              |
| {{SpecName('CSS1', '#url', '&lt;url&gt;')}}                      | {{Spec2('CSS1')}}        | Initial definition                                           |
