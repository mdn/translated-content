---
title: 文書の操作
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
l10n:
  sourceCommit: 05d8b0eb3591009b6b7fee274bb7ed1bc5638f18
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

ウェブページやアプリケーションを書くとき、最もよく行うことのひとつが、何らかの方法で文書内の構造を操作することでしょう。これは通常、ドキュメントオブジェクトモデル (DOM) を使用することで行われます。これは HTML とスタイル情報を制御するための API のセットで、 {{domxref("Document")}} オブジェクトを多用します。この記事では、DOM を使用する方法を詳しく見ていきます。また、他にも興味深い方法であなたの環境を変化させることができる API もいくつか紹介します。

<table>
  <tbody>
    <tr>
      <th scope="row">前提条件:</th>
      <td>
        基本的なコンピューターリテラシー、HTML、CSS、JavaScriptの基本的な理解（JavaScript オブジェクトを含む）があること。
      </td>
    </tr>
    <tr>
      <th scope="row">目標:</th>
      <td>
        DOM のコアとなる API、および DOM と文書操作によく関連する他の API に慣れること。
      </td>
    </tr>
  </tbody>
</table>

## ウェブブラウザーの重要なパーツ

ウェブブラウザーはとてもたくさんの動いている部品からなるソフトウェアの複雑な集合体で、部品の多くはウェブ開発者が JavaScript を使用して制御や操作をすることはできません。こんな制約はよろしくないと思う方もいるかもしれませんが、ブラウザーが保護されているのには十分な理由があって、これは主にセキュリティ関係のためです。もしあるウェブサイトが保存しているパスワードやその他の秘密情報にアクセスできて、あなたのふりをして他のサイトにログインできたとしたらどう思いますか。

制限はありますが、ウェブ API は多くの機能へのアクセスを提供し、ウェブページで非常に多くのことを行うことを可能にしてくれます。コードで定期的に参照する実に明白な部分がいくつかあります。以下の図は、ウェブページの表示に直接関係するブラウザーの主要な部分を表しています。

![ウェブブラウザーの重要な部分。文書 (document) は、ウェブページのことです。ウィンドウは文書内の全体と、タブを含みます。 Navigator はブラウザーで、このウィンドウ（この文書を含んでいるもの）と他のすべてのウィンドウを記載します。](document-window-navigator.png)

