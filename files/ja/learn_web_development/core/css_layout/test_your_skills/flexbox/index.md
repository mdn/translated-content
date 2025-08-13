---
title: "スキルテスト: フレックスボックス"
short-title: フレックスボックス
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

このスキルテストの目的は、[フレックスボックスとフレックスアイテム](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)がどのように動作するか理解しているかどうかを評価することです。以下にフレックスボックスを使用して作成する 4 つの一般的なデザインパターンを示します。課題はそれらを構築することです。

> [!NOTE]
> 手助けが必要な場合は、[スキルテスト](/ja/docs/Learn_web_development#スキルテスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

<!--
## 対話型チャレンジ

まず最初に、[学習パートナー](/ja/docs/MDN/Writing_guidelines/Learning_content#外部リンクと埋め込み)である [Scrimba](https://scrimba.com/home) が作成した、マージンの一括指定を使った楽しくインタラクティブな課題をご紹介します。

埋め込みのスクリームを見て、指示に従ってコードを編集し、タイムライン上の課題（小さな幽霊のアイコン）を完了してください。完了したら、スクリームの再生を再開して、教師の解答が自分の解答と一致するかどうかを調べることができます。

<scrim-inline url="https://scrimba.com/frontend-path-c0j/~03a" scrimtitle="Flexbox alignment challenges" survey="true"></scrim-inline>
-->

## 課題 1

この課題では、リストアイテムはサイトのナビゲーションです。各アイテムの間に等しい空間の大きさで、一列に並べる必要があります。

最終結果は下記の画像のようになるはずです。

![空間を空けて並べられたフレックスアイテム。](flex-task1.png)

```html live-sample___flexbox1
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/products">Our Products</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</nav>
```

```css live-sample___flexbox1
body {
  font: 1.2em / 1.5 sans-serif;
}
nav ul {
  max-width: 700px;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav a:link,
nav a:visited {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
  display: inline-block;
  text-decoration: none;
}

nav ul {
  /* ここにスタイルを追加 */
}
```

{{EmbedLiveSample("flexbox1", "", "240px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

`display: flex` を適用すると、`justify-content` プロパティを使用して空間を制御することができます。

```css
nav ul {
  display: flex;
  justify-content: space-between;
}
```

</details>

## 課題 2

この課題では、リストアイテムのサイズはすべて異なりますが、それぞれのアイテムにどのようなコンテンツがあっても、 3 つの等しいサイズの段組みとして表示されるようにしてください。

最終結果は下記の画像のようになるはずです。

![フレックスアイテムは、 3 つの等しい大きさの段組みでレイアウトされ、コンテンツの量が異なります。](flex-task2.png)

**ボーナス問題:** これで最初のアイテムを他のアイテムの 2 倍の大きさにできますか？

```html live-sample___flexbox2
<ul>
  <li>I am small</li>
  <li>I have more content than the very small item.</li>
  <li>
    I have lots of content. So much content that I don't know where it is all
    going to go. I'm glad that CSS is pretty good at dealing with situations
    where we end up with more words than expected!
  </li>
</ul>
```

```css live-sample___flexbox2
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  max-width: 700px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
}

ul {
  /* ここにスタイルを追加 */
}

li {
  /* ここにスタイルを追加 */
}
```

{{EmbedLiveSample("flexbox2", "", "240px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

一括指定を使用するのが最善ですので、このシナリオでは `flex: 1` が最も適切な答えでしょう。したがって、最適な結果は次のようになります。

```css
ul {
  display: flex;
}

li {
  flex: 1;
}
```

ボーナス問題では、最初の要素を対象とし、 `flex: 2;`（または `flex: 2 0 0;` または `flex-grow: 2`）を設定するセレクターを追加します。

```css
li:first-child {
  flex: 2;
}
```

</details>

## 課題 3

この課題では、下記の画像のように、これらのアイテムを行に並べてください。

![行として表示される一連のアイテム。](flex-task4.png)

```html live-sample___flexbox4
<ul>
  <li>Turnip</li>
  <li>greens</li>
  <li>yarrow</li>
  <li>ricebean</li>
  <li>rutabaga</li>
  <li>endive</li>
  <li>cauliflower</li>
  <li>sea lettuce</li>
  <li>kohlrabi</li>
  <li>amaranth</li>
</ul>
```

```css live-sample___flexbox4
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  width: 450px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: #fff;
  padding: 0.5em;
  margin: 0.5em;
}

ul {
  /* ここにスタイルを追加 */
}

li {
  /* ここにスタイルを追加 */
}
```

{{EmbedLiveSample("flexbox4", "", "260px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

この課題では、フレックス行を折り返すための `flex-wrap` プロパティを理解することが求められます。 さらに、上記の例のような外見にするには、子要素に `flex: auto`（または `flex: 1 1 auto;`）を設定する必要があります。

```css
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  flex: auto;
}
```

</details>
