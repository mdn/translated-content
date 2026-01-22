---
title: ドキュメントオブジェクトモデル (DOM)
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{DefaultAPISidebar("DOM")}}

**ドキュメントオブジェクトモデル** (**Document Object Model**, **DOM**) は、ウェブページを表す HTML のような文書の構造をメモリー内に表現することで、ウェブページとスクリプトやプログラミング言語を接続するものです。ふつうは JavaScript を使用しますが、HTML、SVG、XML などの文書をオブジェクトとしてモデリングすることはコア JavaScript 言語の一部ではありません。

DOM は文書を論理的なツリーで表現します。ツリーのそれぞれの枝はノードで終わっており、それぞれのノードがオブジェクトを含んでいます。 DOM のメソッドでプログラム的にツリーにアクセスできます。これにより、文書構造やスタイルやコンテンツを変更することができます。

ノードにはイベントハンドラーを割り当てることができます。イベントが発生すると、イベントハンドラーが実行されます。

## 概念と使い方

ドキュメントオブジェクトモデル (DOM) はウェブ文書のためのプログラミングインターフェイスです。ページを表現するため、プログラムが文書構造、スタイル、内容を変更することができます。
DOM は文書をノードとオブジェクトで表現します。
そうやって、プログラミング言語をページに接続することができます。

ウェブページは、ブラウザーのウィンドウに表示したり、 HTML ソースとして表示したりすることが可能な文書です。どちらの場合も同じ文書であり、ドキュメントオブジェクトモデル (DOM) で操作することができます。 DOM はウェブページの完全なオブジェクト指向の表現で、 JavaScript のようなスクリプト言語から変更することができます。

例えば、 DOM はこのコードスニペット内にある `querySelectorAll` メソッドが、文書内にあるすべての {{HTMLElement("p")}} 要素のリストを返さなければならないと定義しています。

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] は最初の <p> 要素
// paragraphs[1] は 2 番目の <p> 要素、など
alert(paragraphs[0].nodeName);
```

ウェブページを操作したり、作成したりするために用意されているすべてのプロパティ、メソッド、イベントは、オブジェクトにまとめられています。例えば、文書自身を表現する `document` オブジェクトや、 HTML のテーブルにアクセスするための特別な {{domxref("HTMLTableElement")}} DOM インターフェイスを実装した `table` オブジェクト、などがあります。

現在の DOM は協調して動作する複数 API によって構築されています。
コア DOM は、文書やその中のオブジェクトを基礎的に記述するエンティティを定義しています。
これは必要に応じて DOM に新しい機能や能力を追加する他の API によって拡張されます。
例えば、 [HTML DOM API](/ja/docs/Web/API/HTML_DOM_API) はコア DOM に HTML 文書の表現の対応を、 SVG API は SVG 文書の表現の対応を追加しています。

### DOM ツリーとは

**DOM ツリー**は一種の[ツリー構造](<https://ja.wikipedia.org/wiki/木構造_(データ構造)>)で、ノードが HTML または XML 文書のコンテンツを表します。それぞれの HTML または XML 文書は固有の DOM ツリーの表現を持っています。例えば、以下の文書を見てください。

```html
<html lang="en">
  <head>
    <title>My Document</title>
  </head>
  <body>
    <h1>Header</h1>
    <p>Paragraph</p>
  </body>
