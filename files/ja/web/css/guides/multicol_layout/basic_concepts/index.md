---
title: 段組みの基本概念
short-title: 基本概念
slug: Web/CSS/Guides/Multicol_layout/Basic_concepts
original_slug: Web/CSS/CSS_multicol_layout/Basic_concepts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

段組みレイアウト (Multi-column layout) は、 multicol レイアウトとも呼ばれ、新聞のようにコンテンツを複数の段ボックスにレイアウトする仕様です。このガイドでは、この仕様がどのように働くかを、いくつかのよくある使用例と共に説明します。

## 主要概念と用語

段組みは他のレイアウト方法とは異なり、 CSS でコンテンツを分割し、すべての子孫要素を段に含めます。これは、印刷スタイルシートを作成するのに使われる [CSS ページメディア](/ja/docs/Web/CSS/Guides/Paged_media)がコンテンツをページに分割するのと同様のことを行います。

このガイドおよび以降のガイドでは、 [CSS 段組みレイアウト](/ja/docs/Web/CSS/Guides/Multicol_layout)モジュールで定義されている以下のプロパティについて説明します。

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}} 一括指定
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}} 一括指定
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}

## 段の定義

`column-count` や `column-width` 、または一括指定の `columns` を要素に追加することで、要素は「段組みコンテナー」になります。段は無名のボックスになり、仕様書上では段ボックスと呼ばれます。

### 段数の指定

`column-count` プロパティは、コンテンツを表示したい段数を指定します。ブラウザーは要求された数の段を生成するために、それぞれの段ボックスに適正な大きさの空間を割り当てます。

以下の例では、 `column-count` プロパティを使用して `.container` 要素に 3 つの段を生成します。その内容は、 `.container` の子も含めて 3 つの段に分割されます。

```html live-sample___column-count
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

```css live-sample___column-count
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
}
```

{{EmbedLiveSample("column-count", "", "280px")}}

上記の例では、コンテンツは既定のスタイルの段落 `<p>` タグで囲まれています。従って、それぞれの段落の上にはマージンがあります。マージンが働いてテキストの最初の行を押し下げているのが分かるでしょう。これは、段組みコンテナーは新しい[ブロック整形コンテキスト (BFC)](/ja/docs/Web/CSS/Guides/Display/Block_formatting_context) を作成するため、子要素のマージンはコンテナーのマージンと相殺されないからです。

### 段の幅の指定

`column-width` プロパティは、それぞれの段ボックスの最適な幅を設定するために使用されます。段の幅を宣言すると、ブラウザーは段組みコンテナー内にその幅の段と、段間の均等の空間が収まる数を計算します。従って、段の幅は最小幅として扱われ、段ボックスはふつう、追加の空間があるためにより広くなります。

段ボックスは、利用できる幅が `column-width` の値よりも狭い一段組みの場合に限り、宣言された段の幅よりも狭くなることがあります。

以下の例では、 `column-width` の値を 200px にして使用しています。コンテナーに合うように 200 ピクセルの段が確保され、残りの空間は均等に配分されます。

```html hidden live-sample___column-width
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

```css live-sample___column-width
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 200px;
}
```

{{EmbedLiveSample("column-width", "", "280px")}}

### 段の数と幅の両方を指定

段組みコンテナーに両方のプロパティを指定すると、 `column-count` は最大の段数として動作します。従って、 `column-count` の段数に達するまでは、 `column-width` で宣言された通りに動作します。これを超えると、 `column-width` で指定された寸法の段を追加する余裕があっても、段は追加されず、余った空間は既存の段に均等に割り当てられます。

両方のプロパティを併用すると、 `column-count` の値で指定されたよりも少ない数の段数になることがあります。

次の例では、 `column-width` を `200px` に、 `column-count` を `2` にして使用しています。 3 段以上の空間があっても 2 段になります。しかし、 200px の段を 2 つ設置する空間の余裕がなければ、 1 段になります。

```html hidden live-sample___column-count-width
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
    carrot soko. .
  </p>
</div>
```

```css live-sample___column-count-width
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 2;
  column-width: 200px;
}
```

{{EmbedLiveSample("column-count-width", "", "280px")}}

### 段のプロパティの一括指定

一括指定の `columns` で `column-count` と `column-width` を設定することができます。長さの単位を設定すると、 `column-width` に使用され、整数値を設定すると、 `column-count` に使用されます。２つの値を空白で区切って両方を設定することができます。

この CSS は[最初の例](#段数の指定)と同じ結果で、 `column-count` を `3` に設定します。

```css
.container {
  columns: 3;
}
```

この CSS は [2 つ目の例](#段の幅の指定)と同じ結果で、 `column-width` を `200px` に設定します。

```css
.container {
  columns: 200px;
}
```

この CSS は [3 つ目の例](#段の数と幅の両方を指定) と同じ結果で、 `column-count` と `column-width` の両方に設定します。

```css
.container {
  columns: 2 200px;
}
```

## 次のステップ

このガイドでは、段組みレイアウトの基本的な利用を学びました。次のガイドでは、 [段のスタイル設定](/ja/docs/Web/CSS/Guides/Multicol_layout/Styling_columns)がどれだけできるかを見てみます。
