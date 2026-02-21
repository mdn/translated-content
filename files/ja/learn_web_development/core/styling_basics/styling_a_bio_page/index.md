---
title: "課題: 経歴ページのスタイル設定"
short-title: "課題: 経歴ページ"
slug: Learn_web_development/Core/Styling_basics/Styling_a_bio_page
l10n:
  sourceCommit: 9381ac06accc1f6340cda5c90cec69cc66f67136
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}

この課題では、シンプルな経歴ページをスタイル設定します。ここ数回のレッスンで学んだスキル、具体的にはセレクターの記述、背景色の設定、テキストのスタイル設定などを試す内容です。また、まだ扱っていない基本的な CSS 機能について調べることも求められます。これは調査スキルを試すためです。

## 出発点

始めるには、以下のコードパネルのいずれかにある **Play** ボタンをクリックし、MDN Playground で指定されたサンプルを開きます。その後、後続の節の手順に従ってページを適切にスタイル設定すること。

```html live-sample___style-bio-start live-sample___style-bio-finish
<h1>Jane Doe</h1>
<div class="job-title">Web Developer</div>
<p>
  Far far away, behind the word mountains, far from the countries Vokalia and
  Consonantia, there live the blind texts. Separated they live in Bookmarksgrove
  right at the coast of the Semantics, a large language ocean.
</p>

<p>
  A small river named Duden flows by their place and supplies it with the
  necessary regelialia. It is a paradisematic country, in which roasted parts of
  sentences fly into your mouth.
</p>

<h2>Contact information</h2>
<ul>
  <li>Email: <a href="mailto:jane@example.com">jane@example.com</a></li>
  <li>Web: <a href="http://example.com">http://example.com</a></li>
  <li>Tel: <a href="tel:12345678">123 45678</a></li>
</ul>
```

```css live-sample___style-bio-start
html {
  background-color: white;
}

body {
  font: 1.2em / 1.5 system-ui;
}
```

{{EmbedLiveSample("style-bio-start", "100%", "400px")}}

## プロジェクト概要

下記の手順に従って経歴をスタイル設定すること。必要な CSS 機能については [MDN CSS リファレンス](/en-US/docs/Web/CSS/Reference)を参照すること。

### ボックスのスタイル

1. `<body>` 要素に、全ての辺に `20px` のパディングと `500px` の幅を設定すること。
2. `<body>` 要素の背景色を `#efefef`（薄いグレーの {{cssxref("&lt;hex-color>")}} 値）に設定すること。
3. `<body>` 要素をビューポート内に中央配置するため、上マージンと下マージンを `0` に設定し、左マージンと右マージンを `auto` に設定すること。
4. 連絡先情報に使用されている `<ul>` 要素に背景色 `white` を適用し、全辺に 5px の紫色で実線の境界線を設定します。コンテンツを境界線から離すため、`<ul>` 要素に全辺 `30px` のパディングを設定すること。
5. `<ul>` の境界の角の半径を `20px` とすること。

### テキストスタイル

1. レベル 1 の見出しをダークグレー（CSS キーワード `darkslategray`）にし、その見出しの下部に `10px` の点線の境界線を、CSS 色キーワード `purple` を使用して付与すること。
2. レベル 2 の見出しをイタリック体にすること。
3. レベル 1 の見出しのフォントサイズを `2rem`、レベル 2 の見出しのフォントサイズを `1.5rem` とすること。
4. クラスセレクターで `<div>` 要素を選択し、色を `darkslategray`、フォントの太さを太字（bold）にすること。
5. リンクの色を `green` にすること。
6. マウスポインターで当てたときまたはキーボードでフォーカスされたリンクを `darkgreen` にすること（この作業には{{cssxref("pseudo-classes", "擬似クラス", "", 1)}}をいくつか使用する必要がある）。
7. ポインターをかざしたときまたはフォーカス中にリンクの下線を消すこと。

## ヒントとコツ

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) を使用することで、 CSS の意図しない間違い（他の方法では見逃してしまうかもしれない間違い）を発見し、修正することができます。
- その後、[MDN CSS リファレンス](/ja/docs/Web/CSS/Reference)でこのページで紹介されていないプロパティを見て冒険してみてください。
- ここに間違った答えはないことを忘れないでください。この段階では、少し楽しむ余裕があるのです。

## 例

この画像のように仕上がるはずです。

{{EmbedLiveSample("style-bio-finish", "100%", "400px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完了したライブサンプルに適用されている CSS は以下のようになっています。

```css live-sample___style-bio-finish
html {
  background-color: white;
}

body {
  font: 1.2em / 1.5 system-ui;
  padding: 20px;
  width: 500px;
  background-color: #efefef;
  margin: 0 auto;
}

h1 {
  color: darkslategray;
  border-bottom: 10px dotted purple;
  font-size: 2rem;
}

h2 {
  font-style: italic;
  font-size: 1.5rem;
}

.job-title {
  color: darkslategray;
  font-weight: bold;
}

ul {
  background-color: white;
  border: 5px solid purple;
  padding: 30px;
  border-radius: 20px;
}

a {
  color: green;
}

a:hover,
a:focus {
  color: darkgreen;
  text-decoration: none;
}
```

この課題解決に使用した CSS プロパティは以下の通りです。それぞれのプロパティは MDN のプロパティページにリンクしており、使用例をさらに確認できます。

- {{cssxref("background-color")}}
- {{cssxref("border")}} または関連する個別指定プロパティ
- {{cssxref("color")}}
- {{cssxref("font-size")}}
- {{cssxref("font-style")}}
- {{cssxref("font-weight")}}
- {{cssxref("margin")}} または関連する個別指定プロパティ
- {{cssxref("padding")}} または関連する個別指定プロパティ
- {{cssxref("text-decoration")}}
- {{cssxref("width")}}

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Getting_started", "Learn_web_development/Core/Styling_basics/Basic_selectors", "Learn_web_development/Core/Styling_basics")}}
