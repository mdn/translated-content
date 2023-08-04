---
title: The Web Open Font Format (WOFF)
slug: Web/Guide/WOFF
---

**WOFF**(**Web Open Font Format**) — формат шрифтов, разработанный Mozilla совместно с Type Supply, LettError, и др. По сути — это сжатая версия формата [`sfnt`](https://ru.wikipedia.org/wiki/Sfnt), используемого шрифтами TrueType, OpenType, и Open Font Format, но с возможностью добавления мета-данных и приватных структур данных (private-use data structures). Например, в формате предусмотрены поля для ввода информации о лицензии.

Преимущества использования WOFF:

1. The font data is compressed, so sites using WOFF will use less bandwidth and will load faster than if they used equivalent uncompressed TrueType or OpenType files.
2. Many font vendors that are unwilling to license their TrueType or OpenType format fonts for use on the web will license WOFF format fonts. This improves availability of fonts to site designers.
3. Both proprietary and free software browser vendors like the WOFF format, so it has the potential of becoming a truly universal, interoperable font format for the web, unlike other current font formats.

Существует две версии WOFF, отличающихся используемым алгоритмом сжатия: WOFF и WOFF2. В правиле {{cssxref("@font-face")}} они определяются в дескрипторе `format` как `'woff'` или `'woff2'` соответственно.

## Использование WOFF

You can use the {{cssxref("@font-face")}} CSS property to use WOFF fonts for text in web content. It works exactly like OpenType and TrueType format fonts do, except it will likely let your content download more efficiently due to the addition of compression.

## Tools for working with WOFF fonts

- [Tools for working with WOFF](https://github.com/odemiral/woff2sfnt-sfnt2woff) fonts are available. `sfnt2woff` and `woff2sfnt` convert between WOFF and OpenType.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{cssxref("@font-face")}}
