---
title: CSS テキスト
slug: Web/CSS/Guides/Text
original_slug: Web/CSS/CSS_text
l10n:
  sourceCommit: d92ee717f209ccad5d5a5705d64548e1d289f5d9
---

**CSS テキスト** (CSS text) モジュールは、改行、文字揃え、配置、ホワイトスペースの扱い、テキスト変換などのテキスト操作の実行方法を定義します。

## リファレンス

### プロパティ

- {{cssxref("hanging-punctuation")}}
- {{cssxref("hyphenate-character")}}
- {{cssxref("hyphenate-limit-chars")}}
- {{cssxref("hyphens")}}
- {{cssxref("letter-spacing")}}
- {{cssxref("line-break")}}
- {{cssxref("overflow-wrap")}} （および別名の `word-wrap`）
- {{cssxref("tab-size")}}
- {{cssxref("text-align")}}
- {{cssxref("text-align-last")}}
- {{cssxref("text-indent")}}
- {{cssxref("text-justify")}}
- {{cssxref("text-autospace")}}
- {{cssxref("text-spacing-trim")}} {{Experimental_Inline}}
- {{cssxref("text-transform")}}
- {{cssxref("text-wrap")}}
- {{cssxref("text-wrap-mode")}}
- {{cssxref("text-wrap-style")}}
- {{cssxref("white-space")}}
- {{cssxref("white-space-collapse")}}
- {{cssxref("word-break")}}
- {{cssxref("word-spacing")}}

仕様書では `hyphenate-limit-last`, `hyphenate-limit-lines`, `hyphenate-limit-zone`, `line-padding`, `text-align-all`, `text-group-align`, `text-spacing`, `white-space-trim`, `word-space-transform`, `wrap-after`, `wrap-before`, `wrap-inside` の各プロパティも定義していますが、まだどのブラウザーも対応していません。

### ガイド

- [テキストの分割と折り返し](/ja/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
  - : あふれたテキストを CSS で管理する、さまざまな方法についてのガイドです。

## 関連概念

### プロパティ

- {{cssxref("direction")}}
- {{cssxref("font-feature-settings")}}
- {{cssxref("initial-letter")}}
- {{cssxref("orphans")}}
- {{cssxref("text-combine-upright")}}
- {{cssxref("text-orientation")}}
- {{cssxref("text-overflow")}}
- {{cssxref("text-size-adjust")}} {{Experimental_Inline}}
- {{cssxref("unicode-bidi")}}
- {{cssxref("widows")}}
- {{cssxref("writing-mode")}}

### 値

- {{cssxref("min-content")}}
- {{cssxref("max-content")}}

### HTML

- {{htmlelement("pre")}}
- {{htmlelement("wbr")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)モジュール
- [CSS オーバーフロー](/ja/docs/Web/CSS/Guides/Overflow)モジュール
- [CSS フォント](/ja/docs/Web/CSS/Guides/Fonts)モジュール
- [CSS ルビレイアウト](/ja/docs/Web/CSS/Guides/Ruby_layout)モジュール
- [CSS テキスト装飾](/ja/docs/Web/CSS/Guides/Text_decoration)モジュール
