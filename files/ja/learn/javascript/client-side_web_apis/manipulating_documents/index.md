---
title: ドキュメントの操作
slug: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
tags:
  - API
  - Article
  - Beginner
  - CodingScripting
  - DOM
  - Document
  - Document Object Model
  - JavaScript
  - Learn
  - Navigator
  - WebAPI
  - Window
translation_of: Learn/JavaScript/Client-side_web_APIs/Manipulating_documents
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

ウェブページやアプリを書く場合に、最も多く必要になるのはウェブ文書をどうかして操作する事でしょう。これは普通ドキュメントオブジェクトモデル (Document Object Model、DOM) によって為され、DOM は HTML とスタイルに関する情報を {{domxref("Document")}} オブジェクトを多用して操作する一連の API です。この記事では、DOM の使い方を詳しく見ながら、面白い方法であなたの環境を変える事ができる興味深い他の API もいくつか見ていきます。

| 前提条件: | 基本的なコンピュータに関する知識と理解、HTML と CSS、JavaScript—JavaScript のオブジェクトについても—基本を理解していること |
| --------- | -------------------------------------------------------------------------------------------------------------------------- |
| 目的:     | DOM API の核と、DOM と共によく利用される API、ドキュメントの操作について詳しくなること                                     |

## ウェブブラウザーの重要なパーツ

ウェブブラウザーはとてもたくさんの動いている部品からなるソフトウェアの複雑な集合体で、部品の多くはウェブ開発者の JavaScript からでは制御したり操作することはできません。こんな制約はよろしくないと思う方もいるかもしれませんが、ブラウザーが保護されているのには十分な理由があって、これは主にセキュリティ関係のためです。もしあるウェブサイトがあなたが保存しているパスワードやその他の秘密情報にアクセスできて、あなたのふりをして他のサイトにログインできたらどうですか?

制限はあっても、ウェブ API は、ウェブページ上でいろいろ素敵な事をできるように、たくさんの機能を提供してくれます。あなたのコードからよく参照するであろう目に見える代物はほんのわずかです — 下の図を見て下さい、この図はウェブページの表示に直接関与しているブラウザーの主要なパーツを表わしています:

![](document-window-navigator.png)

