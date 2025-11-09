---
title: 段抜きと段の均衡
slug: Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns
original_slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

このガイドでは、段組みコンテナー内で段抜きを作成する方法、段がどのように充足されるかを制御する方法を見てみます。

## 段抜き

あるアイテムを段抜きする場合は、 {{cssxref("column-span")}} プロパティの値を `all` に設定してください。これで、要素はすべての段にまたがります。

段組みコンテナーの子孫要素は、直接の子でも間接の子でも段抜き (spanner) になることができます。例えば、コンテナーの中に直接含まれる見出しは段抜きになることができますし、段組みコンテナーの中の {{HTMLElement("section")}} に含まれる見出しも同様です。

以下の例では、 `<h2>` 要素が `column-span: all` に設定され、すべての段に段抜きされます。

```html live-sample___h2-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <h2>見出し</h2>
  <p>
    Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
    dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
    zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___h2-span
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  column-span: all;
  background-color: #4d4e53;
  color: #fff;
}
```

{{EmbedLiveSample("h2-span", "", "420px")}}

次の例では、見出しが {{HTMLElement("article")}} 要素の中にありますが、期待通りにコンテンツが段抜きになります。

```html live-sample___nested-h2-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <article>
    <h2>見出し</h2>
    <p>
      Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
      dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
      zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </article>
</div>
```

```css live-sample___nested-h2-span
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  column-span: all;
  background-color: #4d4e53;
  color: #fff;
}
```

{{EmbedLiveSample("nested-h2-span", "", "420px")}}

段抜きが導入されると、段組みの流れが中断され、段抜きの後で実際に新しい一連の段ボックスを作成して段組みが再開します。内容物が段抜き要素をまたぐことはありません。

### column-span の制約

`column-span` に許可されている値は 2 つしかありません。 `none` の値は初期値で、アイテムを段抜きせず、段の中に収めます。 `all` の値はアイテムがすべての段を段抜きすることを意味します。例えばアイテムを 3 段中 2 段に段抜きすることはできません。

### 注意すべきこと

段抜き要素がマージン、パディング、境界、背景色を持つ他の要素の中にあった場合、次の例に示すように、ボックスの上端が段抜きの上に現れ、残りの部分が段抜きの下に表示されることがあります。このため、要素を段抜きにするときにはいくらか注意が必要で、このシナリオに注意する必要があります。

```html hidden live-sample___mpb-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <article>
    <h2>見出し</h2>
    <p>
      Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
      dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
      zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </article>
</div>
```

```css live-sample___mpb-span
body {
  font: 1.2em / 1.5 sans-serif;
}

article {
  border: 1px solid red;
  padding: 10px;
}

.container {
  column-width: 250px;
}
h2 {
  background-color: #4d4e53;
  color: #fff;
  column-span: all;
}
```

{{EmbedLiveSample("mpb-span", "", "420px")}}

加えて、コンテンツの後方に段抜き要素が現れる場合は、段組みをするのに十分なコンテンツが段抜きの後にないと、予期しない挙動または望まない挙動をすることがあります。段抜きは注意深く使用し、様々な分割点になったときに望み通りの結果が得られるかを検査してください。

## 段の充足と均衡

均衡の取れた段組みは、すべての段のコンテンツの量がほぼ同じになっているものです。充足と均衡は、コンテンツの量が提供された空間の量に一致しない場合、例えばコンテナーの高さが宣言されている場合に発生します。

{{cssxref("column-fill")}} の段組みでの初期値は `balance` です。 `balance` の値は、可能な限りすべての段で均衡を取ることを意味します。[ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)のような断片化されたコンテキストにおいては、最後の断片のみで均衡が取られます。つまり、最後のページにおいて一連の段ボックスの均衡が取られます。

均衡を取るための第二の値は `balance-all` で、断片化されたコンテキストにおいて、最後の断片における段だけでなく、すべての段の均衡を取ろうとします。

この例には、画像とテキストを含む均衡の取れた段があります。画像は分割できないので最初の段に入り、他の段はテキストの量が同じになるように充足されます。

```html live-sample___balance
<div class="container">
  <img
    alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion.
  </p>
</div>
```

```css live-sample___balance
body {
  font: 1.2em / 1.5 sans-serif;
}
h2 {
  background-color: #4d4e53;
  color: #fff;
}
img {
  max-width: 100%;
}
.container {
  column-width: 200px;
  column-fill: balance;
  height: 250px;
}
```

{{EmbedLiveSample("balance", "", "250px")}}

値 `auto` を `column-fill` に設定すると、すべての列を均等にバランスよく埋めるのではなく、最初の列をインライン先頭方向に順番に埋めてから、次の列にコンテンツを配置します。この例では、`column-fill` を `auto` に変更しました。列はコンテナーの高さまで埋められ、終わりには空の列が残ります。

```html hidden live-sample___auto
<div class="container">
  <img
    alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion.
  </p>
</div>
```

```css live-sample___auto
body {
  font: 1.2em / 1.5 sans-serif;
}
h2 {
  background-color: #4d4e53;
  color: #fff;
}
img {
  max-width: 100%;
}

.container {
  column-width: 150px;
  column-fill: auto;
  height: 250px;
}
```

{{EmbedLiveSample("auto", "", "250px")}}

## 次のステップ

次のガイドでは、[段組みがはみ出しをどう扱うか](/ja/docs/Web/CSS/Guides/Multicol_layout/Handling_overflow)を、段の中とコンテナーに合う数よりも多くの段ができる場合の両方について学習します。
