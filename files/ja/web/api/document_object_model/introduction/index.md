---
title: DOM の紹介
slug: Web/API/Document_Object_Model/Introduction
---

{{DefaultAPISidebar("DOM")}}

**ドキュメントオブジェクトモデル** (Document Object Model, _DOM_) は、ウェブ上の文書のコンテンツと構造からなるオブジェクトのデータ表現です。このガイドでは、簡単に DOM を紹介します。 DOM がどのようにメモリー内で {{Glossary("HTML")}} 文書を表現するか、どのように API を使用してウェブコンテンツやアプリケーションを作成するのかを見てみます。

## DOM とは

ドキュメントオブジェクトモデル (DOM) はウェブ文書のためのプログラミングインターフェイスです。ページを表現するため、プログラムが文書構造、スタイル、内容を変更することができます。 DOM は文書をノードとオブジェクトで表現します。そうやって、プログラミング言語をページに接続することができます。

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
コア [DOM](/ja/docs/Web/API/Document_Object_Model) は、文書やその中のオブジェクトを基礎的に記述するオブジェクトを定義しています。
これは必要に応じて DOM に新しい機能や能力を追加する他の API によって拡張されます。
例えば、 [HTML DOM API](/ja/docs/Web/API/HTML_DOM) はコア DOM に HTML 文書の表現の対応を、 SVG API は SVG 文書の表現の対応を追加しています。

## DOM と JavaScript

ほぼすべての例と同様に、上の短い例は {{glossary("JavaScript")}} です。つまり、 JavaScript で*書かれて*いますが、しかし DOM を*使用*してウェブページとその要素にアクセスしています。 DOM はプログラミング言語ではありませんが、これがないと、 JavaScript 言語はウェブページ、 HTML 文書、 SVG 文書、およびその構成部品のモデルや記法を持っていません。文書内のすべての要素 — 全体としての文書、 head、文書内の表、表の見出し、表のセル内のテキスト — は、その文書のドキュメントオブジェクトモデルの一部ですので、 DOM と JavaScript のようなスクリプト言語を通してそれらすべてにアクセスし、操作することができます。

DOM は JavaScript 言語の一部ではなく、ウェブサイトを構築するために使用される Web API の 1 つです。
JavaScript は他のコンテキストで使われることもあります。
例えば、 Node.js はコンピュータ上で JavaScript プログラムを実行しますが、異なる API のセットを提供しており、 DOM API は Node.js ランタイムのコア部分にはなりません。

DOM は、特定のプログラミング言語から独立し、文書の構造表現を単一の一貫した API から利用できるように設計されています。
ほとんどのウェブ開発者が JavaScript でしか DOM を使用しないとしても、この Python の例が示すように、 DOM の実装はどの言語でも構築することができます。

```python
# Python DOM example
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # DOM property of document object
p_list = doc.getElementsByTagName("para")
```

ウェブで JavaScript を書くためにどのような技術が使われるのかについての詳細は、 [JavaScript 技術概要](/ja/docs/Web/JavaScript/JavaScript_technologies_overview)をご覧ください。

## DOM へのアクセス

DOM を使い始めるのに、特別なものは必要ありません。
ブラウザーで実行されるプログラムである*スクリプト*と呼ばれるものの中から、 JavaScript で直接 API を使用するのです。

スクリプトを作成すると、インラインの `<script>` 要素であろうと、ウェブページに含まれていようと、すぐに {{domxref("document")}} や {{domxref("Window", "window")}} オブジェクトの API を使って、文書自体やウェブページ内の様々な要素（文書の子孫要素）を操作し始めることができるようになるのです。 DOM プログラミングは、次の例のように、 {{domxref("console.log()")}} 関数を使ってコンソールにメッセージを表示させるような簡単なものであってもかまいません。

```html
<body onload="console.log('ホームページへようこそ!');"></body>
```

一般に、ページの構造（HTML で記述）と DOM の操作（JavaScript で記述）を混在させることは推奨されないため、ここでは JavaScript 部分をまとめ、 HTML とは切り離して記述することにします。

例えば、次の関数は、新しい {{HTMLElement("h1")}} 要素を生成し、その要素にテキストを追加し、文書ツリーに追加します。

