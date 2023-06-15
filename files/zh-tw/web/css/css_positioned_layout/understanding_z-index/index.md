---
title: Understanding CSS z-index
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index
---

{{CSSRef}}

Usually HTML pages can be considered two-dimensional, because text, images and other elements are arranged on the page without overlapping. There is a single rendering flow, and all elements are aware of the space taken by others. The {{cssxref("z-index")}} attribute lets you adjust the order of the layering of objects when rendering content.

> _In CSS 2.1, each box has a position in three dimensions. In addition to their horizontal and vertical positions, boxes lie along a "z-axis" and are formatted one on top of the other. Z-axis positions are particularly relevant when boxes overlap visually._

(from [CSS 2.1 Section 9.9.1 - Layered presentation](http://www.w3.org/TR/CSS21/visuren.html#z-index))

It means that CSS style rules allow you to position boxes on layers in addition to the normal rendering layer (layer 0). The Z position of each layer is expressed as an integer representing the stacking order for rendering. Greater numbers mean closer to the observer. Z position can be controlled with the CSS {{ cssxref("z-index") }} property.

Using z-index appears extremely easy: a single property, assigned a single integer number, with an easy-to-understand behaviour. However, when z-index is applied to complex hierarchies of HTML elements, its behaviour can be hard to understand or even unpredictable. This is due to complex stacking rules. In fact a dedicated section has been reserved in the CSS specification [CSS-2.1 Appendix E](http://www.w3.org/TR/CSS21/zindex.html) to explain these rules better.

This article will try to explain those rules, with some simplification and several examples.

1. [Stacking without z-index](/zh-TW/CSS/Understanding_z-index/Stacking_without_z-index) : Default stacking rules
2. [Stacking and float](/zh-TW/CSS/Understanding_z-index/Stacking_floating_elements) : How floating elements are handled
3. [Adding z-index](/zh-TW/CSS/Understanding_z-index/Using_z-index) : Using z-index to change default stacking
4. [The stacking context](/zh-TW/CSS/Understanding_z-index/Stacking_context) : Notes on the stacking context
5. [Stacking context example 1](/zh-TW/CSS/Understanding_z-index/Stacking_context_example_1) : 2-level HTML hierarchy, z-index on the last level
6. [Stacking context example 2](/zh-TW/CSS/Understanding_z-index/Stacking_context_example_2) : 2-level HTML hierarchy, z-index on all levels
7. [Stacking context example 3](/zh-TW/CSS/Understanding_z-index/Stacking_context_example_3) : 3-level HTML hierarchy, z-index on the second level

_Note of the author: Thanks to Wladimir Palant and Rod Whiteley for the review\._
