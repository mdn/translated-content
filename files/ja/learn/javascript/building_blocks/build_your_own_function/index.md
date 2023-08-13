---
title: 独自の関数を作る
slug: Learn/JavaScript/Building_blocks/Build_your_own_function
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}

前の記事で扱った重要な理屈をたくさん使って、この記事では実践的な練習を行ないます。ここではあなたが自力で独自関数を作成するための練習を行なっていきます。同時に、関数を扱う上で役に立つ細々の説明もしていきます。

| 前提知識: | 基本的なコンピューターの知識、HTML と CSS への理解、[JavaScript の第一歩](/ja/docs/Learn/JavaScript/First_steps)、[関数 — 再利用可能なコードブロック](/ja/docs/Learn/JavaScript/Building_blocks/Functions)。 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 目的:     | 独自の関数を作成する練習、役に立つ関連事項についてつっこんだ説明。                                                                                                                                           |

## Active learning: 関数を作ってみよう

これから作ってみる独自の関数を `displayMessage()`。これは独自のメッセージボックスをウェブページ上に表示し、ブラウザー組込みの [alert()](/ja/docs/Web/API/Window/alert) 関数の特製の代替品として動作します。既に見たものですが、忘れた事にしましょう。以下をブラウザーの JavaScript コンソールから打ち込みます、どのページでも構いません:

```js
alert("This is a message");
```

`alert` 関数は引数を一つ取ります — アラートボックスに表示される文字列です。文字列を色々変えてメッセージを変化させてみて下さい。

`alert` 関数には制限があります: メッセージを変更することはできますが、色やアイコンなど、それ以外の部分を簡単には変えられません。もっと楽しくできるやつを作りましょう。

> **メモ:** この例題は全てのモダンブラウザー上で問題なく動くはずですが、古いブラウザーではちょっとおかしな見た目になるかもしれません。この課題は Firefox、Opera、Chrome のようなモダンなブラウザー上で行なうのが推奨です。

## 基本的な関数

最初に、基本的な関数を組み立てていきましょう。

