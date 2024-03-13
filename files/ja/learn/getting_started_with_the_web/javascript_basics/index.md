---
title: JavaScript の基本
slug: Learn/Getting_started_with_the_web/JavaScript_basics
l10n:
  sourceCommit: b51eff9e06b5f8c2542f151f272ada1145cef92c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}

JavaScript は、ウェブサイトに対話性を追加するプログラミング言語です。ゲーム、ボタンを押したときの反応、フォームへのデータ入力、動的なスタイル付け、アニメーションなどがこれにあたります。
この記事は、 JavaScript を使い始め、何ができるのかについての理解を深めるのに役立ちます。

## JavaScript とは何か

{{Glossary("JavaScript")}} は強力なプログラミング言語であり、ウェブサイトに対話操作を追加することができます。
Brendan Eich によって考案されました。

JavaScript は汎用性が高く、初心者にもやさしいものです。経験を積めば、ゲーム、 2D や 3D のアニメーション、包括的なデータベース駆動型のアプリなどが作れるようになります。

JavaScript は比較的コンパクトですが、一方でとても柔軟性があります。開発者は JavaScript 言語のコアをベースに多種多様なツールを作成し、最小限の労力で膨大な様々な機能を利用できるようにしました。例えば以下のようなものがあります。

- ブラウザーのアプリケーションプログラミングインターフェイス ({{Glossary("API")}})。ウェブブラウザーに組み込まれた API により、動的な HTML の作成、 CSS スタイルの設定、ユーザーのウェブカメラからの動画ストリームの収集や操作、三次元グラフィックや音声サンプルの生成などの機能を提供します。
- 開発者が他のコンテンツプロバイダーのサイト（Twitter や Facebook など）から機能を組み込むことを可能にする、サードパーティの API。
- すばやくサイトやアプリケーションを構築することができ、 HTML に組み込み可能なサードパーティのフレームワークやライブラリー。

コアの JavaScript 言語が上記のツールとどのように違うのか、その詳細を紹介することは、 JavaScript の軽い入門者向けの書籍であるこの記事の範囲外です。詳細は MDN の [JavaScript 学習領域](/ja/docs/Learn/JavaScript)や、 MDN の他の部分で詳しく学ぶことができます。

以下では、コア言語のいくつかの側面について紹介します。またブラウザーの API 機能についてもいくつか説明します。楽しみましょう！

## "Hello world!" の例

JavaScript は、最も人気のある現代のウェブ技術のひとつです。 JavaScript のスキルが上がれば、ウェブサイトのパワーと創造性は新たな次元に入るでしょう。

しかし、 JavaScript を使いこなせるようになるのは HTML や CSS よりも少し難しいです。小さなものから始め、小さく確実な手順で作業を続ける必要があるかもしれません。始めるにあたって、_"hello world!"_ を表示する例（[基本的なプログラミング例の標準](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)）を作りながら、基本的な JavaScript をページに追加する方法を紹介しましょう。

