---
title: 段のスタイル設定
slug: Web/CSS/Guides/Multicol_layout/Styling_columns
original_slug: Web/CSS/CSS_multicol_layout/Styling_columns
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

段組みコンテナー内に作られた段ボックスは無名ボックスなので、それぞれの段に個別にスタイルを設定することはできませんが、段の間隔とコンテナーには一般的にスタイルが設定できます。このガイドは、段の間隔および段間罫をスタイル付けする方法を説明します。

## 段の間隔

段と段の間（段間）は、 {{CSSXref("column-gap")}} または {{CSSXref("gap")}} プロパティで制御されます。 `column-gap` プロパティは[段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュールで定義されています。 `gap` プロパティは[ボックス配置](/ja/docs/Web/CSS/Guides/Box_alignment)モジュールで定義されています。これは、 [CSS グリッドレイアウト](/ja/docs/Web/CSS/Guides/Grid_layout/Box_alignment)や [CSS フレックスボックスレイアウト](/ja/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)など、間隔に対応しているすべてのレイアウトで、ボックス間の間隔を定義するための統一プロパティです。

段組みにおける `column-gap` の初期値は `1em` です。つまり、段同士は互いに接しません。他のレイアウト方法では、 `column-gap` は `gap` の別名として対応していますが、初期値は `0` です。キーワード値 `normal` は、`column-gap` を初期値に設定します。

段間はいずれかの {{cssxref("length")}} 値を使用して、変更することができます。以下の例では、 `column-gap` は `40px` に設定されます。

```html live-sample___column-gap
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

```css live-sample___column-gap
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-gap: 40px;
}
```

{{EmbedLiveSample("column-gap", "", "300px")}}

`column-gap` に許されている値は {{cssxref("length-percentage")}} です。つまり、パーセント値を使用することができます。 `column-gap` のパーセント値は、段組みコンテナーの幅に対するパーセント値として計算されます。

## 段間罫

仕様書では {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule-style")}}, {{CSSXref("column-rule-color")}} と、一括指定の {{CSSXref("column-rule")}} を定義しています。これらのプロパティは、 {{CSSXref("border")}} プロパティとまったく同じように動作します。有効な {{CSSXref("border-style")}} と同様に、任意の {{CSSXref("line-style")}} 値が `column-rule-style` で使用できます。

これらのプロパティは段組みコンテナーである要素に適用されるため、すべての段に同じ段間罫が引かれます。段間罫は段同士の間にのみ引かれ、外の辺には引かれません。段間罫は内容のある段の間にのみ引かれます。

次の例は、幅 5px の点線の段間罫を rebeccapurple の色で、個別指定を使用して作成しています。

```html hidden live-sample___column-rule
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

```css live-sample___column-rule
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-rule-width: 5px;
  column-rule-style: dotted;
  column-rule-color: rebeccapurple;
}
```

{{EmbedLiveSample("column-rule", "", "300px")}}

なお、段間罫自体は空間を占有しません。段間罫が太くなっても、段間が広がることはありません。その代わりに、段間罫が段間と重なります。

次の例では、とても太い `40px` の段間罫を `10px` の段間に引いています。段間罫は段の内容の下に表示されます。段間罫の両側に間隔を作るには、 gap を `40px` より大きくする必要があるでしょう。

```html hidden live-sample___column-rule-wide
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

```css live-sample___column-rule-wide
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-gap: 10px;
  column-rule: 40px solid rebeccapurple;
}
```

{{EmbedLiveSample("column-rule-wide", "", "300px")}}

## まとめ

ここでは、現在段ボックスに対してスタイル付けすることができるすべての方法を説明しました。次のガイドでは、コンテナー内で[すべての段をまたがる](/ja/docs/Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns)要素の作成を見てみましょう。
