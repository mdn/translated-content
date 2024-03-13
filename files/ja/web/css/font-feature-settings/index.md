---
title: font-feature-settings
slug: Web/CSS/font-feature-settings
---

{{CSSRef}}

**`font-feature-settings`** は CSS のプロパティで、 OpenType フォントの拡張書体の特性を制御します。

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
font-feature-settings: unset;
```

可能な限り、ウェブの作者は代わりに {{cssxref("font-variant")}} 一括指定プロパティ、または関連する個別指定プロパティである {{cssxref("font-variant-ligatures")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}} プロパティを使うべきです。

これらは `font-feature-settings` よりも、もっと効率的で、予想でき、理解できる結果をもたらし、 `font-feature-settings` は、 OpenType フォント特性を有効またはアクセスするための他の方法が存在しない特殊なケースを処理するように設計された低レベルの機能です。特に、スモールキャップの表現に `font-feature-settings` を使うべきではありません。

### 値

- `normal`
  - : テキストは既定の設定で配置されます。
- `<feature-tag-value>`
  - : テキストの描画時、 OpenType の特性タグ値のリストがテキストレイアウトエンジンに渡され、フォントの機能を有効化または無効化します。タグは常に 4 文字の ASCII 文字の {{cssxref("&lt;string&gt;")}} です。文字数がこれより少ないか多い場合、もしくはコードポイント U+20 - U+7E の範囲外の文字を含む場合、プロパティ全体が無効になります。<br>
    値は正の整数です。キーワード `on` と `off` はそれぞれ `1` と `0` の別名です。値が設定されていなければ、既定値は `1` です。 論理値ではない OpenType 特性 (例: [stylistic alternates](https://www.microsoft.com/typography/otspec/features_pt.htm#salt)) では、この値は選ばれる特定の字形を意味します。論理値の特性はオンとオフを切り替えます。

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### 様々なフォント特性を有効にする

```css
/* スモールキャップ代替字形 */
.smallcaps {
  font-feature-settings: "smcp" on;
}

/* 大文字と小文字の両方をスモールキャップに変換 (記号も) */
.allsmallcaps {
  font-feature-settings: "c2sc", "smcp";
}

/* スラッシュのついたゼロを使用して "O" と区別する */

.nicezero {
  font-feature-settings: "zero";
}

/* 歴史的な書体を有効に */
.hist {
  font-feature-settings: "hist";
}

/* よくある合字を無効にする (既定ではオン) */
.noligs {
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
.fancystyle {
  font-family: Gabriola; /* available on Windows 7, and on Mac OS */
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
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
- [OpenType 特性タグ](https://docs.microsoft.com/typography/opentype/spec/featurelist)のリスト