- ウィンドウはウェブページが読み込まれる部分の回りのブラウザーの枠です。これは JavaScript では {{domxref("Window")}} オブジェクトで表わされます。このオブジェクトに備わるメソッドを使って、ウィンドウの大きさを調べたり（{{domxref("Window.innerWidth")}} と {{domxref("Window.innerHeight")}} を参照）、ウィンドウに読み込まれる文書を操作したり、その文書に関係するデータをクライアント側で保存したり（例えばローカルデータベースや他のデータ保存機構）、現在のウィンドウに対して[イベントハンドラー](/ja/docs/Learn/JavaScript/Building_blocks/Events#s_series_of_fortunate_events)を追加したりすることができます。
- ナビゲーターは、ブラウザーの状態やウェブで使われているようなブラウザーの身元（つまりユーザーエージェント）を表わします。JavaScript では {{domxref("Navigator")}} オブジェクトで表わされます。このオブジェクトを使用して、ユーザーの好む言語や、ユーザーのウェブカメラからのメディアストリームなどを取得することができます。
- 文書化（ブラウザーでは DOM で表される）は、ウィンドウに読み込まれた実際のページであり、JavaScript では {{domxref("Document")}} オブジェクトで表されます。このオブジェクトを使用して、文書を構成する HTML と CSS に関する情報を返したり操作したりすることができます。例えば、DOM 内の要素への参照を取得し、そのテキストコンテンツを変更し、新しいスタイルを適用し、新しい要素を作成して現在の要素に子として追加したり、あるいは完全に削除したりすることができます。

この記事では、主に文書内の操作に焦点を当てますが、それ以外にもいくつか有用な点を紹介します。

## ドキュメントオブジェクトモデル

ブラウザーのそれぞれのタブに現在読み込まれている文書は、ドキュメントオブジェクトモデルによって表されています。これは、ブラウザーが作成した「ツリー構造」の表現で、プログラミング言語から HTML の構造に簡単にアクセスできるようになっています。例えば、ブラウザー自身はこれを使用して、ページを表示するときに正しい要素にスタイルやその他の情報を適用し、開発者はページが表示された後に JavaScript で DOM を操作することができます。

[dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) にちょっとした例を作成しました（[ライブ実行](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)もどうぞ）。ブラウザーから開いてみてください。これはとても簡素なページで、{{htmlelement("section")}} 要素の中に画像が一つと、一つのリンクを含む一つの段落があります。HTML のソースはこんな感じです。

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Simple DOM example</title>
  </head>
  <body>
    <section>
      <img
        src="dinosaur.png"
        alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth." />
      <p>
        Here we will add a link to the
        <a href="https://www.mozilla.org/">Mozilla homepage</a>
      </p>
    </section>
  </body>
</html>
```

一方、 DOM はこのようになります。

![ドキュメントオブジェクトモデルをツリー構造で表現したもの。トップノードは doctype と HTML 要素です。 HTML の子ノードには、 head と body が記載されます。それぞれの子要素が分岐となる。テキストは、空白も含めてすべて表示されます。](dom-screenshot.png)

> **メモ:** この DOM ツリーの図は Ian Hickson の [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) を使って作成しました。

ツリーのそれぞれの項目は、ノードと呼ばれます。上の図では、ノードには要素（`HTML`、`HEAD`、`META` などと識別される）を表すものや 、テキスト（`#text` と識別される）を表すものがあることが分かります。[他の種類のノード](/ja/docs/Web/API/Node/nodeType)もありますが、よく見かけるものはこれらのものです。

また、ノードは、ツリーの中で他のノードからの相対的な位置によって参照されます。

- **ルートノード (Root node)**: ツリーの最上位ノードで、HTML の場合は常に `HTML` ノードです（SVG や独自の XML など他のマークアップ語彙では、別の最上位要素があります）。
- **子ノード (Child node)**: 他のノード内の*直下*にあるノードです。上の例では、例えば `IMG` は `SECTION` の子ノードとなります。
- **子孫ノード (Descendant node)**: 他のノード内の*どこか*にあるノードです。上の例では、例えば `IMG` は `SECTION` の子ノードであり、子孫ノードでもあります。`IMG` は `BODY` の 2 段階内側にあるので `BODY` の子ノードではありませんが、`BODY` の子孫ノードではあります。
- **親ノード (Parent node)**: その中に他のノードを持つノードです。例えば上の例では `BODY` は `SECTION` ノードの親ノードになります。
- **兄弟ノード (Sibling node)**: DOM ツリーの同じ階層にあるノードです。上の例では `IMG` と `P` は兄弟ノードになります。

これからコードを見ていくとこういう語が頻出するので、 DOM を使い始める前に、これらの用語をしっかり覚えておくと良いでしょう。CSS の勉強をしているときも、これらの語をみかけることでしょう(子孫セレクター、子セレクターとか)。

## アクティブラーニング: 基本的な DOM 操作

DOM 操作の学習を始めるにあたり、まずは実践的な例から始めましょう。

1. [dom-example.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example.html) と [image](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dinosaur.png) のローカルコピーを一緒に作成して下さい。
2. `<script></script>` 要素を、閉じ `</body>` タグのすぐ上に追加して下さい。
3. DOM の中の要素を操作するため、まず DOM を選びだしてこれへの参照を変数に保存する必要があります。script 要素の中に、次の行を追加して下さい。

   ```js
   const link = document.querySelector("a");
   ```

4. 要素への参照を変数に保存したので、これが備えているプロパティとメソッドを使って DOM の操作を始められます (利用できるプロパティとメソッドは、たとえば {{htmlelement("a")}} 要素であれば {{domxref("HTMLAnchorElement")}} インターフェース、さらにその汎化した親のインターフェース {{domxref("HTMLElement")}} や {{domxref("Node")}} — これは DOM の全てノードが相当します — で定義されています)。まずは、リンクの中のテキストを、{{domxref("Node.textContent")}} プロパティを更新する事で変更してみましょう。上で書いた行の下に、次の行を追加して下さい。

   ```js
   link.textContent = "Mozilla Developer Network";
   ```

5. クリックされたときに間違った場所に行かないよう、リンクが指す先の URL も変えておくべきでしょう。また下に、以下の行を追加して下さい。

   ```js
   link.href = "https://developer.mozilla.org";
   ```

JavaScript でよくあることですが、要素を選択し、その参照を変数に格納する方法はたくさんあることに注意してください。{{domxref("Document.querySelector()")}} は、現代の手法として推奨されています。CSS のセレクターを使用して要素を選択することができるので便利です。上記の `querySelector()` 呼び出しは、文書内に最初に現れる {{htmlelement("a")}} 要素を選択します。もし、複数の要素を選択して何かをしたいのであれば、 {{domxref("Document.querySelectorAll()")}} を使用することができます。これはセレクターに一致する文書内のすべての要素を選択し、それらへの参照を[配列](/ja/docs/Learn/JavaScript/First_steps/Arrays)風のオブジェクトである {{domxref("NodeList")}} に格納します。

要素への参照を得るためには、次のような古いやり方もあります。

- {{domxref("Document.getElementById()")}} は、指定された `id` 属性値を持つ要素を選択します。例えば `<p id="myId">My paragraph</p>` の場合、この関数に引数として ID を渡します。すなわち、 `const elementRef = document.getElementById('myId')` とします。
- {{domxref("Document.getElementsByTagName()")}} は、指定した種類の全ての要素を配列風のオブジェクトに入れて返します、例えばすべての `<p>`、すべての `<a>` などです。要素の型をこの関数に引数として渡します。すなわち、 `const elementRefArray = document.getElementsByTagName('p')` のようにします。

この 2 つは、 `querySelector()` のような現代のメソッドよりも古いブラウザーでうまく動作しますが、それほど便利なものではありません。他にどんなものがあるか、探してみてください。

### 新しいノードの作成と配置

以上、何ができるかを少しばかり紹介しましたが、さらに進んで、新しい要素を作成する方法を見てみましょう。

1. 現在のの例題に戻って、 {{htmlelement("section")}} 要素を掴むところから始めましょう。すでに書いてあるスクリプトの下に次のコードを追加して下さい（この先の他の行についても、同じようにしてください）。

   ```js
   const sect = document.querySelector("section");
   ```

2. {{domxref("Document.createElement()")}} を使って新しい段落を作成し、先ほどと同じようにテキストコンテンツを与えてみましょう。

   ```js
   const para = document.createElement("p");
   para.textContent = "We hope you enjoyed the ride.";
   ```

3. この新しい段落は、セクションの最後に {{domxref("Node.appendChild()")}} を使って追加することができます。

   ```js
   sect.appendChild(para);
   ```

4. 最後に、この部分のために、リンクがある段落にテキストノードを追加して、文章をきれいにまとめましょう。まず、 {{domxref("Document.createTextNode()")}}を使って、テキストノードを作成します。

   ```js
   const text = document.createTextNode(
     " — the premier source for web development knowledge.",
   );
   ```

5. ここで、リンクが含まれている段落への参照を取得し、そこにテキストノードを追加します。

   ```js
   const linkPara = document.querySelector("p");
   linkPara.appendChild(text);
   ```

DOMにノードを追加するために必要なものは、これでほとんど揃いました。動的なインターフェイスを構築する際には、これらのメソッドを多く使用することになるでしょう（後でいくつかの例を見てみましょう）。

### 要素の移動や削除

ノードを移動させたり、 DOM から完全に削除したい場合があります。これは完全に可能です。

リンクが含まれる段落を節の一番下に移動させたい場合は、このようにします。

```js
sect.appendChild(linkPara);
```

これは段落をセクションの一番下に移動させます。2つ目のコピーができると思ったかもしれませんが、そうではありません。 `linkPara` は、その段落の唯一のコピーを参照するものなのです。もしコピーを作成してそれも追加したい場合は、代わりに {{domxref("Node.cloneNode()")}} を使用する必要があります。

ノードの削除も、少なくとも削除するノードとその親への参照がある場合は、とても簡単です。今回の例では、以下のように {{domxref("Node.removeChild()")}} を使用するだけです。

```js
sect.removeChild(linkPara);
```

よくあることですが、自分自身を参照しているノードだけを削除したい場合は、 {{domxref("Element.remove()")}} を使用することができます。

```js
linkPara.remove();
```

このメソッドは、古いブラウザーでは対応していません。これらのブラウザーには、ノードに自分自身を削除するように指示するメソッドがないため、以下のようにする必要があります。

```js
linkPara.parentNode.removeChild(linkPara);
```

上の行をコードに追加してやってみて下さい。

### スタイルの操作

いろんなやり方で CSS スタイルを JavaScript から操作することができます。

まず始めに、 {{domxref("Document.stylesheets")}} を使用すると、文書に添付されているすべてのスタイルシートのリストを取得することができます。これは {{domxref("CSSStyleSheet")}} オブジェクトが入った配列風のオブジェクトを返すので、このオブジェクトを使用すると、スタイルシートの追加や削除ができます。これで、好きなようにスタイルを追加したり削除したりすることができます。しかし、これらの機能はやや古風で、スタイルを操作するのが難しい方法であるため、ここでは紹介しないことにします。もっと簡単な方法があります。

最初の方法は、動的にスタイルを設定したい要素に直接インラインスタイルを追加することです。これは {{domxref("HTMLElement.style")}} プロパティで行われ、文書内の各要素に対するインラインスタイル情報を含んでいます。このオブジェクトのプロパティを設定することで、要素のスタイルを直接更新することができます。

1. 例として、作成中の例題に以下の行を追加してみて下さい。

   ```js
   para.style.color = "white";
   para.style.backgroundColor = "black";
   para.style.padding = "10px";
   para.style.width = "250px";
   para.style.textAlign = "center";
   ```

2. ページを再読み込みすると、スタイルがその段落に適用されていることがわかります。その段落をブラウザーの[ページインスペクター/DOM インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)で見てみると、これらの行が確かに文書内のスタイルを追加していることがわかります。

   ```html
   <p
     style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">
     We hope you enjoyed the ride.
   </p>
   ```

> **メモ:** JavaScript のプロパティ版では、 CSS スタイルが小文字のキャメルケースで書かれているのに対し、 CSS 版はハイフン区切りで書かれていることに注意してください（例: `backgroundColor` と `background-color`）。これらを混合しないように注意してください。さもなければ、これは動作しません。

ドキュメントのスタイルを動的にいじる際によく使われる別のやり方をこれから見ていきましょう。

1. さっき JavaScript に追加した 5 行を削除します。
2. HTML の {{htmlelement("head")}} の中に、以下を追加します。

   ```html
   <style>
     .highlight {
       color: white;
       background-color: black;
       padding: 10px;
       width: 250px;
       text-align: center;
     }
   </style>
   ```

3. 次に、一般的な HTML 操作に有用なメソッドである {{domxref("Element.setAttribute()")}} を紹介します。これは 2 つの引数、要素に設定したい属性、および設定する値を使用します。この例では、段落に highlight というクラス名を設定します。

   ```js
   para.setAttribute("class", "highlight");
   ```

4. ページを更新すると、何も変化がないことがわかります。CSS は引き続き段落に適用されていますが、今回はインライン CSS スタイルではなく、CSS ルールによって選択されたクラスが与えられています。

どちらの方法を選ぶかは、あなた次第です。どちらも長所と短所があります。最初の方法は設定が少なくて済み、単純な使用に適しています。一方、2番目の方法はより純粋主義的です（CSS と JavaScript を混合しない、悪しき習慣とされるインラインスタイルも使用しない）。より大規模で複雑なアプリを作り始めると、おそらく2つ目の方法をより多く使用するようになるでしょうが、それは実にあなた次第です。

この点で、我々は実際に有用なことは何もしていません! 静的コンテンツを作成するためにJavaScript を使用する意味はありません。JavaScript を使用せず、HTML に記述したほうがよいでしょう。HTMLよりも複雑ですし、JavaScriptでコンテンツを作成することには他にも付随する問題があります（検索エンジンに読み取られないなど）。

次の節では、 DOM API をより有用に使用する方法を見ていきます。

> **メモ:** 私たちの [dom-example.html の完成版](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/dom-example-manipulated.html) のデモが GitHub にあります（[ライブ実行版も](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html)）。

## アクティブラーニング: 動的な買い物リスト

この課題では、フォームの入力とボタンを使用して、リストに動的に項目を追加することができる簡単なショッピングリストの例を作りたいと思います。入力に項目を追加してボタンを押すと、次のようになります。

- その項目がリストに現れます。
- それぞれの項目には、押すとその項目をリストから削除するためのボタンを設定します。
- 入力欄は空になり、次の項目を入力できるようになります。

完成版のデモはこんな感じになるでしょう。

![このデモでは、買い物リストのレイアウトを掲載しています。my shopping list」のヘッダーが続き、「Enter a new item」に入力フィールドと「add item」ボタンがあります。すでに追加された項目のリストは以下の一覧で、それぞれに対応する削除ボタンがあります。](shopping-list.png)

この課題を完了させるには、以下のステップに従い、上で説明した通りに買い物リストが動くようにして下さい。

1. まず私たちが用意した [shopping-list.html](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list.html) 初期ファイルをダウンロードしてローカルコピーをどこかに作成してください。最小限の CSS、ラベルのついたリスト、input とボタン、空のリストと {{htmlelement("script")}} 要素が書いてあるはずです。この先書き足していくものは全部 script の中に書きます。
2. ({{htmlelement("ul")}}) と {{htmlelement("input")}} と {{htmlelement("button")}} 要素への参照を保持する 3 つの変数を作成します。
3. ボタンがクリックされた時の応答として走らせる[関数](/ja/docs/Learn/JavaScript/Building_blocks/Functions)を作成します。
4. 関数本体は、input 要素の現在の[値](/ja/docs/Web/API/HTMLInputElement#プロパティ)を変数に保存するところから始めます。
5. 次に、input 要素の値に空文字列 (`''`) を代入して、 input 要素を空にします。
6. 3 つの要素を作成します — リスト項目({{htmlelement('li')}}) と {{htmlelement('span')}} と {{htmlelement('button')}} で、これらを変数に保存します。
7. span と button をリスト項目の子に追加します。
8. span のテキストに、先ほど保存した input 要素の値を代入し、ボタンのテキストを「削除」にします。
9. できたリスト項目をリストの子に追加します。
10. 削除ボタンにイベントハンドラーを追加して、クリックされたらボタンが含まれているリスト項目全体を削除するようにします。
11. 最後に、[`focus()`](/ja/docs/Web/API/HTMLElement/focus) メソッドを使って input 要素にフォーカスし、次の買い物リスト商品をすぐに入力できるようにします。

> **メモ:** 本当にどうしようもなく詰まったら、私たちの[完成版の買い物リスト](https://github.com/mdn/learning-area/blob/main/javascript/apis/document-manipulation/shopping-list-finished.html)を見てください（[ライブ実行版](https://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html)も見てください）。

## まとめ

文書と DOM の操作に関する学習は、これで終わりです。この時点で、文書やユーザーのウェブ体験の他の側面をコントロールすることに関して、ウェブブラウザーの重要な部分が何であるかを理解しているはずです。最も重要なことは、ドキュメントオブジェクトモデルとは何か、そして有用な機能を作成するためにそれをどのように操作するかを理解することです。

## 関連情報

文書の操作に使用できる機能は、まだまだたくさんあります。リファレンスも見て、いろいろ発見してください。

- {{domxref("Document")}}
- {{domxref("Window")}}
- {{domxref("Node")}}
- {{domxref("HTMLElement")}}, {{domxref("HTMLInputElement")}}, {{domxref("HTMLImageElement")}}, など

（私たちの [Web API の索引](/ja/docs/Web/API) で、 MDN で文書化されている Web API の全リストを参照できます。）

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}
