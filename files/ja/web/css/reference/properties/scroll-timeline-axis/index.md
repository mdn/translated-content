---
title: scroll-timeline-axis
slug: Web/CSS/Reference/Properties/scroll-timeline-axis
original_slug: Web/CSS/scroll-timeline-axis
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{SeeCompatTable}}

**`scroll-timeline-axis`** は [CSS](/ja/docs/Web/CSS) のプロパティで、スクロール可能な要素（_スクローラー_）を上下（または左右）にスクロールすることで進行する _名前付きスクロール進行タイムライン_ アニメーションのタイムラインを提供するために使用されるスクロールバーの方向を指定するために使用します。 `scroll-timeline` はタイムラインを提供するスクローラーに設定します。詳しくは [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を参照してください。

> [!NOTE]
> スクローラー要素が軸方向のコンテナーをはみ出さないか、はみ出した部分が隠されているかクリップされている場合、スクロール進行タイムラインは作成されません。

`scroll-timeline-axis` および {{cssxref("scroll-timeline-name")}} プロパティは [`scroll-timeline`](/ja/docs/Web/CSS/Reference/Properties/scroll-timeline) 一括指定プロパティを使用して設定することもできます。

## 構文

```css
/* 論理プロパティ値 */
scroll-timeline-axis: block;
scroll-timeline-axis: inline;
/* 非論理プロパティ値 */
scroll-timeline-axis: y;
scroll-timeline-axis: x;
```

### 値

`scroll-timeline-axis` に許可されている値は次の通りです。

- `block`
  - : スクローラー要素のブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸です。標準的な英語のような横書きモードでは `y` と同じになり、縦書きモードでは `x` と同じになります。これが既定値です。
- `inline`
  - : スクローラー要素のインライン軸にあるスクロールバーで、行内のテキストの流れと並行する方向の軸です。横書きモードでは `x` と同じになり、縦書きモードでは `y` と同じになります。
- `y`
  - : スクローラー要素の垂直軸上のスクロールバーです。
- `x`
  - : スクローラー要素の水平軸上のスクロールバーです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### スクロール進行タイムラインの軸の定義

この例では、`--myScroller` という名前のスクロール進行タイムラインが <code>:root</code> 要素 ({{htmlelement("html")}}) の `scroll-timeline-name` プロパティを使用して定義されています。そして、このタイムラインは `animation` クラスを持つ要素のアニメーションに `animation-timeline: --myScroller` を使用して適用されます。

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

コンテナーの CSS は、 <code>:root</code> を `--myScroller` という名前のスクロール進行タイムラインのソースとして設定するために、`scroll-timeline-name` プロパティを使用します。
スクロール軸は `scroll-timeline-axis: x;` (Chromium) および `scroll-timeline-axis: horizontal;` (Firefox) を使用して設定します - これにより、水平スクロールバーの位置がアニメーションタイムラインを決定します。

`.content` 要素の幅を大きく設定することで、 `:root` 要素からはみ出すようにします。

また、 `.animation` 要素には、 `animation-timeline: --myScroller;` を使用してタイムラインが適用されており、 Firefox でこの例がうまくいくように `animation-duration` も適用されています。

```css
:root {
  scroll-timeline-name: --myScroller;

  /* Chromium は新しい x/y 構文に対応 */
  scroll-timeline-axis: x;
  /* Firefox はまだ古い horizontal/vertical 構文に対応 */
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
  animation: rotate-appear;
  animation-timeline: --myScroller;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
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

#### 結果

下部の水平バーをスクロールすると、正方形がアニメーションします。

{{EmbedLiveSample("Defining_the_axis_of_the_scroll_progress_timeline", "100%", "200px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`scroll-timeline`](/ja/docs/Web/CSS/Reference/Properties/scroll-timeline), [`scroll-timeline-name`](/ja/docs/Web/CSS/Reference/Properties/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
