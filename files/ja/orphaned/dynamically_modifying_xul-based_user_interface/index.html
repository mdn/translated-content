---
title: Dynamically modifying XUL-based user interface
slug: orphaned/Dynamically_modifying_XUL-based_user_interface
tags:
  - Add-ons
  - DOM
  - Extensions
  - XUL
original_slug: Dynamically_modifying_XUL-based_user_interface
---
<p>この記事では、<a href="ja/DOM">DOM</a> やその他の API を使って <a href="ja/XUL">XUL</a> インターフェイスを操作する方法について検討します。まず DOM
 <i>
  ドキュメント</i>
 の概念について説明し、DOM の呼び出しを使ってドキュメントを操作する基本的な方法の例を幾つか実演したのち、 Mozilla 固有のメソッドを使って
 <i>
  匿名 <a href="ja/XBL">XBL</a> コンテント</i>
 を操作する方法を実演します。</p>
<p>この記事は XUL 開発の初心者から中級者を対象にしており、読者が XUL と JavaScript の基本的な知識を持っていることを想定しています。<a href="ja/About_the_Document_Object_Model">Document Object Model について</a> の記事や <a href="ja/Gecko_DOM_Reference">Gecko DOM リファレンス</a> の <a href="ja/Gecko_DOM_Reference/Introduction">導入ページ</a> といった DOM に関する入門記事も必要があればお読み下さい。</p>
<h3 id="Introduction">はじめに</h3>
<p>ご存知の通り、<a href="ja/XUL">XUL</a> は Firefox や Thunderbird のような様々な Mozilla ベースのアプリケーションでユーザーインターフェイスを記述するのに使われている <a href="ja/XML">XML</a> 言語です。XUL アプリケーションでは動作を定義するのに <a href="ja/JavaScript">JavaScript</a> が使われており、その中では XUL ドキュメントにアクセスするのに <a href="ja/Gecko_DOM_Reference">DOM API</a> を使っています。</p>
<p>では <b>D</b>ocument <b>O</b>bject <b>M</b>odel API とは何なのでしょうか？</p>
<p>DOM API はスクリプトとドキュメント間で行われるやり取りのあらゆる所で使われるインターフェイスです。一度でも XUL (または HTML) ドキュメントとやり取りするスクリプトを書いた事があるなら、あなたは既に DOM 呼び出しを使っています。最も有名な DOM メソッドはおそらく <code><a href="ja/DOM/document.getElementById">document.getElementById()</a></code> で、これは与えられた <code>id</code> に対応する要素を返します。あなたはそれ以外にも <code><a href="ja/DOM/element.setAttribute">element.setAttribute()</a></code> や、拡張機能を書いた事があるなら <code><a href="ja/DOM/element.addEventListener">addEventListener()</a></code> といった呼び出しを使った事があるかもしれません。これらは全て DOM で定義されているものです。</p>
<p>DOM メソッドには、ドキュメントに要素を作成したり、動かしたり、削除するものもあります。これらは後のセクションで実演します。まずは、
 <i>
  ドキュメント</i>
 とは何なのかについて学びましょう。</p>
<h3 id="What_is_a_document">ドキュメントとは何か？</h3>
<p>ドキュメントは DOM API を使って操作できるデータ構造です。あらゆるドキュメントの論理的な構造はツリー状になっており、ノードとしての要素、属性、処理命令、コメントなどで出来ています。ドキュメントのツリー表現を見るには <a href="ja/DOM_Inspector">DOM Inspector</a> を使ってください。<span class="comment">Todo: XUL ドキュメントとツリーの簡単な例</span></p>
<p>ドキュメントは、妥当な HTML や整形式の (XHTML や XUL 等の) XML の、メモリ内部の表現とみなす事が出来ます。</p>
<p>異なるウェブページは (同じウェブページの異なるインスタンスであっても) 異なるドキュメントに対応しているということを覚えておく事が重要です。それぞれの XUL ウィンドウはそれ自身の独自のドキュメントを持っており、<code><a href="ja/XUL/iframe">&lt;iframe&gt;</a></code> や <code><a href="ja/XUL/browser">&lt;browser&gt;</a></code> 、<code><a href="ja/XUL/tabbrowser">&lt;tabbrowser&gt;</a></code> 要素を持っている場合には一つのウィンドウにさらに幾つかの異なるドキュメントがあるということになります。このため、扱っているのが適切なドキュメントなのかを常に確認する必要があります。 (詳しくは <a href="ja/Working_with_windows_in_chrome_code">chrome コードでウィンドウを扱う</a> を参照。) スクリプトが <code><a href="ja/XUL/script">&lt;script&gt;</a></code> タグを使って読み込まれているなら、<code>document</code> プロパティはそのスクリプトが含まれる DOM ドキュメントを参照します。</p>
<h3 id="Examples:_Using_DOM_methods">DOM メソッドの使用例</h3>
<p>このセクションでは DOM メソッドの <code><a href="ja/DOM/element.appendChild">appendChild()</a></code> 、<code><a href="ja/DOM/document.createElement">createElement()</a></code> 、<code><a href="ja/DOM/element.insertBefore">insertBefore()</a></code> 、<code><a href="ja/DOM/element.removeChild">removeChild()</a></code> の使い方を実演します。</p>
<h4 id="Removing_all_children_of_an_element">ある要素の子要素を全て削除する</h4>
<p>この例では、id=<code>someElement</code> である要素の全ての子要素を現在のドキュメントから削除するために、<code><a href="ja/DOM/element.removeChild">removeChild()</a></code> メソッドを呼び出して子要素が全てなくなるまで最初の子要素を削除しています。</p>
<p><code><a href="ja/DOM/element.hasChildNodes">hasChildNodes()</a></code> と <code><a href="ja/DOM/element.firstChild">firstChild</a></code> も DOM API の一部です。</p>
<pre class="eval">var element = document.getElementById("someElement");
  while(element.hasChildNodes()){
    element.removeChild(element.firstChild);
  }
