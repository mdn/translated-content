---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**`animation-range`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Guides/Cascade/Shorthand_properties)で、タイムラインに沿ったアニメーションの適用範囲の先頭と末尾を設定します。つまり、タイムラインのどこでアニメーションが始まり、どこで終わるかを設定するために使用します。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- {{cssxref("animation-range-start")}}
- {{cssxref("animation-range-end")}}

## 構文

```css
/* 範囲の先頭値のみ */
/* 1 つの値の構文 */
animation-range: normal;
animation-range: 20%;
animation-range: 100px;
animation-range: cover;
animation-range: contain;
/* 2 つの値の構文 */
animation-range: cover 20%;
animation-range: contain 100px;

/* 範囲の先頭と末尾の値 */
/* 2 つの値の構文 */
animation-range: normal 25%;
animation-range: 25% normal;
animation-range: 25% 50%;
animation-range: entry exit;
/* 3 つの値の構文 */
animation-range: cover cover 200px;
animation-range: 10% exit 90%;
animation-range: entry 10% 90%;
/* 4 つの値の構文 */
animation-range: cover 0% cover 200px;
animation-range: entry 10% exit 100%;

/* グローバル値 */
animation-timeline: inherit;
animation-timeline: initial;
animation-timeline: revert;
animation-timeline: revert-layer;
animation-timeline: unset;
```

`animation-range` 一括指定プロパティは、カンマで区切られた 1 つ以上の単一のアニメーション範囲として指定します。それぞれのアニメーション範囲は、`<timeline-range-name>` 値、`<length-percentage>` 値、それにキーワード `normal` で構成される、空白区切りの 1 つから 4 つの値として指定します。

### 値

- `<animation-range-start>`
  - : キーワード `normal`、`<length-percentage>`、{{cssxref("timeline-range-name")}}、`<timeline-range-name> <length-percentage>` のペアのいずれかで、{{cssxref("animation-range-start")}} を表します。`<timeline-range-name>` が `<length-percentage>` なしで設定された場合、`<length-percentage>` はデフォルトで `0%` になります。
- `<animation-range-end>`
  - : キーワード `normal`、`<length-percentage>`、`<timeline-range-name>`、`<timeline-range-name> <length-percentage>` のペアのいずれかで、{{cssxref("animation-range-end")}} を表します。`<timeline-range-name>` が `<length-percentage>` なしで設定された場合、`<length-percentage>` はデフォルトで `100%` になります。

## 解説

`animation-range` 一括指定プロパティは、`animation-range-start` と `animation-range-end` の値を設定し、アニメーションのタイムライン上でアニメーションが開始および終了する位置を定義します。 デフォルトでは、キーフレームアニメーションで定義されたスタイルは、要素がアニメーションされている間のみ適用されます。キーフレームアニメーションが要素に適用されるタイミングは、そのアニメーションのタイムラインによって決まります。デフォルトで、アニメーションはタイムラインの範囲開始点から範囲終了点の間でのみ適用されます。この範囲外にアニメーションを適用するには、{{cssxref("animation-fill-mode")}} を `backwards`、`forwards`、`both` のいずれかに設定してます。これら 3 つの `animation-fill-mode` 値は、それぞれ範囲開始点まで最初のキーフレームのスタイルを適用する、アニメーション終了後に最後のキーフレームのスタイルを適用する、前後両方に適用するという意味です。

