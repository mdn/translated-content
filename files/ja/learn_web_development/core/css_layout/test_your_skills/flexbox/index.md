---
title: "確認テスト: フレックスボックス"
short-title: "テスト: フレックスボックス"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Flexbox
l10n:
  sourceCommit: 089e7f607294ebf59c8c1306ac2cad2f96209b07
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}

この確認テストの目的は、[フレックスボックスとフレックスアイテム](/ja/docs/Learn_web_development/Core/CSS_layout/Flexbox)がどのように動作するか理解しているかどうかを評価することです。以下にフレックスボックスを使用して作成する 4 つの一般的なデザインパターンを示します。課題はそれらを構築することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

<!--
## 対話型課題

まず最初に、[学習パートナー](/ja/docs/MDN/Writing_guidelines/Learning_content#外部リンクと埋め込み)である [Scrimba](https://scrimba.com/home) が作成した、マージンの一括指定を使った楽しくインタラクティブな課題（英語）をご紹介します。

埋め込みのスクリームを見て、指示に従ってコードを編集し、タイムライン上の課題（小さな幽霊のアイコン）を完了してください。完了したら、スクリームの再生を再開して、教師の解答が自分の解答と一致するかどうかを調べることができます。

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~03a" scrimtitle="Flexbox alignment challenges" survey="true"></mdn-scrim-inline>
-->

## 課題 1

この課題では、リストアイテムを使用してサイトのナビゲーションを作成します。課題を完了するには、フレックスボックスを使用してリストアイテムを行として配置し、それぞれのアイテム間に等間隔の空間を確保してください。

最終結果はこの完成例のようになるはずです。

{{EmbedLiveSample("flexbox1-finish", "", "100px")}}

```html live-sample___flexbox1-start live-sample___flexbox1-finish
<nav>
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About Us</a></li>
    <li><a href="/products">Our Products</a></li>
    <li><a href="/contact">Contact Us</a></li>
  </ul>
</nav>
```

```css live-sample___flexbox1-start live-sample___flexbox1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
nav ul {
  max-width: 750px;
  list-style: none;
  padding: 0;
  margin: 0;
}
nav a:link,
nav a:visited {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
  display: inline-block;
  text-decoration: none;
}

nav ul {
  /* ここにスタイルを追加 */
}
```

これが課題の開始状態です。

{{EmbedLiveSample("flexbox1-start", "", "240px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

`display: flex` を適用すると、`justify-content` プロパティを使用して空間を制御することができます。

```css live-sample___flexbox1-finish
nav ul {
  display: flex;
  justify-content: space-between;
}
```

</details>

## 課題 2

この課題では、リストアイテムのサイズはすべて異なりますが、それぞれのアイテムにどのようなコンテンツがあっても、 3 つの等しいサイズの段組みとして表示されるようにしてください。

最終結果はこの完成例のようになるはずです。

{{EmbedLiveSample("flexbox2-finish", "", "300px")}}

**ボーナス問題:** これで最初のアイテムを他のアイテムの 2 倍の大きさにできますか？

```html-nolint live-sample___flexbox2-start live-sample___flexbox2-finish
<ul>
  <li>これは小さい</li>
  <li>私はとても小さなアイテムよりも多くのコンテンツを持っています。</li>
  <li>
    コンテンツが山ほどあります。あまりに多すぎて、どこにすべて収まるのか見当もつきません。予想以上に文字数が増えてしまった状況に対処するのに、CSSがかなり頼りになるのはありがたいことです！
  </li>
</ul>
```

```css live-sample___flexbox2-start live-sample___flexbox2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
ul {
  max-width: 750px;
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background-color: #4d7298;
  border: 2px solid #77a6b6;
  border-radius: 0.5em;
  color: white;
  padding: 0.5em;
}

ul {
  /* ここにスタイルを追加 */
}

li {
  /* ここにスタイルを追加 */
}
```

これが課題の開始状態です。

{{EmbedLiveSample("flexbox2-start", "", "240px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

一括指定を使用するのが最善ですので、このシナリオでは `flex: 1` が最も適切な答えでしょう。したがって、最適な結果は次のようになります。

```css live-sample___flexbox2-finish
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

この課題では、完成例のように、これらのアイテムを行に並べてください。

{{EmbedLiveSample("flexbox3-finish", "", "260px")}}

```html live-sample___flexbox3-start live-sample___flexbox3-finish
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

```css live-sample___flexbox3-start live-sample___flexbox3-finish
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
  color: white;
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

これが課題の開始状態です。

{{EmbedLiveSample("flexbox3-start", "", "260px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

この課題では、フレックス行を折り返すための `flex-wrap` プロパティを理解することが求められます。 さらに、上記の例のような外見にするには、子要素に `flex: auto`（または `flex: 1 1 auto;`）を設定する必要があります。

```css live-sample___flexbox3-finish
ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  flex: auto;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout/Grids", "Learn_web_development/Core/CSS_layout")}}
