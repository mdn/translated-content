---
title: scroll-snap-type
slug: Web/CSS/Reference/Properties/scroll-snap-type
original_slug: Web/CSS/scroll-snap-type
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

**`scroll-snap-type`** は [CSS](/ja/docs/Web/CSS) のプロパティで、{{glossary("scroll container", "スクロールコンテナー")}}に設定され、[スナップポート](/ja/docs/Glossary/Scroll_snap#スナップポート)内のスナップポイントの強制の方向と厳格さを設定することで、スクロールスナップを有効にします。

{{InteractiveExample("CSS デモ: scroll-snap-type")}}

```css interactive-example-choice
scroll-snap-type: none;
```

```css interactive-example-choice
scroll-snap-type: x mandatory;
```

```css interactive-example-choice
scroll-snap-type: x proximity;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  <div class="info">スクロール »</div>
</section>
```

```css interactive-example
.default-example {
  flex-wrap: wrap;
}

.default-example .info {
  width: 100%;
  padding: 0.5em 0;
  font-size: 90%;
}

#example-element {
  text-align: left;
  width: 250px;
  height: 250px;
  overflow-x: scroll;
  display: flex;
  box-sizing: border-box;
  border: 1px solid black;
}

#example-element > div {
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

#example-element > div:nth-child(even) {
  background-color: #fff;
  color: rebeccapurple;
}
```

スクロールポートのコンテンツが変更された場合 （例えば、コンテンツが追加、移動、削除、サイズ変更などがされた場合）、そのコンテンツがまだ存在していれば、スクロールコンテナーは前回スナップしたコンテンツに再スナップします。

`scroll-snap-type` や {{cssxref("scroll-margin")}} などのスクロールスナップ関連の値が変更された場合、スクロールコンテナーは `scroll-snap-type` の現在の値に基づいて再スナップされます。

スナップ点へ強制するために使用する詳細なアニメーションや力学の指定はこのプロパティでは扱わず、ユーザーエージェントに委ねられます。

## 構文

```css
/* スナップなし */
scroll-snap-type: none;

/* スナップ軸のキーワード値 */
scroll-snap-type: x;
scroll-snap-type: y;
scroll-snap-type: block;
scroll-snap-type: inline;
scroll-snap-type: both;

/* スナップの厳格さに関するオプションのキーワード値 */
/* 任意の mandatory | proximity*/
scroll-snap-type: x mandatory;
scroll-snap-type: y proximity;
scroll-snap-type: both mandatory;

/* グローバル値 */
scroll-snap-type: inherit;
scroll-snap-type: initial;
scroll-snap-type: revert;
scroll-snap-type: revert-layer;
scroll-snap-type: unset;
```

### 値

- `none`
  - : このスクロールコンテナーの視覚{{Glossary("viewport", "ビューポート")}}がスクロールする時は、スナップ点を無視しなければなりません。
- `x`
  - : スクロールコンテナーは水平軸のみで、スナップ位置に合わせられます。
- `y`
  - : スクロールコンテナーは垂直軸のみで、スナップ位置に合わせられます。
- `block`
  - : スクロールコンテナーはブロック軸のみで、スナップ位置に合わせられます。
- `inline`
  - : スクロールコンテナーはインライン軸のみで、スナップ位置に合わせられます。
- `both`
  - : スクロールコンテナーは両方の軸で、個別にスナップ位置に合わせられます (それぞれの軸で異なる要素に位置が合わせられる可能性があります)。
- `mandatory`
  - : このスクロールコンテナーの視覚的ビューポートは、現在スクロール中でない場合、スナップ位置にスナップしなければなりません。
- `proximity`
  - : このスクロールコンテナーの視覚的なビューポートは、現在スクロールされていない場合、スナップ位置にスナップする場合があります。スナップするかどうかは、スクロールパラメータ－に基づいてユーザーエージェントが決定します。これは、スナップ軸が指定されている場合の既定のスナップの厳格さです。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 様々な軸にスナップ

#### HTML

```html
<main>
  <section class="x mandatory-scroll-snapping" dir="ltr">
    <div>X Mand. 左書き</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x proximity-scroll-snapping" dir="ltr">
    <div>X Prox. 左書き</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y mandatory-scroll-snapping" dir="ltr">
    <div>Y Mand. 左書き</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y proximity-scroll-snapping" dir="ltr">
    <div>Y Prox. 左書き</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x mandatory-scroll-snapping" dir="rtl">
    <div>X Mand. 右書き</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="x proximity-scroll-snapping" dir="rtl">
    <div>X Prox. 右書き</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y mandatory-scroll-snapping" dir="rtl">
    <div>Y Mand. 右書き</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
  <section class="y proximity-scroll-snapping" dir="rtl">
    <div>Y Prox. 右書き</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
  </section>
</main>
```

#### CSS

```css hidden
main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;
  font-family: monospace;
}
section {
  display: flex;
  margin: 1em auto;
  outline: 1px dashed lightgray;
  flex: none;
  overflow: auto;
}
.x {
  width: 100%;
  height: 128px;
  flex-flow: row nowrap;
  overflow-y: hidden;
}
.y {
  width: 256px;
  height: 256px;
  flex-flow: column nowrap;
  overflow-x: hidden;
}
```

```css
/* scroll-snap */
.x.mandatory-scroll-snapping {
  scroll-snap-type: x mandatory;
}
.x.proximity-scroll-snapping {
  scroll-snap-type: x proximity;
}
.y.mandatory-scroll-snapping {
  scroll-snap-type: y mandatory;
}
.y.proximity-scroll-snapping {
  scroll-snap-type: y proximity;
}

div {
  text-align: center;
  scroll-snap-align: center;
  flex: none;
}
```

```css hidden
.x div {
  line-height: 128px;
  font-size: 64px;
  width: 100%;
  height: 128px;
}
.y div {
  line-height: 256px;
  font-size: 128px;
  width: 256px;
  height: 100%;
}

/* appearance fixes */
.y div:first-child {
  line-height: 1.3;
  font-size: 64px;
}

/* coloration */
div:nth-child(even) {
  background-color: #87ea87;
}
div:nth-child(odd) {
  background-color: #87ccea;
}
```

#### 結果

{{EmbedLiveSample("様々な軸にスナップ", "100%", 1800)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- その他のスクロールポートのプロパティ: {{cssxref("scroll-margin")}}, {{cssxref("scroll-padding")}}
- スクロールの子のプロパティ: {{cssxref("scroll-snap-align")}}, {{cssxref("scroll-margin")}}, {{cssxref("scroll-snap-stop")}}
- [スクロールスナップの基本概念](/ja/docs/Web/CSS/Guides/Scroll_snap/Basic_concepts)
- [スクロールスナップの使用](/ja/docs/Web/CSS/Guides/Scroll_snap/Using_scroll_snap_events)
- [CSS scroll snap](/ja/docs/Web/CSS/Guides/Scroll_snap)
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap)
