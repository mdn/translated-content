---
title: base-palette
slug: Web/CSS/@font-palette-values/base-palette
l10n:
  sourceCommit: 7eff4df25ad857f65577930903797127ebabf991
---

{{CSSRef}}

**`base-palette`** は CSS の[記述子](/ja/docs/Glossary/CSS_Descriptor)で、新しいパレットを作成する際に使用する定義済みパレットの名前またはインデックスを指定するために使用します。指定された `base-palette` が存在しない場合、インデックス 0 で定義されたパレットが使用されます。

## 構文

```css
@font-palette-values --one {
  base-palette: 1;
}
```

`base-palette` [記述子](/ja/docs/Glossary/CSS_Descriptor)は、フォントメーカーが作成したパレットのゼロ基点のインデックスを使用して指定します。

### 値

- `<index>`
  - : 使用する定義済みパレットのインデックスを指定します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フォントの既定のパレットを変更

[Rocher カラーフォント](https://www.harbortype.com/fonts/rocher-color/)を用いて、この例ではフォントの既定パレットをフォントメーカーが作成した代替パレットに切り替える例を 2 つ示します。

#### HTML

```html
<h2>default base-palette</h2>
<h2 class="two">base-palette at index 2</h2>
<h2 class="five">base-palette at index 5</h2>
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

@font-palette-values --two {
  font-family: "Rocher";
  base-palette: 2;
}

@font-palette-values --five {
  font-family: "Rocher";
  base-palette: 5;
}

.two {
  font-palette: --two;
}

.five {
  font-palette: --five;
}
```

#### 結果

![Example showing 3 different base-palettes of Rocher color font](./rocher-color-font-alt-base-palettes.jpg)

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("@font-palette-values/", "@font-palette-values")}}
- {{cssxref("@font-palette-values/font-family", "font-family")}} 記述子
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} 記述子
- {{cssxref("font-palette/", "font-palette")}} プロパティ
- {{domxref("CSSFontPaletteValuesRule.basePalette")}}