```html
<html>
  <head>
    <script>
      // この関数は文書が読み込まれた時に実行される
      window.onload = function () {
        // create a couple of elements in an otherwise empty HTML page
        const heading = document.createElement("h1");
        const heading_text = document.createTextNode("Big Head!");
        heading.appendChild(heading_text);
        document.body.appendChild(heading);
      };
    </script>
  </head>
  <body></body>
</html>
```

## 基本的なデータ型

このページでは、様々なオブジェクトと型をなるべく簡単な方法で説明します。しかし、API に渡される、注意しなければならないデータ型はたくさんあります。

> **メモ:** DOM を使用するコードの大部分は HTML 文書の操作を中心としているため、DOM 内のノードを**要素**と呼ぶのが一般的ですが、厳密にはすべてのノードが要素というわけではありません。

以下の表はこれらのデータの種類を簡単に説明しています。

<table class="standard-table">
  <thead>
    <tr>
      <th>データ型 (インターフェイス)</th>
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
      <td>{{domxref("NodeList")}}</td>
      <td>
        <code>nodeList</code> は要素の配列で、例えば {{domxref("document.querySelectorAll()")}} で返されるものなどです。 <code>nodeList</code> の中の項目は、添字を使って以下の 2 通りの方法で取得できます。
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        この二つの方法は等価です。最初の方法では、 <code>item()</code> は <code>nodeList</code> オブジェクトの一つの関数です。後者の方は、一般的な配列の構文を使い、リスト中の二つ目の項目を取得しています。</td>
    </tr>
    <tr>
      <td>{{domxref("Attr")}}</td>
      <td>
        <code>attribute</code> が（<code>createAttribute()</code> メソッドなどの）メンバーから返されたとき、属性のための特別な（ただし、小さな）インターフェイスを実装したオブジェクトの参照です。属性は要素のような DOM のノードですが、さほど使われません。
      </td>
    </tr>
    <tr>
      <td>{{domxref("NamedNodeMap")}}</td>
      <td>
        <code>namedNodeMap</code> は配列のようですが、名前または添字によって項目にアクセスできますが、後者は項目がリスト中に特定の順番で並んでいる訳ではないので、列挙するのに便利であるだけです。このために <code>namedNodeMap</code> には <code>item()</code> メソッドがあり、 <code>namedNodeMap</code> に項目を追加したり、削除したりすることができます。
      </td>
    </tr>
  </tbody>
</table>

注意すべき用語の使い方がいくつかあります。例えば、ある {{domxref("Attr")}} ノードを参照するのに単に `attribute` と呼んだり、 DOM ノードの配列を参照するのに `nodeList` と呼んだりします。このような用語は文書を通して紹介され使用されているのが分かるでしょう。

## DOM インタフェース

このガイドは、 DOM 階層構造を操作するために利用できるオブジェクトと、実際の*もの*について触れます。どのように動作するかを理解する上で、混乱を催すかもしれない点がたくさんあります。例えば、 HTML の `form` 要素を表すオブジェクトには、 `name` プロパティが `HTMLFormElement` インターフェイスにある一方、 `className` プロパティが `HTMLElement` インターフェイスにあります。どちらにしても、求めるプロパティはその form オブジェクトの中にあります。

しかし、 DOM で実装されているオブジェクトとインターフェイスの関係は複雑なので、この節では、 DOM の仕様での実際のインターフェイスとそれがどのように利用できるかについて少し説明しようと思います。

### インターフェイスとオブジェクト

多くのオブジェクトは複数のインターフェイスを受けついでいます。例えば、 table オブジェクトでは、特別な {{domxref("HTMLTableElement")}} インターフェイスを実装しており、そのインターフェイスは `createCaption` や `insertRow` などのメソッドを含んでいます。しかし、 `table` は HTML の要素でもあるので、 DOM の {{domxref("Element")}} リファレンスの章で説明している `Element` インターフェイスも実装しています。さらには、 HTML の要素は、 DOM を考慮する限り、ウェブページや XML ページのオブジェクトモデルを作りあげるノードのツリー内にあるノードもであるので、 table オブジェクトはより基本的な `Node` インターフェイスを、 `Element` から継承して実装しています。

