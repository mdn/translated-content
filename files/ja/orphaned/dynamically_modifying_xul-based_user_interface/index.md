---
title: Dynamically modifying XUL-based user interface
slug: orphaned/Dynamically_modifying_XUL-based_user_interface
---

この記事では、[DOM](/ja/DOM) やその他の API を使って [XUL](/ja/XUL) インターフェイスを操作する方法について検討します。まず DOM
_ドキュメント_
の概念について説明し、DOM の呼び出しを使ってドキュメントを操作する基本的な方法の例を幾つか実演したのち、 Mozilla 固有のメソッドを使って
_匿名 [XBL](/ja/XBL) コンテント_
を操作する方法を実演します。

この記事は XUL 開発の初心者から中級者を対象にしており、読者が XUL と JavaScript の基本的な知識を持っていることを想定しています。[Document Object Model について](/ja/About_the_Document_Object_Model) の記事や [Gecko DOM リファレンス](/ja/Gecko_DOM_Reference) の [導入ページ](/ja/Gecko_DOM_Reference/Introduction) といった DOM に関する入門記事も必要があればお読み下さい。

### はじめに

ご存知の通り、[XUL](/ja/XUL) は Firefox や Thunderbird のような様々な Mozilla ベースのアプリケーションでユーザーインターフェイスを記述するのに使われている [XML](/ja/XML) 言語です。XUL アプリケーションでは動作を定義するのに [JavaScript](/ja/JavaScript) が使われており、その中では XUL ドキュメントにアクセスするのに [DOM API](/ja/Gecko_DOM_Reference) を使っています。

では **D**ocument **O**bject **M**odel API とは何なのでしょうか？

DOM API はスクリプトとドキュメント間で行われるやり取りのあらゆる所で使われるインターフェイスです。一度でも XUL (または HTML) ドキュメントとやり取りするスクリプトを書いた事があるなら、あなたは既に DOM 呼び出しを使っています。最も有名な DOM メソッドはおそらく [`document.getElementById()`](/ja/DOM/document.getElementById) で、これは与えられた `id` に対応する要素を返します。あなたはそれ以外にも [`element.setAttribute()`](/ja/DOM/element.setAttribute) や、拡張機能を書いた事があるなら [`addEventListener()`](/ja/DOM/element.addEventListener) といった呼び出しを使った事があるかもしれません。これらは全て DOM で定義されているものです。

DOM メソッドには、ドキュメントに要素を作成したり、動かしたり、削除するものもあります。これらは後のセクションで実演します。まずは、
_ドキュメント_
とは何なのかについて学びましょう。

### ドキュメントとは何か？

ドキュメントは DOM API を使って操作できるデータ構造です。あらゆるドキュメントの論理的な構造はツリー状になっており、ノードとしての要素、属性、処理命令、コメントなどで出来ています。ドキュメントのツリー表現を見るには [DOM Inspector](/ja/DOM_Inspector) を使ってください。Todo: XUL ドキュメントとツリーの簡単な例

ドキュメントは、妥当な HTML や整形式の (XHTML や XUL 等の) XML の、メモリ内部の表現とみなす事が出来ます。

異なるウェブページは (同じウェブページの異なるインスタンスであっても) 異なるドキュメントに対応しているということを覚えておく事が重要です。それぞれの XUL ウィンドウはそれ自身の独自のドキュメントを持っており、[`<iframe>`](/ja/XUL/iframe) や [`<browser>`](/ja/XUL/browser) 、[`<tabbrowser>`](/ja/XUL/tabbrowser) 要素を持っている場合には一つのウィンドウにさらに幾つかの異なるドキュメントがあるということになります。このため、扱っているのが適切なドキュメントなのかを常に確認する必要があります。 (詳しくは [chrome コードでウィンドウを扱う](/ja/Working_with_windows_in_chrome_code) を参照。) スクリプトが [`<script>`](/ja/XUL/script) タグを使って読み込まれているなら、`document` プロパティはそのスクリプトが含まれる DOM ドキュメントを参照します。

### DOM メソッドの使用例

このセクションでは DOM メソッドの [`appendChild()`](/ja/DOM/element.appendChild) 、[`createElement()`](/ja/DOM/document.createElement) 、[`insertBefore()`](/ja/DOM/element.insertBefore) 、[`removeChild()`](/ja/DOM/element.removeChild) の使い方を実演します。

