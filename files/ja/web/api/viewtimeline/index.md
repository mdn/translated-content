---
title: ViewTimeline
slug: Web/API/ViewTimeline
l10n:
  sourceCommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

**`ViewTimeline`** は{{domxref("Web Animations API", "ウェブアニメーション API", "", "nocode")}} で、ビュー進捗ライムラインを表します（詳しくは [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を参照してください）。

`ViewTimeline` インスタンスを {{domxref("Animation.Animation", "Animation()")}} コンストラクターまたは {{domxref("Element.animate()", "animate()")}} メソッドに渡すと、アニメーションの進行を制御するタイムラインとして指定します。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("ViewTimeline.ViewTimeline", "ViewTimeline()")}} {{Experimental_Inline}}
  - : 新しい `ViewTimeline` オブジェクトインスタンスを作成します。

## インスタンスプロパティ

_親である {{domxref("ScrollTimeline")}} から継承したプロパティもあります。_

- {{domxref("ViewTimeline.subject", "subject")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 最も近い祖先のスクロール可能要素（スクローラー）内の可視性がタイムラインの進行、つまりアニメーションを駆動している主体要素への参照を返します。
- {{domxref("ViewTimeline.startOffset", "startOffset")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : タイムラインのスクロール開始位置（進行度 0%）を表す {{domxref("CSSNumericValue")}} を、スクローラー内のコンテンツのオーバーフローする区間の開始位置からのオフセットとして返します。
- {{domxref("ViewTimeline.endOffset", "endOffset")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : タイムラインのスクロールの終わり（進行度 100%）の位置を、スクローラー内のコンテンツが溢れた区間の開始位置からのオフセットとして表す {{domxref("CSSNumericValue")}} を返します。

## インスタンスメソッド

_このインターフェイスには、親である {{domxref("ScrollTimeline")}} から継承したメソッドもあります。_

## 例

### ビュー進行タイムラインの主体とオフセットの表示

この例では、ビュー進行タイムラインに沿って `class` が `subject` の要素をアニメーションしています - 文書がスクロールしながら上方向に移動されるとアニメーションします。また、`subject`, `startOffset`, `endOffset` の値を右上の output 要素に出力しています。

#### HTML

例の HTML は下記のとおりです。

```html
<div class="content">
  <h1>Content</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="subject animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>

  <div class="output"></div>
</div>
```

#### CSS

例の CSS は下記のとおりです。

```css
.subject {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

.output {
  position: fixed;
  top: 5px;
  right: 5px;
}

p,
h1,
div {
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

#### JavaScript

JavaScript で `subject` と `output` の `<div>` の参照を取得し、新しい `ViewTimeline` を作成し、それを `subject` 要素に関連付け、タイムラインの進行がそのスクロールする先祖を通してこの要素の可視性に基づいていることを指定し、`block` 軸を設定し、`inset` 値を設定して、主体が表示されているとみなされるボックスの位置を調整します。

そして、ウェブアニメーション API を使って `subject` 要素をアニメーションします。最後に、`subject`、`startOffset`、`endOffset` の値を `output` 要素に表示します。

```js
const subject = document.querySelector(".subject");
const output = document.querySelector(".output");

const timeline = new ViewTimeline({
  subject,
  axis: "block",
  inset: [CSS.px("200"), CSS.px("300")],
});

subject.animate(
  {
    opacity: [0, 1],
    transform: ["scaleX(0)", "scaleX(1)"],
  },
  {
    fill: "both",
    timeline,
  },
);

output.textContent += `Subject element: ${timeline.subject.nodeName}, `;
output.textContent += `start offset: ${timeline.startOffset}, `;
output.textContent += `end offset: ${timeline.endOffset}.`;
```

#### 結果

スクロールすると、アニメーションする主体要素が表示されます。

{{EmbedLiveSample("Tracking the progress of a view progress timeline", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- {{domxref("AnimationTimeline")}}, {{domxref("ScrollTimeline")}}