> **メモ:** 関数に名前を付ける方針としては、[変数名に名前をつける方針](/ja/docs/Learn/JavaScript/First_steps/Variables#An_aside_on_variable_naming_rules)と同じルールに従うべきです。問題はありません、すぐに見分けがつくからです — 関数ならすぐ後に括弧が付きますが、変数には付きません。

1. [function-start.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-start.html) ファイルにアクセスして、ローカルコピーを作成するところから初めます。HTML は単純です — body にはボタン一つしかありません。特製メッセージボックス用の基本的な CSS スタイルと、JavaScript を追加していく用の空の {{htmlelement("script")}} 要素が含まれています。
2. 次に、`<script>` 要素の中に以下を追加して下さい:

   ```js
   function displayMessage() {}
   ```

   キーワード `function` から始めますが、これは関数を定義するという意味です。この後には、関数につけたい名前、カッ括弧の組、中括弧の組と続きます。関数に渡したい引数は括弧の中に、関数を呼び出したときに走らせたいコードは中括弧の中に書きます。

3. 最後に、以下のコードを中括弧の中に追加します:

   ```js
   const html = document.querySelector("html");

   const panel = document.createElement("div");
   panel.setAttribute("class", "msgBox");
   html.appendChild(panel);

   const msg = document.createElement("p");
   msg.textContent = "This is a message box";
   panel.appendChild(msg);

   const closeBtn = document.createElement("button");
   closeBtn.textContent = "x";
   panel.appendChild(closeBtn);

   closeBtn.onclick = function () {
     panel.parentNode.removeChild(panel);
   };
   ```

これは見ていくにはそこそこの量のコードですから、一つ一ついっしょに進んでいく事にしましょう。

最初の行では {{domxref("document.querySelector()")}} と呼ばれる DOM API 関数を使って {{htmlelement("html")}} 要素を選択し、`html` という名前の定数に要素への参照を保存したので、これを使っていろいろやっていきます:

```js
const html = document.querySelector("html");
```

次の部分では別の DOM API 関数 {{domxref("document.createElement()")}} を使い、{{htmlelement("div")}} 要素を作成、これへの参照を `panel` という定数に保存しています。この要素は我々のメッセージボックスの外枠となっていきます。

次にまた別の DOM API 関数 {{domxref("Element.setAttribute()")}} を使って、我々のパネルの `class` 属性とその値 `msgBox` を設定します。これは要素のスタイルを指定しやすくするためです — ページの CSS を見ると、メッセージボックスとその中身に適用するスタイルとして `.msgBox` クラスセレクターがあるのがわかるでしょう。

最後に、前に保存した html 変数の DOM 関数 {{domxref("Node.appendChild()")}} を呼んでいますが、この関数は一つの要素を別の要素の子として組み入れる働きをします。panel という`<div>` 要素を子として、`<html>` 要素の中に追加したいのです。作成した要素は作成したページにぽんと現われたりはしません — どこに置くのかも指定しなければなりません。なのでこのようにする必要があります。

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
html.appendChild(panel);
```

次の 2 つのセクションでは既に見た同じ `createElement()` と `appendChild()` 関数を使用して、2 つの新しい要素、つまり {{htmlelement("p")}} と {{htmlelement("button")}} を作成し、`<div>` パネルの子要素としてページに挿入します。段落の中にメッセージを挿入する {{domxref("Node.textContent")}} プロパティ (要素のテキスト内容を表す) とボタンの中に 'x' を使います。このボタンは、ユーザーがメッセージボックスを閉じるときにクリック/アクティブ化する必要があります。

```js
const msg = document.createElement("p");
msg.textContent = "This is a message box";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

最後に、{{domxref("GlobalEventHandlers.onclick")}} イベントハンドラーを使用して、ボタンをクリックするとパネル全体をパネルから削除してメッセージボックスを閉じるようにします。

簡単に説明すると、`onclick` ハンドラーはボタン (または実際にはページ上の任意の要素) で使用できるプロパティで、ボタンをクリックしたときに実行するコードを指定する関数に設定できます。後の[イベントの記事](/ja/docs/Learn/JavaScript/Building_blocks/Events)で、これらについてさらに詳しく学びます。`onclick` ハンドラーは、ボタンがクリックされたときに実行されるコードを含む無名関数と等しくなります。関数内の行は {{domxref("Node.removeChild()")}} DOM API 関数を使用して、HTML 要素の特定の子要素 (この場合は `<div>` パネル) を削除することを指定します。

```js
closeBtn.onclick = function () {
  panel.parentNode.removeChild(panel);
};
```

基本的には、このコードブロック全体が HTML のブロックを生成してページに挿入しています。

```html
<div class="msgBox">
  <p>This is a message box</p>
  <button>x</button>
</div>
```

作業するコードがたくさんありました。今のところどのように動作しているか正確に覚えていないことをあまり心配しないでください！ ここでは、関数の構造と使用法を中心に説明しますが、この例では何か面白いことを示したかったのです。

## 関数の呼び出し

これで、`<script>` 要素に書かれた関数定義がうまくいきましたが、それは何もしません。

1. 関数の下に次の行を含めて呼び出してみてください:

   ```js
   displayMessage();
   ```

   この行は関数を呼び出し、すぐに実行させます。コードを保存してブラウザーを再読み込みすると、小さなメッセージボックスがすぐに 1 回だけ表示されます。それを一度呼ぶだけです。

2. サンプルページでブラウザーの開発者ツールを開き、JavaScript コンソールに移動してもう一度その行を入力すると、もう一度表示されます。これは楽しいことです - 私たちは今好きな時に呼び出すことができる再利用可能な関数を持っています。

   しかし、ユーザーとシステムのアクションに応じて表示されるようにすることをお勧めします。実際のアプリケーションでは、このようなメッセージボックスは、新しいデータが利用可能であること、エラーが発生したこと、ユーザーがプロファイルを削除しようとしている (「これは本当ですか？」)、またはユーザーが 新しい連絡先や操作が正常に終了しました...などが起こったときに呼び出されるでしょう。

   このデモでは、ユーザーがボタンをクリックするとメッセージボックスが表示されます。

3. 追加した前の行を削除します。
4. 次に、ボタンを選択し、そのボタンへの参照を定数に格納します。関数定義の上のコードに次の行を追加します:

   ```js
   const btn = document.querySelector("button");
   ```

5. 最後に、前の行の下に次の行を追加します:

   ```js
   btn.onclick = displayMessage;
   ```

   関数内の `closeBtn.onclick...` 行と同様に、ここではボタンがクリックされたことに応答してコードを呼び出します。しかしこの場合、コードを含む無名関数を呼び出す代わりに、関数名を直接呼び出しています。

6. ページを保存して再表示してみてください。ボタンをクリックするとメッセージボックスが表示されるはずです。

関数名の後ろに括弧が含まれていないのはなぜでしょうか。これは、ボタンがクリックされた後にのみ、関数をすぐに呼びたくないからです。行を次の行に変更しようとすると

```js
btn.onclick = displayMessage();
```

保存して再読み込みすると、ボタンをクリックせずにメッセージボックスが表示されます。このコンテキストの括弧は「関数呼び出し演算子」と呼ばれることがあります。現在のスコープですぐに関数を実行する場合にのみ使用します。同様の点で、匿名関数内のコードは関数スコープ内にあるため、すぐには実行されません。

最後の実験を試した場合は、最後の変更を取り消してから実行してください。

## パラメーターを使用して関数を改善する

その機能はそれほど便利ではありません — 毎回同じ既定のメッセージを表示したくはないのです。いくつかのパラメーターを追加して機能を改善し、いくつかの異なるオプションで呼び出すことができるようにしましょう。

1. まず、関数の最初の行を更新します。

   ```js
   function displayMessage() {
   ```

   このようになります:

   ```js
   function displayMessage(msgText, msgType) {
   ```

   関数を呼び出すと、括弧内に 2 つの変数値を指定して、メッセージボックスに表示するメッセージとそのメッセージのタイプを指定できます。

2. 最初のパラメーターを使用するには、関数内の次の行を更新します:

   ```js
   msg.textContent = "This is a message box";
   ```

   このようになります

   ```js
   msg.textContent = msgText;
   ```

3. 最後に関数呼び出しを更新して、更新されたメッセージテキストを追加する必要があります。次の行を変更します。

   ```js
   btn.onclick = displayMessage;
   ```

   このブロックのようになります:

   ```js
   btn.onclick = function () {
     displayMessage("Woo, this is a different message!");
   };
   ```

   私たちが呼び出している関数の括弧内にパラメーターを指定したい場合、直接呼び出すことはできません - 直接のスコープにないため、すぐに呼び出されないように無名関数の中に入れる必要があります。ボタンがクリックされるまで呼び出されません。

4. 再読み込みしてコードをもう一度試してみてください。それでもパラメーター内のメッセージを変えてボックスに表示されるメッセージを変えることができます。

### より複雑なパラメーター

次のパラメーターに移りましょう。これにはもう少し作業が必要です。`msgType` パラメーターの設定によって、別のアイコンと異なる背景色が表示されるように設定していきます。

1. まず始めに、この演習に必要なアイコン ([warning](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/icons/warning.png) と [chat](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/icons/chat.png)) を GitHub からダウンロードしてください。HTML ファイルと同じ場所にある `icons` という新しいフォルダーに保存します

   > **メモ:** [iconfinder.com](https://www.iconfinder.com/) にある warning と chat のアイコンは [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) によってデザインされたものです。ありがとう！ (実際のアイコンのページは移動か削除されています。)

2. 次に、HTML ファイル内の CSS を探します。私たちは、アイコンの道を作るためにいくつかの変更を行います。まず `.msgBox` の幅を次のように更新します

   ```css
   width: 200px;
   ```

   このようにします

   ```css
   width: 242px;
   ```

3. 次に、`.msgBox p { ... }` ルール内に次の行を追加します

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. これでアイコンの表示を処理するために、`displayMessage()` 関数にコードを追加する必要があります。関数の終了中括弧 (`}`) のすぐ上に次のブロックを追加します。

   ```js
   if (msgType === "warning") {
     msg.style.backgroundImage = "url(icons/warning.png)";
     panel.style.backgroundColor = "red";
   } else if (msgType === "chat") {
     msg.style.backgroundImage = "url(icons/chat.png)";
     panel.style.backgroundColor = "aqua";
   } else {
     msg.style.paddingLeft = "20px";
   }
   ```

   ここで、`msgType` パラメーターが `'warning'` に設定されている場合、警告アイコンが表示され、パネルの背景色は赤に設定されます。`'chat'`に設定されている場合、チャットアイコンが表示され、パネルの背景色が青色に設定されます。`msgType` パラメーターがまったく設定されていない (または別のものに変更されている) 場合、コードの `else { ... }` 部分が有効になり、段落には単にデフォルトのパディングが与えられ、背景パネルの色もしくはアイコンのどちらかが未設定の状態となります。これは `msgType` パラメーターが指定されていない場合、省略可能なパラメーターであることを意味するデフォルトの状態を提供します。

5. 更新された関数をテストしましょう。この `displayMessage()` 呼び出しを更新して：

   ```js
   displayMessage("Woo, this is a different message!");
   ```

   これらのうちの 1 つにしましょう。

   ```js
   displayMessage("Your inbox is almost full — delete some mails", "warning");
   displayMessage("Brian: Hi there, how are you today?", "chat");
   ```

   私たちの (今はそうではない) 小さな機能がどのように役立つかがわかります。

> **メモ:** サンプルをうまく動作させることができない場合は、コードを [GitHub の完成バージョン](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html)と比較して ([see it running live](http://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html) もみて) チェックしてください。もしくは私たちにヘルプを依頼してください。

## スキルをテストしよう!

この記事の最後まで到達しましたが、最も大事な情報を覚えていますか？移動する前に、この情報を維持しているか検証するテストを見ることができます— [Test your skills: Functions](/ja/docs/Learn/JavaScript/Building_blocks/Test_your_skills:_Functions). を見てください。このテストは次の記事でカバーするスキルが必要ですので、試す前にこれを読んでおくとよいでしょう。

## まとめ

最後までたどり着きました。おめでとうございます！この記事では、実用的なカスタム関数を構築するプロセス全体を紹介しました。もう少し動けば、実際のプロジェクトに移植することができます。次の記事では、別の重要な関連概念である戻り値を説明して関数をまとめます。

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Functions","Learn/JavaScript/Building_blocks/Return_values", "Learn/JavaScript/Building_blocks")}}
