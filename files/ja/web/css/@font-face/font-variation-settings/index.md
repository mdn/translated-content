---
title: font-variation-settings
slug: Web/CSS/@font-face/font-variation-settings
---

{{CSSRef}}

**`font-variation-settings`** は CSS の記述子で、 {{cssxref("@font-face")}} ルールの中で OpenType または TrueType の低レベルのフォントバリエーションを指定することができます。

## 構文

```css
/* 既定の設定を使用 */
font-variation-settings: normal;

/* OpenType 軸名の値を設定 */
font-variation-settings: "xhgt" 0.7;
```

### 値

- `normal`
  - : テキストは既定の設定を使用してレイアウトされます。
- `<string> <number>`
  - : テキストを描画するとき、 OpenType の軸名のリストがテキストレイアウトエンジンに渡され、フォント機能を有効化または無効化します。それぞれの設定は常に {{cssxref("&lt;string&gt;")}} が 4 つの ASCII 文字で、その後に軸の値を示す {{cssxref("number")}} が続きます。 `<string>` の長さが異なっていたり U+20 - U+7E 以外のコードポイントの範囲の文字が含まれていたりした場合は、プロパティ全体が無効になります。 `<number>` は小数や負の数を取ることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### @font-face ルール内でフォントの太さと幅を設定

```css
@font-face {
  font-family: "OpenTypeFont";
  src: url("open_type_font.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-variation-settings:
    "wght" 400,
    "wdth" 300;
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
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
