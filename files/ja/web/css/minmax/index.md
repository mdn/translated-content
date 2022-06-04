---
title: minmax()
slug: Web/CSS/minmax
tags:
  - CSS
  - CSS 関数
  - CSS グリッド
  - Experimental
  - 関数
  - リファレンス
  - ウェブ
  - レイアウト
translation_of: Web/CSS/minmax()
original_slug: Web/CSS/minmax()
browser-compat: css.properties.grid-template-columns.minmax
---
{{CSSRef}}

**`minmax()`** は [CSS](/ja/docs/Web/CSS) の関数で、寸法の範囲を _min_ 以上、 _max_ 以下で定義します。 [CSS グリッド](/ja/docs/Web/CSS/CSS_Grid_Layout)で使用されます。

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

/* <fixed-breadth>, <track-breadth> 値 */
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
  - : 単位 `fr` がついた負ではない寸法で、トラックのフレックス係数を指定します。それぞれの `&lt;flex&gt;` による寸法のトラックは、フレックス係数の割合に従って残りの空間を配分します。
- `max-content`
  - : グリッドトラックを占めるグリッドアイテムの max-content の貢献度の最大値を表します。
- `min-content`
  - : グリッドトラックを占めるグリッドアイテムの min-content の貢献度の最大値を表します。
- `auto`
  - : 最大値としては、 `max-content` と同じです。最小値としては、グリッドトラックを占めるグリッドアイテムの ({{cssxref("min-width")}}/{{cssxref("min-height")}} で決定する) 最大の最小値を表します。

<h3 id="Formal_syntax" name="Formal_syntax">形式文法</h3>

{{csssyntax}}

<h3 id="CSS_properties" name="CSS_properties">CSS プロパティ</h3>

`minmax()` 関数は次の中で使用することができます。

- [grid-template-columns](/ja/docs/Web/CSS/grid-template-columns)
- [grid-template-rows](/ja/docs/Web/CSS/grid-template-rows)
- [grid-auto-columns](/ja/docs/Web/CSS/grid-auto-columns)
- [grid-auto-rows](/ja/docs/Web/CSS/grid-auto-rows)

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
  <div>
    Item as wide as the content, but at most 300 pixels.
  </div>
  <div>
    Item with flexible width but a minimum of 200 pixels.
  </div>
  <div>
    Inflexible item of 150 pixels width.
  </div>
</div>
```

### 結果

{{EmbedLiveSample("Examples", "100%", 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- グリッドレイアウトガイド: [グリッドレイアウトの基本概念 - minmax() によるトラックの寸法制御](/ja/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout#トラックのサイズ指定と_minmax())
- [CSS グリッドと論理的な値と書字方向](/ja/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Logical_Values_and_Writing_Modes)
- 動画チュートリアル: _[Introducing minmax()](https://gridbyexample.com/video/series-minmax/)_
