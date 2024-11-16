---
title: minmax()
slug: Web/CSS/minmax
l10n:
  sourceCommit: fab1f9cef824066b3ce6a5b25f6c6db539f5d042
---

{{CSSRef}}

**`minmax()`** は [CSS の関数](/ja/docs/Web/CSS/CSS_Functions)で、寸法の範囲を _min_ 以上、 _max_ 以下で定義します。 [CSS グリッド](/ja/docs/Web/CSS/CSS_grid_layout)で使用されます。

{{EmbedInteractiveExample("pages/css/function-minmax.html")}}

## 構文

```css
/* <inflexible-breadth>, <track-breadth> 値 */
minmax(200px, 1fr)
minmax(400px, 50%)
minmax(30%, 300px)
minmax(100px, max-content)
minmax(min-content, 400px)
minmax(max-content, auto)
minmax(auto, 300px)
minmax(min-content, auto)

/* <fixed-breadth>, <track-breadth> 値 */
minmax(200px, 1fr)
minmax(30%, 300px)
minmax(400px, 50%)
minmax(50%, min-content)
minmax(300px, max-content)
minmax(200px, auto)

/* <inflexible-breadth>, <fixed-breadth> 値 */
minmax(400px, 50%)
minmax(30%, 300px)
minmax(min-content, 200px)
minmax(max-content, 200px)
minmax(auto, 300px)
```

_min_ および _max_ の 2 つの引数を取る関数です。

どちらの引数も `<length>`, `<percentage>`, `<flex>`, またはキーワード値 `max-content`, `min-content`, `auto` のうちの一つを取ります。

もし _min_ が _max_ より大きい場合は無視され、 `minmax(min,max)` は _min_ として扱われます。最大値として、 {{cssxref("flex_value","&lt;flex&gt;")}} 値はグリッドトラックのフレックス係数を設定します。それは _min_ としては無効です。

### 値

- {{cssxref("&lt;length&gt;")}}
  - : 負ではない寸法。
- {{cssxref("&lt;percentage&gt;")}}
  - : 負ではないパーセント値で、列グリッドトラックのグリッドコンテナーのインライン寸法、および行グリッドトラックのグリッドコンテナーのブロック寸法からの相対値。グリッドコンテナーの寸法がトラックの寸法に依存する場合、 `<percentage>` は `auto` として扱う必要があります。{{glossary("user agent", "ユーザーエージェント")}}は、グリッドコンテナーの寸法に対するトラックの固有の寸法の貢献度を調整し、パーセント値を尊重して最小限の量だけトラックの最終的な寸法を増加させることがあります。
- {{cssxref("&lt;flex&gt;")}}
  - : 単位 `fr` がついた負ではない寸法で、トラックのフレックス係数を指定します。それぞれの `<flex>` による寸法のトラックは、フレックス係数の割合に従って残りの空間を配分します。
- `max-content`
  - : グリッドトラックを占めるグリッドアイテムの max-content の貢献度の最大値を表します。
- `min-content`
  - : グリッドトラックを占めるグリッドアイテムの min-content の貢献度の最大値を表します。
- `auto`
  - : `min` として使用した場合、グリッドトラックを占めるグリッドアイテムの最大最小サイズ（{{cssxref("min-width")}}/{{cssxref("min-height")}} で指定）を表します。
    `max` として使用した場合は、 `max-content` と同じです。ただし、 `max-content` とは異なり、 `normal` や `stretch` のように {{cssxref("align-content")}} や {{cssxref("justify-content")}} プロパティ値によるトラックの拡張が可能です。

### 形式文法

{{csssyntax}}

### CSS プロパティ

`minmax()` 関数は次の中で使用することができます。

- {{CSSxRef("grid-template-columns")}}
- {{CSSxRef("grid-template-rows")}}
- {{CSSxRef("grid-auto-columns")}}
- {{CSSxRef("grid-auto-rows")}}

## 例

### CSS

```css
#container {
  display: grid;
  grid-template-columns: minmax(min-content, 300px) minmax(200px, 1fr) 150px;
  grid-gap: 5px;
  box-sizing: border-box;
  height: 200px;
  width: 100%;
  background-color: #8cffa0;
  padding: 10px;
}

#container > div {
  background-color: #8ca0ff;
  padding: 5px;
}
```

### HTML

```html
<div id="container">
  <div>コンテンツと同じ幅で、最大 300 ピクセルのアイテムです。</div>
  <div>幅は自由ですが、最小 200 ピクセルが必要なアイテムです。</div>
  <div>幅 150 ピクセルの柔軟性のないアイテムです。</div>
</div>
```

### 結果

{{EmbedLiveSample("Examples", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- グリッドレイアウトガイド: _[グリッドレイアウトの基本概念 - minmax() によるトラックの寸法制御](/ja/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#トラックのサイズ指定と_minmax)_
- [グリッド、論理的な値、書字方向](/ja/docs/Web/CSS/CSS_grid_layout/Grids_logical_values_and_writing_modes)
- 動画チュートリアル: _[Introducing minmax()](https://gridbyexample.com/video/series-minmax/)_
