---
title: "JavaScript: 操作性の追加"
short-title: 操作性の追加
slug: Learn_web_development/Getting_started/Your_first_website/Adding_interactivity
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}

JavaScript は、ウェブサイトに対話性を追加するプログラミング言語です。これを使用して、フォームデータの検証、ボタンの機能、ゲームロジック、動的なスタイル設定、アニメーションの更新など、何らかのものを制御することができます。この記事では、JavaScriptの基礎を学び、初めてのウェブサイトに楽しい機能を追加する過程を順を追って解説します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        コンピューターのオペレーティングシステム、ウェブサイトを構築する際に使用する基本ソフトウェア、およびファイルシステムに概ね慣れておくこと。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>JavaScript の機能と目的。</li>
          <li>JavaScript の基本的な機能（変数、演算子、条件分岐、関数、イベントなど）を理解すること。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## JavaScript とは何か

{{Glossary(「JavaScript」)}}は本格的なプログラミング言語であり、**変数**、**ループ**、**関数**など、他のプログラミング言語で見かける（あるいは少なくとも耳にしたことがある）ような、プログラミングの定番機能をすべて含んでいます。

JavaScript は、ウェブページで使用される場合（それ以外にも使用できますが）、一般的に次のように動作します。

- 数値などの 1 つ以上の値、またはページ上の要素への参照を取得します。
- それらの値を使って何かを行います。例えば、それらの数値を足し合わせるなどです。
- 後で別の処理に使用できる結果を返します。例えば、それらの数値の合計をページ上に表示させたい場合などです。

例を見てみましょう。ここ数回の記事で取り上げたのと同じ基本的なリストを使用します：

```html live-sample___basic-js
<p>生きるための方法:</p>

<ul>
  <li>食う</li>
  <li>寝る</li>
  <li>繰り返す</li>
</ul>
```

CSS の `.done` というクラスも定義します。このクラスが適用された要素は、テキスト色が緑色になり、取り消し線が入るなど、完了したタスクのように表示されます。次の段階では、JavaScript でこのクラスを `<li>` 要素に適用します。

```css live-sample___basic-js
.done {
  color: darkseagreen;
  text-decoration: line-through solid black 2px;
}
```

それでは、JavaScript に移りましょう。ここではまず、`<li>` 要素への参照を `listItems` という変数に格納します。次に、`toggleDone()` という関数を定義します。この関数は、リストアイテムに `done` クラスがまだ付与されていない場合はそれを追加し、すでに付与されている場合はそのクラスを削除します。最後に、リストアイテムをループ処理し（`forEach()` を使用）、それぞれのリストアイテムにイベントリスナーを追加します（`addEventListener()` を使用）。これにより、リストアイテムがクリックされた際に `done` クラスの状態が切り替わり、先に定義した CSS が適用されるようになります。

```js live-sample___basic-js
const listItems = document.querySelectorAll("li");

function toggleDone(e) {
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
```

今のところ、上記の JavaScript が理解できなくても心配しないでください。JavaScript に慣れるのは、HTML や CSS に慣れるよりも難しいですが、このコースの進捗に応じて徐々に理解できるようになります。
この例は、ブラウザーで次のように表示されます。

{{EmbedLiveSample("basic-js", "100%", "140px")}}

リストアイテムをいくつかクリックしてみて、その結果、"done" のスタイルがオンとオフに切り替わる様子を確認してみてください。たった 11 行の JavaScript にしては、悪くないですね。

## "Hello world!" の手順を追って説明

JavaScript で記述を始めるにあたって、サンプルウェブサイトに _Hello world!_ の例を追加する手順を順を追って追ってみましょう。（[_Hello world!_](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program) は、プログラミング入門の標準例です。）

> [!WARNING]
> これまでこのコースに沿って進めてきていない場合は、[このサンプルコードをダウンロードして](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/main)作業を進めてください。