- ウィンドウはウェブページが読み込まれる部分の回りのブラウザーの枠です。これは JavaScript では {{domxref("Window")}} オブジェクトで表わされます。このオブジェクトに備わるメソッドを使って、ウィンドウの大きさを調べたり ({{domxref("Window.innerWidth")}} と {{domxref("Window.innerHeight")}} を参照)、ウィンドウに読み込まれる文書を操作したり、その文書に関係するデータをクライアント側(例えばローカルデータベースや他のデータ保存機構)で保存したり、現在のウィンドウに対して[イベントハンドラー](/ja/docs/Learn/JavaScript/Building_blocks/Events#A_series_of_fortunate_events) を追加したり、などできます。
- ナビゲータはブラウザーの状態やウェブで使われているようなブラウザーの身元(つまりユーザーエージェント)を表わします。JavaScript では {{domxref("Navigator")}} オブジェクトで表わされます。このオブジェクトを使って、位置情報、ユーザが好む言語、ユーザのウェブカムからの録画データ、などを取得できます。
- ドキュメント(ブラウザーでは DOM として表現されます)はウィンドウに実際に読み込まれているページのことで、JavaScript では {{domxref("Document")}} オブジェクトで表わされます。このオブジェクトを使って文書を構成する HTML と CSS 上の情報を調べたり操作したりできて、例えば DOM の中のある要素に対する参照を得たり、その中身のテキストを変更したり、新しいスタイルを適用したり、新しい要素を作成して現在の要素の子に追加したり、一緒くたに削除したりできます。

この記事では主にドキュメントの操作に着目しますが、それ以外の役に立つこともちょっとお見せしていきます。

## ドキュメントオブジェクトモデル

あなたのブラウザーの一つ一つのタブに今読み込まれているドキュメントは、ドキュメントオブジェクトモデルとして表現されます。これは HTML の構造に対してプログラム言語から簡単にアクセスできるようにブラウザーが作成する、"木構造"による表現です — 例えば、ページをレンダリングする際にはブラウザー自体がスタイルや他の情報を適切な要素に適用するために DOM を使い、ページのレンダリングが終わった後にはあなたのような開発者が JavaScript を使って DOM を操作できます。

[dom-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example.html) にちょっとした例を作成しました([ライブ実行](http://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example.html)もどうぞ)。ブラウザーから開いてみてください — これはとても簡素なページで、{{htmlelement("section")}} 要素の中に画像が一つと、一つのリンクを含む一つのパラグラフがあります。HTML のソースはこんな感じです:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple DOM example</title>
  </head>
  <body>
      <section>
        <img src="dinosaur.png" alt="A red Tyrannosaurus Rex: A two legged dinosaur standing upright like a human, with small arms, and a large head with lots of sharp teeth.">
        <p>Here we will add a link to the <a href="https://www.mozilla.org/">Mozilla homepage</a></p>
      </section>
  </body>
</html>
```

一方これの DOM はこんな具合になります:

![](dom-screenshot.png)

> **Note:** この DOM ツリーの図は Ian Hickson の [Live DOM viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/) を使って作成しました。

これを見ると、それぞれのドキュメント内の要素とちょっとばかりのテキストそれぞれが、ツリーの中でそれ自身のエントリーがあるのがわかるでしょう — これら一つ一つを**ノード**と呼びます。またノードの種類を示す語や、ノードそれぞれの関係によりツリーでの位置があるのがわかるでしょう:

- **エレメント(要素)ノード**: DOM の中での HTML 要素です。
- **ルート(根)ノード**: 木の頂点のノードで、HTML の場合であれば常に `HTML` ノードになります。(SVG や独自の XML といった他のマークアップ言語の方言では異なるルート要素の場合があります)
- **子ノード**: 他のノードに*直結して*含まれるノードです。上の例だと、例えば `IMG` は `SECTION` の子ノードとなります。
- **子孫ノード**: 他のノードに*どのような形であれ*含まれるノードです。上の例だと、例えば `IMG` は `SECTION` の子ノードであり、子孫ノードでもあります。`IMG` は `BODY` の二段階内側にあるので `BODY` の子ノードではありませんが、`BODY` の子孫ノードではあります。
- **親ノード**: その中に他のノードを持つノードです。例えば上の例だと `BODY` は `SECTION` ノードの親ノードになります。
- **兄弟ノード**: DOM ツリーの同じ階層にあるノードです。上の例だと `IMG` と `P` は兄弟ノードになります。
- **テキストノード**: テキスト文字列を含むノードです。

これからコードを見ていくとこういう語が頻出するので、DOM を使い始める前に、これらの用語をしっかり覚えておくと良いでしょう。CSS の勉強をしているときも、これらの語をみかけることでしょう(子孫セレクター、子セレクターとか)。

## 実践学習: 基本的な DOM 操作

DOM 操作の学習スタートは、実践的な例から始めましょう。

1.  [dom-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example.html) と [image](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dinosaur.png) のローカルコピーを一緒に作成して下さい。
2.  `<script></script>` 要素を、閉じ`</body>`タグのすぐ上に追加して下さい。
3.  DOM の中の要素を操作するため、まず DOM を選びだしてこれへの参照を変数に保存する必要があります。script 要素の中に、次の行を追加して下さい:

    ```js
    const link = document.querySelector('a');
    ```

4.  要素への参照を変数に保存したので、これが備えているプロパティとメソッドを使って DOM の操作を始められます (利用できるプロパティとメソッドは、たとえば {{htmlelement("a")}} 要素であれば {{domxref("HTMLAnchorElement")}} インターフェース、さらにその汎化した親のインターフェース {{domxref("HTMLElement")}} や {{domxref("Node")}} — これは DOM の全てノードが相当します — で定義されています)。まずは、リンクの中のテキストを、{{domxref("Node.textContent")}} プロパティを更新する事で変更してみましょう。上で書いた行の下に、次の行を追加して下さい:

    ```js
    link.textContent = 'Mozilla Developer Network';
    ```

5.  クリックされたときに変な場所に行かないよう、リンクが指す先の URL も変えておくべきでしょう。また下に、以下の行を追加して下さい:

    ```js
    link.href = 'https://developer.mozilla.org';
    ```

JavaScript あるあるですが、要素を選んで変数に保存する方法にはいろんなやり方があることを頭に入れておいて下さい。{{domxref("Document.querySelector()")}} を使うのが推奨される今風のやり方ですが、これは CSS セレクタと同じ方法で要素を選別できるからです。上記の `querySelector()` 呼び出しでは文書に現われる最初の {{htmlelement("a")}} がマッチします。もし複数の要素を選択し処理したいのであれば {{domxref("Document.querySelectorAll()")}} を使うことができて、これはセレクタとマッチする全ての要素にマッチし、それらへの参照を {{domxref("NodeList")}} と呼ばれる[配列](/ja/docs/Learn/JavaScript/First_steps/Arrays)のようなオブジェクトに保存します。

要素への参照を得るための、次のような古いやり方もあります:

- {{domxref("Document.getElementById()")}} は要素を指定の `id` 属性値を使って選択します。`<p id="myId">My paragraph</p>` こんなのです。 関数の引数に ID を渡します。 `const elementRef = document.getElementById('myId')` こんな具合です。
- {{domxref("Document.getElementsByTagName()")}} これは指定した種類の全ての要素を配列のようなオブジェクトとして返します、例えば全部の `<p>`、全部の `<a>`など。 要素の種別は関数の引数として渡します。`const elementRefArray = document.getElementsByTagName('p')` こんな具合です。

上の二つは `querySelector()` のような今風のメソッドよりも古いブラウザーで動作しますが、あまり便利ではありません。これ以外にどんなやり方があるかは、あなた自身で探してみて下さい!

### 新しいノードの作成と配置

ここまでで、どんな事ができるのかちょっと見えてきたと思いますが、さらに進んで新しい要素を作る方法を見ていきましょう。

1.  今の例題に戻って、{{htmlelement("section")}} 要素を掴むところから始めましょう — すでに書いてあるスクリプトの下に次のコードを追加して下さい(この先の他の行についても、同じようにやって下さい):

    ```js
    const sect = document.querySelector('section');
    ```

2.  {{domxref("Document.createElement()")}} を使って新しいパラグラフを作り、前やったのと同じ方法でテキストを入れてやりましょう:

    ```js
    const para = document.createElement('p');
    para.textContent = 'We hope you enjoyed the ride.';
    ```

3.  この新しいパラグラフを section の最後に {{domxref("Node.appendChild()")}} を使って追加できます:

    ```js
    sect.appendChild(para);
    ```

4.  このパートの締めとして、文章がうまいことまとまるように、リンクを含んでいるパラグラフに対してテキストノードを追加しましょう。まずテキストノードを {{domxref("Document.createTextNode()")}} を使って作成します:

    ```js
    const text = document.createTextNode(' — the premier source for web development knowledge.');
    ```

5.  リンクを含んだパラグラフへの参照を取り出して、そこにテキストノードを追加します:

    ```js
    const linkPara = document.querySelector('p');
    linkPara.appendChild(text);
    ```

以上が DOM にノードを追加するために必要な事のほぼ全てです — 動的なインターフェースを作成する際(あとでそういう例題をいくつか見ていきます)これらのメソッドをめっちゃ使う事になるでしょう。

### 要素を移動したり削除したり

ノードを移動したり、DOM から削除したくなる場合があると思います。勿論できます。

リンクを含むパラグラフを section の最後に移動したい場合は、こうするだけです:

```js
sect.appendChild(linkPara);
```

これでパラグラフは section の一番下に移動します。コピーが作成されるだけじゃないのかとお思いかもしれませんが、この場合は違います — `linkPara` はパラグラフへの参照の唯一のコピーです。もしコピーをした上で同じように追加をしたいのであれば、 {{domxref("Node.cloneNode()")}} をかわりに使う必要があります。

削除したいノードとその親ノードへの参照を得ていれば、ノードを削除するのも非常に簡単です。今の例題であれば、以下のように {{domxref("Node.removeChild()")}} を使うだけです:

```
sect.removeChild(linkPara);
```

よくあるケースですが、削除したいノードそのものへの参照しかない場合に、{{domxref("ChildNode.remove()")}} が使えます:

```js
linkPara.remove();
```

このメソッドは、古いブラウザーではサポートされていません。 ノードにそれ自体を削除するように指示するメソッドはないので、次のようにしなければなりません。

```js
linkPara.parentNode.removeChild(linkPara);
```

上の行をあなたのコードに追加してやってみて下さい。

### スタイルを操作する

いろんなやり方で CSS スタイルを JavaScript から操作することができます。

まず、ドキュメントに付随する全部のスタイルシートのリストは {{domxref("Document.stylesheets")}} を使って得られ、これは {{domxref("CSSStyleSheet")}} オブジェクトを含む配列のようなオブジェクトを返します。そうしたらお望みのままにスタイルを追加したり削除したりできます。ですがこのやり方について詳しくはやりません。なぜならスタイルをいじるにはちょっとばかり古風で難しいやり方だからです。もっと簡単なやり方があります。

まずは、動的にスタイルを指定したい要素に、インラインスタイルを直接追加するやり方です。これには {{domxref("HTMLElement.style")}} プロパティを使い、このプロパティはドキュメント中の各素要のインラインスタイル情報を保持しています。このオブジェクトのプロパティを更新すれば要素のスタイルを直接変更できます。

1.  例として、作成中の例題に以下の行を追加してみて下さい:

    ```js
    para.style.color = 'white';
    para.style.backgroundColor = 'black';
    para.style.padding = '10px';
    para.style.width = '250px';
    para.style.textAlign = 'center';
    ```

2.  ページをリロードすると指定のパラグラフにスタイルが適用されているはずです。ブラウザーの [Page Inspector や DOM inspector](/ja/docs/Tools/Page_Inspector) からパラグラフを見ると、言うまでもなく上の行がドキュメントのインラインスタイルに追加されているはずです:

    ```html
    <p style="color: white; background-color: black; padding: 10px; width: 250px; text-align: center;">We hope you enjoyed the ride.</p>
    ```

> **Note:** CSS ではハイフン記法になっているものを、JavaScript プロパティ版の CSS スタイルはどんな風に小文字のキャメルケースで書いている(`background-color` と `backgroundColor` とか)か見ておいて下さい。まぜこぜにしないよう注意して下さい、さもないと動きませんよ。

ドキュメントのスタイルを動的にいじる際によく使われる別のやり方をこれから見ていきましょう。

1.  さっき JavaScript に追加した 5 行を削除します。
2.  HTML の {{htmlelement("head")}} の中に、以下を追加します:

    ```
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

3.  さて、多くの HTML 操作においてとても役に立つメソッドをお見せします — {{domxref("Element.setAttribute()")}} — これはに二つの引数、要素に設定したい属性名と、属性に設定したい値、を与えます。この場合だと、我々のパラグラフにクラス名、highlight をセットします:

    ```js
    para.setAttribute('class', 'highlight');
    ```

4.  ページをリロードしても何も変わりません — パラグラフには CSS が今も適用されていますが、今回はクラスを指定して CSS ルールが選んでいて、インライン CSS スタイルによるものではありません。

どうやるかはあなた次第です。それぞれに利点と欠点があります。最初のやり方は少ない設定ですみ、簡単な場合には向いていますが、二つ目のやり方はずっときれいです (よくないやり方とされる、CSS と JavaScript の混在やインラインスタイルの使用がありません)。もっと大規模で複雑なアプリを作り始めたら、多分二つ目のやり方をよく使うようになると思いますが、結局はホントにあなた次第です。

ここまで、実はそれほど役に立つことをやってません! 静的なコンテンツの作成に JavaScript を使う利点はありません — JavaScript など使わず、普通に HTML に書けば良いんです。HTML よりややこしいですし、コンテンツを JavaScript で作成するのは他にも問題があります (検索エンジンで読めない、とか)。

次の二つのセクションでは、DOM API のもっと実践的な使い方を見ていきます。

> **Note:** 私たちによる [dom-example.htm l 完成版](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/dom-example-manipulated.html) のデモが GitHub にあります ([ライブ実行もどうぞー](http://mdn.github.io/learning-area/javascript/apis/document-manipulation/dom-example-manipulated.html))。

## 実践学習: ウィンドウオブジェクトから使える情報を取り出す

ここまででは文書を操作するための {{domxref("Node")}} と {{domxref("Document")}} の機能ばかり見てきましたが、他のソースからデータを取ってきてあなたの UI で使ったって勿論かまわないわけです。あなたはデータが正しい形式である事を確認するだけです。これは JavaScript が弱い型付け言語であるために、他の多く言語の場合よりも簡単です — 例えば画面に表示しようとしたとき、数値は自動的に文字列に変換されます。

ここの例題ではよくある問題を解決していきます — あなたのアプリを表示しているウィンドウがどんな大きさであれ、それを同じ大きさになるようにすることです。これはゲームのような、表示する画面領域をできるだけ大きくしたいような場合に、しばしば役に立ちます。

まずは [window-resize-example.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/window-resize-example.html) と [bgtile.png](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/bgtile.png) ファイルのローカルコピーを作成して下さい。読み込んで見てみて下さい — 背景に画像がタイル表示された、{{htmlelement("div")}} 要素が画面に小さく表示されているでしょう。この領域が、私たちのアプリの UI 領域だとしていきます。

1.  まず最初に、div への参照を取得し、ビューポート (ドキュメントが表示されている内側のウィンドウです) の幅と高さを取得して、これらを変数に保存します。便利なことに幅と高さの値は {{domxref("Window.innerWidth")}} と {{domxref("Window.innerHeight")}} プロパティにあります。以下の行を、もう書いてある {{htmlelement("script")}} の中に書き足します:

    ```js
    const div = document.querySelector('div');
    let winWidth = window.innerWidth;
    let winHeight = window.innerHeight;
    ```

2.  次は、動的に div の幅と高さをビューポートのものと同じにします。次の二行を、さっき追加した部分の後に書き足して下さい:

    ```js
    div.style.width = winWidth + 'px';
    div.style.height = winHeight + 'px';
    ```

3.  保存してブラウザーで読み直してみて下さい — どんな大きさの画面を使っているのであれ、div がビューポートと同じ大きさになったはずです。ウィンドウが大きくなるようにリサイズしてみても、div の大きさは変わらないはずです — 一度しか大きさを設定していないからです。
4.  ウィンドウがリサイズされた時に div もリサイズされるよう、イベントを使ってみるのはどうでしょう? {{domxref("Window")}} オブジェクトにはリサイズされた時に呼ばれるイベントがあって、ウィンドウがリサイズされる毎発火します — この機能を {{domxref("Window.onresize")}} イベントハンドラーから使って、リサイズされる毎私たちのコードが再実行されるようにしてみましょう。あなたのコードの最後に以下を書き足して下さい:

    ```js
    window.onresize = function() {
      winWidth = window.innerWidth;
      winHeight = window.innerHeight;
      div.style.width = winWidth + 'px';
      div.style.height = winHeight + 'px';
    }
    ```

> **Note:** もし行き詰まったら、私たちによる [完成版ウィンドウリサイズ例題](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/window-resize-example-finished.html) ([ライブ実行版もあるよ](http://mdn.github.io/learning-area/javascript/apis/document-manipulation/window-resize-example-finished.html)) を見て下さい。

## 実践学習: 動的な買い物リスト

この記事の締めとして、あなたにちょっとした難題を出したいと思います — 単純な買い物リストの例を作ってもらいます。フォーム入力(input)とボタンからリストに動的に商品を追加できるようにします。input に商品を入力してボタンを押したら:

- 商品がリストに表示されなければならない。
- それぞれの商品にはボタンが付いていて、それを押すとその商品をリストから消せなければならない。
- 次の商品をすぐに入力できるよう、input の中身は消されてフォーカスされていなければならない。

完成版のデモはこんな感じになるでしょう:

![](shopping-list.png)

この課題を完了させるには、以下のステップに従い、上で説明した通りに買い物リストが動くようにして下さい。

1.  まず私たちが用意した [shopping-list.html](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/shopping-list.html) 初期ファイルをダウンロードしてローカルコピーをどこかに作成します。最小限の CSS、ラベルのついたリスト、input とボタン、空のリストと {{htmlelement("script")}} 要素が書いてあるはずです。この先書き足していくものは全部 script の中に書きます。
2.  ({{htmlelement("ul")}}) と {{htmlelement("input")}} と {{htmlelement("button")}} 要素への参照を保持する 3 つの変数を作成します。
3.  ボタンがクリックされた時の応答として走らせる [関数](/ja/docs/Learn/JavaScript/Building_blocks/Functions) を作成します。
4.  関数本体は、input 要素の現在の [値](/ja/docs/Web/API/HTMLInputElement#Properties)を変数に保存するところから始めます。
5.  次に、input 要素の値に空文字列(`''`)を代入して、input 要素を空にします。
6.  3 つの要素を作成します — リスト項目({{htmlelement('li')}}) と {{htmlelement('span')}} と {{htmlelement('button')}} で、これらを変数に保存します。
7.  span と button をリスト項目 li の子に追加します。
8.  span のテキストコンテントに、先程保存した input 要素の値を代入し、ボタンのテキストコンテントを「削除」にします。
9.  できたリスト項目をリストの子に追加します。
10. 削除ボタンにイベントハンドラーを追加して、クリックされたらボタンが含まれているリスト項目全体を削除するようにします。
11. 最後に、[`focus()`](/ja/docs/Web/API/HTMLElement/focus)メソッドを使って input 要素にフォーカスし、次の買い物リスト商品をすぐに入力できるようにします。

> **Note:** 本当にどうしようもなく詰まったら、私たちの [完成版買い物リスト](https://github.com/mdn/learning-area/blob/master/javascript/apis/document-manipulation/shopping-list-finished.html) ([ライブ実行版もあるよ](http://mdn.github.io/learning-area/javascript/apis/document-manipulation/shopping-list-finished.html))を見て下さい。

## まとめ

私たちのドキュメントと DOM 操作に関する学習はこれで終わりです。ここまでくれば、ドキュメントの制御やユーザのウェブ体験に関するブラウザーの重要な部品は何か、理解できたと思います。一番大事な DOM とは何か、役に立つ機能を作るのにこれをどう使えば良いのか理解できたと思います。

## 参考文献

ドキュメントをいじるのに役立つ機能はたくさんあります。私たちのリファレンスも見て、いろいろ発見して下さい:

- {{domxref("Document")}}
- {{domxref("Window")}}
- {{domxref("Node")}}
- {{domxref("HTMLElement")}}, {{domxref("HTMLInputElement")}}, {{domxref("HTMLImageElement")}}, etc.

(私共の [Web API index](/ja/docs/Web/API) から、MDN にあるウェブ API に関する全ドキュメント一覧も見て下さい!)

{{PreviousMenuNext("Learn/JavaScript/Client-side_web_APIs/Introduction", "Learn/JavaScript/Client-side_web_APIs/Fetching_data", "Learn/JavaScript/Client-side_web_APIs")}}

## このモジュール内の文書

- [ウェブ API の紹介](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
- [ドキュメントの操作](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
- [サーバからのデータ取得](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)
- [サードパーティ API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
- [絵を描く](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [動画と音声の API](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
- [クライアント側でのデータ保持](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