</html>
```

これは以下のように見える DOM ツリーを持っています。

![ルートとコンテンツを含むノード要素を保有する文書のツリー状表現としての DOM](using_the_w3c_dom_level_1_core-doctree.jpg)

なお、上位のツリーは上記の文書の DOM ツリーと似ていますが、同じではありません。実際の DOM ツリーは[ホワイトスペース](/ja/docs/Web/CSS/Guides/Text/Whitespace)を温存するからです。

ウェブブラウザーが HTML 文書を解釈するとき、ブラウザーは DOM ツリーを構築し、文書を表示するために使用します。

### DOM と JavaScript

ほぼすべての例と同様に、上の短い例は {{glossary("JavaScript")}} です。つまり、 JavaScript で*書かれて*いますが、しかし DOM を使用してウェブページとその要素にアクセスしています。 DOM はプログラミング言語ではありませんが、これがないと、 JavaScript 言語はウェブページ、 HTML 文書、 SVG 文書、およびその構成部品のモデルや記法を持っていません。文書内のすべての要素 — 全体としての文書、 head、文書内の表、表の見出し、表のセル内のテキスト — は、その文書のドキュメントオブジェクトモデルの一部ですので、 DOM と JavaScript のようなスクリプト言語を通してそれらすべてにアクセスし、操作することができます。

DOM は JavaScript 言語の一部ではなく、ウェブサイトを構築するために使用される Web API の 1 つです。
JavaScript は他のコンテキストで使われることもあります。
例えば、 Node.js はコンピューター上で JavaScript プログラムを実行しますが、異なる API のセットを提供しており、 DOM API は Node.js ランタイムのコア部分にはなりません。

DOM は、特定のプログラミング言語から独立し、文書の構造表現を単一の一貫した API から利用できるように設計されています。
ほとんどのウェブ開発者が JavaScript でしか DOM を使用しないとしても、この Python の例が示すように、 DOM の実装はどの言語でも構築することができます。

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

ウェブで JavaScript を書くためにどのような技術が使われるのかについての詳細は、 [JavaScript 技術概要](/ja/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)をご覧ください。

### DOM へのアクセス

DOM を使い始めるのに、特別なものは必要ありません。
ブラウザーで実行されるプログラムである*スクリプト*と呼ばれるものの中から、 JavaScript で直接 API を使用するのです。

スクリプトを作成すると、インラインの `<script>` 要素であろうと、ウェブページに含まれていようと、すぐに {{domxref("document")}} や {{domxref("Window", "window")}} オブジェクトの API を使って、文書自体やウェブページ内の様々な要素（文書の子孫要素）を操作し始めることができるようになるのです。 DOM プログラミングは、次の例のように、 {{domxref("console/log_static", "console.log()")}} 関数を使ってコンソールにメッセージを表示させるような簡単なものであってもかまいません。

```html
<body onload="console.log('ホームページへようこそ!');">
  …
</body>
```

一般に、ページの構造（HTML で記述）と DOM の操作（JavaScript で記述）を混在させることは推奨されないため、ここでは JavaScript 部分をまとめ、 HTML とは切り離して記述することにします。

例えば、次の関数は、新しい {{HTMLElement("Heading_Elements", "h1")}} 要素を生成し、その要素にテキストを追加し、文書ツリーに追加します。

```html
<html lang="en">
  <head> </head>
  <body>
    <script>
      // 空の HTML ページに 2 つの要素を作成
      const heading = document.createElement("h1");
      const headingText = document.createTextNode("Big Head!");
      heading.appendChild(headingText);
      document.body.appendChild(heading);
    </script>
  </body>
</html>
```

## DOM インターフェイス

以下のインターフェイスは、すべて DOM 仕様書で定義されています。

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("QuotaExceededError")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("ShadowRoot")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}
- {{DOMxRef("XPathEvaluator")}}
- {{DOMxRef("XPathExpression")}}
- {{DOMxRef("XPathResult")}}
- {{DOMxRef("XSLTProcessor")}}

このガイドは、 DOM 階層構造を操作するために利用できるオブジェクトと、実際のものについて触れます。どのように動作するかを理解する上で、混乱を催すかもしれない点がたくさんあります。例えば、 HTML の `form` 要素を表すオブジェクトには、 `name` プロパティが `HTMLFormElement` インターフェイスにある一方、 `className` プロパティが `HTMLElement` インターフェイスにあります。どちらにしても、求めるプロパティはその form オブジェクトの中にあります。

しかし、 DOM で実装されているオブジェクトとインターフェイスの関係は複雑なので、この節では、 DOM の仕様での実際のインターフェイスとそれがどのように利用できるかについて少し説明しようと思います。

### インターフェイスとオブジェクト

多くのオブジェクトは複数のインターフェイスを継承しています。例えば、 table オブジェクトでは、特別な {{domxref("HTMLTableElement")}} インターフェイスを実装しており、そのインターフェイスは `createCaption` や `insertRow` などのメソッドを含んでいます。しかし、 `table` は HTML の要素でもあるので、 DOM の {{domxref("Element")}} リファレンスの章で説明している `Element` インターフェイスも実装しています。さらには、 HTML の要素は、 DOM を考慮する限り、ウェブページや XML ページのオブジェクトモデルを作りあげるノードのツリー内にあるノードもであるので、 table オブジェクトはより基本的な `Node` インターフェイスを、 `Element` から継承して実装しています。

次の例のように、 `table` オブジェクトの参照を入手したときは、おそらく無意識に、このオブジェクトの三つのインターフェイスをごく普通に交互に使います。

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element インターフェイス
for (const attr of tableAttrs) {
  // HTMLTableElement インターフェイス: border 属性
  if (attr.nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// HTMLTableElement インターフェイス: summary 属性
table.summary = "note: increased border";
```

