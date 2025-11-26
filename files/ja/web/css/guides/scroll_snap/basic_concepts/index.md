---
title: スクロールスナップの基本概念
short-title: 基本概念
slug: Web/CSS/Guides/Scroll_snap/Basic_concepts
original_slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

[CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュールにあるプロパティを使用すると、ユーザーが文書をスクロールする際に、スクロールが特定の位置にスナップする方法を定義することができます。

[スクロールスナップ](/ja/docs/Glossary/Scroll_snap)機能を使用すると、スクロール操作が完了した後に[スクロールコンテナー](/ja/docs/Glossary/Scroll_container)のスクロールポートが停止または「スナップ」するスナップ位置を定義できます。

## CSS スクロールスナップの主要プロパティ

スクロールスナップを定義する前に、スクロールコンテナーでスクロールを有効にする必要があります。これを行うには、スクロールコンテナーにサイズが定義されており、 {{cssxref("overflow")}} が有効になっていることを確実にしてください。

次に、 2 つの主要プロパティを使用して、スクロールコンテナーのスクロールスナップを定義することができます。

- {{cssxref("scroll-snap-type")}}: このプロパティを使用すると、スクロール可能なビューポートをスナップできるかどうか、スナップが必須かオプションか、およびスナップを行う軸を定義することができます。
- {{cssxref("scroll-snap-align")}}: このプロパティは、スクロールコンテナーのすべての子に設定し、各子のスナップ位置またはスナップの有無を定義するために使用することができます。
- {{cssxref("scroll-snap-stop")}}: このプロパティは、スクロール中に子要素がスナップされ、素通りされないようにします。
- {{cssxref("scroll-margin")}}: このプロパティは、スクロール中にスナップされる子要素に設定して、定義された枠から外側への余白を設定することができます。
- {{cssxref("scroll-padding")}}: このプロパティは、スクロールコンテナーに設定して、スナップのオフセットを設定することができます。

以下の例は、`scroll-snap-type` で定義される垂直軸に沿ったスクロールスナップを示しています。さらに、`scroll-snap-align` は `<section>` 要素のすべての子要素に適用され、各子要素のスクロールを停止する点を指定します。

```html live-sample___mandatory-y
<article class="scroller">
  <section>
    <h2>第 1 章</h2>
  </section>
  <section>
    <h2>第 2 章</h2>
  </section>
  <section>
    <h2>第 3 章</h2>
  </section>
</article>
```

```css hidden live-sample___mandatory-y
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___mandatory-y
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("mandatory-y", "", "350px")}}

## scroll-snap-type の使用

{{CSSxRef("scroll-snap-type")}} プロパティは、スクロールスナップが発生する方向を指定する必要があります。これには `x` や `y`、論理マッピングの `block` や `inline` などがあります。また、キーワード `both` を使用すると、スクロールスナップが両軸で動作するようになります。

また、`mandatory` や `proximity` のキーワードを渡すこともできます。`mandatory` キーワードは、スクロールの位置に関係なく、コンテンツが特定の位置にスナップ*しなければならない*かどうかをブラウザーに伝えます。`proximity` キーワードは、その位置にスナップしてもよいが、しなくてもよいことを意味します。

`mandatory` を使用すると、とても一貫した操作感が得られます。つまり、ブラウザーは定義された各位置に必ずスナップすることがわかります。つまり、画面の上部にあると期待されるものが、スクロールが終了したときにあると確信できるのです。しかし、コンテンツが予想以上に大きい場合には、問題が発生する可能性があります。ユーザーは、スクロールしてもコンテンツの特定の位置を見ることができないという、もどかしい状況に陥るかもしれません。そのため、`mandatory` の使用は慎重に検討し、一度に画面に表示されるコンテンツの量が分かっている場合にのみ使用するようにしてください。

> [!NOTE]
> 子要素のいずれかに含まれるコンテンツが親コンテナーからオーバーフローする場合、 `mandatory` は絶対に使用しないでください。オーバーフローしたコンテンツをスクロールして表示することができなくなります。

`proximity` の値は、近くにある場合にのみ位置にスナップしますが、正確な距離はブラウザーの判断に委ねられています。
"Play" をクリックして、下記の例を MDN Playground で編集してみてください。 `mandatory` と `proximity` の間で値を変更すると、スクロールの操作感に与える影響を確認することができます。

```html live-sample___mandatory-proximity
<article class="scroller">
  <section>
    <h2>第 1 章</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>第 2 章</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>第 3 章</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
</article>
```

```css hidden live-sample___mandatory-proximity
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___mandatory-proximity
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("mandatory-proximity", "", "350px")}}

上記の例では、 {{cssxref("height", "height: 300px;")}} と {{cssxref("overflow-y", "overflow-y: scroll;")}} の両方をスクロールコンテナーに設定しています。
コンテンツがコンテナーからオーバーフローしない場合、スクロールするものは何もありません。

## scroll-snap-align の使用

