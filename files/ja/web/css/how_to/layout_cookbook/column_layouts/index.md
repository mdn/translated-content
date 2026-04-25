---
title: コラムレイアウト
slug: Web/CSS/How_to/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

いくつかのコラム（列、段）を含むレイアウトを作成する必要があることがよくあります。 CSS にはこれを行うためのいくつかの方法があります。[段組み](/ja/docs/Web/CSS/Guides/Multicol_layout)、[フレックスボックス](/ja/docs/Web/CSS/Guides/Flexible_box_layout)、[グリッド](/ja/docs/Web/CSS/Guides/Grid_layout)のどのレイアウトを使用するかは、達成しようとしている内容によって異なります。 このレシピでは、これらの選択肢について説明します。

![コンテナー内に 2 つの欄を持つ 3 種類のレイアウトスタイル。](cookbook-multiple-columns.png)

## 要件

コラムで達成したいと思うかもしれないデザインパターンがいくつかあります。

- [新聞のような段に分割されたコンテンツの連続したスレッド。](#コンテンツの連続したスレッド--段組みレイアウト)
- [すべての高さが等しい、コラムとして並べられた一連のアイテム。](#同じ高さの単一行のアイテム--フレックスボックス)
- [行と列に整列された複数のコラムの行。](#アイテムを行と列に並べる--グリッドレイアウト)

## レシピ

達成する要件に応じて、異なるレイアウトメソッドを選択する必要があります。

### コンテンツの連続したスレッド — 段組みレイアウト

段組みレイアウト (multi-column layout) を使用して段を作成した場合、テキストは連続した流れのまま、それぞれの段を順番に埋めます。 段はすべて同じサイズである必要があり、個々の段または個々の段のコンテンツをターゲットにすることはできません。

{{cssxref("column-gap")}} または {{cssxref("gap")}} プロパティを使用して段間の幅を制御したり、{{cssxref("column-rule")}} を使用して段間に線を追加したりすることができます。

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html live-sample___multi-column-layout-example
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
  </p>
</div>
```

```css live-sample___multi-column-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  font: 1.2em sans-serif;

  column-width: 10em;
  column-rule: 1px solid rgb(75 70 74);
}
```

{{EmbedLiveSample("multi-column-layout-example", "", "350px")}}

この例では、{{cssxref("column-width")}} プロパティを使用して、ブラウザーが追加の列を追加する前に、列が満たすべき最小幅を設定しました。{{cssxref("columns")}} 一括指定プロパティを使用することで、`column-width` プロパティと {{cssxref("column-count")}} プロパティを設定できます。これらはどちらも、許可される段の最大数を定義することができます。

次のような場合には、段組みを使用してください。

- テキストを新聞のような段に表示したい。
- 段に分割したい一連の小さなアイテムがある。
- 個々の段ボックスを装飾のターゲットにする必要がない。

### 同じ高さの単一行のアイテム — フレックスボックス

フレックスボックスを使用すると、親要素をフレックスコンテナーにするために {{cssxref("display", "display: flex;")}} を設定することで、コンテンツをコラムに分割することができます。このプロパティを 1 つ追加するだけで、すべての子要素（子要素、擬似要素、テキストノード）が 1 行に並ぶフレックスアイテムになります。同じ {{cssxref("flex")}} という一括指定プロパティに 1 つの値を設定すると、利用できる空間が均等に配分されます。通常、折り返されないコンテンツによってアイテムが大きくなるような要素がない限り、すべてのフレックスアイテムは同じサイズになります。

マージンや `gap` プロパティを使用することで、アイテム間に隙間を作成することはできますが、現時点では、フレックスアイテムの間に区切り線を追加する CSS プロパティは存在しません。

```html live-sample___columns-flexbox-example
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

```css live-sample___columns-flexbox-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  font: 1.2em sans-serif;

  display: flex;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1;
}
```

{{EmbedLiveSample("columns-flexbox-example", "", "400px")}}

フレックスアイテムが新しい行に折り返されるレイアウトを作成するには、コンテナーの {{cssxref("flex-wrap")}} プロパティを `wrap` に設定します。それぞれのフレックス行は、その行の空間のみを配分することに注意してください。次の例で分かるように、ある行のアイテムは、必ずしも他の行のアイテムと揃うとは限りません。これが、フレックスボックスが「一次元」と説明される所以です。フレックスボックスは、行または列としてのレイアウトを制御するために設計されており、両方を同時に制御するようには設計されていません。

```html live-sample___columns-flexbox-wrapping-example
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

```css live-sample___columns-flexbox-wrapping-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  width: 500px;
  font: 1.2em sans-serif;

  display: flex;
  flex-wrap: wrap;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("columns-flexbox-wrapping-example", "", "450px")}}

フレックスボックスは次のような場合に使用します。

- 1 行または 1 列のアイテム。
- アイテムをレイアウトした後に交差軸 (cross axis) 方向に揃えたい場合。
- 折り返された行のアイテムが、その行内のみで空間を共有し、他の行のアイテムとは並ばなくてもよい場合。

### アイテムを行と列に並べる — グリッドレイアウト

アイテムを行_と_列に並べる二次元グリッドを作成したい場合は、CSSグリッドレイアウトを選択すべきです。フレックスボックスがフレックスコンテナーの直接の子要素に対して機能するのと同様に、グリッドレイアウトはグリッドコンテナーの直接の子要素に対して機能します。コンテナーに {{cssxref("display", "display: grid;")}}を設定するだけです。このコンテナーに設定されたプロパティ（{{cssxref("grid-template-columns")}} や {{cssxref("grid-template-rows")}} など）によって、アイテムが行と列に沿ってどのように配置されるかが定義されます。

以下のコードブロックの "Play" をクリックすると、この例を MDN Playground で開きます。

```html live-sample___grid-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens.
  </p>

  <p>
    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
    celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
    parsnip. .
  </p>
</div>
```

```css live-sample___grid-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  width: 500px;
  font: 1.2em sans-serif;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  margin: 0;
}
```

{{EmbedLiveSample("grid-layout-example", "", "450px")}}

次のような場合には、グリッドを使用します。

- 複数行または複数列のアイテムのため。
- アイテムをブロック軸とインライン軸に揃えることができるようにしたい場合。
- アイテムを行と列に整列させたい場合。

## MDN の関連資料

- [段組みレイアウトのガイド](/ja/docs/Web/CSS/Guides/Multicol_layout)
- [フレックスボックスのガイド](/ja/docs/Web/CSS/Guides/Flexible_box_layout)
- [CSS グリッドレイアウトのガイド](/ja/docs/Web/CSS/Guides/Grid_layout)