### 基本的なデータ型

このページでは、様々なオブジェクトや型をわかりやすく説明しています。ただし、API 内でやり取りされるデータ型にはいくつかの種類があるため、それらを把握しておく必要があります。

> [!NOTE]
> DOM を使用するコードの大部分は HTML 文書の操作を中心としているため、DOM 内のノードを**要素**と呼ぶのが一般的ですが、厳密にはすべてのノードが要素というわけではありません。

以下の表はこれらのデータの種類を簡単に説明しています。

<table class="standard-table">
  <thead>
    <tr>
      <th>データ型（インターフェイス）</th>
      <th>説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Document")}}</td>
      <td>
        メンバーが <code>document</code> 型のオブジェクトを返すときは（例えば、要素の <code>ownerDocument</code> 属性はそれが属する <code>document</code> を返します）、このオブジェクトはルートの <code>document</code> 要素自身になります。 <a href="/ja/docs/Web/API/Document">DOM <code>document</code> リファレンス</a>の章では <code>document</code> オブジェクトを説明しています。
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        文書内にあるすべてのオブジェクトは何らかの種類のノードです。 HTML 文書では、オブジェクトは要素ノードだけでなく、テキストノードや属性ノードもあります。
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        <code>element</code> 型は <code>node</code> に基づいています。これは要素、すなわち DOM API のメンバーから返される <code>element</code> 型のノードを表します。例えば {{domxref("document.createElement()")}} メソッドは <code>node</code> へのオブジェクト参照を返すというより、このメソッドは単に DOM によって生成された <code>element</code> を返すと言えます。
        <code>element</code> オブジェクトは DOM の <code>Element</code> インターフェイスと、もっと基本的な <code>Node</code> インターフェイスも実装しており、両方がこの参照に含まれます。 HTML 文書では、要素はさらに HTML DOM API の {{domxref("HTMLElement")}} インターフェイスや、特定の種類の要素における能力を記述するためのその他のインターフェイス（例えば {{HTMLElement("table")}} 要素における {{domxref("HTMLTableElement")}}）によって更に拡張されています。
    </tr>
    <tr>
      <td>{{domxref("Attr")}}</td>
      <td>
        <code>attribute</code> が（<code>createAttribute()</code> メソッドなどの）メンバーから返されたとき、属性のための特別な（ただし、小さな）インターフェイスを実装したオブジェクトの参照です。属性は要素のような DOM のノードですが、さほど使われません。
      </td>
    </tr>
  </tbody>
</table>

注意すべき用語の使い方がいくつかあります。例えば、ある {{domxref("Attr")}} ノードを参照するのに単に `attribute` と呼んだり、 DOM ノードの配列を参照するのに `nodeList` と呼んだりします。このような用語は文書を通して紹介され使用されているのが分かるでしょう。

`document` と `window` オブジェクトが一般的に DOM プログラミングの中で最もよく使われます。簡単に言うと、 `window` オブジェクトはブラウザーのようなものを表現し、 `document` オブジェクトは文書のルート自身です。 `Element` は一般的な `Node` インターフェイスを継承していて、あわせてこの 2 つのインターフェイスはここの要素で使われる多くの関数と属性を提供します。前節での `table` オブジェクトの例のように、これの要素はそれぞれが持つデータを扱うための特定のインターフェイスを持っている場合があります。

### 古い DOM インターフェイス

ドキュメントオブジェクトモデルは、高度に単純化されてきています。このため、 DOM レベル 3 以前の仕様書にあった以下のインターフェイスは削除されています。これらはウェブ開発者はもう利用できません。

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

HTML を含む文書は、 HTML 仕様で拡張した様々な HTML 固有の機能を含む {{DOMxRef("Document")}} インターフェイスを使用して記述されます。具体的には、 {{domxref("Element")}} インターフェイスは拡張されて {{domxref("HTMLElement")}} を始めとするサブクラスになっており、それぞれが要素の一つ (または深く関係した同類のもの) を表します。

HTML DOM API によって、タブやウィンドウ、 CSS スタイルやスタイルシート、ブラウザーの履歴など、様々なブラウザーの機能にアクセスすることができます。これらのインターフェイスの詳細については、 [HTML DOM API](/ja/docs/Web/API/HTML_DOM_API) のドキュメントにあります。

