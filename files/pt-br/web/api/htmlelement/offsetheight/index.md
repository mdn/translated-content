---
title: HTMLElement.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
---

{{ APIRef("HTML DOM") }}

A propriedade **`HTMLElement.offsetHeight`** é somente leitura e retorna um valor do tipo inteiro a altura de um elemento incluindo padding-top+padding-bottom+border-top+border-bottom.

Typically, an element's `offsetHeight` is a measurement in pixels of the element's CSS height, including border, padding and the element's horizontal scrollbar (if present, if rendered).

For the document body object, the measurement includes total linear content height instead of the element's CSS height. Floated elements extending below other linear content are ignored.

> **Nota:** This property will round the value to an integer. If you need a fractional value, use {{ domxref("element.getBoundingClientRect()") }}.

## Syntax

```
var intElemOffsetHeight = element.offsetHeight;
```

_intElemOffsetHeight_ is a variable storing an integer corresponding to the offsetHeight pixel value of the element. The offsetHeight property is read-only.

## Example

![Image:Dimensions-offset.png](/@api/deki/files/186/=Dimensions-offset.png)

The example image above shows a scrollbar and an offsetHeight which fits on the window. However, non-scrollable elements may have large offsetHeight values, much larger than the visible content. These elements are typically contained within scrollable elements; consequently these non-scrollable elements may be completely or partly invisible, depending on the scrollTop setting of the scrollable container.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See Also

- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determining the dimensions of elements](/pt-BR/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN: Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
