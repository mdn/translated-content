---
title: 段組みでのオーバーフローの処理
short-title: オーバーフローの処理
slug: Web/CSS/Guides/Multicol_layout/Handling_overflow
original_slug: Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

このガイドでは、段組み (_multicol_) レイアウトにおいて、段ボックス内およびコンテナーに収まらないコンテンツがある場合のオーバーフローに対処する方法について説明します。

## 段ボックス内でのオーバーフロー

オーバーフローは、アイテムの寸法が段ボックスよりも大きな場合に発生します。例えば、段内の画像が `column-width` の幅、または `column-count` で宣言された段数に基づく段の幅よりも広い場合に発生します。

この場合、内容物は段ボックスで切り取られるのではなく、次の列にはみ出します。以下の例と、ブラウザーが描画時に別な方法で処理する予定のレンダリングの画像を見てください。

```html live-sample___image
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <img
    alt="A close-up of two hot air balloons being inflated."
    src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___image
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}
```

{{EmbedLiveSample("image", "", "440px")}}

2 段のテキストがあります。左の段には、段よりも幅の広い写真があります。画像は 2 つ目の段に展開され、右の段のテキストの後ろに現れます。右の段のテキストのフローは、はみ出した写真の影響を受けませんが、外観は影響を受けます。

画像を段ボックスに合うよう縮小したい場合は、 `max-width: 100%` を設定する標準的なレスポンシブ画像の解決方法で実現することができます。

```html hidden live-sample___image-max-width
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <img
    alt="A close-up of two hot air balloons being inflated."
    src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___image-max-width
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}
img {
  max-width: 100%;
}
```

{{EmbedLiveSample("image-max-width", "", "440px")}}

## より多くの段が生成される場合

段のオーバーフローの処理方法は、メディアコンテキストが印刷などの断片化されているか、ウェブページなどの連続しているかで異なります。

断片化されたメディアでは、 1 つの断片（例えば 1 ページ）が段で埋まると、段は新しいページに移動し、それを段で埋めます。連続メディアでは、段はインライン方向にはみ出します。ウェブでは、ここでスクロールバーが出現します。

以下の例ではこのオーバーフローの挙動を紹介します。段組みコンテナーには {{CSSXref("height")}} が設定されており、段を生成する空間よりも多くのテキストがありますので、段がコンテナーをはみ出して作成されます。

```html live-sample___overflow-inline
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___overflow-inline
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 200px;
  height: 180px;
  border: 2px dashed;
}
```

{{EmbedLiveSample("overflow-inline", "", "240px")}}

## 垂直メディアクエリーの使用

ウェブでの段組みの問題の一つに、段がビューポートより高い場合、読み手は読むのに上下にスクロールしなければならなくなるので使い勝手が悪くなるというものがあります。これを防ぐ一つの方法が、十分な高さがあると分かった時にだけ段組みプロパティを適用することです。

以下の例では、 `height` の [@media クエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)を使用して、段組みプロパティを適用する前に高さを検査します。

```html hidden live-sample___min-height
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___min-height
body {
  font: 1.2em / 1.5 sans-serif;
}

@media (height >= 300px) {
  .container {
    column-width: 200px;
  }
}
```

{{EmbedLiveSample("min-height", "", "340px")}}

## 次のステップ

このシリーズの最後のガイドでは、[断片化が段組みでどのように動作するか](/ja/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks)を見て、段をまたいでコンテンツが分割される方法を制御します。
