---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-palette-values/font-family
original_slug: Web/CSS/@font-palette-values/font-family
l10n:
  sourceCommit: 9231a7046973685f4600e1891fa644ecce41ef3b
---

[@font-palette-values](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values) の[記述子](/ja/docs/Glossary/CSS_Descriptor)である **`font-family`** は、どのフォントファミリーのパレット値を適用するかを指定するために使用します。これは、 CSS の [font-family](/ja/docs/Web/CSS/Reference/Properties/font-family)を設定するときに使用する値と正確に一致する必要があります。

## 構文

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* other palette settings follow */
}
```

続く他のパレット値は、指定したフォントファミリーにのみ適用されます。他のフォントファミリーの [@font-palette-values](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values) は、同じ [&lt;dashed-ident&gt;s](/ja/docs/Web/CSS/Reference/Values/dashed-ident) を用いることで作成することができます。これは、複数のカラーフォントを持っていて、それぞれに同じ識別子を使用することができる、ということを意味しています。

### 値

- `<family-name>`
  - : [font-family](/ja/docs/Web/CSS/Reference/Properties/font-family) の名前を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 一致するファミリー名の使用

この例では、 `font-family` 記述子が [@font-palette-values](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values) アットルールで使用される場合、 `font-family` には宣言時と同じ値が使用されます。

#### HTML

```html
<h2>This is spicy</h2>
<h2 class="extra-spicy">This is extra hot & spicy</h2>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);
@font-palette-values --bungee-extra-spicy {
  font-family: "Bungee Spice";
  override-colors:
    0 DarkRed,
    1 Red;
}

h2 {
  font-family: "Bungee Spice";
}

h2.extra-spicy {
  font-palette: --bungee-extra-spicy;
}
```

#### 結果

{{EmbedLiveSample("Using matching family names")}}

### 複数のフォントファミリーに対して同じパレット識別子を使用

この例では、 2 つの [@font-palette-values](/ja/docs/Web/CSS/Reference/At-rules/@font-palette-values) アットルールが 2 つのフォントファミリーに設定されていますが、どちらのアットルールも同じ dashed-ident 識別子である `--Dark Mode` を使用しています。これは、複数の要素（この場合 `h1` と `h2`）に対して同時に [font-palette](/ja/docs/Web/CSS/Reference/Properties/font-palette) プロパティを設定するのに役立ちます。これは、サイトのブランディングに一致するようにフォントの色を更新したいときに有益なことができます。

```css
@font-palette-values --Dark-Mode {
  font-family: "Bungee Spice";
  /* Bungee Spice のためのパレット設定 */
}

@font-palette-values --Dark-Mode {
  font-family: Bixa;
  /* Bixa のためのパレット設定 */
}

h1,
h2 {
  font-palette: --Dark-Mode;
}

h1 {
  font-family: "Bungee Spice";
}

h2 {
  font-family: Bixa;
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} 記述子
- {{cssxref("font-palette/", "font-palette")}} プロパティ
- {{domxref("CSSFontPaletteValuesRule.fontFamily")}}
