---
title: "CycleTracker: ベースの HTML と CSS"
short-title: ベースの HTML と CSS
slug: Web/Progressive_web_apps/Tutorials/CycleTracker/HTML_and_CSS
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}

{{PWASidebar}}

プログレッシブウェブアプリケーション (PWA) を作成するには、完全に機能するウェブアプリケーションを作成する必要があります。この章では、静的なウェブページ用の HTML をマークアップし、 CSS で外観を改善します。

このプロジェクトは、生理周期トラッカー CycleTracker を作成することです。
この [PWA 入門チュートリアル](/ja/docs/Web/Progressive_web_apps/Tutorials)の最初のステップは、HTML と CSS を書くことです。ページの上部には、ユーザーが各生理の開始日と終了日を入力できるフォームがあります。下部には、前回までの生理周期のリストが掲載されています。

HTML ファイルを作成し、見出しにメタデータを含め、ユーザーが入力したデータを表示するための方法とプレースホルダーを含む静的なウェブページを作成します。次に、サイトの外観を向上させるために外部 CSS スタイルシートを追加します。

このチュートリアルを完全に理解するには、[HTML](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)、[CSS](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content)、[JavaScript](/ja/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity) の基本的な知識を保有していると役立ちます。 これらの言語に慣れていない場合は、MDN の[入門](/ja/docs/Learn_web_development/Getting_started/Your_first_website)のホームが役立つでしょう。これは、ウェブ開発の入門シリーズです。

次の節では、[ローカル開発環境](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)を設定し、この節で作成した静的コンテンツを機能的なウェブアプリケーションに変換する [JavaScript の機能](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)を追加する前に、これまでの進捗状況を確認します。 機能するアプリケーションを保有すれば、インストール可能でオフラインでも動作する PWA に徐々に拡張していくことができます。

## 静的ウェブコンテンツ

まだ作成していない外部 CSS ファイルと JavaScript ファイルのためのプレースホルダーの {{HTMLElement("link")}} 要素と {{HTMLElement("script")}} 要素を含む、当社の静的サイト HTML は以下の通りです。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Cycle Tracker</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Period tracker</h1>
    <form>
      <fieldset>
        <legend>Enter your period start and end date</legend>
        <p>
          <label for="start-date">Start date</label>
          <input type="date" id="start-date" required />
        </p>
        <p>
          <label for="end-date">End date</label>
          <input type="date" id="end-date" required />
        </p>
      </fieldset>
      <p>
        <button type="submit">Add Period</button>
      </p>
    </form>
    <section id="past-periods"></section>
    <script src="app.js" defer></script>
  </body>
</html>
```

このHTMLをコピーして、`index.html`というファイル名で保存してください。

## HTML コンテンツ

`index.html` の HTML が良くわかっていたとしても、[一時的なハードコードされたデータ](#一時的なハードコードによる結果テキスト)を追加したり、 [`style.css`](#css_コンテンツ) 外部スタイルシートに CSS を追加したり、このウェブページの機能を担う[アプリケーションの JavaScript](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality) である `app.js` を作成する前に、この節を一読することをお勧めします。

この HTML の最初の行は {{glossary("Doctype", "doctype")}} プリアンブルであり、これはコンテンツが正しく動作することを保証します。

```html
<!doctype html>
```

ルート {{HTMLelement("html")}} タグは、ページの第一言語を定義する [`lang`](/ja/docs/Web/HTML/Reference/Global_attributes/lang) 属性とともに、すべてのコンテンツを囲みます。

```html
<!doctype html>
<html lang="en-US">
  <!-- <head> と <body> がここに来ます -->