次の例のように、 `table` オブジェクトの参照を入手したときは、おそらく無意識に、このオブジェクトの三つのインターフェイスをごく普通に交互に使います。

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Node/Element インターフェイス
for (let i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement インターフェイス: border 属性
  if (tableAttrs[i].nodeName.toLowerCase() == "border") table.border = "1";
}
// HTMLTableElement インターフェイス: summary 属性
table.summary = "note: increased border";
```

### DOM の中で核となるインターフェイス

この節では、 DOM の中で最もよく使われるインターフェイスを列挙します。API がここで何をしているか記述するのではなく、DOM の中で非常に良く使われる関数や属性をちょっと示すのが狙いです。これらよく使われる API はこの本の最後の [DOM の例](/ja/docs/Web/API/Document_Object_Model/Examples)の章のより長い例の中で使われています。

`document` と `window` オブジェクトが一般的に DOM プログラミングの中で最もよく使われます。簡単に言うと、 `window` オブジェクトはブラウザーのようなものを表現し、 `document` オブジェクトは文書のルート自身です。 `Element` は一般的な `Node` インターフェイスを継承していて、あわせてこの 2 つのインターフェイスはここの要素で使われる多くの関数と属性を提供します。前節での `table` オブジェクトの例のように、これの要素はそれぞれが持つデータを扱うための特定のインターフェイスを持っている場合があります。

以下は、 DOM を使うウェブや XML ページのスクリプトでよく使われる API の簡単な一覧です。

- `{{domxref("document.querySelector", "", "", "1")}}(selector)`
- `{{domxref("document.querySelectorAll", "", "", "1")}}(name)`
- `{{domxref("document.createElement", "", "", "1")}}(name)`
- `parentNode.{{domxref("Node.appendChild", "appendChild", "", "1")}}(node)`
- `element.{{domxref("element.innerHTML", "innerHTML", "", "1")}}`
- `element.{{domxref("HTMLElement/style", "style", "", "1")}}.left`
- `element.{{domxref("element.setAttribute", "setAttribute", "", "1")}}()`
- `element.{{domxref("element.getAttribute", "getAttribute", "", "1")}}()`
- `element.{{domxref("EventTarget.addEventListener", "addEventListener", "", "1")}}()`
- `{{domxref("window.content", "", "", "1")}}`
- `{{domxref("GlobalEventHandlers/onload", "", "", "1")}}`
- `{{domxref("window.scrollTo", "", "", "1")}}()`

## 例

次の簡単な例では、 DOM の {{domxref("Document")}} API の使用方法を説明します。具体的には、{{domxref("Document")}} API の {{domxref("Document.body", "body")}} プロパティを使用して以下のものを変更する例を示しています。

- 文書のテキスト色
- 文書の背景色
- 文書のリンク色 (すなわち、文書内のあらゆる場所のハイパーテキストリンクの色）

```html
<html>
  <head>
    <title>Simple Document API example</title>
    <script>
      function setBodyAttr(attr, value) {
        if (document.body) document.body[attr] = value;
        else throw new Error("no support");
      }
    </script>
  </head>
  <body>
    <div>
      <form>
        <p>
          <b><code>text</code></b>
        </p>
        <select
          onChange="setBodyAttr('text',
        this.options[this.selectedIndex].value);">
          <option value="black">black</option>
          <option value="red">red</option>
        </select>
        <p>
          <b><code>bgColor</code></b>
        </p>
        <select
          onChange="setBodyAttr('bgColor',
        this.options[this.selectedIndex].value);">
          <option value="white">white</option>
          <option value="lightgrey">gray</option>
        </select>
        <p>
          <b><code>link</code></b>
        </p>
        <select
          onChange="setBodyAttr('link',
        this.options[this.selectedIndex].value);">
          <option value="blue">blue</option>
          <option value="green">green</option>
        </select>
        <small>
          <a href="http://some.website.tld/page.html" id="sample">
            (sample link)
          </a>
        </small>
      </form>
    </div>
  </body>
</html>
```

### 結果

{{EmbedLiveSample("Example", "85ch", "263px")}}

## 仕様書

| 仕様書                                              |
| --------------------------------------------------- |
| [DOM Living Standard](https://dom.spec.whatwg.org/) |
