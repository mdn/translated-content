---
title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

`fit-content` はサイズ指定キーワードで、要素のサイズがコンテンツに合わせて適応しつつ、コンテナーの制限内に収まることを表します。
このキーワードは、要素が内在的な最小サイズ ({{cssxref("min-content")}}) より小さくなったり、内在的な最大サイズ ({{cssxref("max-content")}}) より大きくなったりしないことを確実にします。

> [!NOTE]
> このキーワードは {{cssxref("fit-content_function", "fit-content()")}} 関数とは異なります。この関数は、グリッドトラックのサイズ設定（{{cssxref("grid-template-columns")}} や {{cssxref("grid-auto-rows")}} など）や、レイアウト済みボックスのサイズ設定（{{cssxref("width")}}、 {{cssxref("height")}}、{{cssxref("min-width")}}、{{cssxref("max-height")}} などのプロパティのレイアウト済みボックスのサイズ設定に使用されます。

## 構文

```css
/* サイズ指定プロパティで使用 */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## 解説

このキーワードは、{{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("block-size")}}、{{cssxref("inline-size")}}、{{cssxref("min-width")}}、{{cssxref("max-width")}} などのサイズ指定プロパティで使用されます。これらのプロパティで使用される場合、計算されたサイズは要素の[コンテンツボックス](/ja/docs/Web/CSS/Reference/Values/box-edge#content-box)を参照します。

`fit-content`が設定されている場合、要素はコンテンツに合わせて伸長または縮小しますが、関連するサイズがコンテナーのサイズ制限に達した後、それ以上の伸長は停止します。

`fit-content` サイズは次の式を使用して計算されます。

```plain
min(max-content, max(min-content, stretch))
```

ここで、[`stretch`](/ja/docs/Web/CSS/Reference/Properties/width#stretch) は要素の[マージンボックス](/ja/docs/Web/CSS/Reference/Values/box-edge#margin-box)をその[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)の幅に合わせる。このキーワードは本質的に `fit-content(stretch)` と同等である。

{{cssxref("interpolate-size")}} プロパティと {{cssxref("calc-size()")}} 関数を使用して、`fit-content` を始点・終点としたアニメーションを有効にすることができます。

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
  border: 2px solid #cccccc;
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
- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
