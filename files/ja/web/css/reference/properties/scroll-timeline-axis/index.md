---
title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
l10n:
  sourceCommit: f89de66a773484024ab5d914bc88fa08d894db1c
---

**`scroll-timeline-axis`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール可能な要素（_スクローラー_）をスクロールすることで進行する[スクロール駆動アニメーションに使用するタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)を提供するのに使用されるスクロールバーの方向を指定するために使用します。

## 構文

```css
/* 論理プロパティ値 */
scroll-timeline-axis: block;
scroll-timeline-axis: inline;

/* 非論理プロパティ値 */
scroll-timeline-axis: y;
scroll-timeline-axis: x;

/* グローバル値 */
scroll-timeline-axis: inherit;
scroll-timeline-axis: initial;
scroll-timeline-axis: revert;
scroll-timeline-axis: revert-layer;
scroll-timeline-axis: unset;
```

### 値

- `<axis>`
  - : {{ cssxref("axis") }} キーワードで、スクロール駆動アニメーションを制御するスクロールポートの方向（または軸）を指定します。デフォルト値は `block` です。

## 解説

`scroll-timeline-axis` プロパティは、[スクロール進行タイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)アニメーションのタイムラインを提供するスクロールバーを指定します。値はスクロールバーの軸 (`<axis>`) です。`scroll-timeline` プロパティは、タイムラインを提供するスクローラーに設定します。

スクローラー要素が軸方向のコンテナーをはみ出さないか、はみ出した部分が隠されているかクリップされている場合、スクロール進行タイムラインは作成されません。

`scroll-timeline-axis` および {{cssxref("scroll-timeline-name")}} プロパティは {{cssxref("scroll-timeline")}} 一括指定プロパティを使用して設定することもできます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### スクロール進行タイムラインの軸の定義

この例では、`--my-scroller` という名前のスクロール進行タイムラインが <code>:root</code> 要素 ({{htmlelement("html")}}) の `scroll-timeline-name` プロパティを使用して定義されています。そして、このタイムラインは `animation` クラスを持つ要素のアニメーションに `animation-timeline: --my-scroller` を使用して適用されます。

`scroll-timeline-axis` の効果を示すために、この例ではアニメーションを駆動するために水平方向の（既定値ではない）スクロールバーを使用しています。

#### HTML

この例の HTML は以下の通りです。

```html
<body>
  <div class="content"></div>
  <div class="box animation"></div>
</body>
```

#### CSS

コンテナーの CSS は、 <code>:root</code> を `--my-scroller` という名前のスクロール進行タイムラインのソースとして設定するために、`scroll-timeline-name` プロパティを使用しています。
スクロール軸は `scroll-timeline-axis: x;` で設定され、これにより水平スクロールバーの位置をアニメーションのタイムラインにします。同時に、標準外の古い値である `horizontal` および `vertical` に対応していて、`x` および `y` に対応していないブラウザー向けに `scroll-timeline-axis: horizontal;` も記載しています。

`.content` 要素の幅を大きく設定することで、 `:root` 要素からはみ出すようにします。

`.animation` 要素には {{cssxref("animation")}} 一括指定を使用してアニメションを適用しており、そしてスクロールタイムラインを {{cssxref("animation-timeline")}} で設定しています。

```css
:root {
  scroll-timeline-name: --my-scroller;

  scroll-timeline-axis: x;
  scroll-timeline-axis: horizontal;
}

body {
  margin: 0;
  overflow-y: hidden;
}

.content {
  height: 100vh;
  width: 2000px;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 25px;
  left: 25px;
}

.animation {
  animation: rotate-appear 1ms linear;
  animation-timeline: --my-scroller;
}

@keyframes rotate-appear {
  from {
    rotate: 0deg;
    top: 0%;
  }

  to {
    rotate: 720deg;
    top: 100%;
  }
}
```

```css hidden
@layer no-support {
  @supports not (scroll-timeline-axis: block) {
    body::before {
      content: "このブラウザーは `scroll-timeline-axis` プロパティに対応していません。";
      background-color: wheat;
      display: block;
      width: 100%;
      text-align: center;
    }
  }
}
```

#### 結果

下部の水平バーをスクロールすると、正方形がアニメーションします。

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("scroll-timeline-name")}}
- [スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
