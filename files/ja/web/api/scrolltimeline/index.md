---
title: ScrollTimeline
slug: Web/API/ScrollTimeline
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

**`ScrollTimeline`** は{{domxref("Web Animations API", "ウェブアニメーション API", "", "nocode")}} のインターフェイスで、スクロール進行タイムラインを表します（詳しくは [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations) を参照してください）。

`ScrollTimeline` インスタンスを {{domxref("Animation.Animation", "Animation()")}} コンストラクターまたは {{domxref("Element.animate()", "animate()")}} メソッドに渡すと、アニメーションの進行を制御するタイムラインとして指定します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ScrollTimeline.ScrollTimeline", "ScrollTimeline()")}} {{Experimental_Inline}}
  - : 新しい `ScrollTimeline` オブジェクトのインスタンスを作成します。

## インスタンスプロパティ

_このインターフェイスには、親である {{domxref("AnimationTimeline")}} から継承したプロパティもあります。_

- {{domxref("ScrollTimeline.source", "source")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : スクロール位置がタイムラインの進行、つまりアニメーションを駆動するスクロール可能要素（スクローラー）への参照を返します。
- {{domxref("ScrollTimeline.axis", "axis")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : タイムラインの進行状況を表すスクロール軸を列挙した値を返します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("AnimationTimeline")}} から継承したメソッドもあります。_

## 例

### スクロール進行タイムラインのソースと軸の表示

この例では、ビュー進行タイムラインに沿って `class` が `box` の要素をアニメーションしています。文書のスクロールに合わせて画面全体でアニメーションします。`source` 要素とスクロール `axis` を右上の `output` 要素に出力します。

#### HTML

例の HTML は下記に示します。

```html
<div class="content"></div>
<div class="box"></div>
<div class="output"></div>
```

#### CSS

例の CSS はこのようになっています。

```css
.content {
  height: 2000px;
}

.box {
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: rebeccapurple;
  position: fixed;
  top: 20px;
  left: 0%;
}

.output {
  font-family: Arial, Helvetica, sans-serif;
  position: fixed;
  top: 5px;
  right: 5px;
}
```

#### JavaScript

JavaScript では、`box` と `output` の `<div>` の参照を取得し、新しい `ScrollTimeline` を作成し、スクロールタイムラインを進行させる要素は文書 ({{htmlelement("html")}}) 要素であり、スクロール軸は `block` 軸であることを指定します。そして、ウェブアニメーション API を使って `box` 要素をアニメーションします。最後に、ソース要素と軸を `output` 要素に表示します。

```js
const box = document.querySelector(".box");
const output = document.querySelector(".output");

const timeline = new ScrollTimeline({
  source: document.documentElement,
  axis: "block",
});

box.animate(
  {
    rotate: ["0deg", "720deg"],
    left: ["0%", "100%"],
  },
  {
    timeline,
  },
);

output.textContent = `Timeline source element: ${timeline.source.nodeName}. Timeline scroll axis: ${timeline.axis}`;
```

#### 結果

スクロールしてアニメーションするボックスをご覧ください。

{{EmbedLiveSample("Displaying the source and axis of a scroll progress timeline", "100%", "320px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
