---
title: Firefox 3 における SVG の改良
slug: Mozilla/Firefox/Releases/3/SVG_improvements
l10n:
  sourceCommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{FirefoxSidebar}}

Firefox 3 では、以前のバージョンの Firefox よりも改善された [Scalable Vector Graphics](/ja/docs/Web/SVG) (SVG) サポートが追加されました。これらの機能は、別の場所で文書化されていますが、この記事は、便利な一覧を提供することで、どの機能が Firefox 3 で追加されたのかを判別しやすくします。

- `foreignObject` 要素のサポート ([Firefox バグ 326966](https://bugzil.la/326966)、[仕様](https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement)、[参考](https://robert.ocallahan.org/2006/06/future-is-now_20.html)
- `pattern` 要素のサポート ([仕様](https://www.w3.org/TR/SVG11/pservers.html#PatternElement))
- `mask` 要素のサポート ([仕様](https://www.w3.org/TR/SVG11/masking.html#MaskElement))
- SVG フィルタのサポート ([仕様](https://www.w3.org/TR/SVG11/filters.html))

  - `filter`
  - `feDistantLight`
  - `fePointLight`
  - `feSpotLight`
  - `feBlend`
  - `feColorMatrix`
  - `feConvolveMatrix`
  - `feComponentTransfer`, `feFuncR`, `feFuncG`, `feFuncB`, `feFuncA`
  - `feComposite`
  - `feConvolveMatrix`
  - `feDiffuseLighting`
  - `feDisplacementMap`
  - `feDistantLight`
  - `feFlood`
  - `feGaussianBlur`
  - `feImage`
  - `feMerge`, `feMergeNode`
  - `feMorphology`
  - `feOffset`
  - `fePointLight`
  - `feSpecularLighting`
  - `feTurbulence`
  - `feTile`

- `<a>` element handling in SVG has had several bugs fixed; see [Firefox バグ 267664](https://bugzil.la/267664), [Firefox バグ 268135](https://bugzil.la/268135), [Firefox バグ 316248](https://bugzil.la/316248), [Firefox バグ 317270](https://bugzil.la/317270) and [Firefox バグ 320724](https://bugzil.la/320724).
- The SVG DOM Methods `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()`, and `getCharNumAtPosition()` have been implemented.
- `xml:space` 属性の実装 ([仕様](https://www.w3.org/TR/SVG/text.html#WhiteSpace))
- fallback `fill`/`stroke` are now supported ([spec](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint))
- `em` and `ex` units are now supported for indicating lengths ([Firefox バグ 305859](https://bugzil.la/305859)).

## 関連情報

- [SVG](/ja/docs/Web/SVG)
- [Firefox での SVG](/ja/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
