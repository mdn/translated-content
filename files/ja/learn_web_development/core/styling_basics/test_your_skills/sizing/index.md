---
title: "確認テスト: サイズ設定"
short-title: "テスト: サイズ設定"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

この確認テストの目的は、 [CSS でのアイテムのサイズ設定](/ja/docs/Learn_web_development/Core/Styling_basics/Sizing)の様々な方法を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## サイズ設定 1

この課題では、 2 つのボックスがあります。

この課題を完成させるには、次のことを行ってください。

1. 最初のボックスは、高さが少なくとも `100px` になるようにし、コンテンツの量が少なくてその高さに達しない場合でも、その高さになるようにします。ボックスに収まらない場合、コンテンツがあふれないようにしてください。
2. HTML からコンテンツを削除して、コンテンツがない場合でもボックスの高さが `100px` になることを確認してください。
3. 2 つ目のボックスの高さは `100px` に固定してください。この場合、コンテンツははみ出します。

この課題の出発点は次のようなものです。

{{EmbedLiveSample("sizing1-start", "", "480px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___sizing1-start live-sample___sizing1-finish
<div class="box box1">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
</div>

<div class="box box2">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
</div>
```

```css live-sample___sizing1-start live-sample___sizing1-finish
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}

.box {
  border: 5px solid black;
  width: 400px;
  margin-bottom: 1em;
}

.box1 {
  /* ここにスタイルを追加 */
}

.box2 {
  /* ここにスタイルを追加 */
}
```

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("sizing1-finish", "", "460px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

ボックスが 2 つあります。1 つ目のボックスには `min-height` が指定されているため、追加されたコンテンツに合わせて拡張されますが、コンテンツが除去されても高さが `100px` を下回ることはありません。2 つ目のボックスは高さが固定されているため、コンテンツがあふれます。

```css live-sample___sizing1-finish
.box1 {
  min-height: 100px;
}

.box2 {
  height: 100px;
}
```

</details>

## サイズ設定 2

この課題では、別のボックスを格納しているボックスがあります。

この課題を完成させるには、次のことを行ってください。

1. 課題は、内側のボックスの幅を外側のボックスの幅の `60%` にすることです。 {{cssxref("box-sizing")}} プロパティの値は `border-box` に設定されており、これは全体の幅が `padding` と `border` を含んでいることを意味しています。
2. 内側のボックスに `10%` のパディング値を与えてください。

この課題の出発点は次のようなものです。

{{EmbedLiveSample("sizing2-start", "", "100px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___sizing2-start live-sample___sizing2-finish
<div class="box">
  <div class="inner">親の 60% の幅にしてください。</div>
</div>
```

```css live-sample___sizing2-start live-sample___sizing2-finish
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}

.box {
  border: 5px solid black;
  width: 400px;
  margin-bottom: 1em;
}

.inner {
  background-color: rebeccapurple;
  color: white;
  border-radius: 5px;
}

* {
  box-sizing: border-box;
}
.inner {
  /* ここにスタイルを追加 */
}
```

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("sizing2-finish", "", "220px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

ボックスの `width` を `60%` にし、`padding` の値を `10%` にします。
すべての要素にはすでに `box-sizing: border-box` が設定されていますので、`60%` の幅の値を計算する手間が省けます。

```css live-sample___sizing2-finish
.inner {
  width: 60%;
  padding: 10%;
}
```

</details>

## サイズ設定 3

この課題では、箱の中に 2 つの画像があります。一方の画像はボックスより小さく、もう一方はボックスからはみ出す大きさです。

この課題を完成させるには、ボックスがレスポンシブであり、伸長したり縮小したりできると想像してください。大きな画像がボックス内に縮小され、小さな画像が伸縮しないように、画像に宣言を適用してください。

この課題の出発点は次のようなものです。

{{EmbedLiveSample("sizing3-start", "", "700px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___sizing3-start live-sample___sizing3-finish
<div class="box">
  <img
    alt="ピンクの星"
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_256x256.png" />
</div>

<div class="box">
  <img
    alt="澄み切った空に浮かぶ熱気球と、前景の人々の群れ"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___sizing3-start live-sample___sizing3-finish
body {
  font: 1.2em / 1.5 sans-serif;
  padding: 1em;
}
.box {
  border: 5px solid black;
  margin-bottom: 1em;
  width: 500px;
}

img {
  /* ここにスタイルを追加 */
}
```

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("sizing3-finish", "", "720px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

画像の `max-width` プロパティを `100%` に設定すると、大きな画像がボックス内に収まります。`width: 100%` を指定すると、小さな画像は引き伸ばされます。

```css live-sample___sizing3-finish
img {
  max-width: 100%;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Sizing", "Learn_web_development/Core/Styling_basics/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
