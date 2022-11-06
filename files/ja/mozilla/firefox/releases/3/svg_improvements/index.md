---
title: Firefox 3 における SVG の改良
slug: Mozilla/Firefox/Releases/3/SVG_improvements
original_slug: SVG_improvements_in_Firefox_3
---

{{FirefoxSidebar}}

Firefox 3 では、以前のバージョンの Firefox よりも改善された [Scalable Vector Graphics](/ja/docs/Web/SVG) (SVG) サポートが追加されました。これらの機能は、別の場所で文書化されていますが、この記事は、便利な一覧を提供することで、どの機能が Firefox 3 で追加されたのかを判別しやすくします。

- `foreignObject` 要素のサポート ({{ Bug(326966) }}, [仕様](https://www.w3.org/TR/SVG11/extend.html#ForeignObjectElement), [参考](http://weblogs.mozillazine.org/roc/archives/2006/06/the_future_is_now.html))
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

- `<a>` element handling in SVG has had several bugs fixed; see {{ Bug(267664) }}, {{ Bug(268135) }}, {{ Bug(316248) }}, {{ Bug(317270) }} and {{ Bug(320724) }}.
- The SVG DOM Methods `getNumberOfChars()`, `getComputedTextLength()`, `getSubStringLength()`, `getStartPositionOfChar()`, `getEndPositionOfChar()`, `getRotationOfChar()`, and `getCharNumAtPosition()` have been implemented.
- `xml:space` 属性の実装 ([仕様](https://www.w3.org/TR/SVG/text.html#WhiteSpace))
- fallback `fill`/`stroke` are now supported ([spec](https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint))
- `em` and `ex` units are now supported for indicating lengths ({{ Bug(305859) }}).

## 関連情報

- [SVG](/ja/docs/Web/SVG)
- [SVG in Firefox](/ja/docs/Web/SVG/SVG_1.1_Support_in_Firefox)
- [Firefox 3 for developers](/ja/docs/Mozilla/Firefox/Releases/3)
