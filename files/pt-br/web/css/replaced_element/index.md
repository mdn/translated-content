---
title: Elemento substituído
slug: Web/CSS/Replaced_element
translation_of: Web/CSS/Replaced_element
original_slug: Web/CSS/Elemento_substituido
---
{{CSSRef()}}

## Sumario

In CSS, a **replaced element** is an element whose representation is outside the scope of CSS. These are a type of external object whose representation is independent of the CSS. Typical replaced elements are:

- {{HTMLElement("iframe")}}
- {{HTMLElement("video")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("img")}}

Some elements are treated as replaced elements only in specific cases:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("applet")}}

The only form control that is also a replaced element is {{HTMLElement("input")}} of the image type. All other form controls are non-replaced elements.

Objects inserted using the CSS {{cssxref("content")}} properties are _anonymous replaced elements_.

CSS handles replaced elements specifically in some cases, like when calculating margins and some `auto` values.

Note that some replaced elements, but not all, have intrinsic dimensions or a defined baseline, which is used by some CSS properties like {{cssxref("vertical-align")}}.

## Veja também

- {{CSS_key_concepts()}}
