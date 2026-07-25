---
title: CSS `fit-content` キーワード
short-title: fit-content
slug: Web/CSS/Reference/Values/fit-content
l10n:
  sourceCommit: aaedffba9f47d6dce7967a4191963378026d9406
---

`fit-content` はサイズ指定キーワードで、コンテナー内でコンテンツに合わせて要素のサイズが調整されることを表します。
このキーワードを使用すると、要素のサイズが、その最小内在サイズ ({{cssxref("min-content")}}) を下回ったり、最大内在サイズ ({{cssxref("max-content")}}) を上回ったりすることがなくなります。

> [!NOTE]
> このキーワードは、{{cssxref("fit-content()")}} 関数とは異なります。この関数は、グリッドトラックのサイズ指定（例えば {{cssxref("grid-template-columns")}} や {{cssxref("grid-auto-rows")}} など）や、{{cssxref("width")}}、{{cssxref("height")}}、 {{cssxref("min-width")}}、{{cssxref("max-height")}} などのプロパティに対するレイアウト済みボックスのサイズ指定に使用されます。

## 構文

```css
/* サイズ指定プロパティ内で使用 */
width: fit-content;
height: fit-content;
inline-size: fit-content;
block-size: fit-content;
```

## 解説

このキーワードは、{{cssxref("width")}}、{{cssxref("height")}}、{{cssxref("block-size")}}、{{cssxref("inline-size")}}、 {{cssxref("min-width")}}、{{cssxref("max-width")}} などのサイズ指定プロパティと組み合わせて使用されます。これらのプロパティで使用されている場合、計算されるサイズは要素の[コンテンツボックス](/ja/docs/Web/CSS/Reference/Values/box-edge#content-box)を参照します。

`fit-content` が設定されている場合、要素はコンテンツに合わせて拡大または縮小しますが、関連する辺のサイズがコンテナーのサイズ制限に達すると、それ以上の拡大は停止します。

`fit-content` のサイズは、次の式を用いて計算されます。

```plain
min(max-content, max(min-content, stretch))
```

ここで、[`stretch`](/ja/docs/Web/CSS/Reference/Properties/width#stretch) は、要素の[マージンボックス](/ja/docs/Web/CSS/Reference/Values/box-edge#margin-box)が、その[包含ブロック](/ja/docs/Web/CSS/Guides/Display/Containing_block#包含ブロックの識別)の幅に一致します。このキーワードは、本質的に `fit-content(stretch)` と同等です。

{{cssxref("interpolate-size")}} プロパティと {{cssxref("calc-size()")}} 関数を使用すると、`fit-content` との間でアニメーションをすることができます。

## 例

### fit-content を使用してボックスの大きさを指定

#### HTML

```html
<div class="container">
  <div class="item">アイテム</div>
  <div class="item">もっとテキストの多いアイテム。</div>
  <div class="item">
    テキストを多く持つアイテム。できるだけ多くのテキストを追加したので、テキストが折り返し始めることを期待しています。
  </div>
</div>
```

#### CSS

```css
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

{{EmbedLiveSample("fit-content_を使用してボックスの大きさを指定", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 関連する大きさのキーワード: {{cssxref("min-content")}}, {{cssxref("max-content")}}
- [CSS ボックスサイズ指定](/ja/docs/Web/CSS/Guides/Box_sizing)モジュール
