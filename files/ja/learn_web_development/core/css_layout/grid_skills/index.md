---
title: "スキルテスト: グリッド"
slug: Learn_web_development/Core/CSS_layout/Grid_skills
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

このスキルテストの目的は、[グリッドとグリッドアイテム](/ja/docs/Learn_web_development/Core/CSS_layout/Grids)の動作を理解しているかどうかを評価することです。今までに使用した素材のさまざまな要素を使用する、いくつかの小さな課題に取り組んでいただきます。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、 4 つの子要素が自動配置されるグリッドを作成しましょう。グリッドは、利用できる空間を均等に共有する 3 つの段組みがあり、列と行のトラックの間には 20 ピクセルの間隔があるはずです。その後、 `grid` クラスを持つ親コンテナーの中にさらに子コンテナーを追加し、既定でどのように動作するかを試してみてください。

最終結果は下記の画像のようになるはずです。

![4 つのアイテムが配置された 3 段組み。](grid-task1.png)

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___grid1
<div class="grid">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
</div>
```

```css hidden live-sample___grid1
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}
```

```css live-sample___grid1
.grid {
}
```

{{EmbedLiveSample("grid1", "", "200px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

`display: grid` を使用してグリッドを作成し、 `grid-template-columns` で 3 つの列を使用し、アイテム間に `gap` を設定します。

```css
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
}
```

</details>

## 課題 2

この課題では、すでにグリッドを定義してあります。 2 つの子要素の CSS ルールを編集して、それぞれ複数のグリッドトラックにまたがるようにしてください。下記の画像のように、 2 つ目の項目が最初の項目の上に重なるようにしてください。

![内部に 2 つのアイテムがあり、一方がもう一方に重なっているボックス。](grid-task2.png)

**ボーナス課題:** これで、ソースの項目の順番を変えずに、最初の項目が一番上に表示されるようにすることができますか？

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___grid2
<div class="grid">
  <div class="item1">One</div>
  <div class="item2">Two</div>
</div>
```

```css hidden live-sample___grid2
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}

.item1 {
  background-color: rgb(74 102 112 / 70%);
  border: 5px solid rgb(74 102 112 / 100%);
}

.item2 {
  background-color: rgb(214 162 173 / 70%);
  border: 5px solid rgb(214 162 173 / 100%);
}
```

```css live-sample___grid2
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 100px 100px 100px;
  gap: 10px;
}

.item1 {
}

.item2 {
}
```

{{EmbedLiveSample("grid2", "", "340px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

アイテムを同じグリッドセルを占めるように重ねることは可能です。
選択肢の一つとして、下記のような一括指定を使用することもできますが、例えば `grid-row-start` のような個別指定を使用するのが正しいでしょう。

```css
.item1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.item2 {
  grid-column: 2 / 5;
  grid-row: 2 / 4;
}
```

ボーナス問題では、これを達成する一つの方法として、フレックスボックスのチュートリアルで用いた `order` を使用する方法があります。

```css
.item1 {
  order: 1;
}
```

他の有効な解決策としては、 `z-index` を使う方法があります。

```css
.item1 {
  z-index: 1;
}
```

</details>

## 課題 3

この課題では、このグリッドに 4 つの直接の子があります。この点では、自動配置を使用して表示されています。 grid-area プロパティと grid-template-areas プロパティを使用して、下記の通りアイテムを表示させましょう。

![グリッド内に表示されている 4 つのアイテム。](grid-task3.png)

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___grid3
<div class="grid">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
  <div class="four">Four</div>
</div>
```

```css hidden live-sample___grid3
body {
  font: 1.2em / 1.5 sans-serif;
}
.grid > * {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}
```

```css live-sample___grid3
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 10px;
}
```

{{EmbedLiveSample("grid3", "", "200px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

レイアウトの各部分には、 `grid-area` プロパティと `grid-template-areas` を使用して名前を付ける必要があります。 混乱が生じる可能性があるのは、セルを空欄にする際に `.` を置く必要があることや、複数のトラックにまたがる要素を発生させるには名前を繰り返す必要があることを理解していない場合です。

```css
.grid {
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 2fr;
  grid-template-areas:
    "aa aa"
    "bb cc"
    ". dd";
}

.one {
  grid-area: aa;
}

.two {
  grid-area: bb;
}

.three {
  grid-area: cc;
}

.four {
  grid-area: dd;
}
```

</details>

## 課題 4

この課題では、グリッドレイアウトとフレックスボックスの両方を使用して、下記画像のような例を再現してください。列と行のトラックの間隔は 10px にします。これを実現するために HTML を変更する必要はありません。

![カードが 2 行に並び、それぞれに画像とタグが設定されています。](grid-task4.png)

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___grid4
<div class="container">
  <div class="card">
    <img
      alt="a single red balloon"
      src="https://mdn.github.io/shared-assets/images/examples/balloons1.jpg" />
    <ul class="tags">
      <li>balloon</li>
      <li>red</li>
      <li>sky</li>
      <li>blue</li>
      <li>Hot air balloon</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="balloons over some houses"
      src="https://mdn.github.io/shared-assets/images/examples/balloons2.jpg" />
    <ul class="tags">
      <li>balloons</li>
      <li>houses</li>
      <li>train</li>
      <li>harborside</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="close-up of balloons inflating"
      src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
    <ul class="tags">
      <li>balloons</li>
      <li>inflating</li>
      <li>green</li>
      <li>blue</li>
    </ul>
  </div>
  <div class="card">
    <img
      alt="a balloon in the sun"
      src="https://mdn.github.io/shared-assets/images/examples/balloons4.jpg" />
    <ul class="tags">
      <li>balloon</li>
      <li>sun</li>
      <li>sky</li>
      <li>summer</li>
      <li>bright</li>
    </ul>
  </div>
</div>
```

```css hidden live-sample___grid4
body {
  font: 1.2em / 1.5 sans-serif;
}
.card {
  display: grid;
  grid-template-rows: 200px min-content;
}

.card > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tags {
  margin: 0;
  padding: 0;
  list-style: none;
}

.tags > * {
  background-color: #999;
  color: #fff;
  padding: 0.2em 0.8em;
  border-radius: 0.2em;
  font-size: 80%;
  margin: 5px;
}
```

```css live-sample___grid4
.container {
}

.tags {
}
```

{{EmbedLiveSample("grid4", "", "400px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

2 次元の行と列に配置するので、コンテナーはグリッドレイアウトにする必要があります。
この `<ul>` はフレックスコンテナーである必要があります。タグ（`<li>` 要素）は列ではなく行に配置されており、配置プロパティ `justify-content` が `center` に設定されているため、空間の中央に配置されます。

コンテナーでフレックスボックスを使用し、パーセント値でカードを制限することもできます。また、アイテムをグリッドレイアウトにすることもできますが、その場合、アイテムは 2 次元で配置されないため、フレックスボックスは最良の選択肢ではないことに注意してください。

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
