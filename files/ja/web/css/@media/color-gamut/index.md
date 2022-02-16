---
title: color-gamut
slug: Web/CSS/@media/color-gamut
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - メディア特性
  - リファレンス
browser-compat: css.at-rules.media.color-gamut
translation_of: Web/CSS/@media/color-gamut
---
{{CSSRef}}

**`color-gamut`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、{{glossary("user agent", "ユーザーエージェント")}}および出力機器が対応している色のおよその範囲を調べるために使用することができます。

## 構文

`color-gamut` 特性は以下の一覧のうち一つのキーワード値で指定します。

- `srgb`
  - : 出力機器が [sRGB](https://ja.wikipedia.org/wiki/SRGB) 色域にほぼ対応、またはそれより広い範囲に対応している場合です。大多数のカラーディスプレイはこれに含まれます。
- `p3`
  - : 出力機器が [DCI P3 色空間](https://en.wikipedia.org/wiki/DCI-P3)にほぼ対応、またはそれより広い色域に対応している場合です。 P3 色域は sRGB 色域よりも広く、またsRGB色域を含んでいます。
- `rec2020`
  - : 出力機器がおよそ [ITU-R 勧告 BT.2020 色空間](https://en.wikipedia.org/wiki/Rec._2020)にほぼ対応、またはそれより広い色域に対応している場合です。 REC2020 色域は P3 色域よりも広く、またP3色域を含んでいます。

## 例

### HTML

```html
<p>This is a test.</p>
```

### CSS

```css
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

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
