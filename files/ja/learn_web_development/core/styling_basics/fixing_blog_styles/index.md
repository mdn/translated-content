---
title: "課題: ブログページスタイルの修正"
short-title: "課題: ブログのスタイルの修正"
slug: Learn_web_development/Core/Styling_basics/Fixing_blog_styles
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

この課題では、部分的にスタイルが適用された基本的なブログページの例を用意しました。既存の CSS の問題点を修正し、仕上げとしていくつかのスタイルを追加してください。その過程で、セレクター、ボックスモデル、競合/カスケードに関する知識を検査します。

## 出発点

始めるには、以下のコードパネルのいずれかにある **Play** ボタンをクリックし、MDN Playground で指定されたサンプルを開いてください。その後、[プロジェクト概要]の手順に従ってページを適切にスタイル設定してください。

```html live-sample___blog-start live-sample___blog-finish
<!doctype html>
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <title>ブログページのサイズ変更の課題</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <header>
      <h1>最高に素晴らしいブログ</h1>
      <nav>
        <ul>
          <li><a href="#">ホーム</a></li>
          <li><a href="#">ブログ</a></li>
          <li><a href="#">自己紹介</a></li>
          <li><a href="#">連絡先</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="introduction" class="highlight">
        <h2>最新の投稿</h2>
        <p>
          Laoreet lorem curae lectus blandit conubia vel semper laoreet congue
          at taciti.
          <a href="#">Phasellus hac consectetur iaculis dui</a> sapien iaculis
          hac ultricies per luctus. Suscipit mattis lacus semper in porta
          phasellus sollicitudin ipsum fermentum phasellus sapien. Inceptos
          etiam placerat porttitor finibus auctor at platea hendrerit aenean
          laoreet elit lorem odio.
        </p>
      </section>
      <section>
        <h2>わくわくするコンテンツ</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
          tortor purus <a href="#">platea sit eu id</a> nisi litora libero.
          Neque vulputate consequat ac amet augue blandit maximus aliquet
          congue. Pharetra vestibulum posuere ornare
          <a href="#">faucibus fusce dictumst</a> orci aenean eu facilisis ut
          volutpat commodo senectus purus himenaeos fames primis convallis nisi.
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Neque vulputate consequat</li>
          <li>Phasellus fermentum malesuada</li>
          <li>Curabitur semper venenatis</li>
          <li>Duis lectus porta mattis</li>
        </ul>
        <p>
          Phasellus fermentum malesuada phasellus netus dictum aenean placerat
          egestas amet.
          <a href="#">Ornare taciti semper dolor tristique</a> morbi. Sem leo
          tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus
          mollis nisi mollis enim fermentum laoreet.
        </p>
        <h2>もっとワクワクするコンテンツ</h2>
        <p>
          Curabitur semper venenatis lectus viverra ex dictumst nulla maximus.
          Primis iaculis elementum conubia feugiat venenatis dolor augue ac
          blandit nullam ac <a href="#">phasellus turpis</a> feugiat mollis.
          Duis lectus porta mattis imperdiet vivamus augue litora lectus arcu.
          Justo torquent pharetra volutpat ad blandit bibendum
          <a href="#">accumsan nec elit cras</a> luctus primis ipsum gravida
          class congue.
        </p>
        <p>
          Vehicula etiam elementum finibus enim duis feugiat commodo adipiscing
          tortor <a href="#">tempor elit</a>. Et mollis consectetur habitant
          turpis tortor consectetur adipiscing vulputate dolor lectus iaculis
          convallis adipiscing. Nam hendrerit
          <a href="#">dignissim condimentum ullamcorper diam</a> morbi eget
          consectetur odio in sagittis.
        </p>
      </section>
      <section id="summary" class="highlight">
        <h2>まとめ</h2>
        <p>
          Et arcu tortor lorem ac primis ac suspendisse lectus nulla. Habitant
          fermentum <a href="#">leo facilisis lobortis</a> risus lobortis
          maximus gravida. Euismod fames maecenas imperdiet senectus
          <a href="#">nec nisi amet pellentesque felis</a> vitae vestibulum
          integer nec tellus. Eros posuere lacinia et tellus quis fames mattis
          quisque mauris placerat rhoncus pretium sed consectetur
          <a href="#">convallis</a>.
        </p>
      </section>
    </main>
    <footer class="highlight">
      <p>©️ 2025 誰かさん</p>
    </footer>
  </body>
</html>
```