{{CSSxRef("scroll-snap-align")}} プロパティには、スクロールコンテナー内でコンテンツがスナップするポイントを示す、`start`、`end`、`center`、`none` の値を取ることができます。"Play" をクリックして、下記の例の `scroll-snap-align` の値を変更し、スクロールの動作がどのように変化するかを確認してみてください。

```html hidden live-sample___align
<article class="scroller">
  <section>
    <h2>第 1 章</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>第 2 章</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
  <section>
    <h2>第 3 章</h2>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </section>
</article>
```

```css hidden live-sample___align
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___align
.scroller {
  height: 200px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("align", "", "250px")}}

`scroll-snap-type` が `mandatory` で、子要素の `scroll-snap-align` が `none` に設定されているか、設定されていない場合（この場合、既定は `none` になります）、ユーザーは、その要素をスクロールして表示することはできません。

## scroll-padding の使用

`start` または `end` を使用する場合、コンテンツをスクロールコンテナーの端に正確にスナップしたくない場合や、 `center` を使用する際にスナップ位置を中央から少しずらしたい場合は、 {{CSSxRef("scroll-padding")}} プロパティまたは同等の個別指定値を使用して、パディングを追加してください。

以下の例では、`scroll-padding` を `50px` ピクセルに設定しています。2 つ目と 3 つ目のセクションの先頭にスナップすると、スクロールはセクションの先頭から 50 ピクセル離れたところで止まります。 `scroll-padding` の値を変更してみて、距離の変化を確認してください。

```html live-sample___scroll-padding
<article class="scroller">
  <section>
    <h2>第 1 章</h2>
  </section>
  <section>
    <h2>第 2 章</h2>
  </section>
  <section>
    <h2>第 3 章</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-padding
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-padding
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 50px;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("scroll-padding", "", "350px")}}

これは、例えばナビゲーションバーなどの[固定](/ja/docs/Web/CSS/Reference/Properties/position#fixed_positioning)要素があり、スクロールしたコンテンツと重なってしまう場合に便利です。 `scroll-padding` を使用すると、下の例のように、コンテンツがスクロールしても `<h1>` が画面上に残るように、見出しのための空間を確保することができます。パディングがないと、スナップが発生したときに見出しがコンテンツの一部と重なってしまいます。

```html hidden live-sample___scroll-padding-sticky
<article class="scroller">
  <h1>固定位置の見出し</h1>
  <section>
    <h2>第 1 章</h2>
  </section>
  <section>
    <h2>第 2 章</h2>
  </section>
  <section>
    <h2>第 3 章</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-padding-sticky
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-padding-sticky
.scroller h1 {
  position: sticky;
  top: 0;
  min-height: 40px;
  background-color: #000;
  color: #fff;
  margin: 0;
  padding: 0;
}

.scroller h2 {
  margin: 0;
  padding: 0;
}

.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-padding: 50px;
}

.scroller section {
  scroll-snap-align: start;
}
```

{{EmbedLiveSample("scroll-padding-sticky", "", "350px")}}

## scroll-margin の使用

{{CSSxRef("scroll-margin")}} プロパティは、子要素に設定することができ、定義されたボックスの外側に余白を定義することができます。これにより、子要素ごとに異なる大きさの空間を確保することができ、親要素の `scroll-padding` と組み合わせて使用することができます。

```html hidden live-sample___scroll-margin
<article class="scroller">
  <section>
    <h2>第 1 章</h2>
  </section>
  <section>
    <h2>第 2 章</h2>
  </section>
  <section>
    <h2>第 3 章</h2>
  </section>
</article>
```

```css hidden live-sample___scroll-margin
body {
  font: 1.2em / 1.5 sans-serif;
}

.scroller {
  border: 4px solid #333;
  width: 300px;
}

.scroller section {
  min-height: 100%;
  padding: 10px;
}

.scroller section:nth-child(odd) {
  background-color: #ccc;
}
```

```css live-sample___scroll-margin
.scroller {
  height: 300px;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
}

.scroller section {
  scroll-snap-align: start;
  scroll-margin: 40px;
}
```

{{EmbedLiveSample("scroll-margin", "", "350px")}}

## scroll-snap-stop の使用

{{CSSxRef("scroll-snap-stop")}} プロパティを使用すると、スクロールを定義したスナップ点にスナップする必要があるか指定することができます。上記の例では、これは、スクロールがそれぞれの章の先頭で停止するか、またはそれ以前の章をスキップできるかを意味します。

このプロパティは、ユーザーがスクローラーの各セクションを確実に見えるようにし、誤って飛ばしてしまわないようにするのに役立ちます。ただし、この設定は、ユーザーが目的のコンテンツにすばやくスクロールできなくなるため、使い勝手に悪影響を与える場合もあります。

## 関連情報

- [CSS スクロールスナップ](/ja/docs/Web/CSS/Guides/Scroll_snap)モジュール
- [Well-controlled scrolling with CSS scroll snap](https://web.dev/articles/css-scroll-snap) on web.dev (2021)
- [Practical CSS scroll snapping](https://css-tricks.com/practical-css-scroll-snapping/) on CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) on 12 Days of Web (2019)
- [Scroll snap examples](https://codepen.io/collection/KpqBGW) on CodePen