## SVG DOM

同様に、 SVG を含む文書も {{DOMxRef("Document")}} インターフェイスを使用して記述されており、 SVG 仕様によって拡張され、さまざまな SVG 固有の機能が含まれています。特に、 {{domxref("Element")}} インターフェイスは拡張されて {{domxref("SVGElement")}} およびさまざまなサブクラスとなり、それぞれが要素または密接に関連する要素の集合を表します。これらのインターフェイスについては、 [SVG API](/ja/docs/Web/API/SVG_API) のドキュメントでさらに詳しく説明されています。

## 例

### テキストコンテンツの設定

この例では、 {{HTMLElement("div")}} 要素に {{HTMLElement("textarea")}} と 2 つの {{HTMLElement("button")}} 要素が入っています。ユーザーが最初のボタンをクリックすると、 `<textarea>` にテキストを設定します。ユーザーが 2 つ目のボタンをクリックすると、そのテキストを消去します。使用しているものは次の通りです。

- {{domxref("Document.querySelector()")}} で `<textarea>` とボタンにアクセスする
- {{domxref("EventTarget.addEventListener()")}} でボタンのクリックを待ち受けする
- {{domxref("Node.textContent")}} でテキストを設定したり消去したりする

#### HTML

```html
<div class="container">
  <textarea class="story"></textarea>
  <button id="set-text" type="button">テキストコンテンツを設定</button>
  <button id="clear-text" type="button">テキストコンテンツを消去</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 200px;
}
```

#### JavaScript

```js
const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "暗くて嵐のような夜でした...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});
```

#### 結果

{{EmbedLiveSample("Setting text content", "", "150px")}}

### 子要素の追加

この例では、 {{HTMLElement("div")}} 要素に {{HTMLElement("div")}} と 2 つの {{HTMLElement("button")}} 要素が入っています。ユーザーが最初のボタンをクリックすると、新しい要素を作成し、 `<div>` の子要素として追加します。ユーザーが 2 つ目のボタンをクリックしたら、子要素を除去します。使用しているものは次の通りです。

- {{domxref("Document.querySelector()")}} で `<div>` とボタンにアクセスする
- {{domxref("EventTarget.addEventListener()")}} でボタンのクリックを待ち受けする
- {{domxref("Document.createElement")}} で要素を作成する
- {{domxref("Node.appendChild()")}} で子要素を追加する
- {{domxref("Node.removeChild()")}} で子要素を除去する

#### HTML

```html
<div class="container">
  <div class="parent">親</div>
  <button id="add-child" type="button">子を追加</button>
  <button id="remove-child" type="button">子を除去</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 100px;
}

div.parent {
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  height: 100px;
}

div.child {
  border: 1px solid red;
  margin: 10px;
  padding: 5px;
  width: 80px;
  height: 60px;
  box-sizing: border-box;
}
```

#### JavaScript

```js
const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // テキストノード「親」の他に、まだ子ノードがない場合のみ、
  // 子ノードを追加します。
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "子";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});
```

#### 結果

{{EmbedLiveSample("Adding a child element", "", "180px")}}

### ツリーの読み取りと変更

