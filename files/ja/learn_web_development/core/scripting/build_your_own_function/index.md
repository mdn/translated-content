---
title: 独自の関数を作る
slug: Learn_web_development/Core/Scripting/Build_your_own_function
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}

前の記事で扱った重要な理屈をたくさん使って、この記事では実践的な練習を行ないます。ここではあなたが自力で独自関数を作成するための練習を行なっていきます。同時に、関数を扱う上で役に立つ細々の説明もしていきます。

<table>
  <tbody>
    <tr>
      <th scope="row">前提知識:</th>
      <td><a href="/ja/docs/Learn_web_development/Core/Structuring_content">HTML</a>および<a href="/ja/docs/Learn_web_development/Core/Styling_basics">CSS の基礎</a>を理解し、これまでのレッスンで説明した JavaScript を把握していること。
      </td>
    </tr>
    <tr>
      <th scope="row">学習成果:</th>
      <td>
        <ul>
          <li>自分自身でカスタム関数を作成する経験。</li>
          <li>関数に引数を追加すること。</li>
          <li>自分の関数を呼び出すこと。</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## アクティブラーニング: 関数を作ってみよう

これから作るカスタム関数は `displayMessage()` と呼ばれます。この関数はウェブページにカスタムメッセージボックスを表示し、ブラウザー内蔵の [alert()](/ja/docs/Web/API/Window/alert) 関数をカスタマイズして置き換える働きをします。これは以前にも見たことがありますが、記憶を呼び起こしましょう。ブラウザーの JavaScript コンソールで、好きなページに以下を入力してください。

```js
alert("これはメッセージです");
```

`alert` 関数は引数を一つ取ります。アラートボックスに表示される文字列です。文字列を色々変えてメッセージを変化させてみて下さい。

`alert` 関数には制限があります。メッセージを変更することはできますが、色やアイコンなど、それ以外の部分を簡単には変えられません。もっと楽しくできるやつを作りましょう。

> [!NOTE]
> この例はすべての現行ブラウザーで問題なく動作するはずですが、少し古いブラウザーではスタイル設定が少しおかしく見えるかもしれません。この実習は Firefox、Opera、Chrome のような現行ブラウザーで行うことをお勧めします。

## 基本的な関数

最初に、基本的な関数を組み立てていきましょう。

