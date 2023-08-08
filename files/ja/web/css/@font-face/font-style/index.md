---
title: font-style
slug: Web/CSS/@font-face/font-style
---

{{CSSRef}}

**`font-style`** は CSS の記述子で、 {{cssxref("@font-face")}} ルールの中で指定されたフォントのフォントスタイルを指定することができます。

特定のフォントファミリーについて、同じフォントファミリーの異なるスタイルに対応する様々なフォントフェイスをダウンロードできるようにすることができ、 `font-style` 記述子を使用してフォントフェイスのスタイルを正確に指定することができます。 CSS 記述子の値は対応する font プロパティと同じです。

## 構文

```css
font-style: normal;
font-style: italic;
font-style: oblique;
font-style: oblique 30deg;
font-style: oblique 30deg 50deg;
```

### 値

- `normal`
  - : フォントファミリーの通常の版を選択します。
- `italic`
  - : フォントフェイスが通常のフォントのイタリック版であることを指定します。
- `oblique`
  - : フォントフェイスが通常のフォントを機械的に傾けたものであることを指定します。
- `oblique` と角度
  - : `oblique` として分類されたフォントを選択し、テキストの角度を追加で指定します。
- `oblique` と角度の範囲
  - : `oblique` として分類されたフォントを選択し、テキストの角度の範囲を追加で指定します。なお、範囲は `font-style` が `oblique` であるときにだけ対応しています。 `font-style: normal` 又は `italic` の場合は、第二の値は許可されません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### イタリックフォントスタイルの指定

例として、 garamond フォントファミリーを指定すると、基本の形として、以下の結果が得られます。

```css
@font-face {
  font-family: garamond;
  src: url("garamond.ttf");
}
```

![スタイルのない Garamond](garamondunstyled.jpg)

このテキストのイタリック版は、スタイルなしの版と同じ字形を使用しますが、人工的に数度だけ傾けてあります。

![人工的に傾けた garamond](garamondartificialstyle.jpg)

一方で、フォントファミリーに真にイタリックである版がある場合、 `src` 記述子を含めてそのフォントがイタリックだと指定することで、フォントがイタリックになることが明確になります。本当のイタリックは異なる字形を用い、少し右上に傾いており、いくらか固有の特徴を持ち、一般に丸みを帯びており、筆記体に似た品質です。これらのフォントはフォントのデザイナーによって特別に作成されたものであり、人工的に傾けたものでは**ありません**。

```css
@font-face {
  font-family: garamond;
  src: url("garamond-italic.ttf");
  font-style: italic;
}
```

![イタリックの garamond](garamonditalic.jpg)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/unicode-range", "unicode-range")}}