製作者が [DOM ツリーとは](#dom_ツリーとは)の文書のヘッダーを変更し、 1 段落ではなく 2 段落で書きたい場合、以下のスクリプトで実現できます。

#### HTML

```html
<html lang="ja">
  <head>
    <title>文書</title>
  </head>
  <body>
    <input type="button" value="この文書を変更" />
    <h2>見出し</h2>
    <p>段落</p>
  </body>
</html>
```

#### JavaScript

```js
document.querySelector("input").addEventListener("click", () => {
  // document.getElementsByTagName("h2") は、文書内の <h2> 要素の NodeList
  // であり、最初のものは 0 番
  const header = document.getElementsByTagName("h2").item(0);

  // header の firstChild はテキストノード
  header.firstChild.data = "動的文書";

  // ヘッダーが "動的文書" になった

  // 最初の段落にアクセス
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "これが最初の段落です。";

  // 2 番目の段落のために新しいテキストノードを生成する
  const newText = document.createTextNode("これが 2 番目の段落です。");

  // 2 番目の段落になる新しい要素を生成する
  const newElement = document.createElement("p");

  // 段落にテキストを置く
  newElement.appendChild(newText);

  // また、（段落の親に当たる)）ody に追加することで、文書の最後に
  // 段落を置く
  para.parentNode.appendChild(newElement);
});
```

{{ EmbedLiveSample('ツリーの読み取りと変更', 800, 300) }}

### ツリーの作成

JavaScript で上記のツリーを完全に作成することもできます。

```js
const root = document.createElement("html");
root.lang = "ja";

const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("My Document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("Header"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraph"));
body.appendChild(header);
body.appendChild(paragraph);

root.appendChild(head);
root.appendChild(body);
```

### イベントの伝播

この例は DOM でイベントが発生したときの対処方法を、ごく単純化して紹介します。下記の HTML 文書の BODY が読み込まれる時、イベントリスナーが TABLE の第 1 行を使って登録されます。イベントリスナーは関数 stopEvent を実行することでイベントを処理します。この関数は、table の一番下のセルの値を変更します。

しかし、stopEvent はまたイベントオブジェクトのメソッド {{domxref("event.stopPropagation")}} を呼び出します。このメソッドはイベントが発生してこれ以上 DOM に入り込むのを防止します。テーブル自体は、クリックされた時、メッセージを表示する必要のある {{domxref("Element.click_event","onclick")}} イベントハンドラーを備えています。しかし stopEvent メソッドは伝播を停止していますので、テーブル内のデータが更新された後では、イベントは効率的に終了し、これを確認するための警告ダイアログが表示されます。

```html
<table id="t-daddy">
  <tr id="tbl1">
    <td id="c1">one</td>
  </tr>
  <tr>
    <td id="c2">two</td>
  </tr>
</table>
```

```css
#t-daddy {
  border: 1px solid red;
}

#c1 {
  background-color: pink;
}
```

```js
function stopEvent(event) {
  const c2 = document.getElementById("c2");
  c2.textContent = "hello";

  // これで t-daddy がクリックされるのを防げるはず
  event.stopPropagation();
  console.log("event propagation halted.");
}

const elem = document.getElementById("tbl1");
elem.addEventListener("click", stopEvent);

document.getElementById("t-daddy").addEventListener("click", () => {
  console.log("t-daddy clicked");
});
```

{{EmbedLiveSample("イベントの伝播", "", "300")}}

### イベントオブジェクトのプロパティの表示

この例では、DOM メソッドを使って、 {{domxref("Window.load_event", "onload")}} [イベント](/ja/docs/Web/API/Event)オブジェクトのプロパティとそれらの値をすべて表として表示しています。また、オブジェクトのプロパティを反復し、それらの値を取得するために、[`for...in`](/ja/docs/Web/JavaScript/Reference/Statements/for...in) ループを使った役に立つテクニックをお見せします。

イベントオブジェクトのプロパティはブラウザーによって大きく異なります。 [WHATWG DOM Standard](https://dom.spec.whatwg.org/) に標準のプロパティが載っていますが、多くのブラウザーはこれらを大幅に拡張しています。

以下のコードをテキストファイルとして保存し、様々なブラウザーで読み込ませてみてください。プロパティの数や名称が異なることに驚かれることでしょう。ページにいくつか要素を追加して、異なるイベントハンドラーからこの関数を呼び出してみるのも良いでしょう。

```html
<h1>DOM <span id="eventType"></span> イベントオブジェクトのプロパティ</h1>
```

```css
table {
  border-collapse: collapse;
}
thead {
  font-weight: bold;
}
td {
  padding: 2px 10px;
}

.odd {
  background-color: #efdfef;
}
.even {
  background-color: white;
}
```

```js
function showEventProperties(e) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  const event = e || window.event;
  document.getElementById("eventType").textContent = event.type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  let row = thead.insertRow(-1);
  const labelList = ["#", "Property", "Value"];
  const len = labelList.length;

  for (let i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const p in event) {
    row = tbody.insertRow(-1);
    row.className = row.rowIndex % 2 ? "odd" : "even";
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, event[p]);
  }

  document.body.appendChild(table);
}

showEventProperties(event);
```

{{EmbedLiveSample("イベントオブジェクトのプロパティの表示", "", "300")}}

## 仕様書

{{Specifications}}

## 関連情報

- [CSS オブジェクトモデル (CSSOM)](/ja/docs/Web/API/CSS_Object_Model)
- [HTML DOM API](/ja/docs/Web/API/HTML_DOM_API)
- [SVG API](/ja/docs/Web/API/SVG_API)
