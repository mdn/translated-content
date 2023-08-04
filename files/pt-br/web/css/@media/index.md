---
title: "@media"
slug: Web/CSS/@media
---

{{CSSRef}}

The **`@media`** [CSS](/pt-BR/CSS) [at-rule](/pt-BR/CSS/At-rule) pode ser usada para aplicar estilos com base no resultado de uma ou mais consultas de mídia, que testam o tipo, as características específicas e o ambiente de um dispositivo.

No CSS, a regra `@media` deve ser posta na parte superior do seu código ou aninhada dentro de algum outro [conditional group at-rule](/pt-BR/CSS/At-rule#Conditional_Group_Rules).

```css
/* Media query */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Nested media query */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

Besides its use in the `@media` rule, a media query may also be applied to an HTML {{HTMLElement("link")}} element to restrict an entire style sheet to certain media.

```html
<!-- Media-dependent style sheet included in HTML -->
<link
  rel="stylesheet"
  media="screen and (min-width: 900px)"
  href="widescreen-styles.css" />
```

In JavaScript, `@media` can be accessed via the {{domxref("CSSMediaRule")}} CSS object model interface.

## Syntax

The `@media` at-rule is composed of one or more media queries, each of which consists of an optional [media type](#Media_types) and any number of [media feature](#Media_features) expressions. Multiple queries can be combined in various ways by using [logical operators](#Logical_operators), and are case-insensitive.

Corresponding styles are applied only if a media query computes to true, i.e., when the specified media type matches the type of device the document is being displayed on _and_ all media feature expressions compute as true. Queries involving unknown media types are always false.

> **Nota:** A style sheet with a media query attached to its {{HTMLElement("link")}} tag [will still download](http://scottjehl.github.com/CSS-Download-Tests/) even if the query returns false. Nevertheless, its contents will not apply unless and until the result of the query changes to true.

### Media types

_Media types_ describe the general category of a device. Unless you use the `not` or `only` logical operators, the media type is optional and the `all` type will be implied.

- `all`
  - : Suitable for all devices.
- `print`
  - : Intended for paged material and for documents viewed on screen in print preview mode. Please consult the section on [paged media](/pt-BR/CSS/Paged_Media), and the [media section of the Getting Started tutorial](/pt-BR/CSS/Getting_Started/Media) for information about formatting issues that are specific to paged media.
- `screen`
  - : Intended primarily for color computer screens.
- `speech`
  - : Intended for speech synthesizers.

> **Nota:** **Deprecated media types:** CSS2.1 and [Media Queries 3](https://drafts.csswg.org/mediaqueries-3/#background) defined several additional media types (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, and `aural`), but they were deprecated in [Media Queries 4](http://dev.w3.org/csswg/mediaqueries/#media-types) and shouldn't be used. The `aural` type has been replaced by `speech`, which is similar.

### Media features

_Media feature expressions_ test for specific characteristics of the {{glossary("user agent")}}, output device, or environment. They are entirely optional. Each media feature expression must be surrounded by parentheses.

| Name                                                                                                          | Summary                                                                                                                          | Notes                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| [`width`](/pt-BR/docs/Web/CSS/@media/width)                                                                   | Width of the viewport                                                                                                            |                                                                                                                                       |
| [`height`](/pt-BR/docs/Web/CSS/@media/height)                                                                 | Height of the viewport                                                                                                           |                                                                                                                                       |
| [`aspect-ratio`](/pt-BR/docs/Web/CSS/@media/aspect-ratio)                                                     | Width-to-height aspect ratio of the viewport                                                                                     |                                                                                                                                       |
| [`orientation`](/pt-BR/docs/Web/CSS/@media/orientation)                                                       | Orientation of the viewport                                                                                                      |                                                                                                                                       |
| [`resolution`](/pt-BR/docs/Web/CSS/@media/resolution)                                                         | Pixel density of the output device                                                                                               |                                                                                                                                       |
| [`scan`](/pt-BR/docs/Web/CSS/@media/scan)                                                                     | Scanning process of the output device                                                                                            |                                                                                                                                       |
| [`grid`](/pt-BR/docs/Web/CSS/@media/grid)                                                                     | Does the device use a grid or bitmap screen?                                                                                     |                                                                                                                                       |
| [`update`](/pt-BR/docs/Web/CSS/@media/update-frequency)                                                       | How frequently the output device can modify the appearance of content                                                            | Added in Media Queries Level 4.                                                                                                       |
| [`overflow-block`](/pt-BR/docs/Web/CSS/@media/overflow-block)                                                 | How does the output device handle content that overflows the viewport along the block axis?                                      | Added in Media Queries Level 4.                                                                                                       |
| [`overflow-inline`](/pt-BR/docs/Web/CSS/@media/overflow-inline)                                               | Can content that overflows the viewport along the inline axis be scrolled?                                                       | Added in Media Queries Level 4.                                                                                                       |
| [`color`](/pt-BR/docs/Web/CSS/@media/color)                                                                   | Number of bits per color component of the output device, or zero if the device isn't color                                       |                                                                                                                                       |
| [`color-gamut`](/pt-BR/docs/Web/CSS/@media/color-gamut)                                                       | Approximate range of colors that are supported by the user agent and output device                                               | Added in Media Queries Level 4.                                                                                                       |
| [`color-index`](/pt-BR/docs/Web/CSS/@media/color-index)                                                       | Number of entries in the output device's color lookup table, or zero if the device does not use such a table                     |                                                                                                                                       |
| [`display-mode`](/pt-BR/docs/Web/CSS/@media/display-mode)                                                     | The display mode of the application, as specified in the web app manifest's [`display`](/pt-BR/docs/Web/Manifest#display) member | Defined in the [Web App Manifest spec](http://w3c.github.io/manifest/#the-display-mode-media-feature).                                |
| [`monochrome`](/pt-BR/docs/Web/CSS/@media/monochrome)                                                         | Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome                            |                                                                                                                                       |
| [`inverted-colors`](/pt-BR/docs/Web/CSS/@media/inverted-colors)                                               | Is the user agent or underlying OS inverting colors?                                                                             | Deferred to Media Queries Level 5.                                                                                                    |
| [`pointer`](/pt-BR/docs/Web/CSS/@media/pointer)                                                               | Is the primary input mechanism a pointing device, and if so, how accurate is it?                                                 | Added in Media Queries Level 4.                                                                                                       |
| [`hover`](/pt-BR/docs/Web/CSS/@media/hover)                                                                   | Does the primary input mechanism allow the user to hover over elements?                                                          | Added in Media Queries Level 4.                                                                                                       |
| [`any-pointer`](/pt-BR/docs/Web/CSS/@media/any-pointer)                                                       | Is any available input mechanism a pointing device, and if so, how accurate is it?                                               | Added in Media Queries Level 4.                                                                                                       |
| [`any-hover`](/pt-BR/docs/Web/CSS/@media/any-hover)                                                           | Does any available input mechanism allow the user to hover over elements?                                                        | Added in Media Queries Level 4.                                                                                                       |
| [`light-level`](/pt-BR/docs/Web/CSS/@media/light-level)                                                       | Light level of the environment                                                                                                   | Deferred to Media Queries Level 5.                                                                                                    |
| [`scripting`](/pt-BR/docs/Web/CSS/@media/scripting)                                                           | Is scripting (e.g., JavaScript) available?                                                                                       | Deferred to Media Queries Level 5.                                                                                                    |
| [`device-width`](/pt-BR/docs/Web/CSS/@media/device-width)                                                     | Width of the rendering surface of the output device                                                                              | Deprecated in Media Queries Level 4.                                                                                                  |
| [`device-height`](/pt-BR/docs/Web/CSS/@media/device-height)                                                   | Height of the rendering surface of the output device                                                                             | Deprecated in Media Queries Level 4.                                                                                                  |
| [`device-aspect-ratio`](/pt-BR/docs/Web/CSS/@media/device-aspect-ratio)                                       | Width-to-height aspect ratio of the output device                                                                                | Deprecated in Media Queries Level 4.                                                                                                  |
| [`-webkit-device-pixel-ratio`](/pt-BR/docs/Web/CSS/@media/-webkit-device-pixel-ratio) {{non-standard_inline}} | Number of physical device pixels per CSS pixel                                                                                   | Nonstandard; WebKit/Blink-specific. If possible, use the [`resolution`](/pt-BR/docs/Web/CSS/@media/resolution) media feature instead. |
| [`-webkit-transform-3d`](/pt-BR/docs/Web/CSS/@media/-webkit-transform-3d) {{non-standard_inline}}             | Are CSS 3D {{cssxref("transform")}}s supported?                                                                                  | Nonstandard; WebKit/Blink-specific. If possible, use {{cssxref("@supports")}} instead.                                                |
| [`-webkit-transform-2d`](/pt-BR/docs/Web/CSS/@media/-webkit-transform-2d) {{non-standard_inline}}             | Are CSS 2D {{cssxref("transform")}}s supported?                                                                                  | Nonstandard; WebKit-specific. If possible, use {{cssxref("@supports")}} instead.                                                      |
| [`-webkit-transition`](/pt-BR/docs/Web/CSS/@media/-webkit-transition) {{non-standard_inline}}                 | Are CSS {{cssxref("transition")}}s supported?                                                                                    | Nonstandard; WebKit-specific. If possible, use {{cssxref("@supports")}} instead.                                                      |
| [`-webkit-animation`](/pt-BR/docs/Web/CSS/@media/-webkit-animation) {{non-standard_inline}}                   | Are CSS {{cssxref("animation")}}s supported?                                                                                     | Nonstandard; WebKit-specific. If possible, use {{cssxref("@supports")}} instead.                                                      |

### Logical operators

The _logical operators_ `not`, `and`, and `only` can be used to compose a complex media query. You can also combine multiple media queries into a single rule using a comma-separated list.

#### `and`

The `and` operator is used for combining multiple media features together into a single media query, requiring each chained feature to return true in order for the query to be true. It is also used for joining media features with media types.

#### `not`

The `not` operator is used to negate a media query, returning true if the query would otherwise return false. If present in a comma-separated list, it will only negate the specific query to which it is applied. If you use the `not` operator, you _must_ specify an explicit media type.

> **Nota:** The `not` keyword can't be used to negate an individual feature expression, only an entire media query.

#### `only`

The `only` operator is used to apply a style only if an entire query matches, and is useful for preventing older browsers from applying selected styles. If you use the `only` operator, you _must_ specify an explicit media type.

#### comma-separated lists

Each query in a comma-separated media query list is treated separately from the others. If any of the queries in a list is true, the entire media statement returns true. In other words, lists behave like the logical operator `or`.

### Formal syntax

{{csssyntax}}

## Examples

```css
@media print {
  body {
    font-size: 10pt;
  }
}

@media screen {
  body {
    font-size: 13px;
  }
}

@media screen, print {
  body {
    line-height: 1.2;
  }
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  body {
    line-height: 1.4;
  }
}
```

For more media feature examples, please see the reference page for each specific feature. For more logical operator examples, please see [Using media queries](/pt-BR/CSS/Media_queries).

## Specifications

| Specification                                                     | Status                          | Comment                                                                                                                                                                                                                                                                                        |
| ----------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Compat', '#css-media-queries', 'CSS Media Queries')}} | {{Spec2('Compat')}}             | Standardizes the `-webkit-device-pixel-ratio` and `-webkit-transform-3d` media features.                                                                                                                                                                                                       |
| {{SpecName('CSS3 Conditional', '#at-media', '@media')}}           | {{Spec2('CSS3 Conditional')}}   | Defines the basic syntax of the `@media` rule.                                                                                                                                                                                                                                                 |
| {{SpecName('CSS4 Media Queries', '#media', '@media')}}            | {{Spec2('CSS4 Media Queries')}} | Adds `scripting`, `pointer`, `hover`, `light-level`, `update-frequency`, `overflow-block`, and `overflow-inline` media features. Deprecates all media types except for `screen`, `print`, `speech`, and `all`. Makes the syntax more flexible by adding, among other things, the `or` keyword. |
| {{SpecName('CSS3 Media Queries', '#media0', '@media')}}           | {{Spec2('CSS3 Media Queries')}} | No change.                                                                                                                                                                                                                                                                                     |
| {{SpecName('CSS2.1', 'media.html#at-media-rule', '@media')}}      | {{Spec2('CSS2.1')}}             | Initial definition.                                                                                                                                                                                                                                                                            |

## Browser compatibility

{{Compat("css.at-rules.media")}}

## See also

- [Using media queries](/pt-BR/CSS/Media_queries)
- In JavaScript, `@media` can be accessed via the CSS object model interface {{domxref("CSSMediaRule")}}.
