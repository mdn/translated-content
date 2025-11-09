---
title: CSSCounterStyleRule
slug: Web/API/CSSCounterStyleRule
l10n:
  sourceCommit: f75fd658f627b5730a14ada901120cfa4ee01bda
---

{{APIRef("CSS Counter Styles")}}

**`CSSCounterStyleRule`** インターフェイスは {{CSSxRef("@counter-style")}} [アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)を表します。

{{InheritanceDiagram}}

## インスタンスプロパティ

_このインターフェイスには親である {{DOMxRef("CSSRule")}} から継承したプロパティもあります。_

- {{DOMxRef("CSSCounterStyleRule.name")}}
  - : 文字列オブジェクトで、関連するルールの `name` として定義されている {{CSSxRef("&lt;custom-ident&gt;")}} がシリアライズされたものです。
- {{DOMxRef("CSSCounterStyleRule.system")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/system", "system")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.symbols")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/symbols", "symbols")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.additiveSymbols")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.negative")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/negative", "negative")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.prefix")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/prefix", "prefix")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.suffix")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/suffix", "suffix")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.range")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/range", "range")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.pad")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/pad", "pad")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.speakAs")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/speak-as", "speak-as")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。
- {{DOMxRef("CSSCounterStyleRule.fallback")}}
  - : 文字列オブジェクトで、関連するルールで定義された {{CSSxRef("@counter-style/fallback", "fallback")}} 記述子がシリアライズされたものです。記述子が関連するルールで指定されていない場合、この属性は空文字列を返します。

## インスタンスメソッド

_このインターフェイスは独自のメソッドを実装していませんが、親である {{DOMxRef("CSSRule")}} から継承したメソッドがあります。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef("@counter-style")}}
- [CSS カウンタースタイル](/ja/docs/Web/CSS/Guides/Counter_styles)モジュール
