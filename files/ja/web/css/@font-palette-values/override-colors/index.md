---
title: override-colors
slug: Web/CSS/@font-palette-values/override-colors
l10n:
  sourceCommit: 7ab2f95b22919d8b897754e8a66981d0b9a4e2c4
---

{{CSSRef}}

**`override-colors`** は CSS の[記述子](/ja/docs/Glossary/CSS_Descriptor)で、選ばれた[ベースパレット](/ja/docs/Web/CSS/@font-palette-values/base-palette)の色をカラーフォントに上書きするために使用します。

## 構文

```css
/* 基本的な構文 */
override-colors: <index of color> <color>;

/* 色名の使用 */
override-colors: 0 red;

/* 16 進色の使用 */
override-colors: 0 #f00;

/* rgb の使用 */
override-colors: 0 rgb(255 0 0);

/* 複数の色のオーバーライド */
override-colors:
  0 #f00,
  1 #0f0,
  2 #00f;

/* 複数の色のオーバーライドを読みやすく */
override-colors:
  0 #f00,
  1 #0f0,
  2 #00f;
```

`override-colors` [記述子](/ja/docs/Glossary/CSS_Descriptor)は、色インデックスと新しい色値をカンマで区切ったリストを取ります。

色インデックスはゼロ基点で、任意の[色値](/ja/docs/Web/CSS/color_value)を使用することができます。

それぞれのインデックスと色のキーと値の組に対して、指定した[ベースパレット](/ja/docs/Web/CSS/@font-palette-values/base-palette)内のインデックスの色が上書きされます。カラーフォントが指定したインデックスの色を持たない場合、それは無視されます。

### 値

- `[ <integer [0,∞]> <absolute-color-base> ]`
  - : [ベースパレット](/ja/docs/Web/CSS/@font-palette-values/base-palette)の色のインデックスと上書きする色を指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 絵文字の色の変更

この例では、 [Noto Color Emoji](https://fonts.google.com/noto/specimen/Noto+Color+Emoji) カラーフォントの色をサイトのブランドに一致するように上書きする方法を示します。

#### HTML

```html
<section class="hats">
  <div class="hat">
    <h2>Original Hat</h2>
    <div class="emoji">🎩</div>
  </div>
  <div class="hat">
    <h2>Red Hat</h2>
    <div class="emoji red-hat">🎩</div>
  </div>
</section>
```

#### CSS

```css hidden
.hats {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
```

```css-nolint
@font-face {
  font-family: "Noto Color Emoji";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/l/font?kit=Yq6P-KqIXTD0t4D9z1ESnKM3-HpFabts6diywYkdG3gjD0U&skey=a373f7129eaba270&v=v24)
    format("woff2");
}

.emoji {
  font-family: "Noto Color Emoji";
  font-size: 3rem;
}
@font-palette-values --red {
  font-family: "Noto Color Emoji";
  override-colors:
    0 rgb(74 11 0),
    1 rgb(149 22 1),
    2 rgb(183 27 1),
    3 rgb(193 28 1),
    4 rgb(230 34 1);
}
.red-hat {
  font-palette: --red;
}
```

#### 結果

{{EmbedLiveSample("Changing colors of emojis")}}

### 色を他のベースパレットに変更

この例は [Rocher Color Font](https://www.harbortype.com/fonts/rocher-color/) を使用して、フォント内の一色をオーバーライドする方法を示します。

#### HTML

```html
<h2 class="normal-palette">Normal Palette</h2>
<h2 class="override-palette">Override Palette</h2>
```

#### CSS

```css
@font-face {
  font-family: "Rocher";
  src: url("[path-to-font]/RocherColorGX.woff2") format("woff2");
}
h2 {
  font-family: "Rocher";
}
@font-palette-values --override-palette {
  font-family: "Rocher";
  base-palette: 3;
}
@font-palette-values --override-palette {
  font-family: "Rocher";
  base-palette: 3;
  override-colors: 0 rebeccapurple;
}
.normal-palette {
  font-palette: --normal-palette;
}
.override-palette {
  font-palette: --override-palette;
}
```

#### 結果

この例では `base-palette` が `3` であるフォントを表示し、インデックス 0 の色を `rebeccapurple` でオーバーライドします。

![ベースパレットと 1 色をオーバーライドしたベースパレットを示す例](override-base-palette-color.jpg)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}}
- {{cssxref("font-palette/", "font-palette")}}
- {{domxref("CSSFontPaletteValuesRule.overrideColors")}}