1. `first-website` フォルダー内、または先ほどダウンロードしたサンプルのフォルダー内に、`scripts` という名前付きの新しいフォルダーを作成してください。
2. それから、この `scripts` フォルダーの中に `main.js` という新しいファイルを作成して保存してください。
3. `index.html` ファイルの `</head>` 終了タグの直前に新しい行で、以下の新しい要素を追加してください。

   ```html
   <script async src="scripts/main.js"></script>
   ```

   これは CSS の {{htmlelement("link")}} 要素の時の作業と基本的に同じです。これは JavaScript をページに適用するので、（CSS の時と同じく、ページ上の何に対しても） HTML に影響を与えることができます。

4. `scripts/main.js` ファイルに次のコードを追加してください。

   ```js
   // <h1> への参照を変数に格納
   const myHeading = document.querySelector("h1");
   // <h1> のコンテンツテキストを更新
   myHeading.textContent = "Hello world!";
   ```

5. 最後に、 HTML と JavaScript を書いたファイルを保存したことを確認し、ブラウザーで `index.html` を読み込んでください。

!["hello world" の見出しが firefox のロゴの上にある](hello-world.png)

この例がどのように機能するのか、詳しく見ていきましょう。

JavaScript を使用して、見出しのテキストを `Hello world!` に変更しました。見出しへの参照を取得し、それを `myHeading` という変数（値を格納するコンテナー）に格納しました。これは、要素に CSS を適用する方法と似ています。まず CSS セレクターを使って対象の要素を選択し、次にそれらの要素に適用したいスタイルを定義します。どちらの場合も、要素に対して何か操作を行うには、まずその要素を選択する必要があります。

その後、 `myHeading` 変数の `textContent` プロパティ（`<h1>` 要素のテキストコンテンツを表す）の値を _Hello world!_ に設定します。

`//` で始まる行は JavaScript のコメントです。HTML や CSS のコメントと同様に、ブラウザーはこれらを無視します。これにより、コードの動作を説明するためのメモを追加することができます。

それでは、次のステップに進んで、サンプルサイトにいくつかの新しい機能を追加していきましょう。

> [!WARNING]
> 先に進む前に、`main.js` ファイルから "Hello world!" のコードを削除してください。そうしないと、既存のコードとこれから追加する新しいコードが競合してしまいます。

### 画像の切り替えの追加

この節で、JavaScript と [DOM API](/ja/docs/Web/API/HTML_DOM_API) の機能を使用し、2 つの画像の表示を切り替えます。この切り替えは、ユーザーが表示されている画像をクリックしたときに現れます。

1. まずサイトに掲載したいと思う別な画像を見つけてください。できれば、画像は前回追加したものと同じサイズ、あるいはできるだけそれに近いサイズにしてください。
2. この画像を `images` フォルダーに保存してください。
3. 以下の JavaScript コードを `main.js` ファイルに追加してください。その際、`firefox2.png` と `firefox-icon.png` が 2 回登場しますが、それぞれ 2 つ目と 1 つ目の画像名に置き換えるよう注意してください。

   ```js
   const myImage = document.querySelector("img");

   myImage.addEventListener("click", () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   });
   ```

4. `index.html` をブラウザーに読み込みます。画像をクリックすると、もう一方の画像に変わるでしょう。

このコードでは、{{htmlelement("img")}} 要素への参照を `myImage` 変数に格納しました。その後、その変数に `click` イベントハンドラー関数を代入しました。`<img>` がクリックされるたびに、この関数は以下の処理を実行します。

- 画像の `src` 属性の値を取得します。
- 条件文（`if...else` 構文）を使用して、`src` の値が元画像のパスと一致するかどうかを調べます。
   - そうであれば、`src` の値を 2 番目の画像へのパスに変更し、もう一方の画像が強制的に `<img>` 要素の中に読み込まれるようにします。
   - そうでない場合（つまり、画像がすでに変更されている場合）、`src` の値は元画像パスに戻ります。

