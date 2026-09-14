---
title: "課題: ホーム色検索アプリのスタイル設定"
short-title: "課題: ホーム色検索のスタイル設定"
slug: Learn_web_development/Core/Styling_basics/Home_color_scheme_search
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

[スタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)モジュールの最後の課題では、「ホームカラー検索アプリ」の UI モックアップを取り上げます。このアプリのコンセプトは、ユーザーが色を入力すると、その色のバリエーションや、色使いのアイディア例が範囲で一覧表示されるというものです。皆さんの課題は、指定されたフォーム、表、ボタンの各コントロールにスタイルを設定し、画像が期待通りに表示されるようにすることです。

> [!NOTE]
> この課題で使用している色調を調整した画像は、Flickr で利用できるオリジナル画像 [Chic Living Room](https://flickr.com/photos/145464578@N08/28362250492/) を基に作成したものです。この画像は、[Houseology Interiors](https://flickr.com/photos/145464578@N08/) によって [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/deed.en) のライセンスの下で公開されています。

## 出発点

始めるには、以下のコードパネルのいずれかにある **Play** ボタンをクリックし、MDN Playground で指定されたサンプルを開いてください。その後、[プロジェクト概要](#プロジェクト概要)の手順に従ってページを適切にスタイル設定してください。

```html live-sample___app-start live-sample___app-finish
<section>
  <h1>ホーム色検索</h1>
  <form>
    <div>
      <label for="color">検索する色:</label>
      <input type="text" id="color" name="color" value="pink" />
    </div>
    <div>
      <label for="results-per-page">ページ毎の結果数:</label>
      <input
        type="text"
        id="results-per-page"
        name="results-per-page"
        value="4" />
    </div>
    <div>
      <button type="button">送信</button>
    </div>
  </form>
</section>
<hr />
<section>
  <h2>検索結果</h2>
  <table>
    <caption>
      サンプル色と配色
    </caption>
    <thead>
      <tr>
        <th scope="col">色</th>
        <th scope="col">原色</th>
        <th scope="col">タグ</th>
        <th scope="col">配色の例</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Pink</td>
        <td><code>rgb(255 192 203)</code></td>
        <td>pink, pale, light</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-pink.png"
            alt="Image of living room in a pink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Baker-Miller pink</td>
        <td><code>rgb(255 145 175)</code></td>
        <td>pink, pale, bright</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-baker-miller-pink.png"
            alt="Image of living room in a Baker-Miller pink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Hotpink</td>
        <td><code>rgb(255 105 180)</code></td>
        <td>pink, bright, vivid</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-hotpink.png"
            alt="Image of living room in a hotpink color scheme" />
        </td>
      </tr>
      <tr>
        <td>Fuchsia</td>
        <td><code>rgb(255 0 255)</code></td>
        <td>pink, medium, bright</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-fuchsia.png"
            alt="Image of living room in a fuchsia color scheme" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="controls">
    <button disabled>前のページ</button>
    <p>1 / 20 ページを表示</p>
    <button>次のページ</button>
  </div>
</section>
```

```css live-sample___app-start
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  margin: 0 10px;
}

hr {
  margin: 3em 0;
}

h2 {
  margin-top: 0;
}

/* 前/後 コントロールのレイアウト */

.controls {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

/* フォームとボタンのスタイル設定 */

form div {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}

label {
  text-align: right;
  flex: 1;
}

input {
  flex: 3;
}

/* 表のスタイル設定 */

table img {
  width: 100%;
  height: 150px;
}
```

{{embedlivesample("app-start", "100%", 650)}}

## プロジェクト概要

下記の手順に従ってプロジェクトを完了し、コンテンツペインのサイズを適切に調整し、必要な装飾を追加してください。

### フォームのリセットを追加

まず、`<button>` および `<input>` 要素に「リセット」スタイルを追加し、ブラウザー間で統一された初期状態にするようにします。

具体的には、次のようにします。

1. このページの別なところで設定されたフォントファミリーを継承するようにします。
2. フォントサイズを `100%` とします。
3. パディングとマージンをすべて削除します。

### フォーム入力のスタイル設定

`<input>` 要素を次のように設定してください。

1. `2px` の実線の境界線を `#999999` の色で。
2. `10px` のパディング。
3. `5px` の丸い角。

### ボタンのスタイル設定

`<button>` 要素を次のように設定してください。

1. 境界線をなくす。
2. 背景色を `black` に、テキスト色を `white` にする。
3. `5px` の丸い角。
4. 垂直パディングが `10px` で、水平パディングが `2em`。
5. ホバー時やフォーカス時の背景色を `#666666` にする。
6. 無効時の背景色を `#aaaaaa` にする。

### 表のスタイル設定

このモジュールの前半で学んだ最善の手法に基づいたスタイル設定を表に追加し、さらにいくつか追加要素を加えてください。

具体的には、次のようにします。

1. 表に固定レイアウトを設定し、幅を`100%`にし、境界線を折りたたむ。
2. 表の上下の境界線の太さを `1px`、スタイルを実線、色を `#999999` に設定する。
3. 表の見出しセルと通常のセルに `0.6em` のパディングを設定し、それぞれのコンテンツをセルの上端に配置する。
4. 表の見出しセルに、`1px` の太さ、実線、`#999999` の色で下境界線を設定する。
5. 表のすべての行に `20%` の高さを設定する。ただし、4 行目の幅は `40%` にする。
6. 表の本体には、4 つの行があります。各行の 2 つ目にあるセルには、`rgb()` 関数で指定された色のテキストが含まれています。これらのそれぞれのセルに、そのテキストに対応する背景色を設定してください。
7. 縞模様を作成します。表の本体において、それぞれの奇数行の背景色を `#eeeeee` に設定します。
8. キャプションのパディングを `1em`、フォントスタイルをイタリック、文字間隔を `1px` に設定してください。

### 画像の表示を固定

現時点では、表内の画像に問題があります。表の行が高くなりすぎないようにするため、それぞれの画像の幅をテーブルセルの幅の `100%` に、高さを `150px` に設定しました。しかし、この設定により画像のアスペクト比が崩れてしまい、少し押しつぶされたように見えてしまいます。

以下の点に留意して、画像のスタイル設定をしましょう。

1. これらは内在的なアスペクト比で表示されるようにし、画像の一部を切り取ることで、`<img>` 要素のサイズ内に収まるようにします。
2. 画像の下部は示されていますが、上部が切り取られています。

## ヒントとコツ

- HTML を変更する必要は一切ありません。

## 例

プロジェクトは最終的にこのようになります。

{{EmbedLiveSample("app-finish", "100%", 700)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

最終的な CSS は次のようになります。

```css live-sample___app-finish
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  margin: 0 10px;
}

hr {
  margin: 3em 0;
}

h2 {
  margin-top: 0;
}

/* 前/後 コントロールのレイアウト */

.controls {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

/* フォームとボタンのスタイル設定 */

form div {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}

label {
  text-align: right;
  flex: 1;
}

/* 解答例: フォームのリセットを追加 */

button,
input {
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
}

input {
  flex: 3;
  /* 解答例: フォーム入力のスタイル設定 */
  border: 2px solid #999999;
  padding: 10px;
  border-radius: 5px;
}

/* 解答例: ボタンのスタイル設定 */

button {
  background-color: black;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px 2em;
}

button:hover,
button:focus {
  background-color: #666666;
}

button:disabled {
  background-color: #aaaaaa;
}

/* 表のスタイル設定 */

table img {
  width: 100%;
  height: 150px;
  /* 解答例: 画像表示を固定化 */
  object-fit: cover;
  object-position: bottom;
}

/* 解答例: 表のスタイル設定 */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

th {
  border-bottom: 1px solid #999999;
}

tr {
  width: 20%;
}

tr :nth-of-type(4) {
  width: 40%;
}

/* 解答例: 「原色」のセルに色を指定 */

tr:nth-of-type(1) td:nth-of-type(2) {
  background-color: pink;
}

tr:nth-of-type(2) td:nth-of-type(2) {
  background-color: rgb(255 145 175);
}

tr:nth-of-type(3) td:nth-of-type(2) {
  background-color: hotpink;
}

tr:nth-of-type(4) td:nth-of-type(2) {
  background-color: magenta;
}

tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}

caption {
  padding: 1em;
  font-style: italic;
  letter-spacing: 1px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
