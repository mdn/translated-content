---
title: '@media'
slug: Web/CSS/@media
---

{{CSSRef}}

## 概要

`@media` [CSS](/zh-TW/CSS) [at-rule](/zh-TW/CSS/At-rule) 與一組被大括弧隔開、並由 [media query](/zh-TW/CSS/Media_queries) 條件定義的 CSS 巢狀區塊有關。`@media` at-rule 不只能用在最頂層的 CSS 區塊，也能在任何 [CSS conditional-group at-rule](/zh-TW/CSS/At-rule#Conditional_Group_Rules) 使用。

`@media` at-rule 能透過 CSS object model 介面 {{domxref("CSSMediaRule")}} 通行。

## 語法

{{csssyntax}}

A `<media-query>` is composed of a optional media type and/or a number of media features.

## Media types

- all
  - : Suitable for all devices.
- print
  - : Intended for paged material and for documents viewed on screen in print preview mode. Please consult the section on [paged media](/zh-TW/CSS/Paged_Media), and the [media section of the Getting Started tutorial](/zh-TW/CSS/Getting_Started/Media) for information about formatting issues that are specific to paged media.
- screen
  - : Intended primarily for color computer screens.
- speech
  - : Intended for speech synthesizers. Note: CSS2 had a similar media type called 'aural' for this purpose. See the appendix on aural style sheets for details.

> **備註：** CSS2.1 and Media Queries 3 defined several additional media types (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, `aural`), but they were deprecated in [Media Queries 4](http://dev.w3.org/csswg/mediaqueries/#media-types) and shouldn't be used.

## Media Features

Each _media feature_ tests for one specific feature of the browser or device.

| Name                                                                                                                   | Summary                                                                                                                         | Notes                                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [`width`](/zh-TW/docs/Web/CSS/@media/width)                                                                            | Viewport width                                                                                                                  |                                                                                                                                       |
| [`height`](/zh-TW/docs/Web/CSS/@media/height)                                                                          | Viewport height                                                                                                                 |                                                                                                                                       |
| [`aspect-ratio`](/zh-TW/docs/Web/CSS/@media/aspect-ratio)                                                              | Width-to-height aspect ratio of the viewport                                                                                    |                                                                                                                                       |
| [`orientation`](/zh-TW/docs/Web/CSS/@media/orientation)                                                                | Orientation of the viewport                                                                                                     |                                                                                                                                       |
| [`resolution`](/zh-TW/docs/Web/CSS/@media/resolution)                                                                  | Pixel density of the output device                                                                                              |                                                                                                                                       |
| [`scan`](/zh-TW/docs/Web/CSS/@media/scan)                                                                              | Scanning process of the output device                                                                                           |                                                                                                                                       |
| [`grid`](/zh-TW/docs/Web/CSS/@media/grid)                                                                              | Is the device a grid or bitmap?                                                                                                 |                                                                                                                                       |
| [`update-frequency`](/zh-TW/docs/Web/CSS/@media/update-frequency)                                                      | How quickly (if at all) can the output device modify the appearance of the content                                              | Added in Media Queries Level 4                                                                                                        |
| [`overflow-block`](/zh-TW/docs/Web/CSS/@media/overflow-block)                                                          | How does the output device handle content that overflows the viewport along the block axis?                                     | Added in Media Queries Level 4                                                                                                        |
| [`overflow-inline`](/zh-TW/docs/Web/CSS/@media/overflow-inline)                                                        | Can content that overflows the viewport along the inline axis be scrolled?                                                      | Added in Media Queries Level 4                                                                                                        |
| [`color`](/zh-TW/docs/Web/CSS/@media/color)                                                                            | Number of bits per color component of the output device, or zero if the device isn't color.                                     |                                                                                                                                       |
| [`color-index`](/zh-TW/docs/Web/CSS/@media/color-index)                                                                | Number of entries in the output device's color lookup table, or zero if the device does not use such a table.                   |                                                                                                                                       |
| [`display-mode`](/zh-TW/docs/Web/CSS/@media/display-mode)                                                              | The display mode of the application, as specified in the web app manifest's [display member](/zh-TW/docs/Web/Manifest#display). | Defined in the [Web App Manifest spec](http://w3c.github.io/manifest/#the-display-mode-media-feature).                                |
| [`monochrome`](/zh-TW/docs/Web/CSS/@media/monochrome)                                                                  | Bits per pixel in the output device's monochrome frame buffer, or 0 if the device is not monochrome.                            |                                                                                                                                       |
| [`inverted-colors`](/zh-TW/docs/Web/CSS/@media/inverted-colors)                                                        | Is the user agent or underlying OS inverting colors?                                                                            | Added in Media Queries Level 4                                                                                                        |
| [`pointer`](/zh-TW/docs/Web/CSS/@media/pointer)                                                                        | Is the primary input mechanism a pointing device, and if so, how accurate is it?                                                | Added in Media Queries Level 4                                                                                                        |
| [`hover`](/zh-TW/docs/Web/CSS/@media/hover)                                                                            | Does the primary input mechanism allow the user to hover over elements?                                                         | Added in Media Queries Level 4                                                                                                        |
| [`any-pointer`](/zh-TW/docs/Web/CSS/@media/any-pointer)                                                                | Is any available input mechanism a pointing device, and if so, how accurate is it?                                              | Added in Media Queries Level 4                                                                                                        |
| [`any-hover`](/zh-TW/docs/Web/CSS/@media/any-hover)                                                                    | Does any available input mechanism allow the user to hover over elements?                                                       | Added in Media Queries Level 4                                                                                                        |
| [`light-level`](/zh-TW/docs/Web/CSS/@media/light-level)                                                                | Current ambient light level                                                                                                     | Added in Media Queries Level 4                                                                                                        |
| [`scripting`](/zh-TW/docs/Web/CSS/@media/scripting)                                                                    | Is scripting (e.g. JavaScript) available?                                                                                       | Added in Media Queries Level 4                                                                                                        |
| [`device-width`](/zh-TW/docs/Web/CSS/@media/device-width) {{Deprecated_Inline}}                                 | Width of the rendering surface of the output device                                                                             | Deprecated in Media Queries Level 4                                                                                                   |
| [`device-height`](/zh-TW/docs/Web/CSS/@media/device-height) {{Deprecated_Inline}}                               | Height of the rendering surface of the output device                                                                            | Deprecated in Media Queries Level 4                                                                                                   |
| [`device-aspect-ratio`](/zh-TW/docs/Web/CSS/@media/device-aspect-ratio) {{Deprecated_Inline}}                   | Width-to-height aspect ratio of the output device                                                                               | Deprecated in Media Queries Level 4                                                                                                   |
| [`-webkit-device-pixel-ratio`](/zh-TW/docs/Web/CSS/@media/-webkit-device-pixel-ratio) {{non-standard_inline}} | Number of physical device pixels per CSS pixel                                                                                  | Nonstandard; WebKit/Blink-specific. If possible, use the [`resolution`](/zh-TW/docs/Web/CSS/@media/resolution) media feature instead. |
| [`-webkit-transform-3d`](/zh-TW/docs/Web/CSS/@media/-webkit-transform-3d) {{non-standard_inline}}             | Are CSS 3D {{cssxref("transform")}}s supported?                                                                         | Nonstandard; WebKit/Blink-specific                                                                                                    |
| [`-webkit-transform-2d`](/zh-TW/docs/Web/CSS/@media/-webkit-transform-2d) {{non-standard_inline}}             | Are CSS 2D {{cssxref("transform")}}s supported?                                                                         | Nonstandard; WebKit-specific                                                                                                          |
| [`-webkit-transition`](/zh-TW/docs/Web/CSS/@media/-webkit-transition) {{non-standard_inline}}                 | Are CSS {{cssxref("transition")}}s supported?                                                                            | Nonstandard; WebKit-specific                                                                                                          |
| [`-webkit-animation`](/zh-TW/docs/Web/CSS/@media/-webkit-animation) {{non-standard_inline}}                   | Are CSS {{cssxref("animation")}}s supported?                                                                            | Nonstandard; WebKit-specific                                                                                                          |

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
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    body { line-height: 1.4 }
}
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- [Media queries](/zh-TW/CSS/Media_queries)
- The CSSOM {{ domxref("CSSMediaRule") }} associated with this at-rule.
