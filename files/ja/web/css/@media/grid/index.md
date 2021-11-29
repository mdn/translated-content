---
title: grid
slug: Web/CSS/@media/grid
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.grid
translation_of: Web/CSS/@media/grid
---
{{CSSRef}}

**`grid`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、出力機器がグリッドベースの画面を使用しているかどうかを調べるために使用します。

現在のパソコンやスマートフォンの大部分は、ビットマップベースの画面を持っています。グリッドベースの画面とは、例えばテキストのみの端末や、固定フォントのみで表示する基本的な電話などです。

## 構文

`grid` 特性は {{cssxref("&lt;mq-boolean&gt;")}} 値 (`0` または `1`) として指定し、出力機器がグリッドベースであるかどうかを表します。

## 例

### HTML

```html
<p class="unknown">I don't know if you're using a grid device. :-(</p>
<p class="bitmap">You are using a bitmap device.</p>
<p class="grid">You are using a grid device! Neato!</p>
```

### CSS

```css
:not(.unknown) {
  color: lightgray;
}

@media (grid: 0) {
  .unknown {
    color: lightgray;
  }

  .bitmap {
    color: red;
    text-transform: uppercase;
  }
}

@media (grid: 1) {
  .unknown {
    color: lightgray;
  }

  .grid {
    color: black;
    text-transform: uppercase;
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
