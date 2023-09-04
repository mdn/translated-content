---
title: HTMLElement.offsetHeight
slug: Web/API/HTMLElement/offsetHeight
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.offsetHeight`** - высота элемента с учётом вертикальных полей и границ в пикселях. Свойство неизменяемое, только для чтения. Возвращаемое значение - целочисленное.

Typically, an element's `offsetHeight` is a measurement which includes the element borders, the element vertical padding, the element horizontal scrollbar (if present, if rendered) and the element CSS height.

For the document body object, the measurement includes total linear content height instead of the element CSS height. Floated elements extending below other linear content are ignored.

> **Примечание:** This property will round the value to an integer. If you need a fractional value, use {{ domxref("element.getBoundingClientRect()") }}.

## Syntax

```js
var intElemOffsetHeight =
  document.getElementById(id_attribute_value).offsetHeight;
```

_intElemOffsetHeight_ is a variable storing an integer corresponding to the offsetHeight pixel value of the element. The offsetHeight property is readonly.

## Example

![Image:Dimensions-offset.png](/@api/deki/files/186/=Dimensions-offset.png)

The example image above shows a scrollbar and an offsetHeight which fits on the window. However, non-scrollable elements may have large offsetHeight values, much larger than the visible content. These elements are typically contained within scrollable elements; consequently these non-scrollable elements may be completely or partly invisible, depending on the scrollTop setting of the scrollable container.

## Specification

{{Specifications}}

### Notes

`offsetHeight` is a property of the DHTML object model which was first introduced by MSIE. It is sometimes referred to as an element's physical/graphical dimensions, or an element's border-box height.

## Browser compatibility

{{Compat}}

## See Also

- {{domxref("Element.clientHeight")}}
- {{domxref("Element.scrollHeight")}}
- {{domxref("HTMLElement.offsetWidth")}}
- [Determining the dimensions of elements](/ru/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- [MSDN Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