{{glossary("Scroll container", "スクロールポート")}}領域のうち、ビュー進行可視範囲される領域は、[名前付きビュー進行タイムラインアニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#ビュー進行タイムライン)の対象要素が可視とみなされる範囲です。デフォルトではスクロールポートの全範囲ですが、{{cssxref("view-timeline-inset")}} プロパティを使用して調整できます。

2 つの値が `<animation-range>` プロパティの要素として指定された場合、まず `<animation-range-start>`、次に `<animation-range-end>` の順序で解釈されます。各要素の値は、キーワード`normal`、{{cssxref("length-percentage")}}、{{cssxref("timeline-range-name")}} にオプションで `<length-percentage>` が続くもののいずれかです。これらの値は空白で区切られます。`normal` は開始位置が `0%`、終了位置が `100%` に相当します。開始範囲または終了範囲のいずれかに `normal` と `<length-percentage>` を指定すると無効になります。

### 範囲開始点とデフォルトの範囲終了点

`<animation-range-start>` のみを定義する場合は、単一の {{cssxref("length-percentage")}}、単一の {{cssxref("timeline-range-name")}}、キーワード `normal` のいずれかを指定するか、あるいは単一の `<timeline-range-name>` に続いて単一の `<length-percentage>` を指定し、`<animation-range-end>` の計算値は特定の規則に従います。

値が単一の `<length-percentage>` またはキーワード `normal` の場合、この値は `<animation-range-start>` を定義し、`<animation-range-end>` は暗黙に `normal` に設定されます。例えば、

- `animation-range: 20%;` は `animation-range-start: 20%; animation-range-end: normal;` と同等です。
- `animation-range: normal;` は `animation-range-start: 0%; animation-range-end: 100%;` と同等です。

値が単一の {{cssxref("timeline-range-name")}}（次の `<length-percentage>` なし）である場合、そのタイムライン範囲名が `<animation-range-start>` と `<animation-range-end>` の両成分に適用され、それぞれ `0%` および `100%` の範囲が暗黙的に指定されます。例えば、

- `animation-range: contain;` は `animation-range-start: contain 0%; animation-range-end: contain 100%;` と同等です。
- `animation-range: cover;` は `animation-range-start: cover 0%; animation-range-end: cover 100%;` と同等です。

値が単一の `<timeline-range-name>` に続いて単一の `<length-percentage>` で構成される場合、このペアは `<animation-range-start>` を定義し、定義された `<timeline-range-name>` は `100%` の位置にある `<animation-range-end>` に適用されます。例えば、

- `animation-range: cover 20%;` は `animation-range-start: cover 20%; animation-range-end: cover 100%;` と同等です。
- `animation-range: contain 100px;` は `animation-range-start: contain 100px; animation-range-end: contain 100%;` と同等です。

### 範囲の開始と終了を明示的に 2 つの値で定義

`animation-range` 宣言に 2 つ以上の値が記載され、かつそれらの値が単一の `<timeline-range-name>` に続く `<length-percentage>` 以外の何らかの形式である場合、`<animation-range-start>` と `<animation-range-end>` の両方が明示的に設定されます。

2 つの値を記載する場合、最初の値がキーワード `normal` または `<length-percentage>` であるときは、その値が `<animation-range-start>` を定義し、2 つ目の値が `<animation-range-end>` を定義します。例えば、

- `animation-range: normal 25%;` は `animation-range-start: 0%; animation-range-end: 25%;` と同等です。
- `animation-range: 25% 50%;` は `animation-range-start: 25%; animation-range-end: 50%;` と同等です。
- `animation-range: 25% contain;` は `animation-range-start: 25%; animation-range-end: contain 100%;` と同等です。
- `animation-range: 25% normal;` は `animation-range-start: 25%; animation-range-end: 100%;` と同等です。

### 複数のアニメーション

複数のアニメーションに対して範囲を指定する場合、`animation-range` 一括指定プロパティは、カンマで区切られた 1 つ以上の単一のアニメーション範囲として指定します。それぞれのアニメーション範囲は、{{cssxref("animation-name")}} が現れる順序に従ってアニメーションに適用されます。アニメーションの数と `animation-range` プロパティの値が一致しない場合、`animation-range` の値がアニメーション数より多い場合は余分な範囲が無視されます。アニメーション数が範囲数より多い場合は、各アニメーションに対応する範囲が設定されるまで `animation-range` 値のリストが繰り返されます。例えば、`animation-range: 25% 75%, normal;` を設定した場合、奇数番目のアニメーションのアニメーション範囲は `25% 75%` となり、偶数番目のアニメーションのアニメーション範囲は `0% 100%` となります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### `animation-range` プロパティの基本的な使い方

この例では、`animation-range`プロパティを使用してアニメーションの開始と終了をオフセットすることで、ビューの進行スクロールアニメーションの持続時間を縮小し、短縮されたアニメーションタイムラインに対する {{cssxref("animation-fill-mode")}} プロパティの効果を示します。

#### HTML

テキストの壁の真ん中に、アニメーションする要素を配置します。大量のテキストを記載して、コンテンツがコンテナーを確実にオーバーフローするようにしていますが、簡潔さを重視してここでは省略してあります。
また、{{cssxref("animation-fill-mode")}} プロパティのオン/オフを切り替えるチェックボックスも設置し、アニメーションタイムラインを短縮した効果を実証します。このチェックボックスも省略しています。

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

```html
<div class="animatedElement"></div>
```

```html-nolint hidden
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
  <label>
    <input type="checkbox" /> <code>animation-fill-mode: both;</code> を追加
  </label>
</div>
```

#### CSS

要素の不透明度、倍率、背景色を変化させるアニメーションを定義します。これにより、アニメーションの進行に伴い、要素がフェードインし、変倍し、色が変わります。このアニメーションを `animatedElement` に、{{cssxref("animation")}} 一括指定で適用します。

ビュー進行タイムラインは、{{cssxref("animation-timeline/view", "view()")}} 関数を {{cssxref("animation-timeline")}} の値として `animatedElement` に設定することにより作成されます。これにより、文書がスクロールされる際に要素が上方へ移動するにつれてアニメーションが実行されます。`animation-timeline` プロパティは一括指定の後に宣言します。一括指定はこのプロパティをリセットするためです。

最後に、`animation-range` 宣言を設定し、アニメーションが予想より遅く始めるように設定し、早く完了するようにします。

```css
.animatedElement {
  background-color: deeppink;
  animation: appear 1ms linear;
  animation-timeline: view();
  animation-range: entry 10% exit -25%;
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

同時に、条件付きスタイル設定も記述します。チェックボックスがチェックされていた場合、アニメーションする要素に `animation-fill-mode` プロパティを適用します。

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
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
@supports not (animation-range: normal) {
  body::before {
    content: "このブラウザーは 'animation-range' プロパティに対応していません。";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### 結果

スクロールすると、要素がアニメーションするのを確認することができます。

{{EmbedLiveSample("Examples", "100%", "480px")}}

`from` または `0%` のキーフレームのプロパティ値が、アニメーションする要素に適用されるのは、ブロック境界の上端がコンテナーの下端から `10%` 離れた時点です。この時点では要素はフルサイズで完全不透明、マゼンタ色です。この位置でアニメーションが適用され、`0%` キーフレームセレクターで定義された値でスタイルが設定されます。`animation-range-end` すなわちスクロール領域の上端から 25% の位置に到達すると、元のスタイル設定に即座に戻ります。

一般的に、[スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)を作成する際には、`animation-fill-mode: both` を設定することをお勧めします。デフォルト状態へのジャンプが発生するのは、要素に {{cssxref("animation-fill-mode")}} プロパティを設定しなかったためです。このプロパティは、アニメーション実行前後の要素にスタイルを適用するために使用できます。この例では、`animation-range` の効果をより明確に可視化するため、当初このプロパティを省略していました。

チェックボックスをオンにして、アニメーションする要素に `animation-fill-mode` プロパティを適用し、再度スクロールしてください。スタイル設定がこれで継続的に適用されるはずです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("animation-timeline")}}
- {{cssxref("animation-range-end")}}
- {{cssxref("animation-range-start")}}
- {{cssxref("scroll-timeline")}}
- {{cssxref("timeline-scope")}}
- {{cssxref("view-timeline-inset")}}
- {{cssxref("animation-fill-mode")}}
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)モジュール
- [View timeline range visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
