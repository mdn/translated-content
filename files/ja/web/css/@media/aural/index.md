---
title: aural
slug: Web/CSS/@media/aural
tags:
  - CSS
  - 非推奨
  - リファレンス
  - aural
  - メディア特性
  - speech
translation_of: Web/CSS/@media/aural
original_slug: Web/CSS/aural
---
{{CSSRef}} {{deprecated_header}}

`aural` は [CSS](/ja/docs/Web/CSS) の[メディア種別](/ja/docs/Web/CSS/@media#メディア種別)で、音声出力の能力を持った機器に使用されます。

> **Note:** このメディア種別は [`speech`](/ja/docs/Web/CSS/@media#speech) に置き換えられ、非推奨になりました。

## 構文

CSS の `aural` メディア種別は — [`speech`](/ja/docs/Web/CSS/@media#speech) メディア種別に置き換えられて非推奨になりましたが — 音声合成装置を使ってコンテンツを表示する場合にのみ適用される CSS のブロックを指定するために使用されていました。

```css
@media aural {
  /* ここで音声に関するスタイルを定義 */
}
```

既存の CSS を `speech` メディアタイプを使用するように更新するのは、`aural` を `speech` に置き換えるだけの簡単な作業です。

## 例

### 基本的な例

```css
@media aural {
  body { voice-family: Paul }
}
```

## 仕様書

| 仕様書                                    | 状態     | 備考             |
| ------------------------------------------------ | ---------- | ------------------- |
| {{SpecName('CSS2.2', '', 'aural')}} | 非推奨 | 初回定義 |

## 関連情報

- [メディアクエリー](/ja/docs/Web/CSS/Media_Queries)
- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
- [`@media`](/ja/docs/Web/CSS/@media)
- [`speech`](/ja/docs/Web/CSS/@media#speech)
