---
title: font-variation-settings
slug: Web/CSS/Reference/At-rules/@font-face/font-variation-settings
original_slug: Web/CSS/@font-face/font-variation-settings
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`font-variation-settings`** は CSS の記述子で、 {{cssxref("@font-face")}} アットルールの中で OpenType または TrueType の低水準のフォントバリエーションを指定することができます。この記述子の値は、グローバルキーワード値を除いて {{cssxref("font-variation-settings")}} と同じです。

この記述子は、要素全体ではなく `@font-face` アットルールのフォントオブジェクトにバリエーション値を設定するので、要素内の一部の字体だけがこの記述子を使用して描画されるかもしれません。

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
  - : テキストを描画するとき、 OpenType の軸名のリストがテキストレイアウトエンジンに渡され、フォント機能を有効化または無効化します。それぞれの設定は常に {{cssxref("&lt;string&gt;")}} が 4 つの {{Glossary("ASCII")}} 文字で、その後に軸の値を示す {{cssxref("number")}} が続きます。 `<string>` の長さが異なっていたり U+20 - U+7E 以外のコードポイントの範囲の文字が含まれていたりした場合は、プロパティ全体が無効になります。 `<number>` は小数や負の数を取ることができます。

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

- その他の `@font-face` 記述子: {{cssxref("@font-face/font-display", "font-display")}}, {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("font-feature-settings", "font-feature-settings")}}, {{cssxref("@font-face/font-stretch", "font-stretch")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}, {{cssxref("@font-face/unicode-range", "unicode-range")}}
- 関連フォントプロパティ: {{cssxref("font-feature-settings")}}, {{cssxref("font-variation-settings")}}
