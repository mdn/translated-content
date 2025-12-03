---
title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
original_slug: Web/CSS/dashed-ident
l10n:
  sourceCommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

**`<dashed-ident>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/Reference/Values/Data_types)で、 {{glossary("identifier")}} として使用される任意の文字列を示します。

## 構文

`<dashed-ident>` の構文は CSS の識別子（プロパティ名など）と似ていますが、[大文字小文字を区別する](https://ja.wikipedia.org/wiki/ケース・センシティブ)という点が異なります。 2 つのダッシュで始まり、ユーザー定義の識別子が続きます。

先頭に 2 つのダッシュをつけることで、 CSS コードブロックを読むときに簡単に識別でき、標準 CSS キーワードとの名前の衝突を避けることができます。

[`<custom-ident>`](/ja/docs/Web/CSS/Reference/Values/custom-ident) と同様に、 `<dashed-ident>` はユーザーによって識別されますが、 `<custom-ident>` とは異なり、 [CSS](/ja/docs/Web/CSS) は `<dashed-ident>` を定義しません。

## 例

### CSS カスタムプロパティでの使用

`<dashed-ident>` は [CSS カスタムプロパティ](/ja/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)で使用されます。まずプロパティが宣言され、 [CSS の var() 関数](/ja/docs/Web/CSS/Reference/Values/var)の中で使用されます。

```css
html {
  --primary-color: red;
  --secondary-color: blue;
  --tertiary-color: green;
}

h1,
h4 {
  color: var(--primary-color);
}

h2,
h5 {
  color: var(--secondary-color);
}

h3,
h6 {
  color: var(--tertiary-color);
}
```

### @color-profile での使用

`<dashed-ident>` が [@color-profile](/ja/docs/Web/CSS/Reference/At-rules/@color-profile) アットルールで使用される場合、先にアットルールが宣言され、それから [CSS の color() 関数](/ja/docs/Web/CSS/Reference/Values/color_value/color)内で使用されます。

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### @font-palette-values での使用

`<dashed-ident>` を [@font-palette-values](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values) アットルールで使用する場合、先にアットルールを宣言してから、 [font-palette](/ja/docs/Web/CSS/Reference/Properties/font-palette) プロパティの値として使用します。

```css
@font-palette-values --my-palette {
  font-family: Bixa;
  base-palette: 1;
  override-colors: 0 #ff0000;
}

h1,
h2,
h3,
h4 {
  font-palette: --my-palette;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

_この型は実際の型ではなく、他の CSS 構文の定義を簡略化するために使用する便宜的な型であるため、ブラウザーの互換性に関する情報はありません。_

## 関連情報

- [&lt;ident&gt;](/ja/docs/Web/CSS/Reference/Values/ident)
- [&lt;custom-ident&gt;](/ja/docs/Web/CSS/Reference/Values/custom-ident)
