---
title: "スキルテスト: 段組み"
slug: Learn_web_development/Core/CSS_layout/Multicol_skills
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このスキルテストの目的は、[CSS 段組みレイアウト](/ja/docs/Learn_web_development/Core/CSS_layout/Multiple-column_Layout)を、{{CSSxRef("column-count")}}、{{CSSxRef("column-width")}}、{{CSSxRef("column-gap")}}、{{CSSxRef("column-span")}}、{{CSSxRef("column-rule")}} プロパティや値を含めて理解しているかどうかを評価することです。今までに学んだ素材の様々な要素を使用する、 3 つの小さな課題を行っていただきます。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、各列の間に 50px の間隔を空けて、 3 つの段組みを作成してください。

最終結果は下記の画像のようになるはずです。

![3 段組みのテキスト](multicol-task1.png)

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___multicol1
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
    carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green
    bean swiss chard seakale pumpkin onion chickpea gram corn pea.
  </p>
</div>
```

```css live-sample___multicol1
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
}
```

{{EmbedLiveSample("multicol1", "", "300px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

この課題を達成するには、`column-count` と `column-gap` を使用する必要があります。

```css
.container {
  column-count: 3;
  column-gap: 50px;
}
```

</details>

## 課題 2

この課題では、最小幅 200px の段組みを作成します。次に、各段の間に 5px の灰色の罫線を追加し、罫線の端と列のコンテンツとの間に 10px の空間があることを保証してください。

最終結果は下記の画像のようになるはずです。

![グレーの罫線を挟んだ 3 段組みのテキスト。](multicol-task2.png)

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___multicol2
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
    carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green
    bean swiss chard seakale pumpkin onion chickpea gram corn pea.
  </p>
</div>
```

```css live-sample___multicol2
body {
  font: 1.2em / 1.5 sans-serif;
}
.container {
}
```

{{EmbedLiveSample("multicol2", "", "300px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

`column-width` および `column-rule` プロパティを使用する必要があります。
一括指定の代わりに、個別指定の `column-rule-*` プロパティを使用することができますが、そうすることに恩恵を受けることはできません。
`column-gap` の使用における重要な点は、このルールが間隔に 5px の空間を追加しないことを理解していることです。ルールを間隔に重ねる場合、ルールを左右に 10px ずつ保有するには、 25px の間隔が必要です。

```css
.container {
  column-width: 200px;
  column-rule: 5px solid #ccc;
  column-gap: 25px;
}
```

</details>

## 課題 3

この課題では、見出しと小見出しを格納する要素をすべての段組みにまたがるようにし、下記画像のようにしてください。

![3段組みで、中央に見出しと小見出し。](multicol-task3.png)

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___multicol3
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
  <div class="box">
    <h2>I am a level 2 heading</h2>
    <div class="subhead">Lotus root water spinach fennel</div>
  </div>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko. Lotus root water spinach fennel kombu maize bamboo shoot green
    bean swiss chard seakale pumpkin onion chickpea gram corn pea.
  </p>
</div>
```

```css hidden live-sample___multicol3
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.box {
  text-align: center;
  margin: 1em 0;
}

.box h2 {
  margin: 0;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  column-gap: 0.5em;
  align-items: center;
}

.box h2::before {
  content: "";
  border-bottom: 5px dotted #ccc;
}

.box h2::after {
  content: "";
  border-bottom: 5px dotted #ccc;
}

.subhead {
  font-style: italic;
}
```

```css live-sample___multicol3
.container {
  column-count: 3;
}

.box {
}

h2 {
}
```

{{EmbedLiveSample("multicol3", "", "400px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

この課題では、`column-span` プロパティの理解度を検査します。
必要なことは、クラスが `.box` の要素を `column-span: all` に設定することだけです。
これは、正しい要素を選択しているかどうかを調べる課題です。

```css
.box {
  column-span: all;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