```css live-sample___blog-start
/* 基本的な型とテキスト */

body {
  font: 1.2em / 1.5 system-ui;
  width: clamp(480px, 70%, 1000px);
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a {
  color: red;
}

a:hover {
  text-decoration: none;
}

/* ナビゲーションメニュー */

ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 10px;
}

li {
  flex: 1;
}

a {
  text-decoration: none;
  color: black;
  background-color: yellowgreen;
  text-align: center;
  padding: 10px;
}

a:hover {
  background-color: goldenrod;
}

/* 導入文と概要 */

.highlight {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
}

.highlight a {
  color: purple;
}

/* フッター */

footer {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

{{embedlivesample("blog-start", "100%", 500)}}

## プロジェクト概要

与えられた基本的なブログの例は未完成であり、既存のコードにはいくつかの問題があります。プロジェクトを完成させるには、下記の手順に従ってください。

1. このページ上のすべての要素に代替ボックスモデルを使用させます。これを実現するルールをこのスタイルシートに追加しましょう。

2. ナビゲーションメニューのルールには問題があります。スタイルの大半は問題ないのですが、他の順序なしリストやコンテンツリンクに影響を与えてしまい、見た目が悪くなっています！これらのルールのセレクターを調整して、ナビゲーションメニューのみを対象にしましょう。

3. 実は、ナビゲーションメニューには別の問題があります。`<a>` 要素が、親要素である `<li>` 要素の全幅に広がっているのが本来あるべき姿ですが、そうなっていません。表示方法を調整して、全幅に広がるようにしましょう。

4. ナビゲーションメニューのリンクと通常のコンテンツリンクの両方について、マウスユーザーがポインターをかざしたときにリンクを視覚的に識別できるよう、ホバー時に異なるスタイルを設定しています。これにより、キーボードユーザーにはこれらのスタイルが表示されないというアクセシビリティ上の課題が存在します。関連するルールのセレクターを変更し、キーボードユーザーがタブキーでリンクに移動した際にもこれらのスタイルが同時に適用されるようにしましょう。

5. 導入部、概要、フッターにはすべて `20px` のパディングを持つようにします。このスタイルシート内のどこかに単一の宣言を追加してこれを実現してください。

6. 第 2 レベルの見出しの後に現れる各段落の最初の行を選択し、太字にするルールを追加します。

7. 前問の続きとして、第 2 レベルの見出しに続く各段落の最初の行を太字にする方法は考えられますか？ただし、親要素が導入部、概要、フッターでない場合に限ります。いくつかの方法で実現可能ですが、簡潔な方法もあればそうでない方法もあります。

8. さらに下の方を見ると、`.highlight a` を使用することで導入部と概要内の `<a>` 要素を選択し、関連付けられたルール内で `purple` に色付けしていることがわかります。しかしこれは良くありません。色のコントラストがひどく悪いのです。そのルールを変更または除去することができない場合、ソース順序でそのルールより上に位置する別のルールを追加し、`<a>` 要素を `yellow` で着色できますか？ソース順序で上位に位置するため、より高い詳細度を持つ必要があります。

9. このスタイルシートの末尾にある `<footer>` 要素を選択し、テキストシャドウを適用、概要部分から移動するためのマージンを設定、目立たせるための異なる背景色を指定しようとしています。しかし、`.highlight` ルールの方が詳細度が高いため、その宣言が優先され、意図したマージンと背景色のスタイルが適用されていません。これらのスタイルが確実に適用されるよう、セレクターを変更していただけますか？

## ヒントとコツ

- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/) を使用することで、 CSS の意図しない間違い（他の方法では見逃してしまうかもしれない間違い）を発見し、修正することができます。
- HTML を変更する必要は一切ありません。

## 例

プロジェクトは最終的にこのようになります。

{{embedlivesample("blog-finish", "100%", 500)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な CSS は次のようになります。

```css-nolint live-sample___blog-finish
/* 基本的な型とテキスト */

/* 解決策：すべての要素に代替ボックスモデルを設定する */
* {
  box-sizing: border-box;
}

body {
  font: 1.2em / 1.5 system-ui;
  width: clamp(480px, 70%, 1000px);
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a {
  color: red;
}

/* 解決策：:hover スタイルを更新し、:focus にも同時に適用するようにする。これにより、キーボードユーザーがリンクにタブ移動した際、更新されたスタイルを確認することができる。 */
a:hover,
a:focus {
  text-decoration: none;
}

/* 解決策: 2 階層目の見出しの後に現れるそれぞれの段落の最初の行を太字にする。ただし、親要素が導入部、概要、フッターでない場合に限る（この条件を指定するには :not(.highlight) を使用する）。 */
section:not(.highlight) h2 + p::first-line {
  font-weight: bold;
}

/*

以上の上の解決策の代替案：まずすべてのインスタンスを太字にし、その後ハイライトクラスを持つ要素内のインスタンスから太字が除去する

section h2 + p::first-line {
  font-weight: bold;
}

.highlight h2 + p::first-line {
  font-weight: normal;
}

*/

/* ナビゲーションメニュー */

/* 解決策: <nav> メニューのみを対象とするよう、nav セレクターを調整する */

nav ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 10px;
}

nav li {
  flex: 1;
}

nav a {
  text-decoration: none;
  color: black;
  background-color: yellowgreen;
  /* 解決策: ナビゲーションの <a> 要素を display: block に設定し、親要素である <li> 要素の全幅にまたがらせる */
  display: block;
  text-align: center;
  padding: 10px;
}

/* 解決策：:hover スタイルを更新し、:focus にも同時に適用するようにする。これにより、キーボードユーザーがリンクにタブ移動した際に更新されたスタイルを確認することができる。 */
nav a:hover,
nav a:focus {
  background-color: goldenrod;
}

/* 導入文と概要 */

.highlight {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
  /* 解決策：導入部、概要、フッターの全辺に 20px のパディングを設定する。これらすべてにハイライトクラスが設定されている。 */
  padding: 20px;
}

/* 解決策: ".highlight a" ルールより以上に、より高い詳細度を持つルールを追加して色設定を上書きする（ID セレクターはクラスセレクターよりも詳細度が高い） */
#introduction a,
#summary a {
  color: yellow;
}

.highlight a {
  color: purple;
}

/* フッター */

/* 解決策: フッターのルール詳細度を高めるため ".highlight" を追加し、margin-top と background-color のスタイルが適用されるようにする */
footer.highlight {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