> [!NOTE]
> この節では、いくつかの重要な用語を紹介します。主な概念は以下の通りです。
>
> - [API](/ja/docs/Glossary/API): 開発者がプログラミング環境と対話することを可能にする一連の機能です。Web API（上記で使用した DOM API などの機能）は、JavaScript 言語を基盤として構築されており、ブラウザーやブラウザーが表示させるウェブページのさまざまな部分を操作することができるのです。
> - [イベント](/ja/docs/Learn_web_development/Core/Scripting/Events): ブラウザー内で発生する事象です。これらは、ウェブサイトに対話性を持たせる上で重要な役割を果たします。**イベントハンドラー関数**を使用することで、イベントに応じてコードを実行できます。イベントハンドラー関数とは、イベントが発生した際に実行されるコードブロックのことです。最も一般的な例は[クリックイベント](/ja/docs/Web/API/Element/click_event)で、ユーザーが何かをクリックした際にブラウザーによって発生します。
> - [関数](/ja/docs/Learn_web_development/Core/Scripting/Functions): 再利用したいコードをまとめる方法です。関数内にコードを一度定義しておけば、それを何度でも実行できるため、同じコードを何度も書き直す手間を避けることができます。この例では、ユーザーが画像をクリックするたびに実行される `click` イベントハンドラー関数を定義しました。
> - [条件文](/ja/docs/Learn_web_development/Core/Scripting/Conditionals): 式が `true` または `false` を返すかどうかを検査し、それぞれの結果に応じて異なるコードを実行するために使用される構文です。条件分岐の非常に一般的な形式として、`if...else` 文があります。

## パーソナライズされた挨拶メッセージの追加

次に、ユーザーがまずサイトにアクセスした際に、パーソナライズされた挨拶メッセージを表示させるよう、ページの見出しを変更しましょう。この挨拶メッセージは、[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) を使用してブラウザーに保存されるため、ユーザーが一度サイトを離れても、後で戻ってきた際には、パーソナライズされたデータがそのままあります。また、ユーザーがメッセージを変更できる機能も実装します。

1. `index.html` では、`</body>` 閉じタグの直前に次の行を追加します。

   ```html
   <button>ユーザーを変更</button>
   ```

2. `main.js` では、次のコードを下記のとおりにファイルの最後に配置します。これは新しいボタンと見出しへの参照を変数に格納します。

   ```js
   let myButton = document.querySelector("button");
   let myHeading = document.querySelector("h1");
   ```

3. パーソナライズされた挨拶を設定する以下の関数を追加しましょう。まだ何も起こりませんが、すぐに修正します。

   ```js
   function setUserName() {
     const myName = prompt("あなたの名前を入力してください。");
     localStorage.setItem("name", myName);
     myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
   }
   ```

   `setUserName()` 関数には [`prompt()`](/ja/docs/Web/API/Window/prompt) 関数が含まれており、これはユーザーにデータの入力を依頼し、_OK_ をクリックした後にその値を変数に格納します。この例では、ユーザーに名前を入力してもらい、それを `myName` に格納しています。<br /><br />

   次に、このコードでは[ウェブストレージ API](/ja/docs/Web/API/Web_Storage_API) を使用しています。これにより、ブラウザにデータを格納し、後でそれを取得することができるようになります。{{domxref("Storage.setItem", "localStorage.setItem()")}} 関数を使用して、`"name"` というデータ項目を生成し、その値をユーザーが入力した内容を含む `myName` 変数に設定します。<br /><br />

   最後に、見出しの `textContent` に文字列と新しく格納されたユーザーの名前を設定します。