</html>
```

### 文書の head

{{HTMLelement("head")}} コンテナー内には、ウェブアプリケーションに関する読み取り可能な情報が含まれていますが、ブラウザーのタブの見出しとして表示される `<title>` を除いて、読者には表示されません。

`<head>` には、すべての[メタデータ](/ja/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)が記載されています。 `<head>` の最初の 2 つの情報として、[文字エンコード方式](/ja/docs/Glossary/Character_encoding)を定義する文字セット定義と、ビューポートの幅でページがレンダリングされるように確保し、とても小さな画面へ読み込まれた際に縮小されないようにする [viewport](/ja/docs/conflicting/Web/HTML/Reference/Elements/meta/name/viewport) {{HTMLelement("meta")}} タグを、常に記載する必要があります。

```html
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
</head>
```

ページのタイトルを "Cycle Tracker" に設定するために、 {{HTMLelement("title")}} 要素を使用しました。 `<head>` のコンテンツはページ内に表示されませんが、 `<title>` のコンテンツは表示されます。ページが読み込まれた際のブラウザーのタブに表示されるテキスト、検索エンジン結果に表示されるテキスト、ユーザーがウェブページをブックマークした際に使用される既定のタイトルは、 `<title>` 要素のインナータイトルです。また、タイトルは、現在どのタブにいるのかを知るためにこれに依存しているスクリーンリーダーユーザーに対して、アクセシブルな名前を提供します。

タイトルは「月経周期トラッキングアプリケーション」でも良いのですが、より控えめな短縮名にしました。

```html
<title>Cycle Tracker</title>
```

公式にはオプションですが、より良い使い勝手を実現するために、これら 2 つの `<meta>` タグと `<title>` は、 HTML 文書内の必須部分としてみなすべき `<head>` の 3 つの部分です。

これで、 `<head>` に記載する最後の部分は、まだ書く予定のないこのスタイルシート `style.css` を HTML にリンクする {{HTMLelement("link")}} 要素となります。

```html
<link rel="stylesheet" href="style.css" />
```

HTML の `<link>` 要素は、現在の文書と外部リソースの関係を指定するために使用されます。 [`rel`](/ja/docs/Web/HTML/Reference/Attributes/rel) 属性には、 25 以上の定義済みの値があり、仕様にはない値も数多くあります。最も一般的な値である `rel="stylesheet"` は、外部リソースをスタイルシートとしてインポートします。

`<link>` 要素と `rel` 属性については、[マニフェストファイルへのリンク](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file#adding_the_manifest_to_the_app)を加える時にのちの節で説明します。

### 文書本体

{{HTMLelement("body")}} 要素には、ユーザーがインターネット上のサイトを訪問した際に表示したいコンテンツがすべて含まれています。

`<body>` 内に、レベル 1 の見出しとして、 [`<h1>`](/ja/docs/Web/HTML/Reference/Elements/Heading_Elements) と {{HTMLelement("form")}} を使用してアプリの名前を記載しています。

```html
<body>
  <h1>Period tracker</h1>
  <form></form>
</body>
```

フォームには、指示、フォームコントロール、各フォームコントロール用のラベル、および送信ボタンが含まれます。フォームコントロールに関しては、ユーザーに、提出する各月経周期の開始日と終了日の両方を入力してもらう必要があります。

`<form>` 内に、この {{HTMLelement("fieldset")}} 要素を記載し、その {{HTMLelement("legend")}} ラベル付けをすることで、フォームフィールドの設定する目的を明確にします。

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
  </fieldset>
</form>
```

日付選択ツールは、 {{HTMLElement("input")}} 要素の {{HTMLElement("input/date", "date")}} 型です。 [`required`](/ja/docs/Web/HTML/Reference/Attributes/required) 属性が付いており、ユーザーが誤って不完全なフォームを送信してしまうことを防ぎ、ユーザーによるエラーを削減します。

