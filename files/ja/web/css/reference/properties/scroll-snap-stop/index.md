---
title: scroll-snap-stop
slug: Web/CSS/Reference/Properties/scroll-snap-stop
original_slug: Web/CSS/scroll-snap-stop
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`scroll-snap-stop`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロールコンテナーが可能なスナップ位置を「通り過ぎる」ことを許可するかどうかを定義します。

{{InteractiveExample("CSS デモ: scroll-snap-stop")}}

```css interactive-example-choice
scroll-snap-stop: normal;
```

```css interactive-example-choice
scroll-snap-stop: always;
```

```html-nolint interactive-example
<section class="default-example" id="default-example">
  <p class="explanation">
    このプロパティの効果は、タッチパッドを備えた端末で確認できます。 1 回のスワイプですべてのアイテムをスクロールしてみてください。 <b class="keyword">'normal'</b> の値はすべてのページを通過しますが、 <b class="keyword">'always'</b> は 2 つ目のページで停止します。
  </p>
  <div class="snap-container">
    <div>1</div>
    <div id="example-element">2</div>
    <div>3</div>
  </div>
  <div class="info">スクロール »</div>
</section>
```

```css interactive-example
.default-example {
  flex-direction: column;
}

.explanation {
  margin-top: 0;
}

.keyword {
  color: darkorange;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

.snap-container {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
  scroll-snap-type: x mandatory;
}

.snap-container > div {
  flex: 0 0 250px;
  width: 250px;
  background-color: rebeccapurple;
  color: #fff;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  scroll-snap-align: start;
}

.snap-container > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

## 構文

```css
/* キーワード値 */
scroll-snap-stop: normal;
scroll-snap-stop: always;

/* グローバル値 */
scroll-snap-stop: inherit;
scroll-snap-stop: initial;
scroll-snap-stop: revert;
scroll-snap-stop: revert-layer;
scroll-snap-stop: unset;
```

### 値

- `normal`
  - : スクロールコンテナーの視覚{{Glossary("viewport", "ビューポート")}}がスクロールされた時、可能なスナップ位置を「通り過ぎる」ことを許可します。
- `always`
  - : スクロールコンテナーは可能なスナップ位置を「通り過ぎる」ことを許可しません。最初の要素のスナップ位置にスナップします。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 異なるスナップ停止の値を設定

以下の例は、`scroll-snap-stop` の `always` 値と `normal` 値の違いを示しています。 2 つの `scroll-snap-stop` 値の違いは、`scroll-snap-type` プロパティが `mandatory` に設定されている場合（この例で使用されている）でより顕著になります。

#### HTML

```html
<p>scroll-snap-stop: always (X Mandatory)</p>
<div class="x mandatory-scroll-snapping always-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) on odd child elements</p>
<div class="x mandatory-scroll-snapping always-stop-odd">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (X Mandatory) on even child elements</p>
<div class="x mandatory-scroll-snapping always-stop-even">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: normal (X Mandatory)</p>
<div class="x mandatory-scroll-snapping normal-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: always (Y Mandatory)</p>
<div class="y mandatory-scroll-snapping always-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>

<p>scroll-snap-stop: normal (Y Mandatory)</p>
<div class="y mandatory-scroll-snapping normal-stop">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</div>
```

#### CSS

```css hidden
/* 設定 */
body {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
  text-align: center;
}

div[class] {
  font-size: 3rem;
  display: flex;
  overflow: auto;
  flex: none;
}

.x {
  width: 50%;
  min-width: 15rem;
  height: 6rem;
  flex-flow: row nowrap;
}

.y {
  width: 30%;
  min-width: 12rem;
  height: 12rem;
  flex-flow: column nowrap;
}

div > div {
  flex: none;
  outline: 1px solid #333;
}

.x > div {
  width: 90%;
  height: 100%;
}

.y > div {
  width: 100%;
  height: 80%;
}

/* 着色 */
div > div:nth-child(even) {
  background-color: #87ea87;
}

div > div:nth-child(odd) {
  background-color: #87ccea;
}
```

```css
/* 親に強制スクロールスナップを設定 */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}

.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}

/* 子要素のスクロールスナップ配置を定義 */
div > div {
  scroll-snap-align: center;
}

/* 子要素のスクロールスナップ停止を定義 */
.always-stop > div {
  scroll-snap-stop: always;
}

.always-stop-odd > div:nth-of-type(odd) {
  scroll-snap-stop: always;
}

.always-stop-even > div:nth-of-type(even) {
  scroll-snap-stop: always;
}

.normal-stop > div {
  scroll-snap-stop: normal;
}
```

#### 結果

下記の X および Y ボックスで、それぞれ左から右、上から下へスクロールしてみてください。 `scroll-snap-stop` プロパティが `always` に設定されている X および Y ボックスでは、高速でスクロールしても、スナップ点でスクロールが強制的に停止します。ただし、 `scroll-snap-stop` プロパティが `normal` に設定されているボックスでは、高速でスクロールしてもスナップ点はスキップされます。

必要に応じて、スクロールコンテナー内で `always` で停止するアイテムを選択することができます。これは、以下の例で、奇数と偶数のアイテムを対象として示されています。要件に応じて、別の戦略を選択することができます。以下の例では、スクロールは、 2 つ目と 3 つ目のボックスの奇数と偶数のアイテムを「通過」しません。

{{EmbedLiveSample("Snapping_in_different_axes", "100%", "1080")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
