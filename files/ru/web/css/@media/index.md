---
title: "@media"
slug: Web/CSS/@media
---

{{CSSRef}}

## Описание

At-правило `@media` в [CSS](/ru/docs/Web/CSS) связывает набор операторов, ограниченных фигурными скобками, в CSS блок, применяется при соблюдении условия одного или нескольких [медиавыражений](/ru/docs/Web/CSS/Media_Queries/Using_media_queries).

> **Примечание:** В JavaScript, at-правило `@media` может быть получено с помощью {{domxref("CSSMediaRule")}}, интерфейса объектной модели CSS.

## Синтаксис

At-правило `@media` можно разместить не только на верхнем уровне CSS, но и внутри любого фрагмента [условной группы-правил](/ru/docs/Web/CSS/At-rule#Conditional_group_rules).

```css
/* На верхнем уровне кода */
@media screen and (min-width: 900px) {
  article {
    padding: 1rem 3rem;
  }
}

/* Вложено в другое условное at-правило */
@supports (display: flex) {
  @media screen and (min-width: 900px) {
    article {
      display: flex;
    }
  }
}
```

Для рассмотрения синтаксиса медиавыражений, см. [Использование медиавыражений](/ru/docs/Web/CSS/Media_Queries/Using_media_queries#Syntax).

### Формальный синтаксис

{{csssyntax}}

A `<media-query>` is composed of a optional media type and/or a number of media features.

## Типы

- all
  - : Подходит для всех устройств.
- print
  - : Intended for paged material and for documents viewed on screen in print preview mode. Please consult the section on [paged media](/en/CSS/Paged_Media), and the [media section of the Getting Started tutorial](/en/CSS/Getting_Started/Media) for information about formatting issues that are specific to paged media.
- screen
  - : Предназначен в первую очередь для цветных компьютерных экранов.
- speech
  - : Предназначен для синтезаторов речи.

> **Примечание:** CSS2.1 и Media Queries 3 определили несколько дополнительных значений (`tty`, `tv`, `projection`, `handheld`, `braille`, `embossed`, `aural`), но они устарели в [Media Queries 4](http://dev.w3.org/csswg/mediaqueries/#media-types) и не рекомендуется к использованию.

## Media Features

Each _media feature_ tests for one specific feature of the browser or device.

| Имя                                                                                                        | Summary                                                                                                                      | Notes                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| [`width`](/ru/docs/Web/CSS/@media/width)                                                                   | Viewport width                                                                                                               |                                                                                                                                    |
| [`height`](/ru/docs/Web/CSS/@media/height)                                                                 | Viewport height                                                                                                              |                                                                                                                                    |
| [`aspect-ratio`](/ru/docs/Web/CSS/@media/aspect-ratio)                                                     | Width-to-height aspect ratio of the viewport                                                                                 |                                                                                                                                    |
| [`orientation`](/ru/docs/Web/CSS/@media/orientation)                                                       | Orientation of the viewport                                                                                                  |                                                                                                                                    |
| [`resolution`](/ru/docs/Web/CSS/@media/resolution)                                                         | Pixel density of the output device                                                                                           |                                                                                                                                    |
| [`scan`](/ru/docs/Web/CSS/@media/scan)                                                                     | Scanning process of the output device                                                                                        |                                                                                                                                    |
| [`grid`](/ru/docs/Web/CSS/@media/grid)                                                                     | Is the device a grid or bitmap?                                                                                              |                                                                                                                                    |
| [`update-frequency`](/ru/docs/Web/CSS/@media/update-frequency)                                             | How quickly (if at all) can the output device modify the appearance of the content                                           | Added in Media Queries Level 4                                                                                                     |
| [`overflow-block`](/ru/docs/Web/CSS/@media/overflow-block)                                                 | How does the output device handle content that overflows the viewport along the block axis?                                  | Added in Media Queries Level 4                                                                                                     |
| [`overflow-inline`](/ru/docs/Web/CSS/@media/overflow-inline)                                               | Can content that overflows the viewport along the inline axis be scrolled?                                                   | Added in Media Queries Level 4                                                                                                     |
| [`color`](/ru/docs/Web/CSS/@media/color)                                                                   | Number of bits per color component of the output device, or zero if the device isn't color.                                  |                                                                                                                                    |
| [`color-index`](/ru/docs/Web/CSS/@media/color-index)                                                       | Number of entries in the output device's color lookup table, or zero if the device does not use such a table.                |                                                                                                                                    |
| [`display-mode`](/ru/docs/Web/CSS/@media/display-mode)                                                     | The display mode of the application, as specified in the web app manifest's [display member](/ru/docs/Web/Manifest#display). | Defined in the [Web App Manifest spec](http://w3c.github.io/manifest/#the-display-mode-media-feature).                             |
| [`monochrome`](/ru/docs/Web/CSS/@media/monochrome)                                                         | Bits per pixel in the output device's monochrome frame buffer, or 0 if the device is not monochrome.                         |                                                                                                                                    |
| [`inverted-colors`](/ru/docs/Web/CSS/@media/inverted-colors)                                               | Is the user agent or underlying OS inverting colors?                                                                         | Added in Media Queries Level 4                                                                                                     |
| [`pointer`](/ru/docs/Web/CSS/@media/pointer)                                                               | Is the primary input mechanism a pointing device, and if so, how accurate is it?                                             | Added in Media Queries Level 4                                                                                                     |
| [`hover`](/ru/docs/Web/CSS/@media/hover)                                                                   | Does the primary input mechanism allow the user to hover over elements?                                                      | Added in Media Queries Level 4                                                                                                     |
| [`any-pointer`](/ru/docs/Web/CSS/@media/any-pointer)                                                       | Is any available input mechanism a pointing device, and if so, how accurate is it?                                           | Added in Media Queries Level 4                                                                                                     |
| [`any-hover`](/ru/docs/Web/CSS/@media/any-hover)                                                           | Does any available input mechanism allow the user to hover over elements?                                                    | Added in Media Queries Level 4                                                                                                     |
| [`light-level`](/ru/docs/Web/CSS/@media/light-level)                                                       | Current ambient light level                                                                                                  | Added in Media Queries Level 4                                                                                                     |
| [`scripting`](/ru/docs/Web/CSS/@media/scripting)                                                           | Is scripting (e.g. JavaScript) available?                                                                                    | Added in Media Queries Level 4                                                                                                     |
| [`device-width`](/ru/docs/Web/CSS/@media/device-width)                                                     | Width of the rendering surface of the output device                                                                          | Deprecated in Media Queries Level 4                                                                                                |
| [`device-height`](/ru/docs/Web/CSS/@media/device-height)                                                   | Height of the rendering surface of the output device                                                                         | Deprecated in Media Queries Level 4                                                                                                |
| [`device-aspect-ratio`](/ru/docs/Web/CSS/@media/device-aspect-ratio)                                       | Width-to-height aspect ratio of the output device                                                                            | Deprecated in Media Queries Level 4                                                                                                |
| [`-webkit-device-pixel-ratio`](/ru/docs/Web/CSS/@media/-webkit-device-pixel-ratio) {{non-standard_inline}} | Number of physical device pixels per CSS pixel                                                                               | Nonstandard; WebKit/Blink-specific. If possible, use the [`resolution`](/ru/docs/Web/CSS/@media/resolution) media feature instead. |
| [`-webkit-transform-3d`](/ru/docs/Web/CSS/@media/-webkit-transform-3d) {{non-standard_inline}}             | Are CSS 3D {{cssxref("transform")}}s supported?                                                                              | Nonstandard; WebKit/Blink-specific                                                                                                 |
| [`-webkit-transform-2d`](/ru/docs/Web/CSS/@media/-webkit-transform-2d) {{non-standard_inline}}             | Are CSS 2D {{cssxref("transform")}}s supported?                                                                              | Nonstandard; WebKit-specific                                                                                                       |
| [`-webkit-transition`](/ru/docs/Web/CSS/@media/-webkit-transition) {{non-standard_inline}}                 | Are CSS {{cssxref("transition")}}s supported?                                                                                | Nonstandard; WebKit-specific                                                                                                       |
| [`-webkit-animation`](/ru/docs/Web/CSS/@media/-webkit-animation) {{non-standard_inline}}                   | Are CSS {{cssxref("animation")}}s supported?                                                                                 | Nonstandard; WebKit-specific                                                                                                       |

## Примеры

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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Media queries](/en/CSS/Media_queries)
- The CSSOM {{ domxref("CSSMediaRule") }} associated with this at-rule.