> [!NOTE]
> 関数に名前を付ける方針としては、[変数の名前付けのルール](/ja/docs/Learn_web_development/Core/Scripting/Variables#変数の名前付けのルール)と同じルールに従うべきです。問題はありません、すぐに見分けがつくからです。関数ならすぐ後に括弧が付きますが、変数には付きません。

1. [function-start.html](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-start.html) ファイルにアクセスして、ローカルコピーを作成するところから始めます。HTML は単純です。 body にはボタン一つしかありません。特製メッセージボックス用の基本的な CSS スタイルと、JavaScript を追加していく用の空の {{htmlelement("script")}} 要素が含まれています。
2. 次に、`<script>` 要素の中に以下を追加して下さい。

   ```js-nolint
   function displayMessage() {
     ...
   }
   ```

   キーワード `function` で始めますが、これは関数を定義することを意味しています。これに、関数に付けたい名前、一組の括弧、一組の中括弧が続きます。関数に渡す引数は括弧の中に、関数を呼び出したときに実行するコードは中括弧の中に書きます。

3. 最後に、以下のコードを中括弧の中に追加します。

   ```js
   const body = document.body;

   const panel = document.createElement("div");
   panel.setAttribute("class", "msgBox");
   body.appendChild(panel);

   const msg = document.createElement("p");
   msg.textContent = "これはメッセージボックスです。";
   panel.appendChild(msg);

   const closeBtn = document.createElement("button");
   closeBtn.textContent = "x";
   panel.appendChild(closeBtn);

   closeBtn.addEventListener("click", () =>
     panel.parentNode.removeChild(panel),
   );
   ```

読むとかなりのコード量になるので、少しずつ説明していきます。

最初の行では {{htmlelement("body")}} 要素を [DOM API](/ja/docs/Web/API/Document_Object_Model) によって選択するために、 [`body`](/ja/docs/Web/API/Document/body) プロパティを [`document`](/ja/docs/Web/API/Document/body) オブジェクトから取得し、 `body` という定数に代入しますので、これを使っていろいろやっていきます。

```js
const body = document.body;
```

次の部分では DOM API 関数の {{domxref("document.createElement()")}} を使い、{{htmlelement("div")}} 要素を作成、これへの参照を `panel` という定数に保存しています。この要素は我々のメッセージボックスの外枠となっていきます。

次にまた別の DOM API 関数 {{domxref("Element.setAttribute()")}} を使って、パネルの `class` 属性とその値 `msgBox` を設定します。これは要素のスタイルを指定しやすくするためです。ページの CSS を見ると、メッセージボックスとその中身に適用するスタイルとして `.msgBox` クラスセレクターがあるのがわかるでしょう。

最後に、 DOM 関数である {{domxref("Node.appendChild()")}} を、先ほど格納した `body` 定数に対して呼び出します。これは、ある要素を他の要素の子として入れます。パネルの `<div>` 要素を `<body>` 要素の中に子として追加します。作成した要素は自分自身でページに現れるわけではありませんから、これを指定する必要があります。

```js
const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);
```

次の 2 つのセクションでは既に見た同じ `createElement()` と `appendChild()` 関数を使用して、2 つの新しい要素、つまり {{htmlelement("p")}} と {{htmlelement("button")}} を作成し、パネルの`<div>` の子要素としてページに挿入します。段落の中にメッセージを挿入する {{domxref("Node.textContent")}} プロパティ（要素のテキスト内容を表す）とボタンの中に 'x' を使います。このボタンは、ユーザーがメッセージボックスを閉じるときにクリック/アクティブ化する必要があります。

```js
const msg = document.createElement("p");
msg.textContent = "これはメッセージボックスです。";
panel.appendChild(msg);

const closeBtn = document.createElement("button");
closeBtn.textContent = "x";
panel.appendChild(closeBtn);
```

最後に、 {{domxref("EventTarget/addEventListener", "addEventListener()")}} を呼び出して、ユーザーが「閉じる」ボタンをクリックしたときに呼ばれる関数を追加します。このコードは、メッセージボックスを閉じるために、ページからパネル全体を削除します。

簡単に説明すると、 `addEventListener()` メソッドはボタン（または実際にはページ上の任意の要素）で使用でき、関数とイベントの名前を渡すことができます。この場合、イベントの名前は `click` なので、ユーザーがボタンをクリックしたときに関数が実行されます。イベントについては[イベントの記事](/ja/docs/Learn_web_development/Core/Scripting/Events)の記事で、もっと詳しく学びます。関数内の行では、 {{domxref("Node.removeChild()")}} DOM API を使用して HTML 要素の特定の子要素（この場合は `<div>` パネル）を削除することを指定します。

```js
closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel));
```

基本的には、このコードブロック全体が HTML のブロックを生成してページに挿入しています。

```html
<div class="msgBox">
  <p>これはメッセージボックスです</p>
  <button>x</button>
</div>
```

作業するコードがたくさんありました。現時点で、どのように動作しているか正確に覚えられなくてもあまり心配しないでください。ここでは、関数の構造と使用法を中心に説明しますが、この例では何か面白いことを示したかったのです。

## 関数の呼び出し

これで、`<script>` 要素に書かれた関数定義がうまくいきましたが、それは何もしません。

1. 関数の下に次の行を含めて呼び出してみてください。

   ```js
   displayMessage();
   ```

   この行は関数を呼び出し、すぐに実行させます。コードを保存してブラウザーを再読み込みすると、小さなメッセージボックスがすぐに 1 回だけ表示されます。それを一度呼び出すだけです。

2. ブラウザーの開発者ツールで例のページを開き、 JavaScript コンソールに移動してその行をもう一度入力すると、また表示されます。楽しいですね。いつでも呼び出せる再利用可能な関数ができました。

   しかし、おそらくユーザーやシステムのアクションに応じて表示されるようにしたいでしょう。実際のアプリケーションでは、このようなメッセージボックスは、新しいデータが利用可能になったとき、エラーが発生したとき、ユーザーが自分のプロフィールを削除しようとしたとき（「本当に実行しますか？」）、ユーザーが新しい連絡先を追加して操作が正常に完了したときなどに呼び出されるでしょう。

   このデモでは、ユーザーがボタンをクリックするとメッセージボックスが表示されます。

3. 追加した前の行を削除します。
4. 次に、ボタンを選択し、そのボタンへの参照を定数に格納します。関数定義の上のコードに次の行を追加します。

   ```js
   const btn = document.querySelector("button");
   ```

5. 最後に、前の行の下に次の行を追加します。

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   closeBtn のクリックイベントハンドラーと同じように、ここではボタンがクリックされたことに応答してコードを呼び出しています。しかし、この場合、コードを含む無名関数を呼び出すのではなく、名前を指定して `displayMessage()` 関数を呼び出しています。

6. 保存して再表示してみてください。ボタンをクリックするとメッセージボックスが表示されるはずです。

なぜ関数名の後に括弧を付けないのか不思議に思うかもしれません。これは、関数をすぐに呼び出したくないからです。ボタンがクリックされた後に呼び出すのです。この行を次のように変更してみてください。

```js
btn.addEventListener("click", displayMessage());
```

そして、保存して再読み込みすると、ボタンがクリックされなくてもメッセージボックスが表示されることがわかります！このコンテキストでの括弧は「関数呼び出し演算子」と呼ばれることもあります。括弧を使うのは、現在のスコープで関数をすぐに実行したいときだけです。同じ点で、無名関数の中のコードは、関数スコープの中にあるので、すぐに実行されるわけではありません。

最後の実験を試した場合は、最後の変更を取り消してから実行してください。

## 引数で関数を改善

このままでは、この関数はまだあまり有用ではありません。毎回同じ既定のメッセージを表示するだけでは困ります。引数を追加して関数を改良し、さまざまなオプションで呼び出せるようにしてみましょう。

1. まず、関数の最初の行を更新します。

   ```js
   function displayMessage() {
   ```

   このようにします。

   ```js
   function displayMessage(msgText, msgType) {
   ```

   これで、関数を呼び出すときに、括弧の中に 2 つの変数値を指定して、メッセージボックスに表示するメッセージと、そのメッセージの種類を指定することができます。

2. 最初の引数を使用するには、関数内の次の行を更新します。

   ```js
   msg.textContent = "これはメッセージボックスです";
   ```

   このようになります。

   ```js
   msg.textContent = msgText;
   ```

3. 最後に、更新されたメッセージテキストを入れるために、関数呼び出しを更新する必要があります。次の行を変更してください。

   ```js
   btn.addEventListener("click", displayMessage);
   ```

   次のようにします。

   ```js
   btn.addEventListener("click", () =>
     displayMessage("おお、これは違うメッセージです。"),
   );
   ```

   呼び出す関数の引数を括弧で囲んで指定する場合は、関数を直接呼び出すことはできません。無名関数の中に入れて、その関数が直接のスコープにないようにし、すぐに呼び出されないようにする必要があります。この関数はボタンがクリックされるまで呼び出されません。

4. 再読込みしてコードをもう一度試してみると、うまく動作していることがわかります。ただし、引数内のメッセージを変えると、ボックスに表示されるメッセージを変えることもできるようになりました。

### より複雑な引数

次の引数に移ります。これは少し手間がかかりますが、 `msgType` 引数に設定された内容に応じて、関数が異なるアイコンと異なる背景色を表示するように設定します。

1. まず始めに、この実習に必要なアイコン（[warning](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/warning.png) と [chat](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/icons/chat.png)）を GitHub からダウンロードしてください。 HTML ファイルと同じ場所にある `icons` という新しいフォルダーに保存してください。

   > **メモ:** [iconfinder.com](https://www.iconfinder.com/) にある warning と chat のアイコンは [Nazarrudin Ansyari](https://www.iconfinder.com/nazarr) によってデザインされたものです。ありがとう！（実際のアイコンのページは移動か削除されています。）

2. 次に、 HTML ファイル内の CSS を探します。私たちは、アイコンの道を作るためにいくつかの変更を行います。まず `.msgBox` の幅を次のように更新します。

   ```css
   width: 200px;
   ```

   このようにします。

   ```css
   width: 242px;
   ```

3. 次に、`.msgBox p { }` ルール内に次の行を追加します。

   ```css
   padding-left: 82px;
   background-position: 25px center;
   background-repeat: no-repeat;
   ```

4. これでアイコンの表示を処理するために、 `displayMessage()` 関数にコードを追加する必要があります。関数の終了中括弧 (`}`) のすぐ上に次のブロックを追加します。

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

   ここで、 `msgType` 引数に `'warning'` を設定すると、警告アイコンが表示され、パネルの背景色は赤に設定されます。また、 `'chat'` に設定すると、チャットアイコンが表示され、パネルの背景色は水色に設定されます。もし `msgType` 引数がまったく設定されていない場合（または異なる値に設定されている場合）、コードの `else { }` の部分が有効になり、段落には既定のパディングが指定され、アイコンは表示されず、パネルの背景色も設定されません。これは `msgType` 引数が指定されなかった場合の既定の状態を提供するもので、引数が省略可能であることを意味しています。

5. 更新された関数をテストしましょう。この `displayMessage()` 呼び出しを更新してください。

   ```js
   displayMessage("おお、これは違うメッセージです。");
   ```

   これらのうちのどちらかにしましょう。

   ```js
   displayMessage("受信箱がほぼ一杯です。メールを削除してください", "warning");
   displayMessage("ブライアン: やあ、元気？", "chat");
   ```

   （今はそうでもないですが）小さな機能がどれほど有益なものになりつつあるか、おわかりいただけると思います。

> [!NOTE]
> サンプルをうまく動作させることができない場合は、コードを [GitHub の完成バージョン](https://github.com/mdn/learning-area/blob/main/javascript/building-blocks/functions/function-stage-4.html)と比較して（[ライブで確認](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-stage-4.html)してください）チェックしてください。もしくは私たちにヘルプを依頼してください。

## スキルテスト

この記事の最後に達しましたが、最も大切な情報を覚えていますか？次に進む前に、この情報が身に付いたかどうかを確認するテストがあります。[スキルテスト: 関数](/ja/docs/Learn_web_development/Core/Scripting/Test_your_skills:_Functions)を見てください。このテストは次の記事でカバーしているスキルを求めていますので、テストの前にそちらを読むほうが良いかもしれません。

## まとめ

最後までしました。おめでとうございます。この記事では、実用的なカスタム関数を作り上げるための全プロセスを示しましたが、これはもう少し作業することで実際のプロジェクトに応用することができます。次の記事では、関数のもうひとつの重要な関連概念である返値について説明します。

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Functions","Learn_web_development/Core/Scripting/Return_values", "Learn_web_development/Core/Scripting")}}
