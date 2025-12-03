---
title: CSS インラインレイアウト
slug: Web/CSS/Guides/Inline_layout
original_slug: Web/CSS/CSS_inline_layout
l10n:
  sourceCommit: 113279ab09692d869866519106e25cba8a20abb8
---

**CSS インラインレイアウト**モジュールは、インラインレベルのコンテンツのブロック軸配置とサイズを定義し、ドロップキャップ用の特別なレイアウトモードを追加します。 コンテナー内の要素とテキストの流れを複数行にわたって折り返すための CSS 整形モデルを記述しています。

## リファレンス

### プロパティ

- {{cssxref("alignment-baseline")}}
- {{cssxref("dominant-baseline")}}
- {{cssxref("initial-letter")}}
- {{cssxref("line-height")}}
- {{cssxref("text-box-edge")}}
- {{cssxref("text-box-trim")}}
- {{cssxref("text-box")}} 一括指定
- {{cssxref("vertical-align")}}

この仕様では、`baseline-shift`、`baseline-source`、`initial-letter-align`、`initial-letter-wrap`、`inline-sizing`、`line-fit-edge` の各プロパティも定義していますが、これらは現時点ではどのブラウザーも対応していません。

### データ型

- {{cssxref("&lt;text-edge&gt;")}}

### 用語集の用語

- {{glossary("baseline/typography", "ベースライン")}}
- {{glossary("leading", "行送り")}}

## ガイド

- [インライン整形コンテキスト](/ja/docs/Web/CSS/Guides/Inline_layout/Inline_formatting_context)
  - : インライン整形コンテキストを説明します。

## 関連概念

- {{cssxref("font-size")}} プロパティ
- {{cssxref("font-feature-settings")}} プロパティ
- {{cssxref("letter-spacing")}} プロパティ
- {{cssxref("text-anchor")}} プロパティ
- {{cssxref("::first-letter")}} 擬似要素
- {{cssxref(":first-child")}} 擬似クラス

## 仕様書

{{Specifications}}

## 関連情報

- [CSS テキスト](/ja/docs/Web/CSS/Guides/Text)モジュール
- [CSS フォント](/ja/docs/Web/CSS/Guides/Fonts)モジュール
- [CSS 書字方向](/ja/docs/Web/CSS/Guides/Writing_modes)モジュール
