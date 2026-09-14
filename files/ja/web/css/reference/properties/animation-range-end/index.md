---
title: animation-range-end
slug: Web/CSS/Reference/Properties/animation-range-end
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`animation-range-end`** は [CSS](/ja/docs/Web/CSS) のプロパティで、アニメーションが終了するタイムライン上の点を設定します。

## 構文

```css
/* キーワードまたは長さのパーセント値 */
animation-range-end: normal;
animation-range-end: 80%;
animation-range-end: 700px;

/* 名前付きタイムライン範囲の値 */
animation-range-end: cover;
animation-range-end: contain;
animation-range-end: cover 80%;
animation-range-end: contain 700px;

/* グローバル値 */
animation-range-end: inherit;
animation-range-end: initial;
animation-range-end: revert;
animation-range-end: revert-layer;
animation-range-end: unset;
```

### 値

- `normal`
  - : タイムラインの末尾を表します。これがデフォルト値です。
- {{cssxref("length-percentage")}}
  - : タイムラインの開始点から測定した長さまたはパーセント値を指定します。
- {{cssxref("timeline-range-name")}}
  - : 全体タイムライン内の名前付きタイムライン範囲を指定します。範囲は `0%` から始まります。
- `<timeline-range-name> <length-percentage>`
  - : 指定された名前付きタイムライン範囲の開始点から測定される長さまたはパーセント値を指定します。

## 解説

`animation-range-end` プロパティは、アニメーションの添付範囲の終了点を指定します。添付範囲の終了点を変更すると、アニメーションの終了点、つまり反復回数が `1` のときに `100%` の進行度に割り当てられたキーフレームが到達する点をシフトさせることが可能で、同時にアニメーションの実効的な継続時間を短縮することもできます。

プロパティ値は `normal`、`<length-percentage>`、またはオプションの `<length-percentage>` を含む {{cssxref("timeline-range-name")}} です。`<timeline-range-name>` の値に `<length-percentage>` が含まれない場合、パーセント値はデフォルトで `100%` になります。

`animation-range-end` はリセット専用の値として {{cssxref("animation")}} の一括指定に含まれています。これは、`animation` を記載することで、前回宣言した `animation-range-end` の値が `normal` にリセットされることを意味していますが、`animation` によって固有の値を設定することはできません。 [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成する際には、 `animation` の一括指定を宣言した後に `animation-range-end` を宣言しないと、その効果を得ることができません。

`animation-range-end` および {{cssxref("animation-range-start")}} のプロパティは、 {{cssxref("animation-range")}} 一括指定プロパティを使用して設定することもできます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 範囲の終わりを指定したビュー進行タイムラインの作成

この例では、`animation-range-end` がビュー進捗進行タイムラインでアニメーション処理される要素に適用されています。これにより、要素が親ビューポートの端に到達するかなり前に、アニメーションが最後のキーフレームに到達するようになります。

#### HTML

```html hidden
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
</div>
```

長いテキストブロックの途中に、アニメーションを適用する要素を配置しました。大量のテキストを挿入し、コンテンツがコンテナーから確実にします。簡潔さを考慮し、余分なテキストはここでは省略してあります。

```html-nolint
<div class="animatedElement">
```

```html-nolint hidden
<p>
  Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
  cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
  dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non tellus
  orci ac auctor augue mauris. Risus quis varius quam quisque id diam vel quam
  elementum. Nibh praesent tristique magna sit amet purus gravida quis. Duis
  ultricies lacus sed turpis tincidunt id aliquet. In egestas erat imperdiet sed
  euismod nisi. Eget egestas purus viverra accumsan in nisl nisi scelerisque.
  Netus et malesuada fames ac.
</p>
<p>
```

同時に、{{cssxref("animation-fill-mode")}} プロパティを切り替えるチェックボックスを追加しました。これにより、このプロパティが短縮されたタイムラインを付けたアニメーションにどのように影響するかを確認できます。

```html
<label>
  <input type="checkbox" /> <code>animation-fill-mode: forwards;</code> を追加
</label>
```

```html hidden
  </p>
</div>
```

#### CSS

ビュー進行タイムラインを定義するため、{{cssxref("animation-timeline/view", "view()")}} 関数を {{cssxref("animation-timeline")}} プロパティの値として設定します。これは、{{cssxref("animation")}} 一括指定プロパティの**後で**宣言され、個別指定プロパティ値がリセットするのを避けます。

同時に、アニメーションが予想より早く終了するよう、`animation-range-end`を設定しました。

```css
.animatedElement {
  background-color: deeppink;
  animation: appear 1ms linear;
  animation-timeline: view();
  animation-range-end: exit 25%;
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

チェックボックスがチェックされると、アニメーションする要素が `animation-fill-mode` プロパティに適用されます。

```css
:has(:checked) .animatedElement {
  animation-fill-mode: forwards;
}
```

他のスタイルは簡潔さを考慮して省略しています。

```css hidden
.animatedElement {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

:has(:checked) .animatedElement {
  animation-fill-mode: both;
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
@supports not (animation-range-end: normal) {
  body::before {
    content: "このブラウザーは 'animation-range-end' プロパティに対応していません。";
    color: black;
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### 結果

スクロールして要素のアニメーションを確認してください。次に、テキストブロックの末尾にあるチェックボックスを切り替え、再度スクロールしてみて下さい。要素がビューポートの75%の位置に到達した時点でアニメーションが完了し、`animation-fill-mode`プロパティが適用されていない場合にその時点でデフォルト状態に戻る様子に注目してください。

{{EmbedLiveSample("Creating a view progress timeline with a range end", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("view-timeline-inset")}}
- {{domxref("Element.animate()")}} `rangeStart` プロパティ
- [スクロール駆動アニメーションタイムライン](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)
- [View progress timeline: Ranges and animation progress visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