#### ある要素の子要素を全て削除する

この例では、id=`someElement` である要素の全ての子要素を現在のドキュメントから削除するために、[`removeChild()`](/ja/DOM/element.removeChild) メソッドを呼び出して子要素が全てなくなるまで最初の子要素を削除しています。

[`hasChildNodes()`](/ja/DOM/element.hasChildNodes) と [`firstChild`](/ja/DOM/element.firstChild) も DOM API の一部です。

```
var element = document.getElementById("someElement");
  while(element.hasChildNodes()){
    element.removeChild(element.firstChild);
  }
```

#### メニューにメニューアイテムを挿入する

この例では [`<menupopup>`](/ja/XUL/menupopup) の最初と最後に二つの新しいメニューアイテムを追加します。アイテムを作成するのには [`document.createElementNS()`](/ja/DOM/document.createElementNS) メソッドを使用しており、作成された xml 要素を [`insertBefore()`](/ja/DOM/element.insertBefore) と [`appendChild()`](/ja/DOM/element.appendChild) を使ってドキュメントに挿入しています。

注:

- [`document.createElementNS()`](/ja/DOM/document.createElementNS) は要素を作成しますが、ドキュメントのどこにもそれを設置しません。新しく作成された要素をドキュメントに挿入するには、[`appendChild()`](/ja/DOM/element.appendChild) のような他の DOM メソッドを使う必要があります。
- [`appendChild()`](/ja/DOM/element.appendChild) はノードを他の全てのノードの後ろに追加するのに対し、[`insertBefore()`](/ja/DOM/element.insertBefore) はノードを 2 つ目のパラメータで参照されたノードの前に挿入します。

```
function createMenuItem(aLabel) {
  const XUL_NS = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul";
  var item = document.createElementNS(XUL_NS, "menuitem"); // 新しい XUL メニューアイテムを作成する
  item.setAttribute("label", aLabel);
  return item;
}
var popup = document.getElementById("myPopup"); // <menupopup> 要素
var first = createMenuItem("First item");
var last = createMenuItem("Last item");
popup.insertBefore(first, popup.firstChild);
popup.appendChild(last);
```

[`appendChild()`](/ja/DOM/element.appendChild) や [`insertBefore()`](/ja/DOM/element.insertBefore) は存在している要素を動かすのにも使えます。例えば次の文を上の例の最後の行に追加すれば、 "First item" とラベルが付けられたアイテムをポップアップの最後に動かす事が出来ます。

```
popup.appendChild(first);
```

この文はノードをドキュメントの現在の位置から削除して、ポップアップの最後に再び挿入します。

### 匿名コンテント (XBL)

[XBL](/ja/XBL) は Mozilla で新しいウィジェットを定義するのに使用される言語です。XBL で定義されたウィジェットは、バインディングが設定される時に、バインドされた要素に挿入するコンテントを定義する事ができます。このコンテントは、
_匿名コンテント_
と呼ばれ、通常の DOM メソッドによってアクセスする事は出来ません。

代わりに、[`nsIDOMDocumentXBL`](/ja/NsIDOMDocumentXBL) インターフェイスのメソッドを使う必要があります。例えば

```
// 与えられたノードの最初の匿名子要素を取得する
document.getAnonymousNodes(node)[0];

// anonid 属性が el1 である匿名要素のノードリストを返す
document.getAnonymousElementByAttribute(node, "anonid", "el1");
```

より多くの情報を得るには XBL リファレンスの [getAnonymousNodes](/ja/XBL/XBL_1.0_Reference/DOM_Interfaces#getAnonymousNodes) と [getAnonymousElementByAttribute](/ja/XBL/XBL_1.0_Reference/DOM_Interfaces#getAnonymousElementByAttribute) を参照して下さい。

匿名ノードを得さえすえば、通常の DOM メソッドを使ってバインディングの残りのノードを操作したり処理する事が出来ます。

### 参照

- [DOM についての関連する章](/ja/XUL_Tutorial/Document_Object_Model)
- [XUL チュートリアル: XUL インターフェイスを変更する](/ja/XUL_Tutorial/Modifying_a_XUL_Interface)
