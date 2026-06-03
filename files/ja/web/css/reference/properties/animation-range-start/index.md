---
title: animation-range-start
slug: Web/CSS/Reference/Properties/animation-range-start
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`animation-range-start`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーションが開始するタイムライン上の点を設定します。

## 構文

```css
/* キーワードまたは長さのパーセント値 */
animation-range-start: normal;
animation-range-start: 20%;
animation-range-start: 100px;

/* 名前付きタイムライン範囲の値 */
animation-range-start: cover;
animation-range-start: contain;
animation-range-start: cover 20%;
animation-range-start: contain 100px;

/* グローバル値 */
animation-range-start: inherit;
animation-range-start: initial;
animation-range-start: revert;
animation-range-start: revert-layer;
animation-range-start: unset;
```

### 値

- `normal`
  - : タイムラインの先頭を表します。これがデフォルト値です。
- {{cssxref("length-percentage")}}
  - : タイムラインの開始点から測定した長さまたはパーセント値を指定します。
- {{cssxref("timeline-range-name")}}
  - : 全体タイムライン内の名前付きタイムライン範囲を指定します。範囲は `0%` から始まります。
- `<timeline-range-name> <length-percentage>`
  - : 指定された名前付きタイムライン範囲の開始点から測定される長さまたはパーセント値を指定します。

## 解説

`animation-range-start` プロパティの有効な値は、`normal`、`<length-percentage>`、またはオプションの `<length-percentage>` を含む {{cssxref("timeline-range-name")}} です。`<timeline-range-name>` の値に `<length-percentage>` が含まれない場合、パーセント値はデフォルトで `0%` になります。
利用可能な値の詳細な説明については、{{cssxref("animation-range")}} を参照してください。
同時に、[View progress timeline visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) も調べることをおすすめします。ここでは、さまざまな値が何を意味しているかをわかりやすい視覚的書式化で表示させます。

`animation-range-start` はリセット専用の値として {{cssxref("animation")}} の一括指定に含まれています。これは、`animation` を記載することで、前回宣言した `animation-range-start` の値が `normal` にリセットされることを意味していますが、`animation` によって固有の値を設定することはできません。 [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成する際には、 `animation` の一括指定を宣言した後に `animation-range-end` を宣言しないと、その効果を得ることができません。

`animation-range-start` および {{cssxref("animation-range-end")}} のプロパティは、 {{cssxref("animation-range")}} 一括指定プロパティを使用して設定することもできます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 範囲の先頭を指定したスクロールビュー進行タイムラインの作成

この例では、`animation-range-start` がビュー進捗進行タイムラインでアニメーション処理される要素に適用されています。これにより、要素が親ビューポートの端に到達するかなり前に、アニメーションが最後のキーフレームに到達するようになります。

#### HTML

```html-nolint hidden
<div class="content">
  <h1>コンテンツ</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>
```

長いテキストブロックの途中に、アニメーションを適用する要素を配置しました。大量のテキストを挿入し、コンテンツがコンテナーから確実にします。簡潔さを考慮し、余分なテキストはここでは省略してあります。

```html
<div class="animatedElement"></div>
```

```html hidden
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
</div>
```

#### CSS

スクロール進行タイムラインを定義するため、{{cssxref("animation-timeline/scroll", "scroll()")}} 関数を {{cssxref("animation-timeline")}} プロパティの値として設定します。これは、{{cssxref("animation")}} 一括指定プロパティの**後で**宣言され、個別指定プロパティ値がリセットするのを避けます。

同時に、アニメーションが予想より早く開始するよう、`animation-range-start`を設定しました。

```css
.animatedElement {
  background-color: deeppink;

  animation: appear 1ms linear;

  animation-timeline: scroll();
  animation-range-start: -25%;
}

@keyframes appear {
  from {
    background-color: rebeccapurple;
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    background-color: darkturquoise;
    opacity: 0.75;
    transform: scaleX(0.75);
  }
}
```

他のスタイルは簡潔さを考慮して省略しています。

```css hidden
.animatedElement {
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.content {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}

@supports not (animation-range-start: normal) {
  body::before {
    content: "このブラウザーは 'animation-range-start' プロパティに対応していません。";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### 結果

スクロールして要素のアニメーションを確認してください。要素がビューポートに入るときに既に変倍され半透明である点に注目してください。これは、要素のアニメーションがビューポートに入るかなり前から始まるためです。

{{EmbedLiveSample("Creating a named view progress timeline with range start", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-end")}}
- {{cssxref("view-timeline-inset")}}
- {{domxref("Element.animate()")}} `rangeStart` プロパティ
- [スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- [View progress timeline: Ranges and animation progress visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
