---
title: font-display
slug: Web/CSS/@font-face/font-display
---

{{CSSRef}}

**`font-display`** 記述子は、フォントがダウンロード済みで利用できるかに基づいて、どのようにフォントの種類を表示するかを定めます。

## 構文

```css
/* キーワード値 */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### 値

- `auto`
  - : フォントの表示戦略はユーザーエージェントが定義します。
- `block`
  - : フォントに対して短いブロック時間の後、永続的にスワップ時間を置きます。
- `swap`
  - : フォントに対して非常に短いブロック時間の後、永続的にスワップ時間を置きます。
- `fallback`
  - : フォントに対して非常に短いブロック時間の後、短いスワップ時間を置きます。
- `optional`
  - : フォントに対して非常に短いブロック時間の後、スワップ時間を置きません。

> **メモ:** Firefox では、 `gfx.downloadable_fonts.fallback_delay` および `gfx.downloadable_fonts.fallback_delay_short` の設定項目で、それぞれ "short" および "extremely small" の時間が利用できます。

## 解説

### フォント表示の過程

フォント表示の過程は、ユーザーエージェントが指定されたダウンロードフォントを利用しようとした瞬間に始まります。過程はフォントを利用して任意の要素を表示する振る舞いを説明する、以下の 3 つの時間に分かれます。

- フォントブロック時間
  - : フォントが読み込まれていない場合、そのフォントを利用しようとしている要素は*不可視の*代替フォントで描画されます。この時間に読み込みに成功したフォントは、通常通りに利用できます。
- フォントスワップ時間
  - : フォントが読み込まれていない場合、そのフォントを利用しようとしている要素は代替フォントで描画されます。この時間に読み込みに成功したフォントは、通常通りに利用できます。
- フォント失敗時間
  - : フォントが読み込まれていなければ、ユーザーエージェントは読み込みに失敗したとして扱い、通常のフォントで代替を行います。

## 公式定義

{{cssinfo}}

## 構文

{{csssyntax}}

## 例

### font-display のフォールバックの指定

```css
@font-face {
  font-family: ExampleFont;
  src:
    url(/path/to/fonts/examplefont.woff) format("woff"),
    url(/path/to/fonts/examplefont.eot) format("eot");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
