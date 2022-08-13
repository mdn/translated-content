---
title: '@media'
slug: Web/CSS/@media
tags:
  - At-rule
  - CSS
  - Layout
  - NeedsTranslation
  - Reference
  - TopicStub
  - Web
translation_of: Web/CSS/@media
---
{{ CSSRef() }}

## Summary

The `@media` [CSS](/en/CSS "CSS") [at-rule](/en/CSS/At-rule "en/CSS/At-rule") associates a set of nested statements, in a CSS block that is delimited by curly braces, with a condition defined by a [media query](/en/CSS/Media_queries "CSS media queries"). The `@media` at-rule may be used not only at the top level of a CSS, but also inside any [CSS conditional-group at-rule](/en/CSS/At-rule#Conditional_Group_Rules "en/CSS/At-rule#Conditional_Group_Rules").

The `@media` at-rule can be accessed via the CSS object model interface {{domxref("CSSMediaRule")}}.

## Syntax

{{csssyntax}}

A `<media-query>` is composed of a media type and/or a number of media features.

## Media types

> **Note:** Firefox currently only implements the `print` and `screen` media types. The [FullerScreen](https://addons.mozilla.org/en-US/firefox/addon/4650) extension enables support for the `projection` media type.

- all
  - : Suitable for all devices.
- print
  - : Intended for paged material and for documents viewed on screen in print preview mode. Please consult the section on [paged media](/en/CSS/Paged_Media "https://developer.mozilla.org/en/CSS/Paged_Media"), and the [media section of the Getting Started tutorial](/en/CSS/Getting_Started/Media "https://developer.mozilla.org/en/CSS/Getting_Started/Media") for information about formatting issues that are specific to paged media.
- screen
  - : Intended primarily for color computer screens.
- speech
  - : Intended for speech synthesizers. Note: CSS2 had a similar media type called 'aural' for this purpose. See the appendix on aural style sheets for details.

> **Note:** CSS2.1 and Media Queries 3 defined several additional media types (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, `aural`), but they were deprecated in [Media Queries 4](http://dev.w3.org/csswg/mediaqueries/#media-types) and shouldn't be used.

## Media Features

[Definition](http://dev.w3.org/csswg/mediaqueries/#mq-features). This section needs to be expanded to explain media conditions in more depth.

| Name                                                                                                                | Summary                                                                                                       | Notes                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`width`](/de/docs/Web/CSS/@media/width)                                                                            | Viewport width                                                                                                |                                                                                                                                    |
| [`height`](/de/docs/Web/CSS/@media/height)                                                                          | Viewport height                                                                                               |                                                                                                                                    |
| [`aspect-ratio`](/de/docs/Web/CSS/@media/aspect-ratio)                                                              | Width-to-height aspect ratio of the viewport                                                                  |                                                                                                                                    |
| [`orientation`](/de/docs/Web/CSS/@media/orientation)                                                                | Orientation of the viewport                                                                                   |                                                                                                                                    |
| [`resolution`](/de/docs/Web/CSS/@media/resolution)                                                                  | Pixel density of the output device                                                                            |                                                                                                                                    |
| [`scan`](/de/docs/Web/CSS/@media/scan)                                                                              | Scanning process of the output device                                                                         |                                                                                                                                    |
| [`grid`](/de/docs/Web/CSS/@media/grid)                                                                              | Is the device a grid or bitmap?                                                                               |                                                                                                                                    |
| [`update-frequency`](/de/docs/Web/CSS/@media/update-frequency)                                                      | How quickly (if at all) can the output device modify the appearance of the content                            | Added in Media Queries Level 4                                                                                                     |
| [`overflow-block`](/de/docs/Web/CSS/@media/overflow-block)                                                          | How does the output device handle content that overflows the viewport along the block axis?                   | Added in Media Queries Level 4                                                                                                     |
| [`overflow-inline`](/de/docs/Web/CSS/@media/overflow-inline)                                                        | Can content that overflows the viewport along the inline axis be scrolled?                                    | Added in Media Queries Level 4                                                                                                     |
| [`color`](/de/docs/Web/CSS/@media/color)                                                                            | Number of bits per color component of the output device, or zero if the device isn't color.                   |                                                                                                                                    |
| [`color-index`](/de/docs/Web/CSS/@media/color-index)                                                                | Number of entries in the output device's color lookup table, or zero if the device does not use such a table. |                                                                                                                                    |
| [`monochrome`](/de/docs/Web/CSS/@media/monochrome)                                                                  | Bits per pixel in the output device's monochrome frame buffer, or 0 if the device is not monochrome.          |                                                                                                                                    |
| [`inverted-colors`](/de/docs/Web/CSS/@media/inverted-colors)                                                        | Is the user agent or underlying OS inverting colors?                                                          | Added in Media Queries Level 4                                                                                                     |
| [`pointer`](/de/docs/Web/CSS/@media/pointer)                                                                        | Is the primary input mechanism a pointing device, and if so, how accurate is it?                              | Added in Media Queries Level 4                                                                                                     |
| [`hover`](/de/docs/Web/CSS/@media/hover)                                                                            | Does the primary input mechanism allow the user to hover over elements?                                       | Added in Media Queries Level 4                                                                                                     |
| [`any-pointer`](/de/docs/Web/CSS/@media/any-pointer)                                                                | Is any available input mechanism a pointing device, and if so, how accurate is it?                            |                                                                                                                                    |
| [`any-hover`](/de/docs/Web/CSS/@media/any-hover)                                                                    | Does any available input mechanism allow the user to hover over elements?                                     |                                                                                                                                    |
| [`light-level`](/de/docs/Web/CSS/@media/light-level)                                                                | Current ambient light level                                                                                   | Added in Media Queries Level 4                                                                                                     |
| [`scripting`](/de/docs/Web/CSS/@media/scripting)                                                                    | Is scripting (e.g. JavaScript) available?                                                                     | Added in Media Queries Level 4                                                                                                     |
| [`device-width`](/de/docs/Web/CSS/@media/device-width) {{obsolete_inline}}                                     | Width of the rendering surface of the output device                                                           | Deprecated in Media Queries Level 4                                                                                                |
| [`device-height`](/de/docs/Web/CSS/@media/device-height) {{obsolete_inline}}                                   | Height of the rendering surface of the output device                                                          | Deprecated in Media Queries Level 4                                                                                                |
| [`device-aspect-ratio`](/de/docs/Web/CSS/@media/device-aspect-ratio) {{obsolete_inline}}                       | Width-to-height aspect ratio of the output device                                                             | Deprecated in Media Queries Level 4                                                                                                |
| [`-webkit-device-pixel-ratio`](/de/docs/Web/CSS/@media/-webkit-device-pixel-ratio) {{non-standard_inline}} | Number of physical device pixels per CSS pixel                                                                | Nonstandard; WebKit/Blink-specific. If possible, use the [`resolution`](/de/docs/Web/CSS/@media/resolution) media feature instead. |
| [`-webkit-transform-3d`](/de/docs/Web/CSS/@media/-webkit-transform-3d) {{non-standard_inline}}             | Are CSS 3D {{cssxref("transform")}}s supported?                                                       | Nonstandard; WebKit/Blink-specific                                                                                                 |
| [`-webkit-transform-2d`](/de/docs/Web/CSS/@media/-webkit-transform-2d) {{non-standard_inline}}             | Are CSS 2D {{cssxref("transform")}}s supported?                                                       | Nonstandard; WebKit-specific                                                                                                       |
| [`-webkit-transition`](/de/docs/Web/CSS/@media/-webkit-transition) {{non-standard_inline}}                 | Are CSS {{cssxref("transition")}}s supported?                                                          | Nonstandard; WebKit-specific                                                                                                       |
| [`-webkit-animation`](/de/docs/Web/CSS/@media/-webkit-animation) {{non-standard_inline}}                   | Are CSS {{cssxref("animation")}}s supported?                                                          | Nonstandard; WebKit-specific                                                                                                       |

## Examples

```css
@media print {
  body { font-size: 10pt }
}
@media screen {
  body { font-size: 13px }
}
@media screen, print {
  body { line-height: 1.2 }
}
```

## Specifications

| Specification                                                                    | Status                                   | Comment                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Conditional', '#at-media', '@media')}}         | {{Spec2('CSS3 Conditional')}} | Defines the basic syntax of the `@media` rule.                                                                                                                                                                  |
| {{SpecName('CSS4 Media Queries', '#media', '@media')}}         | {{Spec2('CSS4 Media Queries')}} | Added `scripting`, `pointer`, `hover`, `light-level`, `update-frequency`, `overflow-block`, and `overflow-inline` media features. Deprecated all media types except for `screen`, `print`, `speech`, and `all`. |
| {{SpecName('CSS3 Media Queries', '#media0', '@media')}}         | {{Spec2('CSS3 Media Queries')}} | No change.                                                                                                                                                                                                      |
| {{SpecName('CSS2.1', 'media.html#at-media-rule', '@media')}} | {{Spec2('CSS2.1')}}                 | Initial definition.                                                                                                                                                                                             |

## Browser compatibility

{{Compat("css.at-rules.media")}}

## See also

- [Media queries](/en/CSS/Media_queries "En/CSS/Media queries")
- The CSSOM {{ domxref("CSSMediaRule") }} associated with this at-rule.
