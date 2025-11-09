---
title: color-gamut
slug: Web/CSS/Reference/At-rules/@media/color-gamut
original_slug: Web/CSS/@media/color-gamut
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

**`color-gamut`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)で、{{glossary("user agent", "ユーザーエージェント")}}および出力機器が対応している{{glossary("gamut", "色域")}}のおおよその範囲に基づいて CSS スタイルを適用するために使用されます。

## 構文

`color-gamut` 特性は、以下の{{glossary("color space", "色空間")}}のいずれかをキーワード値で指定します。

- `srgb`
  - : ユーザーエージェントと出力機器が [sRGB](/ja/docs/Glossary/Color_space#srgb) 色域にほぼ対応、またはそれより広い範囲に対応している場合です。大多数のカラーディスプレイはこれに含まれます。
- `p3`
  - : ユーザーエージェントと出力機器が [Display P3](https://www.color.org/chardata/rgb/DisplayP3.xalter)色空間にほぼ対応、またはそれより広い色域に対応している場合です。 P3 色域は sRGB 色域よりも広く、また sRGB 色域を含んでいます。
- `rec2020`
  - : ユーザーエージェントと出力機器がおよそ [ITU-R 勧告 BT.2020](https://en.wikipedia.org/wiki/Rec._2020) 色空間にほぼ対応、またはそれより広い色域に対応している場合です。 REC. 2020 色域は P3 色域よりも広く、またP3色域を含んでいます。

## 例

### HTML

```html
<p>This is a test.</p>
```

### CSS

```css
p {
  padding: 10px;
  border: solid;
}

@media (color-gamut: srgb) {
  p {
    background: #f4ae8a;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`color()`](/ja/docs/Web/CSS/Reference/Values/color_value/color) 関数で、定義された色空間における色を指定します。
- [CSS 色](/ja/docs/Web/CSS/Guides/Colors)モジュール
- [`@media`](/ja/docs/Web/CSS/Reference/At-rules/@media) アットルールは、 color-gamut 式を指定するために使用します。
- [メディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Using): メディアクエリーをいつ、どうやって使うかを理解する
- [CSS メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries) モジュール
- [sRGB](https://ja.wikipedia.org/wiki/SRGB)（ウィキペディア）