4. 関数の宣言の後に、以下の条件付きブロックを追加してください。これが初期化コードです。ページがまず読み込まれたときに実行され、プログラムが始まります。

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
   }
   ```

   このブロックの 1 行目では、否定演算子（`!` 文字で表される論理 NOT）を使用して、`name` データ項目が `localStorage` にまだ格納されていないかを確認しています。格納されていない場合、`setUserName()` 関数が実行され、そのデータ項目が生成されます。もし存在する場合（つまり、ユーザーが前回の訪問時にユーザー名を設定していた場合）、{{domxref("Storage.getItem", "localStorage.getItem()")}} を使用して保存された名前を取得し、見出しの `textContent` に文字列とユーザー名を組み合わせたものを設定します。これは、`setUserName()` 内で行った処理と同様に行います。

5. ボタンに `click` イベントハンドラー関数を追加します。クリックされると、`setUserName()` が実行されます。これにより、ユーザーは必要に応じて別の名前を格納することができるようになります。

   ```js
   myButton.addEventListener("click", () => {
     setUserName();
   });
   ```

6. すべてのファイルを保存し、ブラウザーで `index.html` を読み込んでください。すぐに名前の入力が要求されるはずです。入力すると、その名前が `<h1>` 内に、個人設定された挨拶の一部として現れます。ページを再読み込みしても、この個人設定が維持されることに注目してください。「ユーザーを変更」ボタンをクリックすると、新しい名前を入力できます。

> [!NOTE]
> [演算子](/ja/docs/Learn_web_development/Core/Scripting/Math)という用語は、1 つまたは複数の値に対して操作を行う JavaScript 言語の記号を参照します。例えば、`+`（値を加算する）、`-`（ある値から別の値を差し引く）、`!`（値を反転させる — 先ほど見た通り）などがあります。

### ユーザー名か null か

この例を実行してユーザー名を入力するダイアログボックスが出たとき、*キャンセル*ボタンを押してみてください。結果として "null さん、Mozilla はかっこいいよ。" というタイトルが表示されるでしょう。これはプロンプトをキャンセルしたときに、値が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null) に設定されるためです。JavaScriptでは、_null_ は値が存在しないことを表す特殊な値です。

また、名前を入力せずに _OK_ を押してみてください。結果として " さん、Mozilla はかっこいいよ。" というタイトルが表示されます。これは `myName` を空文字列の設定したからです。

これらの問題を避けるために、ユーザーが名前を空白で入力していないことを調べる条件分岐を追加します。`setUserName()` 関数を次のように更新してください。

```js
function setUserName() {
  const myName = prompt("あなたの名前を入力してください。");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `${myName} さん、Mozilla はかっこいいよ。`;
  }
}
```

人間の言葉で言うと、 `myName` に値がない場合や、`null`の場合、 最初から `setUserName()` を実行します。値がない場合（上記の式が真でない場合）には、`localStorage` に値を設定して、見出しのテキストにも設定します。

## まとめ

最後までこの記事の手順に従った場合は、最終的に次のようなページが表示されているでしょう（[こちらで作成した版を表示する](https://mdn.github.io/beginner-html-site-scripted/)こともできます）。

![ヘッダー、中央の大きなロゴ、内容、ボタンなどの要素を作成した後の HTML ページの最終的な外観](website-screen-scripted.png)

行き詰まったら、自分の作業を [GitHub 上の完成したサンプルコード](https://github.com/mdn/beginner-html-site-scripted/blob/main/scripts/main.js)と比べてみてください。

この記事では、JavaScript に少し触れただけです。このコースの後半で学ぶコアモジュール [JavaScript による動的スクリプティング](/ja/docs/Learn_web_development/Core/Scripting)」は、さらに多くのことを学べるでしょう。

## 関連情報

- [Scrimba: Learn JavaScript](https://scrimba.com/learn-javascript-c0v?via=mdn) <sup>[_MDN 学習パートナー_](/ja/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : [Scrimba](https://scrimba.com?via=mdn) の _Learn JavaScript_ コースでは、140 以上の対話的なコーディング課題に取り組み、ゲームやブラウザー拡張機能、さらにはモバイルアプリなどのプロジェクトを構築しながら、JavaScript を学べます。Scrimba では、知識豊富な講師陣による楽しい対話的なレッスンが提供されています。
- [Learn JavaScript](https://learnjavascript.online/)
  - : ウェブ開発者を目指す方に最適な教材です! 対話的な環境で、短いレッスンと対話的なテスト、自動評価によるガイドで、 JavaScript を学ぶことができます。最初の 40 レッスンは無料です。全コースは少額の一括払いでご利用いただけます。

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Styling_the_content", "Learn_web_development/Getting_started/Your_first_website/Publishing_your_website", "Learn_web_development/Getting_started/Your_first_website")}}