</pre>
<h4 id="Inserting_menu_items_to_a_menu">メニューにメニューアイテムを挿入する</h4>
<p>この例では <code><a href="ja/XUL/menupopup">&lt;menupopup&gt;</a></code> の最初と最後に二つの新しいメニューアイテムを追加します。アイテムを作成するのには <code><a href="ja/DOM/document.createElementNS">document.createElementNS()</a></code> メソッドを使用しており、作成された xml 要素を <code><a href="ja/DOM/element.insertBefore">insertBefore()</a></code> と <code><a href="ja/DOM/element.appendChild">appendChild()</a></code> を使ってドキュメントに挿入しています。</p>
<p>注:</p>
<ul>
 <li><code><a href="ja/DOM/document.createElementNS">document.createElementNS()</a></code> は要素を作成しますが、ドキュメントのどこにもそれを設置しません。新しく作成された要素をドキュメントに挿入するには、<code><a href="ja/DOM/element.appendChild">appendChild()</a></code> のような他の DOM メソッドを使う必要があります。</li>
 <li><code><a href="ja/DOM/element.appendChild">appendChild()</a></code> はノードを他の全てのノードの後ろに追加するのに対し、<code><a href="ja/DOM/element.insertBefore">insertBefore()</a></code> はノードを 2 つ目のパラメータで参照されたノードの前に挿入します。</li>
</ul>
<pre class="eval">function createMenuItem(aLabel) {
  const XUL_NS = "<span class="nowiki">http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul</span>";
  var item = document.createElementNS(XUL_NS, "menuitem"); // 新しい XUL メニューアイテムを作成する
  item.setAttribute("label", aLabel);
  return item;
}
var popup = document.getElementById("myPopup"); // &lt;menupopup&gt; 要素
var first = createMenuItem("First item");
var last = createMenuItem("Last item");
popup.insertBefore(first, popup.firstChild);
popup.appendChild(last);
</pre>
<p><code><a href="ja/DOM/element.appendChild">appendChild()</a></code> や <code><a href="ja/DOM/element.insertBefore">insertBefore()</a></code> は存在している要素を動かすのにも使えます。例えば次の文を上の例の最後の行に追加すれば、 "First item" とラベルが付けられたアイテムをポップアップの最後に動かす事が出来ます。</p>
<pre class="eval">popup.appendChild(first);
</pre>
<p>この文はノードをドキュメントの現在の位置から削除して、ポップアップの最後に再び挿入します。</p>
<h3 id="Anonymous_content_XBL">匿名コンテント (XBL)</h3>
<p><a href="ja/XBL">XBL</a> は Mozilla で新しいウィジェットを定義するのに使用される言語です。XBL で定義されたウィジェットは、バインディングが設定される時に、バインドされた要素に挿入するコンテントを定義する事ができます。このコンテントは、
 <i>
  匿名コンテント</i>
 と呼ばれ、通常の DOM メソッドによってアクセスする事は出来ません。</p>
<p>代わりに、<code><a href="ja/NsIDOMDocumentXBL">nsIDOMDocumentXBL</a></code> インターフェイスのメソッドを使う必要があります。例えば</p>
<pre class="eval">// 与えられたノードの最初の匿名子要素を取得する
document.getAnonymousNodes(node)[0];

// anonid 属性が el1 である匿名要素のノードリストを返す
document.getAnonymousElementByAttribute(node, "anonid", "el1");
</pre>
<p>より多くの情報を得るには XBL リファレンスの <a href="ja/XBL/XBL_1.0_Reference/DOM_Interfaces#getAnonymousNodes">getAnonymousNodes</a> と <a href="ja/XBL/XBL_1.0_Reference/DOM_Interfaces#getAnonymousElementByAttribute">getAnonymousElementByAttribute</a> を参照して下さい。</p>
<p>匿名ノードを得さえすえば、通常の DOM メソッドを使ってバインディングの残りのノードを操作したり処理する事が出来ます。</p>
<h3 id="See_also">参照</h3>
<ul>
 <li><a href="ja/XUL_Tutorial/Document_Object_Model">DOM についての関連する章</a></li>
 <li><a href="ja/XUL_Tutorial/Modifying_a_XUL_Interface">XUL チュートリアル: XUL インターフェイスを変更する</a></li>
</ul>
