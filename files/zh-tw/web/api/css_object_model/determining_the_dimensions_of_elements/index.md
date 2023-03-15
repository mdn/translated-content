---
title: Determining the dimensions of elements
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
---

{{APIRef("CSSOM View")}}

There are several properties you can look at in order to determine the width and height of elements, and it can be tricky to determine which is the right one for your needs. This article is designed to help you make that decision. Note that all these properties are read-only. If you want to set the width and height of an element, use `width` and `height` or, the overriding [`min-width`](/zh-TW/docs/Web/CSS/min-width) and [`max-width`](/zh-TW/docs/Web/CSS/max-width), and [`min-height`](/zh-TW/docs/Web/CSS/min-height) and [`max-height`](/zh-TW/docs/Web/CSS/max-height) properties.

## How much room does it use up?

If you need to know the total amount of space an element occupies, including the width of the visible content, scrollbars (if any), padding, and border, you want to use the [`offsetWidth`](/zh-TW/DOM/element.offsetWidth) and [`offsetHeight`](/zh-TW/DOM/element.offsetHeight) properties. Most of the time these are the same as width and height of [`getBoundingClientRect()`](/zh-TW/DOM/element.getBoundingClientRect), when there aren't any transforms applied to the element. In case of transforms, the `offsetWidth` and `offsetHeight` returns the element's layout width and height, while `getBoundingClientRect()` returns the rendering width and height. As an example, if the element has `width: 100px;` and `transform: scale(0.5);` the `getBoundingClientRect()` will return 50 as the width, while `offsetWidth` will return 100.

![Image:Dimensions-offset.png](dimensions-offset.png)

## What's the size of the displayed content?

If you need to know how much space the actual displayed content takes up, including padding but not including the border, margins, or scrollbars, you want to use the [`clientWidth`](/zh-TW/DOM/element.clientWidth) and [`clientHeight`](/zh-TW/DOM/element.clientHeight) properties:

![Image:Dimensions-client.png](dimensions-client.png)

## How big is the content?

If you need to know the actual size of the content, regardless of how much of it is currently visible, you need to use the [`scrollWidth`](/zh-TW/DOM/element.scrollWidth) and [`scrollHeight`](/zh-TW/docs/Web/API/Element.scrollHeight) properties. These return the width and height of the entire content of an element, even if only part of it is presently visible due to the use of scroll bars.

For example, if a 600x400 pixel element is being displayed inside a 300x300 pixel scrollbox, `scrollWidth` will return 600 while `scrollHeight` will return 400.

## 參見

- <http://www.w3.org/TR/cssom-view/>
- [MSDN: Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