> **警告:** これまでこのコースに沿って進めてきていない場合は、[このサンプルコードをダウンロードして](https://codeload.github.com/mdn/beginner-html-site-styled/zip/refs/heads/gh-pages)作業を進めてください。

1. 最初にテストサイトに行き、 `scripts` という名前の新しいフォルダーを作成してください。それから、この scripts フォルダーの中に `main.js` という新しいファイルを作成して保存してください。
2. `index.html` ファイルの `</body>` 終了タグの直前に新しい行で、以下の新しい要素を追加してください。

   ```html
   <script src="scripts/main.js"></script>
   ```

3. これは CSS の {{htmlelement("link")}} 要素の時の作業と基本的に同じです。これは JavaScript をページに適用するので、（CSS の時と同じく、ページ上の何に対しても） HTML に影響を与えることができます。
4. `main.js` ファイルに次のコードを追加してください。

   ```js
   const myHeading = document.querySelector("h1");
   myHeading.textContent = "Hello world!";
   ```

5. 最後に、 HTML と JavaScript を書いたファイルを保存したことを確認し、ブラウザーで `index.html` を読み込んでください。

!["hello world" の見出しが firefox のロゴの上にある](hello-world.png)

> **メモ:** 上記の説明で {{htmlelement("script")}} 要素を HTML ファイルの末尾付近に置いたのは、**ブラウザーがファイルに現れる順番でコードを読み込むからです**。
>
> JavaScript が先に読み込まれ、まだ読み込まれていない HTML に影響を与えることになると、問題が生じる可能性があります。 JavaScript を HTML ページの下部に配置することは、この依存関係に対応する一つの方法です。その他の方法については、[スクリプトの読み込み方針](/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript#スクリプトの読み込み方針)をご覧ください。

### 何が起きたのか

JavaScript を使用して、見出しの文字列が _Hello world!_ に変更されました。最初に {{domxref("Document.querySelector", "querySelector()")}} と呼ばれる関数を使用して見出しの参照を取得し、 `myHeading` と呼ばれる変数に格納しています。これは CSS のセレクターを使用するのととてもよく似ています。要素に対して何かをしたくなったら、まずその要素を選択する必要があります。

その後、 `myHeading` 変数の {{domxref("Node.textContent", "textContent")}} プロパティ（見出しの内容を表す）の値を _Hello world!_ に設定します。

> **メモ:** 上の例で使用した機能はどちらも[ドキュメントオブジェクトモデル (DOM) API](/ja/docs/Web/API/Document_Object_Model) の一部であり、これを使って文書を操作することができます。

## 言語の短期集中コース

どのように動作するかをよりよく理解できるように、 JavaScript 言語の基本機能のいくつかを説明しましょう。これらの機能はすべてのプログラミング言語に共通しているので、これらの基本をマスターすれば、ほとんど何でもプログラムできるようになります！

> **警告:** この記事では、 JavaScript コンソールにサンプルコードを入力して、何が起こるのかを確認してみます。 JavaScript コンソールの詳細については、 [ブラウザー開発ツールを探る](/ja/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools)を参照してください。

### 変数

{{Glossary("Variable", "変数")}}は、値を格納できる入れ物です。まず、 [`let`](/ja/docs/Web/JavaScript/Reference/Statements/let) というキーワードと、その後に任意の名前を指定することで、変数を宣言します。

```js
let myVariable;
```

> **メモ:** 行末のセミコロンは文が終わる場所を示します。単一の行で複数の文を区切る場合には絶対に必要です。しかし、個々の文の末尾に置くことが良い習慣だと信じている人もいます。使用する場面と使用しない場合については他のルールもあります。詳しくは [Your Guide to Semicolons in JavaScript](https://www.codecademy.com/resources/blog/your-guide-to-semicolons-in-javascript/) を参照してください。

> **メモ:** 変数にはほとんど何でも名前を付けることができますが、いくらかの制約があります([変数の命名規則についてはこの記事](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#変数)を参照してください)。自信がない場合は、有効かどうか[変数名を調べる](https://mothereff.in/js-variables)ことができます。

> **メモ:** JavaScript は大文字と小文字を区別します。 `myVariable` は `myvariable` とは異なる変数です。コードで問題が発生している場合は、大文字・小文字をチェックしてください。

変数を宣言したら、以下のように値を割り当てることができます。

```js
myVariable = "Bob";
```

好みに応じて、両方の操作を同一の行で行うことができます。

```js
let myVariable = "Bob";
```

変数の値は、名前で呼び出すだけで取得することができます。

```js
myVariable;
```

変数に値を代入した後で、変更することもできます。

```js
let myVariable = "Bob";
myVariable = "Steve";
```

なお、変数は様々な[データ型](/ja/docs/Web/JavaScript/Data_structures)の値を保持することもできます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">変数</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">{{Glossary("String", "文字列")}}</th>
      <td>
        一連のテキストで、文字列と呼ばれます。値が文字列であることを示すには、単一引用符または二重引用符で囲む必要があります。
      </td>
      <td><code>let myVariable = 'Bob';</code> または <br/><code>let myVariable = "Bob";</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Number", "数値")}}</th>
      <td>数値です。数値は引用符で囲みません。</td>
      <td><code>let myVariable = 10;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Boolean", "論理型")}}</th>
      <td>
        論理値です。これは真か偽かの値です。 <code>true</code> と <code>false</code> は特別なキーワードで、引用符は必要ありません。
      </td>
      <td><code>let myVariable = true;</code></td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Array", "配列")}}</th>
      <td>
        単一の参照で複数の値を格納できる構造です。
      </td>
      <td>
        <code>let myVariable = [1,'Bob','Steve',10];</code><br />配列の各メンバーは次のように参照します。<br /><code>myVariable[0]</code>,
        <code>myVariable[1]</code>, など。
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Object", "オブジェクト")}}</th>
      <td>
         基本的には何でも格納できます。 JavaScript のすべてがオブジェクトであり、変数に格納することができます。学ぶ際にはこれを覚えておいてください。
      </td>
      <td>
        <code>let myVariable = document.querySelector('h1');</code><br />上記のすべての例も同様です。
      </td>
    </tr>
  </tbody>
</table>

ではなぜ変数が必要なのでしょうか。何か面白いプログラミングをするには変数が必要です。値が変更できなければ、挨拶のメッセージをパーソナライズしたり、画像ギャラリーに表示されている画像を変更するなどの動的な操作ができないのです。

### コメント

コメントは、ブラウザーから無視される、コードの間に入れられた短いテキストスニペットです。CSS と同じように、JavaScript のコードではコメントを付けることができます。

```js
/*
挟まれているすべてがコメントです。
*/
```

コメントに改行が含まれていない場合、次のように 2 つのスラッシュの後ろに記載する方が簡単です。

```js
// これはコメントです
```

### 演算子

{{Glossary("operator", "演算子")}}は、2 つの値 (または変数) に基づいて結果を生成する数学的な記号です。次の表では、JavaScript コンソールで試してみるいくつかの例とともに、最も単純な演算子をいくつか見ることができます。

<table class="standard-table">
  <thead>
    <tr>
      <th scope="row">演算子</th>
      <th scope="col">説明</th>
      <th scope="col">記号</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">加算</th>
      <td>2 つの数値を足し合わせたり、 2 つの文字列を結合したりします。</td>
      <td><code>+</code></td>
      <td>
        <code>6 + 9;<br />'Hello ' + 'world!';</code>
      </td>
    </tr>
    <tr>
      <th scope="row">減算、乗算、除算</th>
      <td>基本的な数学の計算を実施します。</td>
      <td><code>-</code>, <code>*</code>, <code>/</code></td>
      <td>
        <code
>9 - 3;<br />8 * 2; // JS での乗算はアスタリスク<br />9 / 3;</code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">代入</th>
      <td>すでに出てきました。変数に値を割り当てます。</td>
      <td><code>=</code></td>
      <td><code>let myVariable = 'Bob';</code></td>
    </tr>
    <tr>
      <th scope="row">厳密等価</th>
      <td>
        これは、2 つの値が等しく、かつデータ型が同じであるかどうかを調べます。
        <code>true</code>/<code>false</code> （論理値）の結果を返します。
      </td>
      <td><a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality"><code>===</code></a></td>
      <td>
        <code>let myVariable = 3;<br />myVariable === 4;</code>
      </td>
    </tr>
    <tr>
      <th scope="row">否定、非等価</th>
      <td>
        その後にあるものと論理的に反対の値を返します。たとえば <code>true</code> を <code>false</code> に換えます。等価演算子と一緒に使用されると、否定演算子は 2 つの値が等しくないかどうかを調べます。
      </td>
      <td><code>!</code>, <code>!==</code></td>
      <td>
        <p>
          「否定」の場合は次の通りです。基本の式が <code>true</code> であれば、反転するので比較結果は <code>false</code> となります。
        </p>
        <p>
          <code>let myVariable = 3;<br />!(myVariable === 3);</code>
        </p>
        <p>
          「非等価」は異なる構文ですが、基本的に同じ結果になります。ここでは「<code>myVariable</code> が 3 と等しくない」ことを調べます。次の例では <code>false</code> を返します。 <code>myVariable</code> は 3 と等しいからです。
        </p>
        <p>
          <code>let myVariable = 3;<br />myVariable !== 3;</code>
        </p>
      </td>
    </tr>
  </tbody>
</table>

他にも演算子はもっとたくさんありますが、今のところはこれで十分です。全体の一覧については、[式と演算子](/ja/docs/Web/JavaScript/Reference/Operators)を参照してください。

> **メモ:** データ型を混在させると、計算を実行するときに奇妙な結果になる可能性があるため、変数を正しく参照し、期待通りの結果を得るように注意してください。例えばコンソールに `'35' + '25'` と入力してみてください。期待通りの結果にならないのはなぜでしょうか。引用符は数字を文字列に変換するので、数字を加算するのではなく、文字列を連結する結果になったのです。 `35 + 25` を入力すれば、正しい結果が得られます。

### 条件文

条件文は、ある式が true を返すかどうかをテストし、その結果次第でそれぞれのコードを実行するコード構造です。条件文のよくある形は `if...else` 文です。例えば以下の通りです。

```js
let iceCream = "チョコレート";
if (iceCream === "チョコレート") {
  alert("やった！チョコレートアイス大好き！");
} else {
  alert("あれれ、でもチョコレートが好きなのに......");
}
```

`if ()` の中の式が条件です。ここでは等価演算子を使用して、変数 `iceCream` と`チョコレート`という文字列を比較し、2 つが等しいかどうかを調べています。この比較が `true` を返した場合、コードの最初のブロックが実行されます。比較が真でない場合、最初のブロックはスキップされ、 `else` 文の後にある 2 番目のコードブロックが代わりに実行されます。

### 関数

{{Glossary("Function", "関数")}}は、再利用したい機能をパッケージ化する方法です。プロシージャが必要なときは、毎回コード全体を書くのではなく関数名を使って関数を呼び出すことができます。すでにいくつかの関数の仕様を見てきました。例えば次のようなものです。

```js
let myVariable = document.querySelector("h1");
```

```js
alert("hello!");
```

これらの関数、 `document.querySelector` と `alert` は、必要なときにいつでも使えるようブラウザーに組み込まれています。

もし変数名に見えるものがあったとしても、その後に括弧 `()` が付いていれば、おそらくそれは関数です。関数は普通、仕事をするのに必要な小さなデータである{{Glossary("Argument", "引数")}}を取ります。引数は括弧の中に入れ、複数の引数がある場合はカンマで区切ります。

例えば、 `alert()` 関数はブラウザーのウィンドウにポップアップボックスを表示しますが、ポップアップボックスに何を書き込むかを関数に指示するために、文字列を引数として渡す必要があります。

嬉しいことに、自分で関数を定義することができます。次の例では、引数として 2 つの数値をとり、それらを乗算するという単純な関数を記載します。

```js
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
```

上記の関数をコンソールで実行し、いくつかの引数を指定してテストしてみてください。例えば次のようなものです。

```js
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);
```

> **メモ:** [`return`](/ja/docs/Web/JavaScript/Reference/Statements/return) 文は `result` の値を関数内から関数の外に戻すことをブラウザーに指示し、それを利用できるようにします。これが必要な理由は、関数内で定義された変数が、その関数内でしか利用できないためです。これは変数の{{Glossary("Scope", "スコープ")}}と呼ばれています([変数のスコープのより詳しい説明](/ja/docs/Web/JavaScript/Guide/Grammar_and_types#変数のスコープ)をお読みください)。

### イベント

ウェブサイトを本当にインタラクティブにするには、イベントが必要です。イベントは、ブラウザーの中で起きていることを検出し、その応答としてコードを実行するコード構造です。最も分かりやすい例は [click イベント](/ja/docs/Web/API/Element/click_event)で、マウスで何かをクリックするとブラウザーによって発行されるものです。これを実行するには、コンソールに以下のように入力してから、現在のウェブページ上をクリックしてください。

```js
document.querySelector("html").addEventListener("click", function () {
  alert("痛っ! つつかないで!");
});
```

要素にイベントハンドラーを取り付ける方法はいくつもあります。ここでは {{htmlelement("html")}} 要素を選択しています。そして、[`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) 関数を呼び出し、待ち受けるイベントの名前 (`'click'`) とイベントが発生したときに実行する関数を渡します。

先ほど `addEventListener()` に渡した関数は、名前を持たないので**無名関数**と呼ばれます。無名関数の書き方として、**アロー関数**と呼ばれるものがあります。アロー関数は `() =>` を `function ()` の代わりに使用します。

```js
document.querySelector("html").addEventListener("click", () => {
  alert("痛っ! つつかないで!");
});
```

## ウェブサイトの例を膨らませる

さて、 JavaScript の基本のおさらいが終わったところで、例題のサイトに新しい機能を追加してみましょう。

先に進む前に、 `main.js` ファイルの現在の内容を削除して、空のファイルを保存してください。そうしないと、 "Hello world!" の例で使用した既存のコードが、これから追加する新しいコードと衝突してしまいます。

### 画像の切り替えの追加

このセクションでは、 DOM API 機能をもっと使用して、サイトに画像を追加しましょう。画像をクリックすると JavaScript を使用して 2 つの画像を切り替えることができます。

1. まずサイトに掲載したいと思う別な画像を見つけてください。最初の画像と同じサイズか、できるだけ近いものを使用してください。
2. この画像を `images` フォルダーに保存してください。
3. この画像の名前を _firefox2.png_ に変更してください。
4. `main.js` ファイルに次の JavaScript を入力してください。

   ```js
   const myImage = document.querySelector("img");

   myImage.onclick = () => {
     const mySrc = myImage.getAttribute("src");
     if (mySrc === "images/firefox-icon.png") {
       myImage.setAttribute("src", "images/firefox2.png");
     } else {
       myImage.setAttribute("src", "images/firefox-icon.png");
     }
   };
   ```

5. `index.html` をブラウザーに読み込みます。画像をクリックすると、もう一方の画像に変わるでしょう。

何が起こったのでしょうか。{{htmlelement("img")}} 要素への参照を変数 `myImage` に格納しました。次に、この変数の `onclick` イベントハンドラープロパティに、名前のない関数（「無名」関数）を代入しました。そうすれば、この要素がクリックされるたびに次の動きをします。

1. 画像の `src` 属性の値を取得します。
2. 条件文を使って、`src` の値が元の画像のパスと等しいかどうかをチェックします。

   1. そうであれば、`src` の値を 2 番目の画像へのパスに変更し、もう一方の画像が強制的に {{htmlelement("img")}} 要素の中に読み込まれるようにします。
   2. そうでない（すでに変更されている）場合、`src` の値を元の画像のパスに戻して、元の状態に戻ります。

### パーソナライズされた挨拶メッセージの追加

次に、もう 1 つの小さなコードを追加し、ユーザーがサイトにアクセスしたときに、ページの表題をパーソナライズされた挨拶メッセージに変更してみましょう。この挨拶メッセージは、ユーザーがサイトを離れて後で戻った時にも保存されるようにします。[Web Storage API](/ja/docs/Web/API/Web_Storage_API) を使用して保存しましょう。したがって、必要な時にいつでもユーザーと挨拶メッセージを変更できるオプションも用意しましょう。

1. `index.html` では、 {{htmlelement("script")}} 要素の直前に次の行を追加します。

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
     myHeading.textContent = `Mozilla はかっこいいよ、${myName} さん、Mozilla はかっこいいよ。`;
   }
   ```

   `setUserName()` 関数では、[`prompt()`](/ja/docs/Web/API/Window/prompt) 関数を使用して、`alert()` のようにダイアログボックスを表示しています。しかし、`prompt()` は `alert()` とは異なり、ユーザーにデータを入力するよう求め、ユーザーが **OK** を押した後に変数にそのデータを格納します。この場合、ユーザーに名前を入力するよう求めます。次に、`localStorage` と呼ばれる API を呼び出すことで、ブラウザーにデータを格納して後で受け取ることができます。 localStorage の `setItem()` 関数を使って、`'name'` と呼ばれるデータを作成し、 `myName` に入っているユーザーから入力されたデータを格納します。最後に、見出しの `textContent` に文字列と新しく格納されたユーザーの名前を設定します。

4. 以下のような条件ブロックを追加します。最初に読み込んだときにアプリを構造化するので、これを初期化コードと呼ぶこともできます。

   ```js
   if (!localStorage.getItem("name")) {
     setUserName();
   } else {
     const storedName = localStorage.getItem("name");
     myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
   }
   ```

   このブロックでは、最初に `name` のデータが存在しているかどうかをチェックするために否定演算子（`!` で表される論理否定）を使用しています。存在しない場合は、作成するために `setUserName()` 関数が実行されます。存在する場合は（つまり、以前の訪問時にユーザーが設定した場合）、 `getItem()` を使用して格納された名前を受け取り、 `setUserName()` の中で行ったのと同様に、見出しの `textContent` に文字列とユーザーの名前を設定します。

5. 最後に、以下の `onclick` イベントハンドラーをボタンに設定します。クリックすると、`setUserName()` 関数が実行されます。これでユーザーがボタンを押すことで、好きな時に新しい名前を設定できるようになります。

   ```js
   myButton.onclick = () => {
     setUserName();
   };
   ```

### ユーザー名か null か

この例を実行してユーザー名を入力するダイアログボックスが出たとき、*キャンセル*ボタンを押してみてください。結果として "Mozilla is cool, null" というタイトルが表示されるでしょう。これはプロンプトをキャンセルしたときに、値が [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)、つまり値がないことを示す JavaScript の特殊な値に設定されるためです。

また何も入れずに **OK** を押してみてください。結果として "Mozilla is cool," というタイトルが表示され、これは理由が明白です。

この問題を避けるには、ユーザーが `null` や空白の名前を入力していないかチェックするよう、`setUserName()` 関数を書き換えます。

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

行き詰まったら、自分の作業を [Github 上の完成したサンプルコード](https://github.com/mdn/beginner-html-site-scripted/blob/gh-pages/scripts/main.js)と比べてみてください。

私たちは JavaScript に少し触れただけです。楽しく遊んだり、もっと上達したい場合は、[JavaScript の学習トピック](/ja/docs/Learn/JavaScript)に進んでください。

## 関連情報

- [JavaScript による動的なクライアント側スクリプト](/ja/docs/Learn/JavaScript)
  - : もっと詳細な JavaScript に飛び込みましょう。
- [Learn JavaScript](https://learnjavascript.online/)
  - : ウェブ開発者を目指す方に最適な教材です! インタラクティブな環境で、短いレッスンとインタラクティブなテスト、自動評価によるガイドで、 JavaScript を学ぶことができます。最初の 40 レッスンは無料です。全コースは少額の一括払いでご利用いただけます。

{{PreviousMenuNext("Learn/Getting_started_with_the_web/CSS_basics", "Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}
