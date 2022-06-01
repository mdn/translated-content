---
title: orientation
slug: Web/CSS/@media/orientation
tags:
  - '@media'
  - CSS
  - メディアクエリー
  - リファレンス
  - メディア特性
browser-compat: css.at-rules.media.orientation
translation_of: Web/CSS/@media/orientation
---
{{CSSRef}}

**`orientation`** は [CSS](/ja/docs/Web/CSS) の[メディア特性](/ja/docs/Web/CSS/@media#メディア特性)で、{{glossary("viewport", "ビューポート")}} (または[ページ付きメディア](/ja/docs/Web/CSS/Paged_media)ではページボックス) の向きを調べるために使用することができます。

> **Note:** この特性は*端末*の向きには関係がありません。多くの端末では縦長の向きでソフトキーボードを開くと、ビューポートの幅が高さよりも大きくなり、ブラウザーは portrait ではなく landscape のスタイルを使用することになります。

## 構文

`orientation` 特性は以下の一覧のうち一つのキーワード値で指定します。

### キーワード値

- `portrait`
  - : ビューポートは縦長です。つまり、高さが幅よりも大きいか等しい状態です。
- `landscape`
  - : ビューポートは横長です。つまり、幅が高さよりも大きい状態です。

## 例

### HTML

```html
<div>Box 1</div>
<div>Box 2</div>
<div>Box 3</div>
```

### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

### 結果

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
