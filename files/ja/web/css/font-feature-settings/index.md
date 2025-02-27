---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**`font-feature-settings`** は [CSS](/ja/docs/Web/CSS) のプロパティで、 OpenType フォントの拡張書体の特性を制御します。

{{EmbedInteractiveExample("pages/css/font-feature-settings.html")}}

## 構文

```css
/* 既定の設定を使用する */
font-feature-settings: normal;

/* OpenType の特性タグの値を設定する */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings:
  "smcp",
  "swsh" 2;

/* グローバル値 */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: revert;
font-feature-settings: revert-layer;
font-feature-settings: unset;
```

可能な限り、ウェブの作者は代わりに {{cssxref("font-variant")}} 一括指定プロパティ、または関連する個別指定プロパティである {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}} プロパティを使うべきです。

これらは `font-feature-settings` よりも、もっと効率的で、予想でき、理解できる結果をもたらし、 `font-feature-settings` は、 OpenType フォント特性を有効またはアクセスするための他の方法が存在しない特殊なケースを処理するように設計された低レベルの機能です。特に、スモールキャップの表現に `font-feature-settings` を使うべきではありません。

### 値

このプロパティは、キーワード `normal` または `<feature-tag-value>` 値のカンマ区切りリストとして指定します。テキストを描画するとき、 OpenType の `<feature-tag-value>` 値のリストがテキストレイアウトエンジンに渡され、フォント特性を有効または無効にします。

- `normal`
  - : テキストを既定のフォント設定でレイアウトすることを示します。これが既定値です。
- `<feature-tag-value>`

  - : タグ名とオプション値からなる、空白区切りのデータ列を表します。

    タグ名は {{cssxref("&lt;string&gt;")}} で、常に 4 つの {{Glossary("ASCII")}} 文字からなります。タグ名の文字数が多かったり少なかったり、 `U+20` – `U+7E` コードポイント範囲外の文字を格納している場合、記述子は無効になります。

    オプション値は正の整数か、キーワード `on` または `off` にすることができます。キーワード `on` および `off` は、それぞれ値 `1` および `0` と同義語です。値が設定されていない場合は、既定で `1` になります。論理値でない OpenType 特性 （[stylistic alternates](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt) など）では、この値は選択する具体的な字体を意味し、論理値の特性の場合は、その特性のオンとオフを意味します。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 様々なフォント特性を有効にする

```css
/* スモールキャップ代替字形 */
.small-caps {
  font-feature-settings: "smcp" on;
}

/* 大文字と小文字の両方をスモールキャップに変換 (記号も) */
.all-small-caps {
  font-feature-settings: "c2sc", "smcp";
}

/* スラッシュのついたゼロを使用して "O" と区別する */
.nice-zero {
  font-feature-settings: "zero";
}

/* 歴史的な書体を有効に */
.historical {
  font-feature-settings: "hist";
}

/* よくある合字を無効にする (既定ではオン) */
.no-ligatures {
  font-feature-settings: "liga" 0;
}

/* 表内の数字を有効にする (等幅) */
td.tabular {
  font-feature-settings: "tnum";
}

/* 自動的に分数化する */
.fractions {
  font-feature-settings: "frac";
}

/* 利用可能な2番目のスウォッシュ文字を使用 */
.swash {
  font-feature-settings: "swsh" 2;
}

/* スタイリッシュセット 7 を有効にする */
.fancy-style {
  font-family: Gabriola;
  font-feature-settings: "ss07";
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
- [OpenType 特性タグ](https://learn.microsoft.com/en-us/typography/opentype/spec/featurelist)のリスト
- [CSS における OpenType 機能](https://sparanoid.com/lab/opentype-features/)