`<label>` をあるフォームコントロールに関連付けるには、各 `<input>` に [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を設定し、関連付けられた {{HTMLelement("label")}} の `for` 属性と一致させます。関連付けられたラベルは、各 `<input>` に{{glossary("Accessible name", "アクセシブル名")}}を提供します。

```html
<label for="start-date">Start date</label>
<input type="date" id="start-date" required />
```

`<fieldset>` 内に、 2 つの段落（{{HTMLelement("p")}} 要素）が含まれます。それぞれに、現在入力中の月経周期の開始日と終了日を指定するための日付選択機能と、その日付選択機能に関連付けられた {{HTMLelement("label")}} が含まれます。また、フォームを送信する {{HTMLelement("button")}} 要素も記載します。開始タグと閉じられたタグの間にテキストを挿入することで、このラベルを "Add period" （生理の追加）とします。 `type="submit"` はオプションです。 `submit` は `<button>` の既定の型です。

```html
<form>
  <fieldset>
    <legend>Enter your period start and end date</legend>
    <p>
      <label for="start-date">Start date</label>
      <input type="date" id="start-date" required />
    </p>
    <p>
      <label for="end-date">End date</label>
      <input type="date" id="end-date" required />
    </p>
  </fieldset>
  <p>
    <button type="submit">Add Period</button>
  </p>
</form>
```

[アクセシブルなウェブフォームの作成費ついてもっと学ぶ](/ja/docs/Learn_web_development/Extensions/Forms)ことをお勧めします。

### 一時的なハードコードによる結果テキスト

次に、空の {{HTMLElement("section")}} が含まれています。 このコンテナーは、JavaScript で内容が埋められます。

```html
<section id="past-periods"></section>
```

ユーザーがフォームを送信すると、JavaScript を使用してデータを取得し、セクションのヘッダーとともに過去の期間のリストを表示します。

当面は、ページの CSS を書きながらスタイルを適用できる形にするために、いくつかのコンテンツを一時的にこの `<section>` 内にハードコードします。これには、`<h2>` ヘッダーといくつかの過去の期間が含まれます。

```html
<section id="past-periods">
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
</section>
```

このコンテンツは、コンテナー `<section id="past-periods"></section>` を除いて、一時的なものです。 [CSS をコーディングし終え](#css_コンテンツ)、アプリの外観に満足した時点で、この一時的なデータを削除するか、コメントアウトします。

### JavaScript のリンク

`</body>` が閉じられる前に、まだ作成されていない JavaScript の `app.js` ファイルへのリンクを挿入します。 [`defer`](/ja/docs/Web/HTML/Reference/Elements/script#defer) 属性を挿入することで、このスクリプトの読み込みを遅延させ、この JavaScript が文書の HTML が解析された後に実行されることを保証するようにします。

```html
<script src="app.js" defer></script>
```

`app.js` ファイルには、アプリケーションのすべての動作が含まれます。これには、 `<button>` のイベントハンドラー、送信したデータをローカルストレージに保存する処理、および本体のコンテンツ内の周期表示などが含まれます。

これで、[この段階の HTML ファイル](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/index.html)は完成しました。この時点でブラウザーでファイルを開くことができますが、かなり簡素であることがお分かりいただけるでしょう。次の章では、それを修正します。

## CSS コンテンツ

これで、 CSS を使用して静的な HTML にスタイル設定することができます。最終的な CSS は次のとおりです。

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

すべての行が分かっているのであれば、上記の CSS をコピーするか、自分自身で CSS を書いて [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) として保存し、静的な HTML と CSS を完了させることができます。上記の CSS の中になじみのないものであれば、説明を読み進めてください。

![薄い緑色のウェブページに大きなヘッダー、説明付きの方法、2つの日付選択ツール、ボタンがあります。下部には、2周期分の偽の月経データとヘッダーが表示されています。](html.jpg)

### CSS の解説

{{CSSXref("background-color")}} プロパティを使用して、 `body` の背景色を薄い緑色 (`#efe`) に設定します。次に、順序なしリスト、フィールドセット、凡例では、白色 (`#fff`) の背景色を使用し、 {{CSSXref("border")}} プロパティで追加した細い実線の境界線と組み合わせています。凡例の `background-color` を上書きし、凡例とリストアイテムを濃い緑色 (`#cfc`) にします。

[`:nth-of-type(even)`](/ja/docs/Web/CSS/Reference/Selectors/:nth-of-type) 擬似クラス[セレクター](/ja/docs/Web/CSS/Guides/Selectors)を使用して、偶数番号のリストアイテムすべてに、その親の背景色を{{CSSXref("inherit", "継承")}}させるように設定します。この場合、 `#fff` の背景色を順序なしリストから継承します。

```css
body {
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
li,
legend {
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

順序なしリストとリストアイテムをリストのように見せないように、 `ul` に {{CSSXref("padding", "padding: 0")}} を設定してパディングを除去し、リストアイテム自体に {{CSSXref("list-style-type", "list-style-type: none")}} を設定してリストマーカーを除去します。

```css
ul {
  padding: 0;
}
li {
  list-style-type: none;
}
```

`body` の {{CSSXref("margin")}} を、 `vw` と `vh` の[ビューポート単位](/ja/docs/Web/CSS/Reference/Values/length#ビューポートに基づく相対的な長さの単位)を使用して設定することで、少しの余白を追加し、アプリの外側の余白がビューポートのサイズに比例するようにしています。また、 `li` と `legend` にも少しの空白を追加しています。最後に、修正はできても修正されたわけではない過去のデータの配置を改善するために、 `ul` の結果セクションのフォントファミリーを `monospace` フォントに設定し、各グリフが同じ固定された幅を持つようにしています。

```css
body {
  margin: 1vh 1vw;
}
ul {
  font-family: monospace;
}
li,
legend {
  padding: 0.2em 0.5em;
}
```

以上を結合し、各セレクター宣言ブロックに複数のプロパティを指定することも可能です。 `li` と `legend` のスタイルも一緒に用意することができます。 `legend` に対する `list-style-type` 宣言のような無関係なスタイルは無視されます。

```css
body {
  margin: 1vh 1vw;
  background-color: #efe;
}
ul,
fieldset,
legend {
  border: 1px solid;
  background-color: #fff;
}
ul {
  padding: 0;
  font-family: monospace;
}
li,
legend {
  list-style-type: none;
  padding: 0.2em 0.5em;
  background-color: #cfc;
}
li:nth-of-type(even) {
  background-color: inherit;
}
```

上記 CSS がまだよくわからない場合は、 [CSS プロパティ](/ja/docs/Glossary/Property/CSS)と[セレクター](/ja/docs/Web/CSS/Guides/Selectors)を見ていくか、 [CSS スタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)モジュールを読み終えている場合は、そちらを参照してください。

上記をそのまま使用する場合も、上記を編集して環境設定を行う場合も、あるいは自分自身でゼロから CSS を記述する場合も、すべての CSS を新しいファイルに記載し、 [`style.css`](https://github.com/mdn/pwa-examples/blob/main/cycletracker/html_and_css/style.css) として `index.html` ファイルと同じディレクトリーに保存してください。

### PWA 用の静的 HTML と CSS は完了

次に移る前に、偽の過去期間データとヘッダーを[コメント](/ja/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax#html_comments)アウトするか削除してください。

```html
<section id="past-periods">
  <!--
  <h2>Past periods</h2>
  <ul>
    <li>From 01/01/2024 to 01/06/2024</li>
    <li>From 01/29/2024 to 02/04/2024</li>
  </ul>
  -->
</section>
```

## 次は

この静的コンテンツをウェブアプリに変換する [JavaScript の機能](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/JavaScript_functionality)と、[マニフェストファイル](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Manifest_file)と[サービスワーカー](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Service_workers)でプログレッシブウェブアプリに拡張する機能を追加する前に、進捗状況を確認するための[ローカル開発環境を作成](/ja/docs/Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection)します。

それまでは、[静的な CycleTracker シェル](https://mdn.github.io/pwa-examples/cycletracker/html_and_css/)を表示し、 GitHub から [CycleTracker の HTML と CSS のソースコード](https://github.com/mdn/pwa-examples/tree/main/cycletracker/html_and_css)をダウンロードすることができます。

{{PreviousMenuNext("Web/Progressive_web_apps/Tutorials/CycleTracker", "Web/Progressive_web_apps/Tutorials/CycleTracker/Secure_connection", "Web/Progressive_web_apps/Tutorials/CycleTracker")}}
