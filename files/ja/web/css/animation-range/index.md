---
title: animation-range
slug: Web/CSS/animation-range
l10n:
  sourceCommit: b03632b84049c5110d9ee466307f7e2d28959be5
---

{{CSSRef}}{{SeeCompatTable}}

**`animation-range`** は [CSS](/ja/docs/Web/CSS) の[一括指定プロパティ](/ja/docs/Web/CSS/Shorthand_properties)で、タイムラインに沿ったアニメーションの適用範囲の先頭と末尾を設定します。つまり、タイムラインのどこでアニメーションが始まり、どこで終わるかを設定するために使用します。

## 構成要素のプロパティ

このプロパティは以下の CSS プロパティの一括指定です。

- [`animation-range-start`](/ja/docs/Web/CSS/animation-range-start)
- [`animation-range-end`](/ja/docs/Web/CSS/animation-range-end)

## 構文

```css
/* キーワードまたは長さのパーセント値 */
animation-range: normal; /* normal normal と同等 */
animation-range: 20%; /* 20% normal と同等 */
animation-range: 100px; /* 100px normal と同等 */

/* 単一の名前付きタイムライン範囲の値 */
animation-range: cover; /* cover 0% cover 100% と同等 */
animation-range: contain; /* contain 0% contain 100% と同等 */
animation-range: cover 20%; /* cover 20% cover 100% と同等 */
animation-range: contain 100px; /* contain 100px cover 100% と同等 */

/* 2 つの値で範囲の先頭と末尾 */
animation-range: normal 25%;
animation-range: 25% normal;
animation-range: 25% 50%;
animation-range: entry exit; /* entry 0% exit 100% と同等 */
animation-range: cover cover 200px; /* cover 0% cover 200px と同等 */
animation-range: entry 10% exit; /* entry 10% exit 100% と同等 */
animation-range: 10% exit 90%;
animation-range: entry 10% 90%;
```

`animation-range` の一括指定では、コンテナー要素に `<animation-range-start>` と `<animation-range-end>` の値の組み合わせを適用することができます。両方の値を指定した場合、 `<animation-range-start>`、`<animation-range-end>` の順に解釈されます。

上の構文ブロックのコメントで示したように、 1 つの値しか提供されなかった場合、いくつかの解釈の可能性があります。

- その値が {{cssxref("length-percentage")}} または `normal` である場合、 `<animation-range-start>` はその値を取り、 `<animation-range-end>` は `normal` と等しくなります。
- その値が `<length-percentage>` 以下が続かない名前付きタイムラインの範囲である場合、その範囲はその名前付きタイムラインの範囲の 0% と 100% の間になります。
- もし値が `<length-percentage>` 以下の名前付きタイムライン範囲であれば、範囲はその名前付きタイムライン範囲の指定したパーセント値で始まり、その名前付きタイムライン範囲の 100% で終わります。

### 値

[`animation-range-start`](/ja/docs/Web/CSS/animation-range-start) や [`animation-range-end`](/ja/docs/Web/CSS/animation-range-end) を表す 1 つまたは 2 つの値です。これらの値は以下のいずれかになります。

- `normal`
  - : `animation-range-start` の場合はタイムラインの始まり、 `animation-range-end` の場合はタイムラインの終わりを表します。これが既定値です。
- `<length-percentage>`
  - : タイムラインの始めからの長さまたはパーセント値。
