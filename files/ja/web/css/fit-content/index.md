---
title: fit-content
slug: Web/CSS/fit-content
l10n:
  sourceCommit: c0daf1f038fdbdb62d71bfdeaf3a0a083660792c
---

{{CSSRef}}

**`fit-content`** キーワードは {{cssxref("fit-content_function", "fit-content(stretch)")}} と同等です。実際には、ボックスは利用可能な空間を使用しますが、　{{cssxref("max-content")}} 以上にはならないことを意味します。

{{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("min-width")}}, {{cssxref("min-height")}}, {{cssxref("max-width")}}, {{cssxref("max-height")}} のレイアウトされたボックスの大きさとして使用される場合、最大寸法と最小寸法は、コンテンツの寸法を参照します。

{{cssxref("interpolate-size")}} プロパティと {{cssxref("calc-size()")}} 関数を使用して、 `fit-content` との間でアニメーションをすることができます。

> [!NOTE]
> CSS ボックスサイズ指定の仕様書では、 {{cssxref("fit-content_function", "fit-content()")}} という関数も定義されています。このページではキーワード版について詳しく説明します。

## 構文

```css
width: fit-content;
block-size: fit-content;
```

## 例

### fit-content を使用してボックスの大きさを指定

#### HTML

```html-nolint live-sample___using_fit-content_for_box_sizing
<div class="container">
  <div class="item">アイテム</div>
  <div class="item">もっとテキストの多いアイテム。</div>
  <div class="item">
    テキストを多く持つアイテム。できるだけ多くのテキストを追加したので、テキストが折り返し始めることを期待しています。
  </div>
</div>
```

#### CSS

```css live-sample___using_fit-content_for_box_sizing
.container {
  border: 2px solid #ccc;
  padding: 10px;
  width: 20em;
}

.item {
  width: fit-content;
  background-color: #8ca0ff;
  padding: 5px;
  margin-bottom: 1em;
}
```

#### 結果

{{EmbedLiveSample("Using_fit-content_for_box_sizing", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/CSS_box_sizing)モジュール
