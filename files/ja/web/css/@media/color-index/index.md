---
title: color-index
slug: Web/CSS/@media/color-index
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - メディア特性
  - リファレンス
browser-compat: css.at-rules.media.color-index
translation_of: Web/CSS/@media/color-index
---
{{CSSRef}}

**`color-index`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、出力端末の色参照テーブルの項目数を調べるために使用します。

## 構文

 `color-index` 特性は {{cssxref("&lt;integer&gt;")}} 値で指定し、出力端末の色参照テーブルの項目数を表します。 (端末がそのようなテーブルを使用していなければ、値はゼロになります)。これは範囲を持つ特性であり、つまり接頭辞の付いた **`min-color-index`** および **`max-color-index`** という変化形を使用して、それぞれ最小値と最大値を問い合わせることができます。

## 例

### 基本的な例

#### HTML

```html
<p>これはテストです。</p>
```

#### CSS

```css
p {
  color: black;
}

@media (color-index) {
  p {
    color: red;
  }
}

@media (min-color-index: 15000) {
  p {
    color: #1475ef;
  }
}
```

#### 結果

{{EmbedLiveSample("Basic_example")}}

### 独自スタイルシート

この HTML は、256色以上を持つ端末に専用のスタイルシートを適用します。

```html
<link rel="stylesheet" href="http://foo.bar.com/base.css" />
<link rel="stylesheet" media="all and (min-color-index: 256)" href="http://foo.bar.com/color-stylesheet.css" />
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [@media](/ja/docs/Web/CSS/@media)