- `<timeline-range-name>`

  - : 全体のタイムライン内の固有のタイムライン範囲です。可能な値は次の通りです。

    - `cover`
      - : 名前付きビュー進行タイムラインの全範囲を表します（詳細は [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)を参照）。主体要素が最初にスクロールポートのビュー進行の可視範囲に入り始めた時点（進行度 0%）から、完全にその範囲から離れた時点（進行度 100%）までです。
    - `contain`
      - : 名前付きビュー進行タイムラインの範囲で、主体要素がスクロールポートのビュー進行状況の可視範囲に完全に収まっている、または完全に格納している範囲を表します。
        - 主体要素がスクロールポートより小さい場合は、主体要素が最初にスクロールポートに完全に収まった点（進行度 0%）から、スクロールポートに完全に収まらなくなった点（進行度 100%）までの範囲になります。
        - 主体要素がスクロールポートより大きい場合は、主体要素が最初にスクロールポートに完全に応じた点（進行度 0%）から、スクロールポートに完全に応じた点（進行度 100%）まで、この範囲になります。
    - `entry`
      - : 名前付きビュー進行タイムラインの範囲で、主体要素が最初にスクロールポートに入り始めた点（進行度 0%）から、完全にスクロールポートに入った点（進行度 100%）までを表します。
    - `exit`
      - : 名前付きビュー進行タイムラインの範囲で、主体要素が最初にスクロールポートを出始めた点（進行度 0%）から、完全にスクロールポートを出た点（進行度 100%）までを表します。
    - `entry-crossing`
      - : 名前付きビュー進行タイムラインの範囲で、主体要素が最初にスクロールポートの始点を横切り始めた点（進行度 0%）から、完全にスクロールポートの始点を横切った点（進行度 100%）までを表します。
    - `exit-crossing`
      - : 名前付きビュー進行タイムラインの範囲で、主体要素が最初にスクロールポートの終端を横切り始めた点（進行度 0%）から、 スクロールポートの終端を完全に横切った点（進行度 100%）までを表します。

    `<timeline-range-name>` の値に `<length-percentage>` が含まれていない場合、それが `animation-range-start` の値であれば `0%`、`animation-range-end` の値であれば `100%` が既定値になります。

    > [!NOTE]
    > 上記の説明からこれらの値が意味していることを視覚化するのはとても難しいです。幸いなことに、 [View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) はこれらが意味していることを視覚的に分かりやすく表示してくれます。

- `<timeline-range-name> <length-percentage>`
  - : 指定したタイムライン範囲の開始から測定された、指定したタイムライン範囲内の指定したパーセント値または距離に等しい組み合わせ値。

> [!NOTE]
> スクロールポート（詳細は{{glossary("Scroll container", "スクロールコンテナー")}}を参照）とは、名前付きビュー進行タイムラインのアニメーションの主体要素が可視であるとみなされる範囲のことです。既定値では、これはスクロールポートの全範囲ですが、 {{cssxref("view-timeline-inset")}} プロパティを使用して調整することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### View Timeline Ranges Visualizer

[View Timeline Ranges Visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/) では、すべての値のタイプの意味を視覚的にわかりやすく説明しています。

### 範囲を指定した名前付き進行タイムラインの作成

`view-timeline` プロパティを `class` が `animation` の主体要素に用いて `--subjectReveal` という名前のビュー進行タイムラインを定義します。
これを同じ要素のタイムラインとして設定するには `animation-timeline: --subjectReveal;` を使用します。その結果、主体要素は文書をスクロールしながら上方向に移動してアニメーションします。

`animation-range` 宣言も設定することで、アニメーションの開始を遅くし、終了を早くすることができます。

#### HTML

この例の HTML は以下の通りです。

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
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
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
</div>
```

#### CSS

`subject` 要素とそのコンテンツを含む `content` 要素は最小限のスタイル設定で、テキストコンテンツには基本的なフォント設定がされています。

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

p,
h1 {
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

`subject` というクラスを持つ `<div>` には `animation` というクラスも指定されています。ここには `view-timeline` が設定されており、ビューの進行タイムラインを定義しています。また、同じ値で `animation-timeline` という名前も指定され、ビュー進行タイムラインが進むにつれてアニメーションする要素であることを宣言します。また、アニメーションが予想よりも遅く始めるように `animation-range-start` 宣言も与えます。

最後に、要素の透過率と変倍をアニメーションで指定し、スクロール移動されるたびにフェードインしたり変倍させたりします。

```css
.animation {
  view-timeline: --subjectReveal block;
  animation-timeline: --subjectReveal;

  animation-name: appear;
  animation-range: entry 10% contain 25%;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox では、アニメーションを適用するために必要 */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1,
    transform: scaleX(1);
  }
}
```

#### 結果

スクロールすると、主体要素のアニメーションを確認することができます。

{{EmbedLiveSample("Creating a named view progress timeline with range", "100%", "480px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`animation-timeline`](/ja/docs/Web/CSS/animation-timeline)
- [`animation-range-end`](/ja/docs/Web/CSS/animation-range-end), [`animation-range-start`](/ja/docs/Web/CSS/animation-range-start)
- [`scroll-timeline`](/ja/docs/Web/CSS/scroll-timeline), [`scroll-timeline-axis`](/ja/docs/Web/CSS/scroll-timeline-axis), [`scroll-timeline-name`](/ja/docs/Web/CSS/scroll-timeline-name)
- {{cssxref("timeline-scope")}}
- [`view-timeline-inset`](/ja/docs/Web/CSS/view-timeline-inset)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
